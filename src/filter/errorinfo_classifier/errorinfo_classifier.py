# -*- coding: utf-8 -*-
# 
# @Version: python 3.7
# @File: errorinfo_classifier.py
# @Author: ty
# @E-mail: nwu_ty@163.com
# @Time: 2020/4/8
# @Description: 用来对可疑用例进行分类的方法
# @Input:
# @Output:
#

import typing
import json

from src.filter.errorinfo_classifier.errorinfo_db_operation import ErrorType


def errorinfo_classify(info_list: typing.List, db_connection) -> [bool, int]:
    """
    用来对可疑用例进行分类的方法入口，对传入的数据与数据库中的数据比对（若数据库不存在则会自动创建）
    假如已存在则直接返回False；假如不存在则将本新类型插入数据库，并返回True
    Args:
        info_list (): 一个五元list，内容是 [id, engine, errorInfo, errorApi]
            id:         int，本条可疑用例在result.db中的id号
            engine:     str，引擎名称
            errorInfo:  dict，引擎的报错信息
            errorApi:   str，报错的api名称
            errorType:  int，本条可疑用例的类型标记

        db_connection (): 数据库连接，此连接从调用处传入，以提高查询效率

    Returns:
        [result, type_id]
        result：布尔值：True说明此例是新类型，需要被人工分析
                False说明此例在数据库中已经存在，不需要人工分析
        type_id：该用例在此数据库中的id
                特殊返回值0，表示该数据是新类，但是由于长度过长导致插入发生异常，之后再单独拿出来看，故以0为标记
    """

    # 1.解析出各项内容，并组装成对象，注意我们这里并不需要info_list[0]:id
    # _id = info_list[0]
    engine_name = info_list[1]
    error_info = json.dumps(info_list[2])  # 4-15更新：现在的 info_list[2] 是一个字典，需要将其转化为字符串
    error_api = info_list[3]
    error_type = info_list[4]  # 4-17更新：新增错误类型字段
    Error = ErrorType(engine=engine_name, error_info=error_info, error_api=error_api, error_type=error_type)

    # 2.查询数据库，是否存在该类型
    result, type_id = db_connection.query_and_compare(Error)

    # 若result为 True，说明这是新类型。那么就向数据库中新增该类型，并获取到其插入后的id
    if result:
        type_id = db_connection.add(Error)

    return [result, type_id]


# 测试
# if __name__ == '__main__':
#     errorinfo_classify([1, 'test', 'test', 'test'])