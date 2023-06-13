//Coded by Tharindu Liyanage 2022
// Edit This File 
const fs = require('fs')
const chalk = require('chalk')
// You can Change this Buttons 
// 👈 You Can change this your choice
global.list = ('☰𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨☰')
global.allmenu = ('☰𝗔𝗟𝗟 𝗠𝗘𝗡𝗨☰')
global.script = ('☰🖤𝗜𝗠𝗔𝗦𝗛𝗔☰')
global.owner = ('🖖𝗝𝗔𝗡𝗜𝗧𝗛🖖')
global.deploy = ('☰𝗖𝗢𝗗𝗘𝗗𝗕𝗬')
global.project = ('☰𝗦𝗨𝗡𝗘𝗧𝗛 𝗣𝗥𝗢𝗝𝗘𝗖𝗧☰')
global.donate = ('☰𝗛𝗘𝗟𝗣☰')
global.stop = ('Stop 🛑')
global.skip = ('Skip ⏩')
global.thanks = ('*You are welcome 💙*')
// 👈 You Can change this your choice
global.nextimg = ('Next Image ➡️')
global.audio = ('🎶 Audio')
global.video = ('Video 📽')
global.yts = ('YTSEARCH 🌐')
global.play = ('Start 🍿')
// 👈 You Can change this your choice

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
