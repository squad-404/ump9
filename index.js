//RECODE By 404 SQUAD

//**TEAM MEMBER LIST**//
//=>Lingz
//=>Felix
//=>Lenz
//=>Arya

//*********THX TO********//
//>RIFAI
//>RADYA
//=======yang nyolong case buat dijadiin konten yt tolong tambahin credits lah coeg====//

const {
	WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_DEFAULT_EPHEMERAL,
	WA_MESSAGE_STUB_TYPES,
	ReconnectMode,
	ProxyAgent,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { help } = require('./src/help')
const imageToBase64 = require('image-to-base64')
const FormData = require('form-data')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, baner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const crypto = require('crypto')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const { fromBuffer } = require('file-type')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const axios = require("axios")
const nodemailer = require("nodemailer");
const phoneNumber = require('awesome-phonenumber')
const loli = new lolis()
const toMs = require('ms')
const chalk = require('chalk')
const ms = require('parse-ms')

const imgbb = require('imgbb-uploader')
const request = require('request')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const ncheck = JSON.parse(fs.readFileSync('./ncheck.json'))
const autosticker = JSON.parse(fs.readFileSync('./autosticker.json'))
const { custom, random } = require('./meme')
const { ind } = require('./language')
const {  owner } = JSON.parse(fs.readFileSync('./config.json'))
const ApiDevolover = ('PunyaIkyAds')
const speed = require('performance-now')

/***********MODULE***********/
const { EmojiAPI } = require("emoji-api");
const tik = require('tiktok-scraper-without-watermark')
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const gis = require('g-i-s');
const got = require("got");
const yts = require( 'yt-search')
const googleIt = require('google-it')
const cron = require('node-cron')
const util = require('util')
const Nekos = require('nekos.life')
const neko = new Nekos()
const { yta, ytv, igdl, upload, uploadImages } = require('./lib/ytdl')
const { Toxic } = require('./lib/Toxic.js')
const { onGoing } = require("./lib/otakudesu.js")
const { newsCnnn} = require('./lib/cnn.js')
const { webp2gifFile } = require("./lib/gif.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { herolist } = require('./lib/herolist.js')
const { fbDown } = require('./lib/fb.js')
const { y2mateA, y2mateV } = require('./lib/y2mate.js')
const translate = require('./lib/translate')
const { cmdadd } = require('./lib/totalcmd.js')
const { weeaboo } = require('./lib/weeaboo.js')
const { lirikLagu } = require('./lib/lirik.js')
const { armpits, feets, thighs, ass, boobs, belly, sideboobs, ahegao, randomLewd, dadu, corona, asupan, jadwalSholat, stimker, gsmarena, bmkg } = require('./lib/misc.js')
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { isAfk, cekafk, addafk } = require('./lib/offline')
const { webp2mp4File} = require('./lib/webp2mp4')

const { 
  igDownloader, 
  TiktokDownloader 
} = require("./lib/gif.js")

/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const planet = JSON.parse(fs.readFileSync('./database/user/planet.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const akinator = JSON.parse(fs.readFileSync('./database/user/akinator.json'))
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/premium.json'))
const _afk = JSON.parse(fs.readFileSync('./database/group/afk.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const tictactoe = JSON.parse(fs.readFileSync("./lol/database/tictactoe.json"))
const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./database/user/tebakgambar.json'))


//***********MY GAME**********//
const coal = JSON.parse(fs.readFileSync('./database/user/coal.json'))
const stone = JSON.parse(fs.readFileSync('./database/user/stone.json'))
const ore = JSON.parse(fs.readFileSync('./database/user/ore.json'))
const ingot = JSON.parse(fs.readFileSync('./database/user/ingot.json'))
const kayu = JSON.parse(fs.readFileSync('./database/user/kayu.json'))
////***********END GAME**********//
const vcard = 'BEGIN:VCARD\n' // jangan diubah
            + 'VERSION:3.0\n' // ini juga jangan diubah
            + 'FN: Lingz \n' // ganti nama lu
            + 'ORG:SERVANT OF EVIL;\n' // kasih bio wa lu
            + 'TEL;type=CELL;type=VOICE;waid=6288708344182:+62 887-0834-4182\n' // ganti ke nomor lu
            + 'END:VCARD'
            
prefix = '+',
limitawal = '35',
blocked = [],
memberlimit = '5',
public = true
ftake = '*NOT-FOUND SQUAD*',
fake = '*NOT-FOUND SQUAD*',
cr = '*404 SQUAD AI BOT*'
botname = 'UMP9 BOT'
const ownerNumber = ['6288708344182@s.whatsapp.net','994403434823@s.whatsapp.net'] // replace this with your number
const X = "❌"
const O = "⭕️"
const tunjuk = "👈"
var rdm = ["165310", 
"177978", 
"211759",  
"212643", 
"229540", 
"250029", 
"211519", 
"256097", 
"163478", 
"91505", 
"79280", 
"260629", 
"128051", 
"239536"]
const nvz = rdm[Math.floor(Math.random() * rdm.length)];


//email
let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
         user: setting.email,
        pass: setting.pw

   } 
 }); 
 var rand,mailOptions,host,link;

const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍌 : 🍌 : 🍌'
		]
/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }
	
	//FUNCTION sleep
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
//end of sleep
// Declare variable

//function afk
const addAfkUser = (userid, time, reason) => {
    const obj = { id: userid, time: time, reason: reason }
    	_afk.push(obj)
    	fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
	}

const checkAfkUser = (sender) => {
    let status = false
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            status = i
        }
    })
    return status
}

const getAfkReason = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].reason
    }
}

const getAfkTime = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].time
    }
}

const getAfkId = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    if (position !== null) {
        return _afk[position].id
    }
}

const getAfkPosition = (sender) => {
    let position = null
    Object.keys(_afk).forEach((i) => {
        if (_afk[i].id === sender) {
            position = i
        }
    })
    return position
}
	//END OF AFK FUNCTION
      
	//MANCING FUNCTION BY TAUFIK - KUN
        const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
    	    if (ikan[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ikan[position].fish += amount
    	fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    	}
    }
    
    const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].fish
	}
}

    const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].id
    }
}
    
    const addMancingId = (sender) => {
        const ovj = {id: sender, fish: 0}
        ikan.push(ovj)
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    
    const jualIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].fish -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF MANCING FUNCTION

