/**
 * Pancake → Lark Base sync
 * Kéo lead (hội thoại) + đơn hàng từ Pancake vào CRM THÚY THÚY
 *
 * Chạy: node pancake-to-lark.js
 * Yêu cầu: node >= 18, lark-cli đã đăng nhập
 */

const { execSync } = require("child_process");
const https = require("https");

// ─── CẤU HÌNH ──────────────────────────────────────────────────────────────
const CONFIG = {
  // Session token từ trình duyệt (F12 → Application → Cookies → token)
  pancake_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvIjp7Im9zIjozLCJjbGllbnRfaXAiOiIxNzEuMjUxLjIzNi41NCIsImJyb3dzZXIiOjEsImRldmljZV90eXBlIjozfSwibmFtZSI6ImRldmlsIiwiZXhwIjoxNzg4NTI5ODExLCJhcHBsaWNhdGlvbiI6MSwidWlkIjoiNDIyZDYzNWMtYmFkMi00OGZiLTg3NWMtYWJjNWFhYjUxYzkyIiwic2Vzc2lvbl9pZCI6IjQ2YmI3MWEzLWQwNGEtNGY0Mi1iZTRiLTJhZGI3OGIwYWE1MCIsImlhdCI6MTc4MDc1MzgxMSwicGFuY2FrZV9pZCI6ImNiNGYxYjgwLTk5MGQtNGY0OS1iNWY1LWI0ZThlZDgzZDRiNSIsImZiX2lkIjoiODU3MDY0MjY0NDI2NjIxIiwibG9naW5fc2Vzc2lvbiI6bnVsbCwiZmJfbmFtZSI6ImRldmlsIn0.RivQXppPeJ6S_8K9OvuzL9Ggknd1Ox4WPotZiz6I5MA",

  // Page ID của bạn (lấy từ URL pancake.vn/{PAGE_ID}/...)
  page_id: "107316028983142",

  // TODO: POS API key — vào Pancake POS → Cài đặt → Ứng dụng → API KEY → Thêm mới
  pos_api_key: "",

  // Lark Base
  base_token: "O2qIbEaIYabXEGsW6Dzjs0LCpZg",
  table_pancake: "tblUiNhtORqEUCUm", // bảng Pancake Leads & Đơn Hàng

  // Số hội thoại / đơn mỗi lần kéo
  page_size: 100,
};
// ───────────────────────────────────────────────────────────────────────────

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch {
            reject(new Error("JSON parse error: " + data.slice(0, 200)));
          }
        });
      })
      .on("error", reject);
  });
}

const fs = require("fs");
const os = require("os");
const path = require("path");

