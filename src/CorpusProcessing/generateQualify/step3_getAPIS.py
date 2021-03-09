import datetime
import json
import math
import sys
import threading
from collections import Counter

from tqdm import tqdm

from generateQualify.javascriptAPI import getApisFromTestcase
from generateQualify.javascriptAPI.callable_processor import CallableProcessor


class getAPIs:
    def __init__(self, config_path, functions, n_threads):
        self.thread_num = n_threads if n_threads < 32 else 32
        self.config_path = config_path
        self.functions = functions
        batch_size = math.ceil(len(self.functions)/self.thread_num)
        self.groups = [self.functions[i:i+batch_size] for i in range(0, len(self.functions), batch_size)]
        self.batch_frequency = [{} for i in range(0, self.thread_num)]
        self.callable_frequency = Counter()

    def execute(self):
        start_time = datetime.datetime.now()
        config_path = self.config_path
        with open(config_path, "r") as f:
            config = json.load(f)
        print("Loading testcase ...")
        lst = []
        for i in range(0, self.thread_num):
            t = getAPI_Thread(i, config, self.groups[i], self.batch_frequency[i])
            lst.append(t)
            t.start()

        for t in lst:
            t.join()

        for t in lst:
            result = t.get_result()
            self.callable_frequency += Counter(result)
        self.callable_frequency = dict(self.callable_frequency)
        end_time = datetime.datetime.now()
        kind = len(self.callable_frequency)
        totalCallable = 0
        for key in self.callable_frequency:
            totalCallable += int(self.callable_frequency[key])
        return start_time, end_time, kind, totalCallable, self.callable_frequency


class getAPI_Thread(threading.Thread):
    def __init__(self, i, config, functions, callable_frequency):
        super().__init__()
        self.thread_num = i
        self.config = config
        self.generated_simples = functions
        self.callable_frequency = callable_frequency

    def run(self):
        instance = getApisFromTestcase.ESAPI(self.config["ESApis"])
        callable_processor = CallableProcessor(self.generated_simples)
        for index in range(len(self.generated_simples)):
            progress = "\rThread-%s getAPIs: %d " % (self.thread_num, index)
            sys.stdout.write(progress)
            for i in range(10):
                testcase = callable_processor.get_self_calling(self.generated_simples[index])
                if not testcase.__contains__("NISLFuzzingFunc"):
                    continue
                nodes = instance.parse_function_nodes(testcase)
                if len(nodes) == 0:
                    continue
                # counter = instance.count_es_apis_in_testcase(nodes)
                # api_node_info = {"testcase": testcase, "nodes": nodes, "counter": counter}
                # write api node information to files
                # api_node_info_path = (workspace / f"api-node-information/{index}-{i}.json")
                # api_node_info_path.parent.mkdir(parents=True, exist_ok=True)
                # with open(api_node_info_path, "w+") as f:
                #     json.dump(api_node_info, f)
        self.callable_frequency = instance.statistical_apis_frequency()

    def get_result(self):
        try:
            return self.callable_frequency
        except Exception:
            return None