//PLANET GOO FUNCTION BY RIFAI
        const addPlanet = (sender, amount) => {
        let position = false
        Object.keys(planet).forEach((i) => {
    	    if (planet[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	planet[position].hape += amount
    	fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
    	}
    }
    
    const getBertualangPlanet = (sender) => {
    let position = false 
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].hape
	}
}

    const getPlaneId = (sender) => {
    let position = false
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].id
    }
}
    
    const addPlaneId = (sender) => {
        const ovj = {id: sender, hape: 0}
        planet.push(ovj)
        fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
        }
    
    const jualbahankimia = (sender, amount) => {
        	let position = false
            Object.keys(planet).forEach((i) => {
                if (planet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                planet[position].hape -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//AKHIRNYA SELESEI NI GO PLANET (◡ ω ◡)
    
  //======================================================
  
  
//by ARYA & FELIX
//mining coal
        const addCoal = (sender, amount) => {
        let position = false
        Object.keys(coal).forEach((i) => {
    	    if (coal[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	coal[position].arang += amount
    	fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
    	}
    }
    
    const getMiningcoal = (sender) => {
    let position = false 
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].arang
	}
}

    const getMiningId = (sender) => {
    let position = false
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].id
    }
}
    
    const addMiningId = (sender) => {
        const ovj = {id: sender, arang: 0}
        coal.push(ovj)
        fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
        }
    
    const jualcoal = (sender, amount) => {
        	let position = false
            Object.keys(coal).forEach((i) => {
                if (coal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                coal[position].arang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining stone
        const addStone = (sender, amount) => {
        let position = false
        Object.keys(stone).forEach((i) => {
    	    if (stone[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	stone[position].batu += amount
    	fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
    	}
    }
    
    const getMiningstone = (sender) => {
    let position = false 
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].batu
	}
}

    const getBatuId = (sender) => {
    let position = false
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].id
    }
}
    
    const addBatuId = (sender) => {
        const ovj = {id: sender, batu: 0}
        stone.push(ovj)
        fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
        }
    
    const jualstone = (sender, amount) => {
        	let position = false
            Object.keys(stone).forEach((i) => {
                if (stone[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                stone[position].batu -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining ore
        const addOre = (sender, amount) => {
        let position = false
        Object.keys(ore).forEach((i) => {
    	    if (ore[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ore[position].copperore += amount
    	fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
    	}
    }
    
    const getMiningore = (sender) => {
    let position = false 
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].copperore
	}
}

    const getOreId = (sender) => {
    let position = false
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].id
    }
}
    
    const addOreId = (sender) => {
        const ovj = {id: sender, copperore: 0}
        ore.push(ovj)
        fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
        }
    
    const jualore = (sender, amount) => {
        	let position = false
            Object.keys(ore).forEach((i) => {
                if (ore[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ore[position].copperore -= amount
                fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
            }
        }
    		//END OF mining
    //mining ingot
        const addIngot = (sender, amount) => {
        let position = false
        Object.keys(ingot).forEach((i) => {
    	    if (ingot[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ingot[position].copperingot += amount
    	fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
    	}
    }
    
    const getMiningingot = (sender) => {
    let position = false 
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].copperingot
	}
}

    const getIngotId = (sender) => {
    let position = false
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].id
    }
}
    
    const addIngotId = (sender) => {
        const ovj = {id: sender, copperingot: 0}
        ingot.push(ovj)
        fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
        }
    
    const jualingot = (sender, amount) => {
        	let position = false
            Object.keys(ingot).forEach((i) => {
                if (ingot[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ingot[position].copperingot -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //Nebang
        const addKayu = (sender, amount) => {
        let position = false
        Object.keys(kayu).forEach((i) => {
    	    if (kayu[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	kayu[position].wood += amount
    	fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
    	}
    }
    
    const getNebangKayu = (sender) => {
    let position = false 
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].wood
	}
}

    const getNebangId = (sender) => {
    let position = false
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].id
    }
}
    
    const addNebangId = (sender) => {
        const ovj = {id: sender, wood: 0}
        kayu.push(ovj)
        fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
        }
    
    const jualKayu = (sender, amount) => {
        	let position = false
            Object.keys(kayu).forEach((i) => {
                if (kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                kayu[position].wood -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF Nebang kayu FUNCTION
    
    
    
    
    
    
//end inventory bang
    
    
    
    
    
    
    
    
        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
       
        const getLimit = (sender) => {
        	let position = false
              Object.keys(limit).forEach ((i) => {
              	if (limit[position].id === sender) {
              	   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const checkAgeUser = (sender) => {
    	    let position = false
    	    Object.keys(_registered).forEach((i) => {
    	    if (_registered[i].id === sender) {
    	    position = i
    	    }
    	})
    	    if (position !== false) {
    	    return _registered[position].age
    	    }
    	}
    	
    	const checkWhenRegisUser = (sender) => {
    	    let position = false
    	    Object.keys(_registered).forEach((i) => {
    	    if (_registered[i].id === sender) {
    	    position = i
    	    }
    	})
    	    if (position !== false) {
    	    return _registered[position].time
    	    }
    	}
    	
    	const brpLimit = (sender) => {
    	    let position = false
    	    Object.keys(_limit).forEach((i) => {
    	    if (_limit[i].id === sender) {
    	    position = i
    	    }
    	})
    	    if (position !== false) {
    		let lemot = limitawal - _limit[position].limit
    	    return lemot
    	    }
    	}
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
            const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
	    
	   //BUAT FUNCTIONNYA
	const getAllpremUser = () => {
		const array = []
		Object.keys(prem).forEach((i) => {
		array.push(prem[i].id)
		})
		return array
		}
const getpremExpired = (sender) => {
		let position = null
		Object.keys(prem).forEach((i) => {
		if (prem[i].id === sender) {
		position = i 
		}
	})
		if (position !== null) {
		return prem[position].expired 
	}
} 
const expiredCheck = () => {
		setInterval(() => {
		let position = null
		Object.keys(prem).forEach((i) => {
		if (Date.now() >= prem[i].expired) {
		position = i 
		}
	}
)
		if (position !== null) {
		console.log(`prem expired: ${prem[position].id}`)
		prem.splice(position, 1)
		fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem)) 
		}
	}, 1000)
}

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

async function starts() {
	const linz = new WAConnection()
	linz.logger.level = 'warn'
	console.log(banner.string)
	console.log(baner.string)
	linz.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code above'))
	})

	fs.existsSync('./knights.json') && linz.loadAuthInfo('./knights.json')
	linz.on('connecting', () => {
		start('2', 'connecting')
	})
	linz.on('open', () => {
		success('2', 'TERHUBUNG bang')
	})
	await linz.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./knights.json', JSON.stringify(linz.base64EncodedAuthInfo(), null, '\t'))

	linz.on('group-participants-update', async (anu) => {
		 if (!welkom.includes(anu.jid)) return
		try {
			    mem = anu.participants[0]
			    console.log(anu)
                try {
                pp_user = await linz.getProfilePicture(mem)
                } catch (e) {
                pp_user = 'https://i.imgur.com/rJBKu0Z.jpg'
            }
            try {
                pp_grup = await lingz.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://i.imgur.com/rJBKu0Z.jpg'
            }
          
		      let buffu = await getBuffer(pp_user)
			 datao = await imageToBase64(JSON.stringify(pp_user).replace(/\"/gi, ''))
		     fs.writeFileSync('userpp.jpeg', datao, 'base64')
			 anus = await imgbb("ea2f4c5c28f700b9d257d77c4f5183ae", 'userpp.jpeg')
	         imge = `${anus.display_url}`
			
			 let biffu = await getBuffer(pp_grup)
			 datio = await imageToBase64(JSON.stringify(pp_grup).replace(/\"/gi, ''))
		     fs.writeFileSync('ppgc.jpeg', datio, 'base64')
			 anos = await imgbb("ea2f4c5c28f700b9d257d77c4f5183ae", 'ppgc.jpeg')
	         ime = `${anos.display_url}`
	
	
             if (anu.action == 'add') {
                mdata = await linz.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
                anu_user = linz.contacts[mem]
                teks = `Hello @${num.split('@')[0]} \n Welcome to ${mdata.subject}`
	            buff = await getBuffer(`https://felix-404.herokuapp.com/api/canvas/welkom?nama=${encodeURI(anu_user.notify)}&pp=${imge}&gc=${encodeURI(mdata.subject)}&ppgc=${ime}&member=${memeg}&bg=https://i.ibb.co/4YBNyvP/images-76.jpg&apikey=GFL`)
		        linz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'remove') {
                mdata = await linz.groupMetadata(anu.jid)
            	num = anu.participants[0]
                anu_user = linz.contacts[mem]
                memeg = mdata.participants.length
                out = `Sayonara @${num.split('@')[0]}`
                buff = await getBuffer(`https://felix-404.herokuapp.com/api/canvas/goodbye?nama=${encodeURI(anu_user.notify)}&pp=${imge}&gc=${encodeURI(mdata.subject)}&ppgc=${ime}&member=${memeg}&bg=https://i.ibb.co/4YBNyvP/images-76.jpg&apikey=GFL`)
                linz.sendMessage(mdata.id, buff, MessageType.image, {caption: out, contextInfo: {"mentionedJid": [num]}})
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	linz.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	linz.on('CB:action,,call', async json => {
	const callerId = json[2][0][1].from;
	await linz.sendMessage(callerId, 'Maaf bof tidak bisa menerima panggilan', text)
	await linz.blockUser(callerId, "add")
	})
	
	linz.on('message-update', async (hurtz) => {
	try {
		const from = hurtz.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./lib/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked-banlist.json'))
		const sender = hurtz.key.fromMe ? linz.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
		const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? false : true
		const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? false : true
        var numbernye = '0'
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = hurtz.key.remoteJid
			const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./lib/msg.data.json'))
			const id_deleted = hurtz.key.id
		    const conts = hurtz.key.fromMe ? linz.user.jid : linz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = hurtz.key.fromMe ? linz.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
					}
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage : int.type == 'documentMessage' ? infoMSG[index].documentMessage : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}@s.whatsapp.net`
			fake = '0'
				var split = `Hayolo`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `
\`\`\`\ 「 Anti Delete Chat 」\`\`\`\
===========================

 *❥ @${sender.split("@")[0]} Menghapus Pesan*
 *❥ Pada : ${moment.unix(int.timestamp).format('HH:mm:ss')} WIB | ${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
 *❥ Pesan : ${body ? body : '-'}*


       「 ${botname} Antidelete 」`
				linz.sendMessage(from, strConversation, MessageType.text, { contextInfo: {"mentionedJid": [sender] }})
				console.log(`================\n${pushname} menghapus pesan\n❥ Pesan : ${body ? body : '-'}\n================`)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `*HAYO DELETE APAAN*`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await linz.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `                
 \`\`\`\ 「 Anti Delete 」\`\`\`\
========================

*❥ @${sender.split("@")[0]} Menghapus Sticker*
*❥ Pada : ${moment.unix(int.timestamp).format('HH:mm:ss')} WIB | ${moment.unix(int.timestamp).format('DD/MM/YYYY')}*

「  ${botname}  Antidelete  」`

				const buff = fs.readFileSync(savedFilename)
				linz.sendMessage(from, strConversation, MessageType.text, { contextInfo: {"mentionedJid": [sender] }})
				linz.sendMessage(from, buff, MessageType.sticker, pingbro23)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `mpos ketauan`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await linz.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	  
\`\`\`\ 「 Anti Delete 」\`\`\`\
========================

*❥ @${sender.split("@")[0]} Menghapus gambar*
*❥ Pada : ${moment.unix(int.timestamp).format('HH:mm:ss')} WIB | ${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
*❥ Pesan : ${body ? body : '-'}*

           「 ${botname}  Antidelete 」`
				linz.sendMessage(from, buff, MessageType.image, { contextInfo: {"mentionedJid": [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)

} else if (int.type == 'audioMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `yahahha ketauan`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await linz.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

 *Antidelete Mendeteksi ${pushname} Delete Audio* 
             
             [ *${botname}* ]`
   linz.sendMessage(from, strConversation, MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})
				linz.sendMessage(from, buff, MessageType.audio, pingbro22)
				fs.unlinkSync(savedFilename)
				
				} else if (int.type == 'documentMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `yahahha ketauan`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await linz.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

 *Antidelete Mendeteksi ${pushname} Delete Document* 
             
             [ *${botname}* ]`
   linz.sendMessage(from, strConversation, MessageType.text, {contextInfo: { forwardingScore: 1000, isForwarded: true }})
				linz.sendMessage(from, buff, MessageType.document, { mimetype: Mimetype.pdf })
				fs.unlinkSync(savedFilename)
				
				} else if (int.type == 'videoMessage') {
				var itsme = `${pushname}@s.whatsapp.net`
					var split = `yahahhaha`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await linz.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 

- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}

- *Tipe :* Video

- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*

- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*

              [ *${botname}* ]`
				linz.sendMessage(from, buff, MessageType.video, { contextInfo: { forwardingScore: 1000, isForwarded: true }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})

	linz.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
		    if (!mek.message) return
		    if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		    global.blocked
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
			global.prefix
			
			
			const content = JSON.stringify(mek.message)
			let infoMSG = JSON.parse(fs.readFileSync('./lib/msg.data.json'))
		infoMSG.push(JSON.parse(JSON.stringify(mek)))
		fs.writeFileSync('./lib/msg.data.json', JSON.stringify(infoMSG, null, 2))
		const urutan_pesan = infoMSG.length
		if (urutan_pesan === 5000) {
			infoMSG.splice(0, 4300)
			fs.writeFileSync('./lib/msg.data.json', JSON.stringify(infoMSG, null, 2))
		    }
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const lolhuman = linz
            const lol = mek
            const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		    const jam = moment().tz('Asia/Jakarta').format("HH:mm:ss")
		    const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
            const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		    let d = new Date
		    let locale = 'id'
		    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
		    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
		    let week = d.toLocaleDateString(locale, { weekday: 'long' })
		    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
		    let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })
            const apikeyl = 'belisendiri'
            const apikey = 'belisendiri'
            const Xteam = 'BeliSendiri'
            const ZeksApi = 'apivinz'
            const ApiDevolover = 'PunyaIkyAds'
			const apiKey = 'barbarapih' // contact me on whatsapp wa.me/6285892766102
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const chat = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const conts = mek.key.fromMe ? linz.user.jid : linz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			pushname = mek.key.fromMe ? linz.user.name : conts.notify || conts.vname || conts.name || '-'
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const q = args.join(' ')
             const usedCommandRecently = new Set()
             const Exif = require(process.cwd() + '/exif.js')
            var exif = new Exif()

/**
 * Check is number filtered
 * @param  {String} from
 */
const isFiltered = (from) => !!usedCommandRecently.has(from)

/**
 * Add number to filter
 * @param  {String} from
 */
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 5000) // 5sec is delay before processing next command
}
			mess = {
				wait: '⌛ Sedang di Prosess ⌛',
				success: '✔️ Berhasil ✔️',
				error: {
					stick: '❌ Gagal, terjadi kesalahan saat mengkonversi gambar ke sticker ❌',
					Iv: '❌ Link tidak valid ❌'
				},
				only: {
					group: '❌ Perintah ini hanya bisa di gunakan dalam group! ❌',
					ownerG: '❌ Perintah ini hanya bisa di gunakan oleh owner group! ❌',
					ownerB: '❌ Perintah ini hanya bisa di gunakan oleh owner bot! ❌',
					admin: '❌ Perintah ini hanya bisa di gunakan oleh admin group! ❌',
					premium: 'KAMU BUKAN USER PREMIUM,BELI SINI/n ni list=/n 10k=1 bulan /n25k=5bulan',
					Badmin: '❌ Perintah ini hanya bisa di gunakan ketika bot menjadi admin! ❌'
				}
			}

			const botNumber = linz.user.jid
            const ownerNumber2 = ['13152219087@s.whatsapp.net']
			const itsMe = sender === botNumber ? true : false
			chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const groupMetadata = isGroup ? await linz.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			
		    let senderr = mek.key.fromMe ? linz.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		    const senderNumber = sender.split("@")[0]
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
            const isCheck = isGroup ? ncheck.includes(from) : false
            const isAuto = isGroup ? autosticker.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isOwner2 = ownerNumber2.includes(sender)
			const isBot = botNumber.includes(sender)
			totalchat = await linz.chats.all()
			const ultahku = `https://dhn-api.herokuapp.com/api/hitungmundur?apikey=DehanApi&bulan=12&tanggal=7&tahun=2021`
			elteh = (ultahku.result)
			const stickcmd = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('base64') : ""

        
        // here button function
selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
			const isEventon = isGroup ? event.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isPremium= prem.includes(sender)
const isAfkOn = checkAfkUser(sender)

const isLevelingOn = isGroup ? _leveling.includes(from) : false
const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
                        const isAntiFirtex= isGroup ? antifirtex.includes(from) : false
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				linz.sendMessage(from, teks, text, {quoted:mek, thumbnail: fs.readFileSync('./lz/ump.png')})
			}
			const sendFakeStatus = (from, teks, faketeks) => {
	        linz.sendMessage(from, teks, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": faketeks, "jpegThumbnail": fs.readFileSync(`./media/rin.jpeg`)} } } })
            }
            const hideTagKontak = async function(from, nomor, nama){
			let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
			let anu = await linz.groupMetadata(from)
			let members = anu.participants
			let ane = []
			for (let i of members){
				ane.push(i.jid)
			}
			linz.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
		    }
		    const hideTagImg = async function(from, image){
	        let anu = await linz.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        linz.sendMessage(from, image, MessageType.image, {contextInfo: {"mentionedJid": ane}})
            }
			const sendKontak = (from, nomor, nama) => {
	        var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        linz.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact)
            }
			const sendMess = (hehe, teks) => {
				linz.sendMessage(hehe, teks, text)
			}
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `404 SQUAD` }}
			
			const freply3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "liveLocationMessage":{"caption":fake,"jpegThumbnail":fs.readFileSync('./stik/thumb.jpeg')
}}}

       const freply2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./stik/thumb.jpeg')
}}}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? linz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : linz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendSticker = (from, filename, mek) => {
	       linz.sendMessage(from, filename, MessageType.sticker, {quoted: mek})
            }
           const costum = (pesan, tipe, target, target2) => {
           linz.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
           }
           const fakestatus = (teks) => {
            linz.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            linz.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            linz.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendWebp = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
                    fs.unlinkSync(filess)
                    if (err) return reply(`${err}`)
                    exec(`webpmux -set exif ./stik/data.exif ${asw} -o ${asw}`, async (error) => {
                    if (error) return reply(`${error}`)
                    linz.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
                    fs.unlinkSync(asw)
                    });
                });
                });
            }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        linz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
         const sendFileFromUrl = async(link, type, options) => {
  hasil = await getBuffer(link)
	linz.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	linz.sendMessage(from, hasil, type, options).catch(e => {
	linz.sendMessage(from, { url : link }, type, options).catch(e => {
	  reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
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
                    linz.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (itsMe){
			if (chats.toLowerCase() === `${prefix}self`){
				public = false
				aqul.sendFakeStatus(from, `Sukses`, `Status: SELF`)
			}
			if (chats.toLowerCase() === 'status'){
				aqul.sendFakeStatus(from, `STATUS: ${public ? 'PUBLIC' : 'SELF'}`)
			}
		}
		if (!public){
			if (!mek.key.fromMe) return
		}
			if (isCmd && isFiltered(from) && !isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname)) }
            if (isCmd && isFiltered(from) && isGroupMsg) { return console.log(color('[SPAM]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(name || formattedTitle)) }
        // AKTIFKAN APABILA TIDAK INGIN TERKENA SPAM!!
            addFilter(from)
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m指図\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mメッセージ\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m指図\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mメッセージ\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			let authorname = linz.contacts[from] != undefined ? linz.contacts[from].vname || linz.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = "LINGMO" }	
			      //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel))
                }
            } catch (err) {
                console.error(err)
            }
        }
       
			//FUNCTION PREMIUM RESPONDER
			expiredCheck()
		    var prema = 'Free'
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
        
        // Akinator
            // Premium / VIP apikey only
            if (akinator.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                var answer_array = ["0", "1", "2", "3", "4", "5"]
                if (!answer_array.includes(budy)) return reply("Beri jawaban antara 0, 1, 2, 3, 4, 5")
                var { server, frontaddr, session, signature, question, step } = akinator[sender.split('@')[0]]
                if (step == "0" && budy == "5") return reply("Maaf Anda telah mencapai pertanyaan pertama")
                var ini_url = `http://api.lolhuman.xyz/api/akinator/answer?apikey=${apikey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                var get_result = await fetchJson(ini_url)
                var get_result = get_result.result
                if (get_result.hasOwnProperty("name")) {
                    var ini_name = get_result.name
                    var description = get_result.description
                    var ini_image = get_result.image
                    var ini_image = await getBuffer(ini_image)
                    ini_txt = `${ini_name} - ${description}\n\n`
                    ini_txt += "Sekian dan terima kasih"
                    linz.sendMessage(from, ini_image, image, { quoted: lol, caption: ini_txt }).then(() => {
                        delete akinator[sender.split('@')[0]]
                        fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    })
                    return
                }
                var { question, _, step } = get_result
                ini_txt = `${question}\n\n`
                ini_txt += "0 - Ya\n"
                ini_txt += "1 - Tidak\n"
                ini_txt += "2 - Saya Tidak Tau\n"
                ini_txt += "3 - Mungkin\n"
                ini_txt += "4 - Mungkin Tidak\n"
                ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                if (budy == "5") {
                    var ini_url = `http://api.lolhuman.xyz/api/akinator/back?apikey=${apikey}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`
                    var get_result = await fetchJson(ini_url)
                    var get_result = get_result.result
                    var { question, _, step } = get_result
                    ini_txt = `${question}\n\n`
                    ini_txt += "0 - Ya\n"
                    ini_txt += "1 - Tidak\n"
                    ini_txt += "2 - Saya Tidak Tau\n"
                    ini_txt += "3 - Mungkin\n"
                    ini_txt += "4 - Mungkin Tidak"
                    ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya"
                }
                linz.sendMessage(from, ini_txt, text, { quoted: lol }).then(() => {
                    const data_ = akinator[sender.split('@')[0]]
                    data_["question"] = question
                    data_["step"] = step
                    akinator[sender.split('@')[0]] = data_
                    fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                })
            }   

        //FUCNTION MANCING BY TAUFIK - KUN
        if (isGroup && isEventon) {
        const Fisha = getMancingIkan(sender)
        const FishId = getMancingId(sender)
        if (Fisha === undefined && FishId === undefined) addMancingId(sender)
        }
	//FUCNTION GOPLANET BY RIPAI
        if (isGroup && isEventon) {
        const Hapea = getBertualangPlanet(sender)
        const HapeId = getPlaneId(sender)
        if (Hapea === undefined && HapeId === undefined) addPlaneId(sender)
        }
	   //FUCNTION mining coal
        if (isGroup && isEventon) {
        const Coala = getMiningcoal(sender)
        const CoalId = getMiningId(sender)
        if (Coala === undefined && CoalId === undefined) addMiningId(sender)
        }
        //FUCNTION mining batu
        if (isGroup && isEventon) {
        const Stonea = getMiningstone(sender)
        const StoneId = getBatuId(sender)
        if (Stonea === undefined && StoneId === undefined) addBatuId(sender)
        }
        //FUCNTION mining ore
        if (isGroup && isEventon) {
        const Orea = getMiningore(sender)
        const OreId = getOreId(sender)
        if (Orea === undefined && OreId === undefined) addOreId(sender)
        }
        //FUCNTION lebur ingot
        if (isGroup && isEventon) {
        const Ingota = getMiningingot(sender)
        const IngotId = getIngotId(sender)
        if (Ingota === undefined && IngotId === undefined) addIngotId(sender)
        }
        //FUCNTION nebang kayu
        if (isGroup && isEventon) {
        const Kayua = getNebangKayu(sender)
        const KayuId = getNebangId(sender)
        if (Kayua === undefined && KayuId === undefined) addNebangId(sender)
        }
	const mentionUser = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.mentionedJid || [] : []
            mentionByReply = type == "extendedTextMessage" ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            mentionUser.push(mentionByReply)
            // Tebak Gambar by ryz
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Mantap kamu berhasil menjawab dengan tepat\nSelamat 🎉🎉🎉😁")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/user/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Gagal coba lagi!")
                }
            }
	
	        //ttt
			// function for get the winner
const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n         "
        }
        texts += x
        count += 1
    }
    return texts
}
if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `Player 1: @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `\n\nPlayer 2: @${player2.split("@")[0]} (${mode})`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = board
                teks += "\n\n"
                teks += `@${player1} vs. @${player2}\n`
                if (win == mode) {
                    teks += `Hasil : @${player2} WIN`
                    return linz.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                    })
                } else {
                    teks += `Hasil : @${player1} WIN`
                    return linz.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                    })
                }
            }
            if (data["step"] == 9) {
                teks = board
                teks += "\n\n"
                teks += `@${player1} vs. @${player2}\n`
                teks += `Hasil : Seri`
                return linz.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            return linz.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
	//AFK NGULI

             if (isGroup) {
            mentioneddd = mek.message[Object.keys(mek.message)[0]].contextInfo ? mek.message[Object.keys(mek.message)[0]].contextInfo.mentionedJid : []
            for (let ment of mentioneddd) {
                if (checkAfkUser(ment)) {
                    const getId = getAfkId(ment)
                    const getReason = getAfkReason(getId)
                    const getTime = getAfkTime(getId)
                    reply(ind.afkMentioned(getReason, getTime))
                }
            }
                }
            
            if (checkAfkUser(sender)) {
                _afk.splice(getAfkPosition(sender.id, _afk), 1)
                fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
                	linz.sendMessage(from, ind.afkDone(pushname), text)
            }
            
        
        
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return linz.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
                            linz.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
                        linz.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
	         
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    linz.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit))
           return false
       }
     }
     	if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
                            linz.groupLeave(from)
					    }
		       } catch (err) { console.error(err)  }
        }
        
      
            //function balance
            if (isRegistered && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
//function antilink
		if (budy.match("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		linz.updatePresence(from, Presence.composing)
		if (messagesC.match("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 10detik lagi`)
		setTimeout( () => {
			linz.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 10000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 9000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 8000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 7000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 6000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 5000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 4000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 3000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 2000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 1000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 0)
	}
		//function antivirtext
        if (messagesC.includes(`${command}৭${command}`) || budy.match(`${command}๑${command}`) || budy.match('๒') || budy.match('৭') || budy.match('ดุ') || budy.match(`${command}ท้่เึ${command}`) || budy.match('างื') || budy.match('ผิ') || budy.match('ดุ') || budy.match('ท้่เึ') || budy.match('างื') || budy.match('ดุท้่เึางืผิดุท้่เึางื') || budy.match('https://instagram.com/nay_mabox')){
		if (!isGroup) return
		if (!isAntiFirtex) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		linz.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`virtex Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 10detik lagi. Mamposs lu ajg.`)
		setTimeout( () => {
			linz.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 10000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 9000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 8000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 7000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 6000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 5000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 4000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 3000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 2000)
		setTimeout( () => {
			linz.updatePresence(from, Presence.composing)
		}, 1000)
		setTimeout( () => {
			reply('kamu mengirim virtex')
		}, 0)
	}
		//FUNCTION ANTIBADWORD
		if (bad.includes(budy)) {
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply(`*${pushname}* Jan macem macem lu mentang admin`)
		linz.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*Anak Harem....*`)
		}, 11000)
		setTimeout( () => {
		linz.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10000)
		setTimeout( () => {
		reply(`*_「」_*\nᴍᴀᴀғ *${pushname}* ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ *${groupMetadata.subject}*`)
		}, 0)
		}
			function addMetadata(packname, author) {	
				if (!packname) packname = 'NOT FOUND SQUAD'; if (!author) author = 'LINGZ';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
			
            const uploadImages = (buffData, fileName) => {
    return new Promise(async (resolve, reject) => {
        const { ext } = await fromBuffer(buffData)
        const filePath = `${fileName}.${ext}`
        fs.writeFile(filePath, buffData, { encoding: 'base64' }, (err) => {
            if (err) reject(err)
            console.log('Sedang upload ke telegraph sabar owner-sama')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, `${fileName}.${ext}`)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.error) reject(result.error)
                    resolve('https://telegra.ph' + result[0].src)
                })
                .then(() => fs.unlinkSync(filePath))
                .catch((err) => reject(err))
        })
    })
}
const custom = async (imageUrl, top, bottom) => new Promise((resolve, reject) => {
    topText = top.trim().replace(/\s/g, '_').replace(/\?/g, '~q').replace(/\%/g, '~p').replace(/\#/g, '~h').replace(/\//g, '~s')
    bottomText = bottom.trim().replace(/\s/g, '_').replace(/\?/g, '~q').replace(/\%/g, '~p').replace(/\#/g, '~h').replace(/\//g, '~s')
    getBuffer(`https://api.memegen.link/images/custom/${topText}/${bottomText}.png?background=${imageUrl}`)
        .then((result) => resolve(result))
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})
switch(selectedButton) {
	case 'buka':
	reply(`*BERHASIL MEMBUKA GROUP*`)
	linz.groupSettingChange(from, GroupSettingChange.messageSend, false)
	break
	case 'tutup':
	reply(`*BERHASIL MENUTUP GROUP*`)
	linz.groupSettingChange(from, GroupSettingChange.messageSend, true)
	break
	case "self":
	public = false
	sendFakeStatus(from, `Status: SELF`, fake)
	break
	case "public":
	public = true
	sendFakeStatus(from, `Status: PUBLIC`, fake)
	break
	case 'owner':
	linz.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "mimetype": "image/jpeg", "caption": "404 SQUAD", "jpegThumbnail": fs.readFileSync(`./lz/ump.png`)} } } })
	break
	case 'donate':
	don = await getBuffer(`https://i.ibb.co/TL3gXwj/IMG-20210726-WA0309.jpg`)
	linz.sendMessage(from, don, image, { quoted: mek, caption: `*dana = 085278622437 \n thanks yang udah donate*`})
	break
	case 'idup':
	if (isWelkom) return reply('Udah aktif um')
	welkom.push(from)
	fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
	reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
	break
	case 'mati':
	welkom.splice(from, 1)
	fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
	reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
    break
    }
    
    switch (stickcmd) {
   case "8wI9ou3zeKbhMl/GWruzGLaVltnpRonH3W80DJXu8f4=":
  case "YBIZZC29PQI2Z7fpnoS6MxsL4jJvd88Et5J8IERuRL8=":
    uptime = process.uptime()
				myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
                var tgl = new Date();
                var day = tgl.getDate()
                  bulan = tgl.getMonth()
                var thisDay = tgl.getDay(),
                thisDay = myDays[thisDay];
                var yy = tgl.getYear()
                var year = (yy < 1000) ? yy + 1900 : yy;
                const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
                const tembol = [
  {buttonId: 'donate', buttonText: {displayText: 'donate'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'owner bot'}, type: 1}
]

const tumbil = {
	"imageMessage": {
			"url": "https://mmg.whatsapp.net/d/f/AgKIMz5ANvoGuexTOVC-FJSoAmEg6nIqHnZZaTTEEkH-.enc",
			"mimetype": "image/jpeg",
			"fileSha256": "vtQF3U80An2eWoQm0mGFCAOO6crsjvBtsKJeO1eIurg=",
			"fileLength": 1e20,
			"height": 900,
			"width": 900,
			"mediaKey": "xJvcfo5bLiqYEdLBXfUvTMeIsBDbB5Wi2F9xJYYODjI=",
			"fileEncSha256": "D4z9yikdqadmYSVLapQAYjJ8IggOQNDqV4Qr1wsYyL8=",
            "jpegThumbnail": fs.readFileSync('./lz/ump.png'),
            },
    contentText: help(prefix, uptime, jam, tanggal),
    footerText: `404 SQUAD`,
    buttons: tembol,
    headerType: 4,
}

linz.sendMessage(from, tumbil, MessageType.buttonsMessage, {quoted: freply})
            break
                case 'IrtfYupppcsFCIeh4bfj7pJdx/RCJ138+nselos8vKA=':
				case 'Ljop1+o75extyyzwylnPFgP4dCPSnOguJFWJ1/KmhH8=':
						const encmedios = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.stickerMessage.contextInfo
						const medios = await linz.downloadAndSaveMediaMessage(encmedios)
						ran = getRandom('.webp')
						await ffmpeg(`./${medios}`)
							.input(medios)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(medios)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('L-M0', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									linz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(medios)	
									fs.unlinkSync(ran)	
								})
								/*linz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(medios)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					
					
					break
					  case '6/TawCLHhsyrp/0elLVEPPvUXYIAMhJ+KIXfUYyJzKc=':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.stickerMessage.contextInfo
					mediasi = await linz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediasi} ${ran}`, (err) => {
						fs.unlinkSync(mediasi)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						linz.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
					case 'o5xRcHk3Qgj0Il3oijcKVdt3ZpWsmYxBFuf3kG+5Bbw=':
			            ger = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.stickerMessage.contextInfo
			            owgi = await linz.downloadAndSaveMediaMessage(ger)
			            webp2mp4File(owgi).then(res=>{
			            sendMediaURL(from,res.result,'Done')
			            })
			            fs.unlinkSync(owgi)
			            break
}
			switch(command) {
				case 'help':
			     case 'menu':
			    boet = botname
				uptime = process.uptime()
				myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
                var tgl = new Date();
                var day = tgl.getDate()
                  bulan = tgl.getMonth()
                var thisDay = tgl.getDay(),
                thisDay = myDays[thisDay];
                var yy = tgl.getYear()
                var year = (yy < 1000) ? yy + 1900 : yy;
                const tanggal = `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
                const buttons = [
  {buttonId: 'donate', buttonText: {displayText: 'donate'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'owner bot'}, type: 1}
]

const buttonMessage = {
	"imageMessage": {
			"url": "https://mmg.whatsapp.net/d/f/AgKIMz5ANvoGuexTOVC-FJSoAmEg6nIqHnZZaTTEEkH-.enc",
			"mimetype": "image/jpeg",
			"fileSha256": "vtQF3U80An2eWoQm0mGFCAOO6crsjvBtsKJeO1eIurg=",
			"fileLength": 1e20,
			"height": 900,
			"width": 900,
			"mediaKey": "xJvcfo5bLiqYEdLBXfUvTMeIsBDbB5Wi2F9xJYYODjI=",
			"fileEncSha256": "D4z9yikdqadmYSVLapQAYjJ8IggOQNDqV4Qr1wsYyL8=",
            "jpegThumbnail": fs.readFileSync('./lz/ump.png'),
            },
    contentText: help(prefix, uptime, boet, jam, tanggal),
    footerText: `404 SQUAD`,
    buttons: buttons,
    headerType: 4,
}

linz.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: freply})
		    break
		case 'hash':
                if (!isQuotedSticker) return reply('Reply Sticker!')
                const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await linz.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(hash)
            break
            
            
					/*=======by LINZ=========*/
					case 'fb':
if (!q) return reply(mess.wrongFormat)
if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply(mess.error.Iv)
teks = args[0]
reply(mess.wait)
res = await fbDown(teks).catch(e => {
reply(`${e}`)
})
a = res[0]
result = `「 *Facebook Downloader* 」

• *Judul:* ${a.judul}
• *Source :* ${a.source}
• *Ukuran :* ${a.size}
• *Kualitas :* ${a.quality}
• *Type :* ${a.type}
• *Nama File :* ${a.judul}.${a.type}`
sendFileFromUrl(a.thumb, image, {caption: result, quoted: mek})
sendFileFromUrl(a.link, video, {mimetype: 'video/mp4',quoted: mek})
break
case 'semoji':
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
   break
   case 'mode':
const fgs = [
  {buttonId: 'self', buttonText: {displayText: 'SELF'}, type: 1},
  {buttonId: 'public', buttonText: {displayText: 'PUBLIC'}, type: 1}
]

const bm = {
	"imageMessage": {
			"url": "https://mmg.whatsapp.net/d/f/AgKIMz5ANvoGuexTOVC-FJSoAmEg6nIqHnZZaTTEEkH-.enc",
			"mimetype": "image/jpeg",
			"fileSha256": "vtQF3U80An2eWoQm0mGFCAOO6crsjvBtsKJeO1eIurg=",
			"fileLength": 1e20,
			"height": 900,
			"width": 900,
			"mediaKey": "xJvcfo5bLiqYEdLBXfUvTMeIsBDbB5Wi2F9xJYYODjI=",
			"fileEncSha256": "D4z9yikdqadmYSVLapQAYjJ8IggOQNDqV4Qr1wsYyL8=",
            "jpegThumbnail": fs.readFileSync('./lz/ump.png'),
            },
    contentText: "NOT FOUND SQUAD",
    footerText: 'pilih mode nya kak',
    buttons: fgs,
    headerType: 4,
}

linz.sendMessage(from, bm, MessageType.buttonsMessage, {quoted: freply2})
break


//by LING
   case 'verif':
         var ge = args.join('')           
            
let mailDetails = { 

    from: 'Not-Found-Squad@outlook.co.id', 
    to: ge, 
    subject: '404 SQUAD', 
    text: 'verificaton',
    html: `<!DOCTYPE html>
<html>
<head>

  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Email Confirmation</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
  /**
   * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
   */
  @media screen {
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 400;
      src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
    }
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 700;
      src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
    }
  }
  /**
   * Avoid browser level font resizing.
   * 1. Windows Mobile
   * 2. iOS / OSX
   */
  body,
  table,
  td,
  a {
    -ms-text-size-adjust: 100%; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  /**
   * Remove extra space added to tables and cells in Outlook.
   */
  table,
  td {
    mso-table-rspace: 0pt;
    mso-table-lspace: 0pt;
  }
  /**
   * Better fluid images in Internet Explorer.
   */
  img {
    -ms-interpolation-mode: bicubic;
  }
  /**
   * Remove blue links for iOS devices.
   */
  a[x-apple-data-detectors] {
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    color: inherit !important;
    text-decoration: none !important;
  }
  /**
   * Fix centering issues in Android 4.4.
   */
  div[style*="margin: 16px 0;"] {
    margin: 0 !important;
  }
  body {
    width: 100% !important;
    height: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  /**
   * Collapse table borders to avoid space between cells.
   */
  table {
    border-collapse: collapse !important;
  }
  a {
    color: #1a82e2;
  }
  img {
    height: auto;
    line-height: 100%;
    text-decoration: none;
    border: 0;
    outline: none;
  }
  /* USER - Management */
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  .contact-area {
  width: 100%;
  height: 100vh;
  position: relative;
}

.contact {
  position: relative;
  max-width: 420px;
  padding: 40px 20px;
  overflow: hidden;
  margin: 0 auto;
}
.contact main {
  float: left;
  width: 100%;
  position: relative;
}
.contact main section {
  border-radius: 5px;
  float: left;
  width: 100%;
  background-color: #0f0017;
}
.contact main section .content {
  float: left;
  width: 100%;
  padding: 20px 30px 50px 30px;
  position: relative;
  text-align: center;
}
.contact main section .content img {
  display: inline-block;
  width: 140px;
  border-radius: 50%;
}
.contact main section .content aside {
  float: left;
  width: 100%;
  color: #ffffff;
  margin-top: 10px;
}
.contact main section .content aside h1 {
  font-weight: 100;
  font-size: 22px;
  margin-bottom: 10px;
}
.contact main section .content aside p {
  font-size: 14px;
  letter-spacing: .5px;
  line-height: 160%;
}
.contact main .title {
  float: left;
  width: 100%;
  background-color: #c63535;
  max-height: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  overflow: hidden;
  -webkit-transition: all 0.55s;
  -moz-transition: all 0.55s;
  -o-transition: all 0.55s;
  transition: all 0.55s;
}
.contact main .title.active {
  max-height: 100px;
  -webkit-transition: all 1.3s;
  -moz-transition: all 1.3s;
  -o-transition: all 1.3s;
  transition: all 1.3s;
}
.contact main .title.active p {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  transition-delay: .2s;
}
.contact main .title p {
  padding: 15px 30px;
  color: #ffffff;
  font-size: 16px;
  display: inline-block;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: .5px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
}


@media (min-width: 414px) {
  .contact main section .content {
    text-align: left;
  }
  .contact main section .content img {
    float: left;
    width: 30%;
    margin-right: 10%;
  }
  .contact main section .content aside {
    width: 60%;
  }
}
  </style>

</head>
<body style="background-color: #e9ecef;">

  <!-- start preheader -->
  <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
    A preheader is the short summary text that follows the subject line when an email is viewed in the inbox.
  </div>
  <!-- end preheader -->

  <!-- start body -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%">


    <!-- start hero -->
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="center" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">EMAIL VERIFICATION</h1>
            </td>
          </tr>
        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end hero -->

    <!-- start copy block -->
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

          <!-- start copy -->
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
              <p style="margin: 0;">send the code below to the bot</p>
            </td>
          </tr>
          <!-- end copy -->

          <tr>
            <td align="center" bgcolor="#000000" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #ffffff;">
              
           <img src="https://i.imgur.com/rJBKu0Z.jpg" width="200" height="200" />
           <h2 style="margin: 0;" id="demo"></h2>
          </td>
          </tr>
        <tr>
            <td align="center" bgcolor="#000000" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #ffffff;">
              
           <h2 style="margin: 0;"> ${nvz} </h2>
          </td>
          </tr>
          <!-- end button -->

          <!-- start copy -->
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
              <p style="margin: 0;">Q : how to send the code </p>
              <p style="margin: 0;">A : type +signup your name|age|email|code , then send to 404 SQUAD Bot</p>
            </td>
          </tr>
          <!-- end copy -->

          <!-- start copy -->
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
              <p style="margin: 0;">404 SQUAD,<br>:)</p>
            </td>
          </tr>
          <!-- end copy -->

        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end copy block -->

    <!-- start footer -->
    <tr>
      <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

          <!-- start permission -->
          <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
              <p style="margin: 0;">we don't ask for a password we only ask for an email and a verification code.</p>
            </td>
          </tr>
          <!-- end permission -->

          <!-- start unsubscribe -->
          <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
              <p style="margin: 0;">if you have any questions you can ask us  <a href="wa.me/6288708344182" target="_blank">404 SQUAD SUPPORT</a> :)</p>
              <p style="margin: 0;">I Hope You Happy • 404 SQUAD</p>
            </td>
          </tr>
          <!-- end unsubscribe -->

        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end footer -->

  </table>
  <!-- end body -->
</body>

</html>
`
}; 

mailTransporter.sendMail(mailDetails, function(err, data) { 

    if(err) { 
         reply('Error Occurs'); 
    } else { 
         reply('code verification terkirim ke email silahkan dicek'); 
    } 
}); 

         break
   case 'pinterest':
                     piin = args.join(' ')
					data = await fetchJson(`http://fdciabdul.tech/api/pinterest/?keyword=${piin}`, {method: 'get'})
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					linz.sendMessage(from, pok, image, { quoted: mek, thumbnail: fs.readFileSync('./lz/ump.png')})
					break 
					
case 'image':
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
gugIm = result
random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`, thumbnail: fs.readFileSync('./stik/fake.jpeg')})
}
}
break



                 case 'mp3':
if (!q) return reply(mess.wrongFormat)
if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
teks = args[0]
reply(mess.wait)
res = await y2mateA(teks).catch(e => {
reply(`${e}`)
})
result = `「 *YouTube Mp3* 」

• *Judul:* ${res[0].judul}
• *Ukuran:* ${res[0].size}
• *Kualitas:* ${res[0].quality}kbps
• *Nama File:* ${res[0].output}
• *Tipe:* ${res[0].tipe}

_*Tunggu Proses Uploading.....*_`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
break
case 'mp4':
if (!q) return reply(mess.wrongFormat)
if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
teks = args[0]
reply(mess.wait)
res = await y2mateV(teks).catch(e => {
reply(`${e}`)
})
result = `「 *YouTube Mp4* 」

• *Judul:* ${res[0].judul}
• *Ukuran:* ${res[1].size}
• *Kualitas:* ${res[2].quality}p
• *Nama File:* ${res[0].output}
• *Tipe:* ${res[0].tipe}

_*Tunggu Proses Uploading.....*_`
sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
break
case 'play2':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
let thumbInfo = `${unikodhead}「  *Youtube Search*  」
${unikodbody} Judul :* ${res.all[0].title}
${unikodbody} ID Video :* ${res.all[0].videoId}
${unikodbody} Diupload Pada :* ${res.all[0].ago}
${unikodbody} Views :* ${res.all[0].views}
${unikodbody} Durasi :* ${res.all[0].timestamp}
${unikodbody} Channel :* ${res.all[0].author.name}
${unikodend}  *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
let thumbInfo = `${unikodhead}${unikodwing[0]} *${botname}* ${unikodwing[1]}
${unikodbody} Judul :* ${res.all[0].title}
${unikodbody} ID Video :* ${res.all[0].videoId}
${unikodbody} Diupload Pada :* ${res.all[0].ago}
${unikodbody} Views :* ${res.all[0].views}
${unikodbody} Durasi :* ${res.all[0].timestamp}
${unikodbody} Channel :* ${res.all[0].author.name}
${unikodend}  *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'stag':
					if (!isOwner) return reply('Kamu siapa?')
					if (!isQuotedSticker) return reply('❌ reply stickernya um ❌')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediay = await linz.downloadAndSaveMediaMessage(encmedia)
					const bufer = fs.readFileSync(mediay)
					var group = await linz.groupMetadata(from)
					var members = group['participants']
					let mids = []
                    for (let member of members) {
                    mids.push(member.jid)
                    }
					linz.sendMessage(from, bufer, sticker, { contextInfo: { "mentionedJid": mids } })
					break
					case 'imgtag':
					if (!isOwner) return reply('Kamu siapa?')
				if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let media = await linz.downloadMediaMessage(encmedia)
					hideTagImg(from, media)
				} else {
					reply(from, `Kirim gambar atau reply dengan caption ${prefix}imgtag caption`, mek)
				}
				break
				case 'kontaktag':
	            if (!isOwner) return reply('Kamu siapa?')
				argz = arg.split('|')
				if (!argz) return aqul.reply(from, `Penggunaan ${prefix}kontak @tag atau nomor|nama`, qul)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argz[1])
				} else {
					hideTagKontak(from, argz[0], argz[1])
				}
				break
				case 'play':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
let thumbInfo = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${res.all[0].title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ ID : ${res.all[0].videoId}\`\`\`
\`\`\`▢ Upload : ${res.all[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${res.all[0].views}\`\`\`
\`\`\`▢ Duration : ${res.all[0].timestamp}\`\`\`
\`\`\`▢ Channel : ${res.all[0].author.name}\`\`\`
\`\`\`▢ Link : ${res.all[0].author.url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
const tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.•♫•♬• Playing ${res.all[0].title} •♬•♫•.`)
let thumbInfo = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${res.all[0].title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ ID : ${res.all[0].videoId}\`\`\`
\`\`\`▢ Upload : ${res.all[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${res.all[0].views}\`\`\`
\`\`\`▢ Duration : ${res.all[0].timestamp}\`\`\`
\`\`\`▢ Channel : ${res.all[0].author.name}\`\`\`
\`\`\`▢ Link : ${res.all[0].author.url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
				//random img
				case 'nekonime': // Update By RzkyO
				reply('LOADING NGAB')
				buffer = await getBuffer(`http://hadi-api.herokuapp.com/api/neko`, {method: 'get'})
				linz.sendMessage(from, buffer, image, {quoted: mek})
				break
				case 'trap':
				    try {
						res = await fetchJson(`https://api.waifu.pics/nsfw/trap`, {method: 'get'})
						buffer = await getBuffer(res.url)
						linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'NJIR GAY TRAP'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
					case 'nsfwwaifu':
				    try {
						res = await fetchJson(`https://api.waifu.pics/nsfw/waifu`, {method: 'get'})
						buffer = await getBuffer(res.url)
						linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'hayuk ngocox'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
		 case 'nsfwneko':
				    try {
						res = await fetchJson(`https://api.waifu.pics/nsfw/neko`, {method: 'get'})
						buffer = await getBuffer(res.url)
						linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih NSFW NEKO'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
		case 'waifu':
				    try {
						res = await fetchJson(`https://api.waifu.pics/sfw/waifu`, {method: 'get'})
						buffer = await getBuffer(res.url)
						linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih WAIFU'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
		case 'husbu':
				 data = fs.readFileSync('./media/husbu.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.image)
                text = `${randKey.teks}`
                linz.sendMessage(from, hasil, image, {quoted: mek, caption: text}) 
				break
		case 'nsfwloli':
				 data = fs.readFileSync('./media/loli.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey)
                linz.sendMessage(from, hasil, image, {quoted: mek, caption: 'NSFW LOLI by LENZ'}) 
				break
				//search
		case 'chara':
					if (args.length < 1) return reply('Yang mau di cari apaan? RIN KAGAMINE?')
					keyword = args.join(' ')
					ani = await fetchJson(`https://felix-404.herokuapp.com/api/anime/chara?apikey=GFL&search=${keyword}`, {method: 'get'})
					buffer = await getBuffer(ani.result[0].character_image)
					teks = '═════════ ❃ ═════════'
					for (let i of ani.result) {
						teks += `\n *Anime Name* : *${i.anime_name}*\n *Name* : *${i.name}*\n *Gender* : *${i.gender}*\n *Desc* : *${i.desc}* \n═════════ ❃ ═════════`
					}
					linz.sendMessage(from, buffer, image, {quoted: mek, thumbnail: fs.readFileSync('./lz/ump.png'), caption: teks.trim()})
					break
					case 'take':
             case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            med = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    mod = await linz.downloadAndSaveMediaMessage(med)
		var ttte = args.join(' ')
	    var hgr = ttte.split("|")[0];
		var hg = ttte.split("|")[1];
            satu = hgr !== '' ? hgr : `SELF`
            dua = typeof hg !== 'undefined' ? hg : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(mod, linz, mek, from)
			break
					case 'term': //By Odc
case 'exec':
if (!isOwner) return reply('Kamu siapa?')
const cmd = args.join(' ')
var itsme = `0@s.whatsapp.net`
var split = `*EXECUTOR SELF BOT*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(cmd, (err, stdout) => {
if (err) return linz.sendMessage(from, `root@Nfz.01:~ ${err}`, text, { quoted: linz })
if (stdout) {
linz.sendMessage(from, stdout, text, term)
}
})
break
case 'brainly':
                    brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					linz.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					break
					//IMAGE MANIPULATION
					case 'pensil':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await linz.downloadAndSaveMediaMessage(ger)
	                 anu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                teks = `${anu.display_url}`
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${teks}`, {method: 'get'})
					linz.sendMessage(from, buffer, image, {caption : 'NIH BANG',quoted: mek})
                   }
              break     
              case 'delete-file':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await linz.downloadAndSaveMediaMessage(ger)
	                 anu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                teks = `${anu.display_url}`
                    buffer = await getBuffer(`https://felix-404.herokuapp.com/api/delete?image=${teks}&apikey=GFL`, {method: 'get'})
					linz.sendMessage(from, buffer, image, {caption : 'NIH BANG',quoted: mek})
                   }
              break     
              case 'bobross':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await linz.downloadAndSaveMediaMessage(ger)
	                 anu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                teks = `${anu.display_url}`
                    buffer = await getBuffer(`https://felix-404.herokuapp.com/api/bobross?image=${teks}&apikey=GFL`, {method: 'get'})
					linz.sendMessage(from, buffer, image, {caption : 'NIH BANG',quoted: mek})
                   }
              break     
              case 'ephemeral'://DhyZx:v
              if (!isOwner) return reply('This feature can only be used by the bot owner')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await linz.downloadAndSaveMediaMessage(ger)
				ling = body.slice(9)
				
				linz.sendMessage(from, `${ling}`,
					MessageType.text, {
					sendEphemeral: true,
					thumbnail: owgi
					})
					}
				break
              case 'beautiful':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await linz.downloadAndSaveMediaMessage(ger)
	                 anu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                teks = `${anu.display_url}`
                    buffer = await getBuffer(`https://felix-404.herokuapp.com/api/beautiful?image=${teks}&apikey=GFL`, {method: 'get'})
					linz.sendMessage(from, buffer, image, {caption : 'NIH BANG',quoted: mek})
                   }
              break     
              case 'trash':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await linz.downloadAndSaveMediaMessage(ger)
	                 anu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                teks = `${anu.display_url}`
                    buffer = await getBuffer(`https://felix-404.herokuapp.com/api/trash?image=${teks}&apikey=GFL`, {method: 'get'})
					linz.sendMessage(from, buffer, image, {caption : 'NIH BANG',quoted: mek})
                   }
              break     
              case 'pki':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await linz.downloadAndSaveMediaMessage(ger)
	                 anu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                teks = `${anu.display_url}`
                    buffer = await getBuffer(`https://felix-404.herokuapp.com/api/komunis?image=${teks}&apikey=GFL`, {method: 'get'})
					linz.sendMessage(from, buffer, image, {caption : 'NIH BANG',quoted: mek})
                   }
              break     
              case 'wolverine':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await linz.downloadAndSaveMediaMessage(ger)
	                 anu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                teks = `${anu.display_url}`
                    buffer = await getBuffer(`https://felix-404.herokuapp.com/api/wolverine?image=${teks}&apikey=GFL`, {method: 'get'})
					linz.sendMessage(from, buffer, image, {caption : 'NIH BANG',quoted: mek})
                   }
              break     
                case 'pensil1':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await linz.downloadAndSaveMediaMessage(ger)
	                 anu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                teks = `${anu.display_url}`
                    buffer = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${teks}`, {method: 'get'})
					linz.sendMessage(from, buffer, image, {caption : 'NIH BANG',quoted: mek})
                   }
              break     
              /*text maker*/
              case 'amongus': 
					const pref = `Usage: \n amongus username
                    impostor = true / not impostor = false 
                    color = black|blue|brown|cyan|darkgreen|lime|orange|pink|purple|red|white|yellow \n\nEx :\n amongus  contoh|true|cyan`
					if (args.length < 1) return reply(pref)
					var kntl = args.join(' ')
			        nama = kntl.split("|")[0];
				    impostor = kntl.split("|")[1];
				    color = kntl.split("|")[2];
                    buffer = await getBuffer(`https://vacefron.nl/api/ejected?name=${nama}&impostor=${impostor}&crewmate=${warna}`, {method: 'get'})
                    linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
                    break
                case 'tweettrump':
					ling = args.join(' ')
					
					anu = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${ling}&raw=7`, {method: 'get'})
					buffer = await getBuffer(anu.message)
					linz.sendMessage(from, buffer, image, {caption : 'NIH BANG',quoted: mek})
					break
					
				case 'cmm':
					ling = args.join(' ')
					
					anu = await fetchJson(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${ling}&raw=7`, {method: 'get'})
					buffer = await getBuffer(anu.message)
					linz.sendMessage(from, buffer, image, {caption : 'NIH BANG',quoted: mek})
					break
				 case 'sampah':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await linz.downloadAndSaveMediaMessage(ger)
	                 anu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                teks = `${anu.display_url}`
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${teks}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					linz.sendMessage(from, buffer, image, {caption : 'NIH BANG',quoted: mek})
                   }
              break       
				case 'kanna':
					ling = args.join(' ')
					
					anu = await fetchJson(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${ling}&raw=7`, {method: 'get'})
					buffer = await getBuffer(anu.message)
					linz.sendMessage(from, buffer, image, {caption : 'NIH BANG',quoted: mek})
					break
				//zeks
case 'phkomen': 
                tahta = args.join(' ')
                ja = tahta.split("|")[0];
			    rak = tahta.split("|")[1];
			                                      var imgbb = require('imgbb-uploader')
			ghost = linz.participant
                                         try {
                                         pp = await linz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                                         } catch {
                                         pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
                                         }
                                         media = await getBuffer(pp)
                                         datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
                                           fs.writeFileSync('getpp.jpeg', datae, 'base64')
                                         res = await imgbb("2685f71965fa6c56702e9e70644ff0ad", 'getpp.jpeg')
                     if (args.length < 1) return reply('Teksnya mana gan??')
                     if (args.length > 10) return reply('karakter minimal 10')
                     buff = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=apivinz&img=${res.display_url}&username=${ja}&msg=${rak}`, {method: 'get'})
                     linz.sendMessage(from, buff, image, {quoted: linz, caption: `*${ja}* : ${rak}`})
                  
			break
//Photooxy
case 'naruto': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/naruto?text=${ling}&apikey=apivinz`, {method: 'get'})
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break


case 'blueneon': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${ling}`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break

case 'matrix': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=${body.slice(8)}`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'breakwall': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=apivinz&text=ling`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'greenneon': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/gneon?apikey=apivinz&text=${ling}`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'dropwater': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=apivinz&text=${body.slice(11)}`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'wolflogo': 
wolflogo = args.join(' ')
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
buffer = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=${wolf}&text2=${logo}`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'flowertext': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/flowertext?text=${ling}&apikey=apivinz`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'crosslogo': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/crosslogo?text=${ling}&apikey=apivinz`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'silktext': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/silktext?text=${ling}&apikey=apivinz`, {method: 'get'})
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'flametext': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/flametext?text=${ling}&apikey=apivinz`, {method: 'get'})
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'glowtext': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/glowtext?text=${body.slice(10)}&apikey=apivinz`, {method: 'get'})
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'smoketext': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/smoketext?text=${body.slice(11)}&apikey=apivinz`, {method: 'get'})
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'pubglogo': 
wolflogo = args.join(' ')
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
buffer = await getBuffer(`https://api.zeks.xyz/api/pubglogo?text1=${wolf}&text2=${logo}&apikey=apivinz`, {method: 'get'})
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'skytext': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/skytext?text=${ling}&apikey=apivinz`, {method: 'get'})
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'cslogo': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/cslogo?text=${ling}&apikey=apivinz`, {method: 'get'})
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break

