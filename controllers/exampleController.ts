import { Context } from "telegraf"
import { WizardContext } from "telegraf/typings/scenes"
import mysql from "./../configs/mysql"
import editMessage from "./../helpers/editMessage"

export default ()=>({
  test: async (ctx: Context)=>{
    ctx.reply("wow")
  },
  cats: async (ctx: Context)=>{
    const message= await ctx.replyWithHTML("Waiting...")
    
    try {
      // TODO : add more cats data
      const cats= await mysql<Cats>("cats")
      .select("name", "race")
      // .orWhere("name", "emeng")
      // .orWhere('race', "persian")

      const msg:string[] = ["Cats List"]
      
      cats.forEach(({name, race}, k)=> {
        msg.push(`${k+1}. ${name}: ${race}`)
      })

      editMessage(ctx, message, msg.join("\n"))
    } catch (error) {
      console.log(error)
    }
  },
  addCats: (ctx:WizardContext)=> {
    ctx.scene.enter("addCat")
  }
})