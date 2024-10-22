---
title: 解决tls指纹问题
date: 2024-08-07
category:
  - python
  - 爬虫
---
#
## 解决tls指纹问题
```python
# 检测指纹的地址  https://tls.browserleaks.com/jsonurl = "https://tls.browserleaks.com/json"  
import json  
  
  
def request_source(url):  
    """  
    {        "user_agent": "python-requests/2.32.3",        "ja3_hash": "a48c0d5f95b1ef98f560f324fd275da1",        "ja3_text": "771,4866-4867-4865-49196-49200-49195-49199-52393-52392-49188-49192-49187-49191-159-158-107-103-255,0-11-10-16-22-23-49-13-43-45-51-21,29-23-30-25-24-256-257-258-259-260,0-1-2",        "ja3n_hash": "62fcc66dfa1611e219a93df2d1bb1b24",        "ja3n_text": "771,4866-4867-4865-49196-49200-49195-49199-52393-52392-49188-49192-49187-49191-159-158-107-103-255,0-10-11-13-16-21-22-23-43-45-49-51,29-23-30-25-24-256-257-258-259-260,0-1-2",        "akamai_hash": "",        "akamai_text": ""    }    """    import requests  
    res = requests.get(url)  
    data = res.json()  
    print(json.dumps(data, ensure_ascii=False, indent=4))  
  
  
def curl_cffi_info():  
    """  
    {        "user_agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36",        "ja3_hash": "cd08e31494f9531f560d64c695473da9",        "ja3_text": "771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,0-23-65281-10-11-35-16-5-13-18-51-45-43-27-17513-21,29-23-24,0",        "ja3n_hash": "aa56c057ad164ec4fdcb7a5a283be9fc",        "ja3n_text": "771,4865-4866-4867-49195-49199-49196-49200-52393-52392-49171-49172-156-157-47-53,0-5-10-11-13-16-18-21-23-27-35-43-45-51-17513-65281,29-23-24,0",        "akamai_hash": "4f04edce68a7ecbe689edce7bf5f23f3",        "akamai_text": "1:65536;3:1000;4:6291456;6:262144|15663105|0|m,a,s,p"    }    :return:  
    """    # pip install curl_cffi  
    from curl_cffi import requests  
    # 注意这个 impersonate 参数，指定了模拟哪个浏览器  
    r = requests.get(url, impersonate="chrome120")  
    print(json.dumps(r.json(), ensure_ascii=False, indent=4))  
  
  
curl_cffi_info()
```