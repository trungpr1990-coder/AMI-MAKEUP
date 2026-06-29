---
title: Kiến trúc "Nhà máy phễu" — 4 mảnh tích hợp & tư duy setup 1 lần
type: khoang
khoang: tri-tue
tags: [architecture, framework, system-thinking, integration, claude-lark-cloudflare]
created: 2026-06-24
updated: 2026-06-24
sources: [2026-06-20-giao-trinh-nha-may-pheu.md]
---

# Kiến trúc "Nhà máy phễu" — 4 mảnh tích hợp

Tư duy nền tảng để hiểu cách 4 công cụ độc lập (Claude + Lark + Cloudflare + Domain) nối với nhau thành hệ thống tự động.

## 4 Mảnh tích hợp

```
[BẠN + Claude Code]  ── lark-cli ──►  [LARK BASE]  (cơ sở dữ liệu: Leads, 10 email...)
                     │  dựng & deploy
                     ▼
[Khách] ──► [TRANG WEB + WORKER trên CLOUDFLARE] ──► ghi vào LARK BASE (qua App Lark)
   (điền form)        │
                      ├──► gửi Email ebook + nuôi dưỡng  (qua SMTP hộp thư Lark)
                      └──► cron 8h sáng: tự gửi 10 email + pixel đo mở
```

## Vai trò từng mảnh

### 1. **Claude Code** (người thợ)
- Đứng ở máy tính cá nhân
- Nhiệm vụ: nghiên cứu, viết nội dung (ebook/page/email), viết code (worker), tạo bảng Lark
- Công cụ: VS Code hoặc trình soạn thảo; lark-cli để giao tiếp với Lark
- **Output**: artifact files (ebook.pdf, page.html, worker.js, bảng tạo sẵn)

### 2. **lark-cli** (cây cầu)
- Công cụ dòng lệnh trên máy, cơ chế **device flow** (đăng nhập 1 lần, sau đó Claude "nhập quân" Lark bằng danh nghĩa bạn)
- Nhiệm vụ: Claude dùng lark-cli để **tạo bảng, đọc/ghi dữ liệu** vào Lark Base bằng API
- **Quan trọng**: lark-cli auth chỉ làm 1 lần → lần sau Claude gọi lệnh không cần đăng nhập lại

### 3. **Lark Base** (kho dữ liệu sống)
- Chứa 3 bảng chính:
  - **Bảng Leads** (khách hàng): Họ tên, Email, SĐT, Ngày đăng ký, Trạng thái (Đã gửi/Đã mở email)
  - **Email Nurture 10 ngày** (kế hoạch): Ngày, Tiêu đề, Nội dung, Tỷ lệ mở, Số gửi, Số mở
  - **Đầu bài** (quản trị): Tên chiến dịch, Sản phẩm, Mục tiêu, Deadline, Trạng thái
- **Mục đích**: lưu trữ & đo lường → dễ phân tích, tái dùng dữ liệu
- **Bảo mật**: App Lark cần scope `bitable` + là cộng tác viên quyền "Sửa"

### 4. **Cloudflare + Domain** (nơi trang sống)
- **Landing page** tĩnh (HTML + CSS) tự host trên Cloudflare (miễn phí)
- **Worker** (code backend) luôn chạy, nhận form từ khách:
  - POST /submit → ghi vào Lark Base → gửi email ebook → đổi trạng thái → trả link Zalo
  - Cron tự động (8h sáng): lặp bảng Nurture, gửi email đến hạn, đo mở
  - GET /open → pixel đo mở email, dedup bằng KV
- **Domain** (tên miền của bạn): DNS trỏ về Cloudflare → trang sống ở https://subdomain.domain.com

---

## Tư duy "Setup 1 lần" vs "Per-campaign"

Sự khác biệt này **quyết định toàn bộ quy trình vận hành**.

### Setup 1 lần (chỉ làm 1 lần cho mọi chiến dịch sau)
- Tài khoản Cloudflare + `wrangler login` (gắn với máy)
- Domain trên Cloudflare (nameserver active)
- App Lark Custom + scope `bitable` + publish
- Hộp thư SMTP gửi
- 6 secret đã set: `LARK_APP_ID`, `LARK_APP_SECRET`, `SMTP_USER`, `SMTP_PASS`, `FROM_NAME`, `ZALO_LINK`

