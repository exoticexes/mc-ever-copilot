const mineflayer = require('mineflayer');
require('dotenv').config();

const config = {
  host: 'play.everyones.run.place',
  port: 24107,
  username: 'ExEB0t',
  version: '1.21.11'
};

const bot = mineflayer.createBot(config);

let jumpInterval = null;

bot.on('spawn', () => {
  console.log('✅ Bot başarıyla bağlandı!');
  console.log(`🤖 Bot adı: ${bot.username}`);
  console.log(`📍 Sunucu: ${config.host}:${config.port}`);
  console.log('🔄 Zıplama başladı (10 saniyede bir)...\n');
  
  // 10 saniyede bir zıpla
  jumpInterval = setInterval(() => {
    bot.setControlState('jump', true);
    setTimeout(() => {
      bot.setControlState('jump', false);
    }, 100);
    
    const now = new Date().toLocaleTimeString('tr-TR');
    console.log(`[${now}] ⬆️ Zıpladı!`);
  }, 10000);
});

bot.on('error', (err) => {
  console.error('❌ Hata oluştu:', err.message);
});

bot.on('end', () => {
  console.log('🔌 Bot bağlantısı kesildi');
  if (jumpInterval) {
    clearInterval(jumpInterval);
  }
});

bot.on('kicked', (reason) => {
  console.log('⛔ Bot sunucudan atıldı. Sebep:', reason);
});

process.on('SIGINT', () => {
  console.log('\n🛑 Bot kapatılıyor...');
  if (jumpInterval) {
    clearInterval(jumpInterval);
  }
  process.exit(0);
});
