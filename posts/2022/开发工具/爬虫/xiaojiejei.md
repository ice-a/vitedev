---
title: xiaojiejei
date: 2024-06-06
tag:
- spider
category:
- spider
---

# 
```python
import requests
from lxml import etree
import os
import re
from urllib.parse import quote

# 请求地址转义
def url_quote(url):
    _ = url.replace("https://xiaojiejie.me","")
    __ = quote(_)
    return "https://xiaojiejie.me" + __

# 将列表中的所有元素转化为字符串
def list_to_str(lst):
    return ''.join(lst)

# 使用正则表达式替换掉标点符号
def remove_punctuation(text):
    result = re.sub(r'[^\u4e00-\u9fa5]', '', text)
    return result

headers = {
    'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
    }

# 下载单张图片(单组图)
def download_single_img(url,classify=None,name=None,index=None):
    response = requests.get(url,headers=headers)
    root = etree.HTML(response.text)
    # with open("two.html", "w",encoding='utf-8') as f:
    #     f.write(response.text)
    # 保存目录
    local_img = root.xpath('//div[@id="image_div"]//img/@src')
    # print(local_img)
    for img in local_img:
        print(img)
        if "webp" in img and "logo" not in img:
            print("ok:",img)
            _save = os.path.join(save_dir,classify,name)
            if not os.path.exists(_save):
                os.makedirs(_save)
            res = requests.get(url_quote(img))
            print(res.status_code,"write")
            with open(os.path.join(_save,str(index)+".jpg"), "wb") as f:
                f.write(res.content)
                
# 获取单页的内容
def get_single_page_content(url,classify=None):
    print(url)
    r = requests.get(url,headers=headers)
    root = etree.HTML(r.text)
    item_info = root.xpath('//ul[@id="index_ajax_list"]/li') # li
    for item in item_info:
        source_url = list_to_str(item.xpath('a/@href'))
        page_number = list_to_str(item.xpath('a/div/span/text()'))
        _name = remove_punctuation(list_to_str(item.xpath('div/a/text()')))
        try:
            download_single_img(url,classify=classify,name=_name,index="1")
        except:
            print("error:",source_url)
        for _index in range(2,int(page_number)+1):
            _url = source_url + str(_index) + "/"
            print(_url,classify)
            try:
                download_single_img(_url,classify=classify,name=_name,index=_index)
            except:
                print("error:",_url)

u = [
    {"https://xiaojiejie.me/coser/ucoser":83},   # 83
    {"https://xiaojiejie.me/life/yygirls":235},   # 235
    {"https://xiaojiejie.me/aigirls":1}    # 1
]

save_dir = "/root/info/xiao/img"
for sub in u:
    for k,v in sub.items():
        print(k,v)
        for i in range(1,v+1):
            _ = k + "/page/" + str(i) + "/"
            get_single_page_content(_,classify=k.split("/")[-1])
```