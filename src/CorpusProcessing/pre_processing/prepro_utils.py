import logging
import uuid
import matplotlib.pyplot as plt
import numpy as np
import typing
import os
import sys
import subprocess
import threading
import math


#from tqdm import tqdm

#from data_preprocess.prepro.db_operation import DBOperation
#from data_preprocess.prepro.black_list import BlackList
from lib.db_operation import DBOperation
from pre_processing.black_list import BlackList


mark = "print('nwu_ty_19960317')"


def deduplicate(data: typing.List[str], mode=False) -> typing.List[str]:
    """从一个list中去除重复内容，mode为False时，不稳定但快速；mode为True时，稳定但慢速
    """
    if mode == 0:
        return list(set(data))

    elif mode == 1:
        tmp_list = list(set(data))
        tmp_list.sort(key=data.index)
        return tmp_list

    else:
        logging.info('输入的去重模式有误，请输入正确的值(0或者1)!')


def logger_config(
        prefix: str = 'NULL',
        file_level: str = 'INFO',
        console_level: str = 'INFO',
        log_file: str = 'test.log') -> typing.NoReturn:
    """设置日志，既向日志文件打印，又向控制台打印
    :param prefix: 设置日志的前缀，即[]中的内容
    :param file_level: 向日志文件中输出的日志等级
    :param console_level: 向控制台输出的日志等级
    :param log_file: 日志文件路径
    :return: 无返回值
    """
    # 获取一个Logger实例
    logger = logging.getLogger()
    logger.setLevel('NOTSET')    # 设置最低的日志级别，只有高于（包含）这个级别的日志才会被输出

    # 设置日志格式
    BASIC_FORMAT = f'[{prefix}]%(asctime)s - %(levelname)s: %(message)s'
    DATE_FORMAT = '%Y-%m-%d %H:%M:%S'
    formatter = logging.Formatter(BASIC_FORMAT, DATE_FORMAT)

    # 设置输出到控制台的handler
    chlr = logging.StreamHandler()
    chlr.setFormatter(formatter)
    chlr.setLevel(console_level)   # 设置控制台日志级别
    # 设置输出到文件的handler
    fhlr = logging.FileHandler(filename=log_file, encoding='utf-8')    # 注意这里设置日志文件的编码
    fhlr.setFormatter(formatter)
    fhlr.setLevel(file_level)    # 设置日志文件日志级别

    # 添加两个handler到logger中
    logger.addHandler(chlr)
    logger.addHandler(fhlr)


# 用来声明线程，处理数据和结果
class UndefinedFilter:

    def __init__(self, functions, n_threads):

        self.n_threads = n_threads if n_threads <= 32 else 32   # 设置线程上限为32
        # self.n_threads = n_threads   # 不设置线程上限

        # 读取function list
        contents = functions

        # 将数据处理成 groups的形式
        # 若数据能正好划分给那么多线程数
        if len(contents) % self.n_threads == 0:
            group_size = int(len(contents)/self.n_threads)
            self.groups = [contents[i*group_size:(i+1) * group_size] for i in range(self.n_threads)]
        else:
            group_size = math.floor(len(contents) / (self.n_threads-1))
            self.groups = [contents[i*group_size:(i+1) * group_size] for i in range(self.n_threads)]

            last_group = [contents[group_size*(self.n_threads-1):]]
            self.groups += last_group

        # 定义线程集合和结果集合
        self.threads = []
        self.uglifyjs_result_batches = [[] for _ in range(0, self.n_threads)]

        # 新建临时文件夹，假如已存在则先删除再新建
        tmp_dir = 'tmp'
        if os.path.exists(tmp_dir):
            for tmp_file in os.listdir(tmp_dir):
                os.remove(os.path.join(tmp_dir, tmp_file))
            os.rmdir(tmp_dir)
        os.mkdir(tmp_dir)

    def execute(self):

        # 定义若干个线程，并传入：线程号，数据集合，结果结合
        for i in range(0, self.n_threads):

            thread = FilterThread(i, self.groups, self.uglifyjs_result_batches)
            self.threads.append(thread)
            thread.start()   # start调用线程的run方法

        for i in range(0, self.n_threads):
            self.threads[i].join()   # join方法用来实现子线程与主线程的同步

        # 将所有结果集合汇集在一起，并返回
        uglifyjs_results = []
        for i in range(0, self.n_threads):
            uglifyjs_results.extend(self.uglifyjs_result_batches[i])

        return uglifyjs_results