//photo funia
case 'lighttext': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/lithgtext?text=${ling}&apikey=apivinz`, {method: 'get'})
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'retrotext': 
wolflogo = args.join(' ')
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
retro = wolflogo.split("|")[2];
buffer = await getBuffer(`https://api.zeks.xyz/api/retro?text1=${wolf}&text2=${logo}&text3=${retro}&apikey=apivinz`, {method: 'get'})
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'crismes': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/crismes?text=${ling}&apikey=apivinz`, {method: 'get'})
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'snowwrite': 
wolflogo = args.join(' ')
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
buffer = await getBuffer(`https://api.zeks.xyz/api/snowwrite?text1=${wolf}&text2=${logo}&apikey=apivinz`, {method: 'get'})
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'watercolor': 
wolflogo = args.join(' ')
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
buffer = await getBuffer(`https://api.zeks.xyz/api/watercolour?text1=${wolf}&text2=${logo}&apikey=apivinz`, {method: 'get'})
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'firework': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${ling}&apikey=apivinz`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'sandwrite': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=apivinz&text=${ling}`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
//Ephoto
case 'epep': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/epep?text=${ling}&apikey=apivinz`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'gplaybutton': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${ling}&apikey=apivinz`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'splaybutton': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/gplaybutton?text=${ling}&apikey=apivinz`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
//text pro
case 'text3dbox': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=apivinz&text=${ling}`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'text3d': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${ling}&apikey=apivinz`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'phlogo': 
wolflogo = args.join(' ')
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
buffer = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${wolf}&text2=${logo}&apikey=apivinz`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'bplogo': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${ling}&apikey=apivinz`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'leavestext': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${body.slice(12)}&apikey=apivinz`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'textlight': 
ling = args.join(' ')
buffer = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${ling}&apikey=apivinz`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
case 'glitchtext ': 
wolflogo = args.join(' ')
wolf = wolflogo.split("|")[0];
logo = wolflogo.split("|")[1];
anu = await fetchJson(`https://api.zeks.xyz/api/gtext?text1=${wolf}&text2=${logo}&apikey=apivinz`)
linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break

