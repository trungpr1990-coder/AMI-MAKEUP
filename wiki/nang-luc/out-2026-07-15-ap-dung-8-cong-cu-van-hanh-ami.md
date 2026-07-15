---
title: Áp Dụng 8 Công Cụ Quản Trị Vận Hành Vào AMI
type: analysis
khoang: nang-luc
tags: [quan-tri-van-hanh, ami, bmc, swimlane, work-instruction]
created: 2026-07-15
updated: 2026-07-15
sources: [text input, [[concepts/8-cong-cu-quan-tri-van-hanh]]]
---

## Summary

Áp dụng thực tế 8 công cụ ở [[concepts/8-cong-cu-quan-tri-van-hanh]] vào tình huống vận hành thật của AMI: Thuý một mình gánh chính, có chồng hỗ trợ phụ + 2 học viên đồng hành khi có khách (xem [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]]).

## Key Points

### 1. BMC — dựng ngay được vì đã có data thật
Đã có sẵn: giá đã chốt, quy mô khách, đối thủ, doanh thu mục tiêu 50tr/tháng, công suất 10-15 khách/tháng (xem [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]], [[nang-luc/out-2026-07-12-phan-tich-thi-truong-doi-thu-ami]]). Đây là bước làm ĐẦU TIÊN vì là gốc — mọi công cụ còn lại chỉ soi chi tiết cho BMC.

### 2. BSC — tránh chỉ chăm doanh thu
Rủi ro cụ thể của Thuý: chạy ads tăng doanh thu (góc Tài chính) nhưng bỏ quên tốc độ chăm sóc/chất lượng dạy (góc Khách hàng, Quy trình) — trong khi referral là nguồn khách rẻ nhất khi chỉ 1 người vận hành marketing.

### 3. Value-Added Analysis — tìm việc để giao bớt
Rà soát hoạt động hàng ngày của Thuý để phân loại VA/BVA/Waste — mục tiêu là tìm ra việc Waste hoặc BVA có thể giao cho chồng/2 học viên hỗ trợ, giải phóng thời gian cho phần chỉ Thuý làm được (dạy, chuyên môn, tư vấn khó).

### 4. SIPOC — vẽ trước khi vào chi tiết
Áp dụng cho quy trình "khách đăng ký khoá học makeup cá nhân": từ lúc khách nhắn tin (Input) đến lúc học xong nhận chứng nhận (Output) — nhìn toàn cảnh trước khi vẽ Swimlane.

### 5. Swimlane — công cụ ưu tiên cao nhất hiện tại
Vì mới có thêm người hỗ trợ (chồng + 2 học viên) nhưng ranh giới ai-làm-gì có thể chưa rõ. Vẽ swimlane cho quy trình "buổi học makeup" để trả lời: Thuý làm gì, chồng hỗ trợ khâu nào, học viên phụ làm gì, bàn giao ở đâu — tránh chồng chéo hoặc rơi rớt việc.

### 6. WI — viết cho việc lặp lại, giao được
Ưu tiên viết WI cho: quy trình chuẩn bị bàn trang điểm trước buổi học, quy trình gửi tài liệu sau buổi học — việc lặp lại thường xuyên, không cần Thuý chỉ tay từng lần.

### 7. OPL — đào tạo nhanh người hỗ trợ
Quay 1 video ngắn (2-5 phút) cho 1 kỹ năng/thao tác cụ thể thay vì viết tài liệu dài — cách nhanh nhất để dạy chồng/2 học viên hỗ trợ.

### 8. ITTO — khung khi viết SIPOC/WI
Dùng làm khung tư duy khi viết SIPOC hoặc WI cho AMI để không bỏ sót Input/Output ở mỗi bước — đặc biệt quan trọng ở các điểm bàn giao trong Swimlane.

## Thứ tự triển khai đề xuất

1. **BMC** — làm nhanh vì đã có data
2. **Swimlane** buổi học — giải đúng điểm đau vận hành hiện tại (đã có thêm người hỗ trợ)
3. **WI + OPL** — cho các việc giao được ngay
4. BSC / SIPOC / Value Analysis — làm sau khi quy trình cốt lõi đã ổn

## Concepts

[[concepts/8-cong-cu-quan-tri-van-hanh]], [[concepts/sau-linh-vuc-kinh-doanh]]

## Entities Mentioned

[[entities/ami-makeup-academy]]

## Notes

Chưa triển khai thật — đây là bản đồ ưu tiên chờ Thuý xác nhận trước khi bắt tay dựng BMC/Swimlane cụ thể.
