# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: errorinfo_db_operation.py
@date: 2021/3/5 16:04
@desc: 
"""

import pymysql

pymysql.install_as_MySQLdb()
import json
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class ErrorType(Base):
    # table name：'exists_errortype'
    __tablename__ = 'exists_errortype'

    # Specify the class name and type for each attribute
    # Note that a String is a varchar in MySQL, which is a variable length String
    id = Column(Integer, primary_key=True, autoincrement=True)
    error_type = Column(Integer)
    engine = Column(String(100))
    error_info = Column(Text)
    error_api = Column(String(50))
    count = Column(Integer, default=1)

    # Override the toString ()
    def __repr__(self):
        return f"<ErrorType(engine='{self.engine}', error_info='{self.error_info}', error_api='{self.error_api}')>"


class DataBase:

    def __init__(self, db_path_url: str) -> None:
        # Create the database connection and base mapping classes
        self.engine = create_engine(db_path_url, echo=False)
        # If it exists, use the existing database
        Base.metadata.create_all(self.engine, checkfirst=True)

    # drop the table
    def drop_all_table(self):
        Base.metadata.drop_all(self.engine)

    # Clear the table "exists_errortype"
    def drop_all_recorders(self):
        Session = sessionmaker(bind=self.engine)
        session = Session()
        try:
            session.execute('TRUNCATE TABLE ' + ErrorType.__tablename__ + ";")
            session.commit()
        except Exception as e:
            pass
        finally:
            session.close()

    # Insert a piece of data
    def add(self, ErrorType: ErrorType) -> int:
        Session = sessionmaker(bind=self.engine)
        session = Session()
        type_id = 0
        try:
            session.add(ErrorType)
            session.flush()
            type_id = ErrorType.id
            session.commit()
        except Exception as e:
            pass
        finally:
            session.close()
            return type_id

    def query_and_compare(self, _ErrorType: ErrorType) -> [bool, int]:
        Session = sessionmaker(bind=self.engine)
        session = Session()
        flag = True
        type_id = 0

        # Query all possible results.
        # All_possible_results records the query results;
        # When there is no result, All_possible_results is an empty list []
        try:
            all_possible_results = session.query(ErrorType).filter(
                ErrorType.error_type == _ErrorType.error_type,
                ErrorType.engine == _ErrorType.engine,
                ErrorType.error_api == _ErrorType.error_api
            ).all()

            # Compare all possible outcomes item by item：
            # If it already exists, increment its count value by 1, and simply break the loop and return False,
            # indicating that this example has been seen
            # If it does not exist, it directly returns True, indicating that the example is new and
            # has not been seen before
            for possible_result in all_possible_results:  # Here, Possible Result is a record in the database table
                if DataBase.compare_two_dicts(json.loads(_ErrorType.error_info),
                                              json.loads(possible_result.error_info)):
                    flag = False
                    type_id = possible_result.id

                    possible_result.count += 1
                    session.commit()
                    break
        except Exception:
            pass
        finally:
            session.close()
            return flag, type_id

    def query_all(self, entity):
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
            Compare the common keys of two dictionaries to see if all values are the same, not all keys
            Args:
                dict_a ():
                dict_b ():

            Returns:
                Boolean value: Returns True if the value is the same, otherwise returns False
            """
        # Gets the dictionary's public key
        common_keys = dict_a.keys() & dict_b.keys()

        # If there is no public key, it simply returns False.
        if len(common_keys) == 0:
            return False

        # If a public key exists, then the value of each public key is traversed and compared
        flag = True
        for key in common_keys:
            if dict_a[key] != dict_b[key]:
                flag = False

        return flag

