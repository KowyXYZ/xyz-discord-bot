require('dotenv').config()
const {REST, Routes, version} = require('discord.js')

const commands = [
    {
        name: 'hey',
        description: 'Replies with hEy!'
    },
    {
      name: 'ping',
      description: 'Replies with pong!'
  }
]

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})()