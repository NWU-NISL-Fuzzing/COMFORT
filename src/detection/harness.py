from multiprocessing import Pool
import tempfile
import logging
import pathlib
import subprocess
import gc
import traceback
import sys
from enum import Enum

from utils import config, labdate
from threading import Thread
from typing import List

from src.detection.Result import Output, HarnessResult


class Mode(Enum):
    SINGLE_THREAD = 1  # 单线程
    MULTI_THREADS = 2  # 多线程
    MULTI_PROCESSING = 3  # 多进程


class Harness:
    # def __init__(self, engines: List[str], mode: int = 2, processes: int = -1):
    def __init__(self, mode: int = 2, processes: int = -1):
        """
        初始化harness实例
        :param engines: 待测试引擎的数量
        :param mode: 执行测试用例的方式，单线程(1)，多线程(2)，多进程(3)。实际测试效果显示，此处选择多线程最快。
        :param processes: 开启多少个cpu内核执行harness操作，即线（进）程数
        """
        # self.engines = engines
        self.engines = get_engines()
        if processes < 2 or processes > len(self.engines):
            processes = len(self.engines)
        self.processes = processes
        if not {1, 2, 3}.__contains__(mode):
            mode = 2  # 选择最快的方式执行，即多线程
        self.mode = mode

    def run_testcase(self, testcase: str) -> HarnessResult:
        """
        使用多个引擎执行测试用例，并返回所有引擎执行后的测试结果。
        :param testcase: 待执行的测试用例
        :return: 执行后的结果
        """
        result = HarnessResult(testcase=testcase)
        with tempfile.NamedTemporaryFile(prefix="javascriptTestcase_", suffix=".js", delete=True) as f:
            testcase_path = pathlib.Path(f.name)
            try:
                # 此处手动转换为bytes类型再存储是为了防止代码中有乱码而无法存储的情况
                testcase_path.write_bytes(bytes(testcase, encoding="utf-8"))
            except Exception as e:
                logging.exception("\nWrite to file failure: ", e)
                return result
            if self.mode == Mode.SINGLE_THREAD.value:
                result.outputs = self.single_thread(testcase_path)
            elif self.mode == Mode.MULTI_THREADS.value:
                result.outputs = self.multi_thread(testcase_path)
            elif self.mode == Mode.MULTI_PROCESSING.value:
                result.outputs = self.multi_processing(testcase_path)
            else:
                raise Exception(f"This value should be an integer between "
                                f"{Mode.SINGLE_THREAD} and {Mode.MULTI_PROCESSING}.")
        return result

    def single_thread(self, testcase_path: pathlib.Path) -> List[Output]:
        """
        单线程执行测试用例
        :param testcase_path: 存放测试用例的文件路劲
        :return: 所有引擎的执行结果
        """
        outputs = []
        output_id = 0
        for engine in self.engines:
            try:
                outputs.append(run_test_case(engine, testcase_path, output_id))
                output_id += 1
            except Exception as e:
                gc.collect()
                logging.exception(traceback.format_exception(*sys.exc_info()))
        return outputs

    def multi_thread(self, testcase_path: pathlib.Path) -> List[Output]:
        """
        多线程执行测试测试用例。理论上cpython上的多线程适合IO密集型，不适合计算密集型，但针对这种执行测试用例的方式，多线程比多进程快
        :param testcase_path: 测试用例存放的文件路径
        :return: 所有测试用例的执行结果
        """
        outputs = []
        threads_pool = []
        counter = 0
        for engine in self.engines:
            tmp = ThreadLock(engine, testcase_path, counter)
            counter += 1
            threads_pool.append(tmp)
            tmp.start()
        for thread in threads_pool:
            thread.join()
            if thread.returncode:
                gc.collect()
            elif thread.output is not None:
                outputs.append(thread.output)
        return outputs

    def multi_processing(self, testcase_path: pathlib.Path) -> List[Output]:
        """
        多个引擎并行执行测试用例。理论上cpython上的多进程适用于计算密集型
        :param testcase_path: 测试用例存放的文件路径
        :return: 所有测试用例的执行结果
        """
        res_list = []
        pools = Pool(processes=self.processes)
        output_id = 0
        for engine in self.engines:
            try:
                res_list.append(pools.apply_async(func=run_test_case, args=(engine, testcase_path, output_id,)))
                output_id += 1
            except Exception as e:
                gc.collect()
                logging.exception(traceback.format_exception(*sys.exc_info()))
        pools.close()
        pools.join()
        return [res.get() for res in res_list]


class ThreadLock(Thread):
    def __init__(self, engine, testcase_path, output_id: int = 0):
        super().__init__()
        self.output_id = output_id
        self.output = None
        self.engine = engine
        self.testcase_path = testcase_path
        self.returncode = None

    def run(self):
        try:
            self.output = run_test_case(self.engine, self.testcase_path, self.output_id)
        except BaseException as e:
            self.returncode = 1


def run_test_case(testbed: str, testcase_path: pathlib.Path, index=0, time: str = "60"):
    cmd = ["timeout", "-s9", time]
    for ob in testbed.split():
        cmd.append(ob)
    cmd.append(str(testcase_path))
    start_time = labdate.GetUtcMillisecondsNow()
    pro = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE,
                           stderr=subprocess.PIPE, universal_newlines=True)
    stdout, stderr = pro.communicate()
    end_time = labdate.GetUtcMillisecondsNow()
    duration_ms = int(round(
        (end_time - start_time).total_seconds() * 1000))
    event_start_epoch_ms = labdate.MillisecondsTimestamp(start_time)
    output = Output(id_db=index, testbed=testbed, returncode=pro.returncode, stdout=stdout, stderr=stderr,
                         duration_ms=duration_ms, event_start_epoch_ms=event_start_epoch_ms)
    return output


def get_engines():
    return config.init_config()["engines"]
