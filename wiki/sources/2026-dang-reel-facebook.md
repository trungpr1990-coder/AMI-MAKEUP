---
title: Hệ thống Tự động Đăng Video Reel lên Facebook
type: source
tags: [facebook, reel, lark-base, automation, windows, nodejs]
created: 2026-06-19
updated: 2026-06-19
sources: [chuyen-giao-dang-reel-facebook.docx]
---

## Summary

Tài liệu chuyển giao hệ thống tự động đăng video Reel từ Lark Base lên Facebook Fanpage. Học viên chỉ cần điền video + đặt trạng thái "Chờ đăng" trong Base, máy tự đăng đúng giờ và ghi link bài về. Thay thế Anycross (bị chặn do video nặng). Cập nhật: 2026-06-08.

## Key Points

- Nguyên lý: Video đi thẳng Lark Drive → máy học viên → Facebook Graph API (upload phân mảnh)
- Windows Task chạy ẩn mỗi 2 phút quét Base tìm dòng "Chờ đăng"
- Lark App dùng chung: **ADS -> LARK**, App ID `cli_a736cbaaa63bd010`
- FB Page Token hết hạn ~60 ngày → admin phải cấp lại định kỳ
- Bộ cài nằm tại: `C:\Users\Admin\Desktop\ĐANG VIDEO REEL\bo-cai-dang-reel.zip`

## Entities Mentioned

(nội bộ)

## Concepts

[[concepts/dang-reel-facebook-tu-dong]]

## Notes

- _app.json chứa App Secret — gửi qua kênh riêng tư, không để public
- Học viên phải cùng workspace Lark với admin
- Yêu cầu máy: Windows 10/11, có quyền cài phần mềm, máy phải bật khi tới giờ đăng
