import re
import logging
from src.testcase_mutation.getApisFromTestcase import ESAPI


def locate_exception_statement_line_number(exception_message):
    """
    当报错信息不是not和warning时 ,提取报错语句所在的行号
    :param exception_message:
    :return:
    """
    if exception_message.__contains__("warning: ") or exception_message.__contains__("note: "):  # note无法关闭, warning未关闭
        pattern = "(Error:)(.|\n)+?(javascriptTescase_[^:]*:)([0-9]+)"
    else:
        pattern = "(javascriptTescase_[^:]*:)([0-9]+)"
    try:
        result = re.search(pattern, exception_message)
        row = result.groups()[-1]
        return int(row)
    except Exception as e:
        pass
    pattern2 = "(Error:(.|\n)+?)(\\[)(line: )([0-9]+)+(, column: )([0-9]+)(])"  # jerryscript 的很少一部分错误会出现此情况
    try:
        result = re.search(pattern2, exception_message)
        row = result.groups()[-4]
        return int(row)
    except Exception as e:
        return None


def get_specified_line_api(api_nodes, line):
    """
    获取指定行中获取API的名字，如获取不到API则返回None
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
    若能提取异常信息且异常信息中指定的行号中存在ES标准中的API，返回[API名字,测试用例中的所有api节点的抽象语法所]，否则返回[None, None]
    """
    line_number_in_exception = locate_exception_statement_line_number(exception_message)
    # 无法提取错误代码所在行数
    if line_number_in_exception is None:
        return [None, None]
    if api_nodes is None:
        api_nodes = esapi_instance.parse_function_nodes(testcase)
    return [get_specified_line_api(api_nodes, line_number_in_exception), api_nodes]
