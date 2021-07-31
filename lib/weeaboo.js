const { fetchJson } = require('../lib/fetcher')
//const config = require('../config.json')

/**
 * Get anime info from Kusonime.
 * @param {String} title
 * @returns {Object}
 */
const anime = (title) => new Promise((resolve, reject) => {
    console.log(`Get anime info from Kusonime for ${title}...`)
    fetchJson(`https://tobz-api.herokuapp.com/api/kuso?q=${title}&apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get info anime from dewabatch.
 * @param {String} title
 * @returns {Object}
 */
const dewa = (title) => new Promise((resolve, reject) => {
    console.log(`Get manga info from Dewabatch for ${title}...`)
    fetchJson(`https://tobz-api.herokuapp.com/api/dewabatch?q=${title}&apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get random waifu image.
 * @param {Boolean} nsfw
 * @returns {Object}
 */
const waifu = (nsfw) => new Promise((resolve, reject) => {
    if (banChats === true) {
        console.log('Get NSFW waifu image...')
        fetchJson('https://waifu.pics/api/nsfw/waifu')
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    } else {
        console.log('Get SFW waifu image...')
        fetchJson('https://waifu.pics/api/sfw/waifu')
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    }
})

/**
 * Search for anime source from image.
 * @param {Buffer} imageBase64 
 * @returns {Object}
 */
const wait = (imageBase64) => new Promise((resolve, reject) => {
    console.log('Searching for anime source...')
    fetchJson('https://trace.moe/api/search', {
        method: 'POST',
        body: JSON.stringify({ image: imageBase64 }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Anitoki latest update.
 * @returns {Object}
 */
const anitoki = () => new Promise((resolve, reject) => {
    console.log('Get Anitoki latest update...')
    fetchJson(`https://api-melodicxt-2.herokuapp.com/api/anitoki?apiKey=${config.melodic}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Any pict Husbu
 * @returns {Object}
 */
const husbu = () => new Promise((resolve, reject) => {
    console.log('Get Random husbu...')
    fetchJson(`https://lolhuman.herokuapp.com/api/random/husbu?apikey=${config.lolhuman}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Any pict Husbu
 * @returns {Object}
 */
const loli = () => new Promise((resolve, reject) => {
    console.log('Get Random husbu...')
    fetchJson(`https://lolhuman.herokuapp.com/api/random/loli?apikey=${config.lolhuman}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Any pict Husbu
 * @returns {Object}
 */
const elf = () => new Promise((resolve, reject) => {
    console.log('Get Random husbu...')
    fetchJson(`https://lolhuman.herokuapp.com/api/random/elf?apikey=${config.lolhuman}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Any pict Husbu
 * @returns {Object}
 */
const fanart = () => new Promise((resolve, reject) => {
    console.log('Get Random husbu...')
    fetchJson(`https://lolhuman.herokuapp.com/api/random/art?apikey=${config.lolhuman}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Any pict Husbu
 * @returns {Object}
 */
const wp = () => new Promise((resolve, reject) => {
    console.log('Get Random husbu...')
    fetchJson(`https://lolhuman.herokuapp.com/api/random/wallnime?apikey=${config.lolhuman}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Any pict Shota
 * @returns {Object}
 */
const shota = () => new Promise((resolve, reject) => {
    console.log('Get Random shota...')
    fetchJson(`https://lolhuman.herokuapp.com/api/random/shota?apikey=${config.lolhuman}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


/**
 * Get Neonime latest update.
 * @returns {Object}
 */
const neonime = () => new Promise((resolve, reject) => {
    console.log('Get Neonime latest update...')
    fetchJson('https://enznoire.herokuapp.com/neolatest')
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Anoboy anime on-going list.
 * @returns {Object}
 */
const anoboy = () => new Promise((resolve, reject) => {
    console.log('Get Anoboy on-going...')
    fetchJson(`https://tobz-api.herokuapp.com/api/anoboyschedule?apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Anoboy anime on-going list.
 * @returns {Object}
 */
const anoboylts = () => new Promise((resolve, reject) => {
    console.log('Get Anoboy on-going...')
    fetchJson(`https://tobz-api.herokuapp.com/api/anoboyongoing?apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Neonime latest update.
 * @returns {Object}
 */
const neosearch = (query) => new Promise((resolve, reject) => {
    console.log(`Search anime ${query} from neonime.vip..`)
    fetchJson(`http://enznoire.herokuapp.com/neonime?q=${query}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get manga from BacaManga.
 * @returns {Object}
 */
const bkomik = (query) => new Promise((resolve, reject) => {
    console.log(`Search manga ${query} from bacamanga..`)
    fetchJson(`https://tobz-api.herokuapp.com/api/bacakomik?q=${query}&apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})

/**
 * Get Neonime latest update.
 * @returns {Object}
 */
const anosearch = (query) => new Promise((resolve, reject) => {
    console.log(`Search anime ${query} from anoboy..`)
    fetchJson(`https://tobz-api.herokuapp.com/api/anoboy?q=${query}&apikey=${config.tobz}`)
        .then((result) => resolve(result))
        .catch((err) => reject(err))
})


module.exports = {
    anime,
    dewa,
    husbu,
    waifu,
    loli,
    elf,
    fanart,
    wait,
    anitoki,
    neonime,
    anoboy,
    neosearch,
    bkomik,
    shota,
    anoboylts,
    anosearch,
    wp
}
