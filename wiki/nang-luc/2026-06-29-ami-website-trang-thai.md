---
title: AMI Website — Trạng thái & hạ tầng
type: khoang
khoang: nang-luc
tags: [website, cloudflare, lark-base, deployment, dat-lich]
created: 2026-06-29
updated: 2026-07-02
sources: []
---

# AMI Website — Trạng thái triển khai

## Tổng quan

Website **AMI Make Up Academy** đã live tại `https://thuytranmakeup.com`.

- **Hosting:** Cloudflare Pages (miễn phí), project **`ami-website`** — deploy trực tiếp bằng Wrangler CLI (KHÔNG kết nối git tự động).
- **Domain:** `thuytranmakeup.com` (mua ở PA Việt Nam, DNS trỏ về Cloudflare) — đã chuyển sang trỏ vào project `ami-website` (trước đó từng trỏ vào project cũ `ami-makeup`, giờ không dùng nữa).
- **Deploy tool:** Wrangler CLI, phải chạy TỪ BÊN TRONG thư mục `ami-website/` để Cloudflare Functions (`functions/api/`) được bundle theo:
  ```
  cd ami-website
  npx wrangler pages deploy . --project-name ami-website --branch main
  ```
  > Lưu ý: production branch của project này là `main`, không phải `master`. Nếu quên `--branch main`, deploy sẽ lên **Preview** chứ không phải **Production** dù `wrangler` không báo lỗi gì.
- **Repo GitHub:** `trungpr1990-coder/AMI-MAKEUP` — có một project Cloudflare Pages cũ tên `ami-makeup` từng gắn git tự động với repo này, nhưng đã ngừng dùng cho domain chính. Đừng nhầm với project Astro riêng biệt `ami-makeup-academy/` trong cùng máy (dự án khác, không liên quan tới site này).

## Nguyên tắc làm việc (đã thống nhất với chủ shop)

> "Tôi muốn chỉnh sửa trang bán hàng trong bộ não trước, chưa muốn deploy, sau khi ok đồng ý mới deploy nhé."

→ Luôn sửa file local trước, KHÔNG tự động deploy. Chỉ chạy `wrangler pages deploy` hoặc `git push` sau khi chủ shop xác nhận rõ ràng ("ok", "đồng ý", "deploy đi"). Xem thêm trong memory hệ thống (`feedback-deploy-only-after-approval`).

## Cấu trúc thư mục website

```
ami-website/
├── index.html          # Trang chủ — đã cập nhật đầy đủ ảnh thật (Dịch Vụ, Đội Ngũ, Gallery Tone Makeup 2026, Tin Tức)
├── dat-lich.html        # Đặt lịch — redesign tông hồng tươi sáng, kết nối Lark Base (xem bên dưới)
├── dich-vu.html, khoa-hoc.html, khoa-hoc-chi-tiet.html, san-pham.html,
│   tin-tuc.html, gioi-thieu.html, lien-he.html, tuyen-dung.html
├── data/                # JSON data files (trang-chu, dich-vu, khoa-hoc, san-pham, cai-dat)
├── images/              # Đã có ảnh thật (không còn trống) — ảnh gốc do chủ shop upload + bản đã resize/crop cho từng vị trí
├── functions/
│   └── api/
│       └── submit-booking.js   # Cloudflare Pages Function — nhận dữ liệu đặt lịch, ghi vào Lark Base
└── admin/                # CMS panel (Sveltia CMS) — KHÔNG liên quan tới "chìa khoá quản trị viên" admin.js đã bị xoá khỏi dat-lich.html
    ├── index.html
    └── config.yml
```

## Đặt lịch (dat-lich.html) — redesign tông hồng

Thiết kế lại theo yêu cầu chủ shop: chữ to hơn, màu sắc tươi sáng (tông hồng), bỏ icon emoji thay bằng ảnh thật/line-art, đơn giản hoá phần thanh toán.

- **Bước 1 — Thông tin liên hệ:** Kênh nhắn tin + Tên hiển thị lúc nhắn tin lên đầu (đã bỏ "Họ và tên" riêng, không hỏi ngày sinh). Sau đó chọn **Nơi makeup**: "Tại cửa hàng" hoặc "Makeup tận nơi" (chỉ hiện ô địa chỉ + link Google Maps khi chọn tận nơi). Vì bước 3 cũng có khái niệm địa điểm theo từng ngày (đám cưới 3 buổi), địa điểm tổng được tính 1 lần ở đây rồi áp dụng cho từng ngày khi ghi vào Lark, thay vì hỏi lại nhiều lần.
- **Bước 2 — Dịch vụ:** 6 thẻ dịch vụ dùng ảnh thật (`svc-*.jpg`) thay icon.
- **Bước 3 — Ngày làm:** với gói cưới, tách theo buổi (Dạm Ngõ / Ăn Hỏi / Ngày Cưới), mỗi buổi = 1 dòng riêng khi ghi Lark.
- **Bước 4 — Đặt cọc:** chỉ còn ảnh mã QR VietQR (`qr-chuyen-khoan-crop.jpg`) + 1 dòng ghi chú, đã bỏ hẳn phần liệt kê thông tin chuyển khoản dạng chữ.
- Đã **xoá "chìa khoá quản trị viên"** — bỏ `<script src="admin.js">` khỏi trang, khách không còn thấy trường nhập mã admin.
- Số điện thoại hiển thị: `0327.355.595` (header, nút Zalo, footer).

## Đặt lịch → Lark Base (tự động ghi đơn khi khách đăng ký)

