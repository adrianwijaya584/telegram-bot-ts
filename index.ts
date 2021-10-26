import {Context, Telegraf} from "telegraf"
import dotenv from "dotenv"
import "./helpers/logtimestamp"
import controller from "./controllers"

dotenv.config()
const {BOT_TOKEN= "", APP_NAME= ""}= process.env

const bot= new Telegraf(BOT_TOKEN)

controller(bot)
bot.launch()

console.log(`${APP_NAME} started.`)