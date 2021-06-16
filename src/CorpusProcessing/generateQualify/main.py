import os
from uuid import uuid4

from lib.logger import *
from generateQualify.step1_syntaxcheck import syntaxCheck
from generateQualify.step2_lengthandcallable import lengthAndCallable
from generateQualify.step3_getAPIS import *
from lib.db_operation import DBOperation
from utils.config import Hparams_generateQualify
from lib.logger import logger_config
'''
        此模块的主要目的是用于评测模型生成代码的质量，评测标准从三方面进行：
            1. 去重，通过美化和语法检查的数量
            2. 平均字符长度和方法属性的调用情况
            3. 函数中API的多样性
'''


class generateQualify:
    def __init__(self):
        self.hparams = Hparams_generateQualify().parser.parse_args()
        self.functions = self.readFunctions()
        self.insert_db = self.hparams.jshint_db
        self.insert_db = DBOperation(self.insert_db)
        self.insert_db.init_db()
        self.n_threads = self.hparams.n_threads if self.hparams.n_threads <= 32 else 32

    def readFunctions(self):
        db_path = self.hparams.corpus_db
        target_db = DBOperation(db_path)
        contents = target_db.query_all(['Content'])
        return contents

    def execute(self):
        '''
        step1:利用uglifyjs和jshint进行代码美化和语法检查
        '''
        log_path = os.path.join(self.hparams.result_dir, f'generateQualify_{uuid4()}.log')
        logger_config(prefix='generateQualify', log_file=log_path)
        logging.info("before remove duplicate, quantity is：{}".format(len(self.functions)))
        contents = []
        for function in self.functions:
            contents.append(function[0])
        self.functions = list(set(contents))
        logging.info("after remove duplicate, quantity is：{}".format(len(self.functions)))
        step1 = syntaxCheck(self.functions, self.n_threads)
        step1_uglifyjs_results, step1_jshint_results = step1.execute()
        print("\n")
        # logging.info("pass uglifyjs, quantity is：{}".format(len(step1_uglifyjs_results)))
        logging.info("pass jshint, quantity is：{}".format(len(step1_jshint_results)))
        insert_jshint_results = [[i] for i in step1_jshint_results]
        self.insert_db.insert(["Content"], insert_jshint_results)
        self.insert_db.finalize()

        '''
        step2:统计最大，最小及平均字符长度以及方法和属性的调用情况
        '''
        for result in step1_jshint_results:
            if len(result) == 0:
                print(result)
        step2 = lengthAndCallable(step1_jshint_results)
        max_length, average_length, min_length = step2.lengthAnalyse()
        average_method_callable, average_attribute_callable = step2.callable()
        logging.info("max length of testcase is：{}".format(max_length))
        logging.info("average length of testcase is：{}".format(average_length))
        logging.info("min length of testcase is：{}".format(min_length))
        logging.info("every testcase callable methods：{} times".format(average_method_callable))
        logging.info("every testcase callable attributes：{} times".format(average_attribute_callable))

        '''
        step3:统计API使用情况
        '''
        config_path = "./data/config.json"
        step3 = getAPIs(config_path, step1_jshint_results, 8)
        start_time, endtime, kind, totalCallable, callable_frequency = step3.execute()
        logging.info("getAPI start from {}".format(start_time))
        logging.info("There are {} kinds of API callabled".format(kind))
        logging.info("APIs were callabled total {} times".format(totalCallable))
        logging.info("the result of API callable frequency is {}".format(callable_frequency))
        logging.info("getAPI end in {}".format(endtime))


if __name__ == "__main__":
    qualifyAnalyze = generateQualify()
    qualifyAnalyze.execute()