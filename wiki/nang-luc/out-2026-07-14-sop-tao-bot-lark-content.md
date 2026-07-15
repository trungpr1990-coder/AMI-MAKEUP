---
title: SOP Tạo Bot Lark Điều Khiển Claude Code (case Bun Content)
type: khoang
khoang: nang-luc
tags: [sop, van-hanh, lark-cli, bot, automation, claude-code]
created: 2026-07-14
updated: 2026-07-14
sources: [phiên làm việc tạo bot "Bé Bun Content" 2026-07-14]
---

## Bối cảnh

Quy trình đầy đủ để dựng **một bot Lark mới** (kiểu như bot Sóc `D:\SOC-BOT`, nhưng độc lập, dùng app Lark riêng) — nhắn tin qua nhóm Lark trên điện thoại để điều khiển Claude Code chạy trên máy tính, không cần mở máy. Ghi lại từ ca dựng bot **"Bé Bun Content"** (`D:\BUN-CONTENT-BOT`) — chuyên về content/marketing, tách biệt khỏi bot Sóc (đa năng).

**Trước khi làm:** nếu máy đã có bot tương tự (vd Sóc), phải hỏi người dùng bot mới khác gì bot cũ — tránh dựng trùng chức năng (xem [[feedback-so-sanh-skill-trung-lap]]).

## Quy trình 11 bước

### 1. Xác định App ID/App Secret
Người dùng tạo app trên `open.larksuite.com` (hoặc đã có sẵn) → lấy App ID (`cli_xxx`) + App Secret từ trang Credentials & Basic Info. **Không tự tạo app thay người dùng** — đây là tài khoản/app của họ.

### 2. Đăng ký profile lark-cli riêng
lark-cli hỗ trợ nhiều "profile" (mỗi profile = 1 app Lark khác nhau), không dùng chung config với bot cũ:
```
echo "<app-secret>" | lark-cli profile add --name <ten-profile> --app-id <app-id> --app-secret-stdin --brand lark
```
Dùng `--app-secret-stdin` để secret không lộ trong process list. Brand `lark` cho open.larksuite.com quốc tế (`feishu` cho bản Trung Quốc).
Kiểm tra: `lark-cli profile list`, `lark-cli --profile <ten> doctor`.

### 3. Đăng nhập user identity (nếu cần open_id chủ)
```
lark-cli --profile <ten> auth login --domain im --no-wait --json
```
Lấy `verification_url` + `device_code`, tạo QR (`lark-cli auth qrcode <url> --output <file>.png`), gửi cho người dùng quét. Sau khi họ xác nhận, chạy tiếp:
```
lark-cli --profile <ten> auth login --device-code <device_code>
```
`auth status --json --verify` trả về `identities.bot.openId` và `identities.user.openId` — **đây chính là OWNER_OPEN_ID cần dùng**, không cần bước "nhắn tin để bắt open_id" thủ công nếu đã login user identity thành công.

### 4. Cấp quyền (scope) cho app
Mọi thao tác ghi (tạo nhóm, gửi tin, đọc tin) đều báo lỗi `app_scope_not_applied` kèm `console_url` nếu app chưa có scope. Đưa link đó cho người dùng để họ tự thêm quyền trong Console (không tự ý bấm hộ — đây là tài khoản của họ). Scope tối thiểu cho 1 bot điều khiển qua tin nhắn: `im:chat`, `im:chat:create`, `im:chat:create_by_user`, `im:message`, `im:message:send_as_bot`, `im:resource`.
**Lưu ý quan trọng:** với app tự xây (self-built), sau khi thêm scope trong Console, phải **tạo phiên bản mới & Publish (Version Management & Release)** thì quyền mới có hiệu lực — chỉ bấm "lưu" quyền là chưa đủ, đây là nguyên nhân phổ biến khiến lệnh vẫn báo thiếu quyền dù đã thêm.

### 5. Tạo nhóm Lark điều khiển
Có thể tạo qua CLI thay vì bắt người dùng tự thao tác tay:
```
lark-cli --profile <ten> im +chat-create --as bot --name "<Tên bot>" --type private --users "<owner_open_id>" --set-bot-manager --json
```
Trả về `chat_id` — lưu lại, dùng làm `CONTROL_CHAT_ID`.

### 6. Test gửi/nhận
```
lark-cli --profile <ten> im +messages-send --as bot --chat-id <chat_id> --text "test" --json
lark-cli --profile <ten> event consume im.message.receive_v1 --as bot --timeout 25s
```
(nhắn tay 1 tin trong nhóm khi lệnh consume đang chạy để xác nhận nhận được, kiểm tra `sender_id` khớp owner_open_id).

### 7. Viết bridge script (Node.js, `.mjs`)
Vòng lặp: `event consume` (nhận NDJSON qua stdout) → parse `chat_id`/`sender_id`/`content` → lọc đúng nhóm + đúng chủ → gọi Claude Code headless (`claude -p --output-format json --model <model> --permission-mode <mode> --append-system-prompt <persona>`, prompt qua stdin) → gửi kết quả về qua `im +messages-send`.

