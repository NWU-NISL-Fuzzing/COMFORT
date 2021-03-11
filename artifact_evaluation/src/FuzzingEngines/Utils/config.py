# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: config.py
@date: 2021/3/5 12:50
@desc: 
"""

import json
import pathlib
import argparse


def init_config(config_path: str = "/root/data/config.json"):
    if not pathlib.Path(config_path).is_file():
        raise Exception(f"Configuration file not exist: {pathlib.Path(config_path).absolute().resolve()}")
    with open(config_path, "r") as f:
        return json.load(f)


class Hparams_Evaluate:
    parser = argparse.ArgumentParser()

    parser.add_argument('--testsuite', type=str, default=r"/root/data/mutation_result", help='path to the testsuite')

    parser.add_argument('--log_save_dir', type=str, default=r"/root/data/mutation_result/log", help='path to the testsuite')

    parser.add_argument('--clear_classifier', default=False, type=bool, help='empty the classifier database')


class Hparams_Coverage:
    parser = argparse.ArgumentParser()

    parser.add_argument('--coverage_files', type=str, default=r"/root/data/mutation_result", help='path to the coverageFiles')


class Hparams_Reduce:
    parser = argparse.ArgumentParser()

    parser.add_argument('--file_path', type=str, default=r"/root/data/testcases/testcase.js", help='path to the reduce file')
