# Wiki Schema

---

## Hồ Sơ Chủ Nhân

**Tên:** Thuý Trần (sinh năm 1995)
**Nghề nghiệp:** Makeup Artist & Giảng viên đào tạo makeup
**Địa điểm:** 351 Lê Hồng Phong, TP. Nam Định

**Lĩnh vực hoạt động:**
- Đào tạo makeup cá nhân, makeup đi tiệc, makeup cô dâu
- Xây dựng hệ thống đào tạo online
- Học tập liên tục: kinh doanh, marketing, bán hàng, quản trị doanh nghiệp, phát triển bản thân, xây dựng đội nhóm

**Mục tiêu sống:**
- Cuộc sống hạnh phúc, cân bằng: gia đình — sức khỏe — công việc — tài chính
- Giàu có toàn diện theo [[concepts/bay-khoang-giau-co]]: sức khỏe, trí tuệ, quan hệ, giá trị cộng đồng
- Doanh nghiệp bền vững, tạo giá trị cho khách hàng và học viên
- Hoàn thiện bản thân mỗi ngày — trở thành phiên bản tốt hơn

**6 lĩnh vực tập trung** (xem [[concepts/sau-linh-vuc-kinh-doanh]]):
1. Marketing
2. Bán hàng
3. Vận hành
4. Tài chính
5. Phát triển bản thân
6. Sản phẩm (chuyên môn makeup)

---

## Quy Tắc File — Một Hệ Thống Duy Nhất

Tất cả đều lưu trong `wiki/<khoang>/`, phân biệt bằng prefix:

| Prefix | Loại | Ví dụ |
|--------|------|-------|
| `kb-` | Tri thức nạp vào (knowledge base) | `kb-quy-trinh-ban-hang.md` |
| `out-YYYY-MM-DD-` | Tài liệu Claude tạo ra (output) | `out-2026-06-23-kich-ban-sale.md` |

**Khi tạo tài liệu (output):**
1. Xác định khoang phù hợp → lưu vào `wiki/<khoang>/out-YYYY-MM-DD-ten.md`
2. Bán hàng / Marketing / Vận hành / Chuyên môn → `nang-luc/`
3. Tài chính → `vat-chat/`
4. Phát triển bản thân → khoang phù hợp (tâm thái / trí tuệ / phẩm chất)
5. Luôn hỏi xác nhận tên file trước khi lưu (trừ khi được yêu cầu lưu ngay)

---

## Overview

This is a persistent, compounding knowledge base. The LLM incrementally builds and maintains a wiki from raw source documents. Knowledge is compiled once and kept current — not re-derived on every query.

**Three layers:**
- `raw/` — immutable source documents. The LLM reads from these but never modifies them.
- `wiki/` — LLM-owned markdown pages. The LLM creates and maintains all content here.
- `CLAUDE.md` — this file. Defines structure, conventions, and workflows.

---

## Directory Structure

```
/
├── CLAUDE.md                  # This file
├── raw/                       # Immutable source documents
│   ├── assets/                # Downloaded images referenced by sources
│   └── <source files>         # Articles, papers, data files, etc.
└── wiki/
    ├── index.md               # Content catalog — update on every ingest
    ├── log.md                 # Append-only operations log
    ├── sources/               # One summary page per ingested source
    ├── entities/              # People, organizations, products, places
    ├── concepts/              # Ideas, frameworks, theories, methods
    ├── analyses/              # Comparisons, syntheses, query answers
    ├── tri-tue/               # [Khoang 1] Kiến thức, tư duy, hiểu biết
    ├── nhan-cach/             # [Khoang 2] Bản sắc, uy tín, dấu ấn
    ├── pham-chat/             # [Khoang 3] Đức hạnh, giá trị cốt lõi
    ├── tam-thai/              # [Khoang 4] Tinh thần, cảm xúc, thái độ
    ├── nang-luc/              # [Khoang 5] Kỹ năng, chuyên môn, thực thi
    ├── vat-chat/              # [Khoang 6] Tài sản, tài chính, nguồn lực
    └── the-chat/              # [Khoang 7] Sức khỏe, thể lực, năng lượng
```

---

## Page Frontmatter

Every wiki page (except `index.md` and `log.md`) must have YAML frontmatter:

```yaml
---
title: Human-readable title
type: source | entity | concept | analysis | khoang
khoang: tri-tue | nhan-cach | pham-chat | tam-thai | nang-luc | vat-chat | the-chat
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: []  # raw/ filenames this page draws from
---
```

---

## Naming Conventions

- File names: `kebab-case.md`
- **Source pages:** `wiki/sources/<YYYY-slug>.md`
- **Entity pages:** `wiki/entities/<name>.md`
- **Concept pages:** `wiki/concepts/<concept>.md`
- **Analysis pages:** `wiki/analyses/<descriptive-slug>.md`
- **Khoang pages:** `wiki/<khoang>/<YYYY-slug>.md` (e.g., `wiki/tri-tue/2026-tu-duy-he-thong.md`)

**7 Khoang Tri Thức** (xem [[concepts/bay-khoang-giau-co]]):

| Thư mục | Khoang | Nội dung lưu |
|---------|--------|-------------|
| `tri-tue/` | Trí Tuệ | Kiến thức, framework tư duy, bài học, insight |
| `nhan-cach/` | Nhân Cách | Bản sắc, uy tín, cách tạo dấu ấn, nguyên tắc sống |
| `pham-chat/` | Phẩm Chất | Đức hạnh, kỷ luật, giá trị cốt lõi, đạo đức |
| `tam-thai/` | Tâm Thái | Quản lý cảm xúc, tư duy tích cực, bình an nội tâm |
| `nang-luc/` | Năng Lực | Kỹ năng thực thi, chuyên môn, phương pháp làm việc |
| `vat-chat/` | Vật Chất | Tài chính, đầu tư, tài sản, quản lý tiền |
| `the-chat/` | Thể Chất | Sức khỏe, thể dục, dinh dưỡng, năng lượng cơ thể |

