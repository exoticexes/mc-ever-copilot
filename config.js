module.exports = {
  server: {
    host: process.env.HOST || 'play.everyones.run.place',
    port: parseInt(process.env.PORT) || 24107,
    version: process.env.VERSION || '1.21.11'
  },
  bot: {
    username: process.env.BOT_NAME || 'ExEB0t',
    jumpInterval: parseInt(process.env.JUMP_INTERVAL) || 10000
  }
};
