# -*- coding: utf-8 -*-
# 
# @Version: python 3.7
# @File: regex_normalizer.py
# @Author: ty
# @E-mail: nwu_ty@163.com
# @Time: 2020/4/18
# @Description: 将提取出来的关键报错信息，经过人工总结的正则进行规范化，目的是去掉其中的具体代码内容
# @Input:
# @Output:
#

import re


def regex_normalization(key_exception: str) -> str:
    # var = '.*?'  # 匹配除了换行符以外的所有字符
    var = '[\s\S]*?'  # 这是上面那个的升级版，能匹配所有字符（包括换行符）

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
