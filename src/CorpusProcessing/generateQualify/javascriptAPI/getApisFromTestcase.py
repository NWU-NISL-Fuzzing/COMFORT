import execjs
import tempfile
import pathlib
import platform
import subprocess
import os
import re
import copy
import collections
import logging

Callee = collections.namedtuple('Callee', [  # 类似于一个类Majority，这个类有四个属性
    'callee_object', 'callee_method', 'callee_object_type'
])


def get_function_nodes_from_testcase(testcase):
    with tempfile.NamedTemporaryFile(prefix="javascriptTescase_", suffix=".js", delete=False) as f:
        f.close()
        testcase_path = f.name
        try:
            with open(testcase_path, "w") as file:
                # Avoid that the last line of code cannot be executed
                file.write(testcase + "\n")
        except Exception:
            pass

    # ToDo: 解析语法树时部分出现错误 “ Unexpected token ( “。
    getFunctionNodes = execjs.compile("""
        let estraverse = require('../node_modules/estraverse');
        let esprima = require('../node_modules/esprima');
        let fs = require("fs");

        function analyzeCode(filename) {  
            var code = fs.readFileSync(filename).toString();
            var ast = esprima.parseScript(code, {loc: true});

            var nodes = [];
            estraverse.traverse(ast, {  
                enter: function (node) { 
                    // Array.prototype.toString() or Math.abs()
                    if (node.type == "CallExpression" && node.callee.type === "MemberExpression" && node.callee.property.type === 'Identifier') { 
                        nodes[nodes.length] = node;
                    
                    }
                    // new Array()
                    else if (node.type == "NewExpression" && node.callee.type === "Identifier"){
                        nodes[nodes.length] = node;
                    } 
                    // parseInt(), Object(), print()
                    else if (node.type == "CallExpression" && node.callee.type === "Identifier"){
                        nodes[nodes.length] = node;
                    }
                }   
            }); 
            return nodes	
        }        
    """)
    nodes = getFunctionNodes.call("analyzeCode", testcase_path)
    os.remove(testcase_path)
    return nodes


def run_testcase(testbed: pathlib.Path, testcase: str):
    result = ""
    if platform.system() == "Windows":
        with tempfile.NamedTemporaryFile(prefix="javascriptTescase_", suffix=".js", delete=False) as f:
            f.close()
            testcase_path = f.name
            try:
                pathlib.Path(testcase_path).write_bytes(bytes(testcase, encoding="utf-8"))
                cmd = []
                for ob in testbed.split():
                    cmd.append(ob)
                cmd.append(testcase_path)
                pro = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                       stderr=subprocess.PIPE, universal_newlines=True)
                # 若程序10秒执行不完就python就抛出异常
                stdout, stderr = pro.communicate(timeout=10)
                result += stdout if stdout else ""
                result += stderr if stderr else ""
            except subprocess.TimeoutExpired:
                pro.kill()
                logging.info("Timeout: JavaScript testcase execution took more than 60 seconds.")
            except Exception as e:
                pro.kill()
                logging.warning(e)
            os.remove(testcase_path)
            return result
    elif platform.system() == "Linux":
        with tempfile.NamedTemporaryFile(prefix="javascriptTescase_", suffix=".js", delete=True) as f:
            testcase_path = pathlib.Path(f.name)
            pathlib.Path(testcase_path).write_bytes(bytes(testcase, encoding="utf-8"))
            cmd = ["timeout", "-s9", "10"]
            for ob in testbed.split():
                cmd.append(ob)
            cmd.append(testcase_path)
            pro = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                                   stderr=subprocess.PIPE, universal_newlines=True)
            stdout, stderr = pro.communicate()
            result += stdout if stdout else ""
            result += stderr if stderr else ""
            return result
    else:
        raise Exception(f"Not support the operating systems： {platform.system()}")


