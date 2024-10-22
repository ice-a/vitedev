---
title: docker数据库
date: 2024-08-05
---
#
## postgresql
```
docker run -d -p 5432:5432 --name postgresql -v pgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=pass123 postgres
```
