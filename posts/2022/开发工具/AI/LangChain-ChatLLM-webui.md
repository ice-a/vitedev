---
title: 利用LangChain和大型语言模型系列模型, 提供基于本地知识的自动问答应用
date: 2022-02-02
tag:
- paddlepaddle
- LangChain
- python
- gpu
- 自动问答
category:
- code
- 想法
---
# 
# 安装环境

## python版本

```
conda create -n showpaddle python=3.9.17
```

![](http://img.lideshan.top/i/2023/09/11/64fe800b9b3f4.png)

## 选择paddle版本

[paddle](https://www.paddlepaddle.org.cn/install/quick?docurl=/documentation/docs/zh/develop/install/pip/windows-pip.html)

![](http://img.lideshan.top/i/2023/09/11/64fe82268d266.png)

```
# gpu
python -m pip install paddlepaddle-gpu==0.0.0.post117 -f https://www.paddlepaddle.org.cn/whl/windows/gpu/develop.html
# cpu
python -m pip install paddlepaddle==0.0.0 -f https://www.paddlepaddle.org.cn/whl/windows/cpu-mkl-avx/develop.html
```

![](http://img.lideshan.top/i/2023/09/11/64fe81ca47d0f.png)

## 验证安装

```
# 打开终端
python
import paddle
paddle.utils.run_check()
# 成功
PaddlePaddle is installed successfully!
```

![img](http://img.lideshan.top/i/2023/09/11/64fe82f48ac90.png)

# 安装paddlenlp

[paddlenlp](https://github.com/PaddlePaddle/PaddleNLP#%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)

```python-repl
# 正常版本
pip install paddlenlp
# 最新dev
pip install --pre --upgrade paddlenlp -f https://www.paddlepaddle.org.cn/whl/paddlenlp.html
```

## 测试paddlenlp模型

```python-repl
from paddlenlp import Taskflow
chatbot = Taskflow("text2text_generation",batch_size=2)
results = chatbot(['您好！','很高兴认识你'])
print(results)
```

## 拉取仓库

```
git clone https://openi.pcl.ac.cn/Learning-Develop-Union/LangChain-ChatGLM-Webui.git
```

### 切换到paddlepaddle目录

![](http://img.lideshan.top/i/2023/09/11/64feae83bbc0b.png)

## 安装一些库

```
pip install -r requirements.txt
```

## 启动

```
python app.py
```
![](http://img.lideshan.top/i/2023/09/11/64feaec916c42.png)

## 使用

打开浏览器的地址

```
http://127.0.0.1:7860/
```
![](http://img.lideshan.top/i/2023/09/11/64feb000b9109.png)
## cuda及cudnn

v11.7

[cuda](https://developer.download.nvidia.com/compute/cuda/11.7.0/local_installers/cuda_11.7.0_516.01_windows.exe)

[cudnn](https://developer.nvidia.com/downloads/compute/cudnn/secure/8.9.2/local_installers/11.x/cudnn-windows-x86_64-8.9.2.26_cuda11-archive.zip)

### 其他问题

https://blog.csdn.net/weixin_40320590/article/details/113449230

https://blog.csdn.net/weixin_59997235/article/details/131337650
