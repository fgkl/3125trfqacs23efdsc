
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const token = 'OTc2OTAxMzYwMzA4MDgwNjgx.GG_s93.yILpFPBRPXCoUbID2mXf88m7fzcbtImz9KasMw'
const prefix = "-"
const request = require('request');
const path = require('path');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const { Server } = require('http')


// Status message
client.once('ready', async () => {
  console.log('Bot is online!');
  client.user.setActivity("Upload file to obf", {
    type: "WATCHING"
  });
});
client.on('messageCreate', async (message) => {
  

  if (message.author.bot) return;
  
  // inside a command, event listener, etc.
  const exampleEmbed = new MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Obfuscated script.')
    .setAuthor({ name: 'Soloware™ obfuscator', iconURL: message.author.avatarURL, url: message.author.avatarURL })
    .setTimestamp()
  //
  

  //
  const file = message.attachments.first()?.url;
  if (!file) return console.log('No attached file found');
  //
  try {
    const response = await fetch(file);
    if (!response.ok)
      return message.channel.send(
        'There was an error with fetching the file:',
        response.statusText,
      );
    console.log(message.author.toJSON())
    //
    const text = await response.text();
    const f = fs.writeFileSync('ob.lua', text)
    if (text) {
      require('./d.js').obfuscate(
        fs.readFileSync('./ob.lua').toString()
      ).then(([outputPath, settings]) => {
        console.log(`saved to '${outputPath}'`)
        message.reply({
          embeds: [exampleEmbed],
        })
        message.channel.send({
          
          files: [
            "./temp/output-1.lua"
            
          ],
        }); 
      //
      }).catch((err) => {
        console.log("FAIOIIL", err)
      })
    }
  //
  } catch (error) {
    console.log(error);
  }
})
//

client.on("messageDelete", async (message) => {
    message.channel.send({
      files:[
        "./vids/dgmlmao_20220514_4.mp4"
      ]
    })

})

client.on("typingStart",async(c) =>{
  c.channel.send({
    content:"don't type anything, send an file!"
  })
})
//
client.on("rateLimit",async (cool) =>{
   cool.channel.send({
     content: "Bot is at ratelimit"
   })
})
client.login(token);