// viet-tieu-de-ai.js — AI (Claude vision) tự xem 1 khung hình trích từ VIDEO đã đính trong bảng
// "Đăng YouTube" và viết Tiêu đề + Mô tả + Tags khi cột "Tiêu đề" đang để trống.
// KHÔNG tự đặt Trạng thái = "Chờ đăng" — người dùng phải tự xem lại rồi mới đặt Trạng thái
// (bước duyệt bắt buộc, giống hệt cách hệ thống viet-noi-dung-ai.js làm cho Facebook Reel).
//
// Cần ffmpeg trong PATH để trích khung hình từ video (có sẵn mặc định trên GitHub ubuntu-latest).
// Biến môi trường: LARK_APP_ID, LARK_APP_SECRET, YT_BASE_TOKEN, YT_TABLE_ID,
//                   ANTHROPIC_API_KEY (bắt buộc), ANTHROPIC_MODEL (tuỳ chọn).
//
// Chạy: node viet-tieu-de-ai.js            (viết thật)
//       node viet-tieu-de-ai.js --dry-run  (chỉ liệt kê dòng sẽ xử lý, KHÔNG gọi AI, KHÔNG ghi Base)
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const cfg = require('./config');
const lark = require('./lark');

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || '';
const ANTHROPIC_MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-5';
const DRY = process.argv.includes('--dry-run');
if (!DRY && !ANTHROPIC_API_KEY) { console.error('!! Thiếu ANTHROPIC_API_KEY.'); process.exit(1); }

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`;
  console.log(line);
  try { fs.appendFileSync(cfg.LOG_FILE, line + '\n'); } catch (_) {}
}

const BRAND_VOICE = `Viết như Thuý Trần — Makeup Artist & giảng viên đào tạo makeup tại Nam Định:
- Vui tươi, thân thiện, giọng miền Bắc (dùng vài cách nói Bắc tự nhiên), câu ngắn dễ đọc thành tiếng
- Có kinh nghiệm nhưng không tự phụ — giải thích dễ hiểu với người không rành makeup
- Tiêu đề YouTube: ngắn gọn, gây tò mò, KHÔNG giật tít sai sự thật, tối đa 100 ký tự
- Mô tả: mở đầu gây chú ý 1-2 câu, có 1-2 điểm chính, kết bằng lời mời tương tác nhẹ nhàng
- KHÔNG bịa số liệu, cam kết, giá cả, hay lời hứa cụ thể
- KHÔNG tự ý nhắc tên người/địa điểm/chi tiết không thấy rõ trong khung hình`;

// Trích 1 khung hình từ video bằng ffmpeg (thử giây 1, rơi về giây 0 nếu video quá ngắn).
// Ném lỗi kèm stderr thật của ffmpeg ở lần thử cuối để dễ chẩn đoán (thay vì nuốt lỗi im lặng).
function extractFrame(videoPath, outPath) {
  let lastErr = null;
  for (const ss of ['00:00:01', '00:00:00']) {
    try {
      execFileSync('ffmpeg', ['-y', '-ss', ss, '-i', videoPath, '-frames:v', '1', '-q:v', '2', outPath], { stdio: ['ignore', 'pipe', 'pipe'] });
      if (fs.existsSync(outPath) && fs.statSync(outPath).size > 0) return;
    } catch (e) { lastErr = e; }
  }
  const stderr = lastErr ? (lastErr.stderr ? lastErr.stderr.toString().slice(-500) : String(lastErr.message || lastErr)) : 'không rõ';
  throw new Error('ffmpeg trích khung hình thất bại: ' + stderr);
}

function imageContentBlock(filePath) {
  const data = fs.readFileSync(filePath).toString('base64');
  return { type: 'image', source: { type: 'base64', media_type: 'image/jpeg', data } };
}

function parseJsonFromText(text) {
  const start = text.indexOf('{'), end = text.lastIndexOf('}');
  if (start < 0 || end < 0) throw new Error('AI không trả JSON hợp lệ: ' + text.slice(0, 300));
  return JSON.parse(text.slice(start, end + 1));
}

async function titleFromFrame(framePath) {
  const block = imageContentBlock(framePath);
  const systemPrompt = BRAND_VOICE +
    '\n\nQUAN TRỌNG: Chỉ trả lời bằng JSON hợp lệ, không thêm chữ nào khác, đúng khuôn: ' +
    '{"title": "...", "description": "...", "tags": "tag1, tag2, tag3"}. ' +
    'Chỉ mô tả những gì thấy rõ trong khung hình, không bịa chi tiết không thấy được.';
  const userText = 'Đây là 1 khung hình trích từ video makeup sắp đăng YouTube. Viết Tiêu đề (dưới 100 ký tự, ' +
    'gây tò mò), Mô tả (80-150 chữ) và 5-8 Tags liên quan makeup/làm đẹp (cách nhau bằng dấu phẩy), ' +
    'theo giọng điệu đã hướng dẫn.';
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({
      model: ANTHROPIC_MODEL, max_tokens: 1024,
      system: systemPrompt,
      messages: [{ role: 'user', content: [block, { type: 'text', text: userText }] }],
    }),
  });
  const j = await res.json();
  if (!res.ok) throw new Error('Anthropic API lỗi ' + res.status + ': ' + JSON.stringify(j));
  const text = (j.content || []).map((b) => b.text || '').join('');
  return parseJsonFromText(text);
}

async function main() {
  log(`Bắt đầu quét bảng "Đăng YouTube" để AI viết Tiêu đề${DRY ? ' [DRY-RUN]' : ''}...`);
  if (!DRY) {
    try {
      const v = execFileSync('ffmpeg', ['-version'], { stdio: ['ignore', 'pipe', 'pipe'] }).toString().split('\n')[0];
      log(`  ffmpeg: ${v}`);
    } catch (e) {
      log(`  ⚠️ Không tìm thấy ffmpeg trong PATH — bỏ qua bước AI viết Tiêu đề (${String(e.message || e)}).`);
      return;
    }
  }
  const rows = await lark.listRecords();
  const candidates = rows.filter((r) => {
    const tieuDe = r.get(cfg.FIELDS.tieuDe).trim();
    if (tieuDe) return false;
    return r.attachments(cfg.FIELDS.video).length > 0;
  });
  log(`Tổng ${rows.length} dòng, ${candidates.length} dòng có Video + chưa có Tiêu đề -> cần AI viết.`);
  if (DRY) { candidates.forEach((r) => log('  >> sẽ viết cho record ' + r.record_id)); return; }

  let ok = 0, fail = 0;
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'ai-title-'));
  for (const rec of candidates) {
    const vid = rec.attachments(cfg.FIELDS.video)[0];
    const videoPath = path.join(tmpDir, vid.name || (rec.record_id + '.mp4'));
    const framePath = path.join(tmpDir, rec.record_id + '.jpg');
    try {
      await lark.downloadAttachment(rec.record_id, vid.file_token, tmpDir, vid.name);
      const vsize = fs.existsSync(videoPath) ? fs.statSync(videoPath).size : 0;
      log(`  … ${rec.record_id}: đã tải video (${vsize} bytes), đang trích khung hình...`);
      if (!vsize) throw new Error('File video tải về rỗng (0 byte).');
      extractFrame(videoPath, framePath);
      const { title, description, tags } = await titleFromFrame(framePath);
      await lark.updateRecord(rec.record_id, {
        [cfg.FIELDS.tieuDe]: (title || '').trim().slice(0, 100),
        [cfg.FIELDS.moTa]: (description || '').trim(),
        [cfg.FIELDS.tags]: (tags || '').trim(),
      });
      log(`  ✓ ${rec.record_id}: đã viết Tiêu đề "${(title || '').slice(0, 50)}" (chưa đăng — chờ bạn đặt Trạng thái = "Chờ đăng")`);
      ok++;
    } catch (e) {
      log(`  ✗ ${rec.record_id}: lỗi — ${String(e.message || e)}`);
      fail++;
    } finally {
      [videoPath, framePath].forEach((f) => { try { if (fs.existsSync(f)) fs.unlinkSync(f); } catch (_) {} });
    }
  }
  log(`Xong. Đã viết: ${ok}, Lỗi: ${fail}.`);
}

main().catch((e) => { console.error('LỖI tổng:', e.message || e); process.exit(1); });
