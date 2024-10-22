---
title: hertzbeat
date: 2022-02-02
tag:
- docker
category:
- docker
---
#
# hertzbeat
```bash
#监控
docker run -d -p 1157:1157 -p 1158:1158 -e LANG=zh_CN.UTF-8 -e TZ=Asia/Shanghai -v /root/hertzbeat//data:/opt/hertzbeat/data -v /root/hertzbeat/logs:/opt/hertzbeat/logs -v /r

oot/hertzbeat/application.yml:/opt/hertzbeat/config/application.yml -v /root/hertzbeat/sureness.yml:/opt/hertzbeat/config/sureness.yml --restart=always --name hertzbeat tancloud/hertzbeat

# 采集器
docker run -d -e IDENTITY=custom-collector-name -e MODE=public -e MANAGER_HOST=127.0.0.1 -e MANAGER_PORT=1158 --name hertzbeat-collector tancloud/hertzbeat-collector
```

# mysql
```bash
sudo docker run -itd --restart=always -p 3306:3306 --name mysql -v /home/ubuntu/docker_config/mysql/log:/var/log/mysql -v /home/ubuntu/docker_config/mysql/data:/var/lib/mysql -v /home/ubuntu/docker_config/mysql/conf:/etc/mysql -e MYSQL_ROOT_PASSWORD=lideshan mysql:5.7
```

# mongo
```bash
sudo docker run -itd --restart=always -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=lideshan -e MONGO_INITDB_ROOT_PASSWORD=lideshan -v /home/ubuntu/docker_config/mongo/db:/data/db mongo
```

# redis
```
touch /home/ubuntu/docker_config/redis/redis.conf
sudo docker run -itd --restart=always -p 6379:6379 --name redis -v /home/ubuntu/docker_config/redis/data:/data -v /home/ubuntu/docker_config/redis/conf:/etc/redis redis redis-server /etc/redis/redis.conf
```


# 域名扫描
```
docker run -p 3000:3000 lissy93/web-check

```
[GitHub - Lissy93/web-check: 🕵️‍♂️ All-in-one OSINT tool for analysing any website](https://github.com/Lissy93/web-check)

# 自动解密
[GitHub - Ciphey/Ciphey: ⚡ Automatically decrypt encryptions without knowing the key or cipher, decode encodings, and crack hashes ⚡](https://github.com/Ciphey/Ciphey)

# bt聚合
[GitHub - Jackett/Jackett: API Support for your favorite torrent trackers](https://github.com/Jackett/Jackett)

# 生成别具一格的头像
[GitHub - TencentARC/PhotoMaker: PhotoMaker](https://github.com/TencentARC/PhotoMaker)

# i茅台预约
[提示信息 - 吾爱破解 - LCG - LSG |安卓破解|病毒分析|www.52pojie.cn](https://www.52pojie.cn/thread-1890089-1-1.html)

Mrdoc
	[官方 Docker 镜像部署 - MrDoc安装手册 - MrDoc觅思文档 - 文档站](https://doc.mrdoc.pro/doc/3958/)[]()
Onenav
```bash
	sudo docker run -itd --name="nav" -p 3000:80 -v /home/dmai/nav:/data/wwwroot/default/data helloz/onenav
```