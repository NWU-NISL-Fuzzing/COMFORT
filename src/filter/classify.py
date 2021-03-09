import re
import logging
from enum import Enum
from typing import List

from utils import config
from utils import testbed_parser
from src.filter.errorinfo_classifier.errorinfo_db_operation import DataBase
from src.filter.errorinfo_classifier.errorinfo_classifier import errorinfo_classify
from src.filter import getExecptionStatementApi
from src.filter.regex_normalizer import regex_normalization
from src.testcase_mutation.getApisFromTestcase import ESAPI
from src.detection.Result import HarnessResult, DifferentialTestResult


class Classifier:
    def __init__(self, config_instance: dict = None):
        """
        初始化Classifier的参数
        :param config_instance: 配置文件的实例对象
        """
        if config_instance is None:
            config_instance = config.init_config()
        self.classify_db_path = config_instance["classify_db"]
        self.esapi_instance = ESAPI(config_instance["ESApis"])
        self.testbed_parser = testbed_parser
        self.classify_db_connection = DataBase(self.classify_db_path)

        # Hermes无法关闭的note导致的误报计数器
        self.note_false_positive_counter = 0
        # [第一类型， 第二类型, 第三类型]， 过滤前第一类和第二类的测试结果的数据总量
        self.all_differential_result_filter_types_counter = [0, 0, 0]
        # # [第一类型， 第二类型，第三类型]， 过滤后需手动分析的第一类和第二类的测试结果的总量
        self.remained_filter_types_counter = [0, 0, 0]

    def filter(self, test_result_list: List[DifferentialTestResult], harness_result: HarnessResult):
        suspicious_result = []
        for test_result in test_result_list:
            [classify_result, test_result.classify_id] = self.is_suspicious_result(test_result.output_id, harness_result)
            if classify_result is ClassificationType.SUSPICIOUS:
                suspicious_result.append(test_result)
            elif classify_result is ClassificationType.NO_EXCEPTION_INFO:
                suspicious_result.append(test_result)
        return suspicious_result

    def is_suspicious_result(self, index, harness_result: HarnessResult):
        """

        :param index: 差分测试结果不一致的id
        :param harness_result: 差分测试的结果
        :return: 若测试结果是“误报”，则返回-1，若
        """
        # [double_output_id, engine_name, key_exception_dic, api_name, 过滤类型]
        key_information = get_key_information(index, harness_result, self.testbed_parser, self.esapi_instance)
        # 过滤Hermes无法关闭的note导致的误报问题
        # if len(key_information[2]) == 1:
        if key_information[4] == FilerType.TYPE1.value:
            is_false_positive = False
            for engine, exception_info in key_information[2].items():
                if exception_info.__contains__("note: "):
                    is_false_positive = True
            if is_false_positive:
                self.note_false_positive_counter += 1
                # -1表示classify_id为
                return [ClassificationType.NOTE_FALSE_POSITIVE, 0]
        # 统计第一类型，第二类型，第三类型待过滤的数量
        self.all_differential_result_filter_types_counter[key_information[4] - 1] += 1

        # 调用分类接口：需要传入已有的数据库连接，加快效率
        [need_manual_analyse, classify_id] = errorinfo_classify(key_information, self.classify_db_connection)
        if need_manual_analyse:
            self.remained_filter_types_counter[key_information[4] - 1] += 1
            # 第三类型需单独存储，因此返回值必须与第一第二类型进行区分
            if key_information[4] == FilerType.TYPE3.value:
                return [ClassificationType.NO_EXCEPTION_INFO, classify_id]
            return [ClassificationType.SUSPICIOUS, classify_id]
        else:
            return [ClassificationType.FALSE_POSITIVE, classify_id]

    def print_statistical_results(self):
        logging.info("=======================过滤结果统计===================================")
        print("=======================过滤结果统计===================================")
        print(f"note信息的导致的误报的数量：{self.note_false_positive_counter}")
        logging.info(f"note信息的导致的误报的数量：{self.note_false_positive_counter}")
        print(f"第一类型：共 {self.all_differential_result_filter_types_counter[0]} 条，"
              f"过滤后剩余：{self.remained_filter_types_counter[0]} 条")
        logging.info(
            f"第一类型：共 {self.all_differential_result_filter_types_counter[0]} 条，"
            f"过滤后剩余：{self.remained_filter_types_counter[0]} 条")
        print(f"第二类型：共 {self.all_differential_result_filter_types_counter[1]} 条，"
              f"过滤后剩余：{self.remained_filter_types_counter[1]} 条")
        logging.info(
            f"第二类型：共 {self.all_differential_result_filter_types_counter[1]} 条，"
            f"过滤后剩余：{self.remained_filter_types_counter[1]} 条")
        print(f"第三类型：共 {self.all_differential_result_filter_types_counter[2]} 条，"
              f"过滤后剩余：{self.remained_filter_types_counter[2]} 条")
        logging.info(
            f"第三类型：共 {self.all_differential_result_filter_types_counter[2]} 条，"
            f"过滤后剩余：{self.remained_filter_types_counter[2]} 条")
        logging.info("=================================================================")
        print("=================================================================")


