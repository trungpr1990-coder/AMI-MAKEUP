---
title: Website tĩnh HTML với Admin Panel localStorage
type: concept
tags: [html, css, javascript, admin, localStorage, no-backend]
created: 2026-06-20
updated: 2026-06-20
sources: [ami-website/admin.js, ami-website/index.html]
---

## Khái niệm
Kỹ thuật xây dựng website tĩnh (không cần server/backend) nhưng vẫn cho phép chủ website **thay ảnh và sửa chữ trực tiếp trên trình duyệt**, lưu vào `localStorage` của máy. Phù hợp cho người không biết code.

## Cách hoạt động

### Admin Panel (`admin.js`)
1. Nút 🔑 cố định góc dưới phải (`position: fixed; bottom: 62px; right: 16px`)
2. Click → prompt mật khẩu (`const ADMIN_PASS = '1234'`)
3. Nếu đúng → bật **chế độ quản trị**:
   - Thanh đỏ xuất hiện trên cùng: "CHẾ ĐỘ QUẢN TRỊ"
   - Mọi phần tử `[data-editable]` → `contentEditable = true` + viền vàng
   - Mọi `<img>` được bọc trong `.ami-img-wrap` → click = chọn file mới
4. **💾 LƯU** → serialize toàn bộ text (innerHTML) + ảnh (base64) vào localStorage
5. Khi reload trang → tự động nạp lại dữ liệu đã lưu

### Key localStorage
```
ami_admin_index.html        → dữ liệu trang chủ
ami_admin_gioi-thieu.html   → dữ liệu trang giới thiệu
ami_admin_dich-vu.html      → ...
```
Mỗi trang lưu độc lập.

### Đánh dấu phần tử có thể sửa
```js
// Tự động trong admin.js — không cần thêm tay
'.hero-h1', '.section-title', '.card-name', '.product-price'...
```
Hoặc thêm thủ công: `<div data-editable="key-rieng">Nội dung</div>`

## Giới hạn
- **Quota localStorage:** ~5–10MB/domain → ảnh lớn cần nén trước (dưới 1MB/ảnh)
- **Chỉ lưu trên máy đó:** nếu mở trình duyệt khác hoặc máy khác → mất
- **Giải pháp khi deploy Netlify:** dùng Netlify CMS hoặc Decap CMS để lưu thật vào GitHub

## Slideshow Banner
```js
const HERO_SLIDES = [
  'images/banner.jpg',
  'images/banner2.jpg',
  'images/banner3.jpg',
];
// Tự động đổi mỗi 5 giây, fade transition 1.2s
// Có nút ‹ › và chấm điều hướng
```

## Nút nổi liên hệ (trong nav.js)
```js
const CONTACT_INFO = {
  phone:     '0979963369',
  zalo:      'https://zalo.me/0979963369',
  messenger: 'https://m.me/tenpage',
};
// Tự inject vào mọi trang qua nav.js
// Zalo: xanh · Messenger: gradient tím · Phone: đỏ nhấp nháy
```

## Liên kết
- [[sources/2026-ami-makeup-website]]
- [[concepts/shared-nav-js-pattern]]
