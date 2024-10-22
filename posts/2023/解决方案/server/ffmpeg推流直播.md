---
title: ffmpeg推流B站直播
date: 2022-02-02
tag:
- ffmpeg
- B站
- rtmp
- 直播
category:
- 搞钱
---
# 
# 安装ffmpeg
```
# ubuntu
sudo apt update
sudo apt install ffmpeg
ffmpeg -version  # 查看版本 我的是4.x
centos
yum -y install wget
wget --no-check-certificate https://www.johnvansickle.com/ffmpeg/old-releases/ffmpeg-4.0.3-64bit-static.tar.xz
tar -xJf ffmpeg-4.0.3-64bit-static.tar.xz
cd ffmpeg-4.0.3-64bit-static
mv ffmpeg /usr/bin && mv ffprobe /usr/bin && mv qt-faststart /usr/bin && mv ffmpeg-10bit /usr/bin
windows
下载ffmpeg构建好的文件
https://github.com/BtbN/FFmpeg-Builds/releases
添加环境变量路径 ffmpeg/bin
```
# B站开启直播
```
1.登录
2.个人中心
3.我的直播
4.我的直播间
5.选择直播分类
6.点击开始直播
7.复制服务器地址 rtmp://live-push.bilivideo.com/live-bvc/
8.复制串流密钥 ?streamname=xxx
9.组成一个链接之后要用 rtmp://live-push.bilivideo.com/live-bvc/?streamname=xxx
```
# ffmpeg推流
```
找到一个视频文件随便命名(尽量几个字母)我的是demo.mp4
通过ffmpeg推流示例
ffmpeg -re -stream_loop -1 -i "./demo.mp4" -c copy -f flv "rtmp://live-push.bilivideo.com/live-bvc/?streamname=xxx"
```
# 设置后台启动
```
nohup ffmpeg -re -stream_loop -1 -i "./demo.mp4" -c copy -f flv "rtmp://live-push.bilivideo.com/live-bvc/?streamname=xxx" >>/dev/null 2>&1 </dev/null &
```
# 最后
```
如果没用什么问题，打开B站直播地址就能看到推流视频
我的直播间测试地址 https://live.bilibili.com/14118989
```
# 我的直播间
[点击进入](https://live.bilibili.com/14118989)
<font color='red'>注意版权问题</font>
