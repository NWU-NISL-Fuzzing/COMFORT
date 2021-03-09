# -*- coding: utf-8 -*-
"""
@Time ： 2021/2/27 9:31
@Auth ： Xing
@File ：gpt2_generate.py
@IDE ：PyCharm
@Description：generate testcases with gpt2 models, Multiple models can be specified to be generated sequentially

"""

import subprocess
import time

record_file = r"~/generate.txt"
model_list = ['042000', '042004', '042008', '042020', '042100', '042104', '042108', '042120']

def generateCommand(model_name):
    cmd = 'CUDA_VISIBLE_DEVICES=5 gpt_2_simple generate --run_name=~/gpt2/models' \
          'top2000BackUp/2020' + model_name + ' --folder=~/gpt2/generate/'\
          + model_name + ' --nsamples=6400 --batch_size=32 --prefix=//JavascriptTop2000Functions'
    p1 = subprocess.Popen(cmd, stderr=subprocess.PIPE, stdout=subprocess.PIPE, shell=True)
    stdout, stderr = p1.communicate()
    print(stderr)
    while True:
        if p1.poll() == 0:
            print(model_name + " finished")
            with open(record_file, 'a', encoding='utf-8') as f:
                f.write(model_name + " finished\n")
            break
    time.sleep(30)


for model_name in model_list:
    generateCommand(model_name)