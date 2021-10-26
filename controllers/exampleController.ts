import { Context } from "telegraf"

export default ()=>({
  test: async (ctx: Context)=>{
    ctx.reply("wow")
  }
})