[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/eritislami/evobot)

# 🤖 Android Discord (Discord Music Bot)
> AD is a Discord Music Bot built with discord.js & uses Command Handler from [discordjs.guide](https://discordjs.guide)

## Installation

1. How to obtain a Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. YouTube Data API v3 Key **[Guide](https://developers.google.com/youtube/v3/getting-started)**  
3. SoundCloud is no more providing APIs so no need of api.**
4. Node.js v12.0.0 or newer

## 🏁 Starting

I will prefer to run it on repl.it as it gives more convinience than glitch website.. Go to repl.it [here](https://repl.it/).To gain free hacker plan, go to [here](https://repl.it/claim) and paste this code there

Code - techwithtim

----

## 🧐 A Major Outlook

After Completing all the required installments and the changes head over to Uptime Robot [here](https://uptimerobot.com/) and login there..Choose the monitor as `https`.Then you would need a link..You could get the link in the web section of you project..First time if you dont run the project you could not see that section.Run the project and you could see it.Then paste the link in uptime robot and take any name and click monitor..And your project will be online 24/7..

---

## 🔎 Making The Project

**For PC users using VS Code** -

```
git clone https://github.com/gtagamermods/admusicbot.git
cd admusicbot
npm install
```

After installation finishes you can use `node index.js` to start the bot.

**For repl.it users** -

**Tap on this --**

[![Use on Repl.it](https://repl.it/badge/github/ZeroDiscord/EconomyBot)](https://repl.it/github/gtagamermods/admusicbot)

```
Type (npm i) in console
```

## ⚙️ Making Files

Copy or Rename `config.json.example` to `config.json` and fill out the values:

🚨🚨 **Commiting your token to be accessed by others or making it public is strictly prohibited.So, dont share your token in any cost or use .gitignore to hide secrets** 🚨🚨

```json
{
  "TOKEN": "",
  "YOUTUBE_API_KEY": "",
  "SOUNDCLOUD_CLIENT_ID": "",
  "MAX_PLAYLIST_SIZE": 10,
  "PREFIX": "ad!",
  "PRUNING": false,
  "STAY_TIME": 30,
  "LOCALE": "en",
  "support_server": "",
  "DEFAULT_VOLUME": 100
}
```

Currently available locales are:

• English (en)
• French (fr)
• Spanish (es)
• Turkish (tr)
• Korean (ko)
• Brazilian Portuguese (pt_br)
• Simplified Chinese (zh_cn)
• Traditional Chinese (zh_tw)

## 📝 Features & Commands

> Note: The default prefix is 'ad!'

* 🎶 Using YouTube Url

`ad!play https://www.youtube.com/c/ANDROIDDISCORD`

* 🔎 Playing music via Name

`ad!play Let me love you`

* 🔎 Search and play

`ad!search NCS Astronomia`

Reply with song number or numbers seperated by comma that you wish to play

Examples: `1` or `1,2,3`

* 📃 Play a playlist directly from youtube to Discord

`ad!playlist https://www.youtube.com/playlist?list=PLeiP6sSl8XyF7qcJ7WR6FjkpKtNBtzkqe`
![playlist](https://media.discordapp.net/attachments/806012341355151400/806012798236229633/playlistplay.png)

* 🔎 Play youtube playlists via search query

`ad!playlist NCS Releases`
![search](https://media.discordapp.net/attachments/806012341355151400/806013517873676288/playlist.png)

**Commands of Our Bot**

* Now Playing (ad!np)
* Queue system (ad!queue, ad!q)
* Loop / Repeat (ad!loop)
* Shuffle (ad!shuffle)
* Volume control (ad!volume, ad!v)
* Lyrics (ad!lyrics, ad!ly)
* Pause (ad!pause)
* Resume (ad!resume, ad!r)
* Skip (ad!skip, ad!s)
* Skip to song # in queue (ad!skipto, ad!st)
* Remove song # from queue (ad!remove, ad!rm)
* Toggle pruning of bot messages (ad!pruning)
* Help (ad!help, ad!h)
* Command Handler from [discordjs.guide](https://discordjs.guide/)
* Controls your Discord Bot via Reactions
![reactions](https://media.discordapp.net/attachments/806012341355151400/806013954085617684/play.png)


Main Credits go to [@iCrawl](https://github.com/iCrawl) for making evobot successfully the best music bot...😍
Get evobot repo here - 
https://github.com/eritislami/evobot
