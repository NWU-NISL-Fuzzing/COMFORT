# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: regex_normalizer.py
@date: 2021/3/5 16:03
@desc: 
"""

import re


def regex_normalization(key_exception: str) -> str:
    # var = '.*?'  # Matches all characters except the newline character
    var = '[\s\S]*?'  # Matches all characters (including newline characters)

    regex_map = {
        re.compile(f'^TypeError: {var} is null$'):
        "TypeError: {%1%} is null",

        re.compile(f"^TypeError: Unable to delete property '{var}' of undefined or null reference$"):
        "TypeError: Unable to delete property {%1%} of undefined or null reference",

        re.compile(f"^TypeError: Cannot delete property '{var}' of null$"):
        "TypeError: Cannot delete property {%1%} of null",

        re.compile(f"^TypeError: undefined is not an object \\(evaluating '{var}'\\)$"):
        "TypeError: undefined is not an object (evaluating {%1%})",

        re.compile(f"^TypeError: null is not an object \\(evaluating '{var}'\\)$"):
        "TypeError: null is not an object (evaluating {%1%})",

        re.compile(f"^TypeError: {var} is not an Object$"):
        "TypeError: {%1%} is not an Object",

        re.compile(f"^TypeError: {var} is undefined$"):
        "TypeError: {%1%} is undefined",

        re.compile(f"^TypeError: Unable to delete property '{var}$"):
        "TypeError: Unable to delete property '{%1%}",

        # 下面这条能过滤非常多的数据
        re.compile(f'''^TypeError: can't assign to property "{var}" on {var}: not an object$'''):
        "TypeError: can't assign to property {%1%} on {%2%}: not an object",

        re.compile(f"^TypeError: Cannot create property '{var}' on number '{var}'$"):
        "TypeError: Cannot create property {%1%} on number {%2%}",

        re.compile(f"^TypeError: Cannot create property '{var}' on string '{var}'$"):
        "TypeError: Cannot create property {%1%} on string {%2%}",

        re.compile(f"^TypeError: Unable to get property '{var}' of undefined or null reference$"):
        "TypeError: Unable to get property {%1%} of undefined or null reference",

        re.compile(f"^TypeError: Cannot delete property '{var}' of undefined$"):
        "TypeError: Cannot delete property {%1%} of undefined",

        re.compile(f"^TypeError: Cannot create property '{var}' on boolean '{var}'$"):
        "TypeError: Cannot create property {%1%} on boolean {%2%}",

        re.compile(f"^ReferenceError: {var} is not defined$"):
        "ReferenceError: {%1%} is not defined",

        re.compile(f"^ReferenceError: Can't find variable: {var}$"):
        "ReferenceError: Can't find variable: {%1%}",

        re.compile(f"^SyntaxError: Cannot use the reserved word '{var}' as a variable name in strict mode$"):
        "SyntaxError: Cannot use the reserved word {%1%} as a variable name in strict mode",

        re.compile(f"^TypeError: Cannot read property '{var}' of undefined$"):
        "TypeError: Cannot read property {%1%} of undefined",

        re.compile(f"^TypeError: Cannot read property '{var}' of null$"):
        "TypeError: Cannot read property {%1%} of null",

        re.compile(f"^ReferenceError: Property '{var}' doesn't exist$"):
        "ReferenceError: Property {%1%} doesn't exist",

        re.compile(f"^TypeError: Cannot set property '{var}' of null$"):
        "TypeError: Cannot set property {%1%} of null",

        re.compile(f"^SyntaxError: Invalid regular expression: {var}$"):
        "SyntaxError: Invalid regular expression: {%1%}",

        re.compile(f"^TypeError: Cannot set property '{var}' of undefined$"):
        "TypeError: Cannot set property {%1%} of undefined"
    }

    for pattern, result in regex_map.items():
        if re.match(pattern=pattern, string=key_exception) is not None:
            return result

    return key_exception