//end semua ajg 
				case 'info':
					me = linz.user
					uptime = process.uptime()
					teks = `*Nama bot* : ${me.name}\n*Nomor Bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total Block Contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}`
					buffer = await getBuffer(me.imgUrl)
					linz.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
				case 'blocklist':
					teks = 'This is list of blocked number :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					linz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break

case 'simi':
camri = args.join(" ")
cahari = await fetchJson (`https://api.zeks.xyz/api/simi?apikey=apivinz&text=${camri}`)
reply (cahari.result)
break
case 'buaya':
case 'pantun':
case 'pakboy':
case 'fuckboy':
aduh = await fetchJson (`https://api.zeks.xyz/api/pantun?apikey=apivinz`)
aduch = (aduh.result)
reply (aduch.pantun)
break
case 'del':
		            case 'd':
		            case 'delete':
					linz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					await limitAdd(sender)
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await linz.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Foto aja mas')
					}
					break
				case 'tp':
					if (args.length < 1) {
						return reply('Pilih themenya om, 1 - 162')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.moe/api/textpro/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Teksnya juga dong om')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.moe/api/textpro?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=barbarapih`
					voss = await fetch(anu)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						linz.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('Terjadi kesalahan, silahkan pilih theme lain')
					}
					break
                reply('mengoke')
                break
case 'playstore':
				text = args.join(' ')
					reply(mess.wait)
					anu = await getBuffer(`https://api.zeks.xyz/api/sgplay?apikey=apivinz&q=${text}`, {method: 'get'})
					capty = `*➸ title :* ${anu.title}\n*➸ app_id :* ${anu.app_id}\n*➸ description :* ${anu.description}\n*➸ developer_id :* ${anu.developer_id}\n*➸ developer :* ${anu.developer}\n*➸ score :* ${anu.score}\n*➸ full_price :* ${anu.full_price}\n*➸ price :* ${anu.price}\n*➸ free :* ${anu.free}`
					linz.sendMessage(from, anu, image, {quoted: mek, caption: capty})
					break
case 'check':
case 'ping':
case 'speed':
const timestamp = speed();
                    const latensi = speed() - timestamp
                    linz.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = linz.user.phone
               
reply(`Versi Whatsapp : ${wa_version}
Speed: *${latensi.toFixed(4)} _Second_*
RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
MCC : ${mcc}
MNC : ${mnc}
Versi OS : ${os_version}
Merk HP : ${device_manufacturer}
Versi HP : ${device_model}`)
break

				case 'ep':
					if (args.length < 1) {
						return reply('as')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.moe/api/ephoto/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('Teksnya juga dong om')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.moe/api/ephoto?pack=${args[0]}&text=${body.slice(3+args[0].length+1)}&apiKey=barbarapih`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					//console.log(vuss)
					if (vuss !== undefined) {
						linz.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('Terjadi kesalahan, silahkan pilih theme lain')
					}
					break
				case 'tahta':
					if (args.length < 1) return reply('Teksnya om')
					anu = `https://mhankbarbar.tech/api/htahta?text=${args.join(' ')}&apiKey=barbarapih`
					voss = await fetch(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						linz.sendMessage(from, await getBuffer(anu), image, { quoted: mek, caption: mess.sucess })
					} else {
						reply('Terjadi kesalahan')
					}
					break

case 'hidetag':
                    if (!isOwner) return reply('This feature can only be used by the bot owner')
                    var value = args.join(" ")
                    var group = await lolhuman.groupMetadata(from)
                    var member = group['participants']
                    var mem = []
                    member.map(async adm => {
                        mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                    var options = {
                        text: value,
                        contextInfo: { mentionedJid: mem },
                        quoted: lol
                    }
                    lolhuman.sendMessage(from, options, text)
                    break
case 'ytmp4':
                if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply('Urlnya mana um?')
                if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
                anu = await fetchJson(`http://hadi-api.herokuapp.com/api/ytvideo?url=${args[0]}`, { method: 'get' })
                if (anu.error) return reply(anu.error)
                teks = `*Title* : ${anu.result.title}`
                thumb = await getBuffer(anu.result.album)
                linz.sendMessage(from, thumb, image, { quoted: mek, caption: teks })
                buffer = await getBuffer(anu.result.download_video)
                linz.sendMessage(from, buffer, video, { mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek })
                await limitAdd(sender)
                break
                
                
case 'mutual':
                   
				 
				 
                if (isGroup) return  reply( 'TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
            linz.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
            case 'next':
                   
				 
				 
                if (isGroup) return  reply( 'TIDAK BISA DI GRUP KAK')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Mencari Pasangan >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Pasangan Ditemukan: 🐊\n*${prefix}next* — Temukan Pasangan Baru`)
                linz.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break

case 'google':
if (!q) return reply(mess.wrongFormat)
ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
reply(mess.wait)
if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
googleIt({ 'query': q }).then(results => {
vars = `_*Hasil Pencarian : ${q}*_\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
lingz.sendMessage(from, ss, image, {caption: vars, quoted : mek})
}).catch(e => {
console.log(e)
reply(`${e}`)
})
break

case 'notif':
if (!isGroup) return reply('Gc Only')
if (!isOwner) return reply('`owner only`')
teks = `Notif dari @${sender.split("@")[0]}\n*Pesan : ${body.slice(7)}*`
group = await linz.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await linz.sendMessage(from, options, text)
break
case 'truth':
                 
                 
				 
					const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					linz.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					linz.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
                case 'dare':
                 if (!isRegistered) return reply( `silahkan regis dulu dengan cara
 +verif your email`)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll','harus bilang i love you ama rifai ni no wa nya wa.me/62856438334741 dan harus ngewe ama rifai wa.me/62856438334741',]
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					linz.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					await limitAdd(sender)
					break

                case 'triggerd':
							case 'tg':
							case 'triggered':

                                         

             
				 

                                        var imgbb = require('imgbb-uploader')

                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {

                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

                                         reply('[❕] Sedang di proses.........')

                                         owgi = await linz.downloadAndSaveMediaMessage(ger)

                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)

                                        teks = `${anu.display_url}`

                                        ranp = getRandom('.gif')

                                        rano = getRandom('.webp')

                                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`

                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {

                                                fs.unlinkSync(ranp)

                                                if (err) return reply(mess.error.stick)

                                                nobg = fs.readFileSync(rano)

                                                linz.sendMessage(from, nobg, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, caption: 'Nih hasilnya kak...'})

                                                fs.unlinkSync(rano)

                                        })

                                    

                                             } else {

                                                 reply('Gunakan foto!')

                                          }
                                          linz.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break


                
    case 'takestick': //tambah wm ngontol
				if (!isQuotedSticker) return reply(`Reply sticker dengan command\n*${prefix}takestick example|example,credits=BY RYZ OR RADYA*`) // jan di ubh bangsat ryz|ganz nya mengontol kau
				const hah2 = body.slice(11)
				if (!hah2.includes('|')) return reply(`Reply sticker dengan command\n*${prefix}takestick nama|author*`)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await linz.downloadAndSaveMediaMessage(encmedia, `./temp/${sender}`)
				const packname2 = hah2.split('|')[0]
			    const author2 = hah2.split('|')[1]
				exif.create(packname2, author2, `takestick_${sender}`)
				exec(`webpmux -set exif ./temp/takestick_${sender}.exif ./temp/${sender}.webp -o ./temp/${sender}.webp`, async (error) => {
					if (error) return reply('*Makanya jan ubh ngentod*')
					linz.sendMessage(from, fs.readFileSync(`./temp/${sender}.webp`), MessageType.sticker, {quoted:mek})
					fs.unlinkSync(media)
					fs.unlinkSync(`./temp/takestick_${sender}.exif`)
				})
				break

                case 'wanted':
	
			    
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply('Loading.....')
	  owgi = await sora.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("3ea1465ef91578a90ee81f7d41c59a1f", owgi)
	  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
	 linz.sendMessage(from, hehe, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Neh...", 'jpegThumbnail': fs.readFileSync('odc.jpg')}}}})
	} else {
	  reply('Jangan tambah kan apapun pada command')
	}
	break

case 'giftlimit': 
				if (!isOwner) return reply(`owner only`(pushname))
				const nomerr = args[0].replace('@','')
                const jmla = args[1]
                if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @62895710074883 20`)
                const cysz = nomerr + '@s.whatsapp.net'
                var found = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cysz){
                                found = i
                            }
                        })
                        if (found !== false) {
                            _limit[found].limit -= jmla
                            const updated = _limit[found]
                            const result = `Gift kuota limit sukses dengan SN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
* GIFT KUOTA LIMIT *
� User : @${updated.id.replace('@s.whatsapp.net','')}
� Limit: ${limitawal-updated.limit}`
                            console.log(_limit[found])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(result)
                        } else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        }
                break
