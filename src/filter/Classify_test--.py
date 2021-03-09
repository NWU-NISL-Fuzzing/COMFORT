import json
import tqdm

from tools.simplifyDifferentialTestResult.classify import *
from tools.simplifyDifferentialTestResult.classify_old_db import RecordReader
from tools.simplifyDifferentialTestResult import classify_old_db

def test_get_highest_frequency():
    api, count = get_highest_frequency(["Array", "Array", "Array", "Number", "NoApi", "Number"])
    assert api == "Array"
    assert count == 3


def test_is_suspicious_result():
    with open(r"F:\documents\GitHub\NISL-APIMutation\getAPI\tools\mutationAccordingToESStandard\data\config-backup.json",
              "r") as f:
        config_instance = json.load(f)
    classifier = Classifier(config_instance)
    harness_db_path = r"F:\documents\GitHub\javascriptFuzzingData\harness_test_result\gpt-2-2nd\result.db"
    table_name = "result"
    reader = RecordReader(pathlib.Path(harness_db_path), table_name)
    indices = classify_old_db.get_index(r"F:\documents\GitHub\NISL-APIMutation\getAPI\tools\simplifyDifferentialTestResult\data\config.txt")
    for index in tqdm(indices):
        harness_result = reader.get_harness_result(index)
        classifier.is_suspicious_result(index, harness_result)
    classifier.print_statistical_results()

