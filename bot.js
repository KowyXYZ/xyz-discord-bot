const { Client, IntentsBitField } = require('discord.js')
require('dotenv').config()

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
})


client.on('ready', (c) => {
    console.log(`${c.user.tag} is online!`)
})

client.on('messageCreate', (msg) => {

    if(msg.author.bot) {
        return;
    }

    if(msg.content === 'hello') {
        msg.reply('sup')
    }
})

client.login(process.env.TOKEN)