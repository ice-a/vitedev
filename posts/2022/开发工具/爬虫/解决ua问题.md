---
title: 解决ua问题
date: 2024-08-08
---
#
# 安装
```python
pip install fake-useragent
```
# 使用
```python
from fake_useragent import UserAgent
ua = UserAgent()
print(f'ie浏览器任意版本：{ua.ie}')   # 随机打印ie浏览器任意版本
print(f'火狐浏览器任意版本：{ua.firefox}')   # 随机打印firefox浏览器任意版本
print(f'谷歌浏览器任意版本：{ua.chrome}')   # 随机打印chrome浏览器任意版本
print(f'随机浏览器任意版本：{ua.random}')   # 随机打印任意厂家的浏览器
```
# 代码中使用
```python
# 爬虫程序中的具体使用
from fake_useragent import UserAgent
import requests

ua = UserAgent()
headers = {"User-Agent": ua.random}
url = "https://wwww.baidu.com"
response = requests.get(url, headers=headers)
print(response.text)
```
# scrapy
```python
# scrapy->downloadermiddlewares->useragent.py
## useragent.py
"""Set User-Agent header per spider or use a default value from settings"""
 
from scrapy import signals
 
 
class UserAgentMiddleware(object):
    """This middleware allows spiders to override the user_agent"""
 
    def __init__(self, user_agent='Scrapy'):
        self.user_agent = user_agent
 
    @classmethod
    def from_crawler(cls, crawler):
        o = cls(crawler.settings['USER_AGENT'])
        crawler.signals.connect(o.spider_opened, signal=signals.spider_opened)
        return o
 
    def spider_opened(self, spider):
        self.user_agent = getattr(spider, 'user_agent', self.user_agent)
 
    def process_request(self, request, spider):
        if self.user_agent:
            request.headers.setdefault(b'User-Agent', self.user_agent)
## middlewares.py 定义随机请求头的类
class RandomUserAgentMiddlware(object):
    '''随机更换user-agent，基本上都是固定格式和scrapy源码中useragetn.py中UserAgentMiddleware类中一致'''
    def __init__(self,crawler):
        super(RandomUserAgentMiddlware,self).__init__()
        self.ua = UserAgent()        #从配置文件settings中读取RANDOM_UA_TYPE值，默认为random，可以在settings中自定义
        self.ua_type = crawler.settings.get("RANDOM_UA_TYPE","random") 
 
    @classmethod
    def from_crawler(cls,crawler):
        return cls(crawler)
 
    def process_request(self,request,spider):#必须和内置的一致，这里必须这样写
                def get_ua():
            return getattr(self.ua,self.ua_type)
        request.headers.setdefault('User-Agent',get_ua())
## settings 配置
DOWNLOADER_MIDDLEWARES = {
   'ArticleSpider.middlewares.RandomUserAgentMiddlware': 543,           #将在middlewares.py中定义了RandomUserAgentMiddlware类添加到这里;
   'scrapy.downloadermiddlewares.useragent.UserAgentMiddleware':None,   #需要将scrapy默认的置为None不调用
}
RANDOM_UA_TYPE = "random"   #或者指定浏览器 firefox、chrome...
```
# 自己构建ua
```python
def generate_user_agent():
    # 定义操作系统
    operating_systems = [
        'Windows', 'Macintosh', 'X11', 'Linux i686', 'Linux x86_64'
    ]
    
    # 定义浏览器
    browsers = [
        ('Chrome', '58.0.3029.110'),
        ('Firefox', '54.0'),
        ('Safari', '11.0'),
        ('Opera', '44.0.2510.1254'),
        ('Edge', '15.15063')
    ]
    
    # 随机选择一个操作系统
    os = random.choice(operating_systems)
    
    # 随机选择一个浏览器及其版本
    browser, version = random.choice(browsers)
    
    # 构建UA字符串
    user_agent = f'Mozilla/5.0 ({os}) AppleWebKit/537.36 (KHTML, like Gecko) {browser}/{version} Safari/537.36'
    
    return user_agent

# 使用函数生成UA
ua = generate_user_agent()
print(ua)
```