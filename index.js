const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
  console.log('Bot is online!');
});

// Der Bot verbindet sich mit dem Token, das als Umgebungsvariable gesetzt ist
client.login(process.env.DISCORD_TOKEN);
