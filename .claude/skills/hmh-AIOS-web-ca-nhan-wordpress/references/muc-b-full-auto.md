# MỨC B — Full-auto: từ login hosting → tự cài WordPress (provision.mjs)

Khi học viên đưa **thông tin đăng nhập hosting**, cỗ máy tự làm luôn cả phần khởi tạo (cài WordPress + SSL sẵn của host + theme + Application Password) — học viên KHÔNG phải làm "4 bước tay".

## Nguyên tắc thiết kế
Phần khác nhau giữa các hosting **chỉ là việc TẠO DATABASE**. Mọi phần còn lại chạy **không phụ thuộc panel**:
- Đẩy file: **FTP** (host nào cũng có).
- Giải nén: upload kèm 1 file PHP tự giải nén `_x.php` rồi gọi qua HTTP (cần PHP ZipArchive — gần như host nào cũng có). File tự xoá sau khi xong.
- Cài đặt / permalink / kích hoạt theme / tạo Application Password: qua HTTP + REST (giống nhau mọi WordPress).

→ Vì vậy hỗ trợ panel mới = chỉ cần viết thêm 1 hàm `createDB`.

## Cách chạy
```bash
# tải sẵn 1 lần vào scripts/ (nếu chưa có):
#   latest.zip : https://wordpress.org/latest.zip
#   astra.zip  : https://downloads.wordpress.org/theme/astra.zip
node scripts/provision.mjs <provision.json>     # tạo WordPress + Astra + connection.json
# rồi điền nội dung học viên vào data.json (lấy wp.* từ connection.json) và:
node scripts/build-site.mjs <data.json>          # dựng khung + cá nhân hóa
```
Mẫu cấu hình: `scripts/provision.example.json`.

## Panel hỗ trợ

### 1. DirectAdmin — ✅ ĐÃ TEST THỰC TẾ
- `panel: "directadmin"`, `panelLogin.url` cổng **2222**.
- `db.shortName`/`db.shortUser` = tên KHÔNG tiền tố; `db.name`/`db.user` = tên ĐẦY ĐỦ (có tiền tố tài khoản, vd `taikhoan_wp`).
- `site.docroot` = `domains/<domain>/public_html`.
- Đã chạy end-to-end trên host maychu.cloud (2026-06-18): tạo DB → cài WP → Astra → app password OK.

### 2. cPanel — ⚠️ ĐÃ VIẾT, CHƯA TEST THỰC TẾ
- `panel: "cpanel"`, `panelLogin.url` cổng **2083**, dùng cPanel **UAPI** (`/execute/Mysql/create_database`, `create_user`, `set_privileges_on_database`).
- `site.docroot` = `public_html` (cPanel để website chính ở đây).
- **Trước khi giao học viên dùng đường cPanel, BẮT BUỘC tự kiểm trên 1 host cPanel thật:**
  1. Tạo `provision.json` với `panel:"cpanel"`, điền login cPanel + FTP.
  2. Chạy `node provision.mjs provision.json`.
  3. Nếu lỗi ở bước DB → kiểm: cPanel có thể yêu cầu **API Token** thay vì mật khẩu (header `Authorization: cpanel user:token`), hoặc bật/khoá UAPI. Điều chỉnh hàm `createDB` nhánh cpanel cho khớp.
  4. Phần sau DB (FTP + _x.php + cài đặt) dùng chung với DirectAdmin nên nhiều khả năng chạy ngay.
- Rào cản thực tế có thể gặp ở MỌI host: bật **2FA**, **tắt API**, **chặn IP lạ** → khi đó lùi về "4 bước tay" (Mức A).

### 3. manual — không tạo DB tự động
- `panel: "manual"`: học viên/anh tự tạo sẵn 1 database trong panel, điền `db.name/user/password` đầy đủ. Dùng khi panel lạ không có API nhưng vẫn có FTP. Mọi phần khác vẫn tự động.

## Bảo mật
- Thông tin đăng nhập hosting rất nhạy cảm: chỉ dùng trong lúc dựng, **không lưu vào skill**; để trong `output/.../provision.json` của từng học viên. Khuyên học viên **đổi mật khẩu hosting** sau khi bàn giao.

## Hai mức tóm tắt
- **Mức A** (mọi host): học viên tự "4 bước tay" → đưa 3 dòng kết nối → `build-site.mjs`.
- **Mức B** (DA chắc chắn / cPanel sau khi test): học viên đưa login hosting → `provision.mjs` → `build-site.mjs`. Chỉ còn 2 việc tay không tránh được: mua hosting + mua tên miền.
