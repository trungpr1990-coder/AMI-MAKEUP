// config.js — Cấu hình hệ thống đăng video YouTube (Lark Base → YouTube), chạy trên GitHub Actions.
// KHÔNG cần npm install: không dùng axios/googleapis/dotenv — chỉ Node 18+ built-in fetch.
// Mọi giá trị nhạy cảm BẮT BUỘC set qua biến môi trường (GitHub Secrets khi chạy CI, hoặc export
// tay khi chạy local) — không có giá trị mặc định, thiếu biến sẽ báo lỗi và dừng ngay.
'use strict';
const path = require('path');
const os = require('os');

// Chạy local tiện dùng .env nếu có (best-effort — KHÔNG bắt buộc cài dotenv).
try { require('dotenv').config({ path: path.join(__dirname, '.env') }); } catch (_) {}

const ROOT = __dirname;
const SECRETS_DIR = path.join(ROOT, '.secrets');

function slug(name) {
  return String(name || '').trim().replace(/[^\p{L}\p{N}]+/gu, '_').replace(/^_+|_+$/g, '');
}
const DEFAULT_TOKEN_FILE = path.join(SECRETS_DIR, 'youtube-token.json');

const required = {
  LARK_APP_ID: process.env.LARK_APP_ID,
  LARK_APP_SECRET: process.env.LARK_APP_SECRET,
  YT_BASE_TOKEN: process.env.YT_BASE_TOKEN,
  YT_TABLE_ID: process.env.YT_TABLE_ID,
};
const miss = Object.entries(required).filter(([, v]) => !v).map(([k]) => k);
if (miss.length) {
  throw new Error('Thiếu biến môi trường: ' + miss.join(', ') + ' — set trước khi chạy.');
}

module.exports = {
  // --- Lark OpenAPI ---
  LARK_DOMAIN: process.env.LARK_DOMAIN || 'https://open.larksuite.com',
  APP_ID: process.env.LARK_APP_ID,
  APP_SECRET: process.env.LARK_APP_SECRET,
  BASE_TOKEN: process.env.YT_BASE_TOKEN,
  TABLE_ID: process.env.YT_TABLE_ID,

  FIELDS: {
    tieuDe: 'Tiêu đề',
    moTa: 'Mô tả',
    tags: 'Tags',
    video: 'Video',
    thumbnail: 'Thumbnail',
    loai: 'Loại',            // "Video dài" | "Shorts"
    playlist: 'Playlist',
    cheDo: 'Chế độ',         // "Công khai" | "Không công khai" | "Riêng tư"
    ngayGio: 'Ngày giờ đăng',
    trangThai: 'Trạng thái',  // "Chờ đăng" | "Đang đăng" | "Đã đăng" | "Lỗi"
    linkVideo: 'Link video',
    ghiChuLoi: 'Ghi chú lỗi',
    kenh: 'Kênh',             // rỗng = kênh mặc định
  },
  STATUS: { cho: 'Chờ đăng', dang: 'Đang đăng', xong: 'Đã đăng', loi: 'Lỗi' },
  PRIVACY_MAP: { 'Công khai': 'public', 'Không công khai': 'unlisted', 'Riêng tư': 'private' },

  // --- YouTube / Google OAuth ---
  CLIENT_SECRET: path.join(SECRETS_DIR, 'client_secret.json'),
  TOKEN_FILE: DEFAULT_TOKEN_FILE,
  slug,
  tokenFileFor(channelName) {
    const s = slug(channelName);
    return s ? path.join(SECRETS_DIR, `youtube-token-${s}.json`) : DEFAULT_TOKEN_FILE;
  },

  // --- điều khiển chạy (khớp kiểu với hệ thống đăng Reel Facebook) ---
  // RECORD_ID: nút "Run workflow" bấm 1 dòng cụ thể → chỉ đăng đúng record đó, bỏ qua lịch.
  RECORD_ID: (process.env.RECORD_ID || '').trim(),
  // "Ngày giờ đăng" luôn được tôn trọng dù chạy cron hay bấm tay — không có cách bypass hàng loạt.
  RESPECT_SCHEDULE: process.env.RESPECT_SCHEDULE !== 'false',

  // --- thư mục tạm tải video ---
  TMP_DIR: path.join(os.tmpdir(), 'yt-upload'),

  // --- log ---
  LOG_FILE: path.join(ROOT, 'run.log'),

  ROOT,
};
