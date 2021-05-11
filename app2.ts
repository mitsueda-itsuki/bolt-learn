import { App, GenericMessageEvent } from "@slack/bolt";
import { config } from "dotenv";
config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

app.message('good morning', async ({message, say}) => {
  await say(`Good night <@${(message as GenericMessageEvent).user}>`)
});

(async () => {
  await app.start(3000);

  console.log('⚡️ Bolt app is running!');
})();
