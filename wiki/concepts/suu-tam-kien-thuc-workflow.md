---
title: Workflow Sưu Tầm Tri Thức YouTube
type: concept
tags: [workflow, youtube, tri thức, tự động hóa, powershell, yt-dlp]
created: 2026-06-23
updated: 2026-06-23
sources: [suu-tam-kien-thuc/SKILL.md]
---

## Tổng Quan
Quy trình 7 bước biến video YouTube thành tri thức học được, tự động chạy 2 lần/ngày.

---

## Hai Chế Độ Hoạt Động

### COLLECT — 6h sáng (sưu tầm)
1. Đọc danh sách nguồn từ `sources.txt`
2. Quét 40 video mới nhất mỗi kênh
3. Bỏ qua video đã có (so theo `video_id`) và video không có phụ đề
4. Tải phụ đề `vi`/`vi-vi` (json3) → làm sạch → ghi `.md` vào `_inbox`
5. Ghi log số video mới

### CONSOLIDATE — 23h tối (nạp não)
1. Liệt kê file trong `_inbox` (status: `transcript-only`)
2. Đọc từng transcript → tự viết dàn ý → đổi status → `complete`
3. Cấu trúc dàn ý: Luận điểm cốt lõi → Các chủ đề → CTA
4. Chạy `classify.ps1` → chuyển file vào đúng 9 thư mục chủ đề
5. Ghi tổng kết vào `_suu_tam_log.txt`

---

## Cấu Hình Kỹ Thuật

| Mục | Giá trị |
|-----|---------|
| yt-dlp | `D:\Trí Tuệ Uyên Nhiên\.tools\yt-dlp.exe` |
| Kho | `D:\Trí Tuệ Uyên Nhiên\raw\Tri Thức Sưu Tầm` |
| Scripts | `C:\Users\Admin\Desktop\suu-tam-kien-thuc\scripts\` |
| Nguồn mặc định | `@longguru` |
| Inbox | `...\longguru\videos\_inbox` |

**Quy tắc chạy script (đường dẫn có chữ Việt):**
```powershell
$c = Get-Content -Raw -Encoding UTF8 "path\collect.ps1"; Invoke-Expression $c
```

---

## 9 Chủ Đề Phân Loại

| # | Chủ đề | Khoang tri thức tương ứng |
|---|--------|--------------------------|
| 01 | Quan hệ – Gia đình | [[nhan-cach/2026-tong-hop-nhan-cach]] |
| 02 | Tài chính | [[vat-chat/2026-tong-hop-vat-chat]] |
| 03 | Bán hàng | [[nang-luc/2026-tong-hop-nang-luc]] |
| 04 | Marketing – MXH | [[nang-luc/2026-tong-hop-nang-luc]] |
| 05 | Lãnh đạo – Đội nhóm | [[nang-luc/2026-tong-hop-nang-luc]] |
| 06 | Khởi nghiệp – Kinh doanh | [[tri-tue/2026-tong-hop-tri-tue]] |
| 07 | Cảm xúc – Sức khỏe | [[tam-thai/2026-tong-hop-tam-thai]] + [[the-chat/2026-tong-hop-the-chat]] |
| 08 | Tư duy – Thành công | [[tri-tue/2026-tong-hop-tri-tue]] |
| 09 | Khác | *(phân loại sau)* |

---

## Kích Hoạt Thủ Công
- `"đi sưu tầm"` / `"có gì mới không"` → COLLECT + CONSOLIDATE
- `"nạp vào não"` / `"cập nhật kiến thức"` → CONSOLIDATE
- `"thêm kênh X"` → thêm vào `sources.txt`