**⚠️ Cạm bẫy Windows #1 — quoting shell:** KHÔNG spawn `lark-cli` (hay bất kỳ `.cmd`) với `{ shell: true }` và args có dấu cách/tiếng Việt — Node chỉ nối chuỗi, không tự escape, gây lỗi kiểu `positional arguments are not supported` (chuỗi bị tách theo khoảng trắng). Cách đúng: spawn thẳng `node.exe` (`process.execPath`) với đường dẫn `run.js` bên trong package `@larksuite/cli`, KHÔNG qua shell — args mảng được truyền an toàn cho file thực thi thật (`.exe`), không cần escape thủ công.

**⚠️ Cạm bẫy Windows #2 — Scheduled Task không thấy `AppData\Roaming\npm`:** Nếu lark-cli cài global (`npm i -g`), package nằm ở `C:\Users\<user>\AppData\Roaming\npm\node_modules\...`. Đường dẫn này **hoạt động bình thường khi test tay** (PowerShell/Bash) nhưng **`existsSync()` trả về `false`** khi chạy từ tiến trình do Windows Task Scheduler khởi động (dù cùng user, cùng quyền) — do virtualization/redirect của Roaming profile không được nạp cho phiên không tương tác. Triệu chứng: lỗi `Cannot find module '...run.js'` chỉ xảy ra khi chạy qua Scheduled Task, không tái hiện được khi test thủ công → dễ nhầm là lỗi ngẫu nhiên.
**Cách sửa triệt để:** copy hẳn package vào thư mục dự án của bot (vd `D:\BUN-CONTENT-BOT\node_modules\@larksuite\cli`), trỏ đường dẫn `run.js` vào bản copy cục bộ trên ổ D:\ — không phụ thuộc `AppData\Roaming` của user profile nữa. File config auth (`C:\Users\<user>\.lark-cli\config.json`) thì KHÔNG bị vấn đề này (vẫn đọc được bình thường từ Scheduled Task).
**Cách debug nếu gặp lỗi tương tự:** log `existsSync(path)`, `process.cwd()`, `process.env.PATH` ngay trong tiến trình con lúc khởi động, so sánh giữa chạy tay và chạy qua Task — sẽ lộ ngay sự khác biệt.

### 8. File `.env`
Không hardcode secret trong code. Các biến cần: `LARK_PROFILE`, `CONTROL_CHAT_ID`, `OWNER_OPEN_ID`, `CLAUDE_MODEL`, `BRAIN_ROOT`, `CLAUDE_BIN` (đường dẫn `claude.exe` thật — kiểm tra bằng `which claude`/`Get-Command claude`, đường dẫn hay đổi giữa các lần cài), `PERMISSION_MODE`, `KEEP_SESSION`, `CLAUDE_TIMEOUT_MS`.

**`PERMISSION_MODE=bypassPermissions` là quyết định rủi ro cao — LUÔN hỏi xác nhận rõ ràng với người dùng trước khi đặt** (hệ thống chặn tự động nếu agent tự ý set mà chưa hỏi). Chế độ này khiến Claude thực thi mọi lệnh nhắn qua Lark ngay lập tức, không hỏi lại — ai chiếm được quyền nhắn vào đúng nhóm là điều khiển được máy tính hoàn toàn.

### 9. Chạy nền 24/7 qua Scheduled Task
Copy mô hình từ bot Sóc: `start-supervisor.ps1` (vòng lặp `Start-Process` giữ tiến trình sống, dùng `Mutex` để tránh chạy trùng) + `setup-task.ps1` (đăng ký `Register-ScheduledTask`, trigger `AtLogOn`, `RestartCount 999`). **Đăng ký Scheduled Task cần quyền Administrator** — nếu agent không có quyền admin trong phiên làm việc, phải hướng dẫn người dùng tự mở PowerShell "Run as administrator" và chạy `setup-task.ps1`.
Kích hoạt lần đầu ngay (không đợi lần đăng nhập tiếp theo): `Start-ScheduledTask -TaskName "<ten-task>"`.

### 10. Test end-to-end qua Lark thật
Nhắn `/ping` và 1 câu tự do vào nhóm, kiểm tra file log (`data/bridge.log`) để xác nhận luồng nhận → xử lý → gửi phản hồi không lỗi.

### 11. Đặt "persona" (system prompt) cho bot
Persona quyết định vai trò/giọng điệu bot sẽ dùng khi trả lời qua Lark — **không nên nhồi cứng tài liệu SOP/giọng điệu thương hiệu vào đây nếu người dùng muốn nội dung tự do, sáng tạo hơn**; hỏi rõ người dùng muốn bot bám khung có sẵn trong wiki hay viết tự do trước khi quyết định nội dung persona.

## Bài học chung

- Luôn kiểm tra máy đã có bot tương tự chưa trước khi dựng mới, tránh trùng lặp hạ tầng.
- Toàn bộ bước cấp quyền (scope) và tạo app đều là hành động trên tài khoản người dùng — đưa link Console cho họ tự làm, không tự ý thao tác thay.
- 2 cạm bẫy Windows ở bước 7 (shell quoting + AppData\Roaming invisible dưới Scheduled Task) là nguyên nhân tốn nhiều thời gian debug nhất trong ca dựng bot Bun — nên áp dụng ngay từ đầu cho lần dựng bot tiếp theo thay vì đi lại đường vòng.

## Liên kết
[[project-may-tinh-nodejs-soc-bot]] (bối cảnh bot Sóc), [[feedback-so-sanh-skill-trung-lap]]
