---
title: Hướng Dẫn Áp Dụng 8 Công Cụ Quản Trị Vận Hành — Chi Tiết cho AMI
type: analysis
khoang: nang-luc
tags: [ami, van-hanh, bmc, swimlane, work-instruction, chi-tiet]
created: 2026-07-15
updated: 2026-07-15
sources: [[concepts/8-cong-cu-quan-tri-van-hanh]]
---

## Tình Huống Hiện Tại AMI (Bối Cảnh)

**Vấn đề + Cơ hội:**
- Thuý một mình đảm (chính): dạy, tư vấn khách, quay video, viết content, chạy ads, vận hành hệ thống, tài chính
- Vừa có thêm người hỗ trợ: chồng (phụ) + 2 học viên đồng hành (khi đông khách)
- **Vấn đề: ai làm gì chưa rõ → dễ lẫn lộn/rơi rớt việc → gây căng thẳng**
- Mục tiêu doanh thu: 50 triệu/tháng (10-15 khách/tháng)
- Ưu tiên: dòng Makeup Cá Nhân
- Đã có: phễu sơ bộ, insight khách, định vị brand, SOP (28 cái nhưng sơ sài)

---

## TỪ MỠ ĐẾN NGÀNH: MỘT LỘ TRÌNH CỤ THỂ

### **Tuần 1-2: BMC (Business Model Canvas)**

#### Vấn đề giải quyết
"AMI kiếm tiền như thế nào? Cách nào hiệu quả nhất?"

Hiện tại: Thuý biết giá, biết khách, nhưng **BMC 9 ô chưa được vẽ thành hình thức chính thức** — điều này dẫn tới:
- Không rõ "dòng doanh thu nào là chính, nào là phụ"
- Khi chạy ads, không biết nên target khách dòng nào trước
- Không biết "nguồn lực nào là bắt buộc, nào có thể giao"

#### Cách áp dụng (CHỈ cho dòng Makeup Cá Nhân, bỏ cô dâu/chuyên nghiệp lần này)

**Bước 1: Điền 9 ô BMC dựa trên số liệu thật đã có**

| Ô | Nội dung cụ thể cho AMI |
|---|---|
| **1. Customer Segments** | Phụ nữ 22-40 tuổi, đi làm, muốn tự trang điểm đẹp cho chính mình. Chưa phân biệt tài chính/vấn đề (Basic vs VIP sẽ phân chia sau) |
| **2. Value Propositions** | Hiểu khuôn mặt + da + technique → tự makeup đẹp mỗi ngày; phong cách tự nhiên, không cứng nhắc (khác đối thủ dạy theo "tất cả phải đốn") |
| **3. Channels** | Facebook (organic + ads), TikTok, giới thiệu (referral), website + Google |
| **4. Customer Relationships** | Trước: tư vấn miễn phí qua Zalo (1-2 tin nhắn, không cuộc gọi dài); Trong khóa: hỗ trợ 1-1 ngoài lớp nếu cần; Sau khóa: hỗ trợ 1 buổi thêm nếu chưa tự tin, online support theo Zalo |
| **5. Revenue Streams** | (a) Makeup trải nghiệm 399-500k, (b) Makeup thường xuyên 599-699k/lần, (c) Gói Basic 2tr/3 buổi, (d) Gói VIP 3tr/5 buổi |
| **6. Key Resources** | Chính: kỹ năng makeup/tư vấn (Thuý), máy quay video (Thuý), hiểu insight khách (Thuý), mỹ phẩm/dụng cụ sẵn. Phụ: chồng (logistics, gửi tin nhắn, ghi chép), 2 học viên (trợ giảng, dọn dẹp) |
| **7. Key Activities** | (a) Dạy (buổi học cá nhân), (b) Quay/dựng video content, (c) Quản lý ads, (d) Tư vấn khách (Zalo/gọi) |
| **8. Key Partnerships** | Photoshop tại cửa hàng, studio nếu cần, fanpage/group phụ nữ để chia sẻ nội dung |
| **9. Cost Structure** | (a) Mỹ phẩm/dụng cụ (~triệu/tháng), (b) Ads (~triệu/tháng để test), (c) Tiền điện/nước/thuê nhà, (d) May seeding content (thấp khi Thuý tự quay) |

