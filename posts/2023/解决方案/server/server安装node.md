---
title: server安装node及node版本管理
date: 2022-02-02
tag:
- nvm
- node
- server
category:
- dev
---
# 
# 下载nvm
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
# 设置环境变量
```
对上边输出的结果一行执行一条
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
# 安装最新lts版本
```
nvm install --lts
```
# 查看node和npm版本
```
node -v
npm -v
```