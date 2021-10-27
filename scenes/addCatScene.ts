import { Scenes } from "telegraf"
import editMessage from "../helpers/editMessage"
import notCommandValidator from "../helpers/notCommandValidator"
import mysql from "./../configs/mysql"

let name= ""
let race= ""

const addCatScene= new Scenes.WizardScene("addCat", async (ctx)=>{
  name="abc"
  ctx.reply("Masukan Nama Kucing")
  ctx.wizard.next()
}, async (ctx)=> {
  //@ts-ignore
  name= ctx.message.text.trim()

  try {
    if (!name) {
      ctx.reply("Harap memasukan nama kucing")
      return
    }    
    await notCommandValidator(ctx, name)
  } catch (error) {
    return
  }

  if(name=="exit") {
    ctx.reply("exited")
    ctx.scene.leave()
    return
  }

  ctx.reply("Masukan Ras Kucing")

  ctx.wizard.next()
}, async (ctx)=> {
  //@ts-ignore
  race= ctx.message.text.trim()

  if (!race) {
    ctx.reply("Harap memasukan ras kucing")
    return
  }

  const message= await ctx.replyWithHTML("waiting...")

  try {
    await mysql("cats").insert({
      name,
      race
    })

    editMessage(ctx, message, `data kucing berhasil ditambahkan !`)
  } catch (error) {
    console.log(error)
    
    ctx.reply("Oops terjadi kesalahan")
  }
  ctx.scene.leave()
})

export default addCatScene