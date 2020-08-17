require('dotenv').config();

const Discord = require("discord.js");
const client = new Discord.Client();


client.once('ready', () => {
    console.log("hello ready")
})

client.on("message", message => {
    if (message.author.bot){
        return;
    }
    if (message.content.slice(0) == "117"){
        message.channel.send("Finish the fight!");        
    }
    console.log(message);
})

const token = process.env.API_TOKEN;
client.login(token);



