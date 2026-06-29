---
title: Marketing Skills for AI Agents — Corey Haines
type: source
tags: [marketing, ai-agents, skills, copywriting, seo, cro]
created: 2026-06-19
updated: 2026-06-19
sources: [marketingskills-readme.md]
---

## Summary

Bộ sưu tập 46 AI agent skills tập trung vào marketing, xây dựng bởi [[entities/corey-haines]]. Mỗi skill là một file SKILL.md chứa hướng dẫn chuyên biệt cho từng task marketing (copywriting, SEO, CRO, ads, email...). Được thiết kế cho Claude Code, Cursor, Windsurf và các agent hỗ trợ Agent Skills spec.

Skill `product-marketing` là nền tảng — tất cả skill khác đều đọc file `.agents/product-marketing.md` trước khi thực hiện task, tránh lặp lại thông tin sản phẩm/audience/positioning.

## Key Points

- 46 skills phủ toàn bộ vòng đời marketing: từ nghiên cứu (customer-research, competitor-profiling) → nội dung (copywriting, emails, social) → tối ưu (cro, ab-testing) → tăng trưởng (referrals, launch, pricing)
- Các skill tham chiếu lẫn nhau (cross-reference): `copywriting ↔ cro ↔ ab-testing`, `revops ↔ sales-enablement ↔ cold-email`
- Cài đặt qua `npx skills add coreyhaines31/marketingskills` hoặc plugin Claude Code
- File nguồn nằm ở `D:\marketingskills-main\skills\<skill-name>\SKILL.md`

## Entities Mentioned

[[entities/corey-haines]]

## Concepts

[[concepts/marketing-skills-ai-agents]]

## Notes

- Skills được cài sẵn trên Desktop tại `C:\Users\Admin\Desktop\marketingskills-main\`
- Để dùng một skill: đọc file SKILL.md tương ứng trước khi thực hiện task
- `product-marketing` phải được thiết lập đầu tiên trước khi dùng các skill khác
