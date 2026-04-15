module.exports = {
  server: {
    host: process.env.HOST || 'dplus.falix.gg',
    port: parseInt(process.env.PORT) || 28014,
    version: process.env.VERSION || '1.26.13.1'
  },
  bot: {
    username: process.env.BOT_NAME || 'ExEB0t',
    jumpInterval: parseInt(process.env.JUMP_INTERVAL) || 10000
  }
};
