---
title: Claude Code — AI tool tạo nội dung, code, automation
type: entity
tags: [ai-tool, code-generation, content-creation, automation]
created: 2026-06-24
updated: 2026-06-24
sources: [2026-06-20-giao-trinh-nha-may-pheu.md]
---

# Claude Code

**Claude Code** là công cụ AI của Anthropic, chạy ở máy tính cá nhân, giúp tạo nội dung, viết code, vận hành tự động.

## Dùng trong "Nhà máy phễu"

1. **Viết nội dung**: ebook, landing page, email (6 bước → 10 ngày)
2. **Viết code**: Worker JavaScript (nhận form, gửi email, cron)
3. **Tạo bảng**: Base schema (lệnh lark-cli)
4. **Design**: tạo concept ebook, landing page layout

## Cách hoạt động

- Chạy ở máy của bạn (CLI hoặc desktop app)
- Kết nối VS Code hoặc editor
- Chạy lệnh shell, Python, Node.js
- Gọi API (lark-cli, wrangler)

## Giá cả

- Claude API: pay-per-token (khoảng 0.003 USD / 1K token input)
- Claude Code CLI: miễn phí (dùng API bạn)
- 1 chiến dịch phễu: khoảng 2–5 USD chi phí token

## Mô hình AI

- **Haiku** (nhanh, rẻ): tốt cho văn bản ngắn
- **Opus** (mạnh, đắt): tốt cho code phức tạp, creative content
- Dùng Opus cho chiến dịch phễu (giáo trình này)

## Nguyên tắc an toàn

- ❌ Không bao giờ nhập mật khẩu vào Claude
- ✅ Luôn dùng `wrangler secret put` cho credential
- ❌ Không bao giờ post private key, API token vào chat công khai

---

## Liên kết

- [[concepts/nha-may-pheu]] — Hệ thống tạo bằng Claude
- [[tri-tue/2026-06-24-kien-truc-nam-may-pheu]] — Kiến trúc 4 mảnh

