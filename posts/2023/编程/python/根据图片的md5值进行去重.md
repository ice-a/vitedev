---
title: 根据图片的md5值进行去重
date: 2024-05-28 15:46:08
---
# 
```python
#!/usr/bin/env python3  
# -*- coding: UTF-8 -*-  
"""  
@Project ：all_daily_tasks_code @File    ：根据图片的md5值进行去重.py  
@Author  ：木子  
@Date    ：2024/5/29 上午11:12 """  
  
import hashlib  
import os  
  
  
# 读取文件获取md5  
def get_md5(file_path):  
    if not os.path.isfile(file_path):  
        return None  
    with open(file_path, 'rb') as f:  
        md5 = hashlib.md5(f.read()).hexdigest()  
    return md5  
  
  
path = r"F:\upload\others\ios\img\微博"  
md5_list = []  
for item in os.listdir(path):  
    t = os.path.join(path, item)  
    md5 = get_md5(t)  
    if md5 not in md5_list:  
        md5_list.append(md5)  
    else:  
        os.remove(t)  
        print(f"{t} 已删除")
```