case 'giftlimitprem': 
               if (!isPremium) return reply('ind.prem')
				const nomerrl = args[0].replace('@','')
                const jmlah = args[1]
                if (jmlah <= 1) return reply(`minimal gift limit adalah 1`)
                if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                if (!nomerrl) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6285648334741 20`)
                const cyszk = nomerrl + '@s.whatsapp.net'
                var founde = false
                        Object.keys(_limit).forEach((i) => {
                            if(_limit[i].id === cyszk){
                                founde = i
                            }
                        })
                        if (found !== false) {
                            _limit[founde].limit -= jmlah
                            const updatedk = _limit[founde]
                            const resultt = `Gift kuota limit sukses dengan SN: ${createSerial(8)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
* GIFT KUOTA LIMIT *
� User : @${updatedk.id.replace('@s.whatsapp.net','')}
� Limit: ${limitawal-updatedk.limit}`
                            console.log(_limit[founde])
                            fs.writeFileSync('./database/user/limit.json',JSON.stringify(_limit));
                            reply(resultt)
                        } else {
                                reply(`Maaf, nomor ${nomerrl} tidak terdaftar di database!`)
                        }
                break

					case 'suit':
					//if (isBanned) return reply(ind.ban())
					if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					const player = args.join(" ")
					const botc = ['batu','kertas','gunting'];
					//const p = player.includes('batu','kertas','gunting');  //BIKIN ERROR AJA LU ANJING
					if ( args.length < 1 ) return reply('Lu mau pilih apa?')
					bot = botc[Math.floor(Math.random() * botc.length)]
					
					var resu = '';
					if ( player == bot ) {
					resu = '*SERI*';
					} else if( player == 'kertas' ) {
					resu = ( bot == 'batu' ) ? 'Kamu MENANG!' : 'Kamu KALAH!';
					} else if( player == 'batu' ) {
					resu = ( bot == 'kertas' ) ? 'Kamu KALAH!' : 'Kamu MENANG!';
					} else if( player == 'gunting' ) {
					resu = ( bot == 'batu' ) ? 'Kamu KALAH!' : 'Kamu MENANG!';
					} else {
					resu = 'Itu apaan?'
					} 
					if (resu == "Itu apaan?") reply (`Maaf kamu diskualifikasi dari permainan karna bukan gunting, batu ato kertas`)
					const suitxp = Math.ceil(Math.random() * 1000)
					addLevelingXp(sender, suitxp)
					teks = '*HASIL PERTANDINGAN*\n\n*Kamu Memilih :* ' + player + '\n*Dan _bot_ Memilih :* ' + bot + '\n\n*HASIL =* ' + resu + '\n\n Kamu mendapatkan *_EXP_* sebesar = ' + suitxp;
					linz.sendMessage(from, teks, text, {quoted: mek}) 
					await limitAdd(sender)
					break

case 'dompet':
				//if (isBanned) return reply(ind.ban())
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
					const kantong = checkATMuser(sender)
					reply(ind.uangkau(pushname, sender, kantong))
					break
					
					case 'limit':
				//if (isBanned) return reply(ind.ban())
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				checkLimit(sender)
				break
					
				case 'buylimit':
				//if (isBanned) return reply(ind.ban())
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
					payout = body.slice(10)
					const koinPerlimit = 1000
					const total = koinPerlimit * payout
					if ( checkATMuser(sender) <= total) return reply (`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
					if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`* PEMBAYARAN BERHASIL *\n\n*pengirim* : 404SQUAD Support \n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n *harga limit* : ${koinPerlimit}/limit\n *sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
				// games
				case 'jualikan':
					//
					if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
					if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
					bayar = args.join(' ')           
					const hargaIkan = 10000
					const hasil1 = bayar * hargaIkan
					if ( getMancingIkan(sender) <= 1 ) return reply(`maaf ${pushname} kamu tidak punya ikan`)
					if ( getMancingIkan(sender) >= 1 ) {
						jualIkan(sender, bayar)
						addKoinUser(sender, hasil1)
					await reply(`* PENJUALAN BERHASIL *\n\n*Jumlah ikan dijual:* ${bayar}\n*Uang didapat:* ${hasil1}\n\n*Sisa ikan:* ${getMancingIkan(sender)}\n*Sisa uang:* ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
					}
					break
					case 'jualcoal':
					//
					if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
					if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
					bayar = args.join(' ')           
					const hargaCoal = 15000
					const hasil2 = bayar * hargaCoal
					if ( getMiningcoal(sender) <= 1 ) return reply(`maaf ${pushname} kamu tidak punya coal`)
					if ( getMiningcoal(sender) >= 1 ) {
						jualcoal(sender, bayar)
						addKoinUser(sender, hasil2)
					await reply(`* PENJUALAN BERHASIL *\n\n*Jumlah Coal dijual:* ${bayar}\n*Uang didapat:* ${hasil2}\n\n*Sisa coal:* ${getMiningcoal(sender)}\n*Sisa uang:* ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
					}
					break
					case 'lebur':
					//
					if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
					if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
					bayar = args.join(' ')           
					const hargaOre = 2
					const hasil3 = bayar * hargaOre
					if ( getMiningore(sender) <= 1 ) return reply(`maaf ${pushname} kamu tidak punya Ore`)
					if ( getMiningore(sender) >= 1 ) {
						jualore(sender, bayar)
						addIngot(sender, hasil3)
					await reply(`* LEBUR BERHASIL *\n\n*Jumlah Ore dilebur :* ${bayar}\n*Ingot didapat:* ${hasil3}\n\n*Sisa Ore:* ${getMiningore(sender)}`)
					}
					break
					case 'jualstone':
					//
					if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
					if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
					bayar = args.join(' ')           
					const hargaStone = 900
					const hasil4 = bayar * hargaStone
					if ( getMiningstone(sender) <= 1 ) return reply(`maaf ${pushname} kamu tidak punya stone`)
					if ( getMiningstone(sender) >= 1 ) {
						jualstone(sender, bayar)
						addKoinUser(sender, hasil4)
					await reply(`* PENJUALAN BERHASIL *\n\n*Jumlah Batu dijual:* ${bayar}\n*Uang didapat:* ${hasil4}\n\n*Sisa Batu:* ${getMiningstone(sender)}\n*Sisa uang:* ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
					}
					break
					case 'jualingot':
					//
					if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
					if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
					bayar = args.join(' ')           
					const hargaIngot = 35000
					const hasil5 = bayar * hargaStone
					if ( getMiningingot(sender) <= 1 ) return reply(`maaf ${pushname} kamu tidak punya ingot`)
					if ( getMiningingot(sender) >= 1 ) {
						jualingot(sender, bayar)
						addKoinUser(sender, hasil5)
					await reply(`* PENJUALAN BERHASIL *\n\n*Jumlah Ingot dijual:* ${bayar}\n*Uang didapat:* ${hasil5}\n\n*Sisa Ingot:* ${getMiningingot(sender)}\n*Sisa uang:* ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
					}
					break
					case 'jualkayu':
					//
					if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
					if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
					bayar = args.join(' ')           
					const hargaKayu = 18000
					const hasil6 = bayar * hargaStone
					if ( getNebangKayu(sender) <= 1 ) return reply(`maaf ${pushname} kamu tidak punya kayu`)
					if ( getNebangKayu(sender) >= 1 ) {
						jualkayu(sender, bayar)
						addKoinUser(sender, hasil6)
					await reply(`* PENJUALAN BERHASIL *\n\n*Jumlah Kayu dijual:* ${bayar}\n*Uang didapat:* ${hasil6}\n\n*Sisa Kayu :* ${getNebangKayu(sender)}\n*Sisa uang:* ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
					}
					break
case 'addvn':
				

				svst = body.slice(7)
				if (!svst) return reply('Nama audionya apa su?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await linz.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))
				linz.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 
				break
case 'getvn':
			   if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')
				namastc = body.slice(7)
				buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)
				linz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, ptt: true })
				break
