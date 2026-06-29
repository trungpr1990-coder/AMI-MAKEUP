---
title: lark-workflow-meeting-summary — Meeting Summary Report
type: skill
tags: [lark, workflow, meeting, summary, report, vc]
created: 2026-06-03
updated: 2026-06-03
sources: [https://github.com/larksuite/cli]
---

## Mô tả
Workflow tổng hợp biên bản cuộc họp trong khoảng thời gian, tạo báo cáo có cấu trúc.

## Trigger
- "Tổng hợp biên bản tuần này"
- "Báo cáo các cuộc họp tuần qua"
- "Hôm nay đã họp gì"
- "Quay lại xem các cuộc họp tháng này"

## Luồng

```
{time range} ─► vc +search ──► meeting_ids
                    │
                    ▼
               vc +notes ──► note_doc_token, verbatim_doc_token
                    │
                    ▼
               drive metas batch_query ──► URLs của docs
                    │
                    ▼
               Báo cáo có cấu trúc
```

## Commands

```bash
# 1. Tìm cuộc họp đã kết thúc
lark-cli vc +search \
  --start "2026-05-26" --end "2026-06-01" \
  --format json --page-size 30

# 2. Lấy biên bản (tối đa 50 meetings/lần)
lark-cli vc +notes --meeting-ids "id1,id2,...,id50"

# 3. Lấy URLs docs
lark-cli drive metas batch_query \
  --data '{"request_docs":[{"doc_type":"docx","doc_token":"<token>"}],"with_url":true}'
```

## Format output

**Ngày đơn**: "Hội họp hôm nay" → tiêu đề "Tổng quan cuộc họp hôm nay"
**Nhiều ngày / tuần**: tiêu đề "Báo cáo cuộc họp tuần [N]"

Mỗi cuộc họp:
- Tiêu đề + thời gian
- Link biên bản / transcript
- "Không có biên bản" nếu vc +notes trả về không có

## Time range rules
- Mặc định = 7 ngày qua
- Tìm kiếm tối đa 1 tháng/lần → cần range dài hơn thì chia nhỏ
- `--end` là ngày **bao gồm** ngày đó

## Auth (một lần)
```bash
lark-cli auth login --domain vc       # Tìm + lấy biên bản
lark-cli auth login --domain vc,drive  # Thêm: đọc nội dung doc
```

## Xem thêm
[[skills/lark-shared]] | [[skills/lark-vc]] | [[skills/lark-doc]] | [[sources/2026-larksuite-cli]]
