---
title: Hệ thống Tự động Đăng Reel Facebook từ Lark Base
type: concept
tags: [facebook, reel, lark-base, automation, windows, nodejs, graph-api]
created: 2026-06-19
updated: 2026-06-19
sources: [chuyen-giao-dang-reel-facebook.docx]
---

## Tổng quan

Hệ thống tự động đăng video Reel lên Facebook Fanpage từ Lark Base. Học viên thao tác hoàn toàn trong Base — máy chạy ngầm tự xử lý phần còn lại.

**Bộ cài:** `C:\Users\Admin\Desktop\ĐANG VIDEO REEL\bo-cai-dang-reel.zip`

---

## Kiến trúc

```
Lark Base (học viên điền) 
    → Windows Task (2 phút/lần, chạy ẩn)
    → post-reels.js quét dòng "Chờ đăng"
    → Tải video từ Lark Drive
    → Upload phân mảnh lên Facebook Graph API
    → Ghi Link Reel + đổi TT Reel → "Đã đăng"
```

**Lark App dùng chung:** ADS -> LARK — App ID `cli_a736cbaaa63bd010`

**Base mẫu:** `https://studiosuccess.sg.larksuite.com/base/Ahs4bAY2ZaUc6jscpykl4Vynglb`

---

## Cấu trúc Base

| Cột | Nội dung |
|-----|----------|
| Ảnh/video | Video MP4, dọc 9:16, 3–90 giây |
| Nội dung | Caption bài đăng |
| Hastag | Hashtag (tuỳ chọn) |
| Lịch đăng | Giờ muốn lên bài (trống = đăng luôn) |
| TT Reel | Trạng thái: **Chờ đăng** / Đã đăng / Lỗi |
| Link Reel | Tự điền sau khi đăng thành công |
| Log đăng Reel | Ghi lý do lỗi nếu thất bại |
| Loại | Phân loại nội dung |

---

## Bộ file chuyển giao

| File | Vai trò | Ai đụng |
|------|---------|---------|
| `CAI-DAT.bat` | Bấm đúp để cài (gọi wizard) | Học viên |
| `setup.ps1` | Wizard cài đặt tự động | (tự chạy) |
| `post-reels.js` | Bộ máy đăng Reel | Không sửa |
| `run-reels.ps1` | Chạy bộ máy + ghi log | (tự chạy) |
| `run-hidden.vbs` | Chạy ẩn, không hiện cửa sổ | (tự chạy) |
| `register-task.ps1` | Đăng ký Windows Task 2 phút | (tự chạy) |
| `init-app.js` | Nạp Lark App sạch | (tự chạy) |
| `config.local.json` | Cấu hình (wizard tự ghi) | (tự ghi) |
| `_app.json` | App Lark dùng chung | Admin điền App Secret |
| `HUONG-DAN-HOC-VIEN.md` | Hướng dẫn gửi học viên | Học viên đọc |
| `README-ADMIN.md` | Hướng dẫn admin | Admin đọc |

---

## Quy trình Admin (1 lần)

1. **Điền `_app.json`** — dán App Secret của App `cli_a736cbaaa63bd010`
2. **Bật quyền Base mẫu** — cho học viên "Make a copy"
3. **Lấy FB token** cho từng học viên — cần quyền `pages_manage_posts`, `pages_read_engagement`, `pages_show_list`
4. **Gửi học viên:** file nén + link Base mẫu + FB PAGE ID + FB PAGE TOKEN

> ⚠️ `_app.json` chứa App Secret → gửi qua kênh riêng tư

---

## Quy trình Học viên (~10 phút)

1. Nhân bản Base mẫu → copy link Base
2. Giải nén → bấm đúp `CAI-DAT.bat` (SmartScreen chặn: More info → Run anyway)
3. Wizard tự cài Node + lark-cli → đăng nhập Lark → dán link Base + FB PAGE ID + FB PAGE TOKEN
4. Thấy `HOAN TAT!` → máy đã chạy ngầm

---

## Cách dùng hằng ngày

Trong Base: điền video + nội dung + hashtag + lịch đăng → đổi **TT Reel = Chờ đăng** → trong ~2 phút máy tự đăng.

---

## Xử lý sự cố

| Hiện tượng | Xử lý |
|------------|-------|
| Log ghi `OAuthException/token` | Token FB hết hạn (~60 ngày) → admin cấp token mới → học viên dán vào `config.local.json` (`FB_PAGE_TOKEN`) |
| Lỗi định dạng/độ dài video | Cắt 3–90s, xuất MP4 dọc 9:16, đăng lại |
| Chờ đăng mà không lên | Chưa tới lịch đăng / máy chưa bật |
| Muốn đăng lại | Đặt lại TT Reel = Chờ đăng |

---

## Ghi chú kỹ thuật

- Windows Task: **"HOA - Dang Reel Facebook"**, chạy ẩn (wscript → VBS → PowerShell), 2 phút/lần
- Có khoá chống chạy chồng + retry 3 lần
- `.ps1`/`.bat`/`.vbs` viết ASCII-only; đọc config bằng `Get-Content -Encoding UTF8` (tránh hỏng dấu "Chờ đăng")
- Hướng event-driven đã cân nhắc nhưng tạo automation qua API timeout trên Base lớn → dùng polling 2 phút

**Yêu cầu máy:** Windows 10/11, có quyền cài phần mềm, máy phải bật khi tới giờ đăng.

---

## Nguồn

[[sources/2026-dang-reel-facebook]]
