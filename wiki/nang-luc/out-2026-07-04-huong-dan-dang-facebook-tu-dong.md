---
title: Hướng dẫn sử dụng — Đăng bài Facebook tự động (mentor_club_app / GitHub Actions)
type: khoang
khoang: nang-luc
tags: [facebook, lark-base, github-actions, automation, mentor-camp]
created: 2026-07-04
updated: 2026-07-04
sources: []
---

## Bối cảnh

Hệ thống đăng bài Facebook tự động học từ nhóm "MENTOR CAMP 02", dựng bằng cách fork repo GitHub `nguyenlanh282/mentor_club_app` về `trungpr1990-coder/mentor_club_app`. Khác với [[concepts/dang-reel-facebook-tu-dong]] (chạy ngầm trên máy Windows cá nhân, quét mỗi 2 phút) và [[concepts/2026-07-03-dang-bai-da-nen-tang]] (đa nền tảng FB+IG+TikTok+AI, cũng chạy trên máy), hệ thống này **chạy trên GitHub Actions (cloud)** — không cần bật máy tính, quét mỗi 30 phút.

Dùng lại App Lark và Base cũ (Base tại `manhtrung610.jp.larksuite.com/base/Wtn8bQ4sLanhfWsHrZ9jmbmypeH`) nhưng tạo 2 bảng mới riêng cho hệ thống này để khớp đúng tên cột script yêu cầu: **"Đăng Reel"** và **"Fanpage"**.

## Hạ tầng

| Thành phần | Giá trị |
|---|---|
| Repo GitHub | `github.com/trungpr1990-coder/mentor_club_app` |
| Workflow | `.github/workflows/dang-bai-facebook.yml` — cron 30 phút + chạy tay |
| Script chạy | `dang-facebook/scripts/post-multi-reel-api.js` |
| Lark App ID | `cli_aaaaff00f7a19e17` (App Secret lưu trong GitHub Secrets, không ghi ở đây) |
| Base | `Wtn8bQ4sLanhfWsHrZ9jmbmypeH` (Base cũ, dùng chung với các bảng khác của Thuý) |
| Bảng "Đăng Reel" | `tblOrEK2S5YcgbaG` |
| Bảng "Fanpage" | `tbl2afxE4xahdint` — đã nạp sẵn 3 Page: Ami Makeup Academy, Thúy Rose Makeup & Academy, Thuý Trần Makeup & Academy |
| GitHub Secrets đã nạp | `LARK_APP_ID`, `LARK_APP_SECRET`, `LARK_APP_TOKEN`, `LARK_TABLE_ID`, `PAGES_TABLE_ID` |

Đã test đăng thật thành công lên Facebook ngày 2026-07-04 (đăng + xoá ngay bài test).

## Cách dùng hằng ngày

1. Mở Lark Base → bảng **"Đăng Reel"**.
2. Thêm 1 dòng, điền:
   - **Page**: chọn 1 hoặc nhiều Trang (link tới bảng Fanpage)
   - **Loại**: `Video` hoặc `Hình ảnh` (khớp với file đính kèm)
   - **Nội dung**: caption
   - **Comment ebook** (tuỳ chọn): nội dung tự động comment #1
   - **Ảnh/video**: đính file — Video MP4 dọc 9:16, 3–90 giây
   - **Lịch đăng bài**: giờ muốn đăng (để trống = đăng ở lần quét tới)
   - **Đăng**: tick ô này — không tick thì máy bỏ qua dòng
3. Không cần làm gì thêm — máy tự quét mỗi 30 phút, đăng đúng giờ hẹn, ghi lại **Trạng thái** / **Log** / **Link bài đăng** vào chính dòng đó.
4. Muốn đăng gấp không chờ cron: GitHub repo → tab Actions → workflow "Đăng bài Facebook..." → Run workflow → để trống các ô tuỳ chọn → Run workflow.
5. Muốn đăng đúng 1 dòng cụ thể: dán `record_id` của dòng đó vào ô "record_id" khi Run workflow.

## Thêm Page Facebook mới

Vào bảng "Fanpage" → thêm dòng: `Fanpage` (tên), `ID` (Page ID), `access_token` (Page Access Token lấy qua Graph API Explorer, quyền `pages_show_list`, `pages_read_engagement`, `pages_manage_posts`, `pages_manage_engagement`, gia hạn 60 ngày qua Access Token Debugger).

## Xử lý sự cố

| Hiện tượng | Nguyên nhân | Xử lý |
|---|---|---|
| Log `OAuthException`/token | FB Page token hết hạn (~60 ngày) | Lấy token mới, cập nhật cột `access_token` trong bảng Fanpage |
| Bài không lên dù đã tick "Đăng" | Thiếu file hoặc thiếu Page | Kiểm tra lại 2 cột đó |
| GitHub tự tắt cron sau 60 ngày không hoạt động | Chính sách GitHub Actions | Sửa 1 ký tự bất kỳ trong repo, commit lại để "đánh thức" |
| Workflow "Disabled" lần đầu vào Actions | Fork mặc định tắt Actions | Bấm "I understand my workflows, go ahead and enable them" |

## An toàn

- App Secret, Page Access Token, FB User Token **chỉ lưu trong GitHub Secrets** — không xuất hiện trong wiki, không commit vào code.
- FB User Token dùng 1 lần lúc setup để nạp Page token vào bảng Fanpage rồi bỏ, không lưu lại.

## Liên quan

[[concepts/dang-reel-facebook-tu-dong]], [[concepts/2026-07-03-dang-bai-da-nen-tang]]
