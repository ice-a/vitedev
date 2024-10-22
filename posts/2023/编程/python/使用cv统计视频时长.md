---
title: 使用cv统计视频时长
date: 2022-02-02
tag:
- python
- cv
- 文件
- 视频
category:
- python
---
#
```python
import cv2,os
# 统计视频
def count_video_duration(file_path):
    cap = cv2.VideoCapture(file_path)
    if cap.isOpened():  # 当成功打开视频时cap.isOpened()返回True,否则返回False
        # get方法参数按顺序对应下表（从0开始编号)
        rate = cap.get(5)  # 帧速率
        FrameNumber = cap.get(7)  # 视频文件的帧数
        duration = FrameNumber / rate
        return int(duration)
    else:
        return 0

# 递归获取视频路径进行统计时长
def count_video_duration_recursion(file_path):
    global duration_video
    if os.path.isdir(file_path):
        for file in os.listdir(file_path):
            count_video_duration_recursion(os.path.join(file_path, file))
    else:
        if file_path.endswith('.mp4') or file_path.endswith('.avi')or file_path.endswith('.3gp'):
            duration = count_video_duration(file_path)
            duration_video+=duration
            print(file_path, duration)
duration_video = 0
path = "路径"
count_video_duration_recursion(path)
print(duration_video)

```
