---
title: 利用paddle的声学模型合成tts声音
date: 2022-02-02
tag:
- paddlepaddle
- python
- tts
category:
- AI
---
# 

```python
"""
conda create -n audio python=3.7
conda activate audio
conda install -y -c conda-forge sox libsndfile bzip2
pip install pytest-runner -i https://pypi.tuna.tsinghua.edu.cn/simple
pip install paddlepaddle -i https://mirror.baidu.com/pypi/simple
pip install paddlespeech -i https://pypi.tuna.tsinghua.edu.cn/simple
"""

import paddle
from paddlespeech.cli import TTSExecutor

tts_executor = TTSExecutor()
wav_file = tts_executor(
    text='今天天气挺好的',
    output='output.wav',
    am='fastspeech2_csmsc',
    am_config=None,
    am_ckpt=None,
    am_stat=None,
    spk_id=0,
    phones_dict=None,
    tones_dict=None,
    speaker_dict=None,
    voc='pwgan_csmsc',
    voc_config=None,
    voc_ckpt=None,
    voc_stat=None,
    lang='zh',
    device=paddle.get_device())
print('Wave file has been generated: {}'.format(wav_file))

```