# 本类用于创建线程实例，继承自父类threading.Thread
class FilterThread(threading.Thread):

    def __init__(self, thread_id, groups, uglifyjs_result_batches):
        """
        初始化线程实例
        :param thread_id: 线程号。type: int
        :param groups: 需要处理的整个数据组。type: [['','',''], ['','',''],...,]
        :param uglifyjs_result_batches: 存储处理结果的。type: [[], [], [], ..., []]
        """
        threading.Thread.__init__(self)
        self.thread_id = thread_id
        self.groups = groups
        self.uglifyjs_result_batches = uglifyjs_result_batches

    def run(self):
        """
        定义每个线程执行的任务的具体过程
        """

        test_file_name = 'tmp/JSHINT_TEST_CASE' + str(self.thread_id) + '.js'   # 临时文件
#	for i in tqdm(self.groups[self.thread_id]):
        for i in self.groups[self.thread_id]:

            callable = i   # callable为一个具体的function字符串
            # callable = cut(callable)   # 将 callable进行截取

            uglifyjs_flag, content = self.checking(callable, test_file_name)

            if uglifyjs_flag == 1:
                self.uglifyjs_result_batches[self.thread_id].append(content)

    def checking(self, callable, test_file_name):

        # 拼装后，写入临时文件
        callable = 'var NISLFuzzingFunc = ' + callable + ';'
        with open(test_file_name, 'a', encoding='utf-8') as f:
            f.write(callable)

        # 执行uglifyjs检查，通过则flag=1，未通过则flag=0
        if sys.platform.startswith('win'):    # 假如是windows
            cmd1 = ['timeout', '120s', 'uglifyjs', test_file_name, '-b', '-o', test_file_name]
            p1 = subprocess.Popen(cmd1, stderr=subprocess.PIPE, shell=True)
        else:    # 假如是linux
            cmd1 = ['timeout', '120s', 'uglifyjs', test_file_name, '-b', '-o', test_file_name]
            p1 = subprocess.Popen(cmd1, stderr=subprocess.PIPE)

        if ((p1.poll() is None) and p1.stderr.readline().__len__() > 0 and os.path.exists(
                test_file_name)) or not os.path.getsize(
                test_file_name):
            uglifyjs_flag = 0
        else:   # 通过了检查，此时 test_file_name中就是美化后的代码
            uglifyjs_flag = 1

        # 读取文件内容
        with open(test_file_name, 'r', encoding='utf-8') as f:
            after_uglifyjs_data = f.read().lstrip('var NISLFuzzingFunc = ').rstrip(';')

        # 删除临时文件
        os.remove(test_file_name)

        return uglifyjs_flag, after_uglifyjs_data


def uglifyjs_filter(functions: typing.List[str], threads: int):
    undefined_filter = UndefinedFilter(functions, threads)
    uglifyjs_pass = undefined_filter.execute()
    return uglifyjs_pass    # 返回通过检查的数量


def list2txt(
        total_function: typing.List[str],
        txt_path: str) -> typing.NoReturn:
    """将传入的List[str]写入到txt文件中
    """
    with open(txt_path, 'w', encoding='utf-8') as f:
        for i in total_function:
            f.write(i.strip() + '\n')


def list2txt_with_format(
        total_function: typing.List[str],
        txt_path: str,
        split_flag: str) -> typing.NoReturn:
    """将传入的List[str]写入到txt文件中，带有格式，各条之间以split_flag分隔开
    """
    with open(txt_path, 'w', encoding='utf-8') as f:
        for i in total_function:
            f.write(i.rstrip() + '\n')
            f.write(split_flag + '\n')


def list2db(total_function: typing.List[str], db_path: str) -> typing.NoReturn:
    """将传入的List[str]写入到数据库中
    """
    results = [[line.strip()] for line in total_function]
    target_db_op = DBOperation(db_path)
    target_db_op.init_db()
    target_db_op.insert(['Content'], results)
    target_db_op.finalize()