**Bước 2: Xác định tỷ lệ doanh thu mục tiêu từng loại**
```
Mục tiêu: 50 triệu/tháng

Đề xuất phân bổ (cần Thuý chốt):
- Makeup VIP (3tr/5 buổi): 3-5 khách/tháng = 9-15 triệu
- Makeup Basic (2tr/3 buổi): 5-8 khách/tháng = 10-16 triệu  
- Makeup thường xuyên (599-699k): 20-30 khách/tháng = 12-21 triệu
- Makeup trải nghiệm (399-500k): 10-20 khách/tháng = 4-10 triệu
=> Tổng: 35-62 triệu (phạm vi có thể đạt 50tr)

Điểm quan trọng: tỷ lệ này quyết định "khách nào đưa vào phễu đầu tiên" và "chạy ads target ai".
```

#### Output cụ thể
- **1 file BMC 9 ô, có số liệu thật** (không phải ý tưởng) — để hiển thị trên tường cửa hàng/chiếu cho team
- **Tỷ lệ doanh thu mục tiêu từng loại** — dùng để lên kế hoạch marketing hàng tháng
- **Xác định "mô hình kinh doanh" chính thức của AMI dòng Makeup Cá Nhân**

#### Tiếp theo là gì?
Đi vào Swimlane để cấu trúc HOW (làm thế nào)

---

### **Tuần 2-3: Swimlane — Quy Trình Buổi Học (Ai làm gì?)**

#### Vấn đề giải quyết
"Khi khách đến buổi học, ai làm gì? Bàn giao ở đâu? Sao lại hay bỏ sót?"

Hiện tại: Chỉ có 1 quy trình SOP "Buổi Tập Thực Hành" chung chung (28 SOP cũ), **không rõ ai trong team (Thuý/chồng/2 học viên) phụ trách khâu nào**.

#### Cách áp dụng

**Bước 1: Chọn 1 quy trình "đẹp nhất" để vẽ — Buổi học VIP (1-1 với Thuý)**

Swimlane sẽ có 4 làn:
- Thuý Trần (người dạy)
- Chồng (logistics)
- Học viên (người học)
- (Optional) Trợ giảng nếu có khách kèm người thân cùng buổi

**Bước 2: Liệt kê mỗi bước trong 1 buổi học VIP 1.5-2 tiếng, gắn vào đúng làn**

```
SWIMLANE VỊ TRÍ: Cửa hàng, 351 Lê Hồng Phong

[CHỒNG]
    • T-1 ngày: Gọi xác nhận + địa điểm
    • T-1 tiếng: Chuẩn bị bàn trang điểm (đèn, gương, khăn, mỹ phẩm)
         ↓ (bàn giao: "Bàn trang điểm sẵn sàng")
[THUÝ]
    • T-15 phút: Chào, tư vấn nhanh nỗi lo của khách (mình ngại kiểu gì, mặt có vấn đề gì)
    • T-5 phút: Bắt đầu buổi học (5 phút giới thiệu kế hoạch 5 buổi)
    • T+0-30p: Buổi 1 "Nền tảng & Hiểu da" — dạy (bây giờ học = định hướng để buổi sau có công cụ)
    • T+30-60p: Bước trực thực hành makeup cơ bản (Thuý hướng dẫn từng bước)
    • T+60-80p: Học viên tự thực hành, Thuý nhận xét + chỉnh sửa
    • T+80-90p: Dọn dẹp, hẹn buổi 2
         ↓ (bàn giao: "Buổi học thành công, khách biết kiến thức + áp dụng được")
[CHỒNG]
    • T+90 phút: Dọn dẹp bàn, chuẩn bị hóa đơn + tài liệu gửi khách
         ↓ (bàn giao: "Hóa đơn + tài liệu gửi khách qua Zalo")
[THUÝ - sau khi khách về]
    • T+100p: Gửi Zalo khách "Cảm ơn đã đến, tài liệu tại link, có câu hỏi liên hệ")
    • T+1 ngày: Nhắn tin kiểm tra khách tự thực hành được không
```

