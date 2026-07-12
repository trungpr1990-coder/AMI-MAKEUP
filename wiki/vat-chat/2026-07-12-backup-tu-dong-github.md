---
title: Hệ thống backup tự động vault lên GitHub
type: khoang
khoang: vat-chat
tags: [infrastructure, backup, automation, github, scheduled-task]
created: 2026-07-12
updated: 2026-07-12
sources: []
---

# Hệ thống backup tự động vault lên GitHub

Bảo vệ toàn bộ vault `D:\BỘ NÃO THỨ 2` (wiki, raw, skills, code) khỏi mất dữ liệu bằng cách tự động đẩy lên GitHub định kỳ.

## Thành phần

- **Script**: `scripts/github-auto-backup.ps1` — tự `git add -A` → `commit` → `pull --rebase --autostash` → `push`. Không hardcode đường dẫn có dấu tiếng Việt (dùng `$PSScriptRoot`), không dùng `2>&1` khi gọi git trong PowerShell 5.1 (biến cảnh báo stderr thành lỗi giả).
- **Log**: `logs/github-auto-backup.log` (thư mục `logs/` đã thêm vào `.gitignore`).
- **Repo đích**: remote `origin` — `github.com/trungpr1990-coder/AMI-MAKEUP`.
- **Scheduled Task Windows**: tên **"SecondBrain GitHub Backup"**, LogonType Interactive (chạy khi user đăng nhập desktop), lặp mỗi 2 giờ, không giới hạn ngày kết thúc.
- `.gitignore` gốc đã chặn `.env`, `*.token`, `*.json` (trừ CLAUDE.md), `.secrets/` — đã xác minh không secret nào bị track trước khi bật.

## Trạng thái test

Đã test thủ công 2 lần: 1 lần có thay đổi thật (push commit `4de59c5` thành công), 1 lần cây sạch (log đúng "No changes, skipped."). **Chưa xác minh 100%** việc tự kích hoạt đúng lịch 2h/lần khi chạy nền thật — cần kiểm tra 1 lần trên máy thật (Task Scheduler → chuột phải task → Run, hoặc đợi tới giờ xem log).

## Cách kiểm tra/quản lý

- Xem log: `Get-Content "D:\BỘ NÃO THỨ 2\logs\github-auto-backup.log" -Tail 10`
- Chạy thử ngay: Task Scheduler → "SecondBrain GitHub Backup" → chuột phải → Run
- Tắt: `Disable-ScheduledTask -TaskName "SecondBrain GitHub Backup"`
- Bật lại: `Enable-ScheduledTask -TaskName "SecondBrain GitHub Backup"`

## Liên kết

- [[vat-chat/2026-06-24-ha-tang-cloudflare-lark-domain]] — Hạ tầng khác của hệ thống
