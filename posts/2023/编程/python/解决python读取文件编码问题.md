---
title: 解决python读取文件编码问题
date: 2022-02-02
tag:
- python
category:
- code
---
#
```
import chardet


# 获取文件编码
def get_file_encode(file_path):
    with open(file_path, 'rb') as f:
        return chardet.detect(f.read())['encoding']

```