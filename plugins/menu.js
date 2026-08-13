import os from "os";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
    Module
} from "../lib/plugins.js";
import config from "../config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Rekho tomar video file ei path e: plugins/bin/menu.mp4
const menuVideoPath = path.join(__dirname, "bin", "menu.mp4");

const readMore = String.fromCharCode(8206).repeat(4001);

function SABIR7718(secs) {
    const pad = (s) => s.toString().padStart(2, "0");
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = Math.floor(secs % 60);
    return `${pad(h)}h ${pad(m)}m ${pad(s)}s`;
}

Module({
    command: "menu",
    package: "general",
    description: "Show simple menu header",
})(async (message) => {
    try {
        await message.react("🌷","💋","💗","🦋");

        const time = new Date().toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata",
        });

        const userName = message.pushName || "User";

        const usedGB = ((os.totalmem() - os.freemem()) / 1073741824).toFixed(2);
        const totGB = (os.totalmem() / 1073741824).toFixed(2);
        const ram = `${usedGB} / ${totGB} GB`;

        const S7 = `
   *🚀 Aᴀᴋᴀᴢᴀ xᴍᴅ ʙᴏᴛ*
╔─━━━━━━━━━━━━━━━━─➣
│ *𝐔ѕᴇʀ*    : ${userName}
│ *𝐏ʀᴇғɪx*  : ${config.prefix}
│ *𝐑ᴜɴ*     : ${SABIR7718(process.uptime())}
│ *𝐌ᴏᴅᴇ*    : Public
│ *𝐎ᴡɴᴇʀ*    : ‎𐏓꯭⸙⤹𝚳𝚯𝚯𝚴-𝚾֓>꯭꧕༊
│ *𝐑ᴀᴍ*     : ${ram}
│ *𝐓ɪᴍᴇ*    : ${time}
╚─━━━━━━━━━━━━━━━━─➣

${readMore}
‎┏┉──≻『 👑 Oᴡɴᴇʀ 』──┉➣
‎┃ ⬢  👤 owner
‎┃ ⬢  ❤️ alive
‎┃ ⬢  🔗 pair
‎┃ ⬢  ⏳ uptime
‎┃ ⬢  🔒 mode private
‎┃ ⬢  🌍 mode public
‎┃ ⬢  ⚙️ prefix set
‎┗┉─────────────────────┉➣
‎
‎┏┉──≻『 👤 Pʀᴏꜰɪʟᴇ 』≺──┉➣
‎┃ ⬢  🖼️ getpp
‎┃ ⬢ ✨ setpp
‎┃ ⬢ 📝 getbio
‎┃ ⬢ 📄 setbio
‎┃ ⬢ 👀 vv
‎┃ ⬢ 👀 vv2
‎┃ ⬢ 🧩 sticker
‎┃ ⬢ 🚫 block
‎┃ ⬢ 😂 😃
‎┗┉───────────────────────┉┛
‎
‎┏┉──≻『 🛡️ Gʀᴏᴜᴘ 』≺──┉┓
‎┃ ⬢ 📢 hidetag
‎┃ ⬢ 🏷️ tag
‎┃ ⬢ 👥 tagall
‎┃ ⬢ ❌ kick
‎┃ ⬢ 💥 kickall
‎┃ ⬢ ⭐ promote
‎┃ ⬢ 🔻 demote
‎┃ ⬢ 👋 welcome
‎┃ ⬢ 🌙 goodbye
‎┃ ⬢ 🔗 antilink
‎┃ ⬢ 🤖 antibot
‎┃ ⬢ 🖼️ antisticker
‎┃ ⬢ 📛 antimention
‎┃ ⬢ 🗑️ delete
‎┃ ⬢ 🔓 open
‎┃ ⬢ 🔒 close
‎┃ ⬢ ♻️ resetlink
‎┃ ⬢ 📊 gstatus
‎┗┉─────────────────────┉┛
‎
‎┏┉──≻『 ⚡ Aᴜᴛᴏ Fᴇᴀᴛᴜʀᴇꜱ 』≺──┉┓
‎┃ ⬢ 👀 autoseen
‎┃ ⬢ 💚 autoreact
‎┃ ⬢ ⌨️ autotyping
‎┃ ⬢ 🎙️ autorecording
‎┃ ⬢ 📞 anticall
‎┃ ⬢ 📡 autostatus seen
‎┗┉─────────────────────┉┛
‎
‎┏┉──≻『 🎧 Mᴇᴅɪᴀ 』≺──┉┓
‎┃ ⬢ 🎵 play
‎┃ ⬢ 🎶 song
‎┃ ⬢ 🎥 video
‎┃ ⬢ ▶️ ytmp4
‎┃ ⬢ 📘 fb
‎┃ ⬢ 📷 insta
‎┃ ⬢ 🎭 tiktok
‎┃ ⬢ 📌 pinterest
‎┗┉─────────────────────┉┛
‎
‎┏┉──≻『 🤖 Aɪ / Tᴏᴏʟꜱ 』≺──┉┓
‎┃ ⬢ 🧠 gpt
‎┃ ⬢ ⚡ ping
‎┗┉───────────────────┉┛
‎
‎┏┉──≻『 🚀 Eꭖᴛʀᴀ Fᴇᴀᴛᴜʀᴇꜱ 』≺──┉┓
‎┃ ⬢ 📦 apk
‎┃ ⬢ 💻 github
‎┃ ⬢ 🌐 git
‎┃ ⬢ 📢 spam
‎┃ ⬢ 🖼️ image
‎┃ ⬢ 😍 emojimix
‎┃ ⬢ 🧩 sticker
‎┃ ⬢ 💾 save
‎┃ ⬢ 🎤 vnote
‎┃ ⬢ 🎼 lyrics
‎┃ ⬢ 🌦️ weather
‎┃ ⬢ 🌍 trt
‎┃ ⬢ 👑 admin
‎┃ ⬢ 🎬 xvideo
‎┃ ⬢ 🎉 funmenu
‎┃ ⬢ 📚 gmenu
‎┃ ⬢ 🆔 checkid
‎┃ ⬢ 🗑️ delete / del
‎┃ ⬢ 📡 broadcast
‎┗┉─────────────────────┉┛

> *© চন্দ্রবিন্দুর চাঁদ • OWNER*
 
`;

        await message.conn.sendMessage(message.from, {
            video: fs.existsSync(menuVideoPath)
                ? fs.readFileSync(menuVideoPath)
                : { url: "https://files.catbox.moe/jrmwl3.mp4" },
            caption: S7,
            mimetype: "video/mp4",
            gifPlayback: false,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363430505586005@newsletter",
                    newsletterName: "Aᴀᴋᴀᴢᴀ xᴍᴅ ʙᴏᴛ",
                    serverMessageId: 6,
                },
            },
        });

    } catch (err) {
        console.error("❌ Menu error:", err);
        await message.conn.sendMessage(message.from, {
            S7: `❌ Error: ${err?.message || err}`,
        });
    }
});