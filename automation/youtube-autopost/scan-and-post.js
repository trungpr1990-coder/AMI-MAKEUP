// scan-and-post.js — Quét bảng "Lịch đăng YouTube", đăng video đến hạn, cập nhật trạng thái.
// Chạy định kỳ qua GitHub Actions (cron). Có lockfile chống chạy chồng (khi chạy local).
const fs = require('fs');
const path = require('path');
const cfg = require('./config');
const lark = require('./lark');
const { uploadVideo } = require('./youtube');

const LOCK = path.join(__dirname, '.post.lock');

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  try { fs.appendFileSync(cfg.LOG_FILE, line + '\n'); } catch (_) {}
}

// Field "Ngày giờ đăng": OpenAPI trả DateTime dạng epoch ms (number). Cũng chấp nhận chuỗi
// "2026-06-17 10:00" (giờ địa phương) cho tương thích. Rỗng → null (đăng ngay).
function parseLocal(val) {
  if (typeof val === 'number' && val > 0) return new Date(val); // DateTime field → epoch ms
  if (!val || typeof val !== 'string') return null;
  const m = val.trim().match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?/);
  if (!m) return null;
  return new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +(m[6] || 0));
}

function acquireLock() {
  try {
    if (fs.existsSync(LOCK)) {
      const age = Date.now() - fs.statSync(LOCK).mtimeMs;
      if (age < 30 * 60 * 1000) return false; // lock còn hiệu lực (<30 phút)
      fs.unlinkSync(LOCK); // lock cũ kẹt → bỏ
    }
    fs.writeFileSync(LOCK, String(process.pid));
    return true;
  } catch (_) { return false; }
}
function releaseLock() { try { fs.unlinkSync(LOCK); } catch (_) {} }

function cleanup(files) {
  for (const f of files) { try { if (f && fs.existsSync(f)) fs.unlinkSync(f); } catch (_) {} }
}

async function processOne(rec) {
  const tmpFiles = [];
  const title = rec.get(cfg.FIELDS.tieuDe) || 'Video';
  try {
    // 1) Khóa record: chuyển "Đang đăng"
    await lark.updateRecord(rec.record_id, { [cfg.FIELDS.trangThai]: cfg.STATUS.dang });

    // 2) Lấy video
    const vids = rec.attachments(cfg.FIELDS.video);
    if (!vids.length) throw new Error('Chưa đính kèm Video trong record.');
    const videoPath = await lark.downloadAttachment(rec.record_id, vids[0].file_token, cfg.TMP_DIR, vids[0].name);
    tmpFiles.push(videoPath);

    // 3) Thumbnail (tùy chọn)
    let thumbnailPath = null;
    const thumbs = rec.attachments(cfg.FIELDS.thumbnail);
    if (thumbs.length) {
      thumbnailPath = await lark.downloadAttachment(rec.record_id, thumbs[0].file_token, cfg.TMP_DIR, thumbs[0].name);
      tmpFiles.push(thumbnailPath);
    }

    // 4) Metadata
    const tags = String(rec.get(cfg.FIELDS.tags) || '').split(',').map((s) => s.trim()).filter(Boolean);
    const loai = rec.sel(cfg.FIELDS.loai);
    let description = rec.get(cfg.FIELDS.moTa) || '';
    if (loai === 'Shorts' && !/#shorts/i.test(description)) {
      description = (description ? description + '\n\n' : '') + '#Shorts';
    }
    const cheDo = rec.sel(cfg.FIELDS.cheDo);
    const privacyStatus = cfg.PRIVACY_MAP[cheDo] || 'public';
    const playlistId = (rec.get(cfg.FIELDS.playlist) || '').trim() || null;
    const channelName = rec.sel(cfg.FIELDS.kenh) || ''; // cột "Kênh": rỗng = kênh mặc định

    log(`Đang đăng: "${title}" (${loai || 'Video dài'}, ${privacyStatus}${channelName ? ', kênh: ' + channelName : ''})`);

    // 5) Upload (đúng kênh theo cột "Kênh")
    const out = await uploadVideo({ videoPath, title, description, tags, privacyStatus, thumbnailPath, playlistId, channelName });

    // 6) Ghi kết quả
    await lark.updateRecord(rec.record_id, {
      [cfg.FIELDS.trangThai]: cfg.STATUS.xong,
      [cfg.FIELDS.linkVideo]: out.url,
      [cfg.FIELDS.ghiChuLoi]: '',
    });
    log(`✅ ĐÃ ĐĂNG: "${title}" → ${out.url}`);
    return { ok: true };
  } catch (e) {
    const msg = (e && e.message) ? e.message : String(e);
    const quota = /quota/i.test(msg) || /403/.test(msg);
    try {
      await lark.updateRecord(rec.record_id, {
        [cfg.FIELDS.trangThai]: cfg.STATUS.loi,
        [cfg.FIELDS.ghiChuLoi]: msg.slice(0, 500),
      });
    } catch (_) {}
    log(`❌ LỖI khi đăng "${title}": ${msg}`);
    return { ok: false, quota };
  } finally {
    cleanup(tmpFiles);
  }
}

async function main() {
  if (!acquireLock()) { log('Có tiến trình khác đang chạy — bỏ lượt này.'); return; }
  try {
    const all = await lark.listRecords();
    const now = Date.now();
    // RESPECT_SCHEDULE=false ("Đăng ngay") → đăng mọi dòng "Chờ đăng" bất kể lịch. Mặc định true.
    const respectSchedule = process.env.RESPECT_SCHEDULE !== 'false';
    const due = all.filter((r) => {
      if (r.sel(cfg.FIELDS.trangThai) !== cfg.STATUS.cho) return false;
      if (!respectSchedule) return true; // đăng ngay, bỏ qua "Ngày giờ đăng"
      const t = parseLocal(r.get(cfg.FIELDS.ngayGio));
      return t === null ? true : t.getTime() <= now; // rỗng = đăng ngay
    }).sort((a, b) => {
      const ta = parseLocal(a.get(cfg.FIELDS.ngayGio)); const tb = parseLocal(b.get(cfg.FIELDS.ngayGio));
      return (ta ? ta.getTime() : 0) - (tb ? tb.getTime() : 0); // cũ nhất trước
    });

    if (!due.length) { log('Không có video đến hạn.'); return; }
    log(`Có ${due.length} video đến hạn.`);

    for (const rec of due) {
      const res = await processOne(rec);
      if (res.quota) { log('⚠️ Chạm quota YouTube — dừng, để dành cho lượt sau.'); break; }
    }
  } catch (e) {
    log('LỖI tổng: ' + (e.message || e));
  } finally {
    releaseLock();
  }
}

main();
