---
title: lark-whiteboard — Whiteboard / Diagrams
type: skill
tags: [lark, whiteboard, diagram, svg, mermaid, plantuml]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Xem và chỉnh sửa whiteboard trong Lark Doc. Hỗ trợ export ảnh, Mermaid, PlantUML, DSL.

## Shortcuts

| Shortcut | Mô tả |
|----------|-------|
| `+query` | Xem whiteboard (export ảnh/code/raw JSON) |
| `+update` | Cập nhật whiteboard (Mermaid/PlantUML/DSL raw) |

## Quick Decision

| Mục tiêu | Lệnh |
|----------|-------|
| Xem nội dung / export ảnh | `+query --output_as image` |
| Lấy Mermaid/PlantUML code | `+query --output_as code` |
| Sửa text/màu đơn giản | `+query --output_as raw` → sửa JSON → `+update --input_format raw` |
| Vẽ diagram bằng Mermaid | `+update --input_format mermaid` |
| Vẽ diagram bằng PlantUML | `+update --input_format plantuml` |

## Routing theo loại diagram

| Loại | AI | Dùng |
|------|----|------|
| Mindmap, flowchart, sequence, class, pie, gantt | Bất kỳ | Mermaid |
| Khác | Claude/GPT/Gemini/GLM | SVG |
| Khác | Doubao/Seed/Other | DSL |

## Ghi whiteboard
```bash
npx -y @larksuite/whiteboard-cli@^0.2.11 -i <file> --to openapi --format json \
  | lark-cli whiteboard +update \
    --whiteboard-token <token> \
    --source - --input_format raw \
    --idempotent-token <unique-10+chars> \
    --as user --overwrite
```

`--overwrite` = thay toàn bộ nội dung. Không có `--overwrite` = thêm vào (có thể chồng lên nhau).

## Lấy board_token
- Đã có token `wbcnXXX` → dùng trực tiếp
- Từ doc URL → `lark-cli docs +fetch --api-version v2 --doc <URL>` → tìm `<whiteboard token="xxx"/>`
- Tạo mới → `+update --command append --content '<whiteboard type="blank"></whiteboard>'`

## Permissions

| Thao tác | Scope |
|----------|-------|
| Đọc | `board:whiteboard:node:read` |
| Ghi | `board:whiteboard:node:create` |

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-doc]] | [[sources/2026-larksuite-cli]]
