---
title: 使用opencv进行人脸检测
date: 2022-02-02
tag:
- python
- cv
- 检测
category:
- AI
---
# 
对特定图像进行识别，最关键的是要有识别对象的特征文件。OpenCV已经内置了人脸识别特征文件，我们只要使用OpenCV的CascadeClassifier类即可进行识别。
语法：
https://github.com/opencv/opencv.git  在这里可以下载特征文件，在data目录下
识别对象变量 = cv2.CascadeClassifier(特征文件)、、
识别对象
识别结果变量 = 识别对象变量.detectMultiScale(图片，参数1，参数2，。。。)
参数有：
　　1、scaleFactor:  其原理是系统会以不同的区块大小对图片进行扫描，在进行特征对比。此参数用户设置区块的改变倍数，如无特别需求，一般设置为1.1
　　2、minNeighbors  此为控制误检率参数，默认值为3
　　3、minSize  设置最小的识别区块
　　4、maxSize  设置最大的识别区块
　　5、flags  此参数设置检测模式，可取值如下：
　　　　　　cv2.CV_HAAR_SCALE_IMAGE   按比例检测
　　　　　　cv2.CV_HAAR_DO_CANNY_PRUNING  利用Canny 边缘检测器排除一些边缘很少或很多的图像区域
　　　　　　cv2.CV_HAAR_FIND_BIGGEST_OBJECT   只检测最大物体
　　　　　　cv2.CV_HAAR_DO_ROUGH_SEARCH  只做初步检测
face = faceCascade.detectMultiScale(image,scakeFactor=1.1,minSize=(10,10),minNeighbors=5,flags = cv2.CASCADE_SCALE_IMAGE)
detectMultiScale 方法可以识别多个面部，返回值是一个列表
for (x,y,w,h) in face:
x,y 表示面部区域的左上角x,y坐标；w,h表示面部区域的宽度和高度
```
import cv2
#基本绘图
import numpy
cv2.namedWindow("Image") #创建窗口
img = cv2.imread('20180703200225.jpg') #读取图像
#人脸识别
#img.shape[0] 获取图片的高度  img.shape[1] 获取图片的宽度
faceCascade = cv2.CascadeClassifier(r'./haarcascade_frontalface_default.xml')
faces = faceCascade.detectMultiScale(img,scaleFactor = 1.1,minNeighbors = 5,minSize = (10,10),flags = cv2.CASCADE_SCALE_IMAGE)
cv2.putText(img,"Find"+str(len(faces))+"faces",(10,img.shape[0]-5),cv2.FONT_HERSHEY_SIMPLEX,1,(255,232,133),2)
for (x,y,w,h) in faces:
    cv2.rectangle(img,(x,y),(x+w,y+h),(128,255,0),2)
    print(x,y,w,h)
#cv2.imshow('Image',img)
cv2.imwrite('test.jpg',img)
cv2.waitKey(0)
cv2.destroyAllWindow()
```
