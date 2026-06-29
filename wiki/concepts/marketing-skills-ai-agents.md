---
title: Marketing Skills for AI Agents (46 Skills)
type: concept
tags: [marketing, ai-agents, skills, tool, claude-code]
created: 2026-06-19
updated: 2026-06-19
sources: [marketingskills-readme.md]
---

## Tổng quan

Bộ 46 skill markdown chuyên biệt cho marketing, dùng với Claude Code và các AI agent khác. Mỗi skill là một `SKILL.md` hướng dẫn agent thực hiện một task marketing cụ thể theo đúng framework và best practice.

**Vị trí file:** `D:\marketingskills-main\skills\<skill-name>\SKILL.md`

**Quy tắc quan trọng:** Skill `product-marketing` phải chạy đầu tiên. Nó tạo `.agents/product-marketing.md` — file context mà tất cả skill khác đọc trước khi làm việc.

---

## Danh sách 46 Skills

### Nền tảng (chạy đầu tiên)
| Skill | Dùng khi |
|-------|----------|
| `product-marketing` | Tạo/cập nhật context sản phẩm: positioning, ICP, audience — nền tảng cho mọi skill khác |

### SEO & Nội dung
| Skill | Dùng khi |
|-------|----------|
| `seo-audit` | Audit, chẩn đoán vấn đề SEO trên website |
| `ai-seo` | Tối ưu nội dung cho AI search engines, được LLM trích dẫn |
| `programmatic-seo` | Tạo hàng loạt trang SEO theo template + data |
| `site-architecture` | Lập kế hoạch cấu trúc website, URL, điều hướng |
| `schema` | Thêm/sửa structured data, schema markup |
| `content-strategy` | Lên kế hoạch nội dung, chọn chủ đề |
| `aso` | Tối ưu listing App Store / Google Play |

### CRO & Chuyển đổi
| Skill | Dùng khi |
|-------|----------|
| `cro` | Tối ưu tỷ lệ chuyển đổi trên trang, form |
| `signup` | Tối ưu luồng đăng ký, activation |
| `onboarding` | Cải thiện onboarding sau đăng ký, time-to-value |
| `popups` | Tạo/tối ưu popup, modal, overlay |
| `paywalls` | Tạo/tối ưu paywall, upsell modal, feature gate |
| `ab-testing` | Lên kế hoạch và chạy A/B test |

### Copywriting & Nội dung
| Skill | Dùng khi |
|-------|----------|
| `copywriting` | Viết/cải thiện copy cho landing page, homepage, pricing |
| `copy-editing` | Chỉnh sửa, cải thiện copy đã có |
| `cold-email` | Viết cold email B2B và chuỗi follow-up |
| `emails` | Tạo email sequence, drip campaign, lifecycle email |
| `social` | Tạo nội dung mạng xã hội (LinkedIn, Twitter, Instagram) |
| `video` | Tạo/lên kế hoạch video marketing bằng AI |
| `image` | Tạo/tối ưu hình ảnh marketing |
| `sms` | Xây dựng SMS/MMS marketing flow |

### Paid & Analytics
| Skill | Dùng khi |
|-------|----------|
| `ads` | Quản lý chiến dịch paid ads (Google, Meta, LinkedIn) |
| `ad-creative` | Tạo creative cho quảng cáo: headline, mô tả, ảnh |
| `analytics` | Thiết lập/cải thiện hệ thống tracking và đo lường |

### Tăng trưởng & Giữ chân
| Skill | Dùng khi |
|-------|----------|
| `referrals` | Tạo/tối ưu chương trình referral, affiliate |
| `free-tools` | Lên kế hoạch/xây dựng free tool cho marketing |
| `churn-prevention` | Giảm churn, xây cancellation flow, save offer |
| `community-marketing` | Xây dựng và tận dụng cộng đồng |
| `lead-magnets` | Tạo lead magnet để capture email |
| `co-marketing` | Tìm partner co-marketing, lên kế hoạch chiến dịch chung |

### Sales & GTM
| Skill | Dùng khi |
|-------|----------|
| `revops` | Revenue operations, lead lifecycle, marketing-sales handoff |
| `sales-enablement` | Tạo pitch deck, one-pager, objection handling, demo script |
| `launch` | Lên kế hoạch ra mắt sản phẩm, tính năng mới |
| `pricing` | Quyết định pricing, packaging, monetization |
| `competitors` | Tạo trang so sánh/alternative cho SEO và sales |
| `competitor-profiling` | Nghiên cứu, phân tích đối thủ từ URL |
| `directory-submissions` | Submit sản phẩm lên directories (SaaS, AI, startup) |
| `prospecting` | Tìm và qualify prospects để outreach |
| `offers` | Thiết kế offer: value framing, bonus, guarantee |

### Chiến lược
| Skill | Dùng khi |
|-------|----------|
| `marketing-ideas` | Ý tưởng marketing cho SaaS/software |
| `marketing-plan` | Lên kế hoạch marketing toàn diện |
| `marketing-psychology` | Áp dụng tâm lý học hành vi vào marketing |
| `customer-research` | Nghiên cứu, phân tích, tổng hợp insight khách hàng |
| `public-relations` | PR, earned media, báo chí, journalist outreach |

---

## Cách dùng với Claude Code

Khi cần dùng một skill, đọc file SKILL.md tương ứng:

```
D:\marketingskills-main\skills\<skill-name>\SKILL.md
```

Ví dụ muốn viết landing page copy:
> "Đọc skill copywriting và viết copy cho trang X"

Hoặc cài vào project:
```bash
npx skills add coreyhaines31/marketingskills
```

---

## Quan hệ giữa các skills

```
product-marketing (đọc đầu tiên)
├── copywriting ↔ cro ↔ ab-testing
├── revops ↔ sales-enablement ↔ cold-email
├── seo-audit ↔ schema ↔ ai-seo
└── customer-research → copywriting, cro, competitors
```

## Nguồn

[[sources/2026-marketing-skills-ai-agents]] | [[entities/corey-haines]]
