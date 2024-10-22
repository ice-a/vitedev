---
title: 关于ubuntu服务器启动samba并创建不同用户组访问限制
date: 2024-02-02
tag:
- linux
- samba
category:
- server
---
#
## 安装samba
```bash
sudo apt update
sudo apt upgrade
sudo apt install samba -y
```
## 创建共享文件夹
```bash
cd /home/ubuntu
mkdir sharefolder
```
## 创建用户并分配不用用户组
```
# 创建用户组
groupadd person
useradd -s /sbin/nologin -M -g person user1
useradd -s /sbin/nologin -M -g person user2
# 创建管理员用户组
groupadd personadmin
useradd -s /sbin/nologin -M -g personadmin useradmin1
useradd -s /sbin/nologin -M -g personadmin useradmin2
# 设置密码
smbpasswd -a XXXX
smbpasswd -a user1
smbpasswd -a user2
smbpasswd -a useradmin1
smbpasswd -a useradmin2
```
## 修改samba配置
### 在这个位置
![](https://lideshan.cn/zb_users/upload/2022/05/202205271057358974598.png)
### 添加以下信息
```
[spider]  # 共享的名字
   comment = sambaadmin dm # 共享的简介
   path = /home/ubuntu/sharefolder   # 共享路径
   public = yes   # 是否开放
   writeable = yes   # 是否可写
   read only = no   # 是否只读
   valid users = @person, @personadmin # 允许访问的用户组,用户直接dm1,d1
   create mask = 0777 # 创建文件给予的权限
   force create mask = 0777  # 强制文件的权限
   directory mask = 0777   # 创建文件夹给予的权限
   force directory mask = 0777 # 强制文件夹的权限
   force user = ubuntu   # 强制归属于ubuntu用户
   browseable = yes   # 允许打开
   available = yes
```
## 重启samba服务
<font color=Red>注意：重启服务的时候一定要把正在操作的文件给关闭掉，不然可能会出问题</font>
```
sudo /etc/init.d/smbd restart
```

## 账号不能使用问题

```
# 删除samba账号
sudo smbpasswd -d lds
# 删除用户
sudo userdel -r lds
# 创建没有文件夹的账号
sudo useradd -s /sbin/nologin -M -g dmai lds
# 设置samba账号密码
sudo smbpasswd -a lds
```
