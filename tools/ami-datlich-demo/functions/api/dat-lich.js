/**
 * Pages Function: nhận đơn đặt lịch/form từ app -> ghi Lark Base + báo nhóm Lark.
 * Đường dẫn công khai: https://<project>.pages.dev/api/dat-lich
 * Secrets (Pages env): LARK_APP_ID, LARK_APP_SECRET
 *
 * >>> SỬA 3 HẰNG SỐ DƯỚI cho mỗi khách (xem references/SOP.md, Bước 3-5) <<<
 *  - LARK: dùng open.larksuite.com (bản quốc tế) hoặc open.feishu.cn (bản TQ)
 *  - BASE_TOKEN / TABLE_ID: lấy khi tạo Base + bảng (Bước 3)
 *  - NOTIFY_CHAT_ID: chat_id nhóm Lark nhận báo (Bước 5)
 */
const LARK = "https://open.larksuite.com";
const BASE_TOKEN = "CxAzbIh5daNVGZsH6nojZ3M2p9f";
const TABLE_ID = "tblUbjxt4KcCufqR";
const NOTIFY_CHAT_ID = "oc_eb4dc246dd274a5f3ffb740d1876b006";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function onRequestOptions() {
  return new Response(null, { headers: CORS });
}

export async function onRequestPost({ request, env }) {
  let b;
  try { b = await request.json(); } catch { return json({ ok: false, error: "JSON không hợp lệ" }, 400); }

  const phone = String(b.phone || "").replace(/\s+/g, "");
  if (!/^0\d{9}$/.test(phone) || !b.name || !b.service || !b.address) {
    return json({ ok: false, error: "Thiếu tên / SĐT / địa chỉ / dịch vụ" }, 400);
  }
  const email = String(b.email || "").trim();

  try {
    const token = await tenantToken(env);

    await larkPost(
      `${LARK}/open-apis/bitable/v1/apps/${BASE_TOKEN}/tables/${TABLE_ID}/records`,
      token,
      { fields: {
          "Mã đặt lịch": b.code || "",
          "Dịch vụ": b.service,
          "Giá": Number(b.price) || 0,
          "Ngày hẹn": b.date || "",
          "Giờ hẹn": b.time || "",
          "Tên khách": b.name,
          "SĐT": phone,
          "Địa chỉ": b.address,
          "Email": email,
          "Trạng thái": "Mới",
          "Nguồn": b.source || "Zalo",
      } }
    );

    await larkPost(
      `${LARK}/open-apis/im/v1/messages?receive_id_type=chat_id`,
      token,
      { receive_id: NOTIFY_CHAT_ID, msg_type: "interactive", content: JSON.stringify(card(b, phone)) }
    );

    return json({ ok: true, code: b.code });
  } catch (e) {
    return json({ ok: false, error: String((e && e.message) || e) }, 502);
  }
}

async function tenantToken(env) {
  const r = await fetch(`${LARK}/open-apis/auth/v3/tenant_access_token/internal`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ app_id: env.LARK_APP_ID, app_secret: env.LARK_APP_SECRET }),
  });
  const j = await r.json();
  if (!j.tenant_access_token) throw new Error("Không lấy được token: " + JSON.stringify(j));
  return j.tenant_access_token;
}

async function larkPost(url, token, body) {
  const r = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
    body: JSON.stringify(body),
  });
  const j = await r.json();
  if (j.code && j.code !== 0) throw new Error("Lark lỗi " + j.code + ": " + (j.msg || ""));
  return j;
}

function vnd(n) { return (Number(n) || 0).toLocaleString("vi-VN") + "₫"; }

function card(b, phone) {
  return {
    config: { wide_screen_mode: true },
    header: { template: "green", title: { tag: "plain_text", content: "🔔 Đơn đặt lịch mới" } },
    elements: [
      { tag: "div", fields: [
        { is_short: true, text: { tag: "lark_md", content: "**Dịch vụ:**\n" + (b.service || "") } },
        { is_short: true, text: { tag: "lark_md", content: "**Giá:**\n" + vnd(b.price) } },
        { is_short: true, text: { tag: "lark_md", content: "**Ngày:**\n" + (b.date || "") } },
        { is_short: true, text: { tag: "lark_md", content: "**Giờ:**\n" + (b.time || "") } },
        { is_short: false, text: { tag: "lark_md", content: "**Khách:** " + (b.name || "") } },
        { is_short: false, text: { tag: "lark_md", content: "**📞 Gọi ngay:** " + phone } },
        { is_short: false, text: { tag: "lark_md", content: "**📍 Địa chỉ:** " + (b.address || "—") } },
        { is_short: false, text: { tag: "lark_md", content: "**✉️ Email:** " + (b.email ? b.email : "—") } },
      ] },
      { tag: "note", elements: [ { tag: "plain_text", content: "Mã " + (b.code || "-") + " · Nguồn: " + (b.source || "Zalo") } ] },
    ],
  };
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status, headers: { "Content-Type": "application/json", ...CORS },
  });
}
