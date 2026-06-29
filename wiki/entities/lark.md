---
title: Lark (Feishu) — Nền tảng quản lý dữ liệu, email, tích hợp
type: entity
tags: [platform, database, base, crm, email, lark-suite]
created: 2026-06-24
updated: 2026-06-24
sources: [2026-06-20-giao-trinh-nha-may-pheu.md]
---

# Lark (Feishu)

**Lark** (tên Trung Quốc: Feishu) là nền tảng quản lý tích hợp của Bytedance, bao gồm email, Base (database), chat, docs.

## Dùng trong "Nhà máy phễu"

1. **Lark Base**: lưu bảng Leads, Email Nurture, quản lý dữ liệu
2. **Lark Mail**: gửi email ebook + nurture 10 ngày (qua SMTP)
3. **Lark API**: Worker ghi/đọc Base qua lark-cli

## Giá cả

- **Cơ bản**: $0/tháng (500 records, 5 views)
- **Pro**: $10/tháng (records unlimited, automation)
- **Dùng cho**: quản lý lead, CRM nhẹ, data tracking

## Đặc điểm

✅ **Ưu:**
- Giá rẻ so với Airtable, Salesforce
- Tích hợp email sẵn (không cần 3rd party)
- Base giống Airtable (dễ học)
- API tốt, lark-cli đơn giản

❌ **Nhược:**
- UI không quen so với Salesforce
- Automation chậm (delay 1–5 phút)
- Rate limit API: 10 calls/sec
- Tài liệu Tiếng Anh ít

## Lark Base là gì

**Base** = database đơn giản (bảng, view, record, field).

Ví dụ bảng Leads:
| Họ tên | Email | SĐT | Ngày đăng ký | Trạng thái |
|--------|-------|-----|----------|----------|
| Thuý | thuý@... | 0xxx | 2026-06-24 | Đã gửi ebook |

## Lark Mail

**Mail** = hộp thư gửi email.

Cấu hình SMTP:
- Server: `smtp.larksuite.com:465` (TLS)
- User: email của bạn
- Pass: mật khẩu SMTP (lấy Admin Console)

---

## Liên kết

- [[concepts/lark-cli-tich-hop]] — lark-cli là gì
- [[vat-chat/2026-06-24-ha-tang-cloudflare-lark-domain]] — Hạ tầng

