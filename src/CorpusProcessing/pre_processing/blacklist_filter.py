# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: blacklist_filter.py
@date: 2021/3/3 10:06
@desc: 
"""
import re

from pre_processing.prepro_utils import *
from pre_processing.email_sender import *


def removeDross(dir_path, source_db_path, before_uglifyjs_db_path, after_uglifyjs_db_path):

    # 读取数据
    total_data = read_data_from_db_files(source_db_path)

    # 1. 再去掉一部分超长的数据
    after_too_long_data = [i for i in total_data if not len(i) > 100000]
    logging.info(f'·After removing the data with rows greater than 10W, remaining: {len(after_too_long_data)}')

    # 2. 过滤掉所有nock类数据，该类数据没有什么意义
    after_nock_data = [i for i in after_too_long_data if not i.startswith('function(nock')]
    logging.info(f'·After removing the Nock data, remaining: {len(after_nock_data)}')

    # 3. 过滤掉形如 function(...) {}的数据
    after_immediate_data = []
    discarded_functions = []
    pattern_1 = re.compile('^function(.*?){}$')
    for function in after_nock_data:
        if re.match(pattern_1, function) is not None:
            discarded_functions.append(function)
        else:
            after_immediate_data.append(function)
    logging.info(f'After removing the function(...), remaining: {len(after_immediate_data)}')

    # 4. 过滤掉其中所有非英文数据
    after_english_data = filter_english_data(after_immediate_data)
    logging.info(f'·After removing all non-English data, remaining: {len(after_english_data)}')

    # 5. 按黑名单内容过滤
    after_blacklist_filter_data = filter_blacklist_data(after_english_data)
    logging.info(f'·After removing the data in the blacklist, remaining: {len(after_blacklist_filter_data)}')

    # 5.5 暂存一下
    if not os.path.exists(dir_path):
        os.mkdir(dir_path)
    list2db(after_too_long_data, os.path.join(dir_path, before_uglifyjs_db_path))    # total_data_guolvhou.db，共288665条。uglifyjs美化后剩余288564条

    # 6. 利用uglifyjs去除注释以及美化（格式化）,存入数据库备份
    # 此处应当注意 uglifyjs安装的路径，必要时需要进入uglifyjs_filter中修改
    after_uglifyjs_data = uglifyjs_filter(after_blacklist_filter_data, 32)
    after_uglifyjs_data = deduplicate(after_uglifyjs_data)    # 采用不稳定去重
    list2db(after_uglifyjs_data, os.path.join(dir_path, after_uglifyjs_db_path))
    logging.info(f'·After deannotating, beautifying, and deduplicating, remaining: {len(after_uglifyjs_data)}')

    # # 执行完成后邮件告知
    # EmailSender = email_sender('1059252359@qq.com')
    # EmailSender.send_main()