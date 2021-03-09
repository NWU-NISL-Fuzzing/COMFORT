# -*- coding: utf-8 -*-
# 
# @Version: python 3.7
# @File: misinfo_Filting.py
# @Author: ty
# @E-mail: nwu_ty@163.com
# @Time: 2020/4/13
# @Description: 
# @Input:
# @Output:
#

import pathlib
from tqdm import tqdm

from tools.simplifyDifferentialTestResult.classify_old_db import RecordReader
from tools.parseTestbed import TestbedParser
from tools.simplifyDifferentialTestResult.classify_old_db import list_essential_exception_message
from tools.simplifyDifferentialTestResult.doubtfulTestcase_db_operation import DataBase, DoubtfulTestcase


def filtering_rules(engine_name: str, key_exception: str) -> bool:
    flag = True
    # 过滤条件1：过滤掉hermes引擎中，关键信息只有note:xxx类的数据
    if engine_name.strip().lower() == 'hermes' and key_exception.strip().startswith('note:'):
        flag = False

    # 其他过滤条件以后逐渐完善...

    return flag


if __name__ == '__main__':

    # harness_db_path = r"F:\Download\BaiduNetdiskDownload\harness_test_result\method_9_k_2_100W_beautified_42W-first-time.db"
    harness_db_path = r"C:\ACG相关\分析结果+测试结果\method_9_k_2_100W_beautified_42W-first-time.db"
    engines_config_path = "../../resource/enginesName.json"
    differential_table_name = 'differentialTestResult'
    result_table_name = 'result'

    # 读result.db中的differentialTestResult表，获取到所有不一致结果的索引号
    harness_result_reader = RecordReader(harness_db_path, differential_table_name)
    differential_indexes = harness_result_reader.get_all_indexes()

    # 遍历每个不一致结果，按照某些人工条件过滤，只拿其中所有可疑用例的索引
    harness_result_reader = RecordReader(harness_db_path, result_table_name)
    testbed_parser = TestbedParser(pathlib.Path(engines_config_path))
    database = DataBase(harness_db_path)

    for idx in tqdm(differential_indexes):
        # 获取关键异常信息
        record = harness_result_reader.get_exception(idx)
        key_exception = list_essential_exception_message(record)

        # 获取引擎名称
        engine_column_idx = 2
        engine_name = testbed_parser.parse_engine_name(record[engine_column_idx])

        # 按规则过滤，返回True则视为通过
        # 将通过的可疑用例及其相关信息，重新写入数据库，建立新表
        if filtering_rules(engine_name, key_exception):
            doubtful_testcase = DoubtfulTestcase(id=idx, engine_name=engine_name, key_exception=key_exception)
            database.add(doubtful_testcase)
