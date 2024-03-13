#!/bin/bash
export PM2_HOME="/opt/emplifi"
cd /opt/emplifi
npm install -g n
n 20.10.0
rm -rf node_modules
npm cache clean --force
npm install -g pm2@5.3.0
npm ci
# https://stackoverflow.com/questions/34734975/pm2-how-to-start-if-not-started-kill-and-start-if-started
# This part: 2> /dev/null - will simply redirect the stderr to the /dev/null, meaning to nowhere.
pm2 delete next 2> /dev/null || true
pm2 start npm --name "next" -- start
