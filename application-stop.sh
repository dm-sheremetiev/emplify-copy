#!/bin/bash
export PM2_HOME="/opt/emplifi"
runningInstance=$(pm2 list | grep next)
if [ -z "$runningInstance" ]; then echo "No running instances found"; else pm2 stop next; fi
rm -rf /opt/emplifi/*