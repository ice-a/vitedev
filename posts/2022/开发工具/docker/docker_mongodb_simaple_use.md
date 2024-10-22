---
title: 简单搭建mongodb环境
date: 2022-02-02
tag:
- mongodb
- docker
category:
- docker 
---
# 
# mongodb

## 拉镜像
```
docker pull mongo:4.4-rc
```
## 启动

```
windows指定数据存放路径
docker run --rm --name mongo -d -p 27017:27017 -v D:\Mongodb\master\data:/data/db mongo:4.4-rc
```
