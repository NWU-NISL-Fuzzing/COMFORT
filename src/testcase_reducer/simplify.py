from src.detection.harness import Harness
from src.testcase_reducer import reduce_by_block


def simplify(testcase, with_output_info=False):
    harness = Harness()
    harness_result = harness.run_testcase(testcase=testcase)
    simplified_testcase = reduce_by_block.simple_by_block(harness_result, with_output_info=with_output_info)
    # 测试用例已经最简,无法被继续精简
    if simplified_testcase is None:
        return harness_result.testcase
    else:
        return simplified_testcase
