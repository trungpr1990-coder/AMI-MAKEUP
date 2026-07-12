#!/usr/bin/env node
/**
 * provision.mjs — MỨC B (full-auto): từ thông tin đăng nhập hosting → tự cài WordPress + Astra
 * + tạo Application Password, ra sẵn "3 dòng kết nối" cho build-site.mjs.
 *
 * Phần PHỤ THUỘC PANEL = chỉ việc TẠO DATABASE (DirectAdmin / cPanel / manual).
 * Phần còn lại (đẩy file, giải nén, wp-config, cài đặt, permalink, theme, app password)
 * chạy KHÔNG phụ thuộc panel: FTP + 1 file PHP tự giải nén (_x.php).
 *
 * Dùng: node provision.mjs <provision.json>   (xem provision.example.json)
 * Output: ghi <thư mục data>/connection.json  → đưa vào build-site.mjs.
 *
 * Yêu cầu: latest.zip & astra.zip nằm cùng thư mục scripts/ (tải sẵn 1 lần — xem README ghi chú).
 */
import fs from 'fs';
import path from 'path';
import https from 'node:https';
import { fileURLToPath } from 'url';
import { Client as Ftp } from 'basic-ftp';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const cfgPath = process.argv[2];
if (!cfgPath) { console.error('Dùng: node provision.mjs <provision.json>'); process.exit(1); }
const C = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const log = (...a) => console.log('[prov]', ...a);

