# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: 03_evaluate_harness.py
@date: 2021/3/5 13:12
@desc: 
"""

# step4. Test Case Reduction

from FuzzingEngines.step4_testcaseReducer.simplify import Simplify

with open("/root/data/testcase.js", "r", encoding="utf-8") as f:
    testcase = f.read()

print("\nSimplifying test cases (approx. 2 minutes)...\n")
reduced_test_case = Simplify(testcase)
print(f"Original test case:")
print(f"------------------------------------------------------\n")
print(f"{testcase}")
print(f"\nSimplified test case:")
print(f"------------------------------------------------------\n")
print(f"{reduced_test_case}\n")
