---
title: Ebook "15 Phút Mỗi Sáng: Makeup Đi Làm Nhanh Gọn Cho Phụ Nữ Bận Rộn"
type: output
khoang: nang-luc
tags: [ebook, lead-magnet, makeup-ca-nhan, content, ami]
created: 2026-07-17
updated: 2026-07-17
sources: []
---

## Tóm tắt

Ebook mồi câu (lead magnet) cho dòng Makeup Cá Nhân AMI, viết theo quy trình [[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]]. Khác với 2 ebook trước (xoáy vào nỗi sợ), ebook này khai thác góc **rào cản thời gian** — nhóm khách "muốn học mà không có thời gian" — với tinh thần tích cực/giải pháp: 3 phần chính (vì sao buổi sáng mất thời gian → nguyên tắc rút gọn 5 bước không được bỏ + bước có thể lược → sắp xếp góc trang điểm/dụng cụ) + checklist "quy trình 15 phút" in được ở cuối bài. Giữ nguyên tắc "cho biết CÁCH LÀM GÌ, không cho hết kỹ thuật cấp giáo án" — phần luyện tay thật để dành cho khoá học.

**File:** `output/2026-07-17-ebook-15-phut-moi-sang/15-phut-moi-sang.pdf` (19 trang, bản .md + .html đi kèm cùng thư mục).

## Nguồn dữ liệu grounded (không bịa)

- [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] (mục 6) — quote thật: *"Tuần rảnh 1 hôm thì có học make up chuyên nghiệp được không ạ, em muốn học mà không có thời gian"* — dùng nguyên văn làm mở đầu ebook, đúng ngữ cảnh gốc (biến thể của nỗi sợ không có năng khiếu, nhưng bản chất là sợ không đủ thời gian theo kịp)
- [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]] — khách hàng mục tiêu đã chốt: phụ nữ đi làm 22-40 tuổi (không dùng nhóm 18-25 hay nhóm sau biến cố); mô tả avatar minh hoạ "chị Lan" (bận rộn, có mỹ phẩm nhưng dùng không hết) chỉ dùng dưới dạng mô tả chung, KHÔNG gắn tên/gán thành lời kể của một khách hàng cụ thể — tránh biến minh hoạ thành "chuyện thật"
- `landing-khoa-hoc-makeup-ca-nhan/index.html` (dòng 213) — lời hứa có sẵn "Trang điểm gọn trong 15-20 phút mỗi sáng" — dùng làm điểm neo cho Lời kết: ebook là bản "nếm thử" nhẹ của lời hứa khoá học, không tạo lời hứa mới
- [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]] — giọng điệu 60% đồng hành/30% chuyên gia/10% cá tính; tránh "đẹp nhất/hoàn hảo/lột xác ngoạn mục/biến hình"
- Giá & chính sách: Basic 2.000.000đ/3 buổi, VIP 3.000.000đ/5 buổi (học 1-1 với Thuý Trần), hotline 0327.355.595, địa chỉ 351 Lê Hồng Phong, TP. Nam Định — từ [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]]
- Nội dung kỹ thuật (5 bước không được bỏ, bước có thể lược khi vội, sắp xếp góc trang điểm) là **nguyên tắc chung tự viết** dựa trên kinh nghiệm nghề đã thể hiện qua các nguồn trên — không trích dẫn giáo án chi tiết 5 buổi VIP, giữ đúng chỉ đạo "không đi sâu kỹ thuật cấp giáo án"

## Quyết định kỹ thuật

Áp dụng đúng quy trình 2 ebook trước với skill `hmh-mkt-ebook-sach-lat`:
1. Build PDF lần 1 bằng `scripts/build-pdf.mjs` — bản này nhúng sẵn logo Mentorcamp (base64) vào 6 vị trí (bìa + 4 trang phân Phần + trang kết) vì file logo mặc định của skill tồn tại trong `assets/`.
2. Đếm và xoá toàn bộ 6 thẻ `<img class="logo-img">` khỏi file `.html` đã build (giữ nguyên `wmsub`/tagline text).
3. Gọi lại Chrome headless `--print-to-pdf` trên HTML đã xoá logo để ra PDF cuối — bìa chữ text-only, tagline "AMI MAKEUP ACADEMY · HIỂU MÌNH TRƯỚC KHI ĐẸP" thay logo ảnh, tránh gắn nhầm thương hiệu Mentorcamp vào tài sản AMI.
4. Số trang giảm nhẹ 20 → 19 sau khi xoá logo (layout dồn lại do bớt hình ảnh) — không đáng kể so với mục tiêu ~20-25 trang.

## Việc chưa làm (cần Thuý duyệt trước khi làm)

- Host PDF công khai qua Novamira → domain AMI
- Tạo sách lật Heyzine
- Đăng lên Wiki Academy (nếu muốn)
- Đồng bộ dữ liệu ebook này vào Lark Base (không nằm trong phạm vi việc được giao lần này)

Chưa thực hiện vì đây là bước xuất bản công khai — theo nguyên tắc *feedback-deploy-only-after-approval*, dừng lại chờ Thuý duyệt nội dung trước.

## Liên kết

[[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]], [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]], [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]], [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]], [[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]], [[nang-luc/out-2026-07-17-ebook-cam-nang-chon-noi-hoc]], [[entities/ami-makeup-academy]]
