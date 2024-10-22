---
title: ubuntu安装nodejs版本过低问题
date: 2023-01-01
tag:
- opensource
- nodejs
- 版本
- 环境
category:
- 镜像
---


#

# 卸载

## 卸载低版本的

```bash
sudo apt remove nodejs
sudo apt remove npm
# 删除残留文件
cd /usr/local/lib  -> 删除所有node和node_modules文件
cd /usr/local/include -> 删除所有node和node_modules文件
cd /usr/local/bin -> 删除所有node和node_modules文件
```

# 安装

## 方法1

```bash
# 安装git和curl，如果已经安装过，可以跳过
sudo apt install git curl
#  安装nodejs
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
# 查看版本
node -v
npm -v
```

## 方法2

### nvm安装管理版本

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
#或者
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# 添加环境变量
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
#安装
nvm install --lts  # 最新稳定版本
nvm install 16.13.1  # 指定版本
nvm use 16.13.1  # 切换版本
nvm ls  # 查看已安装的版本
nvm current  # 查看当前使用的版本
nvm alias default 16.13.1  # 设置默认版本
nvm uninstall 16.13.1  # 卸载指定版本
```
