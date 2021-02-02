const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();

const prefix = '!';

client.on('message',function(message){
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ')
  const command = args.shift().toLowerCase();

  if(command === 'lag'){
    const timeLag = message.createdTimestamp - Date.now();
    message.reply(`This took latency of ${timeLag}ms.`)
  }

  else if(command === 'hug'){
    message.channel.send(`Hugs ${message.author}! Wow you're a great hugger`);
  }

  else if(command === 'hi'){
    message.channel.send(`Hello ${message.author}`)
  }
  else if(command === 'meh'){
    message.channel.send(`meh`)
  }


});

client.login(config.BOT_TOKEN);