**Bước 3: Phát hiện các điểm bàn giao (handoff) — ĐÂY LÀ NƠI RỦI RO CAO NHẤT**

| Bàn giao | Từ | Đến | Tiêu chuẩn "đạt" |
|---|---|---|---|
| Xác nhận buổi học | Chồng | Thuý | SMS/Zalo ghi rõ: tên khách, giờ, địa điểm, vấn đề khách (nếu có) |
| Bàn trang điểm sẵn sàng | Chồng | Thuý | Đèn sáng, gương sạch, mỹ phẩm bài trí, khăn sạch, ghế đặt ở vị trí được 2 người nhìn kính |
| Buổi học kết thúc | Thuý | Chồng | Hóa đơn (giấy + ảnh) + tài liệu PDF (số điện thoại khách, ngày học, nội dung học, hẹn buổi tới) |
| Hóa đơn + tài liệu gửi khách | Chồng | Thuý | Zalo khách đã nhận tin + PDF, khách đã xác nhận "OK" |

**Bước 4: Ghi nhận các rủi ro**

Mỗi bàn giao có rủi ro gì?
- **"Xác nhận buổi học"**: Chồng quên gọi → khách không biết giờ → khách không đến → mất revenue
- **"Bàn trang điểm sẵn sàng"**: Chồng quên dọn mỹ phẩm cũ → khách thấy bẩn → ấn tượng xấu
- **"Hóa đơn + tài liệu gửi"**: Chồng quên gửi → khách không biết hẹn khi nào → khách không biết buổi tới học gì → khách không đến buổi 2

#### Output cụ thể
- **1 sơ đồ Swimlane cho buổi học VIP** (có thể vẽ trên giấy/PowerPoint/Lucidchart)
- **Bảng 4 bàn giao + tiêu chuẩn + rủi ro** — để team biết "bàn giao là gì/lúc nào"
- **Xác định 4 điểm cần WI (Work Instruction) chi tiết nhất**

#### Tiếp theo là gì?
Viết WI cho mỗi bàn giao → để chồng/học viên hỗ trợ không cần hỏi lại từng lần

---

### **Tuần 3: WI (Work Instruction) — Hướng Dẫn Cụ Thể**

#### Vấn đề giải quyết
"Chồng/học viên biết cần làm gì, nhưng không biết làm CHỈ TIẾ như thế nào → phải hỏi Thuý từng lần."

Hiện tại: Có SOP dài 28 cái, nhưng **chưa có WI cụ thể cho từng thao tác nhỏ**.

#### Cách áp dụng

**Bước 1: Ưu tiên 4 WI cho 4 bàn giao trong Swimlane buổi học**

WI #1: "Gọi xác nhận khách trước buổi học"
```
TÊN CÔNG VIỆC: Xác nhận buổi học (Gọi/Zalo khách)
THỰC HIỆN: Chồng
THỜI GIAN: 1 ngày trước buổi học, buổi sáng hoặc 10h tối

INPUT: Lịch khách hôm sau (từ Zalo/cuốn sổ lịch của Thuý, hoặc Lark Base nếu có)
OUTPUT: SMS/Zalo khách ghi rõ: 
  - Tên khách: "Chị Lan"
  - Giờ học: "Thứ Sáu, 9 giờ sáng"
  - Địa chỉ: "351 Lê Hồng Phong, phòng tầng 1, cạnh cửa kính"
  - Vấn đề khách (nếu từng nói): "Em có vẻ lo da dầu mụn lần trước, chị Thuý sẽ dạy cách chọn nền phù hợp ạ"
  - Yêu cầu xác nhận: "Chị xác nhận được không ạ? Có gì thay đổi liên hệ em"

CÁC BƯỚC:
1. Mở danh sách khách (lịch nào hôm sau)
2. Có bao nhiêu khách? Mỗi khách tạo 1 tin nhắn riêng (không gửi chung)
3. Copy template SMS ở trên, điền tên/giờ/địa chỉ
4. Gửi Zalo khách
5. QUAN TRỌNG: Lưu ý vấn đề khách (nếu Thuý nói, thêm vào tin nhắn để khách cảm thấy "có người nhớ")
6. Đợi khách reply trong 2 giờ — nếu không reply, gọi điện (không gửi tin nhắn khác)
7. Ghi result vào cuốn sổ hoặc Zalo group: "Chị Lan OK hôm sau 9h", hoặc "Chị Linh không được, đổi sang Thứ 7"

KHI NÀO CẨN HỎI THUÝ:
- Khách không pick up điện thoại → gửi tin nhắn, chốt lại vào ngày hôm đó
- Khách muốn đổi giờ → ghi lại, hỏi Thuý xem còn slot không trước khi chốt

KHÔNG CẦN HỎI THUÝ:
- Ghi sai địa chỉ hoặc giờ → check lại cuốn sổ lịch của Thuý
- Không biết vấn đề khách là gì → bỏ qua phần đó, chỉ ghi giờ/địa chỉ/xác nhận
```

