let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~IRLAN Y*

Ketik di *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install imagemagick
4) $pkg install nodejs

Untuk Githubnya..
5) $git clone https://github.com/irlan563/1RL4N_BOT
6) $ls
7) $cd 1RL4N_BOT

yang *terakhirr*..
Penginstalannya cuy :)
8) npm i
9) node index.js

_Bisa kalian FOLLOWS_
*Instagram kami:*
https://www.instagram.com/irlan_ynrdi
`.trim(), m)
}
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

