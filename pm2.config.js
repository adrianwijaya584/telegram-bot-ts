require("dotenv").config()

const {APP_NAME}= process.env

module.exports= {
  apps: [{
    name: APP_NAME || "telebot",
    instances:1,
    exec_mode:"cluster",
    script: "./build/index.js"
  }]
}