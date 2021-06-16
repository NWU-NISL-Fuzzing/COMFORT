# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: simplify.py
@date: 2021/3/5 13:11
@desc: 
"""
from FuzzingEngines.step3_executeTestcase.harness import Harness
from FuzzingEngines.step4_testcaseReducer import reduce_by_block


def Simplify(testcase, with_output_info=False):
    harness = Harness()
    harness_result = harness.run_testcase(testcase=testcase)
    simplified_testcase = reduce_by_block.simple_by_block(harness_result, with_output_info=with_output_info)
    # The test case has been minimized and cannot be further reduced.
    if simplified_testcase is None:
        return harness_result.testcase
    else:
        return simplified_testcase
