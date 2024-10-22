---
title: 关于m4a文件转成wav文件
date: 2022-02-02
tag:
- ffmpeg
- python
- code
category:
- code
---
#
# m4a文件转为16bit,单声道,采样率为48kHz
```
for i in *.m4a; do ffmpeg -i "$i" -acodec pcm_s16le -ac 1 -ar 48000 "${i%}.wav"; done
-acodec pcm_s16le:16bit
-ac 1:单声道
-ar 48000:48kHZ
```
