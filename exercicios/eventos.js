const env = require("../.env")
const Telegraf = require("telegraf")
const bot = new Telegraf(env.token)
const Game = require("../models/Game")
require("../config/db")


bot.start(ctx =>{
    const from = ctx.update.message.from.first_name
    ctx.reply
})

bot.on(`text`, async ctx =>{
const textReceive = ctx.update.message.text
const newText = `/${textReceive}/`
console.log(newText)
const checkGame = await Game.findOne(
    {
      "$search": {
        "game": textReceive   
      }
    }
  )
console.log(checkGame)
}
)

bot.startPolling()