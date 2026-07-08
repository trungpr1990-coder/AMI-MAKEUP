// scan-and-post.js — Quét bảng "Đăng YouTube" (Lark Base), đăng video đến hạn lên YouTube.
// Chạy trên GitHub Actions (cron 30 phút) hoặc chạy tay `node scan-and-post.js [--dry-run]`.
// Chống chạy chồng: dùng `concurrency` của GitHub Actions (workflow yml), KHÔNG dùng lockfile cục bộ
// — khớp kiến trúc hệ thống đăng Reel Facebook (mỗi lần chạy CI là 1 container mới, không có state cũ).
'use strict';
const fs = require('fs');
const path = require('path');
const cfg = require('./config');
const lark = require('./lark');
const { uploadVideo } = require('./youtube');

const DRY = process.argv.includes('--dry-run');

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  try { fs.appendFileSync(cfg.LOG_FILE, line + '\n'); } catch (_) {}
}

// Field "Ngày giờ đăng": OpenAPI trả DateTime dạng epoch ms (number). Cũng chấp nhận chuỗi
// "2026-06-17 10:00" (giờ địa phương) cho tương thích. Rỗng → null (đăng ngay).
function parseLocal(val) {
  if (typeof val === 'number' && val > 0) return new Date(val);
  if (!val || typeof val !== 'string') return null;
  const m = val.trim().match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?/);
  if (!m) return null;
  return new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +(m[6] || 0));
}

function cleanup(files) {
  for (const f of files) { try { if (f && fs.existsSync(f)) fs.unlinkSync(f); } catch (_) {} }
}

async function processOne(rec) {
  const tmpFiles = [];
  const title = rec.get(cfg.FIELDS.tieuDe) || 'Video';
  try {
    if (DRY) { log(`[DRY] Sẽ đăng: "${title}"`); return { ok: true }; }

    await lark.updateRecord(rec.record_id, { [cfg.FIELDS.trangThai]: cfg.STATUS.dang });

    const vids = rec.attachments(cfg.FIELDS.video);
    if (!vids.length) throw new Error('Chưa đính kèm Video trong record.');
    const videoPath = await lark.downloadAttachment(rec.record_id, vids[0].file_token, cfg.TMP_DIR, vids[0].name);
    tmpFiles.push(videoPath);

    let thumbnailPath = null;
    const thumbs = rec.attachments(cfg.FIELDS.thumbnail);
    if (thumbs.length) {
      thumbnailPath = await lark.downloadAttachment(rec.record_id, thumbs[0].file_token, cfg.TMP_DIR, thumbs[0].name);
      tmpFiles.push(thumbnailPath);
    }

    const tags = String(rec.get(cfg.FIELDS.tags) || '').split(',').map((s) => s.trim()).filter(Boolean);
    const loai = rec.sel(cfg.FIELDS.loai);
    let description = rec.get(cfg.FIELDS.moTa) || '';
    if (loai === 'Shorts' && !/#shorts/i.test(description)) {
      description = (description ? description + '\n\n' : '') + '#Shorts';
    }
    const cheDo = rec.sel(cfg.FIELDS.cheDo);
    const privacyStatus = cfg.PRIVACY_MAP[cheDo] || 'private'; // an toàn: không chọn Chế độ -> Riêng tư, KHÔNG mặc định public
    const playlistId = (rec.get(cfg.FIELDS.playlist) || '').trim() || null;
    const channelName = rec.sel(cfg.FIELDS.kenh) || '';

    log(`Đang đăng: "${title}" (${loai || 'Video dài'}, ${privacyStatus}${channelName ? ', kênh: ' + channelName : ''})`);

    const out = await uploadVideo({ videoPath, title, description, tags, privacyStatus, thumbnailPath, playlistId, channelName });

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
    if (!DRY) {
      try {
        await lark.updateRecord(rec.record_id, {
          [cfg.FIELDS.trangThai]: cfg.STATUS.loi,
          [cfg.FIELDS.ghiChuLoi]: msg.slice(0, 500),
        });
      } catch (_) {}
    }
    log(`❌ LỖI khi đăng "${title}": ${msg}`);
    return { ok: false, quota };
  } finally {
    cleanup(tmpFiles);
  }
}

async function main() {
  const all = await lark.listRecords();
  const now = Date.now();

  const due = all.filter((r) => {
    if (cfg.RECORD_ID) return r.record_id === cfg.RECORD_ID; // nút "Run workflow" bấm 1 dòng cụ thể
    if (r.sel(cfg.FIELDS.trangThai) !== cfg.STATUS.cho) return false;
    if (!cfg.RESPECT_SCHEDULE) return true;
    const t = parseLocal(r.get(cfg.FIELDS.ngayGio));
    if (t === null) return true; // rỗng = đăng ở lần quét tới
    // Cron tự động: chỉ đăng khi ĐÃ tới giờ hẹn. Chạy tay (không phải cron): đăng ngay không cần chờ giờ.
    return cfg.SCHEDULE_MODE ? t.getTime() <= now : true;
  }).sort((a, b) => {
    const ta = parseLocal(a.get(cfg.FIELDS.ngayGio)); const tb = parseLocal(b.get(cfg.FIELDS.ngayGio));
    return (ta ? ta.getTime() : 0) - (tb ? tb.getTime() : 0);
  });

  if (!due.length) { log('Không có video đến hạn.'); return; }
  log(`Có ${due.length} video đến hạn.`);

  for (const rec of due) {
    const res = await processOne(rec);
    if (res.quota) { log('⚠️ Chạm quota YouTube — dừng, để dành cho lượt sau.'); break; }
  }
}

main().catch((e) => { console.error('LỖI tổng:', e.message || e); process.exit(1); });
