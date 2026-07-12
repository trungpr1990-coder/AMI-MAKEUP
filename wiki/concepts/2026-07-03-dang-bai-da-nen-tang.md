---
title: Hệ thống Đăng Bài Đa Nền Tảng (Facebook + Instagram + TikTok) từ Lark Base + AI
type: concept
tags: [facebook, instagram, tiktok, lark-base, automation, windows, nodejs, graph-api, anthropic, ai-content]
created: 2026-07-03
updated: 2026-07-03
sources: []
---

## Tổng quan

Mở rộng của [[concepts/dang-reel-facebook-tu-dong]] — thêm Instagram, TikTok, và một bước AI tự viết content nháp hàng ngày (qua Anthropic API). Nội dung có thể tự nhập tay vào Lark Base **hoặc** để AI viết — nhưng AI viết xong luôn dừng ở trạng thái **chờ duyệt**, không bao giờ tự đăng công khai.

**Bộ cài (skill):** `C:\Users\Admin\.claude\skills\đăng-bài-đa-nền-tảng\`

---

## Kiến trúc

```
[Nguồn nội dung]
  ├── Con người nhập tay vào đúng bảng nền tảng (Facebook Reel / Instagram / TikTok)
  ├── Con người chỉ đính kèm ẢNH (để trống Nội dung + Nguồn)
  │     → dispatcher.js "Bước 0" (mỗi 2 phút): Claude vision xem ảnh thật, tự viết
  │       Nội dung+Hashtag, Nguồn="AI viết", TT="Chờ duyệt", Duyệt AI="Chờ duyệt"
  └── generate-content.js (Task 1 lần/ngày, gọi Anthropic API)
        → viết caption+hashtag theo brand-voice.md + content-pillars.json (không cần ảnh, theo chủ đề)
        → ghi dòng nháp vào MỖI bảng trong AI_TARGET_PLATFORMS: Nguồn=AI viết, TT="Chờ duyệt", Duyệt AI="Chờ duyệt"
                  │
                  ▼ (người duyệt: đính kèm Ảnh/Video nếu chưa có + CHỌN TRANG + đổi Duyệt AI="Đã duyệt")
[Lark Base — 3 bảng riêng: "Facebook Reel", "Instagram", "TikTok"]
  Mỗi bảng có cột Link "Trang" -> chọn 1 dòng trong bảng
  "Danh sách Trang <nền tảng>" (chứa Page ID/Access Token thật)
  Cột "TT" = "Chờ đăng"
                  │
                  ▼ (dispatcher.js — Windows Task 2 phút/lần, quét cả 3 bảng)
  1. Tự tìm table_id theo tên bảng qua +table-list (không cần cấu hình table id)
  2. Resolve Trang qua cột Link -> lấy Page ID/Access Token từ bảng Danh sách Trang
  3. post-facebook.js   → Facebook Graph API (feed ảnh/text + Reels video)
     post-instagram.js  → media-host.js (Cloudflare R2 tạm) → IG Graph API
     post-tiktok.js     → TikTok Content Posting API v2 (FILE_UPLOAD chunked)
                  │
                  ▼
  Ghi Link + Log + đổi TT → "Đã đăng"/"Lỗi" — ngay trong bảng của nền tảng đó
```

Muốn đăng 1 nội dung lên cả 3 nền tảng thì tạo 1 dòng riêng trong mỗi bảng — 3 bảng độc lập hoàn toàn (khác dòng, khác Trang, khác lịch đăng nếu muốn). Đây là thay đổi so với bản đầu (1 bảng gộp, mỗi dòng có 3 bộ cột TT/Link/Log theo nền tảng) — người dùng yêu cầu tách hẳn ra 3 bảng để dễ quản lý theo từng kênh.

### Nguyên tắc lưu Trang — theo mẫu bảng "12.1 Danh sách page" trong CRM có sẵn

Khác với bộ Reel cũ (Page ID/Token nằm trong `config.local.json` trên máy), hệ thống này lưu Trang **ngay trong Base**, mô phỏng đúng nguyên tắc đã dùng trong CRM Base (`O2qIbEaIYabXEGsW6Dzjs0LCpZg`, bảng "12.1 Danh sách page" + cột Link "Link Page" trong "12.3 Đăng bài"):

- 3 bảng Trang riêng: **"Danh sách Trang Facebook/Instagram/TikTok"** — mỗi dòng 1 trang, có cột Access Token.
- Mỗi bảng bài đăng dùng cột Link "Trang" để chọn Trang cho từng dòng — 1 Base đăng được cho nhiều trang khác nhau.
- ⚠️ **Đánh đổi bảo mật đã xác nhận với người dùng:** Access Token nằm thẳng trong Base (đọc được bởi ai có quyền xem/nhân bản Base) — chấp nhận rủi ro này để giữ đúng nguyên tắc/thói quen thao tác đã dùng trong CRM cũ, thay vì tách token ra file cấu hình riêng trên máy (an toàn hơn nhưng khác nguyên tắc quen thuộc).
- `config.local.json` không cần khai báo table id — mọi hàm trong `lib/lark-helpers.js` nhận `tableId` làm tham số, và `dispatcher.js`/`generate-content.js` tự tìm bảng theo đúng tên bảng.

**Lark App dùng chung:** ADS -> LARK — App ID `cli_a736cbaaa63bd010` (giống bộ Reel).

**Base mẫu:** `https://manhtrung610.jp.larksuite.com/base/Wtn8bQ4sLanhfWsHrZ9jmbmypeH`

