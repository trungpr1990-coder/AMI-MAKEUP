---
title: Bot Supervisor Pattern — Giữ Process Sống 24/7 trên Windows
type: concept
tags: [automation, devops, windows, powershell, process-management, reliability]
created: 2026-06-07
updated: 2026-06-07
sources: [D:\botchat-thuythuy\start-botchat.ps1]
---

## Khái Niệm

**Bot Supervisor Pattern** là kỹ thuật dùng một process cha (supervisor) để giám sát và tự restart các worker process khi chúng crash. Đây là giải pháp đơn giản thay thế PM2/systemd trên Windows khi không muốn cài thêm dependency.

## Triển Khai Trên Windows (PowerShell)

```powershell
# Mutex toàn cục: chỉ 1 supervisor chạy dù gọi nhiều lần
$mutex = New-Object System.Threading.Mutex($false, 'Global\TenMutexDoc')
$acquired = $false
try { $acquired = $mutex.WaitOne(0) }
catch [System.Threading.AbandonedMutexException] { $acquired = $true }
if (-not $acquired) { exit }

# Vòng lặp kiểm tra mỗi 15s
$procs = @{}
function Ensure-Proc($name, $script) {
  $p = $procs[$name]
  if ($null -eq $p -or $p.HasExited) {
    $procs[$name] = Start-Process -FilePath node `
      -ArgumentList $script -WorkingDirectory $dir `
      -WindowStyle Hidden -PassThru
  }
}

while ($true) {
  Ensure-Proc 'worker1' 'worker1.mjs'
  Ensure-Proc 'worker2' 'worker2.mjs'
  Start-Sleep -Seconds 15
}
```

## Vấn Đề Đã Gặp & Giải Pháp

### 1. `lark-cli event consume` thoát ngay
**Nguyên nhân:** Khi spawn từ Node.js với `stdio: 'inherit'` hoặc từ bash với `&`, stdin của child process đóng → event consume thấy EOF → exit.

**Giải pháp:** Spawn với `stdio: 'pipe'` (default trong Node.js `spawn()`). Parent process không bao giờ đóng stdin → child sống.

```js
const child = spawn(process.execPath, [LARK_RUN, 'event', 'consume', ...]);
// stdio: 'pipe' là default → stdin của child KHÔNG đóng
```

### 2. `claude` không tìm thấy trong PATH
**Nguyên nhân:** Supervisor chạy trong session PowerShell không kế thừa PATH đầy đủ của user.

**Giải pháp:** Tạo wrapper `.cmd` tự tìm phiên bản mới nhất:
```batch
@echo off
set "_DIR=%APPDATA%\Claude\claude-code"
set "_LATEST="
for /f "delims=" %%d in ('dir /b /ad /o-n "%_DIR%"') do (
  if not defined _LATEST set "_LATEST=%_DIR%\%%d\claude.exe"
)
"%_LATEST%" %*
```
Lưu tại đường dẫn trong PATH (vd. `C:\tools\nodejs\claude.cmd`).

### 3. Supervisor dừng sau reboot
**Nguyên nhân:** Supervisor chạy trong session PowerShell — session mất là supervisor chết.

**Giải pháp chưa cài:** Task Scheduler với trigger "At logon" gọi script supervisor.

## Khi Nào Dùng Pattern Này

- Cần giữ process Node.js sống 24/7 trên Windows
- Không muốn dùng PM2 (cần Node global) hoặc NSSM
- Số lượng worker ít (2-5 process)
- Chấp nhận window restart tối đa 15s

## Liên Kết

[[sources/2026-botchat-thuythuy]], [[concepts/human-in-the-loop-approval]]
