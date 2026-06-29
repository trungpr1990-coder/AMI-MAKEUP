---
title: "Nhà máy phễu" — Hệ thống thu lead tự động
type: concept
tags: [lead-generation, automation, system, funnel, scalable]
created: 2026-06-24
updated: 2026-06-24
sources: [2026-06-20-giao-trinh-nha-may-pheu.md]
---

# "Nhà máy phễu" — Hệ thống thu lead tự động

**Định nghĩa:** Một hệ thống tự động hoá đầy đủ từ **landing page → nhận lead → gửi ebook → nuôi dưỡng 10 ngày → đo conversion**, chạy 24/7 mà không cần can thiệp tay sau khi triển khai.

## Ẩn dụ "Nhà máy"

- **Input**: khách hàng đầu tiên (điền form)
- **Process**: chuỗi các bước (tự động hoá)
- **Output**: khách sẵn sàng mua (hết 10 ngày nurture)

Giống như **nhà máy sx**: lắp ráp lần 1 (setup 10 bước), sau đó bỏ hàng nguyên liệu (khách bắt đầu) → tự chảy qua các công đoạn → ra thành phẩm (customer sẵn mua).

## 4 Giai đoạn hoạt động

| Giai đoạn | Tác vụ | Tự động |
|----------|--------|--------|
| **0. Setup** | Dựng infrastructure, code, bảng data | Chỉ làm 1 lần |
| **1. Awareness** | Landing page sống, chạy quảng cáo (ngoài scope) | Cloudflare host 24/7 |
| **2. Interest** | Khách điền form → ghi Base → gửi ebook | Worker tự động |
| **3. Decision** | 10 ngày email nurture tự gửi, khách mở email → đo lường | Cron tự động 8h sáng |
| **4. Action** | Khách click email → về trang bán khóa (ngoài scope) | Link trong email |

## Lợi ích

1. **Tiết kiệm thời gian**: setup 1 lần, chạy hàng tháng
2. **Tiết kiệm chi phí**: Cloudflare miễn phí, Lark giá rẻ, domain $10/năm
3. **Scalable**: 10 khách/tháng hay 1000 khách/tháng, code không đổi
4. **Đo lường chính xác**: pixel đo mở email, track conversion từng ngày
5. **Tái dùng**: lần 2 chỉ cần đổi nội dung, không cần code lại

## Thách thức

1. **Thiết kế phức tạp**: 10 bước, 4 công cụ, cần hiểu sâu
2. **Test kỹ**: bug ở 1 chỗ → mất dữ liệu/khách
3. **Credential management**: mật khẩu, secret phải bảo mật
4. **Email deliverability**: khác ISP (Gmail, Outlook, Zalo Mail) có rules khác nhau

## So sánh với cách làm khác

| Cách | Chi phí | Thời gian setup | Tự động | Skalable |
|-----|---------|--------|---------|----------|
| **Nhà máy phễu** (Cloudflare + Lark + Claude) | Rẻ ($10–20/năm) | 2–3 ngày | 99% | ✔ |
| Ladipage + Make/Zapier | Trung bình ($50–100) | 2–3 ngày | 80% | ✔ |
| Nguyên Lark (Base automation + scheduler) | Rẻ ($10–100) | 1–2 ngày | 70% | ~ |
| Landing Page Builder (Unbounce, Leadpages) | Cao ($100–300) | 1 ngày | 50% | ✔ |
| Hired marketer (thủ công) | Rất cao ($5M+) | 1–2 tuần | 0% | ✗ |

---

## Liên kết

- [[concepts/pheu-ban-hang]] — Phễu bán hàng là gì
- [[tri-tue/2026-06-24-kien-truc-nam-may-pheu]] — Kiến trúc chi tiết
- [[nang-luc/2026-06-24-ten-buoc-dung-pheu]] — 10 bước dựng

