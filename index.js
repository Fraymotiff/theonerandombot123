const Discord = require ('discord.js');

const client = new Discord.Client();


client.once(' bot is now online!', () => {
     //Code for the bot to do when starting up.
     })

const PREFIX ='!'



client.once('ready', () => {
     //Code for the bot to do when starting up.
     })
     console.log('random sender is now online!')
   
     client.on('message', (message) => {
     const PREFIX = '!'
     

     
     if (message.content.startsWith (PREFIX + "random"))
     let   = Math.floor(Math.random()* 179) 
      message.channel.send ("will it be blessed? will it be cursed? Let's give it everything we got! It's random time!",  {files: ["./random/" + imageNumber + ".png"]} )
   
              
             
             
     }
    );
    
    



    client.login(process.env.token);

