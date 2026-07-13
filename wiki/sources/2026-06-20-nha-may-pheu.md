---
title: Giáo trình "Nhà máy phễu" — Hệ thống thu lead tự động
type: source
tags: [pheu-ban-hang, lead-generation, automation, cloudflare, lark, claude-code, teaching]
created: 2026-06-20
updated: 2026-06-24
sources: [2026-06-20-giao-trinh-nha-may-pheu.md]
---

# Giáo trình "Nhà máy phễu" — Hệ thống thu lead tự động

Tài liệu chuyên sâu hướng dẫn dựng hệ thống thu lead & nuôi dưỡng khách hàng **hoàn toàn tự động**: từ landing page → Base dữ liệu Lark → gửi ebook → 10 ngày email nurture → đo mở email. Được thiết kế cho giảng viên/chủ doanh nghiệp dùng Claude Code + Lark + Cloudflare (miễn phí) để khởi động chiến dịch bán hàng mà không cần đội lập trình.

## Key Points

- **Framework 4 mảnh**: Claude (tạo nội dung + code) + lark-cli (điều khiển Lark) + Lark Base (dữ liệu) + Cloudflare Worker (backend luôn bật)
- **10 bước dựng phễu**: chiến lược → research → mồi câu (ebook) → bìa → PDF → leadpage → bảng dữ liệu → email giao → nurture 10 ngày → deploy
- **Phân chia rõ**: setup 1 lần (tài khoản, app, domain) + mỗi chiến dịch tạo lại (brief, nội dung, subdomain, worker)
- **3 chế độ vận hành**: giám sát full / bán tự động (3 chốt duyệt) / tự động hoàn toàn
- **11 lỗi thực chiến + cách fix**: xử lý unicode, secret propagation, DNS repoint, dedup mở email, etc.

## Cấu trúc tài liệu

**Chương 1 — Setup từ máy trắng (9 phần):**
- Phần 1–2: Cài phần mềm nền, kết nối Claude → Lark
- Phần 3–5: Tạo Base/App/SMTP trong Lark, setup Cloudflare + domain
- Phần 6: Giao đầu bài cho Claude, Claude chạy 10 bước
- Phần 7–9: Nhập secret, lên sóng domain, nghiệm thu

**Chương 2 — Cẩm nang vận hành (3 phần):**
- Tư duy nền: tách "setup 1 lần" vs "per-campaign"
- Phiếu đầu bài đầy đủ: product, audience, goal, infrastructure
- Bảng phân vai: AI làm gì, người vận hành làm gì
- SOP chuyển giao cho học viên

**Chương 3 — Thực chiến:**
- Tóm tắt 1 chiến dịch mẫu chạy thật
- 11 lỗi gặp phải trong quá trình + cách fix chi tiết
- Nguyên tắc xuyên suốt: tôn trọng ranh giới bảo mật

## Entities Mentioned

- [[entities/claude-code]] — Tool tạo nội dung, code, deploy
- [[entities/lark]] — Platform quản lý dữ liệu & gửi email
- [[entities/cloudflare]] — Hosting miễn phí cho worker/landing page
- Tên miền (domain) cho chiến dịch — chưa gắn với entity cụ thể

## Concepts

- [[concepts/nha-may-pheu]] — Định nghĩa hệ thống
- [[concepts/pheu-ban-hang]] — Khái niệm phễu bán hàng
- [[concepts/lark-cli-tich-hop]] — Cách tích hợp Claude + Lark
- [[concepts/cloudflare-worker]] — Backend tự động hoá
- [[concepts/nurture-campaign]] — Chuỗi 10 ngày nuôi dưỡng

## Notes

**Mục đích gốc:** Tư vấn cho Thuý Trần cách "mô phỏng quy trình 10 bước phễu thành hệ thống tự động" để có thể nhân bản & dạy cho học viên (chứ không phải làm thủ công lặp lại mỗi lần).

**Độ hoàn thiện:** Từng được chạy thật 1 chiến dịch, ghi lại 11 lỗi & fix. Mục tiêu là có thể **tạo một chiến dịch mới chỉ bằng 1 phiếu đầu bài** mà không phải dừng hỏi thông tin giữa chừng.

**Giới hạn:** Tài liệu này cho phiên bản text-based (lark-cli + Worker). Có phương án thay thế "nguyên Lark" nhưng kém linh hoạt hơn (xem Phụ lục C).

