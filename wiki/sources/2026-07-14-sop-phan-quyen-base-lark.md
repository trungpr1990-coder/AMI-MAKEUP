---
title: SOP Phân Quyền Base Lark Vận Hành Công Ty
type: source
tags: [lark-base, phan-quyen, van-hanh, sop]
created: 2026-07-14
updated: 2026-07-14
sources: [lark-docx-GgjKd8aceoS0uKxXPYej9Oabpac, lark-docx-JyHJd7ox7oE3NjxRbdBjKKnppE9]
---

## Summary

Hai tài liệu Lark Docx (bản v1 và v2, v2 đầy đủ hơn) trình bày nghiên cứu + kế hoạch phân quyền cho Base Lark vận hành công ty (app `Pq8vbFwEeajzdhsykL1jdRhnpkc`, 63 bảng). Mục tiêu: hiểu cách toàn bộ tiến trình kinh doanh chảy qua Base, sau đó phân quyền truy cập cho 5 phòng ban (Sale, Marketing, Media Edit, Kế toán, CSKH) bằng tính năng "Quyền nâng cao" của Lark Base, để mỗi phòng chỉ thấy/sửa đúng phần việc của mình và giấu kín dữ liệu nhạy cảm (lương, giá vốn, thu chi).

**Trạng thái:** Đây là kế hoạch/hướng dẫn — CHƯA thực hiện. Thuý xác nhận (2026-07-14) hiện chưa có nhân viên nên chưa cần làm ngay; để dành khi nào tuyển người.

## Key Points

- 2 động cơ doanh thu đổ về tài chính & lương: ① POS/Poscake (bán online, ~78k đơn) và ② Dịch vụ/Hợp đồng (studio)
- `1.2 Gói dịch vụ` = bảng gốc giá, sửa 1 chỗ cả hệ thống đổi theo
- `6.1.2 Hệ thống lương` tự tính lương cứng bậc thang + hoa hồng 1-5% × hệ số hiệu quả ads — cực nhạy cảm, phải khóa
- Lưu đồ vận hành 7 bước: Marketing → Sale → (Bán online/Dịch vụ) → Media Edit → Kế toán → CSKH → Tài chính & Quản trị
- Quyền cơ bản của Lark Base là tất-cả-hoặc-không → bắt buộc bật "Quyền nâng cao" để phân quyền theo từng bảng (Quyền bảng / Phạm vi bản ghi / Quyền từng cột / Gán thành viên)
- Ma trận phân quyền chi tiết cho 12 nhóm bảng × 6 vai trò (Sale/MKT/Media/Kế toán/CSKH/Quản trị)
- 3 bảng "tối mật" chỉ Kế toán & Quản trị được thấy: 6.1.2 Lương, 5.1 Giá vốn/lợi nhuận, 6.3 Thu Chi
- Các bước gán quyền thực tế (làm 1 lần): bật Quyền nâng cao → tạo Role → mặc định ẩn hết rồi mở dần theo ma trận → ẩn cột nhạy cảm → set phạm vi bản ghi "chỉ bản ghi do mình thêm" cho Sale → gán người → test bằng "Xem với vai trò..."
- Bản v2 bổ sung: gán tên người thật vào vai trò (VD Sale: Lê Thị Mỹ Linh, Đinh Thị Thuý Hậu, Dương Xuân Trọng, Dương Thị Sang, Hồ Tùng...), và cảnh báo đang thiếu nhân sự ở vị trí Ads, Kế toán, CSKH, Makeup/Photo — cần bổ sung vào bảng 6.1.1 trước khi gán quyền
- SOP nhịp báo cáo hằng ngày/tuần/tháng cho từng phòng ban

## Entities Mentioned

[[entities/lark]]

## Concepts

Chưa có concept page riêng — xem chi tiết đầy đủ tại [[nang-luc/2026-07-14-sop-phan-quyen-base-lark]]

## Notes

- Tài liệu v2 (`JyHJd7ox7oE3NjxRbdBjKKnppE9`) là bản đầy đủ hơn v1 (`GgjKd8aceoS0uKxXPYej9Oabpac`), có thêm mục phân công người thật + link diagram trực quan (artifact Claude). Khi cần dùng lại, ưu tiên đọc v2.
- Base `Pq8vbFwEeajzdhsykL1jdRhnpkc` này là base vận hành công ty nói chung — chưa rõ có phải cùng base CRM Thúy Thúy (`base_token O2qIbEaIYabXEGsW6Dzjs0LCpZg`, xem [[reference-crm-thuy-thuy-base-token]] trong memory) hay không. Cần xác nhận lại khi thực thi.