### Per-campaign (làm lại cho mỗi chiến dịch)
- Phiếu đầu bài (sản phẩm, giá, đối tượng, mục tiêu, link khóa, Zalo, thương hiệu)
- Subdomain mới (hoặc đường dẫn mới)
- Chạy 10 bước: research → ebook → page → bảng → email → nurture
- Worker mới (đổi LEADS_TABLE, NURTURE_TABLE, SOURCE_TAG, BASE_URL)
- Deploy + gắn subdomain mới

### Lợi ích của tư duy này
- **Lần 1**: phức tạp (setup 1 lần), nhưng lần sau rất nhanh
- **Lần 2–N**: chỉ cần phiếu đầu bài → 10 bước → lên sóng (không cần setup lại)
- **Tái dùng**: app Lark, SMTP, tài khoản Cloudflare dùng chung cho tất cả chiến dịch

---

## Nguyên tắc thiết kế: An toàn + Hiệu quả

### Ranh giới bảo mật (không vượt)
- **Credential (mật khẩu, app secret)**: AI không được tự nhập → **người vận hành set bằng `wrangler secret put`**
- **DNS / Domain repoint**: AI không được tự ghi đè → **người vận hành xác nhận hoặc tự làm**
- **Lý do**: credential lộ trong transcript → nguy hiểm; DNS sai → site chết

### Tối ưu hoá hiệu quả
- **Chuẩn bị kỹ càng**: nếu mọi credential/cấu hình sẵn sàng → AI chạy 1 mạch không gián đoạn
- **Phiếu đầu bài đầy đủ**: người vận hành lưng khẽ → AI chạy không phải dừng hỏi
- **Phân vai rõ ràng**: không có overlap → không confuse ai làm gì

---

## Các khái niệm chính

### Phễu bán hàng (Sales Funnel)
Cấu trúc 4 tầng:
1. **Awareness** (nhận biết) — blog, social, quảng cáo
2. **Interest** (quan tâm) — landing page, lead magnet (ebook)
3. **Decision** (quyết định) — email nurture, testimonial, CTA
4. **Action** (hành động) — mua khóa, đăng ký, liên hệ

Mỗi tầng có **funnel metric**:
- Tầng 2: số điền form / số truy cập page (conversion rate)
- Tầng 3: số mở email / số gửi (open rate)
- Tầng 4: số mua / số email nurture (conversion)

Nếu mục tiêu doanh thu = 100M/tháng, khóa = 50M → cần 2 khách/tháng → tính ngược mỗi tầng cần bao nhiêu.

### Lead magnet
Tài sản miễn phí dùng để "câu" lead (ebook, template, checklist, webinar). Mục đích:
- Ngắt đoạn khách từ "chưa biết → quan tâm"
- Tăng conversion rate ở tầng Awareness→Interest

Ebook 6 chương (~14 trang) là lead magnet tối ưu: không quá dễ, không quá khó, có giá trị thật.

### Nurture campaign
Chuỗi email 10 ngày gửi tự động sau khi khách nhận ebook:
- Ngày 1: gửi ebook + cảm ơn
- Ngày 2–4: storyline, khơi nỗi đau
- Ngày 5–7: giải pháp, case study
- Ngày 8–10: CTA mạnh, urgency

Mục đích: xây dựng tin tưởng → sẵn sàng nghe pitch → mua

### Pixel đo mở email
1 ảnh tí hon (1x1 pixel, trong suốt) nhúng vào email
- Khi khách mở email → browser load ảnh → hit URL `/open?lead_id=123&day=2` → tag "Đã mở" + timestamp
- Mục đích: đo engagement từng lead, tính tỷ lệ mở

Giới hạn: chỉ tính nếu email client tải ảnh (Apple Mail Privacy, Outlook tắt ảnh tự động → không tính)

---

## Liên kết

- [[sources/2026-06-20-nha-may-pheu]] — Toàn bộ giáo trình
- [[nang-luc/2026-06-24-ten-buoc-dung-pheu]] — 10 bước thực thi
- [[concepts/lark-cli-tich-hop]] — lark-cli là gì
- [[concepts/cloudflare-worker]] — Worker tự động
- [[concepts/nurture-campaign]] — Nurture email

