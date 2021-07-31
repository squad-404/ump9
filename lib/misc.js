const { fetchJson, fetchText } = require('../lib/fetcher')
//const config = require('../config.json')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const needle = require('needle')

/**
 * Search for IG Story.
 * @param {String} query
 * @returns {Object}
 */
const its = (query) => new Promise((resolve, reject) => {
    console.log('Searching for IG Story...')
    fetchJson(`https://api.vhtear.com/igstory?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})

/**
 * Search for Update kurs.
 * @param {String} query
 * @returns {Object}
 */
const kurs = (query) => new Promise((resolve, reject) => {
    console.log(`Searching for kurs ${query}`)
    fetchJson(`http://free-currency-converter.herokuapp.com/list/convert?source=${query}&destination=idr`)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})

/**
 * Creating ttp
 * @param {String} query
 * @returns {Object}
 */

const ttp = (link) => new Promise((resolve, reject) => {
    fetch('https://api.areltiyan.site/sticker_maker?text='+encodeURIComponent(link), {
        method: 'GET',
    })
        .then(async res => {
        const text = await res.json()

        resolve(text)
        
         })
        .catch(err => reject(err))
})


/**
 * Search for Alkitab.
 * @param {String} query 
 * @returns {Object}
 */
const alkitab = (query) => new Promise((resolve, reject) => {
    console.log('Searching for Alkitab info...')
    fetchJson(`http://api-melodicxt-2.herokuapp.com/api/alkitab/search?query=${query}&apiKey=${config.melodict}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


/**
 * Search for Info University.
 * @param {String} query 
 * @returns {Object}
 */
const univ = (query) => new Promise((resolve, reject) => {
    console.log('Searching for University info...')
    fetchJson(`https://rest.farzain.com/api/special/banpt.php?universitas=${query}&apikey=rambu`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for Info University.
 * @param {String} query 
 * @returns {Object}
 */
const wps = (query) => new Promise((resolve, reject) => {
    console.log('Searching wallpaper..')
    fetchJson(`https://lolhuman.herokuapp.com/api/wallpaper/${query}?apikey=${config.lolhuman}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for Hastag on tiktok.
 * @param {String} query 
 * @returns {Object}
 */
const tktksearch = (query) => new Promise((resolve, reject) => {
    console.log('Searching for query..')
    fetchJson(`https://api.vhtear.com/tiktokhastag?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for Wattpad.
 * @param {String} query 
 * @returns {Object}
 */
const wtpd = (query) => new Promise((resolve, reject) => {
    console.log('Searching for query..')
    fetchJson(`http://docs-jojo.herokuapp.com/api/wattpad_search?q=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for Wattpad info.
 * @param {String} link
 * @returns {Object}
 */
const wtpdinfo = (link) => new Promise((resolve, reject) => {
    console.log('Searching for link wattpad..')
    fetchJson(`http://docs-jojo.herokuapp.com/api/wattpad_info?url=${link}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Spamming email.
 * @param {String} emailTarget
 * @param {String} subjekEmail
 * @param {String} pesanEmail
 */
const email = (emailnya, subjeknya, pesannya) => new Promise((resolve, reject) => {
    console.log(`Sending email to: ${emailnya}\nSubjek: ${subjeknya}\nPesan: ${pesannya}...`)
    fetchJson(`https://videfikri.com/api/spamemail?email=${emailnya}&subjek=${subjeknya}&pesan=${pesannya}`)
        .then((result) => resolve(result))
        .catch((err) =>  reject(err))
})

/**
 * Search for Result Brainly.
 * @param {String} query 
 * @returns {Object}
 */
const brainly = (query) => new Promise((resolve, reject) => {
    console.log('Result...')
    fetchJson(`https://rest.farzain.com/api/brainly.php?id=${query}&apikey=rambu`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for Result Casses Corona.
 * @param {String} query 
 * @returns {Object}
 */
const corona = (country) => new Promise((resolve, reject) => {
    console.log(`Search for country ${country}`)
    fetchJson(`https://coronavirus-19-api.herokuapp.com/countries/${country}/`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for Result Wheater Prediction.
 * @param {String} query 
 * @returns {Object}
 */
const cuaca = (query) => new Promise((resolve, reject) => {
    console.log(`Search weather for ${query}...`)
    fetchJson(`https://lolhuman.herokuapp.com/api/cuaca/${query}?apikey=${config.lolhuman}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get new Line sticker.
 * @returns {Object}
 */
const linesticker = () => new Promise((resolve, reject) => {
    console.log('Get latest Line sticker...')
    fetchJson(`https://api.vhtear.com/newsticker?apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Random pict avatar..
 * @returns {Object}
 */
const avatar = () => new Promise((resolve, reject) => {
    console.log('Get Random pict avatar...')
    fetchJson(`https://last-airbender-api.herokuapp.com/api/v1/characters/random`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Latest JadwalBola
 * @returns {Object}
 */
const jbola = () => new Promise((resolve, reject) => {
    console.log('Get latest Jadwal Bolaa...')
    fetchJson(`https://api.vhtear.com/jadwalbola&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Latest News
 * @returns {Object}
 */
const berita = () => new Promise((resolve, reject) => {
    console.log('Get latest News...')
    fetchJson(`https://api.vhtear.com/beritaterbaru&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get lyric from title or lyric of the song itself.
 * @param {String} title
 * @returns {Object}
 */
const lirik = (query) => new Promise((resolve, reject) => {
    console.log(`Searching lyrics for ${query}...`)
    fetchJson(`https://videfikri.com/api/liriklagu/?query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Wikipedia result from given query.
 * @param {String} query
 * @returns {Object}
 */
const wiki = (query) => new Promise((resolve, reject) => {
    console.log(`Get result for ${query} in Wikipedia...`)
    fetchJson(`https://lolhuman.herokuapp.com/api/wiki/${query}?apikey=${config.lolhuman}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Indonesian word definition from KBBI (Kamus Besar Bahasa Indonesia).
 * @param {String} word
 * @returns {Object}
 */
const kbbi = (word) => new Promise((resolve, reject) => {
    console.log(`Searching definition for ${word} in KBBI...`)
    fetchJson(`https://api.vhtear.com/kbbi?query=${word}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get distance information.
 * @param {String} from
 * @param {String} to
 * @returns {Object}
 */
const distance = (from, to) => new Promise((resolve, reject) => {
    console.log('Get data and calculate it...')
    fetchJson(`https://api.vhtear.com/distance?from=${from}&to=${to}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get latest earthquake info in Indonesia from BMKG (Badan Meteorologi Klimatologi dan Geofisika).
 * @returns {Object}
 */
const bmkg = () => new Promise((resolve, reject) => {
    console.log('Get data from BMKG...')
    fetchJson(`https://naufalhoster.xyz/tools/infogempa?apikey=iniapikeygan2211`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram account info from username.
 * @param {String} username
 * @returns {Object}
 */
const igStalk = (username) => new Promise((resolve, reject) => {
    console.log(`Searching account for ${username}`)
    fetchJson(`https://lolhuman.herokuapp.com/api/stalkig/${username}?apikey=${config.lolhuman}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Instagram account info from username.
 * @param {String} username
 * @returns {Object}
 */
const tikStalk = (username) => new Promise((resolve, reject) => {
    console.log(`Searching account for ${username}`)
    fetchJson(`https://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${config.lolhuman}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Twitter account info from username.
 * @param {String} username
 * @returns {Object}
 */
const twtStalk = (username) => new Promise((resolve, reject) => {
    console.log(`Searching account for ${username}`)
    fetchJson(`https://videfikri.com/api/stalktwit/?username=${username}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get github account info from username.
 * @param {String} username
 * @returns {Object}
 */
const gitstalk = (username) => new Promise((resolve, reject) => {
    console.log(`Searching account for ${username}`)
    fetchJson(`https://tobz-api.herokuapp.com/api/githubprofile?username=${username}&apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get phone info from GSMArena.
 * @param {String} model
 * @returns {Object}
 */
const gsmarena = (model) => new Promise((resolve, reject) => {
    console.log(`Get phone info from GSMArena for ${model}...`)
    fetchJson(`https://api.vhtear.com/gsmarena?query=${model}&apikey=BeliGoblokBetakMulu`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get food receipt.
 * @param {String} food
 * @returns {Object}
 */
const resep = (food) => new Promise((resolve, reject) => {
    console.log(`Get receipt for ${food}...`)
    fetchJson(`https://api.vhtear.com/resepmasakan?query=${food}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for WhatsApp sticker.
 * @param {String} query 
 * @returns {Object}
 */
const stimker = (query) => new Promise((resolve, reject) => {
    console.log('Searching for sticker...')
    fetchJson(`https://api.vhtear.com/wasticker?query=${query}&apikey=BeliGoblokBetakMulu`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get YouTube search results.
 * @param {String} query 
 * @returns {Object}
 */
const ytSearch = (query) => new Promise((resolve, reject) => {
    console.log(`Get YouTube search results for ${query}...`)
    fetchJson(`https://api.vhtear.com/youtube?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Play Store search results.
 * @param {String} query 
 * @returns {Object}
 */
const playstore = (query) => new Promise((resolve, reject) => {
    console.log(`Get Play Store search results for ${query}...`)
    fetchJson(`https://api.vhtear.com/playstore?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Shopee search results.
 * @param {String} query 
 * @param {String} count 
 * @returns {Object}
 */
const shopee = (query, count) => new Promise((resolve, reject) => {
    console.log(`Get Shopee search results for ${query}...`)
    fetchJson(`https://api.vhtear.com/shopee?query=${query}&count=${count}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Show surah list.
 * @returns {Object}
 */
const listSurah = () => new Promise((resolve, reject) => {
    console.log('Get Al-Qur\'an list...')
    fetchJson(`https://api.vhtear.com/quranlist?&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get surah.
 * @param {String} surah 
 * @returns {Object}
 */
const getSurah = (surah) => new Promise((resolve, reject) => {
    console.log(`Getting Al-Qur'an surah ${surah}...`)
    fetchJson(`https://api.vhtear.com/quran?no=${surah}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get motivation text.
 * @returns {String}
 */
const motivasi = () => new Promise((resolve, reject) => {
    console.log('Get motivation text...')
    fetchText('https://raw.githubusercontent.com/VideFrelan/motivasi/main/motivasi.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Play YT.
 * @param {String} query 
 * @returns {Object}
 */
const ytPlay = (query) => new Promise((resolve, reject) => {
    console.log(`Searching for ${query} in YouTube...`)
    fetchJson(`https://api.vhtear.com/ytmp3?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * IP look-up.
 * @param {String} ip 
 * @returns {Object}
 */
const whois = (ip) => new Promise((resolve, reject) => {
    console.log(`Look-up IP for ${ip}`)
    fetchJson(`https://api.vhtear.com/ipwhois?ipaddr=${ip}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Create shortlink.
 * @param {String} url
 * @returns {String}
 */
const shortener = (url) => new Promise((resolve, reject) => {
    console.log('Creating shortlink...')
    fetchText(`https://tinyurl.com/api-create.php?url=${url}`)
        .then((text) => resolve(text))
        .catch((err) => reject(err))
})

/**
 * Get jadwal sholat.
 * @param {String} city
 * @returns {Object}
 */
const jadwalSholat = (city) => new Promise((resolve, reject) => {
     url = 'https://api.banghasan.com/sholat/format/json'
     kodeKota = new Array()
     tanggal = moment.tz('Asia/Jakarta').format('YYYY-MM-DD')
    console.log(`Get jadwal sholat for ${city}...`)
    needle(url + '/kota/nama/' + city, (err, resp, body) => {
        if (err) throw err
        switch (body.kota.length) {
            case 0:
                reject('Kota tidak ditemukan!')
            break
            default:
                kodeKota.push(body.kota[0]['id'])
                needle(url + '/jadwal/kota/' + kodeKota[0] + '/tanggal/' + tanggal, (err, resp, body) => {
                    if (err) throw err
                    resolve([body.jadwal.data])
                })
            break
        }
    })
})

/**
 * Search for movie.
 * @param {String} title
 * @returns {Object}
 */
const movie = (title) => new Promise((resolve, reject) => {
    console.log(`Searching for Movie ${title}...`)
    fetchJson(`https://api.vhtear.com/downloadfilm?judul=${title}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Calculate travel payment.
 * @param {String} courier
 * @param {String} from
 * @param {String} to
 * @returns {Object}
 */
const ongkir = (courier, from, to) => new Promise((resolve, reject) => {
    console.log(`Checking ongkir...`)
    fetchJson(`https://api.vhtear.com/cekongkir?kurir=${courier}&fromcity=${from}&tocity=${to}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Twitter trending.
 * @returns {Object}
 */
const trendingTwt = (query) => new Promise((resolve, reject) => {
    console.log(`Get Twitter trending in country ${query}...`)
    fetchJson(`https://api.vhtear.com/trendtwitter?country=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get job seek data.
 * @returns {Object}
 */
const jobSeek = () => new Promise((resolve, reject) => {
    console.log('Searching for jobs...')
    fetchJson(`https://api-melodicxt-2.herokuapp.com/api/infoloker?apiKey=${config.melodic}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Sending hoax update.
 * @returns {Object}
 */
const infoHoax = () => new Promise((resolve, reject) => {
    console.log('Checking hoaxes...')
    fetchJson('https://docs-jojo.herokuapp.com/api/infohoax')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Sending spam call.
 * @param {Number} no 
 * @returns {Object}
 */
const spamcall = (no) => new Promise((resolve, reject) => {
    console.log(`Sending spam call to: ${no}`)
    fetchJson(`https://videfikri.com/api/call/?nohp=${no}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get alamat info
 * @parameterquery
 */
const alamat = (query) => new Promise((resolve, reject) => {
    console.log(`Getting info alamat from ${query}...`)
    fetchJson(`https://api.vhtear.com/infoalamat?query=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Sending spam SMS.
 * @param {Number} no 
 * @param {Number} amount 
 * @returns {Object}
 */
const spamsms = (no, amount) => new Promise((resolve, reject) => {
    console.log(`Sending spam SMS to: ${no}`)
    fetchJson(`https://mhankbarbar.herokuapp.com/api/spamsms?no=${no}&jum=${amount}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Search for Images of freepik
 * @param {String} query
 * @returns {Object}
 */
const freepik = (query) => new Promise((resolve, reject) => {
    console.log('Searching images...')
    fetchJson(`https://tobz-api.herokuapp.com/api/freepik?q=${query}&apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Wikipedia result for English language from given query.
 * @param {String} query
 * @returns {Object}
 */
const wikien = (query) => new Promise((resolve, reject) => {
    console.log(`Get result for ${query} in Wikipedia...`)
    fetchJson(`https://videfikri.com/api/wikieng?query=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const stickernobg = (query) => new Promise((resolve, reject) => {
    console.log('Converting sticker no bg...')
    fetchJson(`https://api.vhtear.com/removebgwithurl?link=${query}&apikey=${config.vhtear}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get APK from APKPure
 * @param {String} query
 * @returns {Object}
 */
const apkPure = (query) => new Promise((resolve, reject) => {
    console.log(`Get result for ${query} in ApkPure...`)
    fetchJson(`https://api.zeks.xyz/api/apkpure?q=${query}&apikey=${config.zeks}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get fresh videos from TikTok.
 * @returns {String}
 */
const asupan = () => new Promise((resolve, reject) => {
    console.log('Fetching video...')
    fetchText('http://sansekai.my.id/sansekai.txt')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Random dadu for group game xD
 * @returns {String}
 */
const dadu = () => new Promise((resolve, reject) => {
    console.log('Get sticker....')
    fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/Dadu')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

const randomLewd = () => new Promise((resolve, reject) => {
    tag = ['ecchi', 'lewdanimegirls', 'hentai', 'hentaifemdom', 'hentaiparadise', 'hentai4everyone', 'animearmpits', 'animefeets', 'animethighss', 'animebooty', 'biganimetiddies', 'animebellybutton', 'sideoppai', 'ahegao']
    randTag = tag[Math.floor(Math.random() * tag.length)]
    console.log(`Searching lewd from ${randTag} subreddit...`)
    fetchJson(`https://meme-api.herokuapp.com/gimme/${randTag}`) 
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get armpits pict.
 * @returns {Object}
 */
const armpits = () => new Promise((resolve, reject) => {
    console.log('Searching for armpits...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animearmpits')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get feets pict.
 * @returns {Object}
 */
const feets = () => new Promise((resolve, reject) => {
    console.log('Searching for feets...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animefeets')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get thighs pict.
 * @returns {Object}
 */
const thighs = () => new Promise((resolve, reject) => {
    console.log('Searching for thighs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animethighss')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ass pict.
 * @returns {Object}
 */
const ass = () => new Promise((resolve, reject) => {
    console.log('Searching for ass...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebooty')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get boobs pict.
 * @returns {Object}
 */
const boobs = () => new Promise((resolve, reject) => {
    console.log('Searching for boobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/biganimetiddies')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get belly pict.
 * @returns {Object}
 */
const belly = () => new Promise((resolve, reject) => {
    console.log('Searching for belly...')
    fetchJson('https://meme-api.herokuapp.com/gimme/animebellybutton')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get sideboobs pict.
 * @returns {Object}
 */
const sideboobs = () => new Promise((resolve, reject) => {
    console.log('Searching for sideboobs...')
    fetchJson('https://meme-api.herokuapp.com/gimme/sideoppai')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get ahegao pict.
 * @returns {Object}
 */
const ahegao = () => new Promise((resolve, reject) => {
    console.log('Searching for ahegao...')
    fetchJson('https://meme-api.herokuapp.com/gimme/ahegao')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

module.exports = {
	armpits,
    feets,
    thighs,
    ass,
    boobs,
    belly,
    sideboobs,
    ahegao,
	randomLewd,
	dadu,
	asupan,
    lirik,
    wiki,
    kbbi,
    bmkg,
    igStalk,
    gsmarena,
    resep,
    stimker,
    ytSearch,
    playstore,
    shopee,
    listSurah,
    getSurah,
    motivasi,
    ytPlay,
    ttp,
    whois,
    shortener,
    linesticker,
    jadwalSholat,
    alkitab,
    movie,
    jbola,
    alamat,
    berita,
    brainly,
    cuaca,
    ongkir,
    its,
    kurs,
    email,
    univ,
    avatar,
    tktksearch,
    distance,
    trendingTwt,
    corona,
    gitstalk,
    jobSeek,
    infoHoax,
    spamsms,
    wtpd,
    twtStalk,
    wtpdinfo,
    spamcall,
    freepik,
    wikien,
    stickernobg,
    apkPure,
    wps,
    tikStalk
}
