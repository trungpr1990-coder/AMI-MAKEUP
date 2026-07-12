---
name: dang-reel-facebook
description: >
  Hệ thống tự động đăng video Reel lên Facebook fanpage từ bảng Lark Base — không giới hạn dung lượng video (thay Anycross bị chặn do video nặng). Học viên thả video + đặt trạng thái "Chờ đăng", máy tự đăng đúng giờ và ghi link bài về Base. Video đi thẳng Lark Drive → máy → Facebook Graph API (upload phân mảnh). Tác vụ chạy ẩn quét Base mỗi 2 phút.
  Dùng khi người dùng muốn tự động đăng reel/video lên Facebook fanpage, lên lịch đăng video, không muốn đăng tay, hoặc cần hệ thống chạy ẩn tự động post.
  Kích hoạt khi có từ: đăng reel tự động, tự động post Facebook, lịch đăng reel, đăng video Facebook tự động, hệ thống đăng reel, cài bộ đăng reel, Anycross thay thế.
---

# Skill: Hệ thống Tự động Đăng Video Reel lên Facebook

Tự động đăng video Reel từ bảng Lark Base lên fanpage Facebook, không giới hạn dung lượng. Học viên chỉ thả video + đặt trạng thái → máy tự đăng đúng giờ.

## Kiến trúc hệ thống

```
Lark Base (bảng Reel)
  └── TT Reel = "Chờ đăng"
         │
         ▼ (tác vụ quét 2 phút/lần)
Máy Windows (post-reels.js)
  └── Tải video từ Lark Drive
         │
         ▼
Facebook Graph API (upload phân mảnh)
  └── Đăng lên fanpage
         │
         ▼
Ghi lại Link Reel + đổi TT Reel → "Đã đăng"
```

## Bộ cài đặt gồm gì

| File | Vai trò | Ai dùng |
|---|---|---|
| `CAI-DAT.bat` | Bấm đúp để cài (gọi wizard) | Học viên |
| `setup.ps1` | Trình cài đặt tự động | (tự chạy) |
| `post-reels.js` | Bộ máy đăng Reel | (không sửa) |
| `run-reels.ps1` | Chạy bộ máy + ghi log | (tự chạy) |
| `run-hidden.vbs` | Chạy ẩn (không hiện cửa sổ) | (tự chạy) |
| `register-task.ps1` | Đăng ký lịch chạy ẩn 2 phút | (tự chạy) |
| `_app.json` | App Lark dùng chung | ADMIN điền App Secret |
| `config.local.json` | Cấu hình (wizard tự ghi) | (tự ghi) |

> Toàn bộ file trong `bo-cai-dang-reel.zip` (gói chuyển giao).

## Chuẩn bị (ADMIN — làm 1 lần)

### 1. Điền App Lark vào `_app.json`

```json
{
  "APP_ID": "cli_a736cbaaa63bd010",
  "APP_SECRET": "<<DÁN APP SECRET VÀO ĐÂY>>",
  "BRAND": "lark"
}
```

> ⚠️ `_app.json` chứa bí mật → gửi bộ cài qua kênh riêng tư, không đưa lên mạng công khai.

### 2. Base mẫu cho học viên nhân bản

Tạo sẵn Base mẫu đủ cột: TT Reel / Ảnh-video / Nội dung / Hastag / Lịch đăng / Link Reel / Log / Loại. Bật quyền cho học viên **"Tạo bản sao (Make a copy)"**.

### 3. Lấy token Facebook cho từng học viên

Mỗi học viên đăng lên trang riêng → cần **Page Access Token dài hạn** riêng với quyền:
- `pages_manage_posts`
- `pages_read_engagement`
- `pages_show_list`

Lấy qua Graph API Explorer. Gửi học viên 2 dòng: **FB PAGE ID** + **FB PAGE TOKEN**. Token hết hạn ~60 ngày → cấp lại khi hết.

### 4. Yêu cầu học viên

- Phải ở **cùng workspace Lark** (để dùng app chung + nhân bản Base)
- App có scope `base` + `drive`

## Học viên cài đặt (~10 phút)

1. Nhân bản Base mẫu → copy link Base (`https://.../base/xxxx?table=tblyyyy`)
2. Giải nén bộ cài → bấm đúp `CAI-DAT.bat`
   - Nếu SmartScreen chặn: **More info → Run anyway**
3. Làm theo màn hình: máy tự cài Node + lark-cli → đăng nhập Lark (mở trình duyệt, Đồng ý) → dán link Base + FB PAGE ID + FB PAGE TOKEN
4. Thấy **HOAN TAT!** là xong — máy đã chạy ngầm tự động

## Cách dùng hằng ngày

Trong Base, mở 1 dòng và điền:

| Cột | Điền |
|---|---|
| Ảnh/video | Video (MP4, dọc 9:16, 3–90 giây) |
| Nội dung | Caption |
| Hastag | Hashtag (tuỳ chọn) |
| Lịch đăng | Giờ muốn lên bài (trống = đăng luôn) |
| **TT Reel** | **Chọn "Chờ đăng"** ← nút bắt đầu |

→ Trong ~2 phút (hoặc đúng giờ hẹn) máy tự đăng, đổi TT Reel → **"Đã đăng"** + ghi Link Reel.

## Xử lý sự cố

| Hiện tượng | Xử lý |
|---|---|
| TT Reel = Lỗi, Log ghi `OAuthException/token` | Token FB hết hạn → admin cấp token mới, học viên dán vào `config.local.json` (`FB_PAGE_TOKEN`) |
| Lỗi định dạng/độ dài video | Cắt 3–90s, xuất MP4 dọc, đăng lại |
| Để Chờ đăng mà không lên | Chưa tới Lịch đăng / máy chưa bật |
| Muốn đăng lại | Đặt lại TT Reel = Chờ đăng |

## Yêu cầu máy

- Windows 10/11, có quyền cài phần mềm
- **Máy bật khi tới giờ đăng** (task chạy ẩn 2 phút/lần)

## Ghi chú kỹ thuật

- Tác vụ Windows: `"HOA - Dang Reel Facebook"`, chạy ẩn (wscript→VBS→PowerShell), 2 phút/lần, có khoá chống chạy chồng
- Video upload phân mảnh qua Facebook Graph API — không giới hạn dung lượng (khác Anycross)
- Tự động retry khi gặp lỗi tạm thời

---
*Skill chuyển giao từ SOP "Hệ thống Đăng Reel Facebook" — Hoàng Minh Hóa Academy. Cập nhật: 2026-06-08.*
