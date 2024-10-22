---
title: 使用opencv将透明背景图片转变为白色背景图片
date: 2022-02-02
tag:
- python
- cv
category:
- code
---
# 
``` python
import cv2
def alpha2white_opencv2(img):
    sp=img.shape
    width=sp[0]
    height=sp[1]
    for yh in range(height):
        for xw in range(width):
            color_d=img[xw,yh]
            if(color_d[3]==0):
                img[xw,yh]=[255,255,255,255]
    return img
```
