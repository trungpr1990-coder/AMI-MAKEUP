---
title: Human-in-the-Loop Approval — Mô Hình AI Soạn Nháp + Người Duyệt
type: concept
tags: [ai-automation, human-in-the-loop, approval-flow, chatbot, sales, safety]
created: 2026-06-07
updated: 2026-06-07
sources: [D:\botchat-thuythuy\]
---

## Khái Niệm

**Human-in-the-loop (HITL) approval** là mô hình tự động hóa trong đó AI tạo ra nội dung (nháp) nhưng mọi hành động thực tế đều phải qua cổng duyệt của con người trước khi xảy ra. AI không bao giờ hành động trực tiếp — chỉ đề xuất.

Nguyên tắc: **AI làm 90% công việc soạn thảo, người làm 10% quyết định cuối cùng.**

## Tại Sao Cần HITL

1. **Chất lượng nội dung:** AI có thể bịa thông tin (giá, lịch, ưu đãi) — người kiểm tra trước khi gửi
2. **Tính pháp lý & thương hiệu:** Tin nhắn gửi đi đại diện doanh nghiệp — không thể để AI hoàn toàn tự quyết
3. **Học liên tục:** Khi người sửa nháp, hệ thống lưu lại cặp (nháp gốc → bản chuẩn) để AI học về sau
4. **Bảo mật:** Giảm rủi ro prompt injection từ nội dung khách hàng

## Kiến Trúc HITL Đã Triển Khai

```
[Sự kiện đầu vào]
  Khách nhắn tin → poll phát hiện → Claude soạn nháp
                                         ↓
[Cổng duyệt]
  Card Lark gửi vào nhóm nội bộ (có nháp AI + hồ sơ khách)
  Nhân viên đọc → ra quyết định:
    ✓ ok          → gửi nháp gốc
    ✓ sửa + gửi  → gửi bản đã chỉnh (+ bot học)
    ✗ huỷ         → bỏ qua
                                         ↓
[Hành động thực tế]
  Gửi tin nhắn qua API → khách nhận
```

## Thiết Kế Lệnh Duyệt

Lệnh ngắn, gõ nhanh trong nhóm chat nội bộ:

| Lệnh | Hành động |
|------|-----------|
| `A1 ok` | Gửi nháp A1 nguyên bản |
| `A1: <text sửa>` | Gửi bản đã chỉnh + lưu correction để học |
| `A1 bỏ` | Huỷ vé, không gửi |
| `A1++` | Gửi & giữ vé mở để trả lời tiếp nhiều dòng |
| `dạy: <quy tắc>` | Nhét quy tắc vào bộ nhớ học của bot |

## Kỹ Thuật Triển Khai

- **Mã vé (ticket):** A1, A2, A3... — định danh duy nhất cho mỗi cuộc hội thoại cần duyệt
- **Pending store:** File JSON lưu vé đang chờ — survive restart
- **Card Lark:** Webhook gửi card với nháp AI + tên khách + snippet lịch sử
- **Event listener:** `lark-cli event consume` lắng nghe lệnh từ nhóm Lark
- **Audit log:** Mọi sự kiện (drafted, sent, skipped, learned) ghi vào `data/audit.log`

## Bộ Nhớ Học (Correction Loop)

```
Nhân viên gõ "A1: <bản sửa>"
  → Lưu { draft: nháp_gốc, corrected: bản_sửa, customerMsg, ... }
  → Lần sau: 3 ví dụ sửa gần nhất được nhét vào prompt
  → AI dần học văn phong & cách xử lý của nhân viên cụ thể
```

Lệnh `dạy:` cho phép nhét quy tắc tường minh (không cần chờ học ngầm):
```
dạy: Khi khách hỏi giá luôn hỏi lại "mình muốn chụp dịp gì ạ?" trước khi báo giá
```

## Điều Kiện Áp Dụng Tốt

- Hành động có hệ quả thực tế (gửi tin, đặt hàng, thanh toán) — không thể thu hồi
- Tốc độ phản hồi không yêu cầu real-time (vài phút lag là chấp nhận được)
- Đội ngũ nhỏ có thể monitor liên tục kênh duyệt
- Nội dung cần giữ đúng thương hiệu / thông tin cụ thể

## Liên Kết

[[sources/2026-botchat-thuythuy]], [[concepts/quy-trinh-tu-van-ban-hang]], [[entities/pancake-pages-fm]], [[entities/larksuite]]