---

## Cross-Linking

Use `[[path/slug]]` (Obsidian wiki-link style) for all internal links.

- When mentioning an entity or concept that has its own page, always link it.
- When creating a new page, link all entities and concepts that have existing pages.
- Before creating a new page, check `wiki/index.md` to avoid duplicates.
- Orphan pages (no inbound links) are a lint target — avoid them.

---

## Workflows

### Ingest

When the user provides knowledge (file, text, article, note) to ingest:

1. Đọc toàn bộ nội dung nguồn.
2. **Phân tích 7 khoang** — xác định mỗi đoạn tri thức thuộc khoang nào:
   - Mỗi insight/bài học → gắn nhãn `[Trí Tuệ]`, `[Nhân Cách]`, `[Phẩm Chất]`, `[Tâm Thái]`, `[Năng Lực]`, `[Vật Chất]`, hoặc `[Thể Chất]`
   - Một nội dung có thể thuộc nhiều khoang
3. Tạo `wiki/sources/<slug>.md` — tóm tắt tổng quan nguồn.
4. Tạo các **Khoang pages** cho từng khoang có nội dung:
   - `wiki/<khoang>/<YYYY-slug>.md` — chỉ chứa tri thức thuộc khoang đó
   - Nếu khoang page đã tồn tại cho chủ đề này → cập nhật thêm vào
5. Identify named entities → tạo/cập nhật `wiki/entities/<name>.md`
6. Identify key concepts → tạo/cập nhật `wiki/concepts/<concept>.md`
7. Kiểm tra mâu thuẫn với nội dung wiki hiện có. Đánh dấu bằng `> **Mâu thuẫn:** ...`
8. Update `wiki/index.md` — thêm source page và các khoang page mới.
9. Append to `wiki/log.md`:

```
## [YYYY-MM-DD] ingest | <Source Title>
- File: `raw/<filename>` (hoặc "text input" nếu nhập trực tiếp)
- Summary: [[sources/slug]]
- Khoang pages: [[tri-tue/slug]], [[nang-luc/slug]], ...
- Pages updated: [[entities/foo]], [[concepts/bar]]
- New pages: [[entities/baz]]
- Mâu thuẫn: <none | mô tả ngắn>
```

**Source Page Format:**

```markdown
---
title: <Title>
type: source
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
sources: [<filename>]
---

## Summary
2–4 sentence overview of the source.

## Key Points
- Bullet list of the most important claims, findings, or arguments.

## Entities Mentioned
[[entities/foo]], [[entities/bar]]

## Concepts
[[concepts/baz]]

## Notes
Anything worth flagging: methodology concerns, date/context, contradictions with other sources.
```

---

### Query

When the user asks a question:

1. Read `wiki/index.md` to identify relevant pages.
2. Read those pages. If needed, read referenced source pages in `wiki/sources/` for deeper detail.
3. Synthesize an answer. Cite pages with `[[path/slug]]`.
4. If the answer is a substantial analysis, comparison, or synthesis — offer to save it as `wiki/analyses/<slug>.md`.
5. If saved: update `wiki/index.md` and append to `wiki/log.md`:

```
## [YYYY-MM-DD] query | <Question or analysis title>
- Saved as: [[analyses/slug]]
- Sources drawn from: [[sources/a]], [[sources/b]]
```

---

### Lint

When the user asks to health-check the wiki:

1. **Contradictions** — find claims across pages that conflict.
2. **Orphan pages** — pages with no inbound links from other wiki pages.
3. **Missing pages** — entities or concepts mentioned on multiple pages but lacking their own page.
4. **Stale claims** — content superseded by newer ingested sources.
5. **Index gaps** — pages in `wiki/` not listed in `wiki/index.md`.
6. **Weak cross-linking** — pages that should link to each other but don't.
7. **Data gaps** — topics where coverage is thin; suggest sources to look for.

Report findings as a numbered list. Ask the user which issues to fix before making changes.

After a lint pass, append to `wiki/log.md`:

```
## [YYYY-MM-DD] lint | Health check
- Issues found: N
- Issues fixed: M
- Notes: <summary>
```

---

## Index Format

`wiki/index.md` is organized by category. Each entry is one line:

```
- [[sources/slug]] — One-line summary (added YYYY-MM-DD)
```

Keep entries concise. The LLM reads the full index on every query to find relevant pages — don't let it grow unwieldy. If the index exceeds ~200 entries per category, consider grouping by subtopic.

---

## Log Format

`wiki/log.md` is append-only. Never edit or delete existing entries. Each entry header must start with `## [YYYY-MM-DD]` so it's grep-parseable:

```bash
grep "^## \[" wiki/log.md | tail -10   # last 10 operations
grep "ingest" wiki/log.md               # all ingests
```

---

## Customization Notes

This schema is a starting point. As the wiki grows, evolve this file to match your domain and workflow:

- Add domain-specific page types (e.g., `experiments/`, `people/`, `products/`)
- Refine the frontmatter schema with domain-relevant fields
- Document recurring ingest patterns (e.g., how to handle PDFs vs. web clips vs. data files)
- Add conventions for tagging (e.g., standard tag vocabulary)
- Note which sources are authoritative vs. secondary

Changes to the schema take effect on the next session. Append a note to `log.md` when the schema changes significantly.
