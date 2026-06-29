---
title: UI UX Pro Max v2.0 — AI Design Intelligence Skill
type: source
tags: [ui, ux, design, ai-agents, skill, claude-code, frontend]
created: 2026-06-19
updated: 2026-06-19
sources: [ui-ux-pro-max-readme.md]
---

## Summary

UI UX Pro Max là AI skill cung cấp "design intelligence" — khả năng tự động tạo design system hoàn chỉnh cho bất kỳ loại sản phẩm nào. Tích hợp 161 reasoning rules theo ngành, 67 UI styles, 57 font pairings, 161 color palettes và 99 UX guidelines. Hỗ trợ 15 tech stack từ React, Next.js đến Flutter, SwiftUI.

Tính năng flagship v2.0: **Design System Generator** — phân tích yêu cầu, chọn pattern/style/màu/font phù hợp ngành, kèm checklist pre-delivery và anti-patterns cần tránh.

## Key Points

- Khi user request UI/UX task → skill tự động chạy reasoning engine 5 searches song song: product type, style, color, landing page pattern, typography
- Output là design system đầy đủ: Pattern + Style + Colors + Typography + Effects + Anti-patterns + Pre-delivery checklist
- 161 rules theo ngành: Tech/SaaS, Finance, Healthcare, E-commerce, Services, Creative, Lifestyle, Emerging Tech
- Hỗ trợ `--persist` để lưu design system vào `design-system/MASTER.md` + override theo từng trang
- File nguồn: `D:\ui-ux-pro-max-skill-main\`

## Entities Mentioned

[[entities/nextlevelbuilder]]

## Concepts

[[concepts/ui-ux-pro-max-skill]]

## Notes

- Yêu cầu Python 3.x để chạy `scripts/search.py`
- Cài toàn cục: `uipro init --ai claude --global` → vào `~/.claude/skills/`
- Skill đã chuyển về `D:\ui-ux-pro-max-skill-main\`, chưa cài global
