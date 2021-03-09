# -*- coding: utf-8 -*-
# 
# @Version: python 3.7
# @File: doubtfulTestcase_db_operation.py
# @Author: ty
# @E-mail: nwu_ty@163.com
# @Time: 2020/4/13
# @Description: 
# @Input:
# @Output:
#

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

# 定义实体类 DoubtfulTestcase
class DoubtfulTestcase(Base):

    # 指定表名：'doubtfulTestcaseInfo'
    __tablename__ = 'doubtfulTestcaseInfo'

    # 指定各属性对应的类名及类型
    # 注意这里的长度应该是变长的，我指定100和1000也只是为了以防万一
    # count_id = Column(Integer, primary_key=True, autoincrement=True)
    id = Column(Integer, primary_key=True)   # 将 id 设为主键，防止数据重复插入
    engine_name = Column(String(100))
    key_exception = Column(String(1000), default='')  # 注意这里，假如没提取出来，则为空字符串


class DataBase:

    def __init__(self, db_path: str) -> None:
        # 创建数据库连接和基本映射类
        self.engine = create_engine(f'sqlite:///{db_path}', echo=False)
        # 创建数据库，假如存在就用已存在的
        Base.metadata.create_all(self.engine, checkfirst=True)

    def add(self, DoubtfulTestcase: DoubtfulTestcase) -> None:
        # 获取Session及其实例
        Session = sessionmaker(bind=self.engine)
        session = Session()

        # 插入并提交
        session.merge(DoubtfulTestcase)
        session.commit()

    def queryAll(self, entity):
        # 获取Session及其实例
        Session = sessionmaker(bind=self.engine)
        session = Session()
        return session.query(entity).all()
