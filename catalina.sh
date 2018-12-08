#!/bin/bash
#uthor lawliet
if [ "$1" = "start" ];then
  path="/usr/local/init-web"
  echo $path
  cd $path
  echo "git pull start"
  git pull
  echo "git pull success"
  chmod 777 /usr/local/init-web/node_modules/.bin/webpack-dev-server
  npm run dev
elif [ "$1" = "stop" ];then
  echo "service stoping"
  input1="node"
  PIDS=$(ps -ef | grep $input1|awk '{print $2}')
  echo $PIDS
  for i in $PIDS
  do
    echo $i
    kill -9 $i
  done
  echo "init-web stop success"
elif ["$1" = "restart"]; then
  echo "service stoping"
  input1="node"
  PIDS=$(ps -ef | grep $input1|awk '{print $2}')
  echo $PIDS
  for i in $PIDS
  do
    echo $i
    kill -9 $i
  done
  echo "init-web stop success"

  path="/usr/local/init-web"
  echo $path
  cd $path
  echo "git pull start"
  git pull
  echo "git pull success"
  chmod 777 /usr/local/init-web/node_modules/.bin/webpack-dev-server
  npm run dev
fi
