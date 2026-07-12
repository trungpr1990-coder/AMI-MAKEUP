# 4 BƯỚC TAY (học viên làm 1 lần — chỉ click theo ảnh)

Sau khi đã có hosting + tên miền (xem `huong-dan-mua-hosting.md`). Mỗi bước chỉ vài cú click. Làm xong, bạn có **3 dòng kết nối** để đưa cho cỗ máy.

> Vì sao phải làm tay 4 bước này: phần này khác nhau tuỳ nhà cung cấp hosting nên không tự động hết được. Nhưng chỉ làm **một lần**, rất nhanh. Toàn bộ phần dựng web sau đó cỗ máy lo.

---

## BƯỚC 1 — Cài WordPress (1 chạm)
1. Đăng nhập **bảng điều khiển hosting** (hPanel / cPanel / DirectAdmin).
2. Tìm mục **"WordPress"** hoặc **"Softaculous" / "Installatron" / "Auto Installer"**.
3. Bấm **Install**, chọn tên miền của bạn, đặt **email + tên đăng nhập + mật khẩu admin** (GHI LẠI KỸ).
4. Bật **SSL/HTTPS** nếu được hỏi.

*(Chèn ảnh: nút WordPress 1-click của host đang dùng.)*

## BƯỚC 2 — Đặt đường dẫn đẹp (Permalink) — QUAN TRỌNG
1. Vào `tenmien.com/wp-admin` → đăng nhập.
2. **Settings (Cài đặt) → Permalinks (Đường dẫn tĩnh)**.
3. Chọn **"Post name (Tên bài viết)"** → **Save Changes (Lưu)**.

> Bỏ qua bước này → các trang con/bài viết sẽ báo lỗi 404. Bắt buộc làm trước.

*(Chèn ảnh: màn hình Permalinks chọn Post name.)*

## BƯỚC 3 — Cài giao diện Astra
1. **Appearance (Giao diện) → Themes (Giao diện) → Add New (Thêm mới)**.
2. Ô tìm kiếm gõ **Astra** → **Install (Cài đặt)** → **Activate (Kích hoạt)**.

*(Chèn ảnh: tìm và kích hoạt Astra.)*

## BƯỚC 4 — Tạo Application Password (chìa khoá cho cỗ máy)
1. **Users (Thành viên) → Profile (Hồ sơ của bạn)** (hoặc Tài khoản).
2. Kéo xuống mục **Application Passwords (Mật khẩu ứng dụng)**.
3. Gõ tên: **Web Builder** → bấm **Add New Application Password**.
4. **Copy chuỗi hiện ra** (dạng `xxxx xxxx xxxx xxxx xxxx xxxx`). Chuỗi này chỉ hiện 1 lần — lưu lại ngay.

*(Chèn ảnh: mục Application Passwords.)*

---

## ✅ 3 DÒNG KẾT NỐI đưa cho cỗ máy
```
URL web:           https://tenmiencuaban.com
Tên đăng nhập:     <tên admin ở Bước 1>
Application Password: <chuỗi ở Bước 4>
```

➡️ Mở skill / nói với trợ lý: *"Dựng web cá nhân cho tôi"* và làm theo các câu hỏi từng bước. Nếu kẹt ở 4 bước này, gửi 3 dòng trên để được hỗ trợ chạy hộ.
