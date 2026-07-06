// lark.js — Helper gọi LARK OPEN API cho bảng "Đăng Youtube".
// KHÔNG cần lark-cli / auth login. Chỉ cần Node 18+ (dùng fetch built-in).
// Dùng app credentials (tenant token) để đọc/ghi Base + tải attachment.
const fs = require('fs');
const path = require('path');
const cfg = require('./config');

const BASE = `${cfg.LARK_DOMAIN}/open-apis`;

// --- tenant token (cache theo hạn) ---
let _tok = null, _tokExp = 0;
async function getToken() {
  if (_tok && Date.now() < _tokExp) return _tok;
  const r = await fetch(`${BASE}/auth/v3/tenant_access_token/internal`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ app_id: cfg.APP_ID, app_secret: cfg.APP_SECRET }),
  });
  const j = await r.json();
  if (j.code !== 0 || !j.tenant_access_token) throw new Error('Lark token lỗi: ' + JSON.stringify(j));
  _tok = j.tenant_access_token;
  _tokExp = Date.now() + Math.max(0, (j.expire || 7200) - 120) * 1000; // trừ hao 2 phút
  return _tok;
}

async function apiJson(method, urlPath, body) {
  const tok = await getToken();
  const r = await fetch(`${BASE}${urlPath}`, {
    method,
    headers: { Authorization: `Bearer ${tok}`, 'Content-Type': 'application/json; charset=utf-8' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const j = await r.json();
  if (j.code !== 0) throw new Error(`Lark ${method} ${urlPath} lỗi: ${JSON.stringify(j)}`);
  return j.data;
}

const APP = () => encodeURIComponent(cfg.BASE_TOKEN);
const TBL = () => encodeURIComponent(cfg.TABLE_ID);

// --- field map (name -> {id,type}), cache ---
let _fields = null;
async function fieldMap() {
  if (_fields) return _fields;
  const d = await apiJson('GET', `/bitable/v1/apps/${APP()}/tables/${TBL()}/fields?page_size=100`);
  _fields = new Map((d.items || []).map((f) => [f.field_name, { id: f.field_id, type: f.type }]));
  return _fields;
}

// value trong cell -> chuỗi phẳng (string | array | {text|name})
function plain(v) {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  if (typeof v === 'number') return v; // datetime epoch giữ nguyên số
  if (Array.isArray(v)) return v.map((x) => (x && (x.text || x.name)) || '').join('');
  return v.text || v.name || String(v);
}

// Đọc toàn bộ record (phân trang) -> mảng { record_id, raw, get, sel, attachments }
async function listRecords() {
  let items = [], pt = '';
  do {
    const d = await apiJson('GET', `/bitable/v1/apps/${APP()}/tables/${TBL()}/records?page_size=200${pt ? '&page_token=' + pt : ''}`);
    items = items.concat(d.items || []);
    pt = d.has_more ? d.page_token : '';
  } while (pt);

  return items.map((it) => {
    const map = it.fields || {};
    return {
      record_id: it.record_id,
      raw: map,
      get(name) { return plain(map[name]); },      // text/số/datetime(epoch)
      sel(name) { const t = plain(map[name]); return t === '' ? null : t; }, // single-select -> tên option
      attachments(name) {
        const v = map[name];
        if (!Array.isArray(v)) return [];
        return v.map((a) => ({
          file_token: a.file_token || a.fileToken || a.token,
          name: a.name || 'file',
          type: a.type || '',
          size: a.size || 0,
        })).filter((a) => a.file_token);
      },
    };
  });
}

// Ghi patch (keyed theo tên field). Tự bọc field URL thành {link,text}.
async function updateRecord(recordId, patch) {
  const fm = await fieldMap();
  const fields = {};
  for (const [name, val] of Object.entries(patch)) {
    const meta = fm.get(name);
    if (meta && meta.type === 15) { // URL
      const s = (val == null ? '' : String(val));
      fields[name] = s ? { link: s, text: s } : '';
    } else {
      fields[name] = val;
    }
  }
  return apiJson('PUT', `/bitable/v1/apps/${APP()}/tables/${TBL()}/records/${encodeURIComponent(recordId)}`, { fields });
}

// Tải 1 attachment bitable theo file_token -> lưu vào destDir, trả về đường dẫn file.
async function downloadAttachment(_recordId, fileToken, destDir, suggestName) {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  const safe = (suggestName || (fileToken + '.bin')).replace(/[\\/:*?"<>|]/g, '_');
  const dest = path.join(destDir, safe);
  const tok = await getToken();
  const extra = encodeURIComponent(JSON.stringify({ bitablePerm: { tableId: cfg.TABLE_ID } }));
  const tries = [
    `${BASE}/drive/v1/medias/${fileToken}/download?extra=${extra}`,
    `${BASE}/drive/v1/medias/${fileToken}/download`,
  ];
  for (const u of tries) {
    const r = await fetch(u, { headers: { Authorization: `Bearer ${tok}` } });
    const ct = r.headers.get('content-type') || '';
    if (r.ok && ct.indexOf('json') < 0) {
      const b = Buffer.from(await r.arrayBuffer());
      fs.writeFileSync(dest, b);
      return dest;
    }
  }
  throw new Error('Tải attachment thất bại: ' + safe);
}

module.exports = { getToken, listRecords, updateRecord, downloadAttachment, fieldMap };
