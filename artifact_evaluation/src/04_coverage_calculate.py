#!/usr/bin/env python
# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: 04_coverage_calculate.py
@date: 2021/3/2 10:19
@desc: Use NYC to calculate code coverage
"""
import json
import os
import shutil
import subprocess
import sys
import time


from FuzzingEngines.Utils.config import Hparams_Coverage

os.chdir("/root/data/codeCoverage")


def coverage(report_dir, temp_dir, file_path):
    # calculate the coverage of simple file and report the total coverage
    cmd = ["timeout", "-s9", "60", "/root/data/codeCoverage/node_modules/nyc/bin/nyc.js",
           "--reporter=json-summary", "--cache=false", "--report-dir=" + report_dir, "--temp-dir=" + temp_dir,
           "--clean=false", "node", file_path]
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    p.communicate()


def jshint_checking(file_path):
    # 进行uglifyjs过滤
    cmd = ['timeout', '60s', 'node', '--max_old_space_size=4096', '/root/data/codeCoverage/node_modules/jshint/bin/jshint',
           file_path]
    if sys.platform.startswith('win'):  # 假如是windows
        p1 = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
    else:  # 假如是linux
        p1 = subprocess.Popen(cmd, stdout=subprocess.PIPE)
    stdout = p1.communicate()[0]
    if stdout.__len__() > 0:
        jshint_flag = 0
    else:  # 通过了检查，此时 test_file_name中就是美化后的代码
        jshint_flag = 1

    return jshint_flag


def extractCoverage(coverage_file):
    with open(coverage_file, "r", encoding="utf-8") as f:
        content = f.read()
    coverage_message = json.loads(content)
    statement_cov = coverage_message['total']["statements"]['pct']
    function_cov = coverage_message['total']["functions"]['pct']
    branch_cov = coverage_message['total']["branches"]['pct']
    line_cov = coverage_message['total']["lines"]['pct']

    return [statement_cov, function_cov, branch_cov, line_cov]


def reset_dir(dir_path):
    if not os.path.exists(dir_path):
        os.mkdir(dir_path)
    else:
        shutil.rmtree(dir_path)
        os.mkdir(dir_path)


def copy_files(src, target):
    reset_dir(target)
    for root, dirs, files in os.walk(src):
        for file in files:
            src_file = os.path.join(root, file)
            shutil.copy(src_file, target)


if __name__ == '__main__':
    hparams = Hparams_Coverage().parser.parse_args()

    parent_dir = "/root/data/codeCoverage"
    reporter_path = hparams.reporter_dir
    fuzzer = hparams.fuzzer
    coverage_files = hparams.coverage_files

    if coverage_files:
        if os.path.isdir(coverage_files):
            corpus_dir = r"/root/data/codeCoverage/self_defining_generate"
            copy_files(src=coverage_files, target=corpus_dir)
        else:
            print("please input the correct directory of test files")
            sys.exit(0)
    else:
        # NYC will only collect coverage for files that are located under pwd, so the execution path needs to be changed.
        corpus_dir = os.path.join(parent_dir, fuzzer+"_generate")

    report_dir = os.path.join(parent_dir, "report")
    temp_dir = os.path.join(parent_dir, "nyc_output")
    reset_dir(report_dir)
    reset_dir(temp_dir)

    total = 0
    for root, dirs, files in os.walk(corpus_dir):
        for file in files:
            file_path = os.path.join(root, file)
            if file_path.endswith(".js"):
                total += 1

    i = 0
    jshint_pass = 0
    for root, dirs, files in os.walk(corpus_dir):
        for file in files:
            file_path = os.path.join(root, file)
            if file_path.endswith(".js"):
                process = "\rprocessing: {current}/{total}".format(current=str(i+1), total=total)
                sys.stdout.write(process)
                coverage(report_dir, temp_dir, file_path)
                if jshint_checking(file_path):
                    jshint_pass += 1
                i += 1

    coverage_file = os.path.join(report_dir, "coverage-summary.json")

    # get the current time
    now = time.localtime()
    nowt = time.strftime("%Y-%m-%d-%H_%M_%S", now)
    reporter_path = os.path.join(reporter_path, nowt + "_" + fuzzer + ".json")
    with open(reporter_path, "w", encoding="utf-8") as f:
        f.write(open(coverage_file, "r").read())

    coverages = extractCoverage(coverage_file)
    print("\n\njshint passing rate: %s" % str(round(jshint_pass/total, 4) * 100))
    print("\ncoverage rate results:")
    print("statement coverages: %s" % coverages[0])
    print("function coverages: %s" % coverages[1])
    print("branch coverages: %s" % coverages[2])
    print("line coverages: %s" % coverages[3])
    print(f"\n------------------------------------------------------")
    print(f"Coverage messages has been saved to {reporter_path}'")
    print(f"------------------------------------------------------\n")
