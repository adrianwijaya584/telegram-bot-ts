# Telegraf with TS

## Contents
- [Description](#description)
- [How to Use](#usage)
  - [Create Telegram Bot Token](#create-bot-token)
  - [Clone Project](#clone-project)
  - [Config Environment](#config-environment)
  - [What is Next ?](#what-is-next)
- [Development](#development)
- [Production with pm2](#production-with-pm2)
- [Production with docker](#production-with-docker)

## Description
---
  This repository is just an example of my project in college. You clone this repo and use it as you liked ;). README.md make still in process.
## How To Use
---
  ### Create bot token
  first you should open this link https://t.me/botfather, then you will see this chat room.
  <img src="https://media-assets-ggwp.s3.ap-southeast-1.amazonaws.com/2021/05/Komi-san-anime-3.jpg" />

  After that use `/newbot` then insert your bot name then add username for the bot it should end with *bot*. so for the example i made Testbotforgithub_bot. Foila you've made your own bot. Please secure and store your `HTTP API Token`.

  <img src="https://www.tekloggers.com/wp-content/uploads/2021/05/komi-san-anime.jpg" />

  ### clone project
  ### config environment
  ### what is next

## Development
---
nodemon
## Production with PM2
---
if you want to use pm2 for production you should install pm2 in your server or pc first using `npm i -g pm2`. Then you will see `pm2.config.json` file.

<img src="https://lh4.googleusercontent.com/dV2e6N0UAhWoTp3iJAbEWuzCvr3MXrSYdoj0vH581zO2pVyDhDesvoPJzYTGnd6emJCSkfNRPC6G4yPQIU7W=w1366-h569" />

You just have to type `pm2 start pm2.config.json` in your terminal/cmd. The prod with pm2 is finished.

<img src="https://lh5.googleusercontent.com/g4FzbC9pRN3roGZafiUi2xHTg0jIS0HxmE_zLcEn-vH3qpEo8m8tpRDTSbYkD8AoAdqB5Ae6oJFhXWqp1PTe=w1366-h569-rw">

- <h3>Tips :</h3>
You can use `pm2 save` for saving current process list so if your server is down you just have to use `pm2 resurrect` to bring back process so you don't have to search pm2 configuration one by one.

to restart or reload you can use `pm2 restart` or `pm2 reload`
<a href="https://stackoverflow.com/questions/44883269/what-is-the-difference-between-pm2-restart-and-pm2-reload#:~:text=The%20difference%20is%20documented%20here,at%20least%20one%20process%20running.">you can read the differnce here !</a>

## Production with Docker
---
coming soon for docker configuration