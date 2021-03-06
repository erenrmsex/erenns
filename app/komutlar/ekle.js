const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  let kisi = message.mentions.members.first()
  if(!kisi) return message.channel.send('Birisini etiketlemelisin.')
  if(!args[1]) return message.channel.send('Paylaşım kategorisi girmen gerekiyor.')
   if(!['gif','pp'].includes(args[1])) return message.channel.send('Kategorileri doğru girmelisin.')
   if(!args[2]) return message.channel.send('Sayı girmelisin.')
  if(isNaN(args[2]))return message.channel.send('Sayı girmelisin.')
  if(args[2].startsWith('-')) return message.channel.send('Ekleme yapıyorsun çıkarma değil.')
  db.add(`${args[1]}.${kisi.user.id}`,args[2])
  db.add(`sayı.${kisi.user.id}`,args[2])
  message.channel.send('Belirtilen kadar puan ekledim.')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'ekle',
  description: 'lrows',
  usage: 'kaldır'
}
