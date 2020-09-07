require('dotenv').config();

const Discord = require("discord.js");
const fs = require('fs');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandPath = './src/commands'
const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('js'));
for (const file of commandFiles) {
    const command = require(`${commandPath}/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("hello ready")
})

const activation = "john halo";
client.on("message", message => {
    if (message.author.bot) {
        return;
    }
    if (message.content.slice(0, activation.length).toLowerCase() == activation) {
        const args = message.content.slice(activation.length + 1);
        if (args === "") {
            return client.commands.get("quoteHandler").execute(message, args)
        }
        // See if quote prompt is in quote repo

        contextQuoteHandled = client.commands.get("contextQuoteHandler").execute(message, args)
        if (contextQuoteHandled){
            return;
        }
            
        // else {
        //     // Get random quote from repository
        // }

    }

    console.log(message);
})

const token = process.env.API_TOKEN;
client.login(token);



