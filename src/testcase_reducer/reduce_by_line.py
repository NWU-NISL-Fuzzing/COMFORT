from src.testcase_reducer import simplifyTestcaseCore
from src.detection import Result


def simple_by_statement(init_result: Result.HarnessResult, with_output_info=False):
    """
    精简成功则返回精简后的测试用例，否则返回None
    :param init_result:
    :param optimization:
    :param multi_threads:
    :param with_output_info:
    :return:
    """
    original_testcase = init_result.testcase.strip()
    # 直接将list的变量名赋值给变量时，是将list的引用赋值给变量
    testcase_last_list = original_testcase.split("\n")  # 上一轮精简后的测试用例
    tmp_testcase_list = testcase_last_list[:]  # 遍历一行语句就可能改变，改变条件是能精简
    loop_counter = 0
    # 为什么只进行两轮精简的原因：参考lithium的精简算法
    for index in range(2):
        loop_counter += 1
        # print(f"第{loop_counter}轮精简")
        for row in range(len(tmp_testcase_list)-1, -1, -1):  # 从后向前简化能够减少迭代的次数
            tmp = tmp_testcase_list[:]
            # print(f"正在精简第{row+1}行")
            tmp.pop(row)
            removable = simplifyTestcaseCore.is_removable(init_result, "\n".join(tmp), with_output_info=with_output_info)
            if removable:
                # print(f"第 {row+1} 成功的被精简")
                tmp_testcase_list = tmp[:]  # 简化成功
        if len(testcase_last_list) == len(tmp_testcase_list):  # 已经无法精简了
            # 这一轮无法被精简，下一轮也不可能被精简
            break
        testcase_last_list = tmp_testcase_list[:]
        # print(f"第 {loop_counter} 轮精简有效")
    reduced_testcase = "\n".join(testcase_last_list)
    if original_testcase != reduced_testcase:
        return reduced_testcase
    else:
        return None

