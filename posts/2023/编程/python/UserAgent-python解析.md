---
title: UserAgent-python解析
date: 2022-02-02
tag:
- UA
category:
- python
---
# 
[用户代理](https://zh.wikipedia.org/wiki/%E7%94%A8%E6%88%B7%E4%BB%A3%E7%90%86)

## 方法一


```python
pip install ua-parser
```

解析

```
from ua_parser import user_agent_parser
import pprint
pp = pprint.PrettyPrinter(indent=4)
ua_string = 'Mozilla/5.0 (Linux; Android 6.0.1; NX531J Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044605 Mobile Safari/537.36 MMWEBID/9629 MicroMessenger/7.0.3.1400(0x27000334) Process/tools NetType/WIFI Language/zh_CN'
parsed_string = user_agent_parser.Parse(ua_string)
pp.pprint(parsed_string)
```

输出

```
{   'device': {   'brand': 'Generic_Android',
                  'family': 'NX531J',
                  'model': 'NX531J'},
    'os': {   'family': 'Android',
              'major': '6',
              'minor': '0',
              'patch': '1',
              'patch_minor': None},
    'string': 'Mozilla/5.0 (Linux; Android 6.0.1; NX531J Build/MMB29M; wv) '
              'AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 '
              'Chrome/66.0.3359.126 MQQBrowser/6.2 TBS/044605 Mobile '
              'Safari/537.36 MMWEBID/9629 '
              'MicroMessenger/7.0.3.1400(0x27000334) Process/tools '
              'NetType/WIFI Language/zh_CN',
    'user_agent': {   'family': 'Chrome Mobile WebView',
                      'major': '66',
                      'minor': '0',
                      'patch': '3359'}}
```


方法二

```python
pip install pyyaml ua-parser user-agents
```

解析

```
from user_agents import parse
# iPhone's user agent string
ua_string = 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B179 Safari/7534.48.3'
user_agent = parse(ua_string)

# Accessing user agent's browser attributes
user_agent.browser  # returns Browser(family=u'Mobile Safari', version=(5, 1), version_string='5.1')
user_agent.browser.family  # returns 'Mobile Safari'
user_agent.browser.version  # returns (5, 1)
user_agent.browser.version_string   # returns '5.1'

# Accessing user agent's operating system properties
user_agent.os  # returns OperatingSystem(family=u'iOS', version=(5, 1), version_string='5.1')
user_agent.os.family  # returns 'iOS'user_agent.os.version  # returns (5, 1)
user_agent.os.version_string  # returns '5.1'# Accessing 
user agent's device properties
user_agent.device  

# returns Device(family=u'iPhone', brand=u'Apple', model=u'iPhone')
user_agent.device.family  # returns 'iPhone'
user_agent.device.brand # returns 'Apple'
user_agent.device.model # returns 'iPhone'

#Viewing a pretty string version
str(user_agent) # returns "iPhone / iOS 5.1 / Mobile Safari 5.1"
```

## 高级功能：

```
from user_agents import parse

# Let's start from an old, non touch Blackberry device
ua_string = 'BlackBerry9700/5.0.0.862 Profile/MIDP-2.1 Configuration/CLDC-1.1 VendorID/331 UNTRUSTED/1.0 3gpp-gba'
user_agent = parse(ua_string)
user_agent.is_mobile # returns True
user_agent.is_tablet # returns False
user_agent.is_touch_capable # returns False
user_agent.is_pc # returns False
user_agent.is_bot # returns False
str(user_agent) # returns "BlackBerry 9700 / BlackBerry OS 5 / BlackBerry 9700"

# Now a Samsung Galaxy S3
ua_string = 'Mozilla/5.0 (Linux; U; Android 4.0.4; en-gb; GT-I9300 Build/IMM76D) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30'
user_agent = parse(ua_string)
user_agent.is_mobile # returns True
user_agent.is_tablet # returns False
user_agent.is_touch_capable # returns True
user_agent.is_pc # returns False
user_agent.is_bot # returns False
str(user_agent) # returns "Samsung GT-I9300 / Android 4.0.4 / Android 4.0.4"

# iPad's user agent string
ua_string = 'Mozilla/5.0(iPad; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B314 Safari/531.21.10'
user_agent = parse(ua_string)
user_agent.is_mobile # returns False
user_agent.is_tablet # returns True
user_agent.is_touch_capable # returns True
user_agent.is_pc # returns False
user_agent.is_bot # returns False
str(user_agent) # returns "iPad / iOS 3.2 / Mobile Safari 4.0.4"

# Kindle Fire's user agent string
ua_string = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.1.0-80) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true'
user_agent = parse(ua_string)
user_agent.is_mobile # returns False
user_agent.is_tablet # returns True
user_agent.is_touch_capable # returns True
user_agent.is_pc # returns False
user_agent.is_bot # returns False
str(user_agent) # returns "Kindle / Android / Amazon Silk 1.1.0-80"

# Touch capable Windows 8 device
ua_string = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Touch)'
user_agent = parse(ua_string)
user_agent.is_mobile # returns False
user_agent.is_tablet # returns False
user_agent.is_touch_capable # returns True
user_agent.is_pc # returns True
user_agent.is_bot # returns False
str(user_agent) # returns "PC / Windows 8 / IE 10"
```

