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
  This repository is just a small project in my free time. You can clone this repo and use it as you liked ;).

## How To Use
  ### Create bot token
  first you should open this link https://t.me/botfather, then you will see this chat room.

  <img src="https://media-assets-ggwp.s3.ap-southeast-1.amazonaws.com/2021/05/Komi-san-anime-3.jpg" height="100" />

  After that use `/newbot` then insert your bot name then add username for the bot it should end with *bot*. so for the example is `Testbotforgithub_bot`. Foila you've made your own bot. Please secure and store your `HTTP API Token`.

  <img src="https://www.tekloggers.com/wp-content/uploads/2021/05/komi-san-anime.jpg" height="100" />

  ### clone project
  to clone project open terminal or CMD and type `git clone https://github.com/adrianwijaya584/telegram-bot-ts.git --branch=master folder_name`
  you can add folder_name as you liked. ex: telebots.
  ### config environment
  After cloning the project you will see 
  ### what is next

## Development
you need nodemon `npm i -g nodemon`
## Production with PM2
If you want to use pm2 for production you should install pm2 in your server or pc first using `npm i -g pm2`. Then you will see `pm2.config.json` file.

<img src="https://firebasestorage.googleapis.com/v0/b/todo-b5c36.appspot.com/o/telebot_readme_assets%2Fpm2_files.jpg?alt=media&token=60b46a57-51f9-46bc-a083-34bc5f99eacd" width="150" />

Typescript can't run plainly on node js so we have to build it into js file so type `npm run build` and you will see build folder generated in the project.

Then type `pm2 start pm2.config.json` in your terminal/cmd. The prod with pm2 is finished.

<img src="https://firebasestorage.googleapis.com/v0/b/todo-b5c36.appspot.com/o/telebot_readme_assets%2Fpm2_start.jpg?alt=media&token=22ec1854-1c88-4539-a1b3-f46454c39c48">

- <h3>Tips :</h3>
You can use `pm2 save` for saving current process list so if your server is down you just have to use `pm2 resurrect` to bring back process so you don't have to search pm2 configuration one by one.

to restart or reload you can use `pm2 restart` or `pm2 reload`
<a href="https://stackoverflow.com/questions/44883269/what-is-the-difference-between-pm2-restart-and-pm2-reload#:~:text=The%20difference%20is%20documented%20here,at%20least%20one%20process%20running.">you can read the differnce here !</a>

## Production with Docker
coming soon for docker configuration