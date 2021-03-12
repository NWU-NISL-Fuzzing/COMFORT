# Corpus Preprocessing and Code Evaluation

## Environemnts
- Nodejs 12.18.3
- Python 3.6.8

## Corpus preprocessing
[This module](./pre_processing/README.md) can automatically extract the JS functions from the JS Corpus collected from GitHub.
语料库预处理部分实现了从github仓库中提取JS函数，创建模糊测试的原始语料库。代码评估模块实现对测试用例的质量评估，以辅助生成模型的选择。

## Code Evaluation
[This module](./generateQualify/README.md) is the program that evaluates the quality of the generated test cases.