Khi khách bấm gửi form, `dat-lich.html` gọi `POST /api/submit-booking` (Cloudflare Pages Function tại `functions/api/submit-booking.js`), function này ghi vào **bảng riêng "0. Đăng Ký Web"** trong Lark Base của chủ shop (base `O2qIbEaIYabXEGsW6Dzjs0LCpZg`) — bảng mới tạo dành riêng cho đơn từ web, tách biệt hoàn toàn khỏi các bảng nghiệp vụ khác đang có công thức/liên kết (vd. bảng token Facebook page mà chủ shop từng nhầm là bảng đặt lịch).

**Cấu trúc ghi dữ liệu:** mỗi **buổi/ngày làm là 1 dòng riêng** trong Lark (không gộp thành 1 dòng tóm tắt dạng chữ) — để khi lọc theo "Ngày làm" nhìn được tổng quan lịch, tránh trùng lịch, dễ theo dõi. Đơn 1 ngày = 1 dòng; đơn cưới 3 buổi = 3 dòng cùng "Mã đơn".

**Biến môi trường cần cấu hình trên Cloudflare Pages (Settings → Environment variables, đánh dấu Encrypt cho secret):**
| Biến | Giá trị |
|------|---------|
| `LARK_APP_ID` | App ID Lark (đã cấp quyền ghi Base) |
| `LARK_APP_SECRET` | App Secret — **Encrypt** |
| `LARK_BASE_TOKEN` | `O2qIbEaIYabXEGsW6Dzjs0LCpZg` |
| `LARK_TABLE_ID` | `tbldA6DFYJwAUBMl` (bảng "0. Đăng Ký Web") |

> Sau khi đổi/set secret trên Cloudflare Pages phải **deploy lại** thì mới có hiệu lực trên bản đang live — đổi env var không tự áp dụng cho deployment cũ.

**Các trường ghi vào Lark:** Mã đơn, Họ và tên (= tên hiển thị lúc nhắn tin), Số điện thoại, Email, Kênh nhắn tin, Địa chỉ, Google Maps (link), Dịch vụ, Ghi chú dịch vụ, Buổi, Địa điểm, Ngày làm (datetime), Số người, Trạng thái ("Mới"), + ảnh đặt cọc / ảnh makeup mẫu / ảnh kiểu tóc mẫu (upload lên Lark Drive rồi gắn `file_token` vào field ảnh).

## Skills / công cụ đã dùng

- `/frontend-design` — `C:\Users\Admin\.claude\skills\frontend-design\SKILL.md`
- `lark-cli` (đã đăng nhập `--as user`) — dùng để tạo bảng/field trong Lark Base trực tiếp từ terminal (`+table-create`, `+field-create`, `+record-batch-create`, ...)

## Lỗi đã fix (ghi lại để tham khảo)

| Lỗi | Fix |
|-----|-----|
| Push GitHub bị block secrets | Xóa hardcode token trong `scrape_makeup_reels.py` và `crm_email.sh`, dùng env vars |
| Cloudflare deploy vào Preview thay vì Production | Deploy từ project `ami-website` phải thêm `--branch main` (không phải `master`) |
| Chạy `wrangler pages deploy` từ thư mục gốc repo | Functions (`functions/api/`) không được bundle — phải `cd ami-website` rồi deploy `.` |
| Admin blank page (Sveltia CMS) | Script Sveltia CMS phải đặt cuối `<body>` không phải `<head>` |
| Decap CMS redirect về Netlify auth (404) | Chuyển sang Sveltia CMS |
| Toggle ngày trong form bị "nháy" 2 lần khi bấm | Có 2 hàm `toggleDay()` trùng nhau + checkbox gọi `onchange="toggleDay()"` khiến click gốc lật 1 lần rồi hàm lật lại — xoá hàm trùng, checkbox đổi sang gọi `applyToggle()` |
| Lark báo lỗi `Failed to convert phone field` | Field điện thoại/email/url không nhận chuỗi rỗng — chỉ gán key vào object `fields` khi có giá trị thật (không gửi key rỗng) |
| Lark báo lỗi `URLFieldConvFail` khi gửi link Google Maps | Field kiểu URL trong Bitable cần object `{ text, link }`, không phải chuỗi thường |
| Giờ hẹn lệch 7 tiếng khi hiện trong Lark | `new Date('...T08:00:00')` bị hiểu là UTC trong Cloudflare Workers — phải ghi rõ `+07:00` khi tạo timestamp |
| Ảnh khách gửi không lên Lark dù API trả `ok:true` | Server đọc `img.dataUrl` nhưng client gửi `img.src` — sai tên field nên ảnh bị bỏ qua âm thầm, đã sửa server đọc đúng `img.src` |
| Domain đã trỏ đúng DNS nhưng vẫn báo lỗi SSL | Cloudflare cần thời gian "Xác minh" (Verifying) → "Tích cực" (Active) sau khi đổi routing giữa 2 project — không phải lỗi cấu hình, chỉ cần chờ |

## Việc còn để ngỏ

- Hero slideshow ở `index.html` (dòng ~363) vẫn tham chiếu 2 ảnh chưa tồn tại: `IMG_9501.jpg` và `IMG_5284.jpeg` (ảnh này đã được đổi tên/thay thế bằng `makeup su kien and party3.jpeg` trong thư mục nhưng chưa cập nhật lại đường dẫn trong HTML) — chưa sửa, chờ chủ shop xác nhận có muốn sửa luôn không.
- Admin panel Sveltia CMS (`/admin/`) chưa test đăng nhập GitHub OAuth thành công trong session này — tình trạng chưa rõ.
