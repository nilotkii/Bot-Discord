const Discord = require('discord.js');

const bot = new Discord.Client();

const token = (require('./credentials/discord_production.json').token);

const rankingJSON = require('./data/ranking_production.json')
const ranking = Object.keys(rankingJSON).map(i => rankingJSON[Number(i)]);


bot.on("ready", () => {
    console.log("I'm ready!!");
});

bot.on("message", message => {
    // Se a mensagem for "...""
    if (message.content === 'Nezu: ...') {

        console.log(message.author.username+" calls > ...");

        // Envie
        message.reply(
            'Estamos começando a sentir os efeitos de "perder nosso símbolo" cada vez mais com o passar do tempo...o que precisamos agora é de um reavivamento. Pelo menos para os alunos...precisamos apresentá-los com perspectivas de um futuro melhor.'
        );
    }
});

bot.on("message", message => {
    // Se a mensagem for "..."
    if (message.content === 'Nezu: meus pts') {

        console.log(message.author.username+" calls > meus pts");

        member = ranking.find( member => {
            return member.nick == message.author.username
        })

        if(member == undefined) {
            member = {pontos : 0};
        }

        // Envie
        message.reply('você tem **'+member.pontos+'pts**!');
    }
});

bot.on("message", message => {
    // Se a mensagem for "..."
    if (message.content === 'Nezu: rank') {

        console.log(message.author.username+" calls > rank");
        
        rank = ':medal: RANKING :medal:\n\n';

        console.log("RANKING:", ranking)

        ranking.forEach( member => {
            rank += member.nick + ' - ' +'**'+member.pontos+'pts**\n'
        })
        
        // Envie
        message.channel.send(rank);
    }
});

bot.on("message", message => {
     // If the message is '!rip'
    if (message.content === 'Nezu: help') {

        console.log(message.author.username+" calls > help");

        // Create the attachment using MessageAttachment
        const attachment = new Discord.MessageAttachment('https://media1.tenor.com/images/18adc8ac3740794d44a6f0e57d9d3aac/tenor.gif');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});

// Log our bot in using the token from https://discord.com/developers/applications
bot.login(token);

