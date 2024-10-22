---
title: 接口mock
date: 2024-08-13
---
#

# flask实现api接口
```python
from flask import Flask, jsonify, request  
from loguru import logger  
  
app = Flask(__name__)  
  
  
# 这里写识别图片的逻辑  
def ocr_image(image):  
    logger.info({"status": "识别图片"})  
    return "识别成功的结果"  
  
  
# 上传图片  
@app.route('/upload', methods=['POST'])  
def upload():  
    if request.method == 'POST':  
        f = request.files['file']  
        f.save(f.filename)  
        try:  
            result = ocr_image(f.filename)  
            return jsonify({'code': 200, 'msg': '识别成功', 'data': result})  
        except Exception as e:  
            logger.error(e)  
            return jsonify({'code': 500, 'msg': '识别失败', 'data': str(e)})  
    else:  
        return jsonify({'code': 400, 'msg': '请求方式错误'})  
  
  
if __name__ == '__main__':  
    app.run(host='0.0.0.0', port=8080, debug=True)
```