/**
* Thanks To
* Allah S.W.T
* Ortu
* Riyo XDZ
* Dhika Ardiant
* All Creator Bot
* All Subscriber Ku
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['60108026373'] //GANTI NOMOR KALIAN
global.premium = ['60108026373'] //GANTI NOMOR KALIAN
global.packname = 'Synxbotz-MD' //TERSERAH GANTI APA GAK
global.author = 'Synxstore-MD' //TERSERAH
global.sessionName = 'lolibot' //JANGAN DIGANTI KALO GAK MAU EROR
global.prefa = ['','!','.','🐦','🐤','🗿'] //JANGAN DI GANTI
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group Bang!',
    botAdmin: 'Jadiin Admin Dulu Lah Bot Nya Tolol Kali Kau Bang',
    eror: 'Fitur Error',
    owner: 'Fitur Khusus Synxbotz-MD',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Wait Loading! Orang Sabar Disayang Janda...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/apri.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
