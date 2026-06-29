const client = require('./lark-client');

async function main() {
  try {
    // Lấy danh sách Wiki spaces
    const res = await client.wiki.space.list({});
    console.log('Wiki Spaces:', JSON.stringify(res, null, 2));
  } catch (err) {
    console.error('Lỗi:', err.message || JSON.stringify(err, null, 2));
  }
}

main();
