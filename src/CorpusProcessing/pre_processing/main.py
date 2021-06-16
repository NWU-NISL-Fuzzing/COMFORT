import logging
import math
import os
import sys
import time
from uuid import uuid4

from lib.db_operation import DBOperation
from pre_processing.function_extraction import functionExtraction
from pre_processing.blacklist_filter import removeDross
from pre_processing.syntax_filtration import SyntaxFiltration
from utils.config import Hparams_preprocessing
from lib.logger import logger_config


class PreProcessor:
    def __init__(self):
        self.hparams = Hparams_preprocessing().parser.parse_args()
        self.n_threads = self.hparams.n_threads if self.hparams.n_threads <= 32 else 32

    def execute(self):
        log_path = os.path.join(self.hparams.result_dir, f'preprocessing_{uuid4()}.log')
        logger_config(prefix="preprocessing corpus", log_file=log_path)
        if not os.path.exists(self.hparams.corpus_path):
            logging.info('[*** Error ***][Path \'' + self.hparams.corpus_path + '\' is not exists.]')
            return

        """
        第1步，如果给的路径指向的是一个文件夹而不是db文件，将所有语料读入数据库
        """
        if os.path.isdir(self.hparams.corpus_path):
            logging.info("\"" + self.hparams.corpus_path + "\" is a directory.")
            logging.info('[*** Begin ***][Step 1: Corpus Collection]')
            self.source_path = self.corpus_collection(self.hparams.corpus_path)
            logging.info('[*** Finish ***][Step 1: Corpus Collection]')

            if not os.path.isabs(self.source_path):
                self.source_path = os.path.abspath(self.source_path)

        """
        第2步，全局变量回填并提取function，即将函数中引用的全局变量回写到函数中去作为局部变量,再提取其中的function
        """
        logging.info('[*** Begin ***][Step 2: Global Variable Writeback And Function Extraction]')
        result_path_of_step1 = self.source_path.split('.')[0] + '-FX.db'
        self.function_extraction(self.source_path, result_path_of_step1, self.n_threads)
        logging.info('[*** Finish ***][Step 2: Global Variable Writeback And Function Extraction]')

        """
        第3步，语法筛查，即从上一步的结果中去掉语法有误的function
        """
        logging.info('[*** Begin ***][Step 3: Syntax Filtration]')
        result_path_of_step2 = result_path_of_step1.split('.')[0] + '-SF.db'
        result_path_of_step3 = result_path_of_step1.split('.')[0] + '-SF-FAIL.db'
        self.syntax_filtration(result_path_of_step1, result_path_of_step2, result_path_of_step3, self.n_threads)
        logging.info('[*** Finish ***][Step 3: Syntax Filtration]')

        """
        第4步，利用黑名单过滤掉不好的数据
        """
        logging.info('[*** Begin ***][Step 4: BlackList Filtration]')
        before_uglifyjs_db_path = result_path_of_step2.split('.')[0] + '_before_uglifyjs.db'
        after_uglifyjs_db_path = result_path_of_step2.split('.')[0] + '_final_result.db'
        removeDross(self.source_path, result_path_of_step2, before_uglifyjs_db_path, after_uglifyjs_db_path)
        logging.info('[*** Finish ***][Step 4: BlackList Filtration]')

        logging.info(f"------------------------------------------------------")
        logging.info(f'#Result before UglifyJS beautifies has been save to the PATH: {before_uglifyjs_db_path}')
        logging.info(f"#All preprocessing result has been save to the PATH:" + after_uglifyjs_db_path)
        logging.info(f"------------------------------------------------------\n")

    def corpus_collection(self, corpus_path):
        time_stamped_db_name = os.path.join(corpus_path, 'corpus-' + time.strftime("%Y%m%d", time.localtime()) + '.db')
        db_op = DBOperation(time_stamped_db_name)
        db_op.init_db()
        corpus = []
        total = 0
        for root, dirs, files in os.walk(corpus_path):
            for file in files:
                if file.lower().endswith('.js'):
                    try:
                        total += 1
                        progress = "\rProcessing: %d" % total
                        sys.stdout.write(progress)
                        with open(os.path.join(root, file), 'rb') as f:
                            content = f.read().decode('utf-8', 'ignore').strip()
                            if content:
                                corpus.append([content])
                            if len(corpus) > 10000:
                                db_op.insert(['Content'], corpus)
                                corpus.clear()
                    except Exception:
                        pass
        db_op.insert(['Content'], corpus)
        db_op.finalize()
        return time_stamped_db_name

    def function_extraction(self, source_path, target_path, n_threads):
        source_db_op = DBOperation(source_path)
        target_db_op = DBOperation(target_path)
        target_db_op.init_db()
        contents = source_db_op.query_all(['Content'])
        caseNum = len(contents)
        contents.clear()
        batch_size = 10000
        batch_num = math.ceil(caseNum / batch_size)
        for x in range(0, batch_num):
            print("\n*****FuncExtra_Batch" + str(x) + " start")
            if x < (batch_num - 1):
                contents = source_db_op.query_part(['Content'], (x * batch_size + 1), (x + 1) * batch_size)
            else:
                contents = source_db_op.query_part(['Content'], (x * batch_size), caseNum)
            processor = functionExtraction(contents, target_path, n_threads)
            processor.execute()

    def syntax_filtration(self, source_path, target_path, fail_path, n_threads):
        source_db_op = DBOperation(source_path)
        target_db_op = DBOperation(target_path)
        target_db_op.init_db()
        fail_db_op = DBOperation(fail_path)
        fail_db_op.init_db()
        contents = source_db_op.query_all(['Content'])
        caseNum = len(contents)
        contents.clear()
        batch_size = 1000
        batch_num = math.ceil(caseNum / batch_size)

        for x in range(0, batch_num):
            print("\n*****SynFlt_Batch" + str(x) + " start")
            if x < (batch_num - 1):
                contents = source_db_op.query_part(['Content'], (x * batch_size + 1), (x + 1) * batch_size)
            else:
                contents = source_db_op.query_part(['Content'], (x * batch_size), caseNum)
            processor = SyntaxFiltration(contents, target_path, fail_path,  n_threads)
            processor.execute()


if __name__ == '__main__':
    pre_processor = PreProcessor()
    pre_processor.execute()
