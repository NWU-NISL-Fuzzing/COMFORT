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


class Hparams_preprocessing:
    parser = argparse.ArgumentParser()

    parser.add_argument('--corpus_path', type=str, default=r"/export/nisl/qx/jsCorpusProcessing/data/corpus",
                        help='path to the corpus')

    parser.add_argument('--result_dir', type=str, default=r"/export/nisl/qx/PLDI2021/COMFORT/src/CorpusProcessing/pre_processing/result/",
                        help='logging message of preprocessing saved to here')
    parser.add_argument('--n_threads', type=int, default=8, help='CPU cores that execute code')


class Hparams_generateQualify:
    parser = argparse.ArgumentParser()

    parser.add_argument('--corpus_db', type=str, default=r"/export/nisl/qx/jsCorpusProcessing/data/corpus/corpus-20210309-FX-SF_final_result.db",
                        help='path to the corpus database')

    parser.add_argument('--jshint_db', type=str, default=r"/export/nisl/qx/jsCorpusProcessing/data/corpus/jshint_filter.db",
                        help='insert jshint filtering results to here')

    parser.add_argument('--result_dir', type=str, default=r"/export/nisl/qx/PLDI2021/COMFORT/src/CorpusProcessing/generateQualify/data/log",
                        help='output results to here')

    parser.add_argument('--n_threads', type=int, default=8, help='CPU cores that execute code')