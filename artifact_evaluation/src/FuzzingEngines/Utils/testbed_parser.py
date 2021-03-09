# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: testbed_parser.py
@date: 2021/3/5 16:12
@desc: 
"""

def get_version(testbed: str):
    path = [e for e in testbed.split(" ") if e.find("/") > -1][0]
    full_name = path.split("/")[-1]
    return full_name.replace(".jar", "")


def parse_engine_name(testbed: str):
    return get_version(testbed).split("-")[0]

