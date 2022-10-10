const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
bot.start(ctx =>{
    const from = ctx.update.message.from
    const fromId = ctx.update.message.from.id
    fromId === 1048508618 ? ctx.reply(`Seja bem vindo, meu mestre ${from.first_name}! `): ctx.reply(`So falo com meu mestre`)

})
bot.startPolling()