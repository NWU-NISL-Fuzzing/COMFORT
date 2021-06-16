# coding:utf-8
import math
import random
import re

from six import unichr
from generate_model.type_inferer import TypeInferer


class CallableProcessor:
    def __init__(self, callables=['1'], function_name='NISLFuzzingFunc'):
        self.functions = [self.generate_integer, self.generate_float_point, self.generate_string, self.generate_boolean,
                          self.generate_null, self.generate_undefined, self.generate_array_of_different_type,
                          self.generate_array_of_same_type, self.generate_function]
        self.callables = callables
        self.function_name = function_name
        self.type_inferer = TypeInferer()
        self.function_mapping = {
            'array': self.generate_array,
            'boolean': self.generate_boolean,
            'number': self.generate_number,
            'string': self.generate_string,
            'function': self.generate_function,
            'none': self.generate_a_random_typed_param
        }

    def generate_integer(self):
        power = random.randint(0, 10)
        width = -(math.pow(10, power))
        return str(random.randint(width, -width))

    def generate_float_point(self):
        return str(self.generate_integer()) + (str(random.random())[1:])

    def generate_number(self):
        choice = random.randint(0, 1)
        return self.generate_integer() if choice == 0 else self.generate_float_point()

    def generate_string(self):
        length = random.randint(1, 128)
        result = ''
        start, end = (32, 126)
        while length > 0:
            try:
                newChar = unichr(random.randint(start, end))
                if newChar.__eq__('"') or newChar.__eq__('\\'):
                    newChar = '\\' + newChar
                result += newChar
            except UnicodeEncodeError:
                pass
            length -= 1
        result.replace('\"', '')
        result.replace("'", "")
        result.replace('\n', '')
        result.replace('\r', '')
        return '"' + result + '"'

    def generate_boolean(self):
        return str(bool(random.randint(0, 1))).lower()

    def generate_null(self):
        return 'null'

    def generate_undefined(self):
        return 'undefined'

    def generate_array_of_different_type(self):
        length = random.randint(0, 9)
        result = '[' + self.generate_a_random_typed_param()
        while length > 0:
            result += (', ' + self.generate_a_random_typed_param())
            length -= 1
        result += ']'
        return result

    def generate_array_of_same_type(self):
        length = random.randint(0, 15)
        choice = random.randint(0, self.functions.__len__() - 1)
        while self.functions[choice] == self.generate_array_of_same_type or self.functions[
            choice] == self.generate_array_of_different_type:
            choice = random.randint(0, self.functions.__len__() - 1)
        result = '[' + self.functions[choice]()
        while length > 0:
            result += (', ' + self.functions[choice]())
            length -= 1
        result += ']'
        return result

    def generate_array(self):
        choice = random.randint(0, 1)
        return self.generate_array_of_same_type() if choice == 0 else self.generate_array_of_different_type()

    def generate_a_random_typed_param(self):
        choice = random.randint(0, self.functions.__len__() - 1)
        return self.functions[choice]()

    def generate_a_param(self, type):
        return self.function_mapping[type]()

    def generate_function(self):
        index = random.randint(0, self.callables.__len__() - 1)
        # param_function = self.callables[index].__getitem__(0)
        param_function = self.callables[index]
        if param_function.startswith('"use strict";'):
            param_function = re.sub('"use strict";\n\n', '', param_function, 1)
        return re.sub('function[\s\S]*?\(', 'function(', param_function).rstrip(';')

    def extract_function_name(self, function_body: str):
        index_of_function = function_body.find('function', 0)
        index_of_open_parenthesis = function_body.find('(', index_of_function)
        function_name = function_body[index_of_function + 8:index_of_open_parenthesis]
        return function_name.strip()

    def extract_num_of_params(self, function_body: str):
        index_of_open_parenthesis = function_body.find('(', 0)
        index_of_close_parenthesis = function_body.find(')', index_of_open_parenthesis + 1)
        params = function_body[index_of_open_parenthesis + 1:index_of_close_parenthesis]
        params = params.replace(' ', '')
        if params.__eq__(''):
            return 0
        return params.split(',').__len__()

    def generate_self_calling(self, function_body: str, no_function=True):
        if not function_body.endswith(';'):
            function_body += ';'

        param_function_name = 'NISLParameter'
        param_function_count = 0
        if self.functions.__contains__(self.generate_function):
            self.functions.remove(self.generate_function)
        if not no_function:
            self.functions.append(self.generate_function)

        function_name = self.extract_function_name(function_body)
        num_of_param = self.extract_num_of_params(function_body)
        param_type = self.type_inferer.execute(function_body)
        # param_type = []
        # for i in range(0, num_of_param):
        #     param_type.append(['none'])
        self_calling = '('
        if num_of_param > 0:
            param = self.generate_a_param(param_type[0][0])
            function_body += '\nvar ' + param_function_name + str(param_function_count) + ' = ' + param + ';'
            self_calling += param_function_name + str(param_function_count)
            param_function_count += 1
            num_of_param -= 1
        index = 1
        while num_of_param > 0:
            self_calling += ', '
            param = self.generate_a_param(param_type[index][0])
            function_body += '\nvar ' + param_function_name + str(param_function_count) + ' = ' + param + ';'
            self_calling += param_function_name + str(param_function_count)
            param_function_count += 1
            index += 1
            num_of_param -= 1
        self_calling += ')'

        # if function_name.__eq__(''):
        #     function_body = 'var ' + self.function_name + ' = ' + function_body
        #     result = function_body + '\n\n' + self.function_name + self_calling + ';'
        #     return result
        # else:
        #     result = function_body + '\n\n' + function_name + self_calling + ';'
        #     return result
        if function_name.__eq__(''):
            function_body = 'var ' + self.function_name + ' = ' + function_body
            result = function_body + '\n' + self.get_output_statement(self.function_name + self_calling)
        else:
            result = function_body + '\n' + self.get_output_statement(function_name + self_calling)
        if not result.endswith(";"):
            result += ';'
        return result

    def get_output_statement(self, func_name_and_self_calling):
        output_statement = 'var NISLCallingResult = ' + func_name_and_self_calling + ';\n'
        output_statement += 'print(NISLCallingResult);'
        return output_statement

    def get_random_self_calling(self):
        choice = random.randint(0, self.callables.__len__() - 1)
        function_body = self.callables[choice].__getitem__(0).decode()
        return self.generate_self_calling(function_body)

    def get_self_calling(self, function_body, no_function=True):
        return self.generate_self_calling(function_body, no_function=no_function)
