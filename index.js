const Discord = require('discord.js');
const bot = new Discord.Client();
const fetch = require('node-fetch');

const token = 'NjA0NDUwOTI1MjkzMzM4NjMx.XUDNdQ.2noPEoUAyovpNXEnidYPxq8hJZ0';

const api = "https://api.poe.watch/itemdata";

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
        case "pc":
            fetch(api).then(res => res.text()).then(body => console.log(body));
    }
})

bot.login(token);