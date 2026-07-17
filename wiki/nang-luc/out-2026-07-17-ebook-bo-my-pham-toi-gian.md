---
title: Ebook "Bộ Mỹ Phẩm Tối Giản Cho Người Mới Tự Makeup — Không Cần Mua Nhiều Vẫn Đủ"
type: output
khoang: nang-luc
tags: [ebook, lead-magnet, makeup-ca-nhan, content, ami]
created: 2026-07-17
updated: 2026-07-17
sources: []
---

## Tóm tắt

Ebook mồi câu (lead magnet) thứ 3 cho dòng Makeup Cá Nhân AMI, viết theo [[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]] và cùng khung kỹ thuật xuất bản với [[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]] và [[nang-luc/out-2026-07-13-ebook-10-ly-do-tu-makeup-chua-dep]]. Khác 2 ebook trước ở chỗ: đây không phải ebook "gỡ nỗi sợ" mà là **ebook thực dụng, hướng dẫn cụ thể** — giải quyết đúng nỗi đau "quá tải lựa chọn sản phẩm" khi mới bắt đầu tự makeup, không PR bất kỳ thương hiệu/sản phẩm cụ thể nào.

Cấu trúc 5 chương theo 4 Phần: (I) vì sao mua thừa vẫn không đủ dùng — sự thật + tâm lý "sợ thiếu"; (II) bộ tối giản — thứ tự ưu tiên 8 nhóm sản phẩm (kèm bảng "có thể mua sau không") + tiêu chí chọn theo loại da dầu/khô/hỗn hợp; (III) dành riêng cho nhóm học lại sau khi quên — không cần mua lại từ đầu, chỉ cần kiểm tra đồ cũ. Kết thúc bằng bảng tự kiểm túi đồ + CTA giới thiệu khoá Basic/VIP.

**File:** `output/2026-07-17-ebook-bo-my-pham-toi-gian/bo-my-pham-toi-gian.pdf` (19 trang, bản .md + .html đi kèm cùng thư mục).

## Nguồn dữ liệu grounded (không bịa)

Toàn bộ nội dung bám đúng 2 insight thật được giao, không suy đoán thêm:
- *"Mn chỉ em mua bộ makeup đơn giản với ạ, em không biết dùng loại nào cho da dầu ạ"* — trích trong Lời mở đầu và Chương 2, làm nền cho chủ đề "quá tải lựa chọn sản phẩm" — nguồn [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] (mục 8).
- *"Em từng biết makeup nhưng lâu rồi không sử dụng nên muốn học lại từ những kỹ năng cơ bản"* — trích nguyên văn mở đầu Chương 5, dành riêng 1 chương cho nhóm khách "refresher" — nguồn [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] (mục 9).
- Giọng điệu theo [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]] (60% đồng hành/30% chuyên gia/10% cá tính; tránh "đẹp nhất/hoàn hảo/lột xác/biến hình").
- Giá & chính sách: Basic 2 triệu/3 buổi, VIP 3 triệu/5 buổi, hotline 0327.355.595 — từ [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]], giống hệt 2 ebook trước để nhất quán thông tin.
- **Không nêu tên thương hiệu/sản phẩm mỹ phẩm cụ thể nào** — chỉ nói theo NHÓM sản phẩm (dưỡng ẩm/lót, kem nền, che khuyết điểm, phấn phủ, chân mày, mắt cơ bản, má hồng, son) và tiêu chí chọn theo loại da, đúng giới hạn được giao (AMI không bán mỹ phẩm, tránh cảm giác quảng cáo sản phẩm).
- Ý "mua thừa vì sợ thiếu, lãng phí tiền" ở Chương 1 chỉ tham chiếu tinh thần chung (không trích nguyên văn số liệu nào từ landing page hiện tại, vì không bắt buộc).

## Quyết định kỹ thuật

Dùng đúng quy trình đã áp dụng ở 2 ebook trước: build PDF bình thường bằng `build-pdf.mjs` của skill `hmh-mkt-ebook-sach-lat` (script luôn nhúng logo Mentorcamp thật từ `assets/logo-mentorcamp-*.png` vào bìa/trang phân Phần/trang cuối, không có cờ tắt riêng) → xoá 6 thẻ `<img class="logo-img">` khỏi file `.html` đã sinh ra (1 bìa + 4 trang phân Phần + 1 trang kết, do ebook này có 4 PHẦN thay vì 3) → tự gọi lại Chrome headless `--print-to-pdf` trên đúng HTML đã xoá logo, render qua thư mục TEMP để né lỗi PDF trắng do path tiếng Việt (gotcha đã ghi trong SKILL.md). Đã chụp ảnh kiểm tra bìa — xác nhận bìa chữ (text-only), tagline "AMI MAKEUP ACADEMY · HIỂU MÌNH TRƯỚC KHI ĐẸP" hiển thị đúng, không dính logo Mentorcamp. Kết quả cuối: 19 trang, PDF 200KB.

## Việc chưa làm (cần Thuý duyệt trước khi làm)

- Host PDF công khai qua Novamira → domain AMI
- Tạo sách lật Heyzine
- Đăng lên Wiki Academy (nếu muốn)
- Đồng bộ Lark Base

Chưa thực hiện — theo đúng phạm vi được giao (chỉ làm PDF local + tóm tắt wiki, không host công khai) và theo nguyên tắc *feedback-deploy-only-after-approval*, dừng lại chờ Thuý duyệt nội dung trước.

## Liên kết
[[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]], [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]], [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]], [[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]], [[nang-luc/out-2026-07-13-ebook-10-ly-do-tu-makeup-chua-dep]], [[entities/ami-makeup-academy]]
