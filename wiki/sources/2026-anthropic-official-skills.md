---
title: Anthropic Official Skills Repository
type: source
tags: [anthropic, skills, ai-agents, claude-code, official]
created: 2026-06-19
updated: 2026-06-19
sources: [anthropic-skills-readme.md]
---

## Summary

Bộ skills chính thức của Anthropic dành cho Claude — 17 skills trải dài từ creative (art, design) đến technical (MCP builder, webapp testing, API) đến enterprise (internal comms, brand guidelines, document skills). Đây là nguồn tham chiếu chính thức, một số skills đang chạy trong sản xuất tại Claude.ai (docx, pdf, pptx, xlsx).

## Key Points

- Skills chính thức của Anthropic, mã nguồn mở Apache 2.0 (trừ docx/pdf/pptx/xlsx là source-available)
- docx, pdf, pptx, xlsx là skills đang chạy thực tế bên trong Claude.ai (production)
- Cài qua Claude Code: `/plugin marketplace add anthropics/skills` → `/plugin install document-skills@anthropic-agent-skills`
- File nguồn: `D:\skills-main\skills\<skill-name>\SKILL.md`

## Entities Mentioned

[[entities/anthropic]]

## Concepts

[[concepts/anthropic-official-skills]]

## Notes

- Bộ skills này là reference chính thức — dùng làm mẫu khi tạo custom skill
- Spec tiêu chuẩn Agent Skills nằm ở `D:\skills-main\spec\`
- Template tạo skill mới: `D:\skills-main\template\`
