const { Client, IntentsBitField } = require('discord.js')
require('dotenv').config()
const wait = require('node:timers/promises').setTimeout;

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

client.on('interactionCreate', async(interaction) => {
    if(!interaction.isChatInputCommand()) return


    try {
         if(interaction.commandName === 'hey') {
        await interaction.deferReply({ ephemeral: true });
        await interaction.followUp('hey there!');
    }

    if(interaction.commandName === 'ping') {
        
        await interaction.deferReply({ ephemeral: true });
        await interaction.followUp('pong!');
    }
    } catch (error) {
        console.log(error)
    }
   
})

client.login(process.env.TOKEN)