# Wrench Studios Testers Helper

### <span style="color:red"> Disclaimer </span>
This isnt official- i am just bored and wanted to make something.

 ---
hej! this is supposed to be a bot that helps testers for wrench studios submit bug reports and suggestions. this bot is also meant to help the developers see the severity of each bug report.

---

### Install guide
Pre-requisites:
- node.js (v16.9.0 or higher)
- npm (comes with node.js)

Actual guide:
1. download the code
(insert photo)
2. run `npm i` to install required dependencies
3. rename config.json.example to config.json and fill in the required fields
4. run `node register.js` to register the commands to your server
5. run `node index.js` to start the bot
6. enjoy!

Extra steps for 24/7 hosting:
1. install pm2 `npm i -g pm2`
2. `pm2 start index.js --name "wrench-tester-helper"` start the bot with pm2
3. `pm2 save` to save the pm2 process list
4. `pm2 startup` to generate the command to run on startup, and run the generated command with admin privileges

Done! Your bot should now be running 24/7! You can check the status of your bot with `pm2 status` and view logs with `pm2 logs wrench-tester-helper`