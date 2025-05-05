#!/usr/bin/env sh

# 发生错误时终止脚本
set -e

# 构建
npm run build

# 进入构建输出目录
cd docs/.vuepress/dist

# 如果是自定义域名，写一个 CNAME 文件（可选）
# echo 'www.example.com' > CNAME

# 初始化一个 git 仓库并提交代码
git init
git add -A
git commit -m 'deploy'

# 发布到 GitHub Pages 的 gh-pages 分支（替换你的用户名和仓库名）
git push -f git@github.com:lipengchem/lipengchem.git master:gh-pages

cd -
