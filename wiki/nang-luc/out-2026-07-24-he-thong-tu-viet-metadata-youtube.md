---
title: Hệ thống tự viết Tiêu đề/Mô tả/Tags YouTube từ khung hình video
type: analysis
khoang: nang-luc
tags: [youtube, tu-dong-hoa, ai, lark-base, content]
created: 2026-07-24
updated: 2026-07-24
sources: []
---

## Summary

Mở rộng skill `hmh-AIOS-dang-video-youtube` (Lark Base → Scheduled Task → YouTube Data API v3):
thêm khả năng **tự viết Tiêu đề/Mô tả/Tags** cho video chưa được điền, dựa trên 1 khung hình trích
từ chính video đó (ffmpeg + Claude vision), theo đúng văn phong Thuý Trần. Hai Scheduled Task chạy
song song: `HMH-YouTube-AutoWrite` (30 phút/lần, viết metadata) và `HMH-YouTube-AutoPost` (1
phút/lần, đăng thật lên YouTube) — cả hai đã **bật (Enabled) và chạy thật** từ 2026-07-24.

## Key Points

- **Bảng thật:** Lark Base `Wtn8bQ4sLanhfWsHrZ9jmbmypeH`, table "Lịch đăng YouTube"
  (`tbliwtGVqZ9WuOLI`) — cùng Base với hệ thống Facebook "Đăng Reel", dùng chung
  `ANTHROPIC_API_KEY`.
- **File mới:** `generate-metadata.js` (script chính), `lib/video-frame.js` (trích khung hình bằng
  ffmpeg dùng chung của skill `sao-chép-văn-phong`), `lib/anthropic.js` + `lib/metadata-from-image.js`
  (gọi Claude vision), `youtube-brand-voice.md` (giọng điệu + ví dụ thật lấy từ chính các video đã
  đăng trên kênh), `register-task-metadata.ps1`.
- **An toàn khỏi đăng nhầm:** `scan-and-post.js` được sửa để **chỉ đăng khi Tiêu đề đã có chữ** —
  dòng "Chờ đăng" chưa được AI viết xong sẽ tự chờ, không đăng với tiêu đề rỗng.
- **Cột mới "Tên file video":** tự điền tên file gốc đính kèm cho MỌI dòng có Video (kể cả dòng
  Thuý tự điền tay, không chỉ dòng AI xử lý) — chạy trong `scan-and-post.js` (mỗi phút) để nhanh và
  không bỏ sót trường hợp thủ công.
- **Bài học kỹ thuật quan trọng — chống lặp câu mở/kết:** lần đầu chỉ gợi ý "tinh thần câu" và để
  AI tự diễn đạt lại → AI vẫn hội tụ về 1-2 câu quen thuộc (`"Xin chào các nàng, lại là Thuý đây
  ạ!"` lặp 7/12 dòng) dù đã xoay vòng đúng 6 mẫu khác nhau ở input. Fix triệt để: **bắt AI dùng
  đúng NGUYÊN VĂN** câu mở/câu kết được gán (script tự xoay vòng roundrobin qua 6 mẫu, lệch pha
  giữa mở/kết), AI chỉ tự viết phần nội dung ở giữa. Sau khi đổi, 12/12 dòng không còn dòng nào
  trùng.
- **Bug JSON:** `parseJsonFromText` (brace-matching thô sơ) vỡ khi model trả về newline thật trong
  chuỗi JSON — fix bằng cách bắt buộc yêu cầu JSON trên 1 dòng, không xuống dòng thật trong
  `description`.
- **Phát hiện lỗi múi giờ lệch 1 tiếng:** cột "Ngày giờ đăng" (Lark Bitable DateTime) lưu **sớm hơn
  đúng 1 tiếng** so với giờ Thuý gõ (gõ 21:00 → lưu 20:00 giờ VN) — đã loại trừ nguyên nhân Lark
  Calendar Settings (xác nhận đúng GMT+7 rồi, không cần đổi) và cả tài khoản Base app (không có
  timezone setting nào lộ qua Bitable API). Nghi vấn cao nhất: thiết bị/app Thuý dùng để gõ giờ có
  đồng hồ hệ thống lệch múi giờ so với GMT+7. Chưa xác định được thiết bị cụ thể.
  **Giải pháp áp dụng ngay:** Thuý gõ bù +1 tiếng khi nhập tay (muốn đăng 21h thì gõ 22h). Đã sửa
  lại toàn bộ 11 dòng đang chờ đăng (25/7-5/8) cộng thêm đúng 1 tiếng để về đúng 21:00 thật.
- **Video test đầu tiên đã đăng thật:** "Makeup tone hồng đào ngọt ngào..." →
  https://www.youtube.com/watch?v=0Yn2JPOpkzQ (do quá hạn lịch cũ, đăng ngay khi bật Task theo xác
  nhận của Thuý — coi là trễ lịch chấp nhận được, không phải lỗi).

## Entities Mentioned

Kênh YouTube "Thuý Trần Makeup" (chưa có trang entity riêng).

## Concepts

Không tạo concept riêng — thuộc nhóm tự động hoá đăng bài đã có
[[concepts/dang-reel-facebook-tu-dong]] và [[concepts/2026-07-03-dang-bai-da-nen-tang]] (cùng mô
hình Lark Base → Scheduled Task → API nền tảng, khác ở chỗ đây là YouTube thay vì Facebook).

## Notes

- 2 Task hiện đang **Enabled/Ready** — video sẽ tự đăng công khai thật hàng ngày lúc 21:00 (25/7
  trở đi), không đăng dồn cả loạt vì mỗi dòng có mốc giờ riêng.
- Việc xác định chính xác thiết bị nào gây lệch múi giờ vẫn còn bỏ ngỏ — nếu phát sinh lại lệch giờ
  ở dòng mới, kiểm tra lại đồng hồ hệ thống của thiết bị Thuý dùng để nhập liệu (điện thoại/máy
  tính), không phải Lark Calendar hay Base settings (đã loại trừ).
