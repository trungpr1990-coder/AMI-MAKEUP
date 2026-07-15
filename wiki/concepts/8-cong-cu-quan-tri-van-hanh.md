---
title: 8 Công Cụ Quản Trị Vận Hành & Chuẩn Hoá Doanh Nghiệp (BMC, BSC, Value Analysis, SIPOC, Swimlane, WI, OPL, ITTO)
type: concept
khoang: nang-luc
tags: [quan-tri-van-hanh, bmc, bsc, sipoc, swimlane, work-instruction, opl, itto, chuan-hoa-doanh-nghiep]
created: 2026-07-15
updated: 2026-07-15
sources: [text input — giải thích trực tiếp]
---

## Summary

8 công cụ kinh điển trong quản trị vận hành & chuẩn hoá doanh nghiệp, KHÔNG rời rạc mà là một hệ thống đi từ chiến lược → đo lường → quy trình → đào tạo. Dùng để: xác định mô hình kinh doanh (BMC), đo hiệu suất cân bằng (BSC), lọc hoạt động đáng làm (Value Analysis), vẽ quy trình tổng thể (SIPOC) rồi chi tiết ai-làm-gì (Swimlane), viết hướng dẫn thao tác (WI) và dạy nhanh (OPL), với khung tư duy chung ITTO.

## Bản đồ hệ thống

```
BMC (mô hình kinh doanh)
   ↓
BSC (đo lường có đúng hướng không)
   ↓
Value-Added Analysis (hoạt động nào đáng làm, cái nào lãng phí)
   ↓
SIPOC (quy trình tổng thể, nhìn từ trên cao)
   ↓
Swimlane (ai làm gì, bàn giao ở đâu)
   ↓
WI + ITTO (hướng dẫn thao tác cụ thể từng bước)
   ↓
OPL (dạy nhanh 1 điểm cho người mới/người hỗ trợ)
```

| Từ khoá | Tên đầy đủ | Tầng | Trả lời câu hỏi |
|---|---|---|---|
| BMC | Business Model Canvas | Chiến lược | Doanh nghiệp kiếm tiền bằng mô hình nào? |
| BSC | Balanced Scorecard | Chiến lược → Đo lường | Đo thành công bằng gì để không lệch? |
| Value Analysis | Value-Added Analysis | Cầu nối | Hoạt động nào tạo giá trị, cái nào lãng phí? |
| SIPOC | Supplier-Input-Process-Output-Customer | Quy trình (tổng thể) | Quy trình nhìn từ trên cao ra sao? |
| Swimlane | Sơ đồ làn bơi | Quy trình (chi tiết) | Ai làm gì, bàn giao ở đâu? |
| WI | Work Instruction | Tài liệu (thao tác) | Làm cụ thể từng bước thế nào? |
| OPL | One Point Lesson | Đào tạo | Dạy 1 điểm trong 5-10 phút bằng hình? |
| ITTO | Input-Tools/Techniques-Output | Khung mô tả process | Mỗi bước nhận gì – biến đổi sao – ra gì? |

## Key Points

### 1. BMC — Business Model Canvas
- Nguồn gốc: Alexander Osterwalder & Yves Pigneur, *Business Model Generation* (2010). Thay bản kế hoạch kinh doanh 40 trang bằng 1 trang trực quan.
- 9 ô, 2 nửa: **Phải = Thị trường/Giá trị** (Customer Segments — trái tim của canvas, Value Propositions, Channels, Customer Relationships, Revenue Streams); **Trái = Hạ tầng/Hiệu quả** (Key Resources, Key Activities, Key Partnerships, Cost Structure).
- Nguyên lý đọc: phải → tạo tiền (revenue), trái → tốn tiền (cost). Lãi = phải trừ trái. Đổi 1 ô kéo theo các ô khác.
- Sai lầm thường gặp: Customer Segments viết chung chung thay vì cụ thể theo insight thật; nhầm Value Proposition với tính năng sản phẩm.

### 2. BSC — Balanced Scorecard
- Nguồn gốc: Robert Kaplan & David Norton (Harvard, đầu 1990s) — khắc phục việc chỉ đo tài chính (phát hiện vấn đề quá trễ).
- 4 góc nhìn, quan hệ nhân-quả từ dưới lên: **Học hỏi & Phát triển** (nền tảng: kỹ năng, công cụ, văn hoá) → **Quy trình nội bộ** (vận hành hiệu quả không?) → **Khách hàng** (hài lòng, quay lại, giới thiệu) → **Tài chính** (kết quả cuối).
- Cách dùng: mỗi góc đặt Mục tiêu → Chỉ số đo (KPI) → Chỉ tiêu → Hành động.
- Sai lầm thường gặp: chỉ đo Tài chính + Khách hàng, bỏ quên Học hỏi & Phát triển → tăng trưởng không bền.

