
// redeploy-trigger 2026-07-06// Cloudflare Pages Function — nhận callback OAuth từ TikTok sau khi chủ tài khoản
// cho phép ứng dụng "Ami Makeup Auto Post" đăng bài thay mặt họ.
//
// Cần cấu hình các biến môi trường trong Cloudflare Pages (Settings > Environment variables):
// TIKTOK_CLIENT_KEY    - Client key của app TikTok
// TIKTOK_CLIENT_SECRET - Client secret (đánh dấu "Encrypt")
// TIKTOK_REDIRECT_URI  - https://thuytranmakeup.com/api/auth/tiktok/callback
//
// Tùy chọn: liên kết KV Namespace tên "TIKTOK_TOKENS" (Settings > Functions > KV namespace bindings)
// để tự động lưu access_token/refresh_token. Nếu chưa liên kết, trang sẽ chỉ hiển thị token để copy tay.

const TOKEN_URL = 'https://open.tiktokapis.com/v2/oauth/token/';

export async function onRequestGet(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    const error = url.searchParams.get('error');
    const errorDescription = url.searchParams.get('error_description');

  if (error) {
        return html(`<h2>Đăng nhập TikTok thất bại</h2><p>${escapeHtml(error)}: ${escapeHtml(errorDescription || '')}</p>`, 400);
  }

  if (!code) {
        return html('<h2>Thiếu mã "code" từ TikTok.</h2>', 400);
  }

  if (!env.TIKTOK_CLIENT_KEY || !env.TIKTOK_CLIENT_SECRET) {
        return html('<h2>Thiếu cấu hình TIKTOK_CLIENT_KEY / TIKTOK_CLIENT_SECRET trên Cloudflare Pages.</h2>', 500);
  }

  const redirectUri = env.TIKTOK_REDIRECT_URI || `${url.origin}/api/auth/tiktok/callback`;

  try {
        const tokenRes = await fetch(TOKEN_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Cache-Control': 'no-cache' },
                body: new URLSearchParams({
                          client_key: env.TIKTOK_CLIENT_KEY,
                          client_secret: env.TIKTOK_CLIENT_SECRET,
                          code,
                          grant_type: 'authorization_code',
                          redirect_uri: redirectUri,
                }),
        });
        const tokenData = await tokenRes.json();

      if (tokenData.error) {
              return html(`<h2>Lỗi khi đổi mã lấy token</h2><pre>${escapeHtml(JSON.stringify(tokenData, null, 2))}</pre>`, 502);
      }

      // Lưu token vào KV nếu đã cấu hình binding "TIKTOK_TOKENS"
      if (env.TIKTOK_TOKENS) {
              await env.TIKTOK_TOKENS.put('tiktok_account_default', JSON.stringify({
                        access_token: tokenData.access_token,
                        refresh_token: tokenData.refresh_token,
                        open_id: tokenData.open_id,
                        scope: tokenData.scope,
                        expires_in: tokenData.expires_in,
                        refresh_expires_in: tokenData.refresh_expires_in,
                        obtained_at: Date.now(),
              }));
              return html('<h2>✅ Kết nối TikTok thành công!</h2><p>Đã lưu token, bạn có thể đóng trang này.</p>');
      }

      // Chưa cấu hình KV — hiển thị tạm để lưu thủ công
      return html(`
            <h2>✅ Đăng nhập TikTok thành công</h2>
                  <p><b>Lưu ý:</b> Chưa cấu hình KV lưu trữ, vui lòng lưu thông tin dưới đây thủ công (giữ bí mật):</p>
                        <pre>${escapeHtml(JSON.stringify(tokenData, null, 2))}</pre>
                            `);
  } catch (err) {
        return html(`<h2>Lỗi hệ thống</h2><pre>${escapeHtml(String(err && err.message || err))}</pre>`, 500);
  }
}

function html(body, status = 200) {
    return new Response(`<!DOCTYPE html><html><head><meta charset="utf-8"><title>TikTok Callback</title></head><body style="font-family:sans-serif;max-width:600px;margin:40px auto;">${body}</body></html>`, {
          status,
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
}

function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