**Làm tương tự cho 3 WI còn lại:**
- WI #2: "Chuẩn bị bàn trang điểm" (Chồng làm)
- WI #3: "Tạo hóa đơn + tài liệu" (Chồng/Thuý làm)
- WI #4: "Gửi Zalo tài liệu + kiểm tra" (Chồng/Thuý làm)

#### Output cụ thể
- **4 file WI** (file Word hoặc Markdown, 0.5-1 trang mỗi cái) — để chồng in ra dán ở các vị trí làm việc
- **Checklist cho mỗi WI** — "làm xong check all, báo Thuý"

#### Tiếp theo là gì?
Khi chồng/học viên làm sai lặp lại cùng 1 điểm → tạo OPL (một bài học 1 điểm) để dạy nhanh

---

### **Tuần 3-4: OPL (One Point Lesson) — Dạy Nhanh 1 Điểm**

#### Vấn đề giải quyết
"Chồng/học viên vẫn làm sai ở điểm cụ thể (VD quên ghi vấn đề khách vào tin nhắn xác nhận), phải chỉ tay nhiều lần."

Hiện tại: WI được viết, nhưng **ai mà đọc hết 5 trang mỗi lần muốn nhớ 1 chi tiết?**

#### Cách áp dụng

**Bước 1: Quan sát → Phát hiện điểm sai lặp lại**

Ví dụ: Chồng gọi xác nhận khách 3 lần, tất cả 3 lần đều quên ghi "vấn đề khách" vào tin nhắn → Thuý quyết định làm OPL

**Bước 2: Tạo OPL — chỉ 1 điểm, 5 phút**

Cách làm:
- Quay video điện thoại (tấm hình hoặc video 2-3 phút) hoặc
- Chụp ảnh màn hình + chú thích

Nội dung:
```
TIÊU ĐỀ: "Khi xác nhận buổi học, NHẤT ĐỊNH phải ghi vấn đề khách"

VÌ SAO: Khách thấy mình được nhớ → cảm thấy được quan tâm → tin tưởng hơn

CÁC CHỮ PHẢI CÓ:
❌ SAI: "Chị Lan, mai 9h tại địa chỉ kia, xác nhận được không?"
✅ ĐÚNG: "Chị Lan, mai 9h tại địa chỉ kia. Chị lo về da dầu mụn, chị Thuý sẽ dạy cách chọn nền phù hợp ạ. Chị xác nhận được không?"

CHỖ KHÁC NHAU: Thêm 1 câu "Chị lo về X, chị Thuý sẽ dạy Y"

CÁCH NHỚ: Trước khi gửi tin, tự hỏi "Khách lo gì vậy?" → ghi vào → gửi
```

**Bước 3: Dạy (5 phút)**
- Gọi chồng, chiếu hình/video
- "Xem cái này. Tại sao khách vui hơn khi vấn đề được ghi vào tin nhắn?"
- Chồng trả lời → Thuý ghi nhận
- "Lần tới xác nhận, nhớ làm vậy. Nếu quên, hỏi Thuý hoặc xem lại video này"

