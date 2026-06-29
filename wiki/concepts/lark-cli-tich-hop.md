---
title: lark-cli + tích hợp Claude—Lark — Cây cầu giữa 2 nền tảng
type: concept
tags: [integration, lark-cli, automation, api, cli-tool]
created: 2026-06-24
updated: 2026-06-24
sources: [2026-06-20-giao-trinh-nha-may-pheu.md]
---

# lark-cli — Cây cầu giữa Claude Code và Lark

**lark-cli** là công cụ dòng lệnh cho phép Claude (chạy trên máy tính) **điều khiển Lark Base** (tạo bảng, ghi/đọc dữ liệu) bằng API.

## Hoạt động

1. **Đăng nhập 1 lần**: `lark-cli auth login` → mở link, nhập mã → cấp quyền
2. **Lần sau**: Claude gọi lệnh `lark-cli base record create ...` → tự động dùng danh nghĩa bạn (không cần đăng nhập lại)

## Lệnh chính

```bash
# Tạo Base mới
lark-cli base +base-create --as user --name "Leads 2026"

# Tạo bảng (table) trong Base
lark-cli base table create <base_id> --name "Leads" --fields "Họ tên|Email|SĐT"

# Ghi record vào bảng
lark-cli base record create <base_id> <table_id> --fields "Họ tên=Thuý|Email=thuý@..."

# Đọc records
lark-cli base record list <base_id> <table_id> --limit 10
```

## Tại sao cần lark-cli

- **Trực tiếp API**: Lark API phức tạp, lark-cli làm đơn giản hóa
- **Device Flow Auth**: đăng nhập 1 lần → lần sau tự động (an toàn)
- **Quản lý quyền**: Claude tự động dùng danh nghĩa + quyền của bạn
- **Không cần API token trong code**: credential lưu trong `~/.lark-cli/`, không bỏng vào code

## Giới hạn

- **Tốc độ**: API call có rate limit (~10 calls/second)
- **Lưu ý Windows**: chuỗi nhiều dòng cần escape `\r\n` đúng
- **Công khai**: chỉ là wrapper CLI, không thay thế API call khi cần tốc độ cao

---

## Liên kết

- [[concepts/nha-may-pheu]] — Hệ thống sử dụng lark-cli
- [[tri-tue/2026-06-24-kien-truc-nam-may-pheu]] — Kiến trúc 4 mảnh

