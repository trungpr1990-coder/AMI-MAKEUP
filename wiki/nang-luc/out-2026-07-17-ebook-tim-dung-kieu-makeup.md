---
title: Ebook "Tìm Đúng Kiểu Makeup Hợp Với Khuôn Mặt Bạn — Không Cần Học Theo Người Khác"
type: output
khoang: nang-luc
tags: [ebook, lead-magnet, makeup-ca-nhan, content, ami, self-test]
created: 2026-07-17
updated: 2026-07-17
sources: []
---

## Tóm tắt

Ebook mồi câu (lead magnet) thứ 3 cho dòng Makeup Cá Nhân AMI, viết theo quy trình [[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]] và cùng khung kỹ thuật xuất bản với [[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]] và [[nang-luc/out-2026-07-13-ebook-10-ly-do-tu-makeup-chua-dep]]. Khác định dạng: đây là ebook **tự trắc nghiệm (self-test)**, không phải chỉ đọc suông — người đọc tự soi gương, tự nhận diện dáng mặt (5 loại: tròn/vuông/trái xoan/dài/trái tim) và dáng mắt (4 loại: một mí/hai mí/xếch/tròn to), mỗi loại có phần "tự kiểm tra" (2-3 đặc điểm dễ tự soi, không cần dụng cụ đo) + "nguyên tắc layout gợi ý" (vùng tạo khối/tán sáng/kiểu chân mày-kẻ mắt, ở mức nguyên tắc chung, không đi sâu kỹ thuật giáo án). Kết thúc bằng bảng tổng hợp tự chấm điểm + CTA mời xác nhận trực tiếp với Thuý.

**File:** `output/2026-07-17-ebook-tim-dung-kieu-makeup/tim-dung-kieu-makeup.pdf` (24 trang, bản .md + .html đi kèm cùng thư mục).

## Nguồn dữ liệu grounded (không bịa)

- Tinh thần chủ đạo lấy từ [[nang-luc/2026-07-11-dinh-vi-thuong-hieu-ami-chinh-thuc]] (định vị đã CHỐT): "Mỗi phụ nữ có vẻ đẹp riêng — không có công thức makeup chung cho tất cả"; "kẻ thù chung" = "việc phụ nữ đang cố làm đẹp theo người khác mà quên mất vẻ đẹp riêng của mình".
- Bình luận TikTok thật (3.876 likes) "khung mặt cj này đẹp sẵn r" — dùng mở đầu ebook để nhẹ nhàng phản bác niềm tin "đẹp là do mặt đẹp sẵn", theo đúng brief từ [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] (mục 6).
- 3 câu quote thật của khách/học viên dùng nguyên văn trong ebook: "da nhiều khuyết điểm: lỗ chân lông to, nám, mặt vuông, mắt sụp mí. Mong muốn được hỗ trợ dụng cụ, mỹ phẩm khi học"; "...làm sao biết bản thân nên nhấn makeup vào phần nào để làm nổi nét có sẵn của khuôn mặt"; "...makeup theo form mặt học viên, không phải theo tone douyin hay tone hồng ạ" — cả 3 từ [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] và [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]].
- Nguyên tắc layout theo dáng mặt/dáng mắt (khối/tán sáng/chân mày/kẻ mắt) là kiến thức nghề makeup phổ thông ở mức nguyên tắc chung — KHÔNG lấy chi tiết kỹ thuật sâu từ giáo án VIP 5 buổi (giữ đúng "nguyên tắc vàng" ở [[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]]: cho biết cách làm gì, không cho hết toàn bộ kỹ thuật).
- Giọng điệu theo [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]] (60% đồng hành/30% chuyên gia/10% cá tính; tránh "đẹp nhất/hoàn hảo/lột xác/biến hình/nâng tầm nhan sắc/che hết khuyết điểm").
- Giá & chính sách: khoá Basic 2.000.000đ/3 buổi, VIP 3.000.000đ/5 buổi học 1-1 với Thuý Trần, hotline 0327.355.595 — từ [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]] và [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]].
- CTA nhấn mạnh self-test chỉ là bước đầu, cần Thuý xác nhận trực tiếp 1-1 mới lên layout chi tiết đúng — đúng chỉ đạo trong đề bài, không hứa hẹn self-test thay được buổi học thật.

## Quyết định kỹ thuật

Giống 2 ebook trước: build PDF bình thường trước (script `build-pdf.mjs` của skill `hmh-mkt-ebook-sach-lat` nhúng sẵn logo Mentorcamp thật vào bìa/trang phân Phần/trang cuối, không có cờ tắt riêng) → dùng `sed` xoá cả 6 thẻ `<img class="logo-img">` khỏi file `.html` đã sinh ra → tự gọi lại Chrome headless `--print-to-pdf` trên đúng HTML đã xoá logo (render qua thư mục TEMP với đường dẫn Windows chuẩn qua `cygpath -m`, né lỗi path tiếng Việt/dấu cách). Kết quả: bìa chữ (text-only), tagline "AMI MAKEUP ACADEMY · HIỂU MÌNH TRƯỚC KHI ĐẸP" thay logo ảnh — đã chụp ảnh kiểm tra bìa, xác nhận không dính logo/thương hiệu Mentorcamp. PDF gốc (có logo) 25 trang, 795 KB; PDF cuối (không logo) 24 trang, 229 KB.

## Việc chưa làm (cần Thuý duyệt trước khi làm)

- Host PDF công khai qua Novamira → domain AMI
- Tạo sách lật Heyzine
- Đăng lên Wiki Academy (nếu muốn)
- Đồng bộ Lark Base

Chưa thực hiện vì đây là bước xuất bản công khai/đồng bộ — theo nguyên tắc *feedback-deploy-only-after-approval*, dừng lại chờ Thuý duyệt nội dung trước. Ebook cũng chưa có mockup bìa 3D (Bước 3 của quy trình chuẩn) — hiện chỉ có bìa chữ dựng từ script, có thể làm thêm ở Canva nếu Thuý muốn bìa bắt mắt hơn khi đăng công khai.

## Liên kết

[[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]], [[nang-luc/2026-07-11-dinh-vi-thuong-hieu-ami-chinh-thuc]], [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]], [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]], [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]], [[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]], [[nang-luc/out-2026-07-13-ebook-10-ly-do-tu-makeup-chua-dep]], [[entities/ami-makeup-academy]]
