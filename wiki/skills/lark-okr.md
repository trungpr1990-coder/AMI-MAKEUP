---
title: lark-okr — OKR Management
type: skill
tags: [lark, okr, objective, key-result, goal]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Quản lý Objective & Key Result: xem OKR, tạo mục tiêu, cập nhật tiến độ, alignment.

## Shortcuts

| Shortcut | Mô tả |
|----------|-------|
| `+cycle-list` | Xem danh sách OKR cycles của user |
| `+cycle-detail` | Xem tất cả objectives + key results trong 1 cycle |
| `+progress-list` | Xem danh sách progress records của O hoặc KR |
| `+progress-get` | Lấy 1 progress record theo ID |
| `+progress-create` | Tạo progress record cho O hoặc KR |
| `+progress-update` | Cập nhật progress record |
| `+progress-delete` | Xoá progress record (không khôi phục được) |
| `+upload-image` | Upload ảnh dùng trong progress record (rich text) |

## API Resources

```bash
lark-cli schema okr.<resource>.<method>   # Xem params trước khi gọi
```

### Cấu trúc
- **Cycle** → **Objective** → **Key Result** → **Indicator** (chỉ số lượng hóa)
- **Alignment**: liên kết giữa các Objective (cùng chu kỳ hoặc chồng lấp)

### Lưu ý cập nhật
- `cycles.objectives_position` — phải truyền **tất cả** objectives cùng lúc, không được bỏ sót, không được overlap vị trí
- `cycles.objectives_weight` — tổng weight của tất cả objectives phải = 1
- Tương tự cho `objectives.key_results_position` và `objectives.key_results_weight`

## Permissions

| Thao tác | Scope |
|----------|-------|
| Đọc OKR | `okr:okr.content:readonly` |
| Ghi OKR | `okr:okr.content:writeonly` |
| Đọc cycles | `okr:okr.period:readonly` |
| Cài đặt | `okr:okr.setting:read` |

## Xem thêm
[[skills/lark-shared]] | [[sources/2026-larksuite-cli]]
