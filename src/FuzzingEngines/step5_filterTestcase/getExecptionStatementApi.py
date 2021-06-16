# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: getExecptionStatementApi.py
@date: 2021/3/5 16:02
@desc: 
"""
import re
import logging
from FuzzingEngines.step5_filterTestcase.getApisFromTestcase import ESAPI


def locate_exception_statement_line_number(exception_message):
    """
    When the error message is not NOT and WARNING, the line number of the error statement is extracted
    :param exception_message:
    :return:
    """
    if exception_message.__contains__("warning: ") or exception_message.__contains__("note: "):
        pattern = "(Error:)(.|\n)+?(javascriptTescase_[^:]*:)([0-9]+)"
    else:
        pattern = "(javascriptTescase_[^:]*:)([0-9]+)"
    try:
        result = re.search(pattern, exception_message)
        row = result.groups()[-1]
        return int(row)
    except Exception as e:
        pass
    pattern2 = "(Error:(.|\n)+?)(\\[)(line: )([0-9]+)+(, column: )([0-9]+)(])"
    try:
        result = re.search(pattern2, exception_message)
        row = result.groups()[-4]
        return int(row)
    except Exception as e:
        return None


def get_specified_line_api(api_nodes, line):
    """
    Gets the name of the fetch API in the specified row, or returns None if no API is obtained
    :param api_nodes:
    :param line:
    :return:
    """
    try:
        for node in api_nodes:
            if int(node["callee"]["loc"]["start"]["line"]) <= line <= int(node["callee"]["loc"]["end"]["line"]):
                return node["ESAPI"]["name"]
    except Exception as e:
        logging.debug("Failed to get API on specified line!")
    return None


def get_exception_statement_api(esapi_instance: ESAPI, testcase: str, exception_message: str, api_nodes=None):
    """
    Returns [API name, abstract syntax of all API nodes in the test case], if the exception can be extracted and the
    line number specified in the exception exists in the ES standard API, otherwise [None, None]
    """
    line_number_in_exception = locate_exception_statement_line_number(exception_message)
    # Cannot extract the number of lines where the error code resides
    if line_number_in_exception is None:
        return [None, None]
    if api_nodes is None:
        api_nodes = esapi_instance.parse_function_nodes(testcase)
    return [get_specified_line_api(api_nodes, line_number_in_exception), api_nodes]
