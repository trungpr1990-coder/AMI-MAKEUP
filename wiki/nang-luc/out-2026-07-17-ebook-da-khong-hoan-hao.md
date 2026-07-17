---
title: Ebook "Da Không Hoàn Hảo Vẫn Makeup Đẹp Tự Nhiên"
type: output
khoang: nang-luc
tags: [ebook, lead-magnet, makeup-ca-nhan, content, ami, da, skincare]
created: 2026-07-17
updated: 2026-07-17
sources: []
---

## Tóm tắt

Ebook mồi câu (lead magnet) mới cho dòng Makeup Cá Nhân AMI, viết theo skill `hmh-mkt-ebook-sach-lat` và quy trình [[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]] — tiếp nối các ebook đã có: [[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]], [[nang-luc/out-2026-07-13-ebook-10-ly-do-tu-makeup-chua-dep]], [[nang-luc/out-2026-07-17-ebook-cam-nang-chon-noi-hoc]], [[nang-luc/out-2026-07-17-ebook-tim-dung-kieu-makeup]]. Chủ đề: da nhiều khuyết điểm (lỗ chân lông, nám, da dầu) vẫn makeup đẹp tự nhiên mà không cần lớp nền dày cộp. Cấu trúc 4 Phần / 7 Chương: (I) sự thật về da không hoàn hảo + vì sao nền dày làm lộ khuyết điểm, (II) chăm da/lót nền đúng cách trước khi trang điểm (da dầu/da khô), (III) chọn-tán nền tự nhiên + giữ bền son/mắt khi đi tiệc + phối màu theo tông da, (IV) bài tập tự kiểm + lời kết + CTA khoá Basic/VIP.

**File:** `output/2026-07-17-ebook-da-khong-hoan-hao/da-khong-hoan-hao.pdf` (20 trang, kèm bản `.md` và `.html` cùng thư mục).

## Nguồn dữ liệu grounded (không bịa)

Toàn bộ nỗi đau/câu hỏi khách hàng dùng nguyên văn từ insight thật đã có trong bộ não, không suy đoán thêm:
- [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] (mục 5, 7) — 4 quote gốc: "da nhiều khuyết điểm: lỗ chân lông to, nám, mặt vuông, mắt sụp mí"; "Da xấu vậy makeup lên nhìn nó có trong không mấy bà??"; "Da dầu hay ra mồ hôi nên dùng kcn loại nào, tui cứ bị ra mồ hôi lem nhem ấy"; "Làm sao để đánh son ăn tiệc mà không bị trôi bị lem vậy mọi người?"; "Cho em hỏi có ai makeup tone Hồng xanh dương chưa ạ, cho em xin ảnh hay video để em makeup thử ạ"
- [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]] — giọng điệu (60% đồng hành/30% chuyên gia/10% cá tính); tránh tuyệt đối "che hết khuyết điểm", "hoàn hảo", "đẹp nhất" — xuyên suốt ebook nhấn "tôn lên vẻ đẹp có sẵn, không che giấu con người thật"
- [[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]] — cấu trúc 5 phần chuẩn (Hook → Mở đầu → nội dung từng bước → ví dụ ngắn → CTA nhẹ)
- Giá & chính sách: khoá Basic 2 triệu/3 buổi, VIP 3 triệu/5 buổi, hotline 0327.355.595 — từ [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]] (đã dùng lại từ ebook trước)
- Nguyên tắc chăm da/kỹ thuật trang điểm (dưỡng da theo loại da, tán nền từ trong ra ngoài, thứ tự bền son/mắt, nguyên tắc phối màu ấm/lạnh) là kiến thức chuyên môn tổng quát của Thuý với vai trò Makeup Artist & giảng viên — không gắn với câu chuyện khách hàng cụ thể nào ngoài 5 quote đã liệt kê ở trên

## Quyết định kỹ thuật

Giống 2 ebook trước: build PDF bình thường bằng `build-pdf.mjs` trước (ra bản có 6 thẻ `<img class="logo-img">` — logo Mentorcamp mặc định của skill), sau đó:
1. Xoá cả 6 thẻ `<img class="logo-img">` khỏi file `.html` (giữ nguyên `tagline`/`wmsub` text bên dưới mỗi vị trí logo).
2. Gọi lại Chrome headless `--print-to-pdf` trực tiếp trên `.html` đã xoá logo (không chạy lại `build-pdf.mjs` vì script sẽ tái tạo HTML từ `.md` và chèn logo trở lại).

Kết quả: bìa + 3 trang phân Phần + trang kết đều chỉ còn chữ (tagline "AMI MAKEUP ACADEMY · HIỂU MÌNH TRƯỚC KHI ĐẸP"), không dính logo Mentorcamp. Đã kiểm tra bằng screenshot Chrome headless — bìa hiển thị đúng, không lỗi font dấu tiếng Việt (dùng Cambria cho tiêu đề như quy ước của skill).

PDF ra 20 trang — nằm ở cận dưới mục tiêu 20-25 trang; nội dung đủ 7 chương + mở đầu + bài tập + lời kết, không cắt bớt insight nào để đạt số trang.

## Việc chưa làm (cần Thuý duyệt trước khi làm)

- Host PDF công khai qua Novamira → domain AMI
- Tạo sách lật Heyzine
- Đăng lên Wiki Academy (nếu muốn)
- Đồng bộ Lark Base (theo yêu cầu, không làm trong lần này)

Chưa thực hiện vì đây là bước xuất bản công khai — theo nguyên tắc *feedback-deploy-only-after-approval*, dừng lại chờ Thuý duyệt nội dung trước.

## Liên kết
[[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]], [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]], [[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]], [[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]], [[entities/ami-makeup-academy]]