def list_normalized_essential_exception_message(outputs_info: str):
    """
    对匹配到的异常信息进行规范化
    """
    matcher_key_exceptions = list_essential_exception_message(outputs_info)
    # 4-18新增：对key_exceptions进行规范化处理，去除其中的代码痕迹，以优化过滤效果
    matcher_key_exceptions = regex_normalization(matcher_key_exceptions)
    return matcher_key_exceptions


def list_essential_exception_message(outputs_info: str):
    """
        若能匹配异常信息，则返回异常信息，否则返回""
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
    elif len(matcher_hermes_error) > 0:  # 只有Hermes的报错信息没有具体的错误类型
        matcher += matcher_hermes_error
    elif len(matcher_note) > 0:  # Hermes没有报错信息
        matcher += matcher_note
    matcher_key_exceptions = "\n".join(matcher)
    return matcher_key_exceptions


def get_highest_frequency(target_list: list):
    frequency_dic = {e: 0 for e in set(target_list)}
    for e in target_list:
        frequency_dic.update({e: frequency_dic.get(e) + 1})
    most_frequent_key = None
    most_frequent_value = -1
    for key, value in frequency_dic.items():
        if most_frequent_value < value:
            most_frequent_key = key
            most_frequent_value = value
    return [most_frequent_key, most_frequent_value]


def get_key_information(index, harness_result: HarnessResult, testbed_parser, esapi_instance: ESAPI):
    """
    1. key_exception_dic是以引擎名为key的字典，若能提取错误信息，value为引擎的关键报错信息，若所有引擎均没有报错信息，则value为引擎的完整输出
       返回[double_output_id, engine_name, key_exception_dic, api_name, 过滤类型]。过滤类型分为两种：第一类型是指异常结果
       存在错误信息，第二类型是指异常结果没有错误信息的, 第三类型是指所有引擎均没有报错（即不一致是由于执行结果不一致导致的）。
       其值的取值是[1,2,3]，其含义是[第一类型，第二类型，第三类型]
    """
    suspicious_output = None
    for output in harness_result.outputs:
        if output.id == index:
            suspicious_output = output
    if suspicious_output is None:
        raise Exception("Harness result does not contain special index")
    key_exception = list_normalized_essential_exception_message(suspicious_output.stderr + suspicious_output.stdout)
    key_exception_dic = {}
    double_output_id = index
    engine_name = testbed_parser.parse_engine_name(suspicious_output.testbed)
    no_exception_info_engine_counter = 0
    es_api_node_ast_in_testcase = None
    # 差分测试不一致的的结果中存在报错信息，第一类型
    if key_exception != "":
        filter_type = FilerType.TYPE1.value
        [api_name, es_api_node_ast_in_testcase] = getExecptionStatementApi.get_exception_statement_api(
            esapi_instance,
            harness_result.testcase,
            suspicious_output.stderr + suspicious_output.stdout,
            es_api_node_ast_in_testcase)
        if api_name is None:
            api_name = "NoApi"
        key_exception_dic = {engine_name: key_exception}
    # 差分测试不一致的结果中不存在报错信息，第二类型
    else:
        filter_type = FilerType.TYPE2.value
        no_exception_info_engine_counter += 1  # 差分后得到的测试结果无法提取错误信息
        api_list = []
        for output in harness_result.outputs:
            if output.id != index:
                exception_engine_name = testbed_parser.parse_engine_name(output.testbed)
                exception_info = list_normalized_essential_exception_message(output.stderr + output.stdout)
                if exception_info == "":
                    no_exception_info_engine_counter += 1
                key_exception_dic.update({exception_engine_name: exception_info})
                [api, es_api_node_ast_in_testcase] = getExecptionStatementApi.get_exception_statement_api(
                    esapi_instance,
                    harness_result.testcase,
                    output.stderr + output.stdout,
                    es_api_node_ast_in_testcase)

                api = "NoApi" if api is None else api
                api_list.append(api)
        most_frequent_api, most_frequent_count = get_highest_frequency(api_list)
        if most_frequent_count < len(api_list) * 1 / 2:
            api_name = "NoApi"
        else:
            api_name = most_frequent_api
    # 所有引擎均为报错，仅仅是输出不一致，第三类型
    if no_exception_info_engine_counter == len(harness_result.outputs):
        # return None
        filter_type = FilerType.TYPE3.value
        for output in harness_result.outputs:
            exception_engine_name = testbed_parser.parse_engine_name(output.testbed)
            output = output.stderr + output.stdout
            key_exception_dic.update({exception_engine_name: output})
        api_name = "NoApi"
    return [double_output_id, engine_name, key_exception_dic, api_name, filter_type]


class ClassificationType(Enum):
    SUSPICIOUS = "suspicious"
    FALSE_POSITIVE = "false positive"
    NO_EXCEPTION_INFO = "no exception information"
    NOTE_FALSE_POSITIVE = "hermes note false positive"


class FilerType(Enum):
    TYPE1 = 1
    TYPE2 = 2
    TYPE3 = 3
