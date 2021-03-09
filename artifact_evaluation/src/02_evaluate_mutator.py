import json
import os
import sys
from testcase_mutation.conf import Hparams
from testcase_mutation.mutation import Mutator

src_path = "/root/src"
os.chdir(src_path)


hparams = Hparams().parser.parse_args()
file_path = hparams.input_path
with open(file_path, 'r', encoding='utf-8') as f:
     content = f.read()
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
