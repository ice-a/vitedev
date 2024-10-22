---
title: pm2定时推送到git仓库及定时执行mongo备份
date: 2022-02-02
tag:
- pm2
- crontab
category:
- pm2
---
# 
## 安装pm2


### 安装node


https://nodejs.org/dist/v16.15.0/node-v16.15.0-x64.msi
一直next即可


#### 安装pm2
```
npm install -g pm2
```

#### 编写git推送py脚本
```python
import os
import time

# 获取当前时间
now_time = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())


def callback(result):
    os.system(result)


# add the file
add = "git add ."
# commit the file
commit = "git commit -m 'auto commit: {}'".format(now_time)
# push the file
push = "git push origin master"
callback(add)
callback(commit)
callback(push)
```
#### pm2执行脚本并定时推送
```
pm2 start XXX.py --restart-delay 86400000 （1天=86400000ms）
```

## mogno每天自动全备份

### 安装node、pm2
同上
### 安装mongoTools
https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.5.2.zip
设置环境变量
### 编写备份脚本
```python
import os
import time


# 获取当前日期
def get_date():
    date = time.strftime('%Y%m%d', time.localtime(time.time()))
    return date


os.system('mongodump -o F:\\db_back\\back\\{}'.format(get_date()))

```
### pm2定时执行
```
pm2 start XXX.py --restart-delay 86400000 （1天=86400000ms）
```
### pm2保存
```
pm2 save
```
