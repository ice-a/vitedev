---
title: conda的一些操作
date: 2023-01-01
tag:
- conda
category:
- python
---

# 

获取版本号
```
conda --version
conda -V
```
获取帮助
```
conda --help
conda -h
	eg：conda update --help
```
创建环境
```
conda create --name your_env_name
	eg:conda create --name your_env_name python=2.7
```
创建包含某些包的环境
```
conda create --name your_env_name numpy scipy
```

创建指定python版本下包含某些包的环境

```
conda create --name your_env_name python=3.5 numpy scipy
```

列举当前所有环境
```
conda info --envs
conda env list
```

切换到某个环境
```
conda activate your_env_name
```
退出某个环境
```
conda deactivate
```
复制某个环境
```
conda create --name new_env_name --clone old_env_name 
```
删除某个环境
```
conda remove --name your_env_name --all
```
分享环境

```
# 导出
conda env export > environment.yml
# 导入
	conda env create -f environment.yml
```

