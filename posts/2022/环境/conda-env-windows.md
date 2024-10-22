---
title: conda-env-windows
date: 2023-01-01
tags:
  - env
category:
  - env
---

# 

# 下载合适的版本
windows下载的这个: [Fetching Title#7xfh](https://github.com/conda-forge/miniforge/releases/download/24.3.0-0/Mambaforge-Windows-x86_64.exe)

安装基本上都是下一步下一步
![image.png](http://doc.lideshan.top/media/202404/2024-04-19_105943_0449180.6529552683452639.png)
如果需要修改路径的话可以才怪 但是不建议修改
![image.png](http://doc.lideshan.top/media/202404/2024-04-19_110019_9517160.8501674807769156.png)
全部勾选

```bash
conda activate  # 进入到基础环境
conda deactivate # 退出当前环境
conda create -n py310 python=3.10 # 创建一个python版本是3.10的环境
conda env list # 查看已经装的环境有哪些
conda activate py310 # 切换到创建的名字为py310的环境中
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple  # 配置清华加速镜像源
```

```
```
![image.png](http://doc.lideshan.top/media/202404/2024-04-19_110445_6630140.3085799491710386.png)
![image.png](http://doc.lideshan.top/media/202404/2024-04-19_110459_5390400.529924304301725.png)
![image.png](http://doc.lideshan.top/media/202404/2024-04-19_110706_4599130.346389156115829.png)
