// config.js — Cấu hình hệ thống đăng video YouTube (bản OpenAPI, chạy headless đa nền tảng).
//
// KHÁC bản gốc: bỏ lark-cli + đường dẫn Windows. Nay gọi Lark OpenAPI trực tiếp bằng app
// credentials (tenant token). Mọi giá trị nhạy cảm BẮT BUỘC set qua biến môi trường — không có
// giá trị mặc định, để trống sẽ báo lỗi thay vì âm thầm gọi vào Base/kênh của người khác.
//
// Biến môi trường cần set trước khi chạy:
//   LARK_APP_ID, LARK_APP_SECRET      — app Lark (tenant token)
//   LARK_DOMAIN                        — mặc định https://open.larksuite.com (larksuite quốc tế)
//   YT_BASE_TOKEN, YT_TABLE_ID         — Base + bảng "Đăng Youtube"
//   YT_ROOT                            — thư mục chứa .secrets/ cho OAuth Google
const path = require('path');
const os = require('os');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const ROOT = process.env.YT_ROOT || process.cwd();
const SECRETS_DIR = path.join(ROOT, '.secrets');

// Chuẩn hoá tên kênh thành slug an toàn cho tên file (giữ chữ/số unicode, còn lại → "_").
function slug(name) {
  return String(name || '').trim().replace(/[^\p{L}\p{N}]+/gu, '_').replace(/^_+|_+$/g, '');
}
const DEFAULT_TOKEN_FILE = path.join(SECRETS_DIR, 'youtube-token.json');

const required = { LARK_APP_ID: process.env.LARK_APP_ID, LARK_APP_SECRET: process.env.LARK_APP_SECRET,
  YT_BASE_TOKEN: process.env.YT_BASE_TOKEN, YT_TABLE_ID: process.env.YT_TABLE_ID };
const miss = Object.entries(required).filter(([, v]) => !v).map(([k]) => k);
if (miss.length) {
  throw new Error('Thiếu biến môi trường: ' + miss.join(', ') +
    ' — set trỏ tới Lark app + Base "Đăng Youtube" CỦA CHÍNH BẠN trước khi chạy.');
}

module.exports = {
  // --- Lark OpenAPI ---
  LARK_DOMAIN: process.env.LARK_DOMAIN || 'https://open.larksuite.com',
  APP_ID: process.env.LARK_APP_ID,
  APP_SECRET: process.env.LARK_APP_SECRET,
  BASE_TOKEN: process.env.YT_BASE_TOKEN,
  TABLE_ID: process.env.YT_TABLE_ID,

  // Tên field (lark đọc/ghi theo tên; field-id được tra động trong lark.js)
  FIELDS: {
    tieuDe: 'Tiêu đề',
    moTa: 'Mô tả',
    tags: 'Tags',
    video: 'Video',
    thumbnail: 'Thumbnail',
    loai: 'Loại',          // "Video dài" | "Shorts"
    playlist: 'Playlist',
    cheDo: 'Chế độ',       // "Công khai" | "Không công khai" | "Riêng tư"
    ngayGio: 'Ngày giờ đăng',
    trangThai: 'Trạng thái', // "Chờ đăng" | "Đang đăng" | "Đã đăng" | "Lỗi"
    linkVideo: 'Link video',
    ghiChuLoi: 'Ghi chú lỗi',
    kenh: 'Kênh',            // chọn kênh YouTube để đăng (mỗi kênh 1 token riêng); rỗng = kênh mặc định
  },
  STATUS: { cho: 'Chờ đăng', dang: 'Đang đăng', xong: 'Đã đăng', loi: 'Lỗi' },
  PRIVACY_MAP: { 'Công khai': 'public', 'Không công khai': 'unlisted', 'Riêng tư': 'private' },

  // --- YouTube / Google OAuth ---
  CLIENT_SECRET: path.join(ROOT, '.secrets', 'client_secret.json'),
  TOKEN_FILE: DEFAULT_TOKEN_FILE,
  slug,
  // File token theo kênh: rỗng → token mặc định; có tên → youtube-token-<slug>.json.
  // KHÔNG fallback ngầm khi kênh có tên nhưng thiếu token (tránh đăng nhầm kênh).
  tokenFileFor(channelName) {
    const s = slug(channelName);
    return s ? path.join(SECRETS_DIR, `youtube-token-${s}.json`) : DEFAULT_TOKEN_FILE;
  },
  SCOPES: [
    'https://www.googleapis.com/auth/youtube.upload',
    'https://www.googleapis.com/auth/youtube',
  ],

  // --- thư mục tạm tải video (đa nền tảng) ---
  TMP_DIR: path.join(os.tmpdir(), 'yt-upload'),

  // --- log ---
  LOG_FILE: path.join(__dirname, 'run.log'),

  ROOT,
};
