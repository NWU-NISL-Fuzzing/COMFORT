# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: 03_evaluate_harness.py
@date: 2021/3/5 13:12
@desc: 
"""

import pathlib

from FuzzingEngines.step4_testcaseReducer.simplify import Simplify
from utils.config import Hparams_Reduce

hparams = Hparams_Reduce().parser.parse_args()

file_dir_str = hparams.file_dir

file_dir = pathlib.Path(file_dir_str)
file_list = list(file_dir.glob("*.js"))
# file_list = list(file_dir.rglob("*.js"))
if len(file_list) == 0:
    print(f"\nThere is no test case. Please check whether there are .js files in the directory: {file_dir_str}\n")
    import sys
    sys.exit(0)
print(f"\nReducing test cases (approx. 1 minute/test case)...\n")
index = 1
for file_path in file_list:
    testcase = file_path.read_text()
    simplified_testcase_path = pathlib.Path(str(file_path)[:-3] + "_reduced.js")
    print(f"======================================================")
    print(f"Reducing  progress: {index}/{len(file_list)}")
    print(f"Original test case: {str(file_path)}")
    print(f"Reduced test case will be stored  in: {str(simplified_testcase_path)}")
    print(f"======================================================")
    try:
        reduced_test_case = Simplify(testcase)
    except BaseException:
        simplified_testcase_path.write_text("Test case reduce faile")
        print("Test case reduce faile")
        continue
    simplified_testcase_path.write_text(reduced_test_case)
    print(f"Original test case:")
    print(f"------------------------------------------------------\n")
    print(f"{testcase}")
    print(f"------------------------------------------------------")
    print(f"Reduced test case:")
    print(f"------------------------------------------------------\n")
    print(f"{reduced_test_case}\n")
    index += 1
print(f"======================================================")
print(f"Reduced test cases stored in directory: {file_dir_str}")
print(f"======================================================")
