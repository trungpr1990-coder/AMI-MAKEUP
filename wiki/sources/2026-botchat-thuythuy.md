---
title: Hệ Thống Botchat ThuýThuy — Tự Động Soạn Nháp & Duyệt Lark
type: source
tags: [automation, chatbot, pancake, lark, facebook-messenger, human-in-the-loop, sales]
created: 2026-06-07
updated: 2026-06-07
sources: [D:\botchat-thuythuy\]
---

## Summary

Hệ thống tự động hóa chăm sóc khách hàng qua Facebook Messenger cho [[entities/gao-nau-personal-makeup]]. Bot quét tin nhắn từ [[entities/pancake-pages-fm]], dùng Claude AI soạn nháp trả lời theo PERSONA tư vấn bán hàng 4P, sau đó đẩy card vào nhóm Lark để nhân viên duyệt trước khi gửi thật. Toàn bộ chạy 24/7 trên Windows qua supervisor PowerShell.

## Key Points

- **Luồng chính:** Pancake poll → Claude draft → Lark approval card → nhân viên gõ lệnh → gửi qua Pancake API
- **Human-in-the-loop:** AI chỉ soạn nháp, không bao giờ tự gửi cho khách — mọi tin đều phải qua cửa duyệt
- **PERSONA:** Chuyên viên CSKH dùng khung 4P (Present/Passion/Puzzle/Proceed) + kỹ thuật xử lý từ chối — cùng triết lý với [[concepts/quy-trinh-tu-van-ban-hang]]
- **Bảo mật prompt-injection:** Claude được gọi với `--disallowedTools` toàn bộ + `--permission-mode default` → nội dung khách chỉ sinh văn bản, không chạy lệnh
- **Tự hồi phục:** Supervisor PowerShell dùng mutex toàn cục, restart process mỗi 15s nếu crash; `event consume` tự restart sau 5s nếu tắt
- **Bộ nhớ học:** Nhân viên sửa nháp → bot lưu cặp (nháp gốc, bản chuẩn) → áp dụng vào lần sau; lệnh `dạy:` nhét quy tắc vào prompt

## Kiến Trúc Hệ Thống

```
poll.mjs (mỗi 10s)
  └─ Pancake API: lấy hội thoại chưa trả lời
  └─ lib/draft.mjs: gọi claude -p headless → soạn nháp
  └─ lib/notify.mjs: đẩy card Lark (webhook) với mã vé A1/A2/...

approve.mjs (chạy thường trực)
  └─ lark-cli event consume im.message.receive_v1 --as bot
  └─ Parse lệnh từ nhóm Lark:
       A1 ok        → gửi nháp gốc cho khách
       A1: <text>   → gửi bản đã sửa (+ học correction)
       A1 bỏ        → huỷ vé
       A1++         → gửi & giữ vé mở (tiếp tục trả lời)
       dạy: <text>  → lưu quy tắc vào bộ nhớ học

start-botchat.ps1 (supervisor)
  └─ Mutex toàn cục: chỉ 1 supervisor chạy
  └─ Ensure-Proc poll / approve mỗi 15s
```

## Thư Mục & File Chính

| File | Vai trò |
|------|---------|
| `D:\botchat-thuythuy\config.json` | Config trung tâm: Pancake token, Lark webhook/groupChatId, model Claude |
| `poll.mjs` | Vòng lặp quét Pancake, soạn nháp, đẩy card |
| `approve.mjs` | Lắng nghe sự kiện Lark, thực thi lệnh duyệt |
| `lib/draft.mjs` | Gọi `claude -p headless`, build prompt PERSONA + kiến thức học |
| `lib/knowledge.mjs` | Lưu/đọc bộ nhớ học (lessons + corrections) |
| `lib/schedule.mjs` | Đọc Lịch Chụp từ Lark Base → nhét vào prompt |
| `lib/larkbase.mjs` | Tra cứu hồ sơ khách (Khách Hàng, Đơn Hàng, Lịch Chụp) |
| `lib/convcache.mjs` | Cache hội thoại, rolling summary cho cuộc trò chuyện dài |
| `start-botchat.ps1` | Supervisor 24/7 |
| `data/audit.log` | Nhật ký mọi sự kiện: scan, drafted, sent, learned |

## Config Quan Trọng

- **Pancake pageId:** `107316028983142` (Facebook Page Gạo Nâu)
- **Lark App:** `cli_aaaaff00f7a19e17`
- **Lark groupChatId (nhóm duyệt):** `oc_f1fc068dd9860c5c81416430efbc1ce5`
- **Lark Base token:** `O2qIbEaIYabXEGsW6Dzjs0LCpZg`
- **Claude model:** `sonnet` (soạn nháp), `haiku` (tóm tắt)
- **claude.cmd:** `C:\tools\nodejs\claude.cmd` (wrapper tự tìm phiên bản mới nhất)

## Entities Mentioned

[[entities/pancake-pages-fm]], [[entities/gao-nau-personal-makeup]], [[entities/larksuite]], [[entities/lark-cli]]

## Concepts

[[concepts/human-in-the-loop-approval]], [[concepts/quy-trinh-tu-van-ban-hang]], [[concepts/lark-auth-identity]]

## Notes

- Token Pancake trong `config.json` là bí mật — không commit public, không chia sẻ
- Lệnh duyệt hoạt động trong nhóm Lark chứa bot; chat_id phải khớp `groupChatId` trong config
- `lark-cli event consume` thoát khi stdin đóng — approve.mjs dùng `spawn()` với `stdio: 'pipe'` để giữ stdin mở
- Supervisor cần khởi động thủ công sau mỗi lần reboot (chưa cài Task Scheduler auto-start)
