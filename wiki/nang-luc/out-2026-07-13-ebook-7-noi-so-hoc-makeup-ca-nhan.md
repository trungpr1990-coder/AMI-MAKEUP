---
title: Ebook "7 Nỗi Sợ Khiến Phụ Nữ Mãi Chưa Dám Học Makeup Cho Chính Mình"
type: output
khoang: nang-luc
tags: [ebook, lead-magnet, makeup-ca-nhan, content, ami]
created: 2026-07-13
updated: 2026-07-20
sources: []
---

## Tóm tắt

Ebook mồi câu (lead magnet) cho dòng Makeup Cá Nhân AMI, viết theo skill `hmh-mkt-ebook-sach-lat`. 7 chương ứng với 7 nỗi sợ thật, mỗi chương theo cấu trúc: nỗi sợ thật (trích câu khách từng hỏi) → sự thật phía sau → góc nhìn của Thuý → hành động nhỏ có thể làm ngay. Kết thúc bằng bảng tự đánh giá + CTA giới thiệu khoá Basic/VIP.

**File:** `output/2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan/7-noi-so-hoc-makeup-ca-nhan.pdf` (20 trang, bản .md + .html đi kèm cùng thư mục).

## Nguồn dữ liệu grounded (không bịa)

7 nỗi sợ được rút từ insight thật đã có trong bộ não, không phải suy đoán mới:
- [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]] — insight map thật (câu hỏi khách từng hỏi trực tiếp Thuý)
- [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] — nỗi đau cào từ MXH
- [[nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi]] — cách AMI xử lý nỗi sợ "không có năng khiếu" trong buổi học thật
- [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]] — giọng điệu (60% đồng hành/30% chuyên gia/10% cá tính, tránh từ "hoàn hảo/lột xác/biến hình")
- Giá & chính sách: khoá Basic 2 triệu/3 buổi, VIP 3 triệu/5 buổi, hotline 0327.355.595 — từ [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]]

## Quyết định kỹ thuật

Bản build PDF **không dùng logo Mentorcamp mặc định** của skill (assets dùng chung `logo-mentorcamp-*.png`) vì đây là tài sản của AMI, không phải Mentorcamp — dùng bìa chữ (text-only) với tagline "AMI MAKEUP ACADEMY · HIỂU MÌNH TRƯỚC KHI ĐẸP" thay logo ảnh, tránh gắn nhầm thương hiệu. Nếu muốn có logo ảnh thật AMI trên bìa, cần bổ sung file logo AMI dạng PNG nền trong suốt/tối.

## Xuất bản (2026-07-20)

Theo yêu cầu trực tiếp của Thuý ("lấy sẵn 1 cuốn ebook tạo sách lật cho tôi"), đã xuất bản công khai:

- **PDF công khai:** https://ami-ebooks.pages.dev/pdf/7-noi-so-hoc-makeup-ca-nhan.pdf — host trên Cloudflare Pages project mới `ami-ebooks` (project riêng, không đụng site khách hàng `ami-website`), vì Novamira MCP (cách host gốc theo SOP skill) chưa từng được cấu hình thật trên máy này.
- **Sách lật Heyzine:** https://heyzine.com/flip-book/6b2fa539ab.html (20 trang, id `6b2fa539abfc5ec625e2832eedc205462ebbaa55`)
- Thuý đã tự đăng ký tài khoản Heyzine (gói miễn phí — 5 sách lật, có API access) và cung cấp `HEYZINE_API_KEY` + `HEYZINE_CLIENT_ID`, đã lưu vào `.env` của dự án để dùng lại cho các ebook sau.

## Việc chưa làm (tuỳ chọn)

- Đăng lên Lark Wiki Academy (chưa yêu cầu)

## Liên kết
[[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]], [[nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi]], [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]], [[entities/ami-makeup-academy]]
