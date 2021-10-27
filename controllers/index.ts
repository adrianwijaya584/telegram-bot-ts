import { Context, Scenes, Telegraf } from "telegraf"
import exampleController from "./exampleController"

const exampleCtrl= exampleController()

export default function (bot: Telegraf<Scenes.WizardContext>) {
  bot.command("/test", exampleCtrl.test)
  bot.command("/cats", exampleCtrl.cats)
  bot.command("/addCat", exampleCtrl.addCats)
}