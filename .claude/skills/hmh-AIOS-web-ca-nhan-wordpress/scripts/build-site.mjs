#!/usr/bin/env node
/**
 * build-site.mjs — Dựng khung sườn website cá nhân lên 1 WordPress THẬT qua REST API.
 * Host-agnostic: chỉ cần URL + admin user + Application Password (chạy được trên mọi hosting).
 *
 * Dùng: node build-site.mjs <đường-dẫn-data.json>
 * Tiền đề (học viên đã làm tay - xem references/4-buoc-tay.md):
 *   1) Đã cài WordPress, 2) Permalinks = "Post name", 3) Đã cài & kích hoạt theme Astra,
 *   4) Đã tạo Application Password.
 *
 * data.json: xem references/phieu-chuan-bi.md và mẫu trong scripts/data.example.json
 */
import fs from 'fs';
import path from 'path';

const dataPath = process.argv[2];
if (!dataPath) { console.error('Thiếu đường dẫn data.json'); process.exit(1); }
const D = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const BASE = D.wp.url.replace(/\/+$/, '') + '/wp-json/wp/v2';
const AUTH = 'Basic ' + Buffer.from(`${D.wp.user}:${D.wp.appPassword}`).toString('base64');
const COLOR = (D.brand && D.brand.color) || '#0f1b3d';
const log = (...a) => console.log('[build]', ...a);

async function api(method, p, body, raw) {
  const opt = { method, headers: { Authorization: AUTH } };
  if (raw) { opt.headers = { ...opt.headers, ...raw.headers }; opt.body = raw.body; }
  else if (body) { opt.headers['Content-Type'] = 'application/json'; opt.body = JSON.stringify(body); }
  const r = await fetch(BASE + p, opt);
  const t = await r.text(); let j; try { j = JSON.parse(t); } catch { j = t; }
  if (!r.ok) throw new Error(`${method} ${p} -> ${r.status} ${typeof j === 'object' ? JSON.stringify(j).slice(0, 220) : t.slice(0, 160)}`);
  return j;
}
const get = (p) => api('GET', p);
const post = (p, b) => api('POST', p, b);
const put = (p, b) => api('POST', p, b); // WP REST dùng POST để update

// ---- media upload (local path hoặc URL) ----
async function uploadMedia(src) {
  if (!src) return null;
  let buf, name;
  if (/^https?:\/\//i.test(src)) {
    const r = await fetch(src); if (!r.ok) { log('media tải lỗi', src, r.status); return null; }
    buf = Buffer.from(await r.arrayBuffer()); name = path.basename(new URL(src).pathname) || 'image.jpg';
  } else {
    if (!fs.existsSync(src)) { log('media không tồn tại', src); return null; }
    buf = fs.readFileSync(src); name = path.basename(src);
  }
  const ext = (name.split('.').pop() || 'jpg').toLowerCase();
  const mime = ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : ext === 'gif' ? 'image/gif' : 'image/jpeg';
  const j = await api('POST', '/media', null, { headers: { 'Content-Disposition': `attachment; filename="${name}"`, 'Content-Type': mime }, body: buf });
  log('media uploaded', name, '->', j.id);
  return { id: j.id, url: j.source_url };
}

// ---- block helpers ----
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const P = (t) => `<!-- wp:paragraph -->\n<p>${t}</p>\n<!-- /wp:paragraph -->`;
const H = (t, lvl = 2) => `<!-- wp:heading {"level":${lvl}} -->\n<h${lvl} class="wp-block-heading">${esc(t)}</h${lvl}>\n<!-- /wp:heading -->`;

