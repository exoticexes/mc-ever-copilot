# 🤖 MC-Ever-Copilot - Minecraft AFK Bot

Minecraft sunucusunda sadece zıplayan basit bir AFK bot.

## 📋 Özellikler

- ✅ Otomatik bağlanma
- ✅ 10 saniyede bir zıplama
- ✅ Hata yönetimi
- ✅ Türkçe çıktı
- ✅ GeyserMC uyumlu (Java/Bedrock)

## 🚀 Kurulum

### Gereksinimler
- Node.js 16+ 
- npm

### Adımlar

1. Repository'yi klonla:
```bash
git clone https://github.com/exoticexes/mc-ever-copilot.git
cd mc-ever-copilot
```

2. Bağımlılıkları yükle:
```bash
npm install
```

3. Botu başlat:
```bash
npm start
```

## ⚙️ Yapılandırma

`.env` dosyasında ayarları düzenleyebilirsiniz:

```env
HOST=dplus.falix.gg
PORT=28014
BOT_NAME=ExEB0t
VERSION=1.26.13.1
JUMP_INTERVAL=10000
```

- `HOST`: Sunucu IP adresi
- `PORT`: Sunucu portu
- `BOT_NAME`: Bot kullanıcı adı
- `VERSION`: Minecraft sürümü
- `JUMP_INTERVAL`: Zıplama aralığı (milisaniye)

## 📝 Kullanım

Bot otomatik olarak sunucuya bağlanır ve zıplamaya başlar.

Botu kapatmak için: `Ctrl + C`

## 🔧 Geliştirme

Nodemon ile canlı yeniden yükleme:
```bash
npm run dev
```

## 📄 Lisans

MIT

## 👨‍💻 Yazar

exoticexes
