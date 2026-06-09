#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 百度链接推送
if [ -z "$BAIDU_PUSH_TOKEN" ]; then
  echo "BAIDU_PUSH_TOKEN is not set, skip baidu push."
  rm -rf urls.txt
  exit 0
fi

curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://lipengchem.github.io&token=${BAIDU_PUSH_TOKEN}"

rm -rf urls.txt # 删除文件
