---
title: 服务器上安装vscode-远程写代码
date: 2022-02-02
tag:
- code
- server
- dev
category:
- dev
---
#
# 服务器上安装vscode,远程写代码

# 安装
```
curl -fOL https://github.com/coder/code-server/releases/download/v4.2.0/code-server_4.2.0_amd64.deb
```
# 修改配置
```
vim ~/.config/code-server/config.yaml
bind-addr:后面的部分改成0.0.0.0:xxxx(xxxx表示端口号，可随意设置)
password:后面的部分改成你想要的密码
```
# 启动
code-server