---
title: 获取json中最深处的一个value
tag:
- python
category:
- code
---

```python
import json
import time
with open("../question2/用代码实现找到字典中的value.json", "r", encoding="utf-8") as f:
    data = json.load(f)


# 统计耗时
def count_running(f):
    def inner(*arg, **kwarg):
        s_time = time.time()
        res = f(*arg, **kwarg)
        e_time = time.time()
        print('耗时：{}秒'.format(e_time - s_time))
        return res

    return inner


# 递归获取
@count_running
def recursion_get_value(dict_data):
    for k, v in dict_data.items():
        if type(v) == dict:
            recursion_get_value(v)
        else:
            print("recursion_get_value:", v)


recursion_get_value(data)

```