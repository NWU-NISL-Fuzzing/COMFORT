import math
import os
import subprocess
import sys
import threading


class syntaxCheck:
    '''
        功能：多线程实现对functions的uglifyjs和jshint检查
        输入： functions集合和线程数
        输出：通过uglifyjs和jshint的functions集合
    '''
    def __init__(self, functions, n_threads):
        self.functions = functions
        self.thread_num = n_threads if n_threads <= 32 else 32
        batch_size = math.ceil(len(functions)/n_threads)
        self.groups = [functions[i:i+batch_size] for i in range(0, len(functions), batch_size)]
        self.uglifyjsPass = [[] for i in range(n_threads)]
        self.jshintPass = [[] for i in range(n_threads)]

    def execute(self):
        # 为每一批数据创建一个线程并执行
        thread_lst = []
        for i in range(self.thread_num):
            t = filterThread(self.groups[i], i, self.uglifyjsPass[i], self.jshintPass[i])
            thread_lst.append(t)
            t.start()

        for t in thread_lst:
            t.join()

        uglifyjsResults = []
        jshintResults = []
        for result in self.uglifyjsPass:
            uglifyjsResults.extend(result)
        for result in self.jshintPass:
            jshintResults.extend(result)

        return uglifyjsResults, jshintResults


class filterThread(threading.Thread):
    '''
        功能：每一个线程执行uglifyjs和jshint过滤
        输入：functions集合
        输出：通过uglifyjs和jshint过滤的functions集合
    '''
    def __init__(self, functions, thread_num, uglifyjsPass, jshintPass):
        super().__init__()
        self.functions = functions
        self.thread_num = thread_num
        self.uglifyjsPass = uglifyjsPass
        self.jshintPass = jshintPass

    def run(self):
        i = 0
        for function in self.functions:
            progress = "\rThread-%s uglifyjs_Processing: %d " % (self.thread_num, i)
            sys.stdout.write(progress)
            test_file_name = "./uglifyjs_file_name" + str(self.thread_num) + ".js"
            uglifyjsFlag = self.uglifyjs_checking(function, test_file_name)
            if uglifyjsFlag:
                self.uglifyjsPass.append(function)
            i += 1
        j = 0
        for function in self.uglifyjsPass:
            progress = "\rThread-%s jshint_Processing: %d " % (self.thread_num, j)
            sys.stdout.write(progress)
            test_file_name = "./jshint_file_name" + str(self.thread_num) + ".js"
            jshintFlag = self.jshint_checking(function, test_file_name)
            if jshintFlag:
                self.jshintPass.append(function)
            j += 1

    def uglifyjs_checking(self, file_content, file_name):
        testcase_content = "var NISLFuzzingFunc = " + file_content + ";"
        with open(file_name, "w", encoding='utf-8') as f:
            f.write(testcase_content)

        cmd1 = ['timeout', '120s', 'node', '--max_old_space_size=4096', '../node_modules/uglify-js/bin/uglifyjs', file_name, '-b', '-o', file_name]
        # 进行uglifyjs过滤
        if sys.platform.startswith('win'):    # 假如是windows
            p1 = subprocess.Popen(cmd1, stderr=subprocess.PIPE, shell=True)
        else:    # 假如是linux
            p1 = subprocess.Popen(cmd1, stderr=subprocess.PIPE)

        if ((p1.poll() is None) and p1.stderr.readline().__len__() > 0 and os.path.exists(
                file_name)) or not os.path.getsize(
            file_name):
            uglifyjs_flag = 0
        else:  # 通过了检查，此时 test_file_name中就是美化后的代码
            uglifyjs_flag = 1

        # 删除临时文件
        os.remove(file_name)

        return uglifyjs_flag

    def jshint_checking(self, file_content, file_name):
        testcase_content = "var NISLFuzzingFunc = " + file_content + ";"
        with open(file_name, "w", encoding='utf-8') as f:
            f.write(testcase_content)

        # 进行uglifyjs过滤
        cmd = ['timeout', '120s', 'node', '--max_old_space_size=4096', '../node_modules/jshint/bin/jshint',
               file_name]
        if sys.platform.startswith('win'):  # 假如是windows
            p1 = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
        else:  # 假如是linux
            p1 = subprocess.Popen(cmd, stdout=subprocess.PIPE)
        stdout = p1.communicate()[0]
        if stdout.__len__() > 0:
            jshint_flag = 0
        else:  # 通过了检查，此时 test_file_name中就是美化后的代码
            jshint_flag = 1

        # 删除临时文件
        os.remove(file_name)

        return jshint_flag

