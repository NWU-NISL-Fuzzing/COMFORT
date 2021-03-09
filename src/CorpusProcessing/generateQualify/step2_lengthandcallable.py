import re
'''
此模块为统计结果的字符长度和方法属性的调用情况
'''


class lengthAndCallable:
    def __init__(self, functions):
        self.functions = functions

    def lengthAnalyse(self):
        max_length = 0
        min_length = len(self.functions[0])
        total_length = 0
        for function in self.functions:
            length = len(function)
            if length > max_length:
                max_length = length
            if length < min_length:
                min_length = length
            total_length += length
        average_length = total_length / len(self.functions)
        return max_length, average_length, min_length

    def methodAndAttribute(self, str):
        method_callables = []
        attribute_callables = []
        attributePattern = re.compile("[0-9a-zA-Z_]+\\.[0-9a-zA-Z_]+")
        results = attributePattern.finditer(str)
        for result in results:
            endIndex = self.notSpace(str, result.end())
            if endIndex == len(str):
                attribute_callables.append(result.group())
            elif str[endIndex] == "(":
                method_callables.append(result.group())
            else:
                attribute_callables.append(result.group())
        method_callables = list(set(method_callables))
        attribute_callables = list(set(attribute_callables))
        return method_callables, attribute_callables

    def notSpace(self, str, index):
        if index == len(str):
            return index
        if str[index] == " ":
            index += 1
            index = self.notSpace(str, index)
        return index

    def callable(self):
        methodCallable = 0
        attibuteCallable = 0
        for function in self.functions:
            methods, attributes = self.methodAndAttribute(function)
            methodCallable += len(methods)
            attibuteCallable += len(attributes)
        methodAverage = methodCallable / len(self.functions)
        attibuteCallable = attibuteCallable / len(self.functions)
        return methodAverage, attibuteCallable