---
title: Ebook "Cẩm Nang Chọn Đúng Nơi Học Makeup Cá Nhân — 7 Câu Hỏi Cần Hỏi Trước Khi Đóng Tiền"
type: output
khoang: nang-luc
tags: [ebook, lead-magnet, makeup-ca-nhan, content, ami]
created: 2026-07-17
updated: 2026-07-17
sources: []
---

## Tóm tắt

Ebook mồi câu (lead magnet) thứ hai cho dòng Makeup Cá Nhân AMI, viết theo skill `hmh-mkt-ebook-sach-lat` và quy trình ở [[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]]. Khác với ebook trước (chủ đề "nỗi sợ"), ebook này đứng ở góc "trao giá trị trước khi khách chọn nơi học" — 7 câu hỏi khách nên hỏi bất kỳ nơi dạy makeup cá nhân nào trước khi đóng tiền, không riêng AMI. Mỗi câu hỏi theo cấu trúc: câu hỏi/nỗi lo thật → vì sao quan trọng → góc nhìn của Thuý → hành động hỏi thẳng ngay. Kết thúc bằng bảng tự kiểm 7 câu hỏi + CTA nhẹ giới thiệu AMI trả lời đúng các tiêu chí đó.

**File:** `output/2026-07-17-ebook-cam-nang-chon-noi-hoc/cam-nang-chon-noi-hoc-makeup-ca-nhan.pdf` (20 trang, bản .md 22KB + .html 27KB đi kèm cùng thư mục).

## Nguồn dữ liệu grounded (không bịa)

7 câu hỏi được xây trên đúng các insight thật đã có trong bộ não — trích nguyên văn từ mục 1, 2, 3 của [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]] (bình luận/bài đăng thật từ hội nhóm Facebook "Học MakeUp Cá Nhân & Chuyên Nghiệp" 225K và nhóm 1,7-1,8tr thành viên):

- *"...hiện tại vẫn đang rất mông lung không biết bắt đầu từ đâu, chọn nơi học uy tín... sợ là học nơi họ có danh tiếng nhưng đông học viên quá không kèm 1-1 được, không được chi tiết..."* → dùng cho Câu hỏi 1 (sĩ số lớp, ai trực tiếp dạy)
- *"...cho mình xin review nên học ở đâu để không mất tiền và mất thời gian ạ"* → dùng cho Câu hỏi 7 (review học viên thật)
- *"REVIEW HỌC MAKE UP ONLINE — Mình viết bài này là do mình buồn... mình đó giờ chưa từng trang điểm... đã nói rõ mình không biết gì hết, chưa đi học bao giờ..."* → dùng cho Câu hỏi 3 (cam kết tự làm được thật) và nhắc lại ở Câu hỏi 7
- *"KIẾP NẠN HỌC MAKE UP CÁ NHÂN TẠI NHÀ"* (tiêu đề bài phốt thật) + *"...dạy make up bảo 5,6 ngày, dạy được 2 hôm thì cứ hứa hẹn mãi cả tháng dạy không nổi"* → dùng cho Câu hỏi 4 (chính sách huỷ lịch)
- *"Có ai dạy khóa makeup cá nhân không ạ. Công khai chi phí giúp e luôn nhé"* + *"Cho mình hỏi học makeup cá nhân hiện giờ khoảng bao nhiêu tiền là hợp lý ạ?"* → dùng cho Câu hỏi 2 (giá công khai)

Câu hỏi 5 (cá nhân hoá theo khuôn mặt/da) và Câu hỏi 6 (hỗ trợ sau khoá) không có quote trực tiếp trong danh sách grounding được giao — viết bằng lý lẽ/góc nhìn nghề nghiệp của Thuý (theo đúng tinh thần "60% đồng hành/30% chuyên gia" ở [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]]), không gán ghép thành trích dẫn khách hàng có thật, không bịa số liệu/câu chuyện mới.

Giá & chính sách AMI trong CTA cuối: Basic 2.000.000đ/3 buổi (nhóm 3-6 người, 2 giáo viên), VIP 3.000.000đ/5 buổi (1-1 với Thuý Trần), hotline 0327.355.595 — lấy từ [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]], đúng số liệu đã dùng trong ebook trước, không thêm cam kết/chính sách mới nào ngoài các con số đã có.

## Quyết định kỹ thuật

Giống hệt cách làm ở [[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]]: build PDF bằng `scripts/build-pdf.mjs` của skill trước (ra bản có logo Mentorcamp mặc định, 21 trang) → xoá 6 thẻ `<img class="logo-img">` khỏi file HTML sinh ra (script Node nhỏ, regex `<img class="logo-img"[^>]*>`) → tự gọi lại Chrome headless `--print-to-pdf` qua thư mục `%TEMP%` (né lỗi đường dẫn có dấu cách + tiếng Việt) trên HTML đã xoá logo → copy PDF cuối về thư mục output. Kết quả: bìa chữ text-only, tagline "AMI MAKEUP ACADEMY · HIỂU MÌNH TRƯỚC KHI ĐẸP", không dính logo Mentorcamp. PDF cuối 20 trang (giảm 1 trang so với bản có logo, do phần trang phân Phần/trang bìa/trang kết gọn lại khi bỏ ảnh logo).

## Việc chưa làm (cần Thuý duyệt trước khi làm)

- Host PDF công khai qua Novamira → domain AMI
- Tạo sách lật Heyzine
- Đăng lên Wiki Academy (nếu muốn)

Chưa thực hiện vì đây là bước xuất bản công khai — theo nguyên tắc *feedback-deploy-only-after-approval*, dừng lại chờ Thuý duyệt nội dung trước. Chưa đồng bộ gì sang Lark Base.

## Liên kết

[[nang-luc/out-2026-07-13-quy-trinh-tao-ebook-tu-van-de]], [[nang-luc/out-2026-07-10-insight-noi-dau-hoc-makeup-ca-nhan]], [[nang-luc/2026-07-12-giong-dieu-thuong-hieu-ami]], [[nang-luc/out-2026-07-13-ebook-7-noi-so-hoc-makeup-ca-nhan]], [[nang-luc/out-2026-07-09-phieu-dien-ho-so-doanh-nghiep-ami]], [[entities/ami-makeup-academy]]
