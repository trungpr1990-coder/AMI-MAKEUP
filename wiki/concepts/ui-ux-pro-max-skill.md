---
title: UI UX Pro Max — AI Design Intelligence Skill
type: concept
tags: [ui, ux, design, skill, ai-agents, claude-code, tool]
created: 2026-06-19
updated: 2026-06-19
sources: [ui-ux-pro-max-readme.md]
---

## Tổng quan

Skill AI cung cấp khả năng design intelligence — tự động tạo design system phù hợp từng ngành nghề. Khi user yêu cầu bất kỳ task UI/UX nào, skill chạy reasoning engine chọn đúng style, màu, font, layout pattern và đưa ra checklist pre-delivery.

**Vị trí file:** `D:\ui-ux-pro-max-skill-main\`

---

## Cách hoạt động

```
User request → 5 searches song song → Reasoning Engine → Design System output
```

1. **User hỏi** — "Build a landing page for my beauty spa"
2. **5 searches song song:** product type (161 categories), style (67), color palette (161), landing page pattern (24), typography (57)
3. **Reasoning engine** khớp rules → lọc anti-patterns → rank ưu tiên
4. **Output:** Pattern + Style + Colors + Typography + Effects + Anti-patterns + Pre-delivery checklist

---

## Kho dữ liệu

| Loại | Số lượng | Mô tả |
|------|----------|-------|
| UI Styles | 67 | Glassmorphism, Claymorphism, Brutalism, Neumorphism, Bento Grid... |
| Color Palettes | 161 | 1:1 với 161 loại sản phẩm |
| Font Pairings | 57 | Google Fonts curated |
| Reasoning Rules | 161 | Theo ngành: Tech, Finance, Healthcare, E-commerce... |
| UX Guidelines | 99 | Best practices, anti-patterns, accessibility |
| Chart Types | 25 | Cho dashboard và analytics |
| Tech Stacks | 15 | React, Next.js, Vue, Flutter, SwiftUI... |
| Landing Page Patterns | 24 | Hero-Centric, Conversion-Optimized, Social Proof... |

---

## 67 UI Styles (nhóm chính)

### General (49 styles)
Glassmorphism, Neumorphism, Claymorphism, Brutalism, Neubrutalism, Minimalism, Dark Mode (OLED), Aurora UI, Soft UI Evolution, Bento Box Grid, AI-Native UI, Retro-Futurism, Cyberpunk UI, Y2K Aesthetic, Vaporwave, Liquid Glass, Organic Biophilic, Spatial UI (VisionOS), Pixel Art, E-Ink/Paper, Kinetic Typography, Parallax Storytelling, Swiss Modernism 2.0, HUD/Sci-Fi FUI, Motion-Driven, Micro-interactions, Zero Interface, Inclusive Design, 3D & Hyperrealism, Vibrant & Block-based, Flat Design, Skeuomorphism, Memphis Design, Dimensional Layering, Exaggerated Minimalism, Interactive Cursor, Voice-First, 3D Product Preview, Gradient Mesh/Aurora Evolved, Editorial Grid, Chromatic Aberration, Vintage Analog, Gen Z Chaos/Maximalism, Biomimetic/Organic 2.0, Anti-Polish/Raw, Tactile Digital, Nature Distilled, Accessible & Ethical

### Landing Page (8 styles)
Hero-Centric, Conversion-Optimized, Feature-Rich Showcase, Minimal & Direct, Social Proof-Focused, Interactive Product Demo, Trust & Authority, Storytelling-Driven

### BI/Analytics Dashboard (10 styles)
Data-Dense, Heat Map, Executive, Real-Time Monitoring, Drill-Down, Comparative, Predictive, User Behavior, Financial, Sales Intelligence

---

## 15 Tech Stacks hỗ trợ

HTML+Tailwind (default), React, Next.js, shadcn/ui, Vue, Nuxt.js, Nuxt UI, Angular, Laravel, Svelte, Astro, SwiftUI, Jetpack Compose, React Native, Flutter

---

## Ngành trong Reasoning Rules (161 rules)

- **Tech & SaaS:** SaaS, Micro SaaS, B2B, Developer Tool, AI/Chatbot, Cybersecurity
- **Finance:** Fintech/Crypto, Banking, Insurance, Personal Finance, Invoice
- **Healthcare:** Medical, Pharmacy, Dental, Veterinary, Mental Health
- **E-commerce:** General, Luxury, Marketplace P2P, Subscription Box, Food Delivery
- **Services:** Beauty/Spa, Restaurant, Hotel, Legal, Home Services, Booking
- **Creative:** Portfolio, Agency, Photography, Gaming, Music, Photo/Video Editor
- **Lifestyle:** Habit Tracker, Recipe, Meditation, Weather, Diary, Mood Tracker
- **Emerging Tech:** Web3/NFT, Spatial Computing, Quantum, Autonomous Drone

---

## Cách dùng

### Tự động (Skill Mode — Claude Code)
Chỉ cần chat tự nhiên:
```
Build a landing page for my SaaS product
Create a dashboard for healthcare analytics
Design a portfolio website with dark mode
```

### Design System Command (nâng cao)
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "beauty spa" --design-system -p "Serenity Spa"
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "fintech banking" --design-system -f markdown
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "glassmorphism" --domain style
```

### Lưu Design System
```bash
# Lưu vào design-system/MASTER.md + pages/
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard" --design-system --persist -p "MyApp"
```

Tạo cấu trúc:
```
design-system/
├── MASTER.md       # Global: colors, typography, spacing, components
└── pages/
    └── dashboard.md  # Override theo trang cụ thể
```

---

## Pre-delivery Checklist (tự động kiểm tra)

- [ ] Không dùng emoji làm icon (dùng SVG: Heroicons/Lucide)
- [ ] cursor-pointer trên mọi element clickable
- [ ] Hover states với smooth transition (150–300ms)
- [ ] Text contrast 4.5:1 minimum (WCAG AA)
- [ ] Focus states hiển thị cho keyboard nav
- [ ] prefers-reduced-motion được tôn trọng
- [ ] Responsive: 375px, 768px, 1024px, 1440px

---

## Cài đặt

```bash
# Cài CLI
npm install -g uipro-cli

# Cài cho Claude Code (global)
uipro init --ai claude --global
```

Hoặc qua Claude Code plugin:
```
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
```

## Nguồn

[[sources/2026-ui-ux-pro-max]] | [[entities/nextlevelbuilder]]
