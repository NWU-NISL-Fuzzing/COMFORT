class TypeInferer:
    def __init__(self):
        self.array_characters = [
            [],
            [".length", ".concat", ".join", ".pop", ".push",
             ".reverse", ".shift", ".slice", ".sort", ".splice", ".toSource",
             ".toLocaleString", ".unshift", "[", " ["],
            []
        ]
        self.boolean_characters = [
            ["!", "! ", "&& ", "|| ", "^", "^ ", "true=", "true= ", "true =", "true = ", "false=", "false= ", "false =",
             "false = "],
            [".toSource", " &&", " ||", "^", " ^", "=true", " =true", "= true", " = true", "=false", " =false",
             "= false", " = false"],
            []
        ]
        self.number_characters = [
            ["-=", "-= ", "*=", "*= ", "/=", "/= ", "++", "++ ", "--", "-- ", "%", "% "],
            [".toLocaleString", ".toFixed", ".toExponential", ".toPrecision", "-=", " -=", "*=", " *=", "/=", " /=",
             "++", " ++", "++ ", "--", " --", "-- ", "%", " %", "% "],
            []
        ]
        self.string_characters = [
            [],
            [".length", ".anchor", ".big", ".blink", ".bold", ".charAt", ".charCodeAt", ".concat", ".fixed",
             ".fontsize", ".indexOf", ".italics", ".lastIndexOf", ".link", ".localeCompare", ".match", ".replace",
             ".search", ".slice", ".small", ".split", ".strike", ".sub", ".substr", ".substring", ".sup",
             ".toLocaleLowerCase", ".toLocaleUpperCase", ".toLowerCase", ".toUpperCase", ".toSource", "[", " [", "=\"",
             " =\"", "= \"", " = \""],
            []
        ]
        self.function_characters = [
            [],
            ["(", " (", "=function", " =function", "= function", " = function"],
            [["function", "("], ["function ", "("], ["function", " ("], ["function ", " ("]]
        ]

    def execute(self, callable):
        params = self.extract_params(callable)
        result = []
        for i in range(0, params.__len__()):
            result.append(self.infer_param_type(callable, params[i]))
        return result

    def infer_param_type(self, callable, param_name):
        characters = [self.array_characters, self.boolean_characters, self.number_characters, self.string_characters,
                      self.function_characters]
        counter = [0, 0, 0, 0, 0]
        types = ["array", "boolean", "number", "string", "function"]
        for i in range(0, characters.__len__()):
            counter[i] += self.infer_left(param_name, callable, characters[i][0])
            counter[i] += self.infer_right(param_name, callable, characters[i][1])
            counter[i] += self.infer_around(param_name, callable, characters[i][2])

        max = 0
        for i in range(0, counter.__len__()):
            if counter[i] > max:
                max = counter[i]

        if max > 0:
            result = []
            for i in range(0, counter.__len__()):
                if counter[i] == max:
                    result.append(types[i])
            return result
        else:
            return ['none']

    def infer_left(self, param_name, callable, left_characters):
        result = 0
        for character in left_characters:
            target = character + param_name
            if callable.__contains__(target):
                result += 1
        return result

    def infer_right(self, param_name, callable, left_characters):
        result = 0
        for character in left_characters:
            target = param_name + character
            if callable.__contains__(target):
                result += 1
        return result

    def infer_around(self, param_name, callable, left_characters):
        result = 0
        for character in left_characters:
            target = character[0] + param_name + character[1]
            if callable.__contains__(target):
                result += 1
        return result

    def extract_params(self, callable):
        left_index = callable.find('(')
        right_index = callable.find(')')
        raw = callable[left_index + 1:right_index]
        if raw.__len__() < 1:
            return []

        params = raw.strip(' ').split(',')
        for i in range(0, params.__len__()):
            params[i] = params[i].strip(' ')
        return params