---

## Cấu trúc Base (6 bảng)

**3 bảng bài đăng — "Facebook Reel", "Instagram", "TikTok" (cùng hình dạng cột):**

| Cột | Vai trò |
|---|---|
| Chủ đề/Ý tưởng | Gợi ý chủ đề cho AI viết |
| Ảnh/Video | Đính kèm media |
| Nội dung | Caption |
| Hashtag | Hashtag |
| Nguồn | "Tự nhập" / "AI viết" |
| Duyệt AI | Cổng duyệt — "Chờ duyệt" / "Đã duyệt" |
| Lịch đăng | Giờ đăng (trống = đăng luôn) |
| Trang | Cột Link (quan hệ bảng) — chọn 1 dòng trong bảng "Danh sách Trang <nền tảng>" tương ứng để biết đăng vào Page ID/Access Token nào |
| TT | Trạng thái: Chờ duyệt/Chờ đăng/Đã đăng/Lỗi |
| Link | Link bài đã đăng |
| Log | Log kết quả/lỗi |

**3 bảng Trang:**

| Bảng | Cột |
|---|---|
| Danh sách Trang Facebook | Tên trang, Page ID, Access Token |
| Danh sách Trang Instagram | Tên trang, IG Business ID, Access Token (dùng chung token với Trang Facebook đã liên kết) |
| Danh sách Trang TikTok | Tên trang, Access Token, Refresh Token (Client Key/Secret ở cấp App, nằm trong config.local.json) |

---

## Giới hạn kỹ thuật quan trọng

- **Instagram**: Graph API Content Publishing bắt buộc `image_url`/`video_url` phải là URL công khai (khác Facebook — không nhận upload file trực tiếp). Hệ thống tự upload tạm lên **Cloudflare R2** (ký request bằng AWS SigV4, không cần thư viện ngoài) rồi xoá ngay sau khi đăng xong.
- **TikTok**: Content Posting API yêu cầu app phải qua **TikTok audit** mới đăng công khai được. Trước khi audit xong, mọi bài đăng TikTok ở chế độ **riêng tư (SELF_ONLY)** — quy định của TikTok, không phải giới hạn code. Đặt `TIKTOK_AUDITED: true` trong config sau khi được duyệt.
- **AI viết content**: cần `ANTHROPIC_API_KEY` (console.anthropic.com), phát sinh chi phí theo lượng dùng. Giọng điệu lấy từ `brand-voice.md` (dựa theo [[nang-luc/2026-07-02-cach-tao-noi-dung-video-co-giong-dieu-tu-nhien]] — persona Thuý Trần Makeup). Chủ đề xoay vòng qua `content-pillars.json`.
- **AI xem ảnh tự viết caption**: dùng Claude vision (Anthropic Messages API, content block `{type:"image", source:{type:"base64",...}}`) — chỉ xem được **ảnh** (jpg/png/webp/gif), **chưa xem được video**. Được dặn rõ trong system prompt: không bịa tên người/địa điểm/số liệu không thấy được trong ảnh. Chạy trong `dispatcher.js` mỗi 2 phút (không phải Task riêng theo ngày như `generate-content.js`), nên phản hồi nhanh hơn nhiều — user đính ảnh xong ~2 phút là có caption nháp.

---

## Bộ file chuyển giao (mở rộng từ bộ Reel)

| File | Vai trò |
|---|---|
| `dispatcher.js` | Engine chính — thay thế `post-reels.js`, quét Base, gọi đúng module theo từng nền tảng |
| `generate-content.js` | AI viết content nháp — chạy 1 lần/ngày qua Windows Task riêng |
| `lib/lark-helpers.js` | Đọc/ghi Base dùng chung (tách ra từ `post-reels.js`) |
| `lib/anthropic.js` | Gọi Anthropic Messages API dùng chung (text + ảnh) |
| `lib/caption-from-image.js` | AI xem ảnh thật tự viết caption+hashtag — gọi trong dispatcher.js "Bước 0" |
| `lib/post-facebook.js`, `lib/post-instagram.js`, `lib/post-tiktok.js`, `lib/media-host.js` | Module riêng từng nền tảng |
| `brand-voice.md`, `content-pillars.json` | Giọng điệu + chủ đề cho AI viết |
| `setup.ps1`, `register-task.ps1` | Wizard cài đặt — đăng ký **2** Windows Task (dispatcher 2 phút, AI content 1 lần/ngày lúc 08:00) |
| `README-ADMIN.md`, `HUONG-DAN-HOC-VIEN.md` | Tài liệu admin (checklist credentials IG/TikTok/Cloudflare/Anthropic) + học viên |

---

## Việc cần Admin tự làm (ngoài khả năng AI)

1. Nâng quyền Page Token thêm scope `instagram_basic`, `instagram_content_publish` (Instagram phải liên kết Facebook Page).
2. Đăng ký app TikTok for Developers, thêm Content Posting API, nộp xin audit.
3. Tạo Anthropic API key.
4. Tạo Cloudflare R2 bucket + bật Public Access + tạo API Token.

Chi tiết từng bước: `README-ADMIN.md` trong skill.

---

## Nguồn

[[concepts/dang-reel-facebook-tu-dong]] — hệ thống gốc chỉ có Facebook Reel, là nền tảng cho hệ thống này.
