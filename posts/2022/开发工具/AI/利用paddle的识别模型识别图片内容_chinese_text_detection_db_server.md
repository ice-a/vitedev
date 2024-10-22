---
title: 利用paddle的识别模型识别图片内容(chinese_text_detection_db_server)
date: 2022-02-02
tag:
- paddlepaddle
- asr
- python
- gpu
category:
- code
---
#

## 配置环境

```
conda create -n ocr python=3.8
pip install paddlepaddle -i https://mirror.baidu.com/pypi/simple
pip install paddlehub -i https://mirror.baidu.com/pypi/simple
```
## 两种使用方法
### 直接使用(1)

```
"""可选参数
    paths (list[str]): 图片的路径；
    images (list[numpy.ndarray]): 图片数据，ndarray.shape 为 [H, W, C]，BGR格式；
    use_gpu (bool): 是否使用 GPU；若使用GPU，请先设置CUDA_VISIBLE_DEVICES环境变量
    box_thresh (float): 检测文本框置信度的阈值；
    visualization (bool): 是否将识别结果保存为图片文件；
    output_dir (str): 图片的保存路径，默认设为 detection_result；
"""
""" return
    res (list[dict]): 识别结果的列表，列表中每一个元素为 dict，各字段为：
    data (list): 检测文本框结果，文本框在原图中的像素坐标，4*2的矩阵，依次表示文本框左上，右上，右下，左下顶点的坐标
    save_path (str): 识别结果的保存路径, 如不保存图片则save_path为''
"""
import paddlehub as hub
import cv2
image_path =""
text_detector = hub.Module(name="chinese_text_detection_db_server")
result = text_detector.detect_text(images=[cv2.imread(image_path)])
# or
# result =text_detector.detect_text(paths=[image_path])
print(result)
```

### 部署服务器(2)

```
# 终端输入
hub serving start -m chinese_text_detection_db_server
```

##### 发送请求

```
import requests
import json
import cv2
import base64

def cv2_to_base64(image):
    data = cv2.imencode('.jpg', image)[1]
    return base64.b64encode(data.tostring()).decode('utf8')

# 发送HTTP请求
data = {'images':[cv2_to_base64(cv2.imread("/PATH/TO/IMAGE"))]}
headers = {"Content-type": "application/json"}
url = "http://127.0.0.1:8866/predict/chinese_text_detection_db_server"
r = requests.post(url=url, headers=headers, data=json.dumps(data))

# 打印预测结果
print(r.json()["results"])
```

## 更多模型

<font color="block">[更多模型可在官网查看](https://www.paddlepaddle.org.cn/modelbase)</font>