function heroBlock(h) {
  const sub = h.heroSubtitle ? `<!-- wp:paragraph {"align":"center","textColor":"white"} -->\n<p class="has-text-align-center has-white-color has-text-color">${esc(h.heroSubtitle)}</p>\n<!-- /wp:paragraph -->` : '';
  const cta = `<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->\n<div class="wp-block-buttons"><!-- wp:button -->\n<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="${h.ctaUrl || '/lien-he/'}">${esc(h.ctaText || 'Liên hệ')}</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons -->`;
  const t1 = h.heroTitle1 ? `<!-- wp:heading {"textAlign":"center","level":2,"textColor":"white"} -->\n<h2 class="wp-block-heading has-text-align-center has-white-color has-text-color">${esc(h.heroTitle1)}</h2>\n<!-- /wp:heading -->` : '';
  return `<!-- wp:cover {"customOverlayColor":"${COLOR}","dimRatio":90,"minHeight":460,"align":"full","contentPosition":"center center"} -->
<div class="wp-block-cover alignfull" style="min-height:460px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-90 has-background-dim" style="background-color:${COLOR}"></span><div class="wp-block-cover__inner-container">
${t1}
<!-- wp:heading {"textAlign":"center","level":1,"textColor":"white","fontSize":"xx-large"} -->
<h1 class="wp-block-heading has-text-align-center has-white-color has-text-color has-xx-large-font-size">${esc(h.heroTitle2 || D.brand.siteTitle)}</h1>
<!-- /wp:heading -->
${sub}
${cta}
</div></div>
<!-- /wp:cover -->`;
}
function aboutBlock(h, portraitUrl) {
  const img = portraitUrl
    ? `<!-- wp:image {"sizeSlug":"large","className":"is-style-rounded"} -->\n<figure class="wp-block-image size-large is-style-rounded"><img src="${portraitUrl}" alt="${esc(D.brand.siteTitle)}"/></figure>\n<!-- /wp:image -->`
    : `<!-- wp:cover {"customOverlayColor":"#e9eefb","dimRatio":100,"minHeight":260} --><div class="wp-block-cover" style="min-height:260px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-100 has-background-dim" style="background-color:#e9eefb"></span><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"align":"center"} --><p class="has-text-align-center">[ Ảnh chân dung ]</p><!-- /wp:paragraph --></div></div><!-- /wp:cover -->`;
  return `<!-- wp:columns {"align":"wide","style":{"spacing":{"padding":{"top":"50px","bottom":"30px"}}}} -->
<div class="wp-block-columns alignwide" style="padding-top:50px;padding-bottom:30px"><!-- wp:column {"width":"55%"} -->
<div class="wp-block-column" style="flex-basis:55%">
${H(h.aboutHeading || 'Giới thiệu', 2)}
${P(esc(h.aboutText || ''))}
<!-- wp:buttons --><div class="wp-block-buttons"><!-- wp:button {"className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link wp-element-button" href="/gioi-thieu/">Tìm hiểu thêm</a></div>
<!-- /wp:button --></div><!-- /wp:buttons -->
</div>
<!-- /wp:column -->
<!-- wp:column {"width":"45%"} -->
<div class="wp-block-column" style="flex-basis:45%">${img}</div>
<!-- /wp:column --></div>
<!-- /wp:columns -->`;
}
function servicesBlock(services) {
  if (!services || !services.length) return '';
  const cols = services.map(s => `<!-- wp:column -->
<div class="wp-block-column">${H(s.title, 3).replace('{"level":3}', '{"level":3,"textAlign":"center"}').replace('wp-block-heading', 'wp-block-heading has-text-align-center')}
<!-- wp:paragraph {"align":"center"} --><p class="has-text-align-center">${esc(s.desc || '')}</p><!-- /wp:paragraph --></div>
<!-- /wp:column -->`).join('\n');
  return `<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"50px","bottom":"50px"}}},"backgroundColor":"white"} -->
<div class="wp-block-group alignfull has-white-background-color has-background" style="padding-top:50px;padding-bottom:50px">
${H('Tôi giúp được gì cho bạn', 2).replace('wp-block-heading', 'wp-block-heading has-text-align-center')}
<!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide">${cols}</div>
<!-- /wp:columns --></div>
<!-- /wp:group -->`;
}