case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*`
				linz.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": audionye } })
				break
case 'kontak':
                        entah = args[0]
                        disname = args[1]
                        if (isNaN(entah)) return reply('Invalid phone number'.toUpperCase());
                        vcard = 'BEGIN:VCARD\n'
                                  + 'VERSION:3.0\n'
                                  + `FN:${disname}\n`
                                  + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
                                  + 'END:VCARD'.trim()
                            linz.sendMessage(from, {displayName: disname, vcard: vcard}, contact)
                            break
 case 'kick':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply('BOT JADIIN ADMIN DULU')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 Y𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						linz.groupRemove(from, mentioned)
						}
					break
case 'cekpremium':
case 'cekprem':
				const cekExp = ms(getPremExpired(sender) - Date.now())
				reply(`*ã€Œ PREMIUM EXPIRED ã€*\n\nâž¸ *ID*: ${sender.split('@')[0]}\nâž¸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
			break 
						case 'addpremium':
						case 'addprem':
			if (!isOwner) return reply(mess.only.ownerB)
			expired = "30d"
			const pnom = {id: `${args[0].replace("@",'')}@s.whatsapp.net`, expired: Date.now() + toMs(expired) }
			prem.push(pnom) 
			fs.writeFileSync('./database/user/premium.json',JSON.stringify(prem))
			reply(`ã€Œ PREMIUM ADD ã€*\n*Name* : ${pnom}\n*Expired* : 30 DAY\n*thank for order premium*`)
		break
		case 'dellpremium':
		case 'delprem':
			if (!isOwner) return reply(mess.only.ownerB)
			const hnom = `${args[0].replace('@','')}@s.whatsapp.net`
			var arr = prem
			for( var dp = 0; dp < arr.length; dp++){ 
			if ( arr[dp] === hnom) { 
			arr.splice(dp, 1); 
			dp--; 
			fs.writeFileSync('./database/user/premium.json',JSON.stringify(arr))
			}
			}
			reply(`*ã€Œ PREMIUM DELETE ã€*\n*Name* : ${hnom}\n*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`)
			break 
		case 'premiumlist':
		case 'listprem':
			if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
			let listPrem = 'ã€Œ *PREMIUM USER LIST* ã€\n\n'
			let nomorList = 0
			const deret = getAllPremUser()
			const arrayPremi = []
			for (let i = 0; i < deret.length; i++) {
			const checkExp = ms(getPremExpired(deret[i]) - Date.now())
			arrayPremi.push(getAllPremUser()[i])
			nomorList++
			listPrem += `${nomorList}. wa.me/${getAllPremUser()[i].split("@")[0]}\nâž¸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
			}
			await reply(listPrem)
		break
					case 'shutdown':
               case 'stop':
               case 's':
               if (!isOwner) return reply('Kamu siapa?')
                    return linz.sendMessage(from, JSON.stringify(eval(process.exit())), text, {quoted:mek})
                    break
				case 'resetlimit':
				if (!isOwner) return reply(`owner only`())
				var ngonsol = []
				rest = _limit.indexOf([25])
				_limit.splice(rest)
				fs.writeFileSync('./database/user/limit.json', JSON.stringify(ngonsol))
				reply(`LIMIT BERHASIL DI RESET BOS`)
				break
					
				case 'transfer':
				//if (isBanned) return reply(ind.ban())
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				if (!q.includes('|')) return  reply(ind.wrongf())
                			const tujuan = q.substring(0, q.indexOf('|') - 1)
                			const jumblah = q.substring(q.lastIndexOf('|') + 1)
                			if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                			if (jumblah < 100 ) return reply(`minimal transfer 100`)
                			if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                			const tujuantf = `${tujuan.replace("@", '')}`
               				fee = 0.005 *  jumblah
                			hasiltf = jumblah + fee
                			addKoinUser(`${tujuantf}@s.whatsapp.net`, hasiltf)
                			confirmATM(sender, hasiltf)
                			reply(`* SUKSES *\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : 30*jumblah`)
                			break
case 'daftar':
                if (isRegistered) return  reply(ind.rediregis())
                if (args.length < 1) return reply(`*「 regis dulu 」*\n\n *${prefix}daftar nama|email|code* \n *email lu verif dulu buat dapat code*`)
                var qersa = args.join(" ")
                const namaUser = qersa.split("|")[0];
                const emailUser = qersa.split("|")[1];
                const codeUser = qersa.split("|")[2];
                const umurUser = "20"
                const serialUser = createSerial(20)
                veri = sender
		//**if (codeUser == rdm) return reply('code lu gk valid ajg >:v siapa suruh kasih email fake >:v')
		           if (Number(codeUser) === 165310) {
			       await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
		            } else if (Number(codeUser) === 177978) {        
                    await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                    } else if (Number(codeUser) === 211759) {        
                    await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))           
                    } else if (Number(codeUser) === 212643) {        
                    await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                    } else if (Number(codeUser) === 229540) {        
                    await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                    } else if (Number(codeUser) === 250029) {        
                    await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                    } else if (Number(codeUser) === 211519) {        
                    await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                    } else if (Number(codeUser) === 256097) {        
                    await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                    } else if (Number(codeUser) === 163478) {        
                    await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                    } else if (Number(codeUser) === 91505) {        
                    await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                    } else if (Number(codeUser) === 79280) {        
                    await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                    } else if (Number(codeUser) === 260629) {        
                    await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                    } else if (Number(codeUser) === 128051) {        
                    await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                    } else if (Number(codeUser) === 239536) {        
                    await linz.sendMessage(from, ind.registered(namaUser, emailUser, serialUser, time, sender), text, { quoted: freply2 })
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    addATM(sender)
                    addLevelingId(sender)
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Email:', color(emailUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
					} else {
						reply('kode lu gk valid ajg')
					}
                                                    
                
					break
		/*<=================================[MENU GABUT/SIMPLE/]======================================>*/
					
          	case 'mining':
                      if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
                      if (isLimit(sender)) return reply(ind.limitend(pushname))
                      if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                      if (isOwner) {
                      const one = 999999999
                      addLevelingXp(sender, one)
                      addLevelingLevel(sender, 99)
                      reply(`karena anda owner kami dari team bot mengirim ${one}Xp untuk anda`)
                      }else{
                      setTimeout( () => {
                      const mining = Math.ceil(Math.random() * 10000)
                      addLevelingXp(sender, mining)
                      reply(`*selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
                      }, 3000); //2minute
                      setTimeout( () => { 
                      reply('Sedang mining selama 2 menit, silahkan tunggu...')
                      }, 0); //1sec
                      }
               		await limitAdd(sender)
			break
			
			case 'mancing':
			if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
			if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
			setTimeout( () => {
			const fishing = Math.ceil(Math.random() * 10)
			addIkan(sender, fishing)
			reply(`*SELAMAT*\n\n kamu mendapatkan *${fishing}*Ikan selama 2 menit`)
			}, 3000); //2 minute
			setTimeout( () => {
			reply('Sedang Memancing, silahkan tunggu...')
			}, 0) //1sec
			break
			case 'jelajah':
			if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
			if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
			var tempsa = args.join(" ")
			//**MAP**//
			
			
			//**corbiens river**//
			if (tempsa == 'corbiens river') {
			asu = await getBuffer(`https://i.ibb.co/YPpvKpK/Corbiens-River.jpg`, {method: 'get'})
			setTimeout( () => {
			const vio = Math.ceil(Math.random() * 70) // batu
			const pikan = Math.ceil(Math.random() * 15)
			addStone(sender, vio)
			addIkan(sender, pikan)
			linz.sendMessage(from, asu, image, { quoted: mek, caption: `*SELAMAT*\n\n kamu mendapatkan *${vio}* batu dan *${pikan}* ikan` })
			}, 3000); //2 minute
			setTimeout( () => {
			reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) //1sec
			
			//**Chiltawa Woods**//
            } else if (tempsa === 'chiltawa woods') {    
            gos = await getBuffer(`https://i.ibb.co/QkRFGNJ/Chiltawa-Woods.jpg`, {method: 'get'})
            setTimeout( () => {
			const tesaaq = Math.ceil(Math.random() * 110) // batu
			const ise = Math.ceil(Math.random() * 20)
			addStone(sender, tesaaq)
			addKayu(sender, ise)
			linz.sendMessage(from, gos, image, { quoted: mek, caption: `*SELAMAT*\n\n kamu mendapatkan *${tesaaq}* batu dan *${ise}* kayu` })
			}, 3000); //2 minute
			setTimeout( () => {
			reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) //1sec
			
			//**cochher-sea**//
            } else if (tempsa === 'cochher sea') {             
            seae = await getBuffer(`https://i.ibb.co/Rz3d0qb/Cochher-Sea.jpg`, {method: 'get'})
            setTimeout( () => {
			const feds = Math.ceil(Math.random() * 65)
			addIkan(sender, feds)
			linz.sendMessage(from, seae, image, { quoted: mek, caption: `*SELAMAT*\n\n kamu mendapatkan *${feds}* ikan` })
			}, 3000); //2 minute
			setTimeout( () => {
			reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) //1sec
			
			//**limingstall-mountains**//
            } else if (tempsa === 'limingstall mountains') {                   
            seoe = await getBuffer(`https://i.ibb.co/8NHsQjy/Limingstall-Mountains.jpg`, {method: 'get'})
            setTimeout( () => {
			const fads = Math.ceil(Math.random() * 50)
			const fids = Math.ceil(Math.random() * 80)
			addOre(sender, fads)
			addStone(sender, fids)
			linz.sendMessage(from, seoe, image, { quoted: mek, caption: `*SELAMAT*\n\n kamu mendapatkan *${fads}* copper ore dan ${fids} batu` })
			}, 3000); //2 minute
			setTimeout( () => {
			reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) //1sec
			
			//**chade-mountain**//
            } else if (tempsa === 'chade mountain') {      
            seye = await getBuffer(`https://i.ibb.co/12MZQ36/Chade-Mountain.jpg`, {method: 'get'})
            setTimeout( () => {
			const pore = Math.ceil(Math.random() * 40)
			const pone = Math.ceil(Math.random() * 60)
			addOre(sender, pore)
			addStone(sender, pone)
			linz.sendMessage(from, seye, image, { quoted: mek, caption: `*SELAMAT*\n\n kamu mendapatkan *${pore}* copper ore dan ${pone} batu` })
			}, 3000); //2 minute
			setTimeout( () => {
			reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) //1sec
			
			//**gerbil woods**//
			} else if (tempsa === 'gerbil woods') {   
            siae = await getBuffer(`https://i.ibb.co/WtNWvxL/Gerbil-Woods.jpg`, {method: 'get'})
            setTimeout( () => {
			const tzys = Math.ceil(Math.random() * 90) // batu
			const isue = Math.ceil(Math.random() * 45)
			addStone(sender, tzys)
			addKayu(sender, isue)
			linz.sendMessage(from, siae, image, { quoted: mek, caption: `*SELAMAT*\n\n kamu mendapatkan *${tzys}* batu dan *${isue}* kayu` })
			}, 3000); //2 minute
			setTimeout( () => {
			reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) //1sec
			
			//**moobiens grassland**//
			} else if (tempsa === 'moobiens grassland') {      
            bbbb = await getBuffer(`https://i.ibb.co/QK5Bx2r/Moobiens-Grassland.jpg`, {method: 'get'})
            setTimeout( () => {
			const awqu = Math.ceil(Math.random() * 200) // batu
			const usui = Math.ceil(Math.random() * 20)
			addStone(sender, awqu)
			addKayu(sender, usui)
			linz.sendMessage(from, bbbb, image, { quoted: mek, caption: `*SELAMAT*\n\n kamu mendapatkan *${awqu}* batu dan ${usui} kayu` })
			}, 3000); //2 minute
			setTimeout( () => {
			reply('Sedang berpetualang, silahkan tunggu...')
			}, 0) //1sec
			} else {
			seae = await getBuffer(`https://i.ibb.co/JqQbc9B/MAP.jpg`, {method: 'get'})
			tesk = `*PILIH WILAYAH YANG INGIN KAMU JELAJAHI*


⚪Corbiens River
🔵Cochher Sea
⚫Moobiens Grassland
🟣Gerbil Woods
🟢Chiltawa Woods
🟠Limingstall Mountains
🔴Chade Mountain

Sumber Nama tempat  _https://www.fantasynamegenerators.com/_`
			linz.sendMessage(from, seae, image, { quoted: mek, caption: tesk })
					}
			
			
			
			
			
			break
			
			
			
			
			
			
			
			
			
			
			
			case 'nambang':
			if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
			if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
			setTimeout( () => {
			const hasts = Math.ceil(Math.random() * 100) // batu
			const coali = Math.ceil(Math.random() * 30) // coal
			const oreo = Math.ceil(Math.random() * 10) // ore
			// add barang
			addStone(sender, hasts)
			addCoal(sender, coali)
			addOre(sender, oreo)
			reply(`*SELAMAT*\n\n kamu mendapatkan *${hasts}* batu , *${coali}* coal , dan *${oreo}* ore`)
			}, 3000); //2 minute
			setTimeout( () => {
			reply('Sedang menambang, silahkan tunggu...')
			}, 0) //1sec
			break
			case 'nebang':
			if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
			if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
			setTimeout( () => {
			const oreo = Math.ceil(Math.random() * 20)
			addKayu(sender, oreo)
			reply(`*SELAMAT*\n\n kamu mendapatkan *${oreo}*kayu selama 2 menit`)
			}, 3000); //2 minute
			setTimeout( () => {
			reply('Sedang menambang, silahkan tunggu...')
			}, 0) //1sec
			break
case 'goplanet':
			if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
			if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
			setTimeout( () => {
			const bertualang = Math.ceil(Math.random() * 100)
			const goplanet =['merkurius','venus','mars','jupiter','saturnus','neptunus','uranus']
			const planetari = goplanet[Math.floor(Math.random() * goplanet.length)]
			addPlanet(sender, bertualang)
			reply(`*SELAMAT*\n\n kamu mendapatkan *${bertualang}*bahan kimia dari *${planetari}* selama 2 tahun`)
			}, 3000); //2 minute
			setTimeout( () => {
			reply('Sedang bertualang, silahkan tunggu... 2 tahun')
			}, 0) //1sec
			break
case 'jualbahankimia':
					//
					if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
					if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
					buayar= body.slice(16)
					const hargakimia = 1000
					const dapetin = buayar * hargakimia
					if ( getBertualangPlanet(sender) <= 1 ) return reply(`maaf ${pushname} kamu tidak punya bahankimia`)
					if ( getBertualangPlanet(sender) >= 1 ) {
						jualbahankimia(sender, buayar)
						addKoinUser(sender, dapetin)
					await reply(`* PENJUALAN BERHASIL *\n\n*Jumlah bahankimia dijual:* ${buayar}\n*Uang didapat:* ${dapetin}\n\n*Sisa bahankimia:* ${getBertualangPlanet(sender)}\n*Sisa uang:* ${checkATMuser(sender)}\n\nPenjualan berhasil dengan nomor pembayaran\n${createSerial(15)}`)
					}
					break
case 'sisabahankimia':
			if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
			teks = `*Jumlah bahankimia Yang didapatkan _${pushname}_ adalah:*\n\n*_${getBertualangPlanet(sender)}_*`
			linz.sendMessage(from, teks, text, {quoted: mek})
			break
					case 'judi':
					if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (!isEventon) return reply('ya maap aja bro, tapi event grub belum di aktifkan')
					cas = body.slice(6)
					if (checkATMuser(sender) < cas) return reply(`uang mu tidak mencukupi untuk melakukan judi`)
					if ( args.length < 1 ) return reply('Dih, NooB!!')
					if ( isNaN(cas)) return reply('Lu mau taruhan brp?')
					const resg = ["Kamu MENANG!!","Kamu KALAH!!"];
					bayar = confirmATM(sender, cas)
					setTimeout( () => {
					const rand = Math.ceil(Math.random() * 2)
					const judi = cas + 0
					const hasil = resg[Math.floor(Math.random() * resg.length)]
					if ( hasil == "Kamu MENANG!!" ) {
						addKoinUser(sender, judi)
						reply(`*SELAMAT*\n\nKamu memenangkan casino sebesar *_${judi}_*\n\nKumpulkan uang untuk membeli limit`)
					} else if(hasil == "Kamu KALAH!!") {
						confirmATM(sender, cas)
						reply(`Kamu KALAH!! dan kehilangan uang sebesar ${cas}`)
					} else {
					reply(" X error X ")
					}
					}, 3000); //1 Minute
					setTimeout( () => {
						reply(`Menunggu hasil!.`)
					}, 0) //1 sec
						await limitAdd(sender)
						break

					
					
			
			case 'inv':
			case 'tas':
			case 'inventory':
			var imgbb = require('imgbb-uploader')
            if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
			try {
                pporg = await lingz.getProfilePicture(anu.jid)
                } catch (e) {
                pporg = 'https://i.imgur.com/rJBKu0Z.jpg'
            }
			 datio = await imageToBase64(JSON.stringify(pporg).replace(/\"/gi, ''))
		     fs.writeFileSync('bbbbbb.jpeg', datio, 'base64')
			 anos = await imgbb("ea2f4c5c28f700b9d257d77c4f5183ae", 'bbbbbb.jpeg')
	         ime = `${anos.display_url}`
			 buffer = await getBuffer(`https://felix-404.herokuapp.com/api/knights/inv?apikey=GFL&bg=https://i.ibb.co/4YBNyvP/images-76.jpg&pp=${ime}&coal=${getMiningcoal(sender)}&stone=${getMiningstone(sender)}&ore=${getMiningore(sender)}&ingot=${getMiningingot(sender)}&wood=${getNebangKayu(sender)}&fish=${getMancingIkan(sender)}`, {method: 'get'})
			teks = `
┏[ *YOUR INVENTORY* ]
┃
┣ *COAL* : ${getMiningcoal(sender)}
┣ *STONE* : ${getMiningstone(sender)}
┣ *COPPER ORE* : ${getMiningore(sender)}
┣ *INGOT ORE* : ${getMiningingot(sender)}
┣ *WOOD* : ${getNebangKayu(sender)}
┗ *FISH* : ${getMancingIkan(sender)}`
			linz.sendMessage(from, buffer, image, {quoted: mek, caption: teks })
			break

			
				case 'bisakah':
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					linz.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender)
					break
					
					case 'katailham':
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					katailham = body.slice(1)
					const kata =['kamu baik','kamu suka coli/colmek','mending rakit PC','Mending nonton wibu?','kamu besok jadian','kamu suka owner','kamu anak babi','@3 suka coli','@2 suka sm kamu','@1 autis sekali','ngentot lu ya?','ngapain tidur, kalau besok bangun lagi','dia cuman penasaran, udah jangan baperan','semua cwk sama aja','Kalau dia bercanda,Ketawa.jgn jatuh cinta','mending save no owner:v','lu wibu, nolep lagi','mak lu gayming']
					const ilham = kata[Math.floor(Math.random() * kata.length)]
					linz.sendMessage(from, 'Pertanyaan : *'+katailham+'*\n\nJawaban : '+ ilham, text, { quoted: mek })
					await limitAdd(sender)
					break
					
				case 'kapankah':
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					linz.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender)
					break
					
         			case 'apakah':
         			if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					linz.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender)
					break
					
				case 'rate':
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					linz.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					await limitAdd(sender)
					break
					
				case 'babi':
					if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					const sips = pushname[Math.floor(Math.random() * msk.length)]
					teks = `*Yang Paling Babi Disini Adalah :* @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
					case 'igdl': 
case 'instagram':
if (!q) return reply('Link Yang Mana? ')
if (!q.includes('instagram')) return reply(mess.error.Iv)
reply(mess.wait)
anu = await igDownloader(`${q}`)
.then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
.catch((err) => { reply(String(err)) })
break

case 'tomp4':
			            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
			            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			            owgi = await linz.downloadAndSaveMediaMessage(ger)
			            webp2mp4File(owgi).then(res=>{
			            sendMediaURL(from,res.result,'Done')
			            })
			            }else {
			            reply('reply stiker')
			            }
			            fs.unlinkSync(owgi)
			            break
		
			case 'attp':
				try {
                    quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    reply(mess.wait)
sendStickerFromUrl(from, `http://zekais-api.herokuapp.com/attg?text=${encodeURIComponent(quotedText)}`)
				} catch {
					if (!q) return reply(mess.wrongFormat)
					reply(mess.wait)
sendStickerFromUrl(from, `http://zekais-api.herokuapp.com/attg?text=${encodeURIComponent(body.slice(6))}`)
				  }
				    break
case 'ttp':
				try {
                    quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
                    reply(mess.wait)
sendStickerFromUrl(from, `https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(quotedText)}`)
				} catch {
					if (!q) return reply(mess.wrongFormat)
					reply(mess.wait)
sendStickerFromUrl(from, `https://api.xteam.xyz/ttp?file&text=${encodeURIComponent(args.join(' '))}`)
				  }
				    break
				case 'watak':
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					watak = body.slice(1)
					wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu"]
					const tak = wa[Math.floor(Math.random() * wa.length)]
					linz.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
					break 
					
					case 'gantengcek':
				case 'cekganteng':
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					linz.sendMessage(from, 'Pertanyaan : Cek Ganteng Bang *'+ganteng+'*\n\nJawaban : '+ teng +'', text, { quoted: mek })
					break
					
				case 'cantikcek':
				case 'cekcantik':
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					cantik = body.slice(11)
					if (args.length < 1) return reply('Yg Mau dicek Siapa Kak??')
					const can =['10% banyak" perawatan ya kak:v\nCanda Perawatan:v','30% Semangat Kaka Merawat Dirinya><','20% Semangat Ya Kaka👍','40% Wahh Kaka><','50% kaka cantik deh><','60% Hai Cantik🐊','70% Hai Ukhty🐊','62% Kakak Cantik><','74% Kakak ni cantik deh><','83% Love You Kakak><','97% Assalamualaikum Ukhty🐊','100% Kakak Pake Susuk ya??:v','29% Semangat Kakak:)','94% Hai Cantik><','75% Hai Kakak Cantik','82% wihh Kakak Pasti Sering Perawatan kan??','41% Semangat:)','39% Lebih Semangat🐊']
					const tik = can[Math.floor(Math.random() * can.length)]
					linz.sendMessage(from, 'Pertanyaan : Cantik Cek Kakak *'+cantik+'*\n\nPersen Kecantikan : '+ tik +'', text, { quoted: mek })
					break
					
				case 'terbalik':
				case 'tebalik':
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ngebuff = `${body.slice(9)}`
					anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${ngebuff}`, {method: 'get'})
					ngebuff = `${anu.result.kata}`
					linz.sendMessage(from, ngebuff, text, {quoted: mek})
					await limitAdd(sender)
					break
					
				case 'terbalik':
				case 'tebalik':
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ngebuff = `${body.slice(9)}`
					anu = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${ngebuff}`, {method: 'get'})
					ngebuff = `${anu.result.kata}`
					linz.sendMessage(from, ngebuff, text, {quoted: mek})
					await limitAdd(sender)
					break
					
					case 'akinator': // Premium / VIP apikey only
                    if (akinator.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/akinator/start?apikey=${apikey}`)
                    var { server, frontaddr, session, signature, question, step } = get_result.result
                    const data = {}
                    data["server"] = server
                    data["frontaddr"] = frontaddr
                    data["session"] = session
                    data["signature"] = signature
                    data["question"] = question
                    data["step"] = step
                    ini_txt = `${question}\n\n`
                    ini_txt += "0 - Ya\n"
                    ini_txt += "1 - Tidak\n"
                    ini_txt += "2 - Saya Tidak Tau\n"
                    ini_txt += "3 - Mungkin\n"
                    ini_txt += "4 - Mungkin Tidak"
                    linz.sendMessage(from, ini_txt, text, { quoted: lol }).then(() => {
                        akinator[sender.split('@')[0]] = data
                        fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    })
                    break
                case 'cancelakinator':
                    if (!akinator.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki akinator sebelumnya")
                    delete akinator[sender.split('@')[0]]
                    fs.writeFileSync("./database/akinator.json", JSON.stringify(akinator))
                    reply("Success mengcancel akinator sebelumnya")
                    break
					
				case 'slap':
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
                    		if (isLimit(sender)) return reply(ind.limitend(pusname))
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ngentot lu ya?','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud?','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi','Ngontol Amat,Mintak di ewe?']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = fs.readFileSync('./storage/chika.gif')
					linz.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
					
				case 'tampar':
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`, {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						linz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
case 'level':
		case 'lvl':
                if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
                if (!isLevelingOn) return reply(ind.lvlnoon())
                if (!isGroup) return reply(ind.groupo()) 
            var imgbb = require('imgbb-uploader')
			try {
                ppirg = await lingz.getProfilePicture(anu.jid)
                } catch (e) {
                ppirg = 'https://i.imgur.com/rJBKu0Z.jpg'
            }
			 datio = await imageToBase64(JSON.stringify(ppirg).replace(/\"/gi, ''))
		     fs.writeFileSync('pprank.jpeg', datio, 'base64')
			 anos = await imgbb("ea2f4c5c28f700b9d257d77c4f5183ae", 'pprank.jpeg')
	         imie = `${anos.display_url}`
	
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `*LEVEL*
*Nama* : ${pushname}
*Nomor* : wa.me/${sender.split("@")[0]}
*User XP* :  ${userXp}/${requiredXp}
*User Level* : ${userLevel}`
               buffer = await getBuffer(`https://felix-404.herokuapp.com/api/knights/rank?apikey=GFL&pp=${imie}&nama=${pushname}&bg=https://i.ibb.co/4YBNyvP/images-76.jpg&needxp=${requiredXp}&currxp=${userXp}&level=${userLevel}&rank=tes&frame=https://i.ibb.co/DzC5CT3/Frame-1.png`, {method: 'get'})
               linz.sendMessage(from, buffer, image, { quoted: mek, caption: resul, thumbnail: fs.readFileSync('./lz/ump.png')})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
					break
				case 'leaderboard':
				case 'lb':
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
				if (!isGroup) return reply(ind.groupo())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n *Uang*: _Rp${uang[i].uang}_\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
					break
case 'leveling':
                if (!isGroup) return reply(ind.groupo())
                if (!isGroupAdmins) return reply(ind.admin())
                if (args.length < 1) return reply('Boo :')
                if (args[0] === 'enable') {
                    if (isLevelingOn) return reply('*fitur level sudah aktif sebelum nya*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvlon())
                } else if (args[0] === 'disable') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(ind.lvloff())
                } else {
                    reply(ind.satukos())
                }
					break
case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner)return reply(`owner only`)
					if (args.length < 1) return reply('Boo :')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*SUDAH AKTIF* !!!')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('* SUKSES  MENGAKTIFKAN EVENT DI GRUB INI*')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('* SUKSES  MENONAKTIFKAN EVENT DI GRUB INI*')
					} else {
						reply(ind.satukos())
					}
					break
	
				case 'antilinkgroup':
				case 'antilinkgrup':
				case 'antilink':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Boo :')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('*SUDAH AKTIF* !!!')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('* SUCCESS  ACTIVATED ANTILINK*')
					} else if (Number(args[0]) === 0) {
						antilink.splice(from, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply('* SUCCESS DEACTIVATED ANTILINK*')
					} else {
						reply(ind.satukos())
					}
					break
case 'antibadword':
					if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
                    			if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
                			if (args.length < 1) return reply('on untuk mengaktifkan, off untuk menonaktifkan')
                		if (args[0] === 'on') {
                			if (isBadWord) return reply('anti badword sudah on')
                 	   		badword.push(from)
                 	   		fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                  	   		reply(`\`\`\`�Sukses mengaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`)
              	  		} else if (args[0] === 'off') {
                    			if (!isBadWord) return reply('anti badword sudah off')
                  	  		badword.splice(from, 1)
                 	   		fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
                 	    		reply(`\`\`\`�Sukses menonaktifkan fitur anti badword di group\`\`\` *${groupMetadata.subject}*`)
             	   		} else {
                 	   		reply(ind.satukos())
                		}
                    			break
					
                    case 'addbadword':
                    if (!isOwner) return reply(ind.ownerg())
			if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
					
                	case 'delbadword':
                    if (!isOwner) return reply(ind.ownerg())
			if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}delbadword [kata kasar]. contoh ${prefix}delbadword ngontol`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
					
                	case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += ` ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
                    case 'afk':
                			if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
                			if (!isGroup) return reply(ind.groupo())
               	 			if (isAfkOn) return reply(ind.afkOnAlready())
                			const reason = q ? q : 'Nothing.'
                			addAfkUser(sender, time, reason, _afk)
                			linz.sendMessage(from, ind.afkOn(pushname, reason), text)
            				break

					case 'antifirtex':
					case 'antivirtex':
                                	if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiFirtex) return reply('anti firtex group sudah aktif')
						antifirtex.push(from)
						fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antifirtex))
						reply('Sukses mengaktifkan anti firtex di group ini ')
						linz.sendMessage(from,`Perhatian kepada seluruh member anti firtex aktif apabila anda mengirim firtex anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiFirtex) return reply('Mode anti firtex sudah disable')
						var ini = anti.indexOf(from)
						antifirtex.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antifirtex))
						reply('Sukes menonaktifkan anti firtex di group ini ')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break

				case 'stiker':
				case 'sticker':
				//if (isRegistered) return  reply(ind.rediregis())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await linz.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('I Hope You Happy :)', '404 SQUAD')} ${ran} -o ${ran}`, async (error) => {									if (error) return reply(mess.error.stick)
									linz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*linz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await linz.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('I Hope You Happy :)', '404 SQUAD')} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									linz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*linz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await linz.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'qoHZkMvvgS5QxchoPFm3Puvi'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('I Hope You Happy :)', '404 SQUAD')} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(mess.error.stick)
									linz.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//linz.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await linz.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								linz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
					}
					await limitAdd(sender)
					break
				case 'tts':
					if (args.length < 1) return linz.sendMessage(from, 'Kode bahasanya mana om?,contoh kode id=indo', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return linz.sendMessage(from, 'Textnya mana om', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan om')
					: gtts.save(ranm, dtt, function() {
						linz.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
					case 'anime':
					lingz = args.join(" ")
			  res = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${lingz}`)
				txt = `*Nime Search*\n\n`
				for (let i = 0; i < res.data.results.length; i ++) {
					txt += `ID: ${res.data.results[i].mal_id}\n`
					txt += `Link: ${res.data.results[i].url}\n`
					txt += `Title: ${res.data.results[i].title}\n`
					txt += `Sinopsis: ${res.data.results[i].synopsis}\n`
					txt += `Tipe: ${res.data.results[i].type}\n`
					txt += `Episode: ${res.data.results[i].episodes}\n`
					txt += `Skor: ${res.data.results[i].score}\n`
					txt += `Rated: ${res.data.results[i].rated}`
				}
				txt += '-'
				bbbb = await getBuffer(res.data.results[0].image_url)
				linz.sendMessage(from, bbbb, image, {caption: txt, quoted: mek})
				break
case 'stickerwm':
if (args.length < 1) return linz.sendMessage(from, 'Gunakan /stickerwm pack name | author name', text, {quoted: mek})
var wm = args.join(" ")
                var namepk = wm.split("|")[0];
			    var author = wm.split("|")[1];
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await linz.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata(namepk, author)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(mess.error.stick)
									linz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								linz.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						console.log('ga bisa um')
					}
					break
                

      case 'return2':
      if (!isOwner) return reply('Kamu siapa?,kamu aja bukan pemilikku,apasih nyuruh nyuruh')
         	           let evaled = await eval(q)
         	           if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
          	          await reply(evaled)       
        	    break 
				case 'return':
				if (!isOwner) return reply('Kamu siapa?,kamu aja bukan pemilikku,apasih nyuruh nyuruh')
				hm = body.slice(7)
			   await linz.sendMessage(from, JSON.stringify(eval(args.join(''))), MessageType.text, {quoted: mek})
				break
case 'return4':
      if (!isOwner2) return reply('Kamu siapa?,kamu aja bukan pemilikku,apasih nyuruh nyuruh')
         	           let evale = await eval(q)
         	           if (typeof evale !== 'string') evale = require('util').inspect(evale)
          	          await reply(evale)       
        	    break 
				case 'return3':
				if (!isOwner2) return reply('Kamu siapa?,kamu aja bukan pemilikku,apasih nyuruh nyuruh')
				hme = body.slice(7)
			   await linz.sendMessage(from, JSON.stringify(eval(args.join(''))), MessageType.text, {quoted: mek})
				break  
				case 'say':
                if (q == '{}'){
				await linz.sendMessage(from, JSON.stringify(eval(linz.toggleDisappearingMessages(from))), MessageType.text, {quoted: mek})
				}
				break
      
case 'anakharam': // Case By RzkyO & ItsmeikyXSec404		
               
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/AnakHaramSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'heker': // Case By RzkyO & ItsmeikyXSec404		
				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'fftourserti': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 			,
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'fftourserti2': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 		,
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break

case 'assdttp'://by radya&RIFAI
kamu = args.join(" ")
beb = await getBuffer(`https://api.xteam.xyz/attp?file&text=${kamu}`)
encmedia = mek
media = getRandom('.mp4')
						ran = getRandom('.webp')
						fs.writeFileSync('./'+beb, media)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, video nya kebesaran, dd gakuat`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								linz.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						
						break
case 'attp':
			reply('wait!')
					if (args.length < 1) return reply('Textnya mana gan?')
					ini = args.join(" ")
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)
					linz.sendMessage(from, atetepe, sticker, {quoted: mek})
					break
		case 'fftourserti3': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
              //  if (isLimit(sender)) return reply(ind.limitend(pusname)) 		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'fftourserti4': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 		,
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'fftourserti5': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
                // (isLimit(sender)) return reply(ind.limitend(pusname)) 			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'pubgtourserti': // Case By RzkyO & ItsmeikyXSec404		
				//f (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 		,
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(15)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
case 'snack':
			try {
				if (!isPrem) return reply(mess.only.premium)
				if (!isRegistered) return reply(ind.noregis)
				linz.updatePresence(from, Presence.recording)
				if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchFxc7(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `ã€Œ *SNACK VIDEO DOWNLOADER* ã€\n\n*â€¢ Format:* ${anu.format}\n*â€¢ Size:* ${anu.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                linz.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                linz.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                } catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
                break  
		case 'pubgtourserti2': // Case By RzkyO & ItsmeikyXSec404		
				///if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
               // i//f (isLimit(sender)) return reply(ind.limitend(pusname)) 		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'pubgtourserti3': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'pubgtourserti4': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'pubgtourserti5': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
              //  if (isLimit(sender)) return reply(ind.limitend(pusname)) 		*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'mltourserti': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/MLTourSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'mltourserti2': // Case By RzkyO & ItsmeikyXSec404		
				/*if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)*
                if (isLimit(sender)) return reply(ind.limitend(pusname))*/
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'mltourserti3': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
case 'setwelcome':
if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    linz.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					join = body.slice(11)
					linz.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : mek})
				break 
				case 'setleave':
				if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
			    if (args.length < 1) return reply('*Teks nya mana gan?*')
                    linz.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					leave = body.slice(10)
					linz.sendMessage(from,`\`\`\`Leave berhasil di ubah menjadi : ${body.slice(10)}\`\`\``, text,{quoted : mek})
				break 
				
				case 'setpromote':
				if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
				  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    linz.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					promote = body.slice(11)
					linz.sendMessage(from,`\`\`\`Promote berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : mek})
				break 
				
					case 'setdemote':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					  if (args.length < 1) return reply('*Teks nya mana gan?*')
                    linz.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					demote = body.slice(11)
					linz.sendMessage(from ,`\`\`\`Demote berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : mek})
				break 
				
				case 'setbodymenu':
				if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
				  if (args.length < 1) return reply('*_CONTOH :_*\n\n  *   : *menu*\n  ~   : ~menu~\n  _ : _menu_\n ```   : ```menu```\n\n\n\n Contoh penggunaan : .setbodymenu *')
                    linz.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					f = body.slice(13)
					linz.sendMessage(from ,`\`\`\`Body menu berhasil di ubah menjadi : ${body.slice(13)}\`\`\``, text,{quoted : mek})
				break 
		case 'mltourserti4': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
              //  if (isLimit(sender)) return reply(ind.limitend(pusname)) 			*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'mltourserti5': // Case By RzkyO & ItsmeikyXSec404
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 				
				//if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(14)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'tweetfake': // Case By RzkyO & ItsmeikyXSec404
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) *				
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[] Loading`)
				buffer = await getBuffer(`https://onlydevcity.xyz/Tweet/?text=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'babu': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
              //  if (isLimit(sender)) return reply(ind.limitend(pusname)) 			*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(6)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BabuSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'bucinserti': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) *			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(12)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BucinSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'bocilepep': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(11)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/CilEpepSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'gayserti': // Case By RzkyO & ItsmeikyXSec404
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 				*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GaySerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'pacar': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 		*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/PacarSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'sadboy': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 		*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(8)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/SadBoySerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'surga': // Case By RzkyO & ItsmeikyXSec404	
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 			*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/SurgaSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'pintar': // Case By RzkyO & ItsmeikyXSec404			
			   // if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 		*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(8)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/PintarSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'badboy': // Case By RzkyO & ItsmeikyXSec404		
			    //if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
                //if (isLimit(sender)) return reply(ind.limitend(pusname)) 			
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(8)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BadBoySerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'badgirl': // Case By RzkyO & ItsmeikyXSec404		
				//if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
               // if (isLimit(sender)) return reply(ind.limitend(pusname)) 		*
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/BadGirlSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'goodboy': // Case By RzkyO & ItsmeikyXSec404		
		 	
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(9)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GoodBoySerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'goodgirl': // Case By RzkyO & ItsmeikyXSec404	
		
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GoodGirlSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'editorberkelas': // Case By RzkyO & ItsmeikyXSec404		
		       	
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(16)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/EditorBerkelasSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'goodlooking': // Case By RzkyO & ItsmeikyXSec404 
		         					
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(13)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/GoodLookingSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'}) 
				await limitAdd(sender)
				break
		case 'fucekboy': // Case By RzkyO & ItsmeikyXSec404	
		         					
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/FucekBoySerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'})
				await limitAdd(sender)
				break
		case 'jamet': // Case By RzkyO & ItsmeikyXSec404		
		        
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(7)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/JametSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'}) 
				await limitAdd(sender)
				break
		case 'youtuber': // Case By RzkyO & ItsmeikyXSec404	 
		         					
				if (args.length < 1) return reply(`textnya mana om?`)	
				ct = body.slice(10)
				reply(`[] Loading`)
				buffer = await getBuffer(`http://rzky.net/docs/api/YoutuberSerti/img.php?nama=${ct}`)
				linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Zzzzz'}) 
				await limitAdd(sender)
				break

case 'stkmeme':
                if (!isQuotedImage) return reply('*Reply image nya!*')
                reply (mess.wait) 
                var gg = args.join(" ")
                var txt1 = gg.split("|")[0];
			    var txt2 = gg.split("|")[1];
                var imgbb = require('imgbb-uploader')
                if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                owgi = await linz.downloadAndSaveMediaMessage(ger)
                anu = await imgbb("acf1ad5f22ad5822dc163cce74aedfd4", owgi)
                console.log(anu)
                stick = `${anu.display_url}`
                gif = await getBuffer(`https://api.memegen.link/images/custom/${txt1}/${txt2}.png?background=${stick}`)
                console.log(gif)
                linz.sendMessage(from, gif, sticker, { quoted: mek })
                }
                break
case 'addtext': 
                if (args.length < 1) return reply(`*Usage*: ${prefix + command}memegen text | text\n*Example*: ${prefix + command} RIPAI | RIPAI`)
                            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length > 2) {
                            	const arg1= body.substring(body.indexOf(' ') + 1)
                                const top = arg1.split('|')[0]
                                const bottom = arg1.split('|')[1]
                                const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM","m")).message.extendedTextMessage.contextInfo : mek
                                const media = await linz.downloadMediaMessage(encmedia, 'buffer')
                                getUrl = await uploadImages(media, false)
                                const memeRes = await custom(getUrl, top, bottom)
                                ma = getRandom('.png')
fs.writeFileSync('./'+ma,memeRes)
ran = getRandom('.webp')
await ffmpeg(`./${ma}`)
.input(ma)
.on('start', function (cmd) {
	console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
	console.log(`Error : ${err}`)
	fs.unlinkSync(ma)
	reply(mess.error.stick)
})
.on('end', function () {
	console.log('Finish')
	buff = fs.readFileSync(ran)
	linz.sendMessage(from, buff, sticker, {quoted: mek})
	fs.unlinkSync(ma)
	fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
                            }
                            break

case 'upload':
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace("quotedM","m")).message.extendedTextMessage.contextInfo : mek
media = await linz.downloadMediaMessage(encmedia, 'buffer')
getUrl = await uploadImages(media, false)
reply(getUrl)
break

case 'meme':
				 
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply('[❕] Sedang di proses.........')
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					linz.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					await limitAdd(sender)
					linz.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
case 'searchsticker':
reply('wait!')
anu = await fetchJson(`https://api.xteam.xyz/sticker/stickerly?q=${args[0]}&APIKEY=FuzBot1`, {method:'get'})
buffer = await getBuffer(anu.result.stickerlist[0])
ma = getRandom('.png')
fs.writeFileSync('./'+ma,buffer)
ran = getRandom('.webp')
await ffmpeg(`./${ma}`)
.input(ma)
.on('start', function (cmd) {
	console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
	console.log(`Error : ${err}`)
	fs.unlinkSync(ma)
	reply(mess.error.stick)
})
.on('end', function () {
	console.log('Finish')
	buff = fs.readFileSync(ran)
	linz.sendMessage(from, buff, sticker, {quoted: mek})
	fs.unlinkSync(ma)
	fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
break

case 'nulis':
if (args.length < 1) return reply(`*Usage*: ${prefix + command} nama&kelas&kata\n*Example*: ${prefix + command} udin&20&udin`)
var bodi = args.join(" ")
var nama = bodi.split("&")[0];
var kelas = bodi.split("&")[1];
var aksarane = bodi.split("&")[2];
anu = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${aksarane}&tinta=4`)
linz.sendMessage(from, anu, image, { quoted: mek })
break
case 'spamcall':
			try {
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
			
			call = `${body.slice(11)}`
			anu = await fetchFxc7(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			linz.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			} catch {
					reply(mess.error.bug)
					}
					await limitAdd(sender) 
			break

case 'doge':
anu = await fetchJson(`http://leyscoders-api.herokuapp.com/api/anjing?apikey=freeKeY`, {method:'get'})
dia = await getBuffer(`${anu.result}`)
await ffmpeg(dia)
linz.sendMessage(from, dia, sticker, { quoted: mek })
break

                case 'brainly':
                reply('wait...')
                bren = args.join(" ")
                anu = await fetchJson(`https://api.xteam.xyz/brainly?soal=${bren}&APIKEY=FuzBot1`)
                teks = `*Jawaban*\n============================\n${anu.jawaban}`
                reply(teks)
                break
case 'listonline':
                if (!isGroupAdmins) return reply(ind.admin())
                let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                let online = [...Object.keys(linz.chats.get(ido).presences), linz.user.jid]
                linz.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                    quoted: mek,
                    contextInfo: { mentionedJid: online }
                })
                break

 case 'bass':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await linz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						linz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek})
						fs.unlinkSync(ran)
					})
				linz.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await linz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						linz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek})
						fs.unlinkSync(ran)
					})
					break
                

