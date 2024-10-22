---
title: 炼丹环境torch
date: 2024-07-30
tags:
  - torch
  - cuda
  - cudnn
---
#
## 查看主机支持的cuda版本
###  控制面板
查看支持的最大版本
![控制面板.png](https://img.lideshan.top/i/2024/07/30/66a884b11a822.png)
## 下载支持的cuda版本
### 11.8这个版本比较稳定
[cuda各个版本下载](https://developer.nvidia.com/cuda-toolkit-archive)
一路默认安装即可
![cuda.png](https://img.lideshan.top/i/2024/07/30/66a884b1b92fa.png)
## 下载对应cuda版本的cudnn版本
[各个cudnn版本](https://developer.nvidia.com/cuda-toolkit-archive)
一路默认安装即可
![cudnn.png](https://img.lideshan.top/i/2024/07/30/66a884b07d849.png)
## 下载对应cuda的torch版本
[torch版本](https://pytorch.org/get-started/locally/)
```bash
pip3 install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
```
![torch.png](https://img.lideshan.top/i/2024/07/30/66a884b2d0060.png)
## 测试炼丹的环境安装是否安装成功
```python
import torch
torch.__version__
torch.cuda.is_available()
```
![torch_check.png](https://img.lideshan.top/i/2024/07/30/66a884b163dca.png)