function larkBatchCreate(tableId, records) {
  if (!records.length) return;
  // Lấy tất cả field names từ tất cả records
  const allFields = [...new Set(records.flatMap((r) => Object.keys(r)))];
  for (let i = 0; i < records.length; i += 200) {
    const batch = records.slice(i, i + 200);
    const rows = batch.map((r) => allFields.map((f) => r[f] ?? null));
    const payload = { fields: allFields, rows };
    const tmpFile = `lark_batch_${Date.now()}.json`;
    fs.writeFileSync(tmpFile, JSON.stringify(payload), "utf8");
    try {
      const result = execSync(
        `lark-cli base +record-batch-create --base-token ${CONFIG.base_token} --table-id ${tableId} --as user --json @${tmpFile}`,
        { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"], cwd: process.cwd() }
      );
      const parsed = JSON.parse(result);
      const count = parsed.data?.record_id_list?.length ?? 0;
      console.log(`  ✓ Đã tạo ${count} records (batch ${Math.floor(i / 200) + 1})`);
    } catch (e) {
      console.error("  ✗ Lỗi batch create:", e.stderr || e.message);
    } finally {
      fs.unlinkSync(tmpFile);
    }
  }
}

// ── 1. LEAD: Kéo hội thoại từ Pancake pages.fm ──────────────────────────
async function syncLeads() {
  console.log("\n📥 Đang kéo hội thoại (leads) từ Pancake...");

  const url = `https://pages.fm/api/v1/pages/${CONFIG.page_id}/conversations?access_token=${CONFIG.pancake_token}&page_size=${CONFIG.page_size}&sort_by=last_message_time&sort_order=desc`;

  let data;
  try {
    data = await get(url);
  } catch (e) {
    console.error("  ✗ Lỗi khi gọi Pancake API:", e.message);
    return;
  }

  if (!data.success) {
    console.error(
      "  ✗ Pancake API lỗi:",
      data.message,
      "(error_code:",
      data.error_code + ")"
    );
    if (data.error_code === 102) {
      console.error(
        "  → Token không hợp lệ. Vào Pancake → Cài đặt → Công cụ → Tạo Token mới."
      );
    }
    return;
  }

  const conversations = data.conversations || data.data || [];
  console.log(`  → Tìm thấy ${conversations.length} hội thoại`);

  if (!conversations.length) return;

  // Map Pancake conversation → Lark Pancake Leads & Đơn Hàng
  const records = conversations.map((conv) => {
    const name = conv.from?.name || conv.customers?.[0]?.name || "";
    const phones = conv.recent_phone_numbers || [];
    const phone = Array.isArray(phones) && phones.length > 0 ? phones[0] : "";
    return {
      "Tên Khách Hàng": name || null,
      "Số Điện Thoại": phone || null,
      "Loại": "Lead",
      "Nguồn": "Pancake Facebook",
      "Tin Nhắn Gần Nhất": conv.snippet || null,
      "Thời Gian Tương Tác": conv.last_customer_interactive_at
        ? new Date(conv.last_customer_interactive_at).getTime()
        : null,
      "Conversation ID": conv.id || null,
    };
  });

  console.log(`  → Đang ghi ${records.length} leads vào bảng Pancake...`);
  larkBatchCreate(CONFIG.table_pancake, records);
}

// ── 2. ĐƠN HÀNG: Kéo từ Pancake POS ──────────────────────────────────────
async function syncOrders() {
  if (!CONFIG.pos_api_key) {
    console.log(
      "\n⚠️  Bỏ qua đơn hàng — chưa có POS API key."
    );
    console.log(
      "   Để lấy: Pancake POS → Cài đặt → Ứng dụng → API KEY → Thêm mới"
    );
    return;
  }

  console.log("\n📥 Đang kéo đơn hàng từ Pancake POS...");

  // Lấy danh sách shops trước
  const shopsData = await get(
    `https://pos.pages.fm/api/v1/shops?api_key=${CONFIG.pos_api_key}`
  );

  if (!shopsData.success) {
    console.error("  ✗ POS API lỗi:", shopsData.message);
    return;
  }

  const shops = shopsData.data?.shops || shopsData.shops || [];
  console.log(`  → Tìm thấy ${shops.length} shop(s)`);

  for (const shop of shops) {
    const shopId = shop.id;
    console.log(`  → Kéo đơn từ shop: ${shop.name} (ID: ${shopId})`);

    const ordersData = await get(
      `https://pos.pages.fm/api/v1/shops/${shopId}/orders?api_key=${CONFIG.pos_api_key}&page_size=${CONFIG.page_size}&page_number=1`
    );

    if (!ordersData.success) {
      console.error("  ✗ Lỗi lấy orders:", ordersData.message);
      continue;
    }

    const orders = ordersData.data?.orders || ordersData.orders || [];
    console.log(`    → ${orders.length} đơn hàng`);

    // Map Pancake order → Lark Pancake Leads & Đơn Hàng
    const records = orders.map((order) => ({
      "Tên Khách Hàng": order.customer?.name || order.billing?.name || null,
      "Số Điện Thoại": order.customer?.phone || order.billing?.phone || null,
      "Loại": "Đơn Hàng",
      "Nguồn": "Pancake POS",
      "Mã Đơn Hàng": String(order.code || order.id || ""),
      "Sản Phẩm": order.items?.map((i) => i.name).join(", ") || null,
      "Tổng Tiền": order.total_price || order.total || null,
      "Trạng Thái Đơn": order.status || null,
      "Thời Gian Tương Tác": order.created_at
        ? new Date(order.created_at).getTime()
        : null,
    }));

    console.log(`    → Đang ghi ${records.length} đơn vào bảng Pancake...`);
    larkBatchCreate(CONFIG.table_pancake, records);
  }
}

// ── MAIN ──────────────────────────────────────────────────────────────────
(async () => {
  console.log("🚀 Bắt đầu sync Pancake → Lark Base");
  console.log("   Base: CRM THÚY THÚY");

  await syncLeads();
  await syncOrders();

  console.log("\n✅ Hoàn tất!");
})();
