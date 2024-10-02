const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUNPQnFCbGorQ01nby91bUtndURmakxQbUp5Mnd1bkRlVVVoUHhKZ0RXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFcyMDBFOHdXSFpKWUdPRGx5MkRFWnc2TnB0RGNOL3dEREdLVUwveVR5ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RXVlYXEwK2NFbFFHWE1obzBFZS9ZN2VXL3VmYThaZ0pUbXltZHZQcjI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIdHlaNnBwTVI0a0hsYlJzalJKVkpEUE1heFQ4MHRhdUhORk44ZUsrUGcwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldEa3BuM0F6ZGJiQU5jeGxmQWpDUGlnR0dNQlZSVEYzY1lMKzFEVmp2bDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd2VEREMloyVWZYclBLU1lpSy9SR0FycFdoV0gvTG84MS90SGc5SDBUV2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0M4SlJWOEU2Vy8xWU8vTmZ1N2MrZ3R2VkhMbWNQOWJweWswbzJnN3hFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidkQyMHdSeitFdmRwTTBvR2lXR3d3T29GWG9ZYyttQ3JjdDg2Sy9TTDlTND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFYZlVqTFgzSGg1WVg2dlNnYWg2OUtrLzRlWHVtVm9Dd09VU2w5Z21nL1IvY3ZtVEtpT2I1bkdhNnhHcGFIaUVDRUpWa3BPaFg4RXFsREZ3RGtTYWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEwLCJhZHZTZWNyZXRLZXkiOiJ6WUpSN0pUck5POHh5YzJhNWQxN0UxRkVHSVViNlErNmFrQ1NWVXMxbFdvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzUjFMLUo2YlJER0F6WnhfVmRNRXNnIiwicGhvbmVJZCI6IjFkZTg1YTBlLTVlYWUtNGYxYi1hYmNhLTZlYjVjNDg5NzE5YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqMTluU0kvbDZkbGFqdVRuTU00K2RIbWp1ck09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkt0c2JFY1BOMzNTbFRYbElOc3V0c3NTNy9ZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iko2SzNTQ0xSIiwibWUiOnsiaWQiOiIyMzMyMDc0MTU0Njk6MzRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tDUzBlVU5FS1N4K3JZR0dBOGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNRS1B6OEFZRkZHUGtWWXVLamJpTC9vd0Y2TzJ3Uy9yY1hIVHZteFZ5ekk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IllHM0g4TFZJMENSbUFsLzFZZC9Hb1VlYmxpbW40T1RCaFRwWS9pL3RKR2pjY296QkZQZk92Ny9kYllLVHBxNTlyeFNCYThhMW44Wko0TWJLRU9BNUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1Tlk5N3Z0N1BlYlVPYzVWQ2tmOVJnWm93NUw5UkgyL2QxL1VpZE1TcGF4UVhpczk5dEUwd3lSVW1MdkpvSEUvY1RVM1cxTERpZnVFMHJUdlBYak5pZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzIwNzQxNTQ2OTozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkMENqOC9BR0JSUmo1RldMaW8yNGkvNk1CZWp0c0V2NjNGeDA3NXNWY3N5In19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU4NjQxMTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTGt3In0=' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '233207415469' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || true  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || true  ,
AI_IMAGE: process.env.AI_IMAGE || true  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'nonbutton' ,
ANTI_DELETE : process.env.ANTI_DELETE || true ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_EXPIRY_DATE : process.env.BOT_EXPIRY_DATE || '2029-09-05',
BOT_EXPIRY_TIME : process.env.BOT_EXPIRY_TIME || '16:24:00',
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '233207415469' : process.env.DELETEMSGSENDTO,
  
};
