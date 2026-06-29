---
title: Skills For Real Engineers — Matt Pocock
type: source
tags: [engineering, skills, ai-agents, claude-code, tdd, architecture]
created: 2026-06-19
updated: 2026-06-19
sources: [mattpocock-skills-readme.md]
---

## Summary

Bộ skills engineering của Matt Pocock — TypeScript expert và educator nổi tiếng. Thiết kế để giải quyết 4 failure mode phổ biến khi dùng AI coding agent: misalignment, agent quá verbose, code không chạy, và codebase thành "ball of mud". Nhấn mạnh software engineering fundamentals: TDD, domain modeling, module design sâu.

## Key Points

- Triết lý: nhỏ, dễ adapt, composable — không chiếm quyền kiểm soát như GSD/BMAD/Spec-Kit
- `grill-with-docs` là skill mạnh nhất: vừa align yêu cầu, vừa xây shared language (CONTEXT.md + ADRs)
- Phân biệt User-invoked (chỉ người gọi) vs Model-invoked (AI tự kích hoạt khi phù hợp)
- Cài: `npx skills@latest add mattpocock/skills` → chọn skill → chạy `/setup-matt-pocock-skills`
- File nguồn: `D:\BỘ NÃO THỨ 2\wiki\skills\skills-main\skills\`

## Entities Mentioned

[[entities/matt-pocock]]

## Concepts

[[concepts/mattpocock-engineering-skills]]

## Notes

- `CONTEXT.md` là pattern hay: file shared language giúp agent dùng jargon đúng của project
- Skills trong `personal/`, `in-progress/`, `deprecated/` không được promote — không cần ingest
