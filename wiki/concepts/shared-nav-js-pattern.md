---
title: Pattern Nav.js Dùng Chung (Shared Navigation Component)
type: concept
tags: [javascript, html, pattern, navigation, component]
created: 2026-06-20
updated: 2026-06-20
sources: [ami-website/nav.js]
---

## Khái niệm
Thay vì copy-paste HTML menu vào từng trang, dùng một file `nav.js` dùng chung. Mỗi trang chỉ cần:
```html
<nav id="main-nav"></nav>
<script src="nav.js"></script>
```

## Cấu trúc nav.js (trong dự án AMI)

### 1. Cấu hình liên hệ
```js
const CONTACT_INFO = {
  phone: '...', zalo: '...', messenger: '...'
};
```

### 2. Định nghĩa menu
```js
const NAV_MENU = [
  { text: 'Trang chủ', href: 'index.html' },
  { text: 'Dịch vụ', href: 'dich-vu.html', sub: [
    { text: 'Make Up Ngày Cưới', href: 'dich-vu.html#cuoi' },
    ...
  ]},
  ...
];
```

### 3. Tự render nav
- Inject CSS dropdown vào `<head>`
- Render `<ul><li>` từ `NAV_MENU`
- Tự detect trang active bằng `window.location.pathname`
- Hỗ trợ dropdown hover với mũi tên ▾

### 4. Tự inject nút nổi liên hệ
- Zalo, Messenger, Phone — cố định góc phải màn hình
- Tooltip khi hover
- Phone nhấp nháy bằng CSS animation `ami-pulse`

## Lợi ích
- Sửa menu 1 lần → cập nhật tất cả trang ngay
- Thêm trang mới chỉ cần thêm 1 object vào `NAV_MENU`
- Không cần framework hay build tool

## Áp dụng trong
[[sources/2026-ami-makeup-website]] — [[entities/ami-makeup-academy]]
