import { Update } from ".pnpm/typegram@3.4.3/node_modules/typegram"
import { Context, Telegraf } from "telegraf"
import exampleController from "./exampleController"

const exampleCtrl= exampleController()

export default function (bot: Telegraf<Context<Update>>) {
  bot.command("/test", exampleCtrl.test)
}