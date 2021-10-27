// TODO : stop scene if text is command
export default (ctx: MySceneContext, text: string)=> {
  if (text.match(/\/.\w+/gi)) {
    ctx.reply("Oops no command allowed !")
    return Promise.reject("ok")
  }
}