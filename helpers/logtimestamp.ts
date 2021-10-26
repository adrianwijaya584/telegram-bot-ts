import moment from "moment"
const log= console.log

console.log= function () {
  const args= Array.prototype.slice.call(arguments)

  args.unshift(`[${moment().format("DD-MM-YYYY HH:mm:ss")}]`)
  
  log.apply(console, args)
}