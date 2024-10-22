---
title: samba
date: 2024-02-02
tag:
- samba
category:
- samba
---
#
# 安装samba
```bash
apt install samba
```

# 创建共享目录
```bash
mkdir /data
# 设置权限
chmod 777 /data
# 添加登录用户
## 创建一个用户组
groupadd dmai
# 添加用户
useradd -s /sbin/nologin -M -g dmai user1
# 设置密码
smbpasswd -a user1
```

# 设置共享文件夹
```
[caiwu]
	comment = caiwu share
	path = /data
	public = yes
	writebale =yew
```

# 配置
/etc/samba/smb.conf
```bash
log file = /data/samba_log/log.%I
        vfs object = full_audit
        full_audit:prefix = %u|%I|%m|%S
        full_audit:success = connect disconnect opendir mkdir rmdir closedir open close fchmod chown fchown chdir rename unlink pwrite write create delete
        full_audit:failure = none
        full_audit:facility = LOCAL5
        full_audit:prrority = notice
        vfs object = recycle
        recycle:repository = /data/deleted/%U
        recycle:keeptree = Yes
        recycle:versions = Yes
        recycle:maxsixe = 0
        recycle:exclude = *.tmp ,*.TMP
```

# 设置日志
/etc/rsyslog.conf
```bash
local5.* /data/log/samba/info.log
```