// Gọi PANEL hosting (DirectAdmin/cPanel) — bỏ qua kiểm TLS vì panel hay dùng cert tự ký.
// CHỈ áp cho kết nối panel của hosting, KHÔNG áp cho site công khai.
function panelReq(urlStr, { method = 'GET', headers = {}, body = null } = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(urlStr);
    const req = https.request({ hostname: u.hostname, port: u.port || 443, path: u.pathname + u.search, method, headers, rejectUnauthorized: false }, res => {
      let d = ''; res.on('data', c => d += c); res.on('end', () => resolve({ status: res.statusCode, text: d, json: () => { try { return JSON.parse(d); } catch { return {}; } } }));
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

const SITE = C.site.url.replace(/\/+$/, '');
const WP_ZIP = path.join(HERE, 'latest.zip');
const ASTRA_ZIP = path.join(HERE, 'astra.zip');

// ---------------- FTP helpers ----------------
async function withFtp(fn) {
  const c = new Ftp(30000); c.ftp.verbose = false;
  try { await c.access({ host: C.ftp.host, user: C.ftp.user, password: C.ftp.password, secure: false }); return await fn(c); }
  finally { c.close(); }
}
async function ftpEnsureUpload(localFile, remoteDir, remoteName) {
  await withFtp(async c => { await c.ensureDir(remoteDir); await c.uploadFrom(localFile, remoteName); });
}
async function ftpPutText(text, remoteDir, remoteName) {
  const tmp = path.join(HERE, '.tmp_' + remoteName);
  fs.writeFileSync(tmp, text);
  try { await ftpEnsureUpload(tmp, remoteDir, remoteName); } finally { fs.unlinkSync(tmp); }
}

// ---------------- self-extractor PHP ----------------
const EXTRACTOR = `<?php
$z=$_GET['z']??''; $flat=$_GET['f']??'';
$r='ERR';
$zip=new ZipArchive;
if($z && $zip->open(__DIR__.'/'.$z)===TRUE){ $zip->extractTo(__DIR__); $zip->close();
  if($flat && is_dir(__DIR__.'/'.$flat)){ foreach(scandir(__DIR__.'/'.$flat) as $f){ if($f==='.'||$f==='..')continue; @rename(__DIR__.'/'.$flat.'/'.$f, __DIR__.'/'.$f);} @rmdir(__DIR__.'/'.$flat);}
  @unlink(__DIR__.'/'.$z); $r='DONE'; }
echo $r; if($r==='DONE'){ @unlink(__FILE__);} `;

async function deployZip(localZip, remoteDir, urlDir, zipName, flatten) {
  await ftpEnsureUpload(localZip, remoteDir, zipName);
  await ftpPutText(EXTRACTOR, remoteDir, '_x.php');
  const u = `${urlDir}/_x.php?z=${zipName}` + (flatten ? `&f=${flatten}` : '');
  const r = await fetch(u, { redirect: 'follow' });
  const t = (await r.text()).trim();
  log('giải nén', zipName, '->', t);
  if (!t.includes('DONE')) throw new Error('Giải nén thất bại tại ' + u + ' (' + t.slice(0, 60) + ')');
}

// ---------------- PANEL adapters: createDatabase ----------------
async function createDB() {
  const db = C.db;
  if (C.panel === 'manual') { log('DB: chế độ manual — dùng DB có sẵn', db.name); return; }

  if (C.panel === 'directadmin') {
    const base = C.panelLogin.url.replace(/\/+$/, '');
    const auth = 'Basic ' + Buffer.from(`${C.panelLogin.user}:${C.panelLogin.password}`).toString('base64');
    const body = new URLSearchParams({ action: 'create', name: db.shortName, user: db.shortUser, passwd: db.password, passwd2: db.password }).toString();
    const r = await panelReq(base + '/CMD_API_DATABASES', { method: 'POST', headers: { Authorization: auth, 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(body) }, body });
    if (/error=1/.test(r.text) && !/exist/i.test(r.text)) throw new Error('DirectAdmin tạo DB lỗi: ' + decodeURIComponent(r.text).slice(0, 160));
    log('DirectAdmin: đã tạo DB', db.name);
    return;
  }

  if (C.panel === 'cpanel') {
    // ⚠️ CHƯA TEST trên host cPanel thật — viết theo cPanel UAPI (cổng 2083, /execute/).
    const base = C.panelLogin.url.replace(/\/+$/, ''); // vd https://host:2083
    const auth = 'Basic ' + Buffer.from(`${C.panelLogin.user}:${C.panelLogin.password}`).toString('base64');
    const call = async (mod, fn, params) => {
      const qs = new URLSearchParams(params).toString();
      const r = await panelReq(`${base}/execute/${mod}/${fn}?${qs}`, { headers: { Authorization: auth } });
      const j = r.json();
      if (j && j.errors && j.errors.length) throw new Error(`cPanel ${mod}.${fn}: ` + JSON.stringify(j.errors).slice(0, 160));
      return j;
    };
    await call('Mysql', 'create_database', { name: db.name });
    await call('Mysql', 'create_user', { name: db.user, password: db.password });
    await call('Mysql', 'set_privileges_on_database', { user: db.user, database: db.name, privileges: 'ALL PRIVILEGES' });
    log('cPanel: đã tạo DB', db.name, '(LƯU Ý: đường này CHƯA được test thực tế)');
    return;
  }
  throw new Error('panel không hỗ trợ: ' + C.panel);
}

// ---------------- WP install over HTTP ----------------
async function installWP() {
  const body = new URLSearchParams({
    weblog_title: C.wpAdmin.title || C.site.domain,
    user_name: C.wpAdmin.user, admin_password: C.wpAdmin.password, admin_password2: C.wpAdmin.password,
    pw_weak: 'on', admin_email: C.wpAdmin.email, blog_public: C.wpAdmin.blogPublic ? '1' : '0',
    Submit: 'Install WordPress',
  });
  const r = await fetch(`${SITE}/wp-admin/install.php?step=2`, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
  const t = await r.text();
  if (!/success|installed|Log In|đã được cài/i.test(t)) log('Cảnh báo: không thấy dấu hiệu cài thành công (có thể đã cài trước đó).');
  else log('WordPress đã cài.');
}

// ---------------- cookie session for wp-admin ----------------
let COOKIE = '';
async function wpLogin() {
  const body = new URLSearchParams({ log: C.wpAdmin.user, pwd: C.wpAdmin.password, 'wp-submit': 'Log In', redirect_to: `${SITE}/wp-admin/`, testcookie: '1' });
  const r = await fetch(`${SITE}/wp-login.php`, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded', Cookie: 'wordpress_test_cookie=WP Cookie check' }, body, redirect: 'manual' });
  const sc = r.headers.getSetCookie ? r.headers.getSetCookie() : [];
  COOKIE = sc.map(c => c.split(';')[0]).join('; ');
  if (!/wordpress_logged_in/.test(COOKIE)) throw new Error('Đăng nhập wp-admin thất bại.');
  log('Đăng nhập wp-admin OK');
}
async function adminGet(p) { const r = await fetch(SITE + p, { headers: { Cookie: COOKIE } }); return await r.text(); }
async function adminPost(p, params, referer) {
  const r = await fetch(SITE + p, { method: 'POST', headers: { Cookie: COOKIE, 'Content-Type': 'application/x-www-form-urlencoded', Referer: referer || SITE + p }, body: new URLSearchParams(params), redirect: 'manual' });
  return r.status;
}
const nonceFrom = (html, name = '_wpnonce') => (html.match(new RegExp(`name="${name}" value="([a-z0-9]+)"`, 'i')) || [])[1];

async function setPermalink() {
  const html = await adminGet('/wp-admin/options-permalink.php');
  const n = nonceFrom(html);
  await adminPost('/wp-admin/options-permalink.php', { selection: '/%postname%/', permalink_structure: '/%postname%/', _wpnonce: n, _wp_http_referer: '/wp-admin/options-permalink.php', submit: 'Save Changes' }, `${SITE}/wp-admin/options-permalink.php`);
  log('Permalink = Post name (đã flush)');
}
async function activateAstra() {
  const html = await adminGet('/wp-admin/themes.php');
  const m = html.match(/themes\.php\?action=activate&amp;stylesheet=astra&amp;_wpnonce=([a-z0-9]+)/i);
  if (!m) { log('Cảnh báo: không thấy link kích hoạt Astra (có thể đã active).'); return; }
  await adminGet(`/wp-admin/themes.php?action=activate&stylesheet=astra&_wpnonce=${m[1]}`);
  log('Theme Astra đã kích hoạt');
}
async function createAppPassword() {
  const dash = await adminGet('/wp-admin/');
  const nrest = (dash.match(/"nonce":"([a-f0-9]{8,})"/) || [])[1];
  const r = await fetch(`${SITE}/wp-json/wp/v2/users/me/application-passwords`, { method: 'POST', headers: { Cookie: COOKIE, 'X-WP-Nonce': nrest, 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'Web Builder' }) });
  const j = await r.json();
  if (!j.password) throw new Error('Tạo Application Password thất bại: ' + JSON.stringify(j).slice(0, 160));
  log('Application Password đã tạo');
  return j.password;
}

// ---------------- wp-config ----------------
async function writeConfig() {
  const salts = await (await fetch('https://api.wordpress.org/secret-key/1.1/salt/')).text();
  const cfg = `<?php
define( 'DB_NAME', '${C.db.name}' );
define( 'DB_USER', '${C.db.user}' );
define( 'DB_PASSWORD', '${C.db.password}' );
define( 'DB_HOST', '${C.db.host || 'localhost'}' );
define( 'DB_CHARSET', 'utf8mb4' );
define( 'DB_COLLATE', '' );
${salts}
$table_prefix = 'wp_';
define( 'WP_DEBUG', false );
define( 'FS_METHOD', 'direct' );
if ( ! defined( 'ABSPATH' ) ) { define( 'ABSPATH', __DIR__ . '/' ); }
require_once ABSPATH . 'wp-settings.php';
`;
  await ftpPutText(cfg, C.site.docroot, 'wp-config.php');
  log('wp-config.php đã ghi');
}

async function run() {
  if (!fs.existsSync(WP_ZIP)) throw new Error('Thiếu latest.zip trong scripts/ — tải: https://wordpress.org/latest.zip');
  if (!fs.existsSync(ASTRA_ZIP)) throw new Error('Thiếu astra.zip trong scripts/ — tải: https://downloads.wordpress.org/theme/astra.zip');

  log('Panel:', C.panel, '| Site:', SITE, '| Docroot:', C.site.docroot);
  await createDB();
  log('Đẩy + giải nén WordPress...');
  await deployZip(WP_ZIP, C.site.docroot, SITE, 'wp.zip', 'wordpress');
  await writeConfig();
  await installWP();
  await wpLogin();
  await setPermalink();
  log('Đẩy + giải nén theme Astra...');
  await deployZip(ASTRA_ZIP, C.site.docroot + '/wp-content/themes', SITE + '/wp-content/themes', 'astra.zip', '');
  await activateAstra();
  const apppw = await createAppPassword();

  const out = { wp: { url: SITE, user: C.wpAdmin.user, appPassword: apppw } };
  const outPath = path.join(path.dirname(cfgPath), 'connection.json');
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  log('XONG ✅  Ghi 3 dòng kết nối:', outPath);
  log('→ Bước tiếp: điền nội dung học viên vào data.json rồi chạy build-site.mjs');
}
run().catch(e => { console.error('[prov] LỖI:', e.message); process.exit(2); });
