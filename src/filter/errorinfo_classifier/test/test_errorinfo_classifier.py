# -*- coding: utf-8 -*-
# 
# @Version: python 3.7
# @File: test_errorinfo_classifier.py
# @Author: ty
# @E-mail: nwu_ty@163.com
# @Time: 2020/4/8
# @Description: 配套的测试文件，可以直接执行
# @Input:
# @Output:
#

from tools.simplifyDifferentialTestResult.errorinfo_classifier.errorinfo_classifier import errorinfo_classify, DataBase



# 进行测试
if __name__ == '__main__':
    from tqdm import tqdm
    import json
    import time

    test_data_file = 'ty_test_data.json'
    db_path = 'mysql://debian-sys-maint:stkbZxAzV9X3D72q@10.15.0.26:3306/classify?charset=utf8'

    with open(test_data_file, encoding='utf-8') as f:
        content = json.loads(f.read())
    db_connection = DataBase(db_path)
    for i in tqdm(content):
        # 人工赋予第4和第5个参数：error_api 和 error_type
        i.append('NoApi')
        i.append(1)
        # 人工将error_info变成dict
        i[2] = {i[1]:i[2]}
        result, type_id = errorinfo_classify(i, db_connection)
        if result:
            print(f"{i[1]}{i[2]}这是新类型，已更新数据库，其typeid是{type_id}")
        else:
            print(f"{i[1]}{i[2]}这是旧类型，未更新数据库，其typeid是{type_id}")
        # time.sleep(0.3)

    print(f"测试结束，结果保存在 {db_path}.")
