---
title: 生成docx文件
date: 2022-02-02
tag:
- ppt
- office
- python
category:
- python
---
#
# 脚本生成docx文件

```python
temp_code = {"x":["张三","张三","张三"],"y":["张三","张三","张三"],"z":["张三","张三","张三"]}
import json

from docx import Document
from docx.oxml.ns import qn
from docx.shared import Pt, RGBColor


def create_docx(doc_name, text_list):
    doc = Document()
    doc.styles['Normal'].font.name = u'宋体'
    doc.styles['Normal']._element.rPr.rFonts.set(qn('w:eastAsia'), u'宋体')
    doc.styles['Normal'].font.size = Pt(10.5)
    doc.styles['Normal'].font.color.rgb = RGBColor(0, 0, 0)
    for item in text_list:
        doc.add_paragraph(item)
    doc.save(doc_name)
for k, v in temp_code.items():
    _doc_name = k + ".docx"
    create_docx(_doc_name, v)
```