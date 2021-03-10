import os
import random
import shutil
from testcase_mutation.conf import Hparams
from testcase_mutation.mutation import Mutator


def setdir(filepath):
    if not os.path.exists(filepath):
        os.mkdir(filepath)
    else:
        shutil.rmtree(filepath)
        os.mkdir(filepath)

def save_files_from_file(js_file):
    with open(js_file, 'r', encoding='utf-8') as f:
         content = f.read()
    print(f"The original testcase is:")
    print(content)

    print(f"Test case mutation (approx 1 minute)...\n")
    mutator = Mutator()
    testcase_list = mutator.mutate(content)
    counter = 0
    for i in testcase_list:
        print('=' * 50)
        print(i)
        mutation_file = os.path.join(hparams.save_path, str(counter) + ".js")
        with open(mutation_file, "w", encoding='utf-8') as f:
            f.write(i)
            f.close()
        counter += 1

def save_files_from_dir(js_file, file_name):
    with open(js_file, 'r', encoding='utf-8') as f:
         content = f.read()

    print('=' * 50)
    print(f"The original testcase is:")
    print(content)

    print(f"Test case mutation (approx 1 minute)...\n")
    mutator = Mutator()
    testcase_list = mutator.mutate(content)
    counter = 0
    for i in testcase_list:
        print('=' * 50)
        print(i)
        mutation_file = os.path.join(hparams.save_path, os.path.splitext(file_name)[0]+ "-" + str(counter) + ".js")
        with open(mutation_file, "w", encoding='utf-8') as f:
            f.write(i)
            f.close()
        counter += 1
    print('=' * 50)
    return counter

if __name__ == "__main__":
    hparams = Hparams().parser.parse_args()
    setdir(hparams.save_path)
    file_path = hparams.input_path

    if os.path.isfile(file_path):
        js_file = file_path
        save_files_from_file(js_file)
        print('=' * 50)
        print(f"The mutated results are stored in {hparams.save_path}.")

    elif os.path.isdir(file_path):
        file_list = os.listdir(file_path)
        js_file_path = os.path.join(file_path, random.choice(file_list))
        # print(js_file_path)
        js_files = os.listdir(js_file_path)
        mutation_number = 0
        mutation_tase_case = []
        for i in js_files:
            js_file = os.path.join(js_file_path, i)
            mutation_result = save_files_from_dir(js_file, i)
            if mutation_result:
                mutation_number += 1
                mutation_tase_case.append(i)
            else:
                print("This test case can not be mutated.")
        print('=' * 50)
        print(f"The folder used for mutation is {js_file_path}, and there are {len(js_files)} files in it.")
        print(f"There are {mutation_number} test cases that can be mutated, the number is {mutation_tase_case}.")
        print(f"The mutated results are stored in {hparams.save_path}.")