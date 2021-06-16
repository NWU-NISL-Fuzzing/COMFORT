import math
import os
import subprocess
import sys
import threading

from lib.db_operation import DBOperation


class SyntaxFiltration:
    def __init__(self, contents, target_db_path, fail_db_path, n_threads):
        self.n_threads = n_threads

        self.contents = contents
        group_size = int(math.ceil(self.contents.__len__() / n_threads))
        self.groups = [self.contents[i:i + group_size] for i in range(0, self.contents.__len__(), group_size)]

        self.target_db_op = DBOperation(target_db_path)
        self.fail_db_op = DBOperation(fail_db_path)
        self.threads = []
        self.result_batches = [[] for i in range(0, self.n_threads)]
        self.fail_batches = [[] for i in range(0, self.n_threads)]

    def execute(self):
        for i in range(0, self.n_threads):
            thread = FiltrateThread(i, self.groups, self.result_batches, self.fail_batches)
            self.threads.append(thread)
            thread.start()

        for i in range(0, self.n_threads):
            self.threads[i].join()

        results = []
        fails = []
        for i in range(0, self.n_threads):
            results.extend(self.result_batches[i])
        for i in range(0, self.n_threads):
            fails.extend(self.fail_batches[i])

        # 下面这两行用set做一下完全重复的用例的过滤
        unique_callables = set(r[0] for r in results)
        results = list([u] for u in unique_callables)
        unique_fails = set(r[0] for r in fails)
        fails = list([u] for u in unique_fails)
        self.target_db_op.insert(['Content'], results)
        self.target_db_op.finalize()
        self.fail_db_op.insert(['Content'], fails)
        self.fail_db_op.finalize()


class FiltrateThread(threading.Thread):  # 继承父类threading.Thread
    def __init__(self, thread_id, groups, result_batches, fail_batches):
        threading.Thread.__init__(self)
        self.thread_id = thread_id
        self.groups = groups
        self.result_batches = result_batches
        self.fail_batches = fail_batches

    def run(self):
        test_file_name = './JSHINT_TEST_CASE' + str(self.thread_id) + '.js'
        for i in range(0, self.groups[self.thread_id].__len__()):
            progress = "\rThread-%d Processing: %d " % (self.thread_id, i)
            sys.stdout.write(progress)
            callable = self.groups[self.thread_id][i][0]
            self.create_and_fill_file(test_file_name, 'var NISLFuzzingFunc = ' + callable + ';')
            try:
                if not self.contains_syntax_error(test_file_name):
                    self.result_batches[self.thread_id].append([callable])
                else:
                    self.fail_batches[self.thread_id].append([callable])
            except Exception:
                pass
            os.remove(test_file_name)
        # sys.stdout.write('\nThread-%d finished all tasks.\n\n' % self.thread_id)

    @staticmethod
    def contains_syntax_error(test_file_name):
        cmd = ['timeout', '120s', 'jshint', test_file_name]
        # cmd = ['node', '--max_old_space_size=4096', '../node_modules/jshint/bin/jshint', test_file_name]
        process = subprocess.Popen(cmd, stdout=subprocess.PIPE)
        # process = subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE)
        process.poll()
        return process.stdout.readlines().__len__() > 0

    @staticmethod
    def create_and_fill_file(file_path, content):
        if os.path.exists(file_path):
            os.remove(file_path)
        with open(file_path, 'a', encoding='utf8') as file:
            file.write(content)