def filter_blacklist_data(
        total_function: typing.List[str]) -> typing.List[str]:
    """按照定义的不同的黑名单，过滤掉其中的垃圾数据
    """
    tmp_1 = []
    without_cover_list = BlackList.black_list_cover
    for i in total_function:
        flag = 1
        for j in without_cover_list:
            if j in i:
                flag = 0

        if flag == 1:
            tmp_1.append(i)

    # tmp_2 = []
    # without_startswith_list = BlackList.black_list_startswith
    # for i in tmp_1:
    #     flag = 1
    #     for j in without_startswith_list:
    #         if i.startswith(j):
    #             flag = 0
    #     if flag == 1:
    #         tmp_2.append(i)
    # print('经过第二步黑名单清理，剩余{}条数据'.format(len(tmp_2)))

    tmp_3 = []
    without_mixed_list = BlackList.black_list_mixed
    for i in tmp_1:
        flag = 1
        for j in without_mixed_list:
            if i.startswith(j) and 'eval' in i:
                flag = 0
        if flag == 1:
            tmp_3.append(i)

    return tmp_3


def merge_data_from_gen_files(root_dir: str) -> typing.List[str]:
    """从生成文件夹中读取合并数据，并且只保留生成正确格式的数据
    """
    file_list = [os.path.join(root_dir, file) for file in os.listdir(
        root_dir) if file.startswith('gpt2_gentext_') and file.endswith('.txt')]

    tmp = []
    for file in file_list:
        with open(file, 'r', encoding='utf-8') as f:
            contents = [i.strip() for i in f]
            tmp += contents

    # 在统计数据长度时，只保留正确生成的数据（以正确的结束符结尾）
    tmp = [line for line in tmp if line.endswith('|EndOfFunction|')]

    return tmp


def merge_data_from_gen_files_with_format(root_path: str) -> typing.List[str]:
    """从生成的多个带格式的文件中读取数据，并返回一个List
    """
    file_list = [os.path.join(root_path, file) for file in os.listdir(
        root_path) if file.startswith('gpt2_gentext_') and file.endswith('.txt')]
    tmp = []
    for file in file_list:
        with open(file, 'r', encoding='utf-8') as f:
            contents = f.read()
        block_split_list = contents.split(
            '====================\n')    # typing.List[str]

        if block_split_list[-1] == '':
            block_split_list = block_split_list[:-1]

        for block in block_split_list:
            functions_list = block.split('NWU-NISL-TY-2019\n')
            tmp += functions_list

    return tmp


def merge_data_from_files(file_dir_path: str) -> typing.List[str]:
    """去除注释之后，再将所有的文件数据进行合并，返回一个List（注意最后进行一次去重，因为去除注释后就可能相同了）
    """
    total_function = []
    tmp_file_list = [i for i in os.listdir(
        file_dir_path) if i.startswith('tmp_file_')]
    for file in tmp_file_list:
        with open(os.path.join(file_dir_path, file), 'r', encoding='utf-8') as f:
            contents = f.read()

        _function_list = contents.split(
            mark + '\n')[:-1]    # 按-1切片是因为要去掉每个文件最后的空行
        total_function += _function_list

    print('去掉注释数据并合并之后，有{}条数据'.format(len(total_function)))
    total_function = list(set(total_function))
    print('去掉注释数据并合并之后，有{}条数据'.format(len(total_function)))

    return total_function


def split_data_to_files(
        total_function: typing.List[str],
        dir_path: str) -> typing.NoReturn:
    """为了使用ScrollingWolf工具去除注释，需要先将整体数据划分成单个不超过3M的小文件，再合起来
    """

    os.mkdir(dir_path)

    threshold = 5000    # 单个文件存储的function个数
    num_of_file = math.ceil(len(total_function) / threshold)

    for i in range(num_of_file):

        if i != num_of_file - 1:
            tmp_data = total_function[i * threshold:(i + 1) * threshold]
        else:
            tmp_data = total_function[i * threshold:]

        random_file_name = 'tmp_file_' + str(uuid.uuid1()) + '.js'
        file_path = os.path.join(dir_path, random_file_name)
        with open(file_path, 'w', encoding='utf-8') as f:
            for j in tmp_data:
                f.write(j + '\n')
                f.write(mark + '\n')

    # 确认一下数据，看划分出来的数量和原始输入数量是否一致
    tmp = []
    file_list = [os.path.join(dir_path, i) for i in os.listdir(
        dir_path) if i.startswith('tmp_file_')]
    for file in file_list:
        with open(file, 'r', encoding='utf-8') as f:
            _contents = f.read().split(mark + '\n')[:-1]
        tmp += _contents

    assert len(tmp) == len(total_function)


def db2list(db_path: str) -> typing.List[str]:
    """从单个数据库文件中读取数据
    """
    source_db_op = DBOperation(db_path)
    contents = source_db_op.query_all(['Content'])
    source_db_op.finalize()
    contents = [i[0].strip() for i in contents]
    return contents


