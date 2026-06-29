import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import https from "https";

const TOKEN = process.env.PANCAKE_TOKEN || "";
const PAGE_ID = process.env.PANCAKE_PAGE_ID || "";
const POS_API_KEY = process.env.PANCAKE_POS_KEY || "";

const BASE = "https://pages.fm/api/public_api/v1";
const POS_BASE = "https://pos.pages.fm/api/v1";

function request(url, method = "GET", body = null) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const options = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      method,
      headers: { "Content-Type": "application/json", Accept: "application/json" },
    };
    const req = https.request(options, (res) => {
      let data = "";
      res.on("data", (c) => (data += c));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch {
          resolve({ success: false, message: "Parse error: " + data.slice(0, 200) });
        }
      });
    });
    req.on("error", reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

function nowUnix() {
  return Math.floor(Date.now() / 1000);
}

function daysAgoUnix(days) {
  return nowUnix() - days * 86400;
}

const server = new McpServer({
  name: "pancake",
  version: "1.0.0",
});

// ── Tool: get_conversations ─────────────────────────────────────────────────
server.tool(
  "get_conversations",
  "Lấy danh sách hội thoại từ Pancake. Mặc định 7 ngày gần nhất.",
  {
    days_back: z.number().int().min(1).max(30).default(7).describe("Số ngày nhìn về quá khứ (1-30)"),
    limit: z.number().int().min(1).max(100).default(20).describe("Số hội thoại tối đa"),
    page_number: z.number().int().min(1).default(1).describe("Trang"),
    page_id: z.string().optional().describe("Page ID (mặc định dùng PANCAKE_PAGE_ID)"),
  },
  async ({ days_back, limit, page_number, page_id }) => {
    const pid = page_id || PAGE_ID;
    if (!pid) return { content: [{ type: "text", text: "Lỗi: Chưa có PANCAKE_PAGE_ID" }] };

    const since = daysAgoUnix(days_back);
    const until = nowUnix();
    const url = `${BASE}/pages/${pid}/conversations?access_token=${TOKEN}&since=${since}&until=${until}&page_number=${page_number}&limit=${limit}`;

    const data = await request(url);
    if (!data.success) {
      return { content: [{ type: "text", text: `Lỗi API: ${data.message} (code: ${data.error_code})` }] };
    }

    const convs = data.conversations || [];
    if (!convs.length) {
      return { content: [{ type: "text", text: `Không có hội thoại nào trong ${days_back} ngày qua.` }] };
    }

    const lines = convs.map((c, i) => {
      const name = c.from?.name || c.customers?.[0]?.name || "(Ẩn danh)";
      const phone = (c.recent_phone_numbers || [])[0] || "";
      const snippet = (c.snippet || "").slice(0, 80);
      const time = c.updated_time ? new Date(c.updated_time * 1000).toLocaleString("vi-VN") : "";
      return `${i + 1}. [${c.id}] ${name}${phone ? " (" + phone + ")" : ""}\n   ${snippet}\n   Lúc: ${time}`;
    });

    return {
      content: [{
        type: "text",
        text: `Tổng: ${data.total} hội thoại. Trang ${page_number}.\n\n${lines.join("\n\n")}`,
      }],
    };
  }
);

// ── Tool: get_messages ──────────────────────────────────────────────────────
server.tool(
  "get_messages",
  "Lấy tin nhắn trong một hội thoại cụ thể.",
  {
    conversation_id: z.string().describe("ID hội thoại (lấy từ get_conversations)"),
    page_id: z.string().optional().describe("Page ID (mặc định dùng PANCAKE_PAGE_ID)"),
    limit: z.number().int().min(1).max(50).default(20).describe("Số tin nhắn"),
    page_number: z.number().int().min(1).default(1).describe("Trang"),
  },
  async ({ conversation_id, page_id, limit, page_number }) => {
    const pid = page_id || PAGE_ID;
    if (!pid) return { content: [{ type: "text", text: "Lỗi: Chưa có PANCAKE_PAGE_ID" }] };

    const url = `${BASE}/pages/${pid}/conversations/${conversation_id}/messages?access_token=${TOKEN}&page_number=${page_number}&limit=${limit}`;
    const data = await request(url);

    if (!data.success) {
      return { content: [{ type: "text", text: `Lỗi API: ${data.message}` }] };
    }

    const msgs = data.messages || data.data || [];
    if (!msgs.length) {
      return { content: [{ type: "text", text: "Hội thoại chưa có tin nhắn nào." }] };
    }

    const lines = msgs.map((m) => {
      const sender = m.from?.name || (m.is_reply ? "Trang" : "Khách");
      const text = m.message || m.text || m.body || "(media)";
      const time = m.created_time ? new Date(m.created_time * 1000).toLocaleString("vi-VN") : "";
      return `[${time}] ${sender}: ${text}`;
    });

    return { content: [{ type: "text", text: lines.join("\n") }] };
  }
);

// ── Tool: send_message ──────────────────────────────────────────────────────
server.tool(
  "send_message",
  "Gửi tin nhắn trả lời vào một hội thoại trên Pancake.",
  {
    conversation_id: z.string().describe("ID hội thoại"),
    message: z.string().describe("Nội dung tin nhắn cần gửi"),
    page_id: z.string().optional().describe("Page ID (mặc định dùng PANCAKE_PAGE_ID)"),
  },
  async ({ conversation_id, message, page_id }) => {
    const pid = page_id || PAGE_ID;
    if (!pid) return { content: [{ type: "text", text: "Lỗi: Chưa có PANCAKE_PAGE_ID" }] };

    const url = `${BASE}/pages/${pid}/conversations/${conversation_id}/messages?access_token=${TOKEN}`;
    const data = await request(url, "POST", { message });

    if (!data.success) {
      return { content: [{ type: "text", text: `Gửi thất bại: ${data.message}` }] };
    }

    return { content: [{ type: "text", text: `Đã gửi tin nhắn thành công.` }] };
  }
);

// ── Tool: get_orders ────────────────────────────────────────────────────────
server.tool(
  "get_orders",
  "Lấy danh sách đơn hàng từ Pancake POS. Cần PANCAKE_POS_KEY.",
  {
    shop_id: z.string().optional().describe("Shop ID (để trống sẽ tự tìm)"),
    limit: z.number().int().min(1).max(100).default(20).describe("Số đơn hàng"),
    page_number: z.number().int().min(1).default(1).describe("Trang"),
    status: z.string().optional().describe("Lọc theo trạng thái: pending, processing, completed, cancelled"),
  },
  async ({ shop_id, limit, page_number, status }) => {
    if (!POS_API_KEY) {
      return { content: [{ type: "text", text: "Lỗi: Chưa có PANCAKE_POS_KEY. Vào Pancake POS → Cài đặt → Ứng dụng → API KEY để lấy." }] };
    }

    let sid = shop_id;
    if (!sid) {
      const shops = await request(`${POS_BASE}/shops?api_key=${POS_API_KEY}`);
      if (!shops.success) return { content: [{ type: "text", text: `Lỗi lấy shops: ${shops.message}` }] };
      const shopList = shops.data?.shops || shops.shops || [];
      if (!shopList.length) return { content: [{ type: "text", text: "Không tìm thấy shop nào." }] };
      sid = shopList[0].id;
    }

    let url = `${POS_BASE}/shops/${sid}/orders?api_key=${POS_API_KEY}&page_size=${limit}&page_number=${page_number}`;
    if (status) url += `&status=${status}`;

    const data = await request(url);
    if (!data.success) {
      return { content: [{ type: "text", text: `Lỗi API POS: ${data.message}` }] };
    }

    const orders = data.data?.orders || data.orders || [];
    if (!orders.length) return { content: [{ type: "text", text: "Không có đơn hàng nào." }] };

    const lines = orders.map((o, i) => {
      const customer = o.customer?.name || o.billing?.name || "N/A";
      const phone = o.customer?.phone || o.billing?.phone || "";
      const code = o.code || o.id || "";
      const total = o.total_price || o.total || 0;
      const status = o.status || "";
      return `${i + 1}. Đơn #${code} | ${customer}${phone ? " " + phone : ""} | ${total.toLocaleString("vi-VN")}đ | ${status}`;
    });

    return {
      content: [{
        type: "text",
        text: `Đơn hàng (trang ${page_number}):\n\n${lines.join("\n")}`,
      }],
    };
  }
);

// ── Tool: search_conversations ──────────────────────────────────────────────
server.tool(
  "search_conversations",
  "Tìm kiếm hội thoại theo tên khách hoặc số điện thoại.",
  {
    query: z.string().describe("Tên khách hoặc số điện thoại cần tìm"),
    page_id: z.string().optional().describe("Page ID"),
    limit: z.number().int().min(1).max(50).default(10).describe("Số kết quả"),
  },
  async ({ query, page_id, limit }) => {
    const pid = page_id || PAGE_ID;
    if (!pid) return { content: [{ type: "text", text: "Lỗi: Chưa có PANCAKE_PAGE_ID" }] };

    const url = `${BASE}/pages/${pid}/conversations/search?access_token=${TOKEN}&q=${encodeURIComponent(query)}&limit=${limit}`;
    const data = await request(url);

    if (!data.success) {
      return { content: [{ type: "text", text: `Tìm kiếm lỗi: ${data.message}` }] };
    }

    const convs = data.conversations || data.data || [];
    if (!convs.length) return { content: [{ type: "text", text: `Không tìm thấy hội thoại nào với "${query}".` }] };

    const lines = convs.map((c, i) => {
      const name = c.from?.name || "(Ẩn danh)";
      const phone = (c.recent_phone_numbers || [])[0] || "";
      return `${i + 1}. [${c.id}] ${name}${phone ? " (" + phone + ")" : ""}`;
    });

    return { content: [{ type: "text", text: `Kết quả cho "${query}":\n\n${lines.join("\n")}` }] };
  }
);

// ── Tool: get_conversation_detail ──────────────────────────────────────────
server.tool(
  "get_conversation_detail",
  "Lấy thông tin chi tiết một hội thoại: thông tin khách, tags, trạng thái.",
  {
    conversation_id: z.string().describe("ID hội thoại"),
    page_id: z.string().optional().describe("Page ID"),
  },
  async ({ conversation_id, page_id }) => {
    const pid = page_id || PAGE_ID;
    if (!pid) return { content: [{ type: "text", text: "Lỗi: Chưa có PANCAKE_PAGE_ID" }] };

    const url = `${BASE}/pages/${pid}/conversations/${conversation_id}?access_token=${TOKEN}`;
    const data = await request(url);

    if (!data.success) {
      return { content: [{ type: "text", text: `Lỗi: ${data.message}` }] };
    }

    const c = data.conversation || data;
    const name = c.from?.name || "(Ẩn danh)";
    const phones = (c.recent_phone_numbers || []).join(", ");
    const tags = (c.tags || []).map((t) => t.name || t).join(", ");
    const status = c.status || "";

    return {
      content: [{
        type: "text",
        text: [
          `ID: ${conversation_id}`,
          `Khách: ${name}`,
          `Điện thoại: ${phones || "Chưa có"}`,
          `Tags: ${tags || "Chưa có"}`,
          `Trạng thái: ${status || "N/A"}`,
          `Ghi chú: ${c.note || "Chưa có"}`,
        ].join("\n"),
      }],
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
