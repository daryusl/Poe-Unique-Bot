const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjA0NDUwOTI1MjkzMzM4NjMx.XTuJSA.qhQDWJ3DUfY-gvRAWcDsGlVFqDs';

const PREFIX = '!';

bot.on('ready', () => {
    console.log('This bot is online!');
});

bot.on('message', message=> {
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]) {
        case "ping":
            message.reply("pong!");
            break;
        case "website":
            message.channel.sendMessage("www.github.com/daryusl");
            break;
        case "info":
            
    }
})

bot.login(token);