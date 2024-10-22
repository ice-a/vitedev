---
title: docker安装es及kibana
date: 2022-02-02
tag:
- elasticsearch
- kibana
category:
- code
---
# 
# 机器
```
os:ubuntu22.04-lts

```

# 安装docker
```bash
sudo apt install docker.io
# 配置docker加速
{
    "registry-mirrors": [
        "https://dockerproxy.com",
        "https://mirror.baidubce.com",
        "https://docker.m.daocloud.io",
        "https://docker.nju.edu.cn",
        "https://docker.mirrors.sjtug.sjtu.edu.cn",
        "https://registry.docker-cn.com",
        "https://mirror.ccs.tencentyun.com",
        "http://hub-mirror.c.163.com"
    ]
}
```

# 创建一个elastic的网络
```bash
docker network create elastic
```

# 拉取elastic镜像
```bash
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.17.6
```

# 创建容器
```
docker run --restart=always --name es01-test --net elastic -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -d docker.elastic.co/elasticsearch/elasticsearch:7.17.6
```

# 拉取kibana镜像
```bash
docker pull docker.elastic.co/kibana/kibana:7.17.6
```

# 创建kibana容器
```
docker run --restart=always --name kib01-test --net elastic -p 5601:5601 -e "ELASTICSEARCH_HOSTS=http://es01-test:9200" -d docker.elastic.co/kibana/kibana:7.17.6
```

# 可选配置(添加密码)
```
# 进入容器
docker exec -it es01-test /bin/bash
# 切换到config文件夹
-> cd config 
# 进行配置
-> echo xpack.security.enabled: true >> elasticsearch.yml
-> echo xpack.license.self_generated.type: basic >> elasticsearch.yml
-> echo xpack.security.transport.ssl.enabled: true >> elasticsearch.yml
-> echo xpack.security.authc.api_key.enabled: true >> elasticsearch.yml
-> exit
# 重启容器
docker restart es01-test
# 再次进入容器配置密码
docker exec -it es01-test /bin/bash
# 切换到bin目录
-> cd bin
# 开始设置密码
-> elasticsearch-setup-passwords interactive
-> 输入各个的密码,有4个密码elastic, kibana, logstash_system,beats_system
# 可选是否安装中文分词插件
-> cd ../plugin
-> elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.17.6/elasticsearch-analysis-ik-7.17.6.zip
-> exit
# 进入kibana容器
docker exec -it kib01-test /bin/bash
# 切换到config文件夹
-> cd config
# 开始配置
-> echo >> kibana.yml
-> echo elasticsearch.username: "elastic" >> kibana.yml
-> echo elasticsearch.password: "xxxx" >> kibana.yml   # xxxx是设置的密码
-> echo i18n.locale: "zh-CN" >> kibana.yml   # 设置中文,可以不选
exit
# 重启容器
docker restart kib01-test
```
