const TelegramBot = require('node-telegram-bot-api');

// Your Telegram Bot Token (from BotFather)
const token = 'YOUR_BOT_TOKEN';  // Replace with your bot's token
const bot = new TelegramBot(token, { polling: true });

// URL of the game hosted on GitHub Pages
const webAppUrl = 'https://boo-beard.github.io/MogginsRun/';  // Replace with your game URL

// Handle the "/start" command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  // Send the "Play Game" button
  bot.sendMessage(chatId, 'Click below to start the game!', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Play Game',
            web_app: { url: webAppUrl },  // This links to your GitHub Pages game
          },
        ],
      ],
    },
  });
});

bot.startPolling();  // Start the bot
