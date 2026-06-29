const client = require('./lark-client');

async function main() {
  try {
    // Lấy danh sách chat mà bot tham gia
    const res = await client.im.chat.list({});
    console.log('Chats:', JSON.stringify(res, null, 2));
  } catch (err) {
    console.error('Lỗi:', err.message || JSON.stringify(err, null, 2));
  }
}

main();
