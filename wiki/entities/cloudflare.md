---
title: Cloudflare — Nền tảng CDN, DNS, Worker miễn phí
type: entity
tags: [platform, hosting, cdn, worker, dns, free]
created: 2026-06-24
updated: 2026-06-24
sources: [2026-06-20-giao-trinh-nha-may-pheu.md]
---

# Cloudflare

**Cloudflare** là nền tảng CDN (Content Delivery Network) + DNS + serverless Worker của Mỹ.

## Dùng trong "Nhà máy phễu"

1. **Workers**: backend tự động (nhận form, gửi email, cron)
2. **KV**: lưu data tạm (dedup mở email)
3. **DNS**: quản lý domain (trỏ tên miền)
4. **Pages**: host landing page tĩnh

## Giá cả

- **Gói Free**: 100K requests/ngày, 10 Worker, KV unlimited → **đủ cho phần lớn chiến dịch**
- **Gói Pro**: $10/tháng, tăng request
- **Gói Business**: $200/tháng, SLA cao

## Đặc điểm

✅ **Ưu:**
- Miễn phí cho phần lớn use case
- Deploy nhanh (`wrangler deploy`)
- Global edge network (trang nhanh ở mọi quốc gia)
- Có CLI (wrangler) → dễ automation

❌ **Nhược:**
- Learn curve: cần hiểu Worker JS, KV syntax
- Giới hạn thời gian chạy: 30s/request (Worker)
- Cold start: lần đầu deploy chậm ~1s

## Tài liệu

- cloudflare.com
- Wrangler CLI: `npm install -g @cloudflare/wrangler`

---

## Liên kết

- [[concepts/cloudflare-worker]] — Worker là gì
- [[vat-chat/2026-06-24-ha-tang-cloudflare-lark-domain]] — Hạ tầng