#### Output cụ thể
- **1 video OPL ngắn** (hoặc ảnh + chú thích) — chồng/học viên có thể xem lại lúc cần
- **Danh sách OPL** — ghi rõ "OPL nào cho công việc gì" để dễ tìm

#### Tiếp theo là gì?
Mỗi lần phát hiện lỗi lặp lại → tạo 1 OPL → 1 tuần sau không còn lỗi đó nữa

---

### **Khi Nào Viết ITTO? SIPOC? Value Analysis? BSC?**

Những công cụ này **không phải ưu tiên ngay bây giờ**, vì:

**ITTO** — dùng khi vẽ SIPOC/WI để không bỏ sót Input/Output của từng bước. (Nếu WI thực hiện tốt rồi, ITTO có thể tự sinh ra từ WI — không cần vẽ riêng)

**SIPOC** — dùng khi muốn vẽ **toàn bộ quy trình từ khách liên hệ tới bàn giao sau khóa học**. (Bây giờ Swimlane chỉ vẽ 1 buổi học — sau này có thể mở rộng thành SIPOC toàn bộ phễu)

**Value Analysis** — dùng khi muốn **rà soát tất cả hoạt động của Thuý** để tìm ra việc nào giao bớt cho chồng/học viên. (Bây giờ làm Swimlane rồi — tự nhiên sẽ thấy được ai làm gì, và "VIP tạo giá trị trực tiếp" là dạy, "BVA cần thiết" là logistics/hóa đơn, "Waste" là làm lại vì sai sót → value analysis tự sinh ra)

**BSC** — dùng sau 1-2 tháng chạy Swimlane + WI + OPL thành công. Lúc đó mới cần **đo "khách quay lại bao nhiêu?"** (không chỉ doanh số), để phát hiện "chạy ads tăng lead nhưng khách chất lượng kém / khách không quay lại".

---

## LỊCH TRÌNH CHỲ ĐỨC CỤ THỂ

| Tuần | Công cụ | Công việc cụ thể | Ai làm? | Output | Kiểm tra |
|---|---|---|---|---|---|
| Tuần 1-2 | BMC | Điền 9 ô, xác định tỷ lệ doanh thu từng loại | Thuý + Claude | 1 file BMC 9 ô (số liệu thật) | Thuý duyệt: tỷ lệ doanh thu có hợp lý? |
| Tuần 2-3 | Swimlane | Vẽ quy trình buổi học VIP, phát hiện 4 bàn giao + rủi ro | Thuý + Claude | 1 sơ đồ Swimlane + bảng bàn giao | Thuý mô tả lại: "đúng là điểm này hay bị bỏ sót" |
| Tuần 3 | WI | Viết 4 WI cho 4 bàn giao (xác nhận, chuẩn bị, hóa đơn, gửi) | Claude | 4 file WI (0.5-1 trang mỗi cái) + checklist | Thuý test: chồng đọc WI làm được không cần hỏi |
| Tuần 3-4 | OPL | Khi chồng/học viên làm sai điểm nào lặp lại → tạo OPL về điểm đó | Thuý + Claude | 1 video/ảnh OPL per lỗi | Chồng xem rồi "nhớ rồi" / không sai lại |
| Tuần 4+ | Tối ưu | Chạy quy trình Swimlane+WI+OPL liên tục, ghi lại lỗi | Thuý + Team | Bộ OPL dần dần lớn lên (mỗi tuần +1-2 cái) | Lỗi giảm theo thời gian |

---

## KẾT QUẢ MONG ĐỢI SAU 1 THÁNG

**Sau khi chạy BMC + Swimlane + WI + OPL:**

