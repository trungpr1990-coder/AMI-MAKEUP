# Bộ nguyên liệu — Web Cá Nhân WordPress (chuyển giao)

## Cài đặt (1 lần)
1. Cài Node.js (>=18) trên máy.
2. Mở terminal tại thư mục `scripts/` và chạy: `npm install`
3. (Chỉ cho Mức B full-auto) tải 2 file vào `scripts/`:
   - WordPress: https://wordpress.org/latest.zip
   - Theme Astra: https://downloads.wordpress.org/theme/astra.zip

## Dùng
- **Mức A** (mọi host): học viên tự "4 bước tay" → có 3 dòng kết nối → điền `data.json` (mẫu: `data.example.json`) → `node scripts/build-site.mjs data.json`.
- **Mức B** (full-auto, đưa login hosting): điền `provision.json` (mẫu: `provision.example.json`) → `node scripts/provision.mjs provision.json` → lấy `connection.json` → điền vào `data.json` → `node scripts/build-site.mjs data.json`.

## Tài liệu
Xem thư mục `references/`: huong-dan-mua-hosting · 4-buoc-tay · phieu-chuan-bi · muc-b-full-auto · tri-thuc-guru. Khung skill: `SKILL.md`.

## Lưu ý
- Không có mật khẩu thật trong bộ này — bạn điền thông tin của mình vào file cấu hình riêng.
- cPanel: module đã viết nhưng CHƯA test thực tế — tự kiểm trước khi dùng cho học viên.
- Đổi mật khẩu hosting/WordPress sau khi bàn giao.
