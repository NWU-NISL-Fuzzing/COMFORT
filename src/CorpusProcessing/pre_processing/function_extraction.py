import math
import os
import re
import subprocess
import sys
import threading

from lib.db_operation import DBOperation


class functionExtraction:
    def __init__(self, contents, target_db_path, n_threads):
        self.n_threads = n_threads

        self.contents = contents

        group_size = int(math.ceil(contents.__len__() / n_threads))
        self.groups = [self.contents[i:i + group_size] for i in range(0, self.contents.__len__(), group_size)]

        self.target_db_op = DBOperation(target_db_path)
        self.threads = []
        self.result_batches = [[] for i in range(0, self.n_threads)]

    def execute(self):
        for i in range(0, self.n_threads):
            thread = extractionThread(i, self.groups, self.result_batches)
            self.threads.append(thread)
            thread.start()

        for i in range(0, self.n_threads):
            self.threads[i].join()

        results = []
        for i in range(0, self.n_threads):
            results.extend(self.result_batches[i])

        # 下面这两行用set做一下完全重复的用例的过滤

        unique_callables = set(r[0] for r in results)
        results = list([u] for u in unique_callables)
        self.target_db_op.insert(['Content'], results)
        self.target_db_op.finalize()


class extractionThread(threading.Thread):  # 继承父类threading.Thread
    def __init__(self, thread_id, groups, result_batches):
        threading.Thread.__init__(self)
        self.thread_id = thread_id
        self.groups = groups
        self.result_batches = result_batches

    def run(self):
        test_file_name = './GLOBAL_VARIABLE_TEST_CASE' + str(self.thread_id) + '.js'
        str_thread_id = ('' if self.thread_id > 9 else '0') + str(self.thread_id)
        for i in range(0, self.groups[self.thread_id].__len__()):
            progress = "\rThread-%s Processing: %d " % (str_thread_id, i)
            sys.stdout.write(progress)
            testcase = self.groups[self.thread_id][i][0]
            self.create_and_fill_file(test_file_name, testcase)
            count = len(open(test_file_name, 'r', encoding='utf-8').readlines())
            try:
                if count > 1000:
                    # 如果文件过大，采用正则提取
                    result = self.RegExp_Extraction(testcase)
                else:
                    # 进行变量回填并利用语法树提取
                    stdout = self.SyntaxTree_Extraction(test_file_name).strip()
                    result = stdout.split("----------")
                    if result[0].startswith('NISL ERROR OCCURED'):
                        result = self.RegExp_Extraction(testcase)
                for fn in result:
                    if fn.__len__() > 0 and not fn.startswith('NISL ERROR OCCURED'):
                        self.result_batches[self.thread_id].append([fn])
            except Exception:
                pass
            os.remove(test_file_name)
        # sys.stdout.write('\nThread-%s finished all tasks.\n\n' % str_thread_id)

    @staticmethod
    def SyntaxTree_Extraction(filename):
        cmd = ['node', './function_extraction.js', '-f', filename]
        # cmd = ['node', './function_extraction.js', '-f', filename]
        p = subprocess.Popen(cmd, stdout=subprocess.PIPE)
        # p = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE)
        p.poll()
        stdout_list = p.stdout.readlines()
        result = ''
        for line in stdout_list:
            result = result + line.decode('utf-8')
        return result

    # 正则匹配方式提取function
    @staticmethod
    def RegExp_Extraction(file_content):
        index = 0
        result_batch = []

        while index < file_content.__len__():
            function_index = file_content.find('function', index)
            if function_index > -1:
                function_body = ''
                while function_index < file_content.__len__() and file_content[function_index] != '{':
                    function_body += file_content[function_index]
                    function_index += 1
                function_body += '{'
                function_index += 1

                open_brace = 1
                close_brace = 0
                while function_index < file_content.__len__() and open_brace != close_brace:
                    current_character = file_content[function_index]
                    function_body += current_character
                    if current_character == '{':
                        open_brace += 1
                    if current_character == '}':
                        close_brace += 1
                    function_index += 1
                index = function_index + 1
                if function_body.__contains__('function') and open_brace == close_brace:
                    function_body = re.sub('function [\s\S]*?\\(', 'function(', function_body, 1)
                    result_batch.append(function_body)
            else:
                break
        return result_batch

    @staticmethod
    def create_and_fill_file(file_path, content):
        if os.path.exists(file_path):
            os.remove(file_path)
        with open(file_path, 'a', encoding='utf8') as file:
            file.write(content)
