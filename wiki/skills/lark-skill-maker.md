---
title: lark-skill-maker — Custom Skill Creator
type: skill
tags: [lark, skill, custom, create, framework]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Framework tạo custom Lark skill mới. Skill = một file `SKILL.md` dạy AI dùng CLI commands để thực hiện task.

## Template SKILL.md

```markdown
---
name: lark-<tên>
version: 1.0.0
description: "<mô tả>. Khi user cần <trigger> thì dùng."
metadata:
  requires:
    bins: ["lark-cli"]
---

# <Tiêu đề>

> **Trước tiên:** Đọc [../lark-shared/SKILL.md](../lark-shared/SKILL.md)

## Lệnh

\```bash
# Single step
lark-cli api POST /open-apis/xxx --data '{...}'

# Multi-step: ghi rõ dữ liệu truyền giữa các bước
# Step 1: ... (lưu xxx_id)
# Step 2: Dùng xxx_id từ Step 1
\```

## Permissions

| Thao tác | Scope |
|----------|-------|
| xxx | `scope:name` |
```

## Cách nghiên cứu API

```bash
# 1. Xem CLI đã có gì
lark-cli <service> --help

# 2. Xem params
lark-cli schema <service.resource.method>

# 3. Gọi thẳng API chưa wrap
lark-cli api GET /open-apis/...
```

Nếu CLI không đáp ứng → dùng [[skills/lark-openapi-explorer]] tìm API trong docs.

## Nguyên tắc viết SKILL.md hay
- `description` phải chứa **từ khóa trigger** và "Khi user cần X thì dùng"
- Luôn reference `lark-shared` cho auth/security
- Ghi rõ `--dry-run` cho write operations
- Giải thích data flow giữa các bước trong multi-step workflow

## Vị trí file
```
.agents/skills/lark-<tên>/SKILL.md
```

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-openapi-explorer]] | [[sources/2026-larksuite-cli]]