### 3. Value-Added Analysis
- Nguồn gốc: tư duy Lean/Toyota Production System.
- 3 nhóm hoạt động: **VA** (khách trả tiền cho việc này) — **BVA/NVA cần thiết** (không ai trả tiền nhưng bắt buộc phải có, VD hoá đơn, hồ sơ) — **Waste/lãng phí** (không tạo giá trị, không bắt buộc).
- 7 loại lãng phí kinh điển (Lean): chờ đợi, di chuyển thừa, tồn đọng thừa, thao tác thừa, sản xuất thừa, làm lại do lỗi, xử lý thừa (over-processing).
- Sai lầm thường gặp: nhầm "bận rộn" với "tạo giá trị".

### 4. SIPOC — nhìn quy trình từ trên cao
- Nguồn gốc: Total Quality Management, chuẩn hoá trong Six Sigma.
- 5 cột: Supplier (ai cung cấp đầu vào) — Input (đầu vào là gì) — Process (4-6 bước LỚN, không chi tiết) — Output (đầu ra là gì) — Customer (ai nhận).
- Cách dùng: vẽ ngược — từ Customer + Output muốn có, lùi lại xác định Process/Input/Supplier. Làm TRƯỚC Swimlane.
- Sai lầm thường gặp: liệt kê Process quá chi tiết, biến SIPOC thành Swimlane.

### 5. Swimlane — sơ đồ làn bơi
- Nguồn gốc: phổ biến bởi Geary Rummler & Alan Brache, *Improving Performance* (1990) — quy trình luôn cắt ngang qua nhiều người.
- Mỗi làn = 1 người/vai trò. Mũi tên đi NGANG qua làn = điểm bàn giao (handoff) — nơi dễ mất thông tin/lỗi nhất.
- Giá trị lớn nhất: phát hiện (a) bước trùng 2 người cùng làm, (b) bước không ai chịu trách nhiệm, (c) bàn giao không có tiêu chuẩn.
- Sai lầm thường gặp: vẽ xong không rà lại điểm bàn giao — trong khi đó là lý do chính để vẽ swimlane.

### 6. WI — Work Instruction
- Nguồn gốc: hệ thống tài liệu ISO 9001 (Policy → Procedure → Work Instruction — WI là tầng thấp nhất, chi tiết nhất).
- Hướng dẫn từng bước cho MỘT thao tác cụ thể, đủ chi tiết để người chưa từng làm vẫn làm đúng.
- Khác SOP: SOP mô tả cả quy trình nhiều bước/nhiều người; WI chỉ mô tả 1 thao tác đơn lẻ trong 1 làn của swimlane — WI là con của SOP.
- Chỉ viết WI khi: (a) lặp lại thường xuyên, (b) giao được cho người khác, (c) có rủi ro sai nếu làm tuỳ hứng.
- Sai lầm thường gặp: viết lý thuyết chung chung thay vì hành động cụ thể, đo lường được.

### 7. OPL — One Point Lesson
- Nguồn gốc: TPM (Total Productive Maintenance, Nhật) — đào tạo công nhân nhanh, tại chỗ.
- Dạy ĐÚNG 1 điểm trong 5-10 phút (1 trang/1 hình có chú thích/1 video ngắn) — nhấn vào điểm dễ sai nhất, không nhắc lại lý thuyết.
- Khác WI: WI = hướng dẫn đầy đủ cả thao tác. OPL = dạy nhanh 1 điểm hay sai/hay quên trong thao tác đó — bổ sung cho WI, không thay thế.
- Sai lầm thường gặp: nhồi nhiều điểm vào 1 OPL, mất tác dụng "nhanh gọn, nhớ ngay".

### 8. ITTO — Input-Tools/Techniques-Output
- Nguồn gốc: PMBOK (Project Management Body of Knowledge, PMI).
- Khung tư duy (không phải sơ đồ riêng) trả lời 3 câu hỏi cho mỗi bước: Input (nhận gì) — Tools/Techniques (dùng công cụ/kỹ thuật gì) — Output (tạo ra gì để chuyển tiếp).
- Vai trò: dùng để không bỏ sót ý khi viết SIPOC (mỗi ô Process) hoặc WI (mỗi bước).
- Sai lầm thường gặp: bỏ qua Output rõ ràng — nguyên nhân gốc của lỗi bàn giao trong Swimlane.

## Áp dụng cho AMI (tóm tắt — chi tiết xem [[nang-luc/out-2026-07-15-ap-dung-8-cong-cu-van-hanh-ami]])

Thứ tự ưu tiên đề xuất cho tình huống hiện tại (một mình vận hành + chồng hỗ trợ phụ + 2 học viên đồng hành): **BMC** (đã có data thật, làm nhanh) → **Swimlane** cho quy trình buổi học (giải đúng điểm đau vận hành khi có thêm người hỗ trợ) → **WI + OPL** cho việc giao được ngay. BSC/SIPOC/Value Analysis làm sau khi quy trình cốt lõi đã ổn.

## Entities Mentioned

[[entities/ami-makeup-academy]]

## Concepts

[[concepts/sau-linh-vuc-kinh-doanh]]

## Notes

Đây là kiến thức framework tổng quát (không phải phân tích riêng cho AMI) — dùng làm tài liệu tham chiếu lâu dài. Không có mâu thuẫn với nội dung wiki hiện có.
