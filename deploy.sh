#!/usr/bin/env sh

# 一键提交源码并发布 VuePress 静态站点
set -e

REPO_URL="https://github.com/lipengchem/lipengchem.github.io.git"
SOURCE_BRANCH="master"
PAGES_BRANCH="gh-pages"
DIST_DIR="docs/.vuepress/dist"
COMMIT_MESSAGE="${1:-update blog}"

CURRENT_BRANCH="$(git branch --show-current)"

if [ "$CURRENT_BRANCH" != "$SOURCE_BRANCH" ]; then
  echo "当前分支是 $CURRENT_BRANCH，请先切换到 $SOURCE_BRANCH 后再运行。"
  echo "可执行：git checkout $SOURCE_BRANCH"
  exit 1
fi

echo "==> 提交博客源码到 $SOURCE_BRANCH"
git add -A

if git diff --cached --quiet; then
  echo "没有新的源码改动需要提交。"
else
  git commit -m "$COMMIT_MESSAGE"
fi

echo "==> 同步远端 $SOURCE_BRANCH"
git pull --rebase origin "$SOURCE_BRANCH"

echo "==> 推送源码到 GitHub"
git push origin "$SOURCE_BRANCH"

echo "==> 构建 VuePress 站点"
npm run build:win

echo "==> 发布静态站点到 $PAGES_BRANCH"
cd "$DIST_DIR"

git init
git checkout -B "$PAGES_BRANCH"
git add -A
git commit -m "deploy site"
git push -f "$REPO_URL" "$PAGES_BRANCH"

cd -

echo "==> 完成：源码已推送到 $SOURCE_BRANCH，站点已发布到 $PAGES_BRANCH。"
