const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'Place Your Bot Token Here';

const PREFIX = '!';

var NOTIFY_CHANNEL;
bot.on('ready', () => {
    console.log('The Bot is now Online');  
}); 
 
 //if using visual studio code you can test the bot by typing "node ." into your termingal

//WELCOMES THE NEW GUY 
bot.on('guildMemberAdd', member =>{
    
    const channel = member.guild.channels.find(channel => channel.name === "general-chat");
    if(!channel) return;

    channel.send(`Welcome to the server!, ${member}, please enjoy your stay!`)
});

//bestanime beginning

const bestshow = ["Show1","Show2", "Show3", "Show4"];

bot.on('message', function (message) {
    // stop from responding to other bots
    if (message.author.bot) return;
    
   
    if (!message.content.startsWith("!")) return;


    var args = message.content.substring("!".length).split(" ");

    switch (args[0].toLowerCase()) {
        case "bestshows":
            var response = bestshow [Math.floor(Math.random()*bestshow .length)];

            message.channel.send(response).then().catch(console.error);
            break;
        default:
            break;
    }
});
//bestanime ending

//King Of The Hill Command

const kingresponses = ["Do i look like I know what a command is?"," https://www.youtube.com/watch?v=tJdgErAfiRQ ", "Dammit Bobby", "https://i.imgflip.com/thhoe.jpg"];

//event handler
bot.on('message', function (message) {
    // stop from responding to other bots
    if (message.author.bot) return;

   
    if (!message.content.startsWith("!")) return;


    var args = message.content.substring("!".length).split(" ");

    switch (args[0].toLowerCase()) {
        case "king":
            var response = kingresponses [Math.floor(Math.random()*kingresponses .length)];

            message.channel.send(response).then().catch(console.error);
            break;
        default:
            break;
    }
});

//End of King of The Hill

// Nut Facts 
const nutresponses = ["Peanuts are better than Walnuts", "Peanuts are actually Legumes not Nuts", "On average there are over 500 peanuts in a jar of Peanut Butter", "Arachibutyrophobia is the fear of peanut butter sticking to the roof of your mouth.", "The Guinnes World Record for peanut throwing is 37.92 meters(124 feet & four inches)", "Mr.Peanut Our Lord and Saviour died on January 22, 2020, and was Resurrected In the Second Half of the Super Bowl in front of the world"];

//event handler
bot.on('message', function (message) {
    // stop from responding to other bots
    if (message.author.bot) return;

   
    if (!message.content.startsWith("!")) return;


    var args = message.content.substring("!".length).split(" ");

    switch (args[0].toLowerCase()) {
        case "nutfact":
            var response = nutresponses [Math.floor(Math.random()*nutresponses .length)];

            message.channel.send(response).then().catch(console.error);
            break;
        default:
            break;
    }
});

//End of Nut Facts

const hugmeresponses = ["I hate hugs", "No thank you", "Maybe some other time? ;D", "pls no hugs", "*hugs you*", "Ok just this once https://i.redd.it/jymcdjuela3z.jpg", "https://images.theabcdn.com/i/12206892"];

bot.on('message', function (message) {
    // stop from responding to other bots
    if (message.author.bot) return;
       
    if (!message.content.startsWith("!")) return;

    var args = message.content.substring("!".length).split(" ");

    switch (args[0].toLowerCase()) {
        case "hugme":
            var response = hugmeresponses [Math.floor(Math.random()*hugmeresponses .length)];

            message.reply(response).then().catch(console.error);
            break;
        default:
            break;
    }
});

//Hello code 

const helloresponses = ["Hello!", "Hi Friend", "Heyo ＼(.o.)ノ"];

bot.on('message', function (message) {
    // stop from responding to other bots
    if (message.author.bot) return;
       
    if (!message.content.startsWith("!")) return;

    var args = message.content.substring("!".length).split(" ");

    switch (args[0].toLowerCase()) {
        case "hi":
            var response = helloresponses [Math.floor(Math.random()*helloresponses .length)];

            message.reply(response).then().catch(console.error);
            break;
        default:
            break;
    }
});


//noticeme

const noticeresponses = ["no", "The Bot didn't hear you*"];

bot.on('message', function (message) {
    // stop from responding to other bots
    if (message.author.bot) return;
       
    if (!message.content.startsWith("!")) return;

    var args = message.content.substring("!".length).split(" ");

    switch (args[0].toLowerCase()) {
        case "noticeme":
            var response = noticeresponses [Math.floor(Math.random()*noticeresponses .length)];

            message.reply(response).then().catch(console.error);
            break;
        default:
            break;
    }
});

const commands = ["```MY COMMANDS ARE:!hi, !king, !bestshow, !nutfact, !noticeme,```"];

bot.on('message', function (message) {
    // stop from responding to other bots
    if (message.author.bot) return;
    
   
    if (!message.content.startsWith("!")) return;


    var args = message.content.substring("!".length).split(" ");

    switch (args[0].toLowerCase()) {
        case "chants":
            var response = chants [Math.floor(Math.random()*chants .length)];

            message.channel.send(response).then().catch(console.error);
            break;
        default:
            break;
    }
});


const ping = ["Don't ping me", "PONG!!!", "PONG!! PING!! PONG!!!" ];

bot.on('message', function (message) {
    // stop from responding to other bots
    if (message.author.bot) return;
    
   
    if (!message.content.startsWith("!")) return;


    var args = message.content.substring("!".length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            var response = ping [Math.floor(Math.random()*ping .length)];

            message.reply(response).then().catch(console.error);
            break;
        default:
            break;
    }
});

bot.login(token);



