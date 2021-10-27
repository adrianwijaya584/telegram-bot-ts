import { Message } from ".pnpm/typegram@3.4.3/node_modules/typegram"
import { Context } from "telegraf"

export default (ctx: Context, {chat, message_id}: Message.TextMessage, message:string)=> {  
  ctx.telegram.editMessageText(chat.id, message_id, undefined, message)
}