1. **Thuý giải phóng 30-40% thời gian làm admin** → dùng để dạy thêm khách / quay video / tư vấn chiến lược (việc chỉ mình làm được)
2. **Chồng/2 học viên "độc lập" → không cần hỏi từng lần** → làm dúng theo WI
3. **Buổi học ít bị "sơ suất"** (quên gọi xác nhận, quên dọn bàn, quên gửi tài liệu) → khách hài lòng hơn → tỷ lệ quay lại cao hơn → doanh thu ổn định hơn
4. **Mở rộng được sang khóa Basic** (buổi học nhóm 3-6 người) → cần thêm 1 trợ giảng → dùng bộ WI/OPL để onboard nhanh
5. **Dữ liệu để chạy BSC** (VD: tỷ lệ khách quay lại, đánh giá chất lượng, thời gian phản hồi) → bắt đầu biết "ads tăng lead nhưng chất lượng thế nào?"

---

## ĐIỀU CẦN LƯU Ý

### Sai lầm thường gặp khi áp dụng

1. **Viết BMC/Swimlane/WI quá chi tiết → không ai dùng** 
   - Vấn đề: Thuý viết đầy đủ tất cả khả năng nhưng chồng phải đọc 10 trang
   - Giải pháp: WI chỉ dùng cho 1 thao tác cụ thể, 0.5-1 trang, có ảnh

2. **Không test quy trình trước khi chính thức áp dụng**
   - Vấn đề: Viết BMC/Swimlane xong không dùng → lâu lâu quên
   - Giải pháp: Chạy 1 buổi học test với chồng → cùng Thuý rà lại Swimlane → sửa lỗi → mới áp dụng chính thức

3. **OPL tạo quá lâu hoặc quá công phu → mất đi tác dụng "nhanh gọn"**
   - Vấn đề: Quay video dài 5 phút thay vì 2 phút, chồng không xem
   - Giải pháp: OPL tối đa 2-3 phút, 1 điểm duy nhất, có thể xem mà hiểu ngay

4. **Viết xong rồi không cập nhật**
   - Vấn đề: BMC/Swimlane/WI cũ kỹ sau 2 tháng → không dùng được
   - Giải pháp: Mỗi tháng rà lại 1 lần (5 phút), sửa những gì sai/lỗi thời

### Khi nào biết "áp dụng thành công"?

- **BMC**: Thuý trả lời được "nếu chạy ads, nên target khách nào trước, sao?" → có kế hoạch doanh thu cụ thể (không phải "chỉ chạy ads xem sao")
- **Swimlane/WI**: Chồng/2 học viên làm công việc trong Swimlane mà **không phải hỏi lại từng lần** → làm được 80% tự động
- **OPL**: Chồng xem OPL 1 lần → **không sai điểm đó nữa trong 2 tuần tiếp theo**

---

## TEMPLATES SẴN (CÓ THỂ DÙNG NGAY)

[[concepts/8-cong-cu-quan-tri-van-hanh]] — khung tư duy chung
[[nang-luc/2026-07-11-sop-van-hanh-hoc-vien-nhan-su-ami]] — SOP cũ có sẵn (để tham khảo cách viết)
[[nang-luc/out-2026-07-13-giao-an-khoa-hoc-makeup-ca-nhan-5-buoi]] — giáo án chi tiết (dùng để làm BMC)

---

## TIẾP THEO: NẾU THUÝ SẴN SÀNG

- **Chốt xong BMC 9 ô** → gửi cho tôi để check, hoặc để ở tường cửa hàng để team thấy
- **Vẽ Swimlane cụ thể** → in ra, rà cùng chồng/2 học viên (0.5 giờ) → phát hiện lỗi → sửa
- **Viết 4 WI** → test với chồng 1 buổi học thật → sửa lại chỗ nào mơ hồ → in/dán nơi làm việc
- **OPL sinh ra tự nhiên** → mỗi tuần 1-2 OPL mới khi phát hiện lỗi lặp lại

---

Concepts: [[concepts/8-cong-cu-quan-tri-van-hanh]], [[concepts/sau-linh-vuc-kinh-doanh]]

Entities: [[entities/ami-makeup-academy]]

Sources: [[nang-luc/2026-07-11-chien-luoc-makeup-ca-nhan-ami]], [[nang-luc/2026-06-30-pheu-makeup-ca-nhan-ami-simple]]
