---
title: "[Năng Lực] SOP Phân Quyền Base Lark Vận Hành"
type: khoang
khoang: nang-luc
tags: [lark-base, phan-quyen, van-hanh, sop]
created: 2026-07-14
updated: 2026-07-14
sources: [lark-docx-GgjKd8aceoS0uKxXPYej9Oabpac, lark-docx-JyHJd7ox7oE3NjxRbdBjKKnppE9]
---

Nguồn: [[sources/2026-07-14-sop-phan-quyen-base-lark]]

## Bối cảnh

Base Lark vận hành công ty (app `Pq8vbFwEeajzdhsykL1jdRhnpkc`, 63 bảng) là nơi ghi mọi dữ liệu vận hành: đơn hàng, khách hàng, lương, giá vốn, chi phí ads, task sản xuất... Nếu để mặc định, mời ai vào cũng thấy hết mọi bảng — kể cả bảng lương/giá vốn/thu chi. SOP này là kế hoạch để khoá quyền theo từng phòng ban.

**Trạng thái (2026-07-14):** CHƯA thực hiện. Thuý chưa có nhân viên nên chưa cần làm ngay — để dành khi nào tuyển người thì quay lại thực thi bằng skill `lark-base`.

## 2 động cơ doanh thu

| Động cơ | Đường đi dữ liệu | Bản chất |
|-|-|-|
| ① POS/Poscake (~78k đơn) | Pancake → base → 7.2 Ads ngày + 7.3 NV kinh doanh + 6.1.2 Lương | Doanh thu bán online |
| ② Dịch vụ/Hợp đồng | 2.0 Khách → 2.1 Đơn → 2.2 Phiếu thu → 1.7 Xuất kho → 3.1 Giao việc | Doanh thu dịch vụ studio |

- `1.2 Gói dịch vụ` = bảng gốc giá — sửa 1 chỗ cả hệ thống đổi theo
- `6.1.2 Hệ thống lương` tự tính lương cứng bậc thang theo DT sale + hoa hồng 1-5% × hệ số hiệu quả ads → cực nhạy cảm, phải khóa

## Lưu đồ vận hành (7 bước)

| Bước | Phòng chủ trì | Làm gì | Bảng dùng |
|-|-|-|-|
| 1 | Marketing | Chạy ads/email/FB/lead magnet → ra Lead | 7.1, 7.2, 12.x, 14.x, 17.x |
| 2 | Sale | Nhận data, tư vấn, phân nhóm, lên đơn | 2.0, 2.1, 7.2, 7.3 |
| 3a | Bán online | Ghi đơn POS/Poscake | POS Đơn hàng |
| 3b | Dịch vụ | Lập HĐ, tra giá 1.2, chiết khấu/VAT | 2.1, 1.2 |
| 4 | Media Edit | Nhận task chụp/makeup/dựng, nộp media | 3.1, 14.2, 16.2 |
| 5 | Kế toán | Phiếu thu, xuất kho, giá vốn | 2.2, 1.7, 5.1 |
| 6 | CSKH | Giao hàng, chăm cũ, NPS, mua lại | 8.1, 2.0, POS |
| 7 | Tài chính & Quản trị | DT tự vào lương; so mục tiêu, quyết định | 6.1.2, 5.3, 5.0, 4.1 |

## Cơ chế phân quyền Lark Base

Quyền cơ bản (khi Chia sẻ) là tất-cả-hoặc-không → **bắt buộc bật Quyền nâng cao**. Mỗi Vai trò cấu hình theo TỪNG bảng:

| Nút vặn | Lựa chọn |
|-|-|
| Quyền bảng | Quản lý · Chỉnh sửa bản ghi · Chỉ xem · Không thể xem (ẩn bảng) |
| Phạm vi bản ghi | Tất cả · Thỏa điều kiện · Chỉ bản ghi do mình thêm |
| Quyền trường (cột) | Từng cột: Sửa · Chỉ xem · Ẩn (giấu lương, giá vốn, SĐT) |
| Thành viên | Gán theo người / nhóm / phòng ban |

## Ma trận phân quyền (● Sửa/Quản lý · ○ Chỉ xem · — Ẩn)

