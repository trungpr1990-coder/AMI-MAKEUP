---
title: Hệ thống Thu Chi AMI (Lark Base)
type: khoang
khoang: vat-chat
tags: [tai-chinh, lark-base, thu-chi, dong-tien]
created: 2026-07-20
updated: 2026-07-20
sources: []
---

## Bối cảnh

Trước 2026-07-20, Thuý **chưa ghi chép thu-chi ở đâu cả** — chỉ nhớ áng chừng. Khi rà lại Base thật "CRM THÚY THÚY" (`base_token = O2qIbEaIYabXEGsW6Dzjs0LCpZg`, xem [[reference-crm-thuy-thuy-base-token]]), phát hiện base có sẵn 1 cụm 6 bảng "Tài Chính & Kế Toán" (6.1-6.3: Tạo Phiếu Thu, Tạo Phiếu Chi, Tổng hợp Thu Chi, Kế hoạch Dòng Tiền...) nhưng đây là **template của một studio chụp ảnh cưới** copy về từ nơi khác — danh mục chi phí có ~50 mục kiểu "mua váy/vest", "vé máy bay", "thuê giảng viên/thợ", cột "Mã Hợp Đồng" dạng `MAD2501539` — hoàn toàn không khớp mô hình 1 mình vận hành của AMI, và trống dữ liệu thật (đúng như Thuý xác nhận).

> **Quyết định:** Thuý chọn dựng bảng mới sạch riêng, **không đụng vào / không dùng cụm 6 bảng cũ** (để nguyên đó, không xoá).

## Bảng "Thu Chi AMI"

- **table_id:** `tblnyZNxbWcsjlsW` trong base `O2qIbEaIYabXEGsW6Dzjs0LCpZg`
- **Trường:**
  - Nội dung (text, primary) — mô tả ngắn gọn giao dịch
  - Ngày (datetime, dd/MM/yyyy)
  - Loại (select: Thu / Chi)
  - Khoản mục (select, 15 mục thật của AMI — xem danh sách bên dưới)
  - Số tiền (currency VND, luôn nhập số dương)
  - Ghi chú (text)
  - Dòng tiền (formula) = `IF([Loại]="Thu", [Số tiền], -[Số tiền])` — tự động ra số âm nếu là Chi
  - Tháng / Năm (formula, tách từ Ngày)

**Khoản mục Thu:** Makeup dịch vụ (cô dâu/kỷ yếu/sự kiện/thử), Khoá Cơ Bản (3 buổi), Khoá VIP 1-1 (5 buổi), Khoá Chuyên nghiệp (Makeup Artist), Khoá Hairstylist, Thu khác.

**Khoản mục Chi:** Thuê nhà, Điện nước, Nguyên vật liệu/mỹ phẩm, Marketing/Quảng cáo, Công cụ/phần mềm, Lương phụ (chồng/học viên hỗ trợ), Đầu tư học tập bản thân, Thuế/phí, Chi khác.

**2 view:**
- "Grid View" — nhập liệu, sắp xếp Ngày mới nhất lên đầu
- "Tổng hợp theo tháng" (`vewmOdIvjR`) — nhóm theo Năm → Tháng → Loại, xem tổng Thu/Chi mỗi tháng ngay không cần tính tay

Đã test bằng 1 record thật (Chi 10.000.000đ Thuê nhà) — Dòng tiền/Tháng/Năm ra đúng, đã xoá record test.

## Cách dùng

Mỗi khi có tiền vào/ra: mở Base → bảng "Thu Chi AMI" → thêm dòng, điền Nội dung + Ngày + Loại + Khoản mục + Số tiền. Muốn xem lãi/lỗ theo tháng: chuyển view "Tổng hợp theo tháng".

## Việc còn thiếu (chưa làm ở lần này)

- Chưa nhập số liệu quá khứ — bảng đang trống, bắt đầu ghi từ hôm nay
- Chưa có cảnh báo/dashboard so với mục tiêu lợi nhuận — có thể làm tiếp khi đã có vài tháng dữ liệu thật
- Chưa liên kết Số tiền Thu với bảng "2.1 Tạo đơn hàng"/booking thật (hiện AMI cũng chưa dùng bảng đơn hàng đó) — nhập tay là đủ ở quy mô hiện tại

## Liên kết

[[vat-chat/2026-06-30-hoach-dinh-tai-chinh]], [[reference-crm-thuy-thuy-base-token]], [[analyses/base-structure-crm-thuys-makeup]]
