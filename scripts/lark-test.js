const lark = require('@larksuiteoapi/node-sdk');

const client = new lark.Client({
  appId: 'cli_aaaa95c08df8de17',
  appSecret: 'IzxgJr2XlW6FN8aiTGg9VdCJhkvXUiUO',
});

async function main() {
  try {
    // Test lấy tenant access token
    const tokenMgr = client.tokenManager;
    const token = await tokenMgr.getTenantAccessToken();
    console.log('Kết nối thành công!');
    console.log('Tenant Access Token:', token.token ? token.token.substring(0, 20) + '...' : token);
  } catch (err) {
    console.error('Lỗi kết nối:', err.message || JSON.stringify(err, null, 2));
  }
}

main();
