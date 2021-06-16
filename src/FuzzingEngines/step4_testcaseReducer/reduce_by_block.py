# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: reduce_by_block.py
@date: 2021/3/5 13:10
@desc: 
"""
import execjs

from FuzzingEngines.step4_testcaseReducer import simplifyTestcaseCore
from FuzzingEngines.step3_executeTestcase import Result
from FuzzingEngines.step4_testcaseReducer import reduce_by_line


def buildAST(code):
    createAST = execjs.compile("""
        var esprima = require("esprima");
        function readAST(code){
            var ast = {};
            ast = esprima.parseScript(code,{ loc: true });
            return ast;
        }        
    """)
    ast = createAST.call("readAST", code)
    return ast


def delete_block(node, strcode):
    loc = node["loc"]
    index_start_line = loc["start"]["line"]
    index_end_line = loc["end"]["line"]
    code = strcode.split("\n")
    if index_end_line == index_start_line:
        code[index_start_line - 1] = ""
    elif index_end_line > index_start_line:
        for line in range(index_start_line - 1, index_end_line):
            code[line] = ""
    return "\n".join(code)


def search_inside(queue, code, node):
    for k, v in node.items():
        if k == 'type'and v == "VariableDeclaration" and node["declarations"][0]["init"]["type"] != "FunctionExpression":
            break
        elif k == 'type'and v == "VariableDeclaration" and node["declarations"][0]["init"]["type"] == "FunctionExpression":
            node = node["declarations"][0]["init"]["body"]
            search_inside(queue, code, node)
            break
        if str(type(v)) == "<class 'list'>" and k != "arguments" and k != "params":
            child_node_list = v
            if len(child_node_list) > 0:
                for childNode in child_node_list[::-1]:
                    queue.append(childNode)
        if str(type(v)) == "<class 'dict'>" and k != "loc":
            search_inside(queue, code, v)
    return queue


def traverse(queue, code, result, with_output_info=False):
    node = queue.pop(0)
    tmp_code = delete_block(node, code)
    flag = simplifyTestcaseCore.is_removable(result, tmp_code, with_output_info=with_output_info)
    # can be deleted
    if flag is True:
        return tmp_code
    # can not be deleted
    elif flag is False:
        search_inside(queue, code, node)
        return code


def simple_by_block(result: Result.HarnessResult, with_output_info=False):
    """
    Returns the test case if the simplification is successful, or None if it is not
    :param result:
    :param with_output_info: Whether or not to use output information as a judgment condition for simplification
    :return:
    """
    original_testcase = result.testcase.strip()
    simplified_testcase = original_testcase
    try:
        ast = buildAST(simplified_testcase)
    except Exception as r:
        # When the test case cannot extract the abstract syntax tree, it is streamlined in a line-of-code manner.
        # print("Failed to extract AST. ", r)
        simplified_testcase = reduce_by_line.simple_by_statement(result, with_output_info=with_output_info)
        return simplified_testcase
    else:
        queue = [ast]
        while len(queue) > 0:
            simplified_testcase = traverse(queue, simplified_testcase, result, with_output_info=with_output_info)

        # Beautify the test cases
        simplified_testcase = beautify_testcase(simplified_testcase)
        # Test cases are not simplified
        if simplified_testcase == original_testcase:
            return None
        else:
            return simplified_testcase


def beautify_testcase(testcase: str) -> str:
    # Organize simplified test cases
    beautified_testcase = str(testcase).split("\n")
    for index in range(len(beautified_testcase) - 1, -1, -1):
        if beautified_testcase[index] == '':
            beautified_testcase.pop(index)
    return "\n".join(beautified_testcase)
