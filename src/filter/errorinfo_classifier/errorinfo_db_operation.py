# -*- coding: utf-8 -*-
# 
# @Version: python 3.7
# @File: errorinfo_db_operation.py
# @Author: ty
# @E-mail: nwu_ty@163.com
# @Time: 2020/4/8
# @Description: 配套的数据库相关操作，借助sqlalchemy库以ORM方式存取
# @Input:
# @Output:
#
import pymysql
pymysql.install_as_MySQLdb()
import json
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


# 定义实体类 ErrorType
class ErrorType(Base):

    # 指定表名：'exists_errortype'
    __tablename__ = 'exists_errortype'

    # 指定各属性对应的类名及类型
    # 注意这里的String映射到MySQL中的话是 varchar，属于变长字符串
    id = Column(Integer, primary_key=True, autoincrement=True)
    error_type = Column(Integer)
    engine = Column(String(100))
    error_info = Column(Text)
    error_api = Column(String(50))
    count = Column(Integer, default=1)

    # 重写toString()
    def __repr__(self):
        return f"<ErrorType(engine='{self.engine}', error_info='{self.error_info}', error_api='{self.error_api}')>"


class DataBase:

    def __init__(self, db_path_url: str) -> None:
        # 创建数据库连接和基本映射类
        self.engine = create_engine(db_path_url, echo=False)
        # 创建数据库，假如存在就用已存在的
        Base.metadata.create_all(self.engine, checkfirst=True)

    def add(self, ErrorType: ErrorType) -> int:
        # 获取Session及其实例
        Session = sessionmaker(bind=self.engine)
        session = Session()
        # type_id表示插入后的id，默认为0
        type_id = 0
        # 插入数据
        try:
            session.add(ErrorType)
            session.flush()
            type_id = ErrorType.id
            # 提交
            session.commit()
        except Exception as e:
            pass
        finally:
            session.close()
            return type_id

    def query_and_compare(self, _ErrorType: ErrorType) -> [bool, int]:
        # 获取Session及其实例
        Session = sessionmaker(bind=self.engine)
        session = Session()
        flag = True
        type_id = 0

        # 根据引擎名称和API信息，查询所有可能的结果
        # 当查询的有结果时，all_possible_results是一个记录列表；当无结果时，是一个空列表 []
        try:
            all_possible_results = session.query(ErrorType).filter(
                ErrorType.error_type == _ErrorType.error_type,
                ErrorType.engine == _ErrorType.engine,
                ErrorType.error_api == _ErrorType.error_api
                ).all()

            # 对所有可能结果逐条比较：
            # 假如遇到同类，则将其 count 值加1，并直接打破循环并返回 False，表示此例已见过
            # 假如遇不到同类，则返回直接返回 True，表示此例是新的，没有见过
            for possible_result in all_possible_results:  # 这里的 possible_result 是数据库表中的一条记录
                if DataBase.compare_two_dicts(json.loads(_ErrorType.error_info), json.loads(possible_result.error_info)):
                    flag = False
                    type_id = possible_result.id

                    # count+1，并提交
                    possible_result.count += 1
                    session.commit()
                    break
        except Exception:
            pass
        finally:
            session.close()
            return flag, type_id

    def query_all(self, entity):
        # 获取Session及其实例
        Session = sessionmaker(bind=self.engine)
        session = Session()
        result = None
        try:
            result = session.query(entity).all()
        except Exception:
            pass
        finally:
            session.close()
            return result

    @staticmethod
    def compare_two_dicts(dict_a, dict_b):
        """
            比较两个字典的公共键的值是否全部相同，并非比较所有键
            Args:
                dict_a (): 字典A
                dict_b (): 字典B

            Returns:
                布尔值：相同则返回 True，否则返回 False
            """
        # 获取到字典的公共键，是set形式
        common_keys = dict_a.keys() & dict_b.keys()

        # 假如没有公共键，则直接返回 False，表明不相同
        if len(common_keys) == 0:
            return False

        # 假如存在公共键，则遍历每一个公共键的值，进行比较
        flag = True
        for key in common_keys:
            if dict_a[key] != dict_b[key]:
                flag = False

        return flag

