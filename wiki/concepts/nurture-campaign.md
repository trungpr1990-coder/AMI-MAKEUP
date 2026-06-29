---
title: Nurture Campaign — 10 ngày email tự động nuôi dưỡng lead
type: concept
tags: [email-marketing, nurture, automation, conversion, engagement]
created: 2026-06-24
updated: 2026-06-24
sources: [2026-06-20-giao-trinh-nha-may-pheu.md]
---

# Nurture Campaign — 10 ngày email tự động

**Nurture campaign** là chuỗi email tự động gửi trong 10 ngày sau khi khách nhận ebook, mục đích xây dựng tin tưởng → sẵn sàng mua.

## Timeline 10 ngày

| Ngày | Tiêu đề | Mục đích | Nội dung |
|-----|---------|---------|---------|
| **D1** | Gửi ebook + cảm ơn | Xác nhận nhận | "Ebook đã gửi, mở link tải" |
| **D2** | Câu chuyện của tôi | Khơi nỗi đau | "Năm ngoái tôi cũng vậy... rồi tìm ra cách X..." |
| **D3** | Nỗi đau của bạn | Validate problem | "Mình nghe nhiều người khó khăn với Y... bạn cũng vậy?" |
| **D4** | Giải pháp của tôi | Introduce solution | "Mình tìm ra 3 cách giải quyết..." |
| **D5** | Case study 1 | Proof | "A (người thực) làm cách X → kết quả Y" |
| **D6** | Case study 2 | Thêm proof | "B (người thực) từng Z → bây giờ W" |
| **D7** | Comparison | vs thay thế | "Cách truyền thống vs cách mình → hiệu quả gấp mấy lần" |
| **D8** | Benefit list | Concrete value | "Bạn sẽ: được X, không còn Y, tiết kiệm Z..." |
| **D9** | Urgency | FOMO | "Khóa chỉ còn X chỗ, deadline ngày hôm nay" |
| **D10** | Last call + CTA | Convert | "Link trang bán khóa, thanh toán ngay" |

## Cách viết email nurture tốt

**D1–D3: Khơi nỗi đau**
- Lấy 1 nỗi đau chính từ research
- Kể câu chuyện cá nhân (của bạn hoặc học viên)
- "Bạn có cảm thấy...?" ← làm khách nước mắt

**D4–D7: Giới thiệu giải pháp + proof**
- Đừng nói khóa ngay → lây từ từ
- Highlight 3 benefit chính
- Dùng case study thật (tên thật + số liệu)

**D8–D10: Close sale**
- Remind benefit
- Urgency (limited slot, deadline)
- Strong CTA: "Tham gia khóa ngay" (link trang bán)

## Pixel đo mở email

Mỗi email chứa 1 ảnh tí hon (1x1 pixel ẩn):
```html
<img src="https://domain.com/open?lead_id=123&day=2" alt="" />
```

Khi khách mở → browser load ảnh → hit URL → tag "Đã mở" + timestamp.

**Giới hạn:** Apple Mail Privacy, Outlook (tắt ảnh) → không tính

## Tỷ lệ mở và tối ưu

**Benchmark:**
- D1 (ebook): 40–50% (cao, mang ebook)
- D2–D5: 20–30%
- D8–D10 (CTA mạnh): 10–20%

**Cách tối ưu:**
- **Tiêu đề**: rõ ràng, có number (D4 "3 cách", D5 "4 bước")
- **Preview text**: 50 ký tự đầu quyết định → viết hấp dẫn
- **Send time**: 8h sáng → open rate cao nhất
- **Frequency**: 1 email/ngày là tối ưu (không spam, không quên)

---

## Liên kết

- [[concepts/pheu-ban-hang]] — Phễu bán hàng (tầng Decision)
- [[concepts/nha-may-pheu]] — Hệ thống tự động nurture
- [[nang-luc/2026-06-24-ten-buoc-dung-pheu]] — Bước 9 (viết nurture)

