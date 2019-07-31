const Discord = require('discord.js');
const bot = new Discord.Client();
const fetch = require('node-fetch');

const token = '';

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
            fetch(api).then(r => {
                let body = r.body;
                let name = args[1];
                if(!name) return message.channel.send("Suppy a name!");
                if(!isNaN(name)) return message.channel.send("Suppy a valid name!");

                let entry = body.find(post => post.name === name);
                console.log(body);
        });
    }
});

bot.login(token);