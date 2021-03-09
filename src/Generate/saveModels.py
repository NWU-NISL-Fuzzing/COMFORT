# -*- coding: utf-8 -*-
"""
@Time ： 2021/2/27 9:39
@Auth ： Xing
@File ：saveModels.py
@IDE ：PyCharm
@Description：save the intermediate model during model training

"""
import os
import subprocess
import time
import datetime

# 文件复制实现
def copy_command(target_path):
    model_path = r'~/gpt2/checkpoint/model_name'
    cmd1 = ['copy', model_path, target_path]
    p1 = subprocess.Popen(cmd1, stderr=subprocess.PIPE, shell=True)
    stdout, stderr = p1.communicate()
    if stdout or stderr:
        print(stdout)
        print(stderr)


# 间隔4小时，自动保存训练模型
while True:
    save_path = r"~/gpt2/models/top2000BackUp"
    print("Start : %s" % time.ctime())
    current_time = datetime.datetime.now().strftime('%Y%m%d%H%M')
    target_path1 = os.path.join(save_path, current_time)
    copy_command(target_path1)
    time.sleep(14400)
    print("保存模型{}".format(current_time))
    print("End : %s" % time.ctime())

