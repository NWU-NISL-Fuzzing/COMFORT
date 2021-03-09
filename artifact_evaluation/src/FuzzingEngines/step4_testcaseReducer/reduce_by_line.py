# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: reduce_by_line.py
@date: 2021/3/5 13:11
@desc: 
"""
from FuzzingEngines.step4_testcaseReducer import simplifyTestcaseCore
from FuzzingEngines.step3_executeTestcase import Result


def simple_by_statement(init_result: Result.HarnessResult, with_output_info=False):
    """
    The simplified test case is returned if the simplification is successful; otherwise, None is returned
    :param init_result:
    :param optimization:
    :param multi_threads:
    :param with_output_info:
    :return:
    """
    original_testcase = init_result.testcase.strip()
    testcase_last_list = original_testcase.split("\n")
    tmp_testcase_list = testcase_last_list[:]
    loop_counter = 0
    for index in range(2):
        loop_counter += 1
        for row in range(len(tmp_testcase_list)-1, -1, -1):  # 从后向前简化能够减少迭代的次数
            tmp = tmp_testcase_list[:]
            tmp.pop(row)
            removable = simplifyTestcaseCore.is_removable(init_result, "\n".join(tmp), with_output_info=with_output_info)
            if removable:
                tmp_testcase_list = tmp[:]  # Simplify successfully
        if len(testcase_last_list) == len(tmp_testcase_list):  # It can't be simplified.
            # It can't be simplified this time round, and it can't be simplified the next time.
            break
        testcase_last_list = tmp_testcase_list[:]
    reduced_testcase = "\n".join(testcase_last_list)
    if original_testcase != reduced_testcase:
        return reduced_testcase
    else:
        return None

