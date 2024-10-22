---
title: server服务器安装jupyterlab
date: 2022-02-02
tag:
- python
- jupyter
- server
category:
- dev
---
#
# 安装jupyterlab
```
pip install jupyterlab
```
# 安装ipython
```
pip install ipython
```
# 设置JupyterLab密码
```
ipython
from notebook.auth import passwd
passwd() # 输入密码
# 记录输出的结果,之后要用
'argon2:$argon2id$v=19$m=10240,t=10,p=8$SLoIJjMvYC8ICwT+rJhpxQ$AekuE8hCGRSC8qc9C6/VNuacsqlGnlLO5fSnJqk78KI'
```
# 创建JupyterLab 配置文件
```
jupyter lab --generate-config
```
# 修改配置
```
vim ~/.jupyter/jupyter_lab_config.py
# 修改以下配置
c.ServerApp.root_dir = '/home/jupyter'	# 大概在999行
c.ServerApp.allow_root = True			# 大概在698行
c.ServerApp.open_browser = False		# 大概在957行
c.ServerApp.password = 刚才记录的密码		# 大概在961行
c.ServerApp.allow_remote_access = True  # 大概在694行
c.ServerApp.ip = '*'  #监听地址			# 大概在853行
c.ServerApp.port = 8848  #端口，默认8888	# 大概在969行
```
# 安装其他包
```
pip install jupyterlab-language-pack-zh-CN # 中文
登录JupyterLab，在菜单里选择'设置' -> '语言'，选择 '中文'
pip install jupyterlab-kite # 代码补全
pip install jupyterlab-system-monitor # 性能监控
pip install jupyterlab-spellchecker # 拼写检查
pip install black isort  # 代码格式化
pip install jupyterlab-code-formatter	# 代码格式化
pip install jupyterlab-git	# git
conda install nb_conda	# 关联conda
```
# 后台启动
```
nohup jupyter-lab &
```
# 其他问题
## Jupyterlab使用plotly图片不显示解决方法
```
conda install nodejs # 需要先安装nodejs
jupyter labextension install jupyterlab-plotly@4.14.3
# 测试
import plotly.graph_objects as go
fig = go.Figure(data=go.Bar(y=[2, 3, 1]))
fig.show()
```