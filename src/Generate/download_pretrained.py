# -*- coding: utf-8 -*-
"""
@Time ： 2021/2/27 9:37
@Auth ： Xing
@File ：download_pretrained.py
@IDE ：PyCharm
@Description：download the pretrained models

"""
import gpt_2_simple as gpt2
import os
import requests

# GPT2预处理模型下载
model_name = "124M"
model_name2 = "355M"
if not os.path.isdir(os.path.join("models", model_name)):
        print(f"Downloading {model_name} model...")
        gpt2.download_gpt2(model_name=model_name)   # model is saved into current directory under /models/124M/
print("124M complete")

if not os.path.isdir(os.path.join("models", model_name2)):
        print(f"Downloading {model_name2} model...")
        gpt2.download_gpt2(model_name=model_name2)
print("355M complete")

file_name = "shakespeare.txt"
if not os.path.isfile(file_name):
        url = "https://raw.githubusercontent.com/karpathy/char-rnn/master/data/tinyshakespeare/input.txt"
        data = requests.get(url)

        with open(file_name, 'w') as f:
                f.write(data.text)
