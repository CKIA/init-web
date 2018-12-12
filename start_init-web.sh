#!/bin/bash
#author lawliet
echo "git pulling"
git pull
echo "git pull success"
nohup /usr/local/init-web/catalina.sh start > /usr/local/init-web/log 2>&1 &
