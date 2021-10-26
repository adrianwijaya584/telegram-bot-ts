module.exports= {
  apps: [{
    name: "telebot",
    instances:1,
    exec_mode:"cluster",
    script: "./build/index.js"
  }]
}