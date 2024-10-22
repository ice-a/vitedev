---
title: es看板的一些操作
date: 2022-01-01
tag:
- elasticsearch
- kibana
category:
- code
---
# 
# 获取全部的index
```
GET _cat/indices?v
```

# 统计idex
```
GET _cat/count/car_taipingyang_info/?v
```

# 查看集群健康状态

```
GET _cat/health
```
# 查看集群健康状态 详细信息
```
GET _cat/health?v
```

# 查看节点信息及详细信息
```
GET _cat/nodes

GET _cat/nodes?v
```

# 查看es的index信息及详细信息
```
GET _cat/indices
GET _cat/indices?v
```

# 创建index及type
# post(测试OK)
```
POST /car_test_info_post/car_deatil
{
  "properties" : {
    "id" : {"type" : "long"},
    "username" : {"type" : "text"},
    "password" : {"type" : "text"},
    "age" : {"type" : "integer"}
  }
}
```

# 查询type类型
```
GET /car_test_info_post/_mapping
```

# 在type中添加数据
# put(OK)
```
PUT /car_test_info_post/car_deatil/1
{
  "id": 22,
  "username": "zhangsan",
  "password": "666",
  "age": 1
}
```
# post
```
POST /car_test_info_post/car_deatil
{
  
    "id" : 220,
    "username" :"zhangsan02" ,
    "password" : "6669999",
    "age" : 100
}
```



# 查看数据
```
GET /car_test_info_post/car_taipingyang_info
```
# 删除数据
```
DELETE /car_test_info_post/car_deatil/10
```

















sudo /etc/init.d/bt default
q30eBomiNFh









