---
title: 简单搭建redis环境
date: 2022-02-02
tag:
- redis
- docker
category:
- docker 
---

#
# 拉取镜像
```
docker pull redis
```
# 创建容器
```
docker run --name some-redis -p 6379:6379 -d redis
```