import pathlib
import json
import logging
import tqdm
import time
import sys

from db.optimized_database import DBOperation
from tools.simplifyDifferentialTestResult.classify import Classifier, ClassificationType

logging.basicConfig(level=logging.DEBUG,  # 控制台打印的日志级别
                        filename="./result/critical.log",
                        filemode='a',
                        format=
                        '%(asctime)s - %(pathname)s[line:%(lineno)d] - %(levelname)s: %(message)s'  # 日志格式
                        )

if __name__ == '__main__':
    if len(sys.argv) == 2:
        db_path = sys.argv[1]
    else:
        db_path = r"F:\Download\qx_1st\result-2020-05-13-test.db"
    config_path = "./result/config.json"
    with open(config_path, "r") as f:
        config = json.load(f)
    if not pathlib.Path(db_path).exists():
        raise LookupError(f"File not Exists: {pathlib.Path(db_path).absolute()}")
    db = DBOperation(pathlib.Path(db_path))
    classifier = Classifier(config)
    differential_test_result = db.query_all_differential_test_result()
    for differential_test in tqdm.tqdm(differential_test_result):
        suspicious_results = []
        no_exception_results = []
        filtered_results = []
        info = list(differential_test)
        harness_result = None
        # 当其他线程在读写数据库时，数据库会被锁。导致数据读取失败
        for t in range(5):
            try:
                harness_result = db.query_harness_result_with_harness_result_id(info[1])
            except Exception:
                time.sleep((t + 1) * 2)
            if harness_result is not None:
                break
        [classify_result, classify_id] = classifier.is_suspicious_result(info[1], harness_result)
        info.append(classify_id)
        if classify_result is ClassificationType.SUSPICIOUS:
            suspicious_results.append(info)
        elif classify_result is ClassificationType.NO_EXCEPTION_INFO:
            no_exception_results.append(info)
        elif classify_result is ClassificationType.FALSE_POSITIVE:
            filtered_results.append(info)
        else:  # Note information trigger the false positive
            pass
        if len(suspicious_results) > 0:
            db.insert_suspicious_results(suspicious_results)
        if len(no_exception_results) > 0:
            db.insert_no_exception_results(no_exception_results)
        if len(filtered_results) > 0:
            db.insert_filtered_results(filtered_results)
    classifier.print_statistical_results()
