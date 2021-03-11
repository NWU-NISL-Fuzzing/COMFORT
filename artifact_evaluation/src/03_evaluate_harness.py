# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: 03_evaluate_harness.py
@date: 2021/3/5 12:52
@desc: exexute testcases and filter the results
"""
import logging
import os
import sys
from uuid import uuid4

from FuzzingEngines.Utils.config import Hparams_Evaluate
from FuzzingEngines.step3_executeTestcase import harness, Result
from FuzzingEngines.step5_filterTestcase.classifier import Classifier
from FuzzingEngines.Utils.logger import logger_config


def evaluate_testcase(testcase_list, log_path, clear_classifier):
    logger_config(prefix='step3_evaluate_harness', log_file=log_path)

    logging.info(f"Performing differential testing (approx 2 minutes)...\n")

    Harness = harness.Harness()

    harness_result = None  # The execution results of all JS engines
    test_result_list = None  # A list of suspicious test results found through differential testing
    suspicious_result_list = []
    test_result_num = 0
    count = 1

    # Test case filter
    classify = Classifier()
    # Empting all the test cases
    if clear_classifier:
        classify.clear_recorders()

    for test_case in testcase_list:
        progress = "\rEvaluate Testcases Processing: %d " % (count)
        sys.stdout.write(progress)
        count += 1
        # The differential testing outputs
        harness_result = Harness.run_testcase(test_case)

        # Inconsistent testing result list
        test_result_list = Result.differential_test(harness_result)

        # The test case did not trigger any suspicious behaviour, continue
        if len(test_result_list) < 1:
            continue

        test_result_num += len(test_result_list)
        logging.info(f"Inconsistent behaviour found by differential testing:")
        logging.info(f"------------------------------------------------------\n")

        for interesting_test_result in test_result_list:
            logging.info(interesting_test_result)

        logging.info(f"JS engines running results:")
        logging.info(f"------------------------------------------------------\n")
        logging.info(f"{harness_result}")

        logging.info(f"------------------------------------------------------\n")
        # step5 filterTestcase
        logging.info(f"Filtering test cases (approx. 30 seconds)...\n")
        suspicious_result = classify.filter(test_result_list, harness_result)
        if len(suspicious_result) != len(test_result_list):
            logging.info(f"Filtering successfully...\n")
        else:
            logging.info(f"Add to classify database\n")
        logging.info(f"------------------------------------------------------\n")
        for result in suspicious_result:
            suspicious_result_list.append(result)

    for interesting_test_result in suspicious_result_list:
        logging.info(interesting_test_result)

    if test_result_num == 0:
       logging.info("\n\033[1;31;48mTips: No Potential Non-Conformance Behaviors Detected, Please change test suite\033[0m")

    logging.info(f"\n------------------------------------------------------")
    logging.info(f"#Suspicious results before filtering is: {test_result_num}:\n")
    logging.info(f"#Suspicious results that need to be manually inspected after filtering is: {len(suspicious_result_list)}")
    logging.info(f"------------------------------------------------------")
    logging.info(f"#All evaluated result has been save to " + log_path)
    logging.info(f"------------------------------------------------------\n")


# collect testcases
def read_testcases(dir_path):
    testcase_list = []
    for root, dirs, files in os.walk(dir_path):
       for file in files:
            file_path = os.path.join(root, file)
            if file_path.endswith(".js"):
                with open(file_path, "r", encoding="utf-8") as f:
                    content = f.read()
                testcase_list.append(content)
    return testcase_list


if __name__ == '__main__':

    hparams = Hparams_Evaluate().parser.parse_args()

    if hparams.testsuite:
        testcases = read_testcases(hparams.testsuite)

        if not os.path.exists(hparams.log_save_dir):
            os.mkdir(hparams.log_save_dir)

        result_saved_path = os.path.join(hparams.log_save_dir, f'{uuid4()}.log')

        evaluate_testcase(testcases, result_saved_path, hparams.clear_classifier)
    else:
        raise ValueError('please use the -h parameter for script usage')
