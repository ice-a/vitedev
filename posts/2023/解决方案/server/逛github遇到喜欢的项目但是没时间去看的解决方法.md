---
title: 逛github遇到喜欢的项目但是没时间去看的解决方法
date: 2022-02-02
tag:
- github
- sync
- python
category:
- code
---
# 
# clone

逛GitHub遇到喜欢的项目但是暂时又不想看可以clone
<font color="red">方法:服务器搭建一个简单的flask dmeo，遇到喜欢的把链接发送给服务器，让服务器去下载，我们去干别的事</font>
## flask demo
```
from flask import *
import os
import uuid

from pip import main

app = Flask(__name__)


# post请求提交的数据都在json中
@app.route('/github', methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        github_url = request.form.get('url', '')
        github_name = request.form.get('name', '')
        with open("download.txt", "a") as f:
            f.write(github_url + "\t" + github_name + "\n")
        if not github_name:
            github_name = uuid.uuid1().hex
        call = "git clone {} {}".format(
            github_url,
            os.path.join("/data/github", github_name.replace(" ", "_")))
        print(call)
        os.system(call)
        return jsonify({'msg': 'ok', "status": "created", "name": github_name})
    else:
        return jsonify({'msg': 'error'})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
```
## upload code
```
import requests

headers = {
    'User-Agent': 'Apipost client Runtime/+https://www.apipost.cn/',
}

data = {
  'url': 'XXXXXX',
  'name': 'XXXXXX'
}

response = requests.post('http://XXXXX:5000/github', headers=headers, data=data)
pritn(response.text)
```