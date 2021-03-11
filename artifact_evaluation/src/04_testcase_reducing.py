# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: 03_evaluate_harness.py
@date: 2021/3/5 13:12
@desc: 
"""

# step4. Test Case Reduction
import os

from FuzzingEngines.step4_testcaseReducer.simplify import Simplify
from FuzzingEngines.Utils.config import Hparams_Reduce

hparams = Hparams_Reduce().parser.parse_args()

file_path = hparams.file_path

if not os.path.exists(file_path):
    print("file path not exists !!!")

with open(file_path, "r", encoding="utf-8") as f:
    testcase = f.read()

print("\nSimplifying test cases (approx. 2 minutes)...\n")
reduced_test_case = Simplify(testcase)
print(f"Original test case:")
print(f"------------------------------------------------------\n")
print(f"{testcase}")
print(f"\nSimplified test case:")
print(f"------------------------------------------------------\n")
print(f"{reduced_test_case}\n")
