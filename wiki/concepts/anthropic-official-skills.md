---
title: Anthropic Official Skills (17 Skills)
type: concept
tags: [anthropic, skills, ai-agents, claude-code, official, tool]
created: 2026-06-19
updated: 2026-06-19
sources: [anthropic-skills-readme.md]
---

## Tổng quan

17 skills chính thức của [[entities/anthropic]] cho Claude. Bao gồm creative, technical, enterprise và document skills. Một số đang chạy production trong Claude.ai.

**Vị trí file:** `D:\skills-main\skills\<skill-name>\SKILL.md`

---

## Danh sách 17 Skills

### Document Skills (production trong Claude.ai)
| Skill | Dùng khi |
|-------|----------|
| `docx` | Làm việc với file Word (.docx): tạo, đọc, chỉnh sửa |
| `pdf` | Mọi thao tác với PDF: đọc, tách, gộp, form, watermark, OCR, mã hóa |
| `pptx` | Tạo và chỉnh sửa PowerPoint (.pptx) |
| `xlsx` | Tạo và chỉnh sửa Excel (.xlsx) |

> Bốn skills này là source-available (không phải open source), đang chạy thực tế trong Claude.ai.

### Creative & Design
| Skill | Dùng khi |
|-------|----------|
| `algorithmic-art` | Tạo generative art bằng p5.js: flow fields, particle systems, seeded randomness |
| `canvas-design` | Tạo poster, artwork, thiết kế tĩnh dưới dạng .png/.pdf |
| `frontend-design` | Hướng dẫn visual design có chủ đích khi xây UI — typography, aesthetic direction |
| `theme-factory` | Áp dụng theme (10 preset + custom) cho slides, docs, landing page, HTML artifacts |
| `slack-gif-creator` | Tạo animated GIF tối ưu cho Slack |

### Technical & Development
| Skill | Dùng khi |
|-------|----------|
| `claude-api` | Làm việc với Claude/Anthropic API: model IDs, pricing, params, streaming, tool use |
| `mcp-builder` | Xây MCP server chất lượng cao bằng Python (FastMCP) hoặc TypeScript (MCP SDK) |
| `webapp-testing` | Test web app local bằng Playwright: UI, screenshots, browser logs |
| `web-artifacts-builder` | Tạo HTML artifacts phức tạp nhiều component (React + Tailwind + shadcn/ui) |

### Enterprise & Communication
| Skill | Dùng khi |
|-------|----------|
| `brand-guidelines` | Áp dụng brand colors/typography Anthropic cho artifacts |
| `internal-comms` | Viết internal comms: status report, newsletter, incident report, FAQ, project update |
| `doc-coauthoring` | Workflow đồng tác giả tài liệu: proposals, specs, decision docs |
| `skill-creator` | Tạo skill mới, cải thiện skill cũ, chạy evals, benchmark performance |

---

## Cách cài đặt

### Qua Claude Code Plugin
```
/plugin marketplace add anthropics/skills
/plugin install document-skills@anthropic-agent-skills
/plugin install example-skills@anthropic-agent-skills
```

### Dùng trực tiếp từ file local
Đọc file SKILL.md tương ứng trước khi thực hiện task:
```
D:\skills-main\skills\<skill-name>\SKILL.md
```

---

## Tài nguyên đi kèm

- **Spec:** `D:\skills-main\spec\` — Tiêu chuẩn Agent Skills specification
- **Template:** `D:\skills-main\template\` — Template tạo custom skill

### Cấu trúc skill tối thiểu
```markdown
---
name: my-skill-name
description: Mô tả đầy đủ khi nào dùng skill này
---
# Nội dung hướng dẫn...
```

---

## So sánh với skills khác trong wiki

| Bộ skill | Số lượng | Chuyên về | Nguồn |
|----------|----------|-----------|-------|
| Anthropic Official | 17 | Creative, Technical, Docs, Enterprise | [[sources/2026-anthropic-official-skills]] |
| Marketing Skills | 46 | Marketing toàn diện | [[sources/2026-marketing-skills-ai-agents]] |
| UI UX Pro Max | 1 (lớn) | Design intelligence, 67 styles | [[sources/2026-ui-ux-pro-max]] |
| Lark CLI | 26 | Feishu/Lark ecosystem | [[concepts/lark-skill]] |

## Nguồn

[[sources/2026-anthropic-official-skills]] | [[entities/anthropic]]
