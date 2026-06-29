---
title: lark-minutes — Meeting Minutes / 妙记
type: skill
tags: [lark, minutes, recording, audio, video, transcript]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Quản lý 妙记 (Lark Minutes): tìm kiếm, xem thông tin, download audio/video, upload file âm thanh để tạo minutes mới.

## Shortcuts

| Shortcut | Mô tả |
|----------|-------|
| `+search` | Tìm minutes theo keyword/người/thời gian |
| `+download` | Download audio/video của minutes |
| `+upload` | Upload audio/video → tạo minutes mới |
| `+update` | Đổi tên minutes |
| `+speaker-replace` | Thay thế người nói trong transcript |

## Phân công rõ ràng

| Muốn gì | Dùng gì |
|---------|---------|
| Xem danh sách minutes | `minutes +search` |
| Xem thông tin cơ bản (tiêu đề, thời lượng) | `lark-cli minutes minutes get` |
| Download video/audio | `minutes +download` |
| Xem transcript/tóm tắt/todo/chapter | [[skills/lark-vc]] `vc +notes --minute-tokens` |
| Upload file audio → tạo minutes | `drive +upload` → `minutes +upload` → `vc +notes` |

## Lấy minute_token từ URL
URL dạng `https://*.feishu.cn/minutes/obcnXXX` → lấy phần sau `/minutes/` là `minute_token`.

## Luồng upload file → transcript
```bash
# Bước 1: Upload lên Drive
lark-cli drive +upload --file ./recording.mp4 --folder-token xxx

# Bước 2: Tạo minutes từ file_token
lark-cli minutes +upload --file-token <token>
# → trả về minute_url

# Bước 3: Lấy transcript
lark-cli vc +notes --minute-tokens <minute_token>
```

## Routing (khi user đề cập hội họp + minutes)
- Có từ "hội họp / cuộc họp" → trước tiên dùng [[skills/lark-vc]] `+search` để tìm meeting
- Chỉ nói "minutes / 妙记 của tôi" → dùng `minutes +search` trực tiếp

## Permissions

| Thao tác | Scope |
|----------|-------|
| Tìm kiếm | `minutes:minutes.search:read` |
| Xem cơ bản | `minutes:minutes:readonly` |
| Download | `minutes:minutes.media:export` |
| Upload/cập nhật | `minutes:minutes:update` |

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-vc]] | [[sources/2026-larksuite-cli]]
