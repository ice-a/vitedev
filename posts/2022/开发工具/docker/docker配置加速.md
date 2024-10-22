---
title: docker配置加速
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
```python
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "registry-mirrors": [
    "https://docker.hlds.fun",
    "https://registry.hub.docker.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://mirror.baidubce.com",
    "https://docker.mirrors.sjtug.sjtu.edu.cn",
    "https://docker.nju.edu.cn"
  ]
}
```