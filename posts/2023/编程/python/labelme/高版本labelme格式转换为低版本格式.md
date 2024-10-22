---
title: 高版本labelme格式转换为低版本格式
date: 2022-02-02
tag:
- python
- labelme
category:
- code
---
#
```python
import os
import json
deatil_data=r''
save_path=""
for i in os.listdir(deatil_data):
    if not i.endswith('json'):
        continue
    temp_data=os.path.join(deatil_data,i)
    print(temp_data)
    with open(temp_data,"r",encoding='utf8')as f:
        data=json.loads(f.read())
    template_data = {
        "version": "3.16.7",
        "flags": {},
        "shapes": [],
        "lineColor": [
            0,
            255,
            0,
            128
        ],
        "fillColor": [
            255,
            0,
            0,
            128
        ],
        "imagePath": data['imagePath'],
        "imageHeight": data['imageHeight'],
        "imageWidth": data['imageWidth'],
        "imageData": data['imageData'],
    } 
    shapes=[]
    for j in data['shapes']:
        dict_point={
                "label":j['label'],
                "line_color":None,
                "fill_color":None,
                "points":j['points'],
                "shape_type":j['shape_type'],
                "flags":{}
            }

        shapes.append(dict_point)
    template_data['shapes']=shapes
    with open(temp_data,"w",encoding='utf-8')as ff:
        ff.write(json.dumps(template_data,ensure_ascii=False,indent=4))

```