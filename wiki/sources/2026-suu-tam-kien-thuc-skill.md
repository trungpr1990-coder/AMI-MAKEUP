---
title: Skill Sưu Tầm Tri Thức — YouTube → Bộ Não
type: source
tags: [skill, youtube, tri thức, tự động hóa, powershell]
created: 2026-06-23
updated: 2026-06-23
sources: [suu-tam-kien-thuc/SKILL.md]
---

## Summary
Skill tự động hóa quy trình sưu tầm tri thức từ YouTube: tải phụ đề tiếng Việt → tạo file markdown → viết dàn ý ý chính → phân loại vào 9 chủ đề. Chạy theo lịch 6h (COLLECT) và 23h (CONSOLIDATE), hoặc kích hoạt thủ công khi được gọi.

## Key Points
- **Kho lưu:** `D:\Trí Tuệ Uyên Nhiên\raw\Tri Thức Sưu Tầm`
- **Công cụ:** yt-dlp (standalone .exe), PowerShell 5.1
- **Nguồn mặc định:** @longguru (YouTube channel)
- **Hai chế độ:** COLLECT (sưu tầm video mới) và CONSOLIDATE (viết dàn ý + phân loại)
- **9 chủ đề:** Quan hệ–Gia đình · Tài chính · Bán hàng · Marketing–MXH · Lãnh đạo–Đội nhóm · Khởi nghiệp–Kinh doanh · Cảm xúc–Sức khỏe · Tư duy–Thành công · Khác
- **Quy tắc quan trọng:** Chạy script bằng `Get-Content -Encoding UTF8 | Invoke-Expression` vì đường dẫn có chữ Việt

## Entities Mentioned
*(không có entity cụ thể)*

## Concepts
[[concepts/suu-tam-kien-thuc-workflow]]

## Notes
- Script nằm tại `C:\Users\Admin\Desktop\suu-tam-kien-thuc\scripts\`
- Video không có phụ đề (Shorts, hội viên) → bỏ qua, ghi log
- Lịch tự động chỉ chạy khi app Claude đang mở
