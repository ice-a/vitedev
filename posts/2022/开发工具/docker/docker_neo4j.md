---
title: 简单搭建neo4j环境
date: 2022-02-02
tag:
- neo4j
- docker
category:
- docker 
---
#
# neo4j

## dockerfile.yaml
```
# docker-compose.yaml
version: "3"
services:
  neo4j:
    image: neo4j
    volumes:

      - ./db/neo4j/conf:/var/lib/neo4j/conf:rw
      - ./db/neo4j/mnt:/var/lib/neo4j/import:rw
      - ./db/neo4j/plugins:/plugins:rw
      - ./db/neo4j/data:/data:rw
      - ./db/neo4j/logs:/var/lib/neo4j/logs:rw

    restart: always
    ports:

      - 7474:7474
      - 7687:7687

    environment:

      - NEO4J_dbms_memory_heap_maxSize=4G
      - NEO4J_AUTH=neo4j/123456 #修改默认用户密码

```
## docker 
```
docker run --publish=7474:7474 --publish=7687:7687 --name neo4j -d neo4j
```
