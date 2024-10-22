---
title: matplotlib无法显示中文解决方法
date: 2023-06-06
tag:
- matplotlib
- pyhton
category:
- python
---
# 
``` python
import os
# import matplotlib.pyplot as plt
from matplotlib import pyplot as plt
import matplotlib as mpl
from matplotlib.font_manager import FontProperties
#from pylab import mpl
 
#mpl.rcParams[u'font.sans-serif'] =  ['simabs']  # 指定默认字体
#mpl.rcParams['axes.unicode_minus'] = False  # 解决保存图像是负号'-'显示为方块的问题
font=FontProperties(fname=r'/data/env_env/python/lib/python3.8/site-packages/matplotlib/mpl-data/fonts/ttf/simabs.ttf')
def create_image(save_path, text):
    fig = plt.figure(figsize=(10, 1.25))
    fig.text(0.5, 0.5, u'{}'.format(text),
             horizontalalignment='center', verticalalignment='center', fontsize=15,fontproperties=font)
    plt.savefig(save_path)
    plt.close()
```
