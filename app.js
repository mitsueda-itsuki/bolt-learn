const { App } = require('@slack/bolt');
const { config } = require('dotenv');
config();

const { null_po } = require('./scripts/null_po')

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message('hello', async ({ message, say }) => {
  await say(`Hello <@${message.user}>!`);
});

app.message('ぬるぽ', null_po);

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();
