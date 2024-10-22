---
title: 本地windwos挂载server服务器硬盘更方便的进行开发
date: 2022-10-16 19:42:53
tag:
- windows
category:
- windows
---
#
# 本地windwos挂载server服务器硬盘更方便的进行开发

## 方案为winfsp+sshfs-win

### 下载文件
- winfsp
 - https://github.com/winfsp/sshfs-win/releases/download/v3.7.21011/sshfs-win-3.7.21011-x64.msi
- sshs-win
 - https://github.com/winfsp/winfsp/releases/download/v1.11B3/winfsp-1.11.22151.msi
- sshfs-win manager
 - https://github.com/evsar3/sshfs-win-manager/releases/download/v1.3.1/sshfs-win-manager-setup-v1.3.1.exe

<font color='red'>github无法下载可以通过下面连接下载</font>
共享地址:http://pan.lideshan.cn/index.php?share/folder&user=1&sid=uxVey9ja  提取密码:Apzpy
### 安装

```
默认一路安装即可
```

### 挂载

1.打开软件sshfs-win Manager
![](https://lideshan.cn/zb_users/upload/2022/06/202206061742317225922.png)
2.点击add Connection
![](https://lideshan.cn/zb_users/upload/2022/06/202206061743128399420.png)
3.填写信息并点击save
![](https://lideshan.cn/zb_users/upload/2022/06/202206061745299845453.png)
4.长期使用可以点击设置开启并点击保存
![](https://lideshan.cn/zb_users/upload/2022/06/202206061746464121661.png)
![](https://lideshan.cn/zb_users/upload/2022/06/202206061747151781792.png)
5.点击连接
![](https://lideshan.cn/zb_users/upload/2022/06/202206061748463023086.png)
6.稍等一下即可连接成功
![](https://lideshan.cn/zb_users/upload/2022/06/202206061749155265333.png)
![](https://lideshan.cn/zb_users/upload/2022/06/202206061749533592832.png)