def read_data_from_db_files(db_path: str) -> typing.List[str]:
    total_function = []

    contents = db2list(db_path)
    total_function += contents

    return total_function


def read_data_from_txt_file(txt_path: str) -> typing.List[str]:
    """从单个txt文本中按行读取，并返回结果
    """
    with open(txt_path, 'r', encoding='utf-8') as f:
        contents = [i.strip() for i in f]
    return contents


def filter_english_data(function_list: typing.List[str]) -> typing.List[str]:
    """过滤掉传入的List[str]中的非英文数据，返回过滤之后的数据集
    """

    def judge_pure_english(function_str: str) -> bool:
        """判断传入的function是否为全英文，是则返回True；
        """
        return all(ord(c) < 128 for c in function_str)

    tmp = []
    for i in function_list:
        if judge_pure_english(i):
            tmp.append(i)

    return tmp


def brace_match(function_list: typing.List[str]) -> typing.List[str]:
    """将传入的List[str]做括号匹配检查，返回的是其中通过检查的数据List[str]
    """

    def cut(function_str: str) -> typing.Tuple[bool, str]:
        """判断传入的function_str是否括号完全匹配，假如是则返回True+正确的文本，
        """
        temp_str = ''
        for char in function_str:
            temp_str += char
            left = temp_str.count('{')
            right = temp_str.count('}')
            if left == right and left != 0:
                return True, temp_str
        return False, function_str

    tmp = []
    for i in function_list:
        _flag, _function_str = cut(i)
        if _flag:
            tmp.append(_function_str)

    return tmp


def cal_average(contents: typing.List[str]) -> int:
    total_length_count = 0
    for line in contents:
        total_length_count += len(line)
    avg = total_length_count / len(contents)
    print('数据的平均长度为{}'.format(avg))
    return avg


def statistic_length_distribution(
        contents: typing.List[str],
        average_length: int,
        plot_title: str) -> typing.NoReturn:
    """统计一批数据的字符串长度的分布"""
    length_list = [len(line) for line in contents]

    count_0_50 = 0
    count_50_100 = 0
    count_100_150 = 0
    count_150_200 = 0
    count_200_250 = 0
    count_250_300 = 0
    count_300_1000 = 0
    count_dayu1000 = 0
    count_lower_average = 0
    count_higher_average = 0

    for i in length_list:
        if 0 <= i < 50:
            count_0_50 += 1
        if 50 <= i < 100:
            count_50_100 += 1
        if 100 <= i < 150:
            count_100_150 += 1
        if 150 <= i < 200:
            count_150_200 += 1
        if 200 <= i < 250:
            count_200_250 += 1
        if 250 <= i < 300:
            count_250_300 += 1
        if 300 <= i < 1000:
            count_300_1000 += 1
        if i >= 1000:
            count_dayu1000 += 1
        if i <= average_length:
            count_lower_average += 1
        else:
            count_higher_average += 1

    assert count_0_50 + count_50_100 + count_100_150 + count_150_200 + \
        count_200_250 + count_250_300 + count_300_1000 + count_dayu1000 == len(contents)

    print("0_50:", count_0_50)
    print("50_100:", count_50_100)
    print("100_150:", count_100_150)
    print("150_200:", count_150_200)
    print("200_250:", count_200_250)
    print("250_300:", count_250_300)
    print("300_1000:", count_300_1000)
    print(">=1000:", count_dayu1000)
    print("在平均长度之下的数据有：", count_lower_average)
    print("在平均长度之上的数据有：", count_higher_average)

    # plotting
    scope_list = ('0_50', '50_100', '100_150', '150_200', '200_250', '250_300',
                  '300_1000', '>1000')
    value_list = [
        count_0_50,
        count_50_100,
        count_100_150,
        count_150_200,
        count_200_250,
        count_250_300,
        count_300_1000,
        count_dayu1000]

    plt.bar(
        x=np.arange(
            len(value_list)),
        height=value_list,
        tick_label=scope_list,
        width=0.5)
    # 添加数据标签
    for a, b in zip(np.arange(len(value_list)), value_list):
        plt.text(
            a,
            b +
            0.05,
            '%.0f' %
            b,
            ha='center',
            va='bottom',
            fontsize=10)

    plt.xlabel("String length")
    plt.title(plot_title)

    plt.show()

    # dayu300 = []
    # for i in contents:
    #     if len(i) >= 300:
    #         dayu300.append(i)
    # assert len(dayu300) == count_300
    #
    # return dayu300