class ESAPI:
    def __init__(self, config, testbed="node"):
        self.testbed = testbed  # 用于判断类型的被调对象的类型
        self.constructorAPIS = self.initial_es_apis(config["constructor"])
        self.functionAPIS = self.initial_es_apis(config["function"]) + self.constructorAPIS
        self.classMethodAPIs = self.initial_es_apis(config["classMethod"])
        self.prototypeMethodAPIs = self.initial_es_apis(config["prototypeMethod"])
        self.constructors_in_testcases = []
        self.functions_in_testcases = []
        self.class_methods_in_testcases = []
        self.prototype_methods_in_testcases = []

    def get_es_apis_in_testcases(self):
        return self.constructors_in_testcases + self.functions_in_testcases + self.class_methods_in_testcases + \
               self.prototype_methods_in_testcases

    def is_class_method_or_instance_method(self, callee: Callee) -> bool:
        class_method = self.is_class_method(callee)
        if class_method[0] is True:
            return class_method
        return self.is_instance_method(callee)

    def is_class_method(self, callee: Callee) -> list:
        for method in self.classMethodAPIs:
            if method == callee.callee_object + "." + callee.callee_method:
                return [True, method, "classMethod"]
        return [False, None, None]

    def is_instance_method(self, callee: Callee) -> bool:
        method_in_testcase = callee.callee_object_type + ".prototype." + callee.callee_method
        if ["Function.prototype.apply", "Function.prototype.call"].__contains__(method_in_testcase) and \
                self.prototypeMethodAPIs.__contains__(callee.callee_object):
            return [True, callee.callee_object + "." + callee.callee_method, "prototypeMethod"]
        if self.prototypeMethodAPIs.__contains__(method_in_testcase):
            return [True, method_in_testcase, "prototypeMethod"]
        if callee.callee_object == "GeneratorFunction":
            return [True, "Generator.prototype." + callee.callee_method, "prototypeMethod"]
        if ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array",
            "Float32Array", "Float64Array"].__contains__(callee.callee_object):
            return [True, "%TypedArray.prototype%." + callee.callee_method, "prototypeMethod"]
        return [False, None, None]

    def is_constructor_function(self, candidate_api_name: str) -> bool:
        if self.constructorAPIS.__contains__(candidate_api_name):
            return True
        return False

    def is_function(self, candidate_api_name: str) -> bool:
        if self.functionAPIS.__contains__(candidate_api_name):
            return True
        return False

    def parse_function_nodes(self, testcase_code: str):
        """
        获取测试用例中包含ECMAScript-262（ES） API函数的抽象语法树节点信息，并在原抽象语法数节点的基础上增加属性fullMethodMame，
        用于保存此节点在ECMAScript-262中对应的API函数名
        :param testcase: 传入需要分析ES API的测试用例
        :return: 返回抽象语法树节点的畸异节点的集合
        """
        es_api_nodes = []
        try:
            nodes = get_function_nodes_from_testcase(testcase_code)
        except Exception as e:
            logging.warning(e)
            return es_api_nodes
        # with open(testcase_path, "r") as f:
        # 	testcase = f.read().split("\n")
        testcase = testcase_code.split("\n")
        for node in nodes:
            # Constructor candidate, such as new Array()
            if node["type"] == "NewExpression" and node["callee"]["type"] == "Identifier":
                constructor_name = node["callee"]["name"]
                if self.is_constructor_function(constructor_name):
                    self.constructors_in_testcases.append(constructor_name)
                    node["ESAPI"] = {"type": "constructor", "name": constructor_name}
                    es_api_nodes.append(node)
                    continue
            # Function candidate, such as "parseInt"
            elif node["type"] == "CallExpression" and node["callee"]["type"] == "Identifier":
                function_name = node["callee"]["name"]
                if self.is_function(function_name):
                    self.functions_in_testcases.append(function_name)
                    node["ESAPI"] = {"type": "function", "name": function_name}
                    es_api_nodes.append(node)
                    continue
            # Prototype method and class method candidate, such Number.prototype.toFix(), Math.abs()
            if node["type"] == "CallExpression" and node["callee"]["type"] == "MemberExpression" and node["callee"]["property"]["type"] == 'Identifier':
                object_loc = node["callee"]["object"]["loc"]
                # 抽象语法树中的行数是从1开始的,不是从0开始的
                start_index = int(object_loc["start"]["line"]) - 1
                callee_object = self.get_callee_object(testcase, object_loc)
                method = node["callee"]["property"]["name"]
                type_reference_statement = f"console.log('The type of the callee object is: ' + Object.prototype.toString.call(({callee_object})))"
                pattern = r"(The type of the callee object is: \[object )(.*)(\]\n)"
                tmp_testcase = copy.deepcopy(testcase)
                tmp_testcase.insert(start_index, type_reference_statement)
                output = run_testcase(self.testbed, "\n".join(tmp_testcase))
                # 由于windows上没有timeout程序执行超时无法获取输出信息，丢弃执行超时的测试用例
                if platform.system() == "Windows" and output == "":
                    break
                search_result = re.search(pattern, output)
                if search_result is None:
                    continue
                callee_object_type = search_result.group(2)
                [is_es_api, full_method_name, api_type] = self.is_class_method_or_instance_method(Callee(callee_object, method, callee_object_type))
                if is_es_api:
                    if api_type == "prototypeMethod":
                        self.prototype_methods_in_testcases.append(full_method_name)
                    else:
                        self.class_methods_in_testcases.append(full_method_name)
                    node["ESAPI"] = {"type": api_type, "name": full_method_name}
                    es_api_nodes.append(node)
        return es_api_nodes

    def get_callee_object(self, testcase, object_loc):
        """
        :param testcase: 此处的testcase是js代码以'\n'为分割符将其拆分后的数组
        :param object_loc: callee_object对应的位置
        :return: 返回callee_object对应的字符串
        """
        # 抽象语法树中的行号不是从零开始的
        start_line = int(object_loc["start"]["line"]) - 1
        end_line = int(object_loc["end"]["line"]) - 1
        start_column = int(object_loc["start"]["column"])
        end_column = int(object_loc["end"]["column"])
        if start_line != end_line:
            callee_object = [testcase[start_line][start_column:]]
            callee_object += testcase[start_line + 1: end_line]
            callee_object += [testcase[end_line][:end_column]]
            return "\n".join(callee_object)
        callee_object = testcase[start_line][start_column: end_column]
        return callee_object

    def initial_es_apis(self, filePath: pathlib.Path) -> list:
        with open(filePath) as f:
            apis = f.read().strip().split("\n")
        return [API.replace("()", "") for API in apis]

    def count_es_apis_in_testcase(self, nodes):
        es_apis = {"constructor": 0, "function": 0, "classMethod": 0, "prototypeMethod": 0}
        for node in nodes:
            es_apis[node["ESAPI"]["type"]] += 1
        return es_apis

    def statistical_apis_frequency(self):
        es_apis_in_all_testcase = self.get_es_apis_in_testcases()
        fre = {}
        non_repeat_api = set(es_apis_in_all_testcase)
        for e in non_repeat_api:
            fre[e] = 0
        for api in es_apis_in_all_testcase:
            fre[api] += 1
        return fre
