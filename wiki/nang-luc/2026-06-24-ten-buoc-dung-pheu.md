---
title: 10 bước dựng hệ thống "Nhà máy phễu" — Thực thi từng bước
type: khoang
khoang: nang-luc
tags: [pheu-ban-hang, automation, step-by-step, execution, skillset]
created: 2026-06-24
updated: 2026-06-24
sources: [2026-06-20-giao-trinh-nha-may-pheu.md]
---

# 10 bước dựng hệ thống "Nhà máy phễu"

Quy trình **thực thi từng bước** để dựng một chiến dịch phễu bán hàng tự động từ đầu đến khi lên sóng.

## Quy trình 10 bước

| # | Bước | Kỹ năng chính | Input | Output |
|---|------|--------------|-------|--------|
| 1 | **Chiến lược** | Phân tích phễu, mục tiêu | Brief sản phẩm | Doc chiến lược phễu 4 tầng |
| 2 | **Research** | WebSearch, phân tích đối thủ | Đối tượng + nỗi đau | 8 lượt search, top nỗi đau, positioning |
| 3 | **Mồi câu** | Ideation, lead magnet | Nỗi đau + giá trị | 20+ ý tưởng ebook, chọn 1 |
| 4 | **Bìa ebook** | Design, mockup 3D | Chủ đề ebook | PNG bìa + mockup |
| 5 | **Ebook PDF** | Viết nội dung, layout | Bìa + outline | PDF 10–20 trang, 6 chương + CTA |
| 6 | **Landing page** | HTML/CSS responsive | Phiếu dựng 10 khối | Trang HTML sống, form 3 trường |
| 7 | **Bảng dữ liệu** | Tạo cấu trúc Lark Base | Brief | Bảng "Leads": Họ tên, Email, SĐT, Ngày đăng ký, Trạng thái, Nguồn |
| 8 | **Email giao ebook** | Cấu hình SMTP, template | Nội dung ebook | Email + pixel đo mở + nút Zalo |
| 9 | **Nurture 10 ngày** | Viết 10 email, lập lịch | Email theme hàng ngày | Bảng Email Nurture + content đủ 10 ngày |
| 10 | **Deploy & gắn domain** | Lệnh wrangler, Cloudflare | Worker code + secret | Trang LIVE tại domain thật |

## Kỹ năng cần nắm

### Kỹ năng chiến lược (Bước 1–3)
- **Phễu bán hàng**: cấu trúc 4 tầng (awareness → interest → decision → action) + LTV định giá
- **Research**: dùng WebSearch, xác định top 3 nỗi đau của audience
- **Positioning**: tránh đấu với đối thủ trực tiếp, tìm góc độc lập

### Kỹ năng nội dung (Bước 4–6)
- **Design**: bìa ebook đẹp, mockup 3D (không cần chuyên), matching thương hiệu
- **Copywriting**: ebook 6 chương, mỗi chương có ví dụ thật + CTA ở cuối
- **HTML/CSS**: landing page responsive (mobile/desktop), form 3 trường (Họ tên, Email, SĐT)

### Kỹ năng vận hành (Bước 7–10)
- **Lark Base**: tạo bảng, cấu hình field, bảng Leads + Nurture
- **SMTP**: cấu hình hộp thư gửi, nhúng pixel đo mở, dedup bằng KV
- **Cloudflare Worker**: viết code ghi vào Base, gửi email, chạy cron 8h sáng
- **Lệnh deploy**: `npx wrangler deploy`, `npx wrangler secret put`, gắn domain DNS

## Phân vai: AI vs Người vận hành

| Việc | [[entities/claude-code]] | Người vận hành |
|---|---|---|
| Bước 1–6 (content + design) | ✔ Toàn bộ | (duyệt 3 chốt) |
| Bước 7–10 (data + automation) | ✔ Toàn bộ code | (set secret, xác nhận) |
| **Tạo App Lark + scope** | | ✔ |
| **Nhập mật khẩu SMTP** | | ✔ |
| **Set wrangler secret** | | ✔ |
| **Sửa DNS / gắn domain** | | ✔ (nếu token thiếu quyền) |

## Cách chạy 10 bước không gián đoạn

**Điều kiện tiên quyết (người vận hành chuẩn bị trước):**

1. ✅ Tài khoản Cloudflare đã đăng nhập `wrangler login`
2. ✅ Domain trên Cloudflare, nameserver active
3. ✅ App Lark (scope bitable, published), đã add vào Base làm cộng tác viên
4. ✅ Hộp thư SMTP (bật IMAP/SMTP, lấy mật khẩu)
5. ✅ **Set sẵn 6 secret** qua `wrangler secret put`:
   - LARK_APP_ID, LARK_APP_SECRET
   - SMTP_USER, SMTP_PASS, FROM_NAME
   - ZALO_LINK

**Khi mọi thứ sẵn sàng:**
- Giao đầu bài + phiếu chứa: product, audience, goal, subdomain, link khóa, testimonial, con số uy tín
- AI chạy 1 mạch từ chiến lược → deploy, không phải dừng xin credential

**Nếu chưa sẵn sàng:**
- Chế độ "bán tự động": dừng ở 3 chốt duyệt (research → ebook → leadpage)
- Người vận hành duyệt chất lượng rồi bấm "tiếp tục"

## Giới hạn & rủi ro

- **Độ chính xác đo mở email:** chỉ tính khi app email tải ảnh (Apple Mail Privacy không tính)
- **Giới hạn SMTP**: Larksuite ~200 mail/100s, 6000/ngày — chiến dịch lớn cần chia tải
- **Domain conflict**: kiểm tra subdomain chưa trỏ nơi khác trước khi gắn
- **Ghi đè nhầm**: xóa record test sau mỗi lần nghiệm thu để tránh lẫn vào dữ liệu thật

## Tái dùng cho chiến dịch khác

**Lần đầu tiên (chiến dịch 1):**
- Setup 1 lần: tài khoản, app, SMTP, domain (phức tạp nhất)
- Chạy 10 bước

**Lần thứ 2 trở đi (chiến dịch 2, 3, ...):**
- **Tái dùng**: Cloudflare, app Lark, hộp thư SMTP
- **Làm mới**: phiếu đầu bài, subdomain, 10 bước lại (nhanh hơn vì không setup)
- Có thể dùng **template hoá Phiếu đầu bài** thành form Lark để học viên điền chuẩn

---

## Liên kết

- [[sources/2026-06-20-nha-may-pheu]] — Toàn bộ giáo trình
- [[concepts/nha-may-pheu]] — Định nghĩa hệ thống
- [[concepts/pheu-ban-hang]] — Khái niệm phễu
- [[entities/lark]] — Nền tảng Lark Base
- [[entities/cloudflare]] — Nền tảng Cloudflare

