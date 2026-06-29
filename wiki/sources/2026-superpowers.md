---
title: Superpowers — Complete Software Development Methodology
type: source
tags: [engineering, skills, ai-agents, methodology, tdd, subagent, claude-code]
created: 2026-06-19
updated: 2026-06-19
sources: [superpowers-readme.md]
---

## Summary

Superpowers là một **phương pháp phát triển phần mềm hoàn chỉnh** dành cho AI coding agents, xây trên bộ composable skills. Khác với các bộ skills khác, Superpowers tự động kích hoạt từ đầu conversation — agent không jump vào code ngay mà bước ra hỏi "thực sự bạn muốn gì?", từ đó tạo spec → plan → thực thi với subagents → review.

## Key Points

- Skills **tự động trigger** — không cần gọi tay, agent tự nhận context và kích hoạt đúng skill
- Luồng cốt lõi: brainstorm → writing-plans → subagent-driven-development (agent con làm từng task) → verification → code-review → finishing
- Nhấn mạnh **TDD thực sự** (red/green), YAGNI, DRY
- `subagent-driven-development`: agent chính điều phối agent con làm từng task, review giữa các task — có thể chạy tự động hàng tiếng đồng hồ
- File nguồn: `D:\superpowers-main\skills\`
- Cài Claude Code: `/plugin install superpowers@claude-plugins-official`

## Entities Mentioned

[[entities/primeradiant]]

## Concepts

[[concepts/superpowers-methodology]]

## Notes

- Có commercial support qua sales@primeradiant.com (enterprise)
- Hỗ trợ: Claude Code, Cursor, Codex, Gemini CLI, Kimi Code, OpenCode, GitHub Copilot CLI...