case 'tictactoe':
            case 'ttt':
            if (!isGroup)return reply('*Khusus group*')
                if (mentionUser.length == 0) return reply("Lu mau maen ama siapa oy")
                if (args.length == 1) return reply(`Example: ${prefix}tictactoe X/O @tag lawan`)
               if (!["x", "o"].includes(args[0].toLowerCase())) return reply(`Example: ${prefix}tictactoe X/O @tag lawan`)
                nantang = X
                pelawan = O
                if (args[0].toLowerCase() == "o") {
                    nantang = O
                    pelawan = X
                }
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = senderr
                var lawan = mentionUser[0]
                tesk = `Player 1: @${penantang.split("@")[0]} (${nantang}) ${tunjuk}\n`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n         "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `\n\nPlayer 2: @${lawan.split("@")[0]} (${pelawan})`
                return linz.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./lib/tictactoe.json", JSON.stringify(tictactoe))
                })
                break

               case 'delttc':
                    // if (!isOwner) return manik.sendMessage(id, yan, MessageType.text);
                    if (fs.existsSync("./lib/tictactoe/db/" + from + ".json")) {
                         fs.unlinkSync("./lib/tictactoe/db/" + from + ".json");
                         reply(`Berhasil menghapus sesi di Grup ini!`);
                    } else {
                         reply(`Tidak ada sesi yg berlangsung, mohon ketik ${prefix}tictactoe`);
                    }
                    break
                    
                
                
                 case 'fdeface': 
			case 'hack':
			case 'fakedeface':
			if (!isOwner) return reply(`owner only`()) //owner only
				if (!arg) return reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By linzzz|https://linz.com`, mek)
				argz = arg.join("|")
				if (!argz) return reply(from, `Penggunaaan ${prefix}fdeface url|title|desc|url\n\nContoh : ${prefix}fdeface https://google.com|Self Bot|By linzzz|https://linz.com`, mek)
				if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
					let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					let media = await linz.downloadMediaMessage(encmedia)
					linz.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3], media)
				} else {
					linz.sendFakeThumb(from, argz[0], argz[1], argz[2], argz[3])
				}
				break
case 'spamchat': //CASE BY Manik
if (!isOwner) return reply(`owner only`()) 
if (args < 2) return reply(`masukan parameter yang benar\nexampel : ${prefix}spamchat nomertujuan jumlah pesan\ncontoh ${prefix}spamchat 082334297175 10 woi asu`)
nomer = args[0]
jumbelah = args[1]
pehsan = args[2]
for ( let i = 0 ; i < jumbelah; i++) {
linz.sendMessage( nomer + '@s.whatsapp.net' , pehsan , text)
}  
break
				case 'spam':
				if (!isOwner) return reply(`owner only`()) //owner only
				if (!args) return reply(from, `Penggunaan ${prefix}spam teks|jumlahspam`, mek)
				ren = args.join("|")
				if (!ren) return reply(from, `Penggunaan ${prefix}spam teks|jumlah`, mek)
				if (isNaN(ren[1])) return reply(from, `harus berupa angka`, mek)
				for (let i = 0; i < ren[1]; i++){
					linz.sendText(from, ren[0])
				}
				break

                case 'antidelete': //Fix By ITSMAZGH
                if (!isGroupAdmins) return reply(mess.only.admin)
				const dataRevoke = JSON.parse(fs.readFileSync('./lib/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./lib/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return linz.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return linz.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						linz.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						linz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return linz.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.push = false
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke))
						linz.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						linz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return linz.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return linz.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./lib/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					linz.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						linz.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						linz.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.push = true
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						linz.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						linz.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				case 'tiktok': 
case 'ttdl':
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(mess.error.Iv)
reply(mess.wait)
anu = await fetchJson(`https://godownloader.com/api/tiktok-no-watermark-free?url=${q}&key=godownloader.com`, {method: 'get'})
buffer = await getBuffer(anu.video_watermark)
linz.sendMessage(from, buffer, video, {quoted: mek})
break
case 'ttnowm': 
case 'tiktoknowm':
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(mess.error.Iv)
reply(mess.wait)
anu = await fetchJson(`https://godownloader.com/api/tiktok-no-watermark-free?url=${q}&key=godownloader.com`, {method: 'get'})
buffer = await getBuffer(anu.video_no_watermark)
linz.sendMessage(from, buffer, video, {quoted: mek})
break
case 'tiktokmusic':
                     tetes = args.join(' ')
					data = await fetchJson(`https://godownloader.com/api/tiktok-no-watermark-free?url=${tetes}&key=godownloader.com`, {method: 'get'})
					vvve = await getBuffer(data.music_url)
					linz.sendMessage(from, vvve, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek})
					break 
                case 'tiktok2':
					if (args.length < 1) return reply('Urlnya mana gan?')
					if (!isUrl(args[0]) && !args[0].includes('vt')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://api.zeks.xyz/api/tiktok?link=${args[0]}&apikey=apivinz`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.video)
					linz.sendMessage(from, buffer, video, {quoted: mek})
					break
                 case 'tiktokstalk':
const tiktod = require('tiktok-scraper')
					try {
						if (args.length < 1) return linz.sendMessage(from, 'Usernamenya mana um?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						linz.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Kemungkinan username tidak valid')
					}
					break
case 'panah':
  const perq = '3'
                    var slot = ['⚪', '🔴']
                var baris1 = [Math.random(slot)]
                var textor = "╭───「 🎯 Shoot 」\n│\n"
                text += `├➻ ${baris1[0]} │ ${baris1[0]} │ ${baris1[0]}\n`
                text += `│\n╰───「 RIPAIBOT 」`
                 reply(textor)
                 break
case 'kicktime':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					linz.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					linz.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					linz.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					linz.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
                
case 'selsf':
if (args.length < 1) return reply(`*Pilih false / true*`)
selfnya = args.join(" ")
reply(`*self = ${args[0]}*`)
break
                
				case 'meme':
					meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
					buffer = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
					linz.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					linz.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					setting.prefix = prefix
					fs.writeFileSync('./${prefix}', JSON.stringify(setting, null, '\t'))
					reply(`Prefix berhasil di ubah menjadi : ${prefix}`)
					break
				case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ingat! Citai Lolimu'})
					})
					break
				case 'hilih':
