---
title: windows使用docker部署mongo数据持久化的坑
date: 2022-02-02
tag:
- windows
- docker
- mongo
- 环境
category:
- docker
---
# 
# 安装Docker
```
https://www.docker.com/get-started
下载安装即可
```
# 拉取mongo镜像
```
docker pull mongo:latest
# 视网络情况,快的话几秒就可以拉取慢的话几分钟
```
# 创建数据卷
```
docker volume create --name mongodata
# 删除的命令是
docker volume rm XXX
```
# 创建容器
```
docker run -p 27017:27017 --name=mongodb -v mongodata:/data/db -d mongo
```
# others
之后容器被误删,数据卷都还在的，使用上面的命令创建容器,数据还在