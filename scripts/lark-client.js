const lark = require('@larksuiteoapi/node-sdk');

const client = new lark.Client({
  appId: 'cli_aaaa95c08df8de17',
  appSecret: 'IzxgJr2XlW6FN8aiTGg9VdCJhkvXUiUO',
  disableTokenCache: false,
});

module.exports = client;
