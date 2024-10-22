---
title: opencv 画图相关
date: 2019-02-02
tag:
- opencv
- python
category:
- python
---
#
# 基本绘图
opencv 提供了绘制直线、圆形、矩形等基本绘图的功能

## 1、绘直线
cv2.line(画布,起点坐标，终点坐标，颜色，宽度)
例如：
cv2.line(image,(20,60),(300,400),(0,0,255),2)
## 2、绘矩形
cv2.rectange(画布，起点，终点，颜色，宽度)
若宽度大于0，标识边线宽度；如果小于0，表示画实心矩形
cv2.rectange(image,(20,60),(300,400),(255,0,0),-1)
## 3、绘圆形
cv2.circle(画布，圆心坐标，半径，颜色，宽度)
若宽度大于0，标识边线宽度；如果小于0，表示画实心圆行
cv2.circle(image,(300,300),40,(0,255,0),2)
## 4、绘多边形
``` python
# cv2.polylines(画布，点坐标列表，封闭，颜色，宽度)
# 点坐标列表是一个numpy类型的列表，需要导入numpy 包
import numpy
# 创建点坐标
pts = numpy.array([[20,60],[300,280],[150,200]],numpy.int32)
cv2.rectange(image,[pts],True,(0,0,255),2)
```
## 5、添加文字
cv2.putText(画布，文字，位置，字体，大小，颜色，文字粗细)
字体：
　　cv2.FONT_HERSHEY_SIMPLEX  正常尺寸的sans-serif字体
　　cv2.FONT_HERSHEY_SPLAIN   小尺寸的sans-serif字体
　　cv2.FONT_HERSHEY_COMPLEX  正常尺寸的serif字体
　　cv2.FONT_HERSHEY_SCREIPT_SIMPLEX  手写字体风格
``` python
import cv2
import numpy
cv2.namedWindow("Image") #创建窗口
img = cv2.imread('ver.jpg') #读取图像
cv2.line(img,(50,50),(300,300),(255,0,0),2) #画直线
cv2.rectangle(img,(500,20),(580,100),(0,255,0),-1)  #画矩形
cv2.circle(img,(500,300),40,(255,255,0),-1) #画圆形
pts = numpy.array([[300,300],[300,340],[350,320]],numpy.int32)  #用numpy形成坐标列表
cv2.polylines(img,[pts],True,(0,255,255),2)  #画多边形
cv2.putText(img,'测试',(350,420),cv2.FONT_HERSHEY_SIMPLEX,1,(255,232,133),2)
cv2.imshow('Image',img)
cv2.waitKey(0)
cv2.destroyWindow("Image")  #关闭窗口
```