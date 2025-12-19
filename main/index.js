import addProperty from './socket.js';
import useSQLiteAuthState from './sqliteAuth.js';

const haruka = {}
 haruka.tutorial = () => {
 console.log(`
╭──────────────────────────────────────╮
│     @ryuu-reinzz/haruka-lib          │
│  Small helper for WhatsApp Baileys   │
╰──────────────────────────────────────╯

Usage:
  haruka.extendSocketBot(socket, store, smsg, baileys)
    → extend socket with helper methods

  haruka.useSQLiteAuthState()
    → SQLite-based auth state for your bot

Examples:
  Add socket:
   import makeWASocket, {
     proto,
     generateWAMessageFromContent,
     jidDecode,
     downloadContentFromMessage,
     prepareWAMessageMedia,
     generateMessageID
   } from "baileys";
   const conn = makeWASocket({});
   const baileys = {
            proto,
            generateWAMessageFromContent,
            jidDecode,
            downloadContentFromMessage,
            prepareWAMessageMedia,
            generateMessageID
        }
   import haruka from "@ryuu-reinzz/haruka-lib";
   haruka.addProperty(conn, store, smsg, baileys);
  
  SQLite session:
    const sessionPath = "./session"
    if (!fs.existsSync(sessionPath)) fs.mkdirSync(sessionPath, { recursive: true });
    const useSQLiteAuthState = haruka.useSQLiteAuthState;
    const { state, saveCreds } = await useSQLiteAuthState(sessionPath + \"auth.db\");

Made by Ryuu
 `)
}
haruka.useSQLiteAuthState = useSQLiteAuthState;
haruka.addProperty = addProperty;

export default haruka;