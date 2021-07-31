exports.wait = () => {
	return`*「 WAIT 」* \n *SEDANG PROSES*`
}

exports.ban = () => {
	return`*「 YA MAAP AJA BRO 」*\n\n Yahaha Di banned ama owner`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.error = () => {
	return`* 「 EMROR 」*`
}

exports.error.Iv = () => {
 	return` 「 EMROR 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 regis dulu 」*\n\n *${prefix}daftar nama|email|code* \n *email lu verif dulu buat dapat code*`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.nomed = () => {
	return`* 「 _MAAF_ 」 *\n${pushname}\n Owner sedang menghemat kuota. fitur media dengan ukuran besar sedang dinonaktifkan`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.prem = () => {
	return`*「PREMIUM ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil *diaktifkan*!\n\n➸ *Username*: ${pushname}\n➸ *Alasan*: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, emailUser, serialUser, time, sender) => {
	return`*「 Register 」*

┏⋗ Name : ${namaUser}
┣⋗ Email : ${emailUser}
┗⋗Number : wa.me/${sender.split("@")[0]}

「 Terimakasih telah mendaftar 」`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⋗level mu : ${getLevelingLevel(sender)}*\n*┣⋗jenis command : ${command}*\n*┗⋗syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⋗level mu : ${getLevelingLevel(sender)}*\n*┣⋗jenis command : ${command}*\n*┗⋗syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⋗level mu : ${getLevelingLevel(sender)}*\n*┣⋗jenis command : ${command}*\n*┗⋗syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⋗level mu : ${getLevelingLevel(sender)}*\n*┣⋗jenis command : ${command}*\n*┗⋗syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⋗level mu : ${getLevelingLevel(sender)}*\n*┣⋗jenis command : ${command}*\n*┗⋗syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⋗level mu : ${getLevelingLevel(sender)}*\n*┣⋗jenis command : ${command}*\n*┗⋗syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
┏⋗ *Nama* : ${pushname}
┣⋗ *Nomer* : wa.me/${sender.split("@")[0]}
┣⋗ *Xp* : ${getLevelingXp(sender)}
┣⋗ *Level* : ${getLevel} ⋗ ${getLevelingLevel(sender)}
┗⋗ ketik ${prefix}leaderboard untuk melihat ranking
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap jam 24:00\n hubungi owner untuk mereset limit✌️*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}
NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit atau menghubungi owner untuk mereset limit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⋗ *「 ATM 」* ━┓\n┣⋗ *Nama* : ${pushname}\n┣⋗ *Nomer* : ${sender.split("@")[0]}\n┣⋗ *Uang* : ${uangkau}\n┗━━━━━━━━━━`
}