memew = await fetchJson(`http://hadi-api.herokuapp.com/api/hilih?teks=${q}`)
reply(memew.result)
break
case 'halah':
memew = await fetchJson(`http://hadi-api.herokuapp.com/api/halah?teks=${q}`)
reply(memew.result)
break
				case 'yt2mp3':
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`http://hadi-api.herokuapp.com/api/ytaudio?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}`
					thumb = await getBuffer(anu.album)
					linz.sendMessage(from, album, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					linz.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
case 'ytmp3':
					if (args.length < 1) return reply('Urlnya mana um?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anup = await fetchJson(`http://hadi-api.herokuapp.com/api/ytaudio?url=${args[0]}`, {method: 'get'})
					if (anup.error) return reply(anup.error)
					buffer = await getBuffer(anup.result)
					linz.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anup.title}.mp3`, quoted: mek})
					break
                case 'tebakgambar': // case by piyo remake Ryz
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
                    panu = await fetchJson(`http://zekais-api.herokuapp.com/tebakgambar`)
                    ini_image = panu.soal_gbr
                    jawaban = panu.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./database/user/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    ini_buffer = await getBuffer(ini_image)
                    linz.sendMessage(from, ini_buffer, image, { quoted: mek, caption: "Jawab jawab jawabbb" })
                    await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./database/user/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
                case 'tebakkata':
				    anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tebak-kata?apikey=freeKeY`, {method:'get'})
				    soal = anu.result.soal
				    jawaban = anu.result.jawaban
				    soalnye = `Soalnya = ${soal}`
				    if (chat.includes('Nyerah')){
					reply('*Jawaban* = ${jawaban}')
					}
					linz.sendMessage(from, soalnye, text, { quoted: mek }) // ur code
				    if (budy.includes(anu.result.jawaban)) {
					reply('benar')
				    }
				    setTimeout( () => {
					linz.sendMessage(from, '*Jawaban :* '+ anu.result.jawaban +'\n', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					linz.sendMessage(from, '_10 Detik lagi_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					linz.sendMessage(from, '_20 Detik lagi_', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					linz.sendMessage(from, '_30 Detik lagi_', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					}, 0) // 1000 = 1z,
					break
case 'slot':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            linz.sendMessage(from, `[   | SLOTS ]\n-----------------\n :  : \n${somtoy}<=====\n :  : \n[   | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Kamu Win\n\nContoh : 🍎 : 🍎 : 🍎 <=====`, text, { quoted: mek })
            break

                 
                
case 'lirik':
                reply(mess.wait)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					break  
case 'music':
if (args.length < 1) return reply('masukan nama lagu')
reply('Wait!')
                    query = args.join(" ")
                    get_result = await fetchJson(`https://videfikri.com/api/ytplay/?query=${query}`)
                    result = await fetchJson(`https://videfikri.com/api/liriklagu/?query=${query}`)
                    get_info = get_result.result
                    txt = `Title : ${get_info.title}\n`
                    txt += `Uploader : ${get_info.channel}\n`
                    txt += `Duration : ${get_info.duration}\n`
                    txt += `View : ${get_info.views}\n`
                    txt += `Size : ${get_info.size}\n`
                    txt += `Lirik :\n ${result.result.lirik}\n`
                    txt += `Link : ${get_info.url}`
                    lolhuman.sendMessage(from, txt, text, { quoted: mek })
                    await limitAdd(sender)
                    break
case 'mp23':
if (args.length < 1) return reply('urlnya?')
query = args.join(" ")
au = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${query}&apikey=apivinz`, {method: 'get'})
anu = au.result
await faketoko(teks = `Size : ${au.result.size} \n Link : ${au.result.link}\n Gunakan Link di atas apabila bot tidak merespon`, url_image = `${au.result.thumb}`, title = `${au.result.title}`, code = "IDR", price = 1000000)
					buffe = await getBuffer(au.link)
					linz.sendMessage(from, buffe, audio, { mimetype: 'audio/mp4', filename: `${au.title}.mp3`, quoted: mek })
break
case 'spamchat': //CASE BY linz
if (!isOwner) return reply(`owner only`()) 
if (args < 2) return reply(`masukan parameter yang benar\nexampel : ${prefix}spamchat nomertujuan jumblah pesan\ncontoh ${prefix}spamchat 082334297175 10 woi asu`)
nomer = args[0]
jumblah = args[1]
Pesan = args[2]
for ( let i = 0 ; i < jumblah; i++) {
linz.sendMessage( nomer + '@s.whatsapp.net' , pesan , Text)
}  
break
                case 'getpp':
                ppimg = getBuffer(linz.getProfilePicture(`${sender.split('@')[0]}@c.us`))
                linz.sendMessage(from, ppimg, image, { quoted: mek })
                break
		        case 'ytsearch':
					if (args.length < 1) return reply('Yang mau di cari apaan?')
					try {
res = await yts(q)
a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*\n`
for (let i of res.all) {
a += `\`\`\`▢ Title : ${i.title}\`\`\`
\`\`\`▢ Views : ${i.views}\`\`\`
\`\`\`▢ Upload : ${i.ago}\`\`\`
\`\`\`▢ Durasi : ${i.timestamp}\`\`\`
\`\`\`▢ Channel : ${i.author.name}\`\`\`
\`\`\`▢ Link : ${i.url}\`\`\`


`
}
b = a.trim()
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: b})
} catch (e) {
console.log(e)
reply(`${e}`)
}
break

case 'viesw':
                case 'fetcxh':
if (!isOwner) return reply(`owner only`())
teks = args.join(' ')
var ress = await fetch(teks)
  if (!/text|json/.test(res.headers.get('content-type'))) 
var txst = await res.buffer()
  try {
    txt = util.format(JSON.parse(txt+''))
  } catch (e) {
    txt = txt + ''
    console.log(e)
  } finally {
   // reply(txt.slice(0, 65536) + '')
   linz.sendMessage(from, txt.slice(0, 65536) + '', MessageType.extendedText, { quoted: mek})
  }
break
case 'mode':
if (mek.key.fromMe) return
const buttoons = [
  {buttonId: 'self', buttonText: {displayText: 'SELF'}, type: 1},
  {buttonId: 'public', buttonText: {displayText: 'PUBLIC'}, type: 1}
]

const buttoMessage = {
	"imageMessage": {
			"url": "https://mmg.whatsapp.net/d/f/AgKIMz5ANvoGuexTOVC-FJSoAmEg6nIqHnZZaTTEEkH-.enc",
			"mimetype": "image/jpeg",
			"fileSha256": "vtQF3U80An2eWoQm0mGFCAOO6crsjvBtsKJeO1eIurg=",
			"fileLength": 1e20,
			"height": 900,
			"width": 900,
			"mediaKey": "xJvcfo5bLiqYEdLBXfUvTMeIsBDbB5Wi2F9xJYYODjI=",
			"fileEncSha256": "D4z9yikdqadmYSVLapQAYjJ8IggOQNDqV4Qr1wsYyL8=",
            "jpegThumbnail": fs.readFileSync('./lz/ump.png'),
            },
    contentText: "NOT FOUND SQUAD",
    footerText: 'pilih mode nya kak',
    buttons: buttoons,
    headerType: 4,
}

linz.sendMessage(from, buttoMessage, MessageType.buttonsMessage, {quoted: freply})
break
case 'public':
          	if (mek.key.fromMe) return
          	uptime = process.uptime()
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
              banChats = false
          	linz.sendMessage(from, `「 *public bot* 」`, text)
          	break
		case 'self':
          	if (mek.key.fromMe) return
          	uptime = process.uptime()
              banChats = true
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	linz.sendMessage(from, `「 *only self* 」`, text)
          	break
case 'playmp3':
                if (args.length < 1) return reply(`query nya mana? ketik ${prefix}playmp3 judul lagu`)
                reply('Tunggu kak')
					anu = await fetchJson(`https://xinzbot-api.herokuapp.com/api/ytplaymp3/?q=${q}&apikey=XinzBot`, {method: 'get'})
					if (Number(anu.result.filesize.split(' MB')[0]) >= 5.00) reply(`Maaf durasi music sudah melebihi batas maksimal`)
					teks = `*Lagu di temukan*\nJudul : ${anu.result.title}\n*Size* : ${anu.result.filesize}\n*Tunggu sedang mengirim lagu mungkin cukup lama*`
					buffer = await getBuffer(anu.result.link)
					reply(teks)
					linz.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', filename: `pepe.mp3`, quoted: mek })
					break

case 'audio':
reply('wait')
try {
buff = await getBuffer(args[0])
linz.sendMessage(from, buff, audio, { mimetype: 'audio/mp4', filename: 'nih.mp3', quoted: mek })
} catch {
reply('Mungkin link bukan audio')
}
break
case 'img':
reply('waitt')
buff = await getBuffer(args[0])
linz.sendMessage(from, buff, image, { quoted: mek })
break
case 'playvn':
           reply(`Tunggu kak`)
           plan = await fetchJson(`https://api.xteam.xyz/dl/play?lagu=${q}&APIKEY=FuzBot1`)
	       if (Number(plan.size.split(' MB')[0]) >= 6.0){ 
           reply('Maaf durasi music sudah melebihi batas maksimal')
           }
	       media = await getBuffer(plan.url)
           katanya = `Judul : ${plan.judul}\nSource : ${plan.source}`
           reply(katanya)
           linz.sendMessage(from, media, audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true})
           break
                
                case 'img2url':
			case 'imagetourl':
					reply(mess.wait)
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var media = await  linz.downloadAndSaveMediaMessage(encmedia)
            var imgbb = require('imgbb-uploader')
            imgbb('acf1ad5f22ad5822dc163cce74aedfd4', media)
            getUrl = await uploadImages(media, false)
                .then(data => {
                    var caps = ` *IMAGE TO URL* \n\n*  ID :* ${data.id}\n*  MimeType :* ${data.image.mime}\n*  Extension :* ${data.image.extension}\n\n*  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     linz.sendMessage(from, caps, text, { quoted: mek })
                })
                .catch(err => {
                    throw err
                })
            break
				case 'tiktvsvsbsbsok':
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					linz.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'tiktokstalk':
					try {
						if (args.length < 1) return linz.sendMessage(from, 'Usernamenya mana um?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						linz.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Kemungkinan username tidak valid')
					}
					break

				case 'nulis':
                if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis RifaiGanz`)
                dapuhy = body.slice(6)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/bukukanan?text=${dapuhy}`)
                linz.sendMessage(from, asu, image, {caption: 'Nih Ngab,ngewe kuy?', quoted: mek})
                break
				case 'nulis2':
                if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis RifaiGanz`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/bukukiri?text=${dapuhy}`)
                linz.sendMessage(from, asu, image, {caption: 'Nih Ngab,ngewe kuy?', quoted: mek})
                break
                case 'nulis3':
                if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}nulis RifaiGanz`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokanan?text=${dapuhy}`)
                linz.sendMessage(from, asu, image, {caption: 'Nih Ngab,ngewe kuy?', quoted: mek})
                break
                case 'nulis4':
                if (!isRegistered) return reply(`silahkan regis dulu dengan cara
 +verif your email`)
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (args.length < 1) return reply(`Teksnya mana ngab?\nContoh ${prefix}RifaiGanz`)
                dapuhy = body.slice(7)
                reply(ind.wait())
                asu = await getBuffer(`http://zekais-api.herokuapp.com/foliokiri?text=${dapuhy}`)
                linz.sendMessage(from, asu, image, {caption: 'Nih Ngab,Ngewe kuy?', quoted: mek})
                break
				case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Tipenya apa um?')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Urlnya mana um?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					linz.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('Textnya mana um?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						exec(`webpmux -set exif ${addMetadata('BOT', authorname)} ${rano} -o ${rano}`, async (error) => {
							if (error) return reply(mess.error.stick)
							linz.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
							fs.unlinkSync(rano)
						})
						/*linz.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)*/
					})
					break
				case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                                case 'tagall2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                                case 'tagall3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					linz.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'clearall':
					if (!isOwner) return reply('Kamu siapa?')
					anu = await linz.chats.all()
					linz.setMaxListeners(25)
					for (let _ of anu) {
						linz.deleteChat(_.jid)
					}
					reply('Sukses delete all chat :)')
					break
				case 'bc':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					vis = args.join(' ')
					anu = await linz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await linz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							linz.sendMessage(_.jid, buff, image, {quoted: freply2, thumbnail: fs.readFileSync('./lz/ump.png'), caption: `*[ 404 Broadcast ]* \n\n${body.slice(4)}`}) 
						}
						reply('Suksess broadcast')
					} else {
						for (let _ of anu) {
							linz.sendMessage(_.jid, `*[ 404 Broadcast ]* \n\n${vis}`, text, {quoted: freply2, thumbnail: fs.readFileSync('./lz/ump.png')})
						}
						reply('Suksess broadcast')
					}
					break
                                case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						linz.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						linz.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						linz.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						linz.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						linz.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
case 'opromote':
					if (!isGroup) return reply(mess.only.group)
                     if (!isOwner) return reply('Kamu siapa?,kamu aja bukan pemilikku,apasih nyuruh nyuruh')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						linz.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						linz.groupMakeAdmin(from, mentioned)
					}
					break
				case 'odemote':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?,kamu aja bukan pemilikku,apasih nyuruh nyuruh')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						linz.groupRemove(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						linz.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'oadd':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?,kamu aja bukan pemilikku,apasih nyuruh nyuruh')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						linz.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
				case 'okick':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?,kamu aja bukan pemilikku,apasih nyuruh nyuruh')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					linz.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 2500)
					setTimeout( () => {
					reply('SIAP DI KELUARIN DAN DI EWE NI MIN :D')
					}, 0)
					break
case 'okicktime':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Kamu siapa?,kamu aja bukan pemilikku,apasih nyuruh nyuruh')
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					linz.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					linz.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					linz.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					linz.sendMessage(from, 'Asikkk Dapet Makanan nihh:D', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
case 'setnamegc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				bib = args.join(' ')
                linz.groupUpdateSubject(from, `${bib}`)
                linz.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdescgc':
                if (!isGroup) return reply(ind.groupo())
			    if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				bob = args.join(' ')
                linz.groupUpdateDescription(from, `${bob}`)
                linz.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
				case 'listadmins':
					if (!isGroup) return reply(mess.only.group)
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    linkgc = await linz.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
          
                case 'leave':
                    if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || isOwner) {
                    	linz.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
				case 'toimg':
				 
				 
				 
				if (!isQuotedSticker) return reply('Reply atau Tag sticker yang mau dijadiin gambar kak >_<')
					 reply(`[❕] Sedang di proses.........`)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await linz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						linz.sendMessage(from, buffer, image, {quoted: mek, caption: 'nih kak [(^.^)]'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender)
					linz.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})

break
case 'hartatahta':
				
				if (!isRegistered) return reply(`silahkan regis dulu dengan cara +verif your email`)
			   //if (isBanned) return reply('Maaf kamu sudah terbenned!'
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Teksnya Mana Cuy?\nContoh : ${prefix}hartatahta RifaiGanz`)
				dapuhy = args.join(' ')
				reply(ind.wait())
				asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=apivinz`)
				linz.sendMessage(from, asu, image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('Mode simi sudah aktif')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukses mengaktifkan mode simi di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Sukes menonaktifkan mode simi di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					const buttoins = [
  {buttonId: 'idup', buttonText: {displayText: 'HIDUP'}, type: 1},
  {buttonId: 'mati', buttonText: {displayText: 'MATI'}, type: 1}
]
const butonMessage = {
	"imageMessage": {
			"url": "https://mmg.whatsapp.net/d/f/AgKIMz5ANvoGuexTOVC-FJSoAmEg6nIqHnZZaTTEEkH-.enc",
			"mimetype": "image/jpeg",
			"fileSha256": "vtQF3U80An2eWoQm0mGFCAOO6crsjvBtsKJeO1eIurg=",
			"fileLength": 1e20,
			"height": 900,
			"width": 900,
			"mediaKey": "xJvcfo5bLiqYEdLBXfUvTMeIsBDbB5Wi2F9xJYYODjI=",
			"fileEncSha256": "D4z9yikdqadmYSVLapQAYjJ8IggOQNDqV4Qr1wsYyL8=",
            "jpegThumbnail": fs.readFileSync('./lz/ump.png'),
            },
    contentText: "WELCOME",
    footerText: '404 SQUAD',
    buttons: buttoins,
    headerType: 4,
}
linz.sendMessage(from, butonMessage, MessageType.buttonsMessage, {quoted: freply})
break



					
                      

case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Udah aktif um')
					    nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur nsfw di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur nsfw di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
                    case 'grup':
					case 'group':			
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					const bttons = [
  {buttonId: 'buka', buttonText: {displayText: 'Buka'}, type: 1},
  {buttonId: 'tutup', buttonText: {displayText: 'Tutup'}, type: 1}
]
const buttunMessage = {
	"imageMessage": {
			"url": "https://mmg.whatsapp.net/d/f/AgKIMz5ANvoGuexTOVC-FJSoAmEg6nIqHnZZaTTEEkH-.enc",
			"mimetype": "image/jpeg",
			"fileSha256": "vtQF3U80An2eWoQm0mGFCAOO6crsjvBtsKJeO1eIurg=",
			"fileLength": 1e20,
			"height": 900,
			"width": 900,
			"mediaKey": "xJvcfo5bLiqYEdLBXfUvTMeIsBDbB5Wi2F9xJYYODjI=",
			"fileEncSha256": "D4z9yikdqadmYSVLapQAYjJ8IggOQNDqV4Qr1wsYyL8=",
            "jpegThumbnail": fs.readFileSync('./lz/ump.png'),
            },
    contentText: "GROUP OPEN/CLOSE",
    footerText: '404 SQUAD',
    buttons: bttons,
    headerType: 4,
}
linz.sendMessage(from, buttunMessage, MessageType.buttonsMessage, {quoted: freply})
break
                 case 'ncheck':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Text nya ilang ya')
					if (Number(args[0]) === 1) {
						if (isCheck) return reply('Udah aktif um')
						ncheck.push(from)
						fs.writeFileSync('./ncheck.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur nsfwcheck di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						ncheck.splice(from, 1)
						fs.writeFileSync('./ncheck.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur nsfwcheck di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
case 'test':
encmedia = mek
media = await linz.downloadAndSaveMediaMessage(encmedia)
const model = await nsfwjs.load()
predictions = await model.classify(media)
console.log('Predictions: ', predictions)
fs.unlinkSync(media)
break
case 'autosticker':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAuto) return reply('Udah aktif um')
						autosticker.push(from)
						fs.writeFileSync('./autosticker.json', JSON.stringify(autosticker))
						reply('Sukses mengaktifkan fitur autosticker di group ini ✔️')
					} else if (Number(args[0]) === 0) {
						autosticker.splice(from, 1)
						fs.writeFileSync('./autosticker.json', JSON.stringify(autosticker))
						reply('Sukses menonaktifkan fitur autosticker di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
                                      break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await linz.getProfilePicture(id)
						buffer = await getBuffer(pp)
						linz.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await linz.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							linz.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
				default:
if (budy.startsWith('_`')){
return linz.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
}  


if (isMedia && isQuotedImage){
encmedia = mek
media = await linz.downloadAndSaveMediaMessage(encmedia)
const model = await nsfwjs.load()
predictions = await model.classify(media)
console.log('Predictions: ', predictions)
fs.unlinkSync(media)
}

			if (body.startsWith(`${prefix}${command}`)) {

                  
			  }
if (isMedia && isAuto && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = mek
						const media = await linz.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								linz.sendMessage(from, `${err}`, MessageType.text)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('RIPAIBOT', 'AWAS COLONG')} ${ran} -o ${ran}`, async (error) => {
								linz.sendMessage(from, fs.readFileSync(ran), sticker)
							    faketoko(teks = 'Berhasil', url_image = "https://i.ibb.co/VY38GN2/Screenshot-2021-03-19-14-26-49-57.jpg", title = "autosticker", code = "IDR", price = 1000000)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
						    })
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
	           // FOR VIDEO OR G
		   if ((isMedia & isAuto && !mek.message.imageMessage || isQuotedVideo)) {
						const encmedia = mek
						const media = await linz.downloadAndSaveMediaMessage(encmedia)
						if (Buffer.byteLength(media) >= 6186598.4) return reply(`sizenya terlalu gede sayang, dd gakuat :(`)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Gagal, video nya kebesaran, dd gakuat`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								linz.sendMessage(from, buff, sticker)
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
						}
                    if (isMedia && isCheck && isQuotedImage) {
                        const encmedia = mek
                        const filePath = await lolhuman.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        const form = new FormData();
                        const stats = fs.statSync(filePath);
                        const fileSizeInBytes = stats.size;
                        const fileStream = fs.createReadStream(filePath);
                        form.append('img', fileStream, { knownLength: fileSizeInBytes });
                        const options = {
                            method: 'POST',
                            credentials: 'include',
                            body: form
                        }
                        get_result = await fetchJson(`http://api.lolhuman.xyz/api/nsfwcheck?apikey=${apikey}`, {...options })
                        fs.unlinkSync(filePath)
                        get_result = get_result.result
                        is_nsfw = "No"
                        if (Number(get_result.replace("%", "")) >= 60) is_nsfw = "Yes"
                        reply(`*[ NsfwCheck ]*\n Nsfw : ${is_nsfw}\n Keakuratan : ${get_result}`)
                        if (Number(get_result.replace("%", "")) >= 70){
                        	setTimeout( () => {
		            linz.groupRemove(from, [sender])
					}, 3000) // 1000 = 1s
					setTimeout( () => {
					linz.sendMessage(from, '_Baybay_', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					linz.sendMessage(from, '_Kamu akan dikick_', text) // ur cods
					}, 1000) // 1000 = 1s,
                    }
                    }
                      
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
