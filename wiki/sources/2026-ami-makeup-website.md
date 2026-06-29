---
title: AMI Make Up Academy — Website tĩnh HTML/CSS/JS
type: source
tags: [website, html, makeup, admin-panel, vietnam, booking]
created: 2026-06-20
updated: 2026-06-21
sources: [ami-website/]
---

## Summary
Website tĩnh **10 trang** cho thương hiệu đào tạo trang điểm **AMI Make Up Academy**, xây dựng bằng HTML/CSS/JS thuần, không framework, không backend. Thiết kế theo phong cách hangthumakeup.vn nhưng thay thương hiệu thành AMI. Có admin panel dùng localStorage và trang đặt lịch makeup riêng cho khách hàng.

## Key Points
- **10 trang HTML**: Trang chủ, Giới thiệu, Dịch vụ, Khóa học, Chi tiết khoá học, Sản phẩm, Tin tức, Tuyển dụng, Liên hệ, **Đặt lịch**
- **Nav dùng chung** qua `nav.js` — sửa 1 lần cập nhật tất cả trang; chứa cả nút nổi Zalo/Messenger/Phone
- **Dữ liệu khoá học** tập trung tại `data-khoa-hoc.js` — 8 khoá học, routing qua `?id=X`
- **Admin panel** (`admin.js`) dùng chung: nút 🔑 góc phải, mật khẩu `1234`, click ảnh để thay, click chữ để sửa, lưu localStorage theo từng trang
- **Slideshow banner** tự động đổi ảnh 5 giây, có nút ‹ › và chấm điều hướng
- **Nút nổi liên hệ**: Zalo (xanh), Messenger (gradient tím), Phone (đỏ nhấp nháy) — config trong `CONTACT_INFO` đầu `nav.js`

## File Structure
```
ami-website/
├── index.html              — Trang chủ + slideshow + admin panel
├── gioi-thieu.html         — Giới thiệu academy + đội ngũ
├── dich-vu.html            — 3 dịch vụ: Cưới · Kỷ yếu · Sự kiện
├── khoa-hoc.html           — Lưới 8 khoá + bộ lọc
├── khoa-hoc-chi-tiet.html  — Chi tiết 1 khoá (routing ?id=)
├── san-pham.html           — 8 sản phẩm mỹ phẩm + bộ lọc
├── tin-tuc.html            — Danh sách bài viết + sidebar
├── tuyen-dung.html         — 3 vị trí tuyển dụng
├── lien-he.html            — Thông tin + form đăng ký
├── dat-lich.html           — Trang đặt lịch makeup (xem chi tiết bên dưới)
├── nav.js                  — Menu + nút nổi Zalo/Messenger/Phone
├── admin.js                — Admin panel dùng chung
├── data-khoa-hoc.js        — Dữ liệu 8 khoá học
└── images/                 — Thư mục ảnh
```

## Trang Đặt Lịch (dat-lich.html)

Trang đặt lịch makeup riêng — chủ salon gửi link cho khách khi khách muốn đặt cọc giữ lịch.

### Luồng 5 bước:
1. **Thông tin khách**: Họ tên, SĐT *(bắt buộc)*, Email, Ngày sinh, Địa chỉ
2. **Chọn dịch vụ** (8 card bấm): Makeup Cô Dâu | Kỷ Yếu | Sự Kiện/Tiệc/Sinh Nhật | Chụp Hình | Đi Chơi | Khác
3. **Ngày & Giờ** — phân 2 chế độ theo dịch vụ:
   - **Makeup Cô Dâu**: 3 card toggle (Dạm Ngõ / Ăn Hỏi / Ngày Cưới), mỗi card có ngày + giờ + địa điểm + số người riêng (Cô dâu / Mẹ cô dâu / Người nhà)
   - **Dịch vụ khác**: slot ngày đơn giản — ngày, giờ, địa điểm, số người (1 ô), ghi chú — có thể thêm nhiều ngày
4. **Đặt cọc**: hiển thị thông tin chuyển khoản + upload ảnh chứng minh (bắt buộc)
5. **Ảnh tham khảo**: upload ảnh layout makeup mẫu + kiểu tóc mẫu (không bắt buộc)

### Sau khi gửi:
- Màn hình tóm tắt toàn bộ thông tin + ảnh đã upload
- Nút In/PDF + nút Đặt lịch khác + nút Chat Zalo AMI

### Nơi cần sửa thông tin thật:
| Chỗ cần sửa | Vị trí |
|---|---|
| Số điện thoại header | `<strong>📞 0979.963.369</strong>` |
| Tên ngân hàng | `.deposit-bank` trong `dat-lich.html` |
| Số tài khoản | `id="bank-stk"` |
| Chủ tài khoản | `id="bank-name"` |
| Link Zalo cuối trang | `href="https://zalo.me/0979963369"` |

## Entities Mentioned
[[entities/ami-makeup-academy]], [[entities/hangthumakeup-vn]]

## Concepts
[[concepts/static-html-website-admin-panel]], [[concepts/shared-nav-js-pattern]]

## Notes
- Ảnh dùng `onerror` fallback hiển thị placeholder khi chưa có file thật
- localStorage lưu riêng từng trang bằng key `ami_admin_<tên file>`
- Ảnh upload bị giới hạn 10MB/ảnh (preview client-side, không gửi server)
- Deploy Netlify: kéo thả thư mục `ami-website/` lên netlify.com/drop
- Mật khẩu admin mặc định `1234` — nên đổi tại `const ADMIN_PASS` trong `admin.js`
- `dat-lich.html` thiết kế để chủ gửi link cho khách khi họ muốn đặt cọc giữ lịch