| Nhóm bảng | Sale | MKT | Media | Kế toán | CSKH | Quản trị |
|-|-|-|-|-|-|-|
| 1.x Setup & Kho | — | — | — | ● | — | ● |
| 2.0 Khách hàng | ● | ○¹ | ○¹ | ○ | ○² | ● |
| 2.1 Đơn · 2.2 Phiếu thu | ● | — | ○ | ● | — | ● |
| 3.1 Giao việc sản xuất | ○ | — | ●³ | ○ | — | ● |
| 5.x Tài chính | — | — | — | ● | — | ● |
| 6.1.2 Lương 🔒 | — | — | — | ● | — | ● |
| 6.1.1 · 11.x Chấm công | tự chấm | tự chấm | tự chấm | ● | tự chấm | ● |
| 7.1 · 7.2 Marketing–Ads | ○⁴ | ● | — | ○ | — | ● |
| 7.3 NV kinh doanh | ○⁵ | ○ | — | ○ | — | ● |
| 12·14·15–17 Kênh MKT | — | ● | ○ | — | — | ● |
| 8.1 NPS | — | — | — | ○ | ● | ● |
| POS Đơn hàng | ○⁵ | ○ | — | ○ | ○ | ● |

¹ MKT & Media chỉ xem 2.0 → ẩn cột SĐT/địa chỉ. ² CSKH sửa được cột chăm sóc. ³ Media chỉ thấy bản ghi việc của mình. ⁴ Sale sửa cột số bán của mình ở 7.2. ⁵ Phạm vi "chỉ bản ghi do mình thêm" → mỗi sale chỉ thấy đơn của mình.

**🔒 3 bảng tối mật — chỉ Kế toán & Quản trị:** 6.1.2 Lương · 5.1 Giá vốn/lợi nhuận · 6.3 Thu Chi.

## Phân công người thật vào vai trò (bản v2, lấy từ bảng 6.1.1)

| Vai trò Lark | Người | Ghi chú |
|-|-|-|
| Sale | Lê Thị Mỹ Linh · Đinh Thị Thuý Hậu · Dương Xuân Trọng · Dương Thị Sang · Hồ Tùng | 5 người, phạm vi "chỉ đơn của mình" |
| Media Edit | Trần Quang Huy (Editor) | Bổ sung Makeup/Photo/Stylist khi có |
| Marketing | Đỗ Thanh Chí (Xây kênh) | Bổ sung chuyên viên Ads/Email |
| Kế toán/Kho | Lê Trung Hiếu · Bùi Thị Kim Thương (Kho) | Bổ sung Kế toán phụ trách lương/thu chi |
| CSKH | *(chưa có trong 6.1.1)* | Cần gán người chăm sóc khách |
| Quản trị | Anh Lộc / CEO | Toàn quyền |

> ⚠️ Bảng 6.1.1 (tại thời điểm tài liệu) chỉ có 9 nhân sự active — thiếu chuyên viên Ads, Kế toán, CSKH, Makeup/Photo. Cần bổ sung nhân sự vào 6.1.1 trước khi kéo vào vai trò tương ứng.

## Các bước gán quyền (làm 1 lần, khi cần thực thi)

1. Mở base → ⋯ → Quyền nâng cao → Bật.
2. Add Role: Sale, Marketing, Media, Kế toán, CSKH.
3. Mặc định để "Không thể xem" tất cả, rồi mở dần theo Ma trận — nguyên tắc mở tối thiểu.
4. Bảng nhạy cảm cần xem 1 phần: mở Chỉ xem → Quyền trường → Ẩn cột SĐT/địa chỉ/giá vốn.
5. Bảng đơn/sale: Phạm vi bản ghi = "Chỉ bản ghi do mình thêm".
6. Gán thành viên vào Role.
7. Test bằng "Xem với vai trò…" trước khi bàn giao.

## SOP nhịp báo cáo

| Phòng | Hằng ngày | Hằng tuần | Hằng tháng |
|-|-|-|-|
| Sale | Nhập đơn/DT (7.2), cập nhật KH (2.0) | Tỉ lệ chốt, KH nguội | DT cá nhân (7.3) |
| Marketing | Chi phí+lead (7.2), đăng bài (14.3) | CPA, tiến độ DT vs KPI | Tổng kết kênh, lead/nguồn |
| Media Edit | Nhận việc (3.1), nộp media (14.2) | Task hoàn thành, tồn task | Sản lượng + lương SP |
| Kế toán | Phiếu thu/chi, cập nhật kho | Công nợ, dòng tiền, tồn kho | Chốt lương, P&L |
| CSKH | Chăm sau bán, cột chăm (2.0) | KH cần gọi lại, mua lại | Điểm NPS (8.1) |
| Quản trị | Theo dõi DT (7.2), việc leader (4.1) | Review KPI 5 phòng | Mục tiêu 5.0 vs thực tế |

## Khi cần dùng lại

Khi Thuý tuyển nhân viên và cần khoá quyền theo phòng ban, dùng skill `lark-base` để thực hiện đúng theo Ma trận và Các bước gán quyền ở trên.
