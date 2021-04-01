# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: classifier.py
@date: 2021/3/5 16:02
@desc: 
"""
import re
import logging
from enum import Enum
from typing import List

from FuzzingEngines.Utils import config
from FuzzingEngines.Utils import testbed_parser
from FuzzingEngines.step5_filterTestcase.errorinfo_classifier.errorinfo_db_operation import DataBase
from FuzzingEngines.step5_filterTestcase.errorinfo_classifier.errorinfo_classifier import errorinfo_classify
from FuzzingEngines.step5_filterTestcase import getExecptionStatementApi
from FuzzingEngines.step5_filterTestcase.regex_normalizer import regex_normalization
from FuzzingEngines.step5_filterTestcase.getApisFromTestcase import ESAPI
from FuzzingEngines.step3_executeTestcase.Result import HarnessResult, DifferentialTestResult


class Classifier:
    def __init__(self, config_instance: dict = None):
        """
        Initialize the parameters
        :param config_instance: Instance object of the configuration file
        """
        if config_instance is None:
            config_instance = config.init_config()
        self.classify_db_path = config_instance["classify_db"]
        self.esapi_instance = ESAPI(config_instance["ESApis"])
        self.testbed_parser = testbed_parser
        self.classify_db_connection = DataBase(self.classify_db_path)

        # Hermes could not close the note caused a false positive counter
        self.note_false_positive_counter = 0
        # [Type 1, Type 2, Type 3], the total amount of data for the test results of Type 1 and Type 2 before filtering
        self.all_differential_result_filter_types_counter = [0, 0, 0]
        # [Type 1, Type 2, Type 3], the total number of test results for Type 1 and Type 2 that need to be manually
        # analyzed after filtering
        self.remained_filter_types_counter = [0, 0, 0]

    def clear_recorders(self):
        self.classify_db_connection.drop_all_recorders()

    def filter(self, test_result_list: List[DifferentialTestResult], harness_result: HarnessResult):
        suspicious_result = []
        for test_result in test_result_list:
            [classify_result, test_result.classify_id] = self.is_suspicious_result(test_result.output_id,
                                                                                   harness_result)
            if classify_result is ClassificationType.SUSPICIOUS:
                suspicious_result.append(test_result)
            elif classify_result is ClassificationType.NO_EXCEPTION_INFO:
                suspicious_result.append(test_result)
        return suspicious_result

    def is_suspicious_result(self, index, harness_result: HarnessResult):
        """

        :param index: ID with inconsistent differential test results
        :param harness_result: The results of the difference test
        :return: If the test result is a "false positive", -1 is returned
        """
        # [double_output_id, engine_name, key_exception_dic, api_name, 过滤类型]
        key_information = get_key_information(index, harness_result, self.testbed_parser, self.esapi_instance)
        logging.info(key_information)
        # Filtering false positives caused by notes that Hermes cannot close
        # if len(key_information[2]) == 1:
        if key_information[4] == FilerType.TYPE1.value:
            is_false_positive = False
            for engine, exception_info in key_information[2].items():
                if exception_info.__contains__("note: "):
                    is_false_positive = True
            if is_false_positive:
                self.note_false_positive_counter += 1
                return [ClassificationType.NOTE_FALSE_POSITIVE, 0]
        # Count the number of types 1, 2, and 3 to be filtered
        self.all_differential_result_filter_types_counter[key_information[4] - 1] += 1

        # Call the classification interface: need to pass in the existing database connection, speed up efficiency
        [need_manual_analyse, classify_id] = errorinfo_classify(key_information, self.classify_db_connection)
        if need_manual_analyse:
            self.remained_filter_types_counter[key_information[4] - 1] += 1
            # The third type needs to be stored separately, so the return value must be distinguished
            # from the first and second types
            if key_information[4] == FilerType.TYPE3.value:
                return [ClassificationType.NO_EXCEPTION_INFO, classify_id]
            return [ClassificationType.SUSPICIOUS, classify_id]
        else:
            return [ClassificationType.FALSE_POSITIVE, classify_id]

    def print_statistical_results(self):
        logging.info("=======================Filter result statistics===================================")
        print("=======================Filter result statistics===================================")
        print(f"The number of false positives caused by Note messages: {self.note_false_positive_counter}")
        logging.info(f"The number of false positives caused by Note messages: {self.note_false_positive_counter}")
        print(f"The first type: total: {self.all_differential_result_filter_types_counter[0]},"
              f"After filtration: {self.remained_filter_types_counter[0]}")
        logging.info(
            f"The first type: total: {self.all_differential_result_filter_types_counter[0]},"
            f"After filtration: {self.remained_filter_types_counter[0]}")
        print(f"The second type: total: {self.all_differential_result_filter_types_counter[1]},"
              f"After filtration: {self.remained_filter_types_counter[1]}")
        logging.info(
            f"The second type: total: {self.all_differential_result_filter_types_counter[1]},"
            f"After filtration: {self.remained_filter_types_counter[1]}")
        print(f"The third type: total: {self.all_differential_result_filter_types_counter[2]},"
              f"After filtration: {self.remained_filter_types_counter[2]}")
        logging.info(
            f"The third type: total: {self.all_differential_result_filter_types_counter[2]},"
            f"After filtration: {self.remained_filter_types_counter[2]}")
        logging.info("=================================================================")
        print("=================================================================")


def list_normalized_essential_exception_message(outputs_info: str):
    """
    Normalize the matched exception information
    """
    matcher_key_exceptions = list_essential_exception_message(outputs_info)
    matcher_key_exceptions = regex_normalization(matcher_key_exceptions)
    return matcher_key_exceptions


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
    1.
        Key_Exception_DIC is a dictionary with the engine name key.
        If the engine can extract the error message, value is the key error message of the engine.
        If there is no error message from all engines, value is the complete output of the engine return
        [double_output_id, engine_name, key_Exception_DIC, api_name, filter type].
    2.
        There are two types of filtering: the first type is when the exception result has an error message,
        the second type is when the exception result has no error message,
        and the third type is when all engines report no error (that is, inconsistencies are caused by inconsistent
        execution results).
        Its value is [1,2,3], which means [first type, second type, third type].
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
    #
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
    # There is no error message in the inconsistent results of the difference test, the second type
    else:
        filter_type = FilerType.TYPE2.value
        no_exception_info_engine_counter += 1
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
    # None of the engines reported an error, just inconsistent output, type 3
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
