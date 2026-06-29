---
title: Web Designer Plugin — 48 Award-Winning Design Patterns
type: concept
tags: [web-design, frontend, css, animation, design-patterns, skill, claude-code]
created: 2026-06-19
updated: 2026-06-19
sources: [web-designer-plugin-readme.md]
---

## Tổng quan

Plugin của [[entities/mickeyalton33]] biến Claude thành web designer đẳng cấp. Không auto-trigger — gọi on-demand khi cần output chất lượng Awwwards.

**Vị trí file:** `D:\web-designer-plugin-main\skills\web-designer\`

**Tiêu chuẩn:** *"Would this get featured on Awwwards?"*

---

## Nội dung Plugin (5 files)

| File | Nội dung |
|------|----------|
| `SKILL.md` | Core design philosophy, decision framework, anti-pattern checklist |
| `design-patterns.md` | 48 patterns — layout, cards, navigation, text effects, 3D, advanced |
| `color-and-typography.md` | 5 palette archetypes, 5 font pairing formulas, fluid type system |
| `animation-playbook.md` | Motion design vocabulary — entrances, hovers, scroll-linked, transitions |
| `anti-patterns.md` | 10 "AI Look" traps và cách phá vỡ từng cái |

---

## 48 Design Patterns (chọn lọc)

### Layout & Structure
- Giant compressed hero text (DONUTS)
- Two-tone split headings (Superlist)
- Sticky-scroll cinematic scenes (The Goonies)
- Staggered menu cascades (207ouest)
- Horizontal drag scroll

### Cards & Components
- 3D card tilt following cursor (SVZ Design)
- Physical 3D buttons with depth (Pierre-Louis Labonne)
- Frosted glass navigation (Michael Kors, Ready.so)
- Perspective app screenshots (Daylight Computer)

### Text & Typography
- Outlined/stroked typography (VOUS Church, Chiara Luzzana)
- Kinetic typography / text scramble cipher effect
- Wide-gamut P3 accent colors (Superlist)

### Effects & Animations
- Clip-path image reveals (SVZ Design)
- Torn paper SVG dividers (De La Calle)
- Cursor trail với mix-blend-mode inversion
- Spinning starburst, blinking LEDs, CRT scanlines
- Ambient radial glow effects (Superlist)
- Infinite logo tickers with fade masks (Superlist)

### Advanced / 3D
- CRT phosphor glow + scanline overlay (retro terminal)
- Rotating knob, screen content swap với glitch transition
- Paper collage: sticky notes, polaroid, torn edges, tape strips

---

## 5 Palette Archetypes

| # | Tên | Ví dụ sites |
|---|-----|-------------|
| 1 | Monochrome + Single Accent | SVZ, April Ford, Chiara Luzzana |
| 2 | Warm Neutrals | VOUS Church, Hardgraft, Everlane |
| 3 | Bold Brand | De La Calle, Magic Spoon, Couplet Coffee |
| 4 | Dark Luxury | SVZ, Chiara Luzzana, The Goonies |
| 5 | Sophisticated Minimal | Ready.so, Slite, Calm |

---

## Decision Framework (khi kích hoạt)

1. **MOOD** — Emotional register: calm / energetic / luxurious / playful / authoritative
2. Chọn palette archetype phù hợp mood
3. Chọn font pairing formula
4. Chọn layout pattern từ 48 patterns
5. Chọn animation vocabulary
6. Kiểm tra anti-pattern checklist

---

## 10 "AI Look" Anti-patterns Cần Tránh

- Blue-purple gradients mặc định
- Inter font trên mọi thứ
- `border-radius: 12px` đồng đều
- Card grid đồng nhất
- Centered layout lười biếng
- Generic box shadows
- Gradient buttons màu tím
- Hero section "floating dashboard mockup"
- Sections đều nhau không có nhịp điệu
- Color palette nhạt nhẽo

---

## Cách dùng

```
Use the web-designer skill to build a landing page for a meditation app
/web-designer -- Create a portfolio site for a photographer
Use web-designer to redesign this component with award-winning quality
```

## Cài đặt

```bash
/plugin marketplace add MickeyAlton33/web-designer-plugin
/plugin install web-designer
```

---

## So sánh với UI UX Pro Max

| | Web Designer Plugin | UI UX Pro Max |
|---|---|---|
| Nguồn cảm hứng | 38 site đoạt giải thực tế | Hệ thống rules tổng hợp |
| Cách tiếp cận | Patterns cụ thể từ site thật | Design system theo ngành tự động |
| Trigger | On-demand | On-demand |
| Mạnh về | CSS effects, animation, typography độc đáo | Chọn style/màu/font đúng ngành |
| Dùng khi | Muốn output "wow" thực sự | Muốn design system chuẩn chỉnh theo ngành |

## Nguồn

[[sources/2026-web-designer-plugin]] | [[entities/mickeyalton33]]
