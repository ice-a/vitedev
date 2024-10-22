---
title: 图片旋转摆正根据图片的exif信息
date: 2022-02-02
tag:
- python
- 图片
- 旋转
- exif
category:
- python
---
#
```python
from PIL import Image
import os


# 图片旋转
def image_route(in_file, out_file):
    img = Image.open(in_file)
    dict_exif = img.getexif()
    try:
        res = dict_exif[274]
        if res == 1:
            img = img.rotate(0, expand=True)
        elif res == 8:
            print("向右", in_file)
            img = img.rotate(90, expand=True)
        elif res == 6:
            print("向左", in_file)
            img = img.rotate(-90, expand=True)
        elif res == 3:
            print("翻转", in_file)
            img = img.rotate(180, expand=True)
        else:
            print(res, "不正常", in_file)
            img = img.rotate(0, expand=True)
        img.save(out_file)
    except:
        print("error:", in_file)
        img = img.rotate(0, expand=True)
        img.save(os.path.join(_save, i))


if __name__ == '__main__':
    # 要调整的路径
    path = r"文件路径"
    # 调整之后保存的路径
    _save = r"文件路径"
    for i in os.listdir(path):
        in_file = os.path.join(path, i)
        out_file = os.path.join(_save, i)
        image_route(in_file, out_file)

```