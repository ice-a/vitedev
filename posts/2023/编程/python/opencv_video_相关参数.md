---
title: opencv video 相关参数
date: 2019-02-02
tag:
- cv
- python
category:
- python
---
#
```
    cv2.VideoCapture.get(0) 视频文件的当前位置（播放）以毫秒为单位
    cv2.VideoCapture.get(1) 基于以0开始的被捕获或解码的帧索引
    cv2.VideoCapture.get(2) 视频文件的相对位置（播放）：0=电影开始，1=影片的结尾。
    cv2.VideoCapture.get(3) 在视频流的帧的宽度
    cv2.VideoCapture.get(4) 在视频流的帧的高度
    cv2.VideoCapture.get(5) 帧速率
    cv2.VideoCapture.get(6) 编解码的4字-字符代码
    cv2.VideoCapture.get(7) 视频文件中的帧数
    cv2.VideoCapture.get(8) 返回对象的格式
    cv2.VideoCapture.get(9) 返回后端特定的值，该值指示当前捕获模式
    cv2.VideoCapture.get(10) 图像的亮度(仅适用于照相机)
    cv2.VideoCapture.get(11) 图像的对比度(仅适用于照相机)
    cv2.VideoCapture.get(12) 图像的饱和度(仅适用于照相机)
    cv2.VideoCapture.get(13) 色调图像(仅适用于照相机)
    cv2.VideoCapture.get(14) 图像增益(仅适用于照相机)（Gain在摄影中表示白平衡提升）
    cv2.VideoCapture.get(15) 曝光(仅适用于照相机)
    cv2.VideoCapture.get(16) 指示是否应将图像转换为RGB布尔标志
    cv2.VideoCapture.get(17) × 暂时不支持
    cv2.VideoCapture.get(18) 立体摄像机的矫正标注（目前只有DC1394 v.2.x后端支持这个功能
```
原文链接：https://blog.csdn.net/u011436429/article/details/80604590