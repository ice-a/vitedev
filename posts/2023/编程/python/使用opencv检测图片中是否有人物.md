---
title: 使用opencv检测图片中是否有人物
date: 2024-05-28 15:46:08
tags:
  - python
  - opencv
category:
  - python
  - 想法
  - code
---
#
# 使用opencv检测图片中是否有人物
```python
#!/usr/bin/env python3  
# -*- coding: UTF-8 -*-  
"""  
@Project ：all_daily_tasks_code @File    ：使用opencv检测图片中是否有人物.py  
@Author  ：木子  
@Date    ：2024/5/29 上午11:25 """  
  
import os  
import shutil  
# 解决中文路径的问题  
import sys  
  
import cv2  
  
# 获取当前文件路径  
cur_path = os.path.abspath(__file__)  
# 获取当前文件的父目录  
father_path = os.path.abspath(os.path.dirname(cur_path) + os.path.sep + ".")  
# 将父目录添加到系统路径中  
sys.path.append(father_path)  
  
  
# 使用opencv检测图片中是否有人物  
def detect_person(image_path):  
    # 读取图片  
    img = cv2.imread(image_path)  
    if img is None:  
        print(f"Error: Unable to load image at {image_path}")  
        return  # 或者适当的错误处理  
    # 转换为灰度图  
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)  
    # 加载人脸检测器  
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')  
    # 检测人脸  
    # faces = face_cascade.detectMultiScale(gray, 1.3, 5)  
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)  
    # 如果检测到人脸，则返回True，否则返回False  
    if len(faces) > 0:  
        return True  
    else:  
        return False  
  
  
# 测试  
if __name__ == '__main__':  
    _dir = r"F:\upload\others\ios\img\chat"  
    pho = r"F:\upload\others\ios\img\photo"  
    for item in os.listdir(_dir):  
        t = os.path.join(_dir, item)  
        if detect_person(t):  
            _dst = os.path.join(pho, item)  
            shutil.move(t, _dst)  
            print(f"{item} 已移动到 {_dst}")  
        else:  
            print(f"{item} 无人脸")
```