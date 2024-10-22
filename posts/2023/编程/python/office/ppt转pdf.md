---
title: ppt转pdf
date: 2022-02-02
tag:
- ppt
- office
- python
category:
- python
---
# 
```python
import win32com.client
import os
def ppt2pdf(filename, output_filename):
    """
    PPT文件导出为pdf格式
    :param filename: PPT文件的名称
    :param output_filename: 导出的pdf文件的名称
    :return:
    """
    ppt_app = win32com.client.Dispatch('PowerPoint.Application')
    # ppt_app.Visible = True  # 程序操作应用程序的过程是否可视化
    ppt = ppt_app.Presentations.Open(filename)
    # 17数字是ppt转图片，32数字是ppt转pdf
    ppt.SaveAs(output_filename, 32)
    print("导出成pdf格式成功!!!")
    # 退出PPT程序
    ppt_app.Quit()


# 要处理的目录名称
dirname = r''
filenames = os.listdir(dirname)
for filename in filenames:
    if filename.endswith('ppt') or filename.endswith('pptx'):
        base, ext = filename.split('.')
        new_name = base + '.pdf'
        filename =os.path.join(dirname,filename)
        output_filename =os.path.join(dirname,new_name)
        ppt2pdf(filename, output_filename)
```