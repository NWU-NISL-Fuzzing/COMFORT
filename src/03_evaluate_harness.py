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
import pathlib

from utils.config import Hparams_Evaluate
from FuzzingEngines.step3_executeTestcase import harness, Result
from FuzzingEngines.step5_filterTestcase.classifier import Classifier
from utils.logger import logger_config


def evaluate_testcase(testcase_list, log_path, clear_classifier, interesting_saved_path):
    logger_config(prefix='step3_evaluate_harness', log_file=log_path)

    logging.info(f"Performing differential testing (approximate: 1 minute/120 test cases)...\n")

    Harness = harness.Harness()

    harness_result = None  # The execution results of all JS engines
    test_result_list = None  # A list of suspicious test results found through differential testing
    suspicious_result_list = []
    test_result_num = 0
    count = 1
    total = len(testcase_list)

    caseAndengine = []
    # Test case filter
    classify = Classifier()
    # Empting all the test cases
    if clear_classifier:
        classify.clear_recorders()
    pathlib.Path(interesting_saved_path).mkdir(parents=True, exist_ok=True)
    for test_case in testcase_list:
        progress = "\r[Differential Testing Progress] : {current}/{total} ".format(current=count, total=total)
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
            pathlib.Path(f"{interesting_saved_path}/{count - 1}.js").write_text(test_case)
            logging.info(f"Add to classify database\n")
        logging.info(f"------------------------------------------------------\n")
        for result in suspicious_result:
            suspicious_result_list.append(result)
            caseAndengine.append([f"{count - 1}.js", result.testbed])

    for interesting_test_result in suspicious_result_list:
        logging.info(interesting_test_result)

    if test_result_num == 0:
       logging.info("\n\033[1;31;48mTips: No Potential Non-Conformance Behaviors Detected, Please change test suite\033[0m")

    logging.info(f"\n------------------------------------------------------")
    logging.info(f"The number of deviated test cases that were filtered out by our filtering scheme is : {test_result_num}\n")
    logging.info(f"The number of test cases required manual analysis is:: {len(suspicious_result_list)}")
    logging.info(f"Summary of test case required manual inspect:")
    logging.info(f"=======================================")
    logging.info(f"Test cases \t JS Testbed")
    for result in caseAndengine:
        logging.info(result[0] + "\t" + result[1])
    logging.info(f"=======================================")
    logging.info(f"------------------------------------------------------")
    logging.info(f"All differential testing results are saved to " + log_path)
    logging.info(f"Check the log file for deviated execution outputs.")
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
        evaluate_testcase(testcases, result_saved_path, hparams.clear_classifier, hparams.interesting_path)
    else:
        raise ValueError('please use the -h parameter for script usage')
