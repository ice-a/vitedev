---
title: windows包管理器scoop
date: 2022-02-02
category:
  - windows
tag:
  - windows
  - scoop
halo:
  site: https://lideshan.top
  name: ef89d3a3-da28-4eed-924e-690183e34847
  publish: false
---
#
## 安装
```
powershell
set-executionpolicy remotesigned -scope currentuser
iwr -useb get.scoop.sh | iex
# 修改路径
$env:SCOOP='F:\App\scoop'
[Environment]::SetEnvironmentVariable('SCOOP', $env:SCOOP, 'User')
# 配置环境变量
scoop bucket known  # 查看软件商店
scoop bucket add <bucketname>  安装软甲商店

# 查找软件
scoop search <app>
# 安装软件
scoop install <app>
# 查看软件详细信息
scoop info <app>
# 查看已安装的软件
scoop list
# 卸载软件 -p删除配置文件
scoop uninstall <app>
# 更新scoop本体和软件列表
scoop update
# 更新指定app
scoop update <app>
# 更新所有已安装的软件
scoop update *
# 检查scoop的问题并给出解决问题的建议
scoop checkup
# 查看命令列表
scoop help
# 显示安装包缓存
scoop cache show
# 删除指定的应用包的缓存
scoop cache rm <app>
# 删除所有应用包的缓存
scoop cache rm *
# 安装或更新不需要缓存可以添加参数 -k 或者--no-cache
scoop install -k <app>
scoop update -k *
# 删除旧版本的软件
scoop cleanup [-k] <app>
# 删除所有软件的旧版本
scoop cleanup [-k] *
# 全局安装
scoop install sudo
sudo scoop install -g <app>
scoop list
# 开启多线程下载
scoop instll aria2
# 配置
scoop config aria2-enabled false  # 开启aria2下载
aria2-retry-wait 重试等待秒数 2
aria2-split 单任务 最大连接数 5
aria2-max-connection-per-server 单服务器最大链接数 5 16
aria2-min-split-size 最小文件分片大小 5M

# example:
scoop config aria2-split 32
scoop config aria2-max-connection-per-server 16
scoop config aria2-min-split-size 1M

# finally
# 更新 scoop 及软件包列表 
scoop update 
# 非全局安装（并禁止安装包缓存） 
scoop install -k <app> 
# 全局安装（并禁止安装包缓存） 
sudo scoop install -gk <app> 
# 卸载非全局软件（并删除配置文件） 
scoop uninstall -p <app>
#卸载全局软件（并删除配置文件） 
sudo scoop uninstall -gp <app> 
# 更新所有非全局软件（并禁止安装包缓存） 
scoop update -k * 
# 更新所有软件（并禁止安装包缓存） 
sudo scoop update -gk * 
# 删除所有旧版本非全局软件（并删除软件包缓存） 
scoop cleanup -k * 
# 删除所有旧版本软件（并删除软件包缓存） 
sudo scoop cleanup -gk * 
# 清除软件包缓存 
scoop cache rm *

```
