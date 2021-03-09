import json
import pathlib
import tempfile

from utils import config
from testcase_mutation import getApisFromTestcase, getMutatedTestcase


class Mutator:
    def __init__(self):
        self.instance = getApisFromTestcase.ESAPI(get_config())

    def mutate(self, testcase):
        nodes = self.instance.parse_function_nodes(testcase)
        mutated_testcase_set = []
        if len(nodes) > 0:
            counter = self.instance.count_es_apis_in_testcase(nodes)
            api_node_info = {"testcase": testcase, "nodes": nodes, "counter": counter}
            with tempfile.NamedTemporaryFile(prefix="javascriptTestcase_", suffix=".js", delete=True) as f:
                api_node_info_path = pathlib.Path(f.name)
                with open(api_node_info_path, "w+") as f:
                    json.dump(api_node_info, f)
                try:
                    mutated_testcase_set = set(getMutatedTestcase.mutate_testcase(api_node_info_path))
                except Exception as e:
                    pass
        return mutated_testcase_set


def get_config():
    return config.init_config()["ESApis"]
