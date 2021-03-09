#!/usr/bin/env python
# coding=utf-8

"""
@author: xing
@contact: 1059252359@qq.com
@file: 05_coverage_calculate.py
@date: 2021/3/2 10:19
@desc: Use NYC to calculate code coverage
"""
import json
import os
import shutil
import subprocess
import sys

from FuzzingEngines.Utils.config import Hparams_Coverage

os.chdir("/root/data/codeCoverage")

def coverage(file_path):
    # calculate the coverage of simple file
    cmd = ["timeout", "-s9", "60", "/root/data/codeCoverage/node_modules/nyc/bin/nyc.js",
           "--reporter=json-summary", "--cache=false", "--report-dir=" + report_dir, "--temp-dir=" + temp_dir,
           "--clean=false", "node", file_path]
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    p.communicate()


def extractCoverage():
    parent_dir = "/root/data/codeCoverage/report"
    coverage_file = os.path.join(parent_dir, "coverage-summary.json")

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


if __name__ == '__main__':
    hparams = Hparams_Coverage().parser.parse_args()

    testcases_saved_path = hparams.coverage_files

    # NYC will only collect coverage for files that are located under pwd, so the execution path needs to be changed.
    corpus_dir = r"/root/data/codeCoverage/corpus"
    report_dir = r"/root/data/codeCoverage/report"
    temp_dir = r"/root/data/codeCoverage/nyc_output"

    if os.path.exists(corpus_dir):
        shutil.rmtree(corpus_dir)
    reset_dir(report_dir)
    reset_dir(temp_dir)

    shutil.copytree(testcases_saved_path, corpus_dir)

    i = 0
    for root, dirs, files in os.walk(corpus_dir):
        for file in files:
            file_path = os.path.join(root, file)
            if file_path.endswith(".js"):
                process = "\rprocessing: {}".format(str(i))
                sys.stdout.write(process)
                coverage(file_path)
                i += 1
    coverages = extractCoverage()
    print("\ncoverage results:")
    print("statement coverages: %s" % coverages[0])
    print("function coverages: %s" % coverages[1])
    print("branch coverages: %s" % coverages[2])
    print("line coverages: %s" % coverages[3])
    print(f"\n------------------------------------------------------")
    print("Coverage messages has been saved to '/root/data/codeCoverage/report/coverage-summary.json'")
    print(f"------------------------------------------------------\n")
