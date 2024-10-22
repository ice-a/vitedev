---
title: 对比两个txt获取共同的字
date: 2022-02-02
tag:
- python
category:
- python
id: 35
alias: 35
---
#
```python
import chardet


# 获取文件编码
def get_file_encode(file_path):
    """
    获取文件编码
    :param file_path: 文件路径
    :return: 文件编码
    """
    with open(file_path, 'rb') as f:
        return chardet.detect(f.read())['encoding']


# 获取文件内容
def get_file_content(file_path):
    """
    获取文件内容
    :param file_path: 文件路径
    :return: 文件内容
    """
    # 临时存储列表
    list_data = []
    with open(file_path, 'r', encoding=get_file_encode(file_path)) as f:
        for line in f.readlines():
            for word in line.replace("\n", ''):
                if word not in list_data:
                    list_data.append(word)
    return list_data


# 对比两个列表找到相同的值
def compare_list(list_1, list_2):
    """
    对比两个列表找到相同的值
    :param list_1: 列表1
    :param list_2: 列表2
    :return: 相同的值
    """
    list_3 = []
    for i in list_1:
        if i in list_2:
            list_3.append(i)
    return list_3


# 将列表数据写入到结果中
def write_result(list_data, save_result):
    """
    将列表数据写入到结果中
    :param list_data: 对比的列表文件
    :param save_result:保存结果
    """
    for word in list_data:
        with open(save_result, 'a', encoding='utf-8') as f:
            f.write(word + "\n")


txt1 = "../question1/随机汉字_1.txt"
txt2 = "../question1/随机汉字_2.txt"
save_txt = "../question1/结果.txt"

list_1 = get_file_content(txt1)
list_2 = get_file_content(txt2)
list_3 = compare_list(list_1, list_2)
write_result(list_3, save_txt)
```