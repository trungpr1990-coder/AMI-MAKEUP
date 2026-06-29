---
title: Cloudflare Worker — Backend tự động 24/7, không cần server riêng
type: concept
tags: [cloudflare, worker, backend, serverless, automation, cron]
created: 2026-06-24
updated: 2026-06-24
sources: [2026-06-20-giao-trinh-nha-may-pheu.md]
---

# Cloudflare Worker — Backend tự động 24/7

**Worker** là hàm JavaScript chạy trên Cloudflare (không cần server riêng), xử lý request/response và tự động hoá.

## Tính năng chính

1. **Nhận form từ khách**
   - POST /submit: khách điền form → Worker ghi vào Lark Base + gửi email

2. **Gửi email tự động**
   - Nhúng SMTP config → worker gửi ebook email (qua hộp thư Lark)

3. **Pixel đo mở email**
   - GET /open?lead_id=123 → đánh dấu "Đã mở", tính tỷ lệ

4. **Cron (lịch tự động)**
   - `0 1 * * *` (8h sáng VN) → chạy hàm nurture, gửi 10 email tự động

5. **KV (key-value storage)**
   - Lưu "mở email trước đó" → dedup (mở nhiều lần chỉ tính 1)

## Giá thế nào

**Gói free Cloudflare Worker:**
- 100,000 requests/ngày
- 10 Worker
- KV unlimited
- Cron: 3 lịch/tháng (đủ nurture)

**Gói Pro:** $10/tháng, tăng request/cron

## Ví dụ code

```javascript
// Handler khi khách submit form
export default {
  async fetch(request) {
    if (request.method === 'POST' && new URL(request.url).pathname === '/submit') {
      const data = await request.json();
      
      // 1. Ghi vào Lark Base
      await writeToLark(data);
      
      // 2. Gửi email ebook
      await sendEmailSmtp(data.email, 'ebook.pdf');
      
      // 3. Redirect trang cảm ơn + Zalo
      return new Response('...', { status: 302, headers: { 'Location': '/thank-you' } });
    }
  },
  
  // Cron chạy 8h sáng mỗi ngày
  async scheduled(request, env, ctx) {
    await sendNurtureEmails();
  }
};
```

## Deploy

```bash
# Code trong thư mục leadpage-deploy/
npx wrangler deploy

# Gắn domain (nếu có quyền)
# Settings → Domains & Routes → Add Custom Domain
```

---

## Liên kết

- [[concepts/nha-may-pheu]] — Hệ thống sử dụng Worker
- [[vat-chat/2026-06-24-ha-tang-cloudflare-lark-domain]] — Hạ tầng Cloudflare