async function run() {
  log('Kiểm tra kết nối + theme...');
  const me = await get('/users/me?context=edit').catch(() => null);
  if (!me) throw new Error('Không xác thực được — kiểm tra URL/user/Application Password.');
  log('Đăng nhập:', me.name);

  // 0) Dọn nội dung mặc định của WordPress (Hello world! + Sample Page / Trang ví dụ)
  for (const sl of ['hello-world', 'hello-world-2']) {
    const ps = await get(`/posts?slug=${sl}&status=publish,draft`).catch(() => []);
    for (const p of ps) await api('DELETE', `/posts/${p.id}?force=true`).catch(() => {});
  }
  for (const sl of ['sample-page', 'trang-vi-du', 'privacy-policy', 'chinh-sach-rieng-tu']) {
    const pg = await get(`/pages?slug=${sl}&status=publish,draft`).catch(() => []);
    for (const p of pg) await api('DELETE', `/pages/${p.id}?force=true`).catch(() => {});
  }
  log('Đã dọn nội dung mặc định');

  // 1) Media
  const logo = await uploadMedia(D.media && D.media.logo);
  const portrait = await uploadMedia(D.media && D.media.portrait);

  // 2) Settings: title, tagline, logo
  const settings = { title: D.brand.siteTitle, description: D.brand.tagline || '' };
  if (logo) settings.site_logo = logo.id;
  await api('POST', '/settings', settings);
  log('Đặt tên site + tagline' + (logo ? ' + logo' : ''));

  // 3) Categories
  const CAT = {};
  for (const c of (D.categories || [])) {
    const j = await post('/categories', { name: c });
    CAT[c] = j.id; log('chuyên mục', c, j.id);
  }

  // 4) Pages
  const PAGE = {};
  const mkPage = async (title, slug, content) => { const j = await post('/pages', { title, slug, status: 'publish', content }); PAGE[slug] = j.id; log('trang', title, j.id); return j.id; };
  const homeId = await mkPage('Trang chủ', 'trang-chu', '<!-- tmp -->');
  const blogId = await mkPage('Blog', 'blog', H('Blog') + '\n' + P('Các bài viết & chia sẻ.'));
  await mkPage('Giới thiệu', 'gioi-thieu', (D.pages && D.pages.about) || (H('Giới thiệu') + '\n' + P(esc(D.home.aboutText || ''))));
  await mkPage('Dịch vụ', 'dich-vu', (D.pages && D.pages.services) || (H('Dịch vụ') + '\n' + P('Mô tả dịch vụ.')));
  await mkPage('Liên hệ', 'lien-he', (D.pages && D.pages.contact) || (H('Liên hệ') + '\n' + P(esc(((D.contact && D.contact.text) || '')))));

  // 5) Posts
  for (const a of (D.posts || [])) {
    const cats = a.category && CAT[a.category] ? [CAT[a.category]] : [];
    const j = await post('/posts', { title: a.title, status: 'publish', content: a.content || P('Nội dung...'), categories: cats });
    log('bài viết', a.title, j.id);
  }

  // 6) Homepage
  const home = [
    heroBlock(D.home),
    aboutBlock(D.home, portrait && portrait.url),
    servicesBlock(D.home.services),
    H('Bài viết mới nhất', 2).replace('wp-block-heading', 'wp-block-heading has-text-align-center'),
    '<!-- wp:latest-posts {"postsToShow":6,"displayPostDate":true,"displayFeaturedImage":true,"columns":3,"postLayout":"grid","align":"wide"} /-->'
  ].join('\n\n');
  await put(`/pages/${homeId}`, { content: home, meta: { 'site-post-title': 'disabled' } });
  log('Dựng trang chủ');

  // 7) Front page
  await api('POST', '/settings', { show_on_front: 'page', page_on_front: homeId, page_for_posts: blogId });
  log('Đặt trang chủ tĩnh');

  // 8) Menu
  const ex = await get('/menus?per_page=100').catch(() => []);
  for (const m of ex) if (m.name === 'Menu chính') await api('DELETE', `/menus/${m.id}?force=true`).catch(() => {});
  const menu = await post('/menus', { name: 'Menu chính', locations: ['primary'] });
  let order = 1;
  const item = async (o) => {
    const b = { menus: menu.id, status: 'publish', menu_order: order++, parent: o.parent || 0, title: o.title };
    if (o.page) { b.type = 'post_type'; b.object = 'page'; b.object_id = o.page; }
    else if (o.url) { b.type = 'custom'; b.url = o.url; }
    return (await post('/menu-items', b)).id;
  };
  await item({ title: 'Trang chủ', url: '/' });
  await item({ title: 'Giới thiệu', page: PAGE['gioi-thieu'] });
  await item({ title: 'Dịch vụ', page: PAGE['dich-vu'] });
  await item({ title: 'Blog', page: PAGE['blog'] });
  await item({ title: 'Liên hệ', page: PAGE['lien-he'] });
  log('Dựng menu + gán vị trí primary');

  log('XONG ✅  Mở:', D.wp.url);
  log('LƯU Ý: nếu trang con/bài 404 → vào wp-admin → Settings → Permalinks → Save (flush rewrite).');
}
run().catch(e => { console.error('[build] LỖI:', e.message); process.exit(2); });
