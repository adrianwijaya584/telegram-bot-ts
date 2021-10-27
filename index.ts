import {Telegraf, Scenes, session} from "telegraf"
import dotenv from "dotenv"
import "./helpers/logtimestamp"
import controller from "./controllers"
import scenes from "./scenes"

dotenv.config()
const {BOT_TOKEN= "", APP_NAME= ""}= process.env

const bot= new Telegraf<Scenes.WizardContext>(BOT_TOKEN)
bot.use(session())
bot.use(scenes.middleware())

controller(bot)

bot.launch()

console.log(`${APP_NAME} started.`)