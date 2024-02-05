import { Client, Events, GatewayIntentBits, Interaction } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const token = process.env.TOKEN;

console.info("info: login success!");

client.on(Events.ClientReady, async () => {
  if (client.application) {
    console.log(`Logged in as ${client?.user?.tag}!`);
  }
});

client.on(Events.MessageCreate, (msg) => {
  if (msg.content === "ping") {
    // Discord.Message 객체의 content 프로퍼티가 'ping' 일 때
    msg.reply("Pong!"); // reply 는 멘션 + , msg 로 출력됩니다.
  } else if (msg.content === "쿠크" || msg.content === "쿠크세이튼") {
    msg.reply(
      "https://media.discordapp.net/attachments/1195567759166279715/1203601989791912026/ECBFA0ED81ACEB85B81-3EAB480EBACB8.png?ex=65d1b0b4&is=65bf3bb4&hm=40cedf88e528938a6902e8bc398b587601cfde6ef138d0d1cdb78010ebbee6b9&=&format=webp&quality=lossless&width=717&height=910",
    );
  } else if (msg.content === "비아키스" || msg.content === "비아") {
    msg.reply(
      "https://media.discordapp.net/attachments/1195567759166279715/1203553923890151484/476f69e62d190041.png?ex=65d183f0&is=65bf0ef0&hm=bbe33cd737fb9f4f79b02f46c09a288d042cad097aa7113548343130e04cd289&=&format=webp&quality=lossless&width=743&height=910",
    );
  } else if (msg.content === "아재절단기") {
    msg.reply("https://mokoko.co.kr/old-man-cutter");
  }
});

client.login(token);
