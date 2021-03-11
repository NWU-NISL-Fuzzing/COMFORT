# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: errorinfo_classifier.py
@date: 2021/3/5 16:04
@desc: 
"""

import typing
import json

from FuzzingEngines.step5_filterTestcase.errorinfo_classifier.errorinfo_db_operation import ErrorType


def errorinfo_classify(info_list: typing.List, db_connection) -> [bool, int]:
    """
    Filter suspicious use cases, which compares incoming data with data in the database (automatically created if the
    database does not exist) and returns False if it already exists. Inserts the new type into the database if it does
    not exist and returns True.
    Args:
        info_list (): list of info is [id, engine, errorInfo, errorApi]
            id:         int，The ID number of this suspect use case in result.db
            engine:     str，engine name
            errorInfo:  dict，Exception message of engine
            errorApi:   str，the API related to error
            errorType:  int，type for this suspicious test case

        db_connection (): A database connection to improve query efficiency

    Returns:
        [result, type_id]
        result：True indicates that this example is a new type and needs to be analyzed manually.
                False indicates that the example already exists in the database and does not need manual analysis.
        type_id：The ID of the test case in this database
    """

    # 1.The contents are parsed out and assembled into objects
    # _id = info_list[0]
    engine_name = info_list[1]
    error_info = json.dumps(info_list[2])  # The info_list[2] is a dictionary that needs to be converted to a string.
    error_api = info_list[3]
    error_type = info_list[4]
    Error = ErrorType(engine=engine_name, error_info=error_info, error_api=error_api, error_type=error_type)

    # 2. Query the database to see if this type exists
    result, type_id = db_connection.query_and_compare(Error)

    # If result is True, this is a new type.Then add the type to the database and get its inserted ID
    if result:
        type_id = db_connection.add(Error)

    return [result, type_id]
