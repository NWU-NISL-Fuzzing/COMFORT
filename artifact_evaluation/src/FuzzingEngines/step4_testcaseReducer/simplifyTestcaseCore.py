# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: simplifyTestcaseCore.py
@date: 2021/3/5 13:12
@desc: 
"""

import re

from FuzzingEngines.step3_executeTestcase import Result
from FuzzingEngines.step3_executeTestcase.harness import Harness


def check_effective_with_differential_test(testcase: str, normal_outputs: list, suspicious_outputs: list, with_output_info=False):
    testbed = []
    for output in (normal_outputs + suspicious_outputs):
        testbed.append(output.testbed)
    harness = Harness()
    harness_result = harness.run_testcase(testcase)
    bug_info = Result.differential_test(harness_result)
    if len(bug_info) != len(suspicious_outputs):
        return False
    else:
        suspicious_testbeds_before = set(output.testbed for output in suspicious_outputs)
        suspicious_testbeds_after = [info.testbed for info in bug_info]
        if len(suspicious_testbeds_before.union(suspicious_testbeds_after)) > len(suspicious_testbeds_before):
            return False
    if with_output_info:
        testbed_output_dict_before = dict(
            [(output.testbed, get_key_outputs(output)) for output in (suspicious_outputs + normal_outputs)])
        for output in harness_result.outputs:
            if get_key_outputs(output) != testbed_output_dict_before.get(output.testbed):
                return False
    return True


def split_output(result: Result.HarnessResult):
    """
    Split all output into suspicious (maybe bug) and normal output
    :param result:
    :return:
    """
    # Failure to re-run the differential test here may cause a bug, because the test results read from the database
    # due to filtering are not necessarily the full results of all inconsistencies after the differential test.
    differential_result_output_ids = [info.output_id for info in Result.differential_test(result)]
    suspicious_output_ids_set = set(differential_result_output_ids)
    suspicious_output = []
    normal_output = []
    for output in result.outputs:
        if suspicious_output_ids_set.__contains__(output.id):
            suspicious_output.append(output)
        else:
            normal_output.append(output)
    return [suspicious_output, normal_output]


def is_removable(init_result: Result.HarnessResult, code: str, with_output_info=False):
    [suspicious_outputs, normal_outputs] = split_output(init_result)
    return check_effective_with_differential_test(code, normal_outputs, suspicious_outputs, with_output_info=with_output_info)


def get_key_outputs(output: Result.Output):
    """
    Return key error message or output that Lithium can recognize
    :param output:
    :return:
    """
    key_outputs = list_essential_exception_message(output.stderr + output.stdout)
    if key_outputs == "":
        key_outputs = output.stdout
    return key_outputs


def list_essential_exception_message(outputs_info: str):
    """
    If it matches the exception message, return the exception message, otherwise return ""
    """
    regex_error = "(([a-zA-Z]*Error|timeout):.*?)(\\.\\s|\\n|\\.$)"
    regex_hermes_error = "(error:.*?)(\\. |\\n|\\.$)"
    regex_note = "(note:.*?)(\\.\\s|\\n|\\.$)"
    regex_elegent = "[a-zA-Z]+Error:.*"
    pattern_error = re.compile(regex_error, re.M)
    pattern_hermes_error = re.compile(regex_hermes_error, re.M)
    pattern_note = re.compile(regex_note, re.M)
    pattern_elegent = re.compile(regex_elegent, re.M)
    matcher_error = set([e[0] for e in pattern_error.findall(outputs_info)])
    matcher_hermes_error = set([e[0] for e in pattern_hermes_error.findall(outputs_info)])
    matcher_note = set([e[0] for e in pattern_note.findall(outputs_info)])
    matcher_error_list = list(matcher_error)
    for index in range(len(matcher_error_list)):
        tmp = pattern_elegent.findall(matcher_error_list[index])
        if len(tmp) > 0:
            matcher_error_list[index] = tmp[0]
    matcher = []
    if len(matcher_error) > 0:
        matcher += matcher_error_list
    elif len(matcher_hermes_error) > 0:
        matcher += matcher_hermes_error
    elif len(matcher_note) > 0:
        matcher += matcher_note
    matcher_key_exceptions = "\n".join(matcher)
    return matcher_key_exceptions
