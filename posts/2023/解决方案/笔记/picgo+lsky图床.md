---
title: picgo+lsky图床
date: 2024-08-19
---
#
# picgo+lsky图床
## 下载picgo
- https://picgo.github.io/PicGo-Doc/zh/guide/#%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85
## lsky配置
### 选择启用接口
![image.png](https://img.lideshan.top/i/2024/08/19/66c30db39dbeb.png)
### 获取token
使用接口管理工具获取token
![image.png](https://img.lideshan.top/i/2024/08/19/66c30e0838720.png)

```python
import requests
import json
url = "https://xxx/tokens"
payload = json.dumps({
   "email": "",
   "password": ""
})
headers = {
   'Accept': 'Accept:application/json',
   'User-Agent': 'Apifox/1.0.0 (https://apifox.com)',
   'Content-Type': 'application/json'
}
response = requests.request("POST", url, headers=headers, data=payload)
print(response.text)
```
### 配置picgo
![image.png](https://img.lideshan.top/i/2024/08/19/66c30e5f7200d.png)
### 填入参数
![image.png](https://img.lideshan.top/i/2024/08/19/66c30e84c0cc0.png)
### obsibian安装插件即可
![image.png](https://img.lideshan.top/i/2024/08/19/66c30eb2d7857.png)
![image.png](https://img.lideshan.top/i/2024/08/19/66c30ec4d6cf7.png)
