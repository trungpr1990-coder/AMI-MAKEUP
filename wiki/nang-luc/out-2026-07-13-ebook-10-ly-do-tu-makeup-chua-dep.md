---
title: Ebook "10 Lý Do Khiến Bạn Tự Makeup Mãi Vẫn Chưa Đẹp"
type: output
khoang: nang-luc
tags: [ebook, lead-magnet, makeup-ca-nhan, content, ami]
created: 2026-07-13
updated: 2026-07-13
sources: []
---

## Tóm tắt

Ebook mồi câu (lead magnet) thứ 2 cho dòng Makeup Cá Nhân AMI, viết theo quy trình [[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]] (rút từ [[sources/2026-07-13-co-may-marketing-an-danh]]) và cùng khung kỹ thuật xuất bản với [[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]]. Khác tệp khách và khác giai đoạn phễu: ebook này nhắm vào người **đã tự makeup nhiều lần nhưng chưa ưng ý** (không phải người chưa dám bắt đầu). 10 chương ứng với 10 lý do thật, mỗi chương theo cấu trúc: câu nói/tình huống thật → sự thật phía sau → góc nhìn của Thuý → hành động nhỏ có thể làm ngay. Kết thúc bằng bảng tự đánh giá + CTA giới thiệu khoá Basic/VIP.

**File:** `output/2026-07-13-ebook-10-ly-do-tu-makeup-chua-dep/10-ly-do-tu-makeup-chua-dep.pdf` (23 trang, bản .md + .html đi kèm cùng thư mục).

## Nguồn dữ liệu grounded (không bịa)

10 lý do chia làm 2 nhóm nguồn thật, không suy đoán mới:

- **7 lý do kỹ thuật** (Lý do 1-7) — rút trực tiếp từ mục "Lỗi thường gặp cần sửa" + nội dung chi tiết từng buổi trong [[nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi]] (giáo án dạy thật của Thuý): sai loại da/tone da, bỏ qua dưỡng ẩm, đổ nền không đều, đặt khối/highlight sai vị trí, kẻ mày sai dáng, bỏ cuộc trước kỹ thuật khó.
- **3 lý do tâm lý/thói quen** (Lý do 8-10) — rút từ [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] (câu nói thật của khách/bình luận mạng xã hội): niềm tin "mặt đẹp sẵn" (bình luận TikTok 3.876 likes), muốn makeup theo form mặt riêng thay vì theo trend chung, tự học một mình không ai sửa lỗi.
- Giọng điệu theo [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]] (60% đồng hành/30% chuyên gia/10% cá tính); giá & chính sách lấy từ [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]] (Basic 2 triệu/3 buổi, VIP 3 triệu/5 buổi, hotline 0327.355.595) — giống hệt ebook trước để nhất quán thông tin.

## Quyết định kỹ thuật

Script `build-pdf.mjs` của skill `hmh-mkt-ebook-sach-lat` luôn nhúng ảnh logo Mentorcamp thật (`assets/logo-mentorcamp-*.png`) vào bìa/trang phân Phần/trang cuối nếu 2 file đó tồn tại trong thư mục assets dùng chung của skill — không có cờ tắt riêng. Vì đây là tài sản AMI chứ không phải Mentorcamp (giống quyết định đã ghi ở ebook trước), lần này **không sửa file dùng chung của skill** (bị chặn đúng khi thử) mà xử lý an toàn trên file riêng của dự án: build PDF bình thường trước, sau đó dùng `sed` xoá 6 thẻ `<img class="logo-img">` khỏi file `.html` đã sinh ra, rồi tự gọi lại Chrome headless `--print-to-pdf` trên đúng HTML đã xoá logo (qua thư mục TEMP để né lỗi path tiếng Việt, giống cách script gốc làm). Kết quả: bìa chữ (text-only) với tagline "AMI MAKEUP ACADEMY · HIỂU MÌNH TRƯỚC KHI ĐẸP", đã chụp ảnh kiểm tra bìa/mục lục — đúng như kỳ vọng, không dính nhầm thương hiệu.

## Việc chưa làm (cần Thuý duyệt trước khi làm)

- Host PDF công khai qua Novamira → domain AMI
- Tạo sách lật Heyzine
- Đăng lên Wiki Academy (nếu muốn)

Chưa thực hiện vì đây là bước xuất bản công khai — theo nguyên tắc *feedback-deploy-only-after-approval*, dừng lại chờ Thuý duyệt nội dung trước.

## Liên kết
[[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]], [[nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi]], [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]], [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]], [[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]], [[entities/ami-makeup-academy]]
