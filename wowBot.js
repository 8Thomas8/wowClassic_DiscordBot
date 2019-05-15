const Discord = require('discord.js')
const bot = new Discord.Client()

// This function calculate time pending
function dateDiff(dateATM, releaseDate){
  result = {} 
  pendingTime = releaseDate - dateATM;

  // Calc seconds
  pendingTime = Math.floor(pendingTime/1000);
  result.sec = pendingTime % 60;

  // Calc minutes
  pendingTime = Math.floor((pendingTime-result.sec)/60);
  result.min = pendingTime % 60;

  // Calc hours
  pendingTime = Math.floor((pendingTime-result.min)/60);
  result.hour = pendingTime % 24;
   
  // Calc days
  pendingTime = Math.floor((pendingTime-result.hour)/24);
  result.day = pendingTime;
   
  return result;
}

// This function calculte time pending from now to the release date
function calcRelease(dateATM) {
  releaseDate = new Date("August 27 2019 00:00");

  realPendingTime = dateDiff(dateATM, releaseDate);

  return "Il reste "+realPendingTime.day+" jours, "+realPendingTime.hour+" heures, "+realPendingTime.min+" minutes et "+realPendingTime.sec+" secondes avant la sortie de WOW Classic";
}

// Bot send the message in the same channel !wowc was send
bot.on('message', function(message) {
  if (message.content === '!wowc') {
    dateATM = new Date();
    msg = calcRelease(dateATM);
    message.channel.send(msg)
  }
})

// Bot login informations
bot.login('Token here') // You have to set your token