const { Client, GatewayIntentBits, Message, messageLink } = require("discord.js");
const { Z_ASCII } = require("zlib");
const client = new Client({
  intents: Object.values(GatewayIntentBits).reduce((a, b) => a | b)
});
const { setTimeout } = require('node:timers/promises');

let id_jrole = "1048569758364205066";
//"1048854190564323388"; にとねころーる
//"1048569758364205066"; あまねころーる


client.on("ready", async () => {
  console.log(`${client.user.tag} でログインしています。`);
  const data = [{
    name: "参拝",
    description: "月雲神社へようこそ.....",
  }];
  await client.application.commands.set(data, '1048567387085082706');
  client.user.setActivity("月雲神社の掃除をプレイ中｜ver1.0｜ ⠀⠀⠀⠀⠀⠀⠀")

});
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) {
    return;
  }
  if (interaction.commandName === '参拝') {
    if (interaction.member.roles.cache.has(id_jrole) === false) {
      interaction.reply("<@!" + interaction.member.id + "> さん。ようこそ月雲神社へ。");
      const join = await interaction.member.roles.add(id_jrole)
      await setTimeout(3000);
      await interaction.deleteReply()
    } else {
      const joined = await interaction.reply("<@!" + interaction.member.id + "> さんは既に実行しているようです。");
      await setTimeout(3000);
      await interaction.deleteReply()
    };
  }
});

client.on("messageCreate", async msg => {

  if (msg.content === "z.参拝" & msg.member.user.bot != true) {
    if (msg.member.roles.cache.has(id_jrole) === false) {
      const join = await msg.channel.send("<@!" + msg.member.id + "> さん。ようこそ月雲神社へ。");
      await msg.member.roles.add(id_jrole)
      await setTimeout(3000);
      await join.delete()
    } else {
      const joined = await msg.channel.send("<@!" + msg.member.id + "> さんは既に実行しているようです。");
      await setTimeout(3000);
      await joined.delete()
    }

  }
}
);
client.login(BOT_TOKEN);
