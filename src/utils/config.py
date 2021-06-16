import argparse
import json
import pathlib


class LoadConfig:
    @staticmethod
    def init_config(config_path: str = "/root/data/config.json"):
        if not pathlib.Path(config_path).is_file():
            raise Exception(f"Configuration file not exist: {pathlib.Path(config_path).absolute().resolve()}")
        with open(config_path, "r") as f:
            return json.load(f)


class Hparams_preprocessing:
    parser = argparse.ArgumentParser()

    parser.add_argument('--corpus_path', type=str, default=r"C:\Users\10592\Desktop\corpusPreprocess\corpus",
                        help='path to the corpus')

    parser.add_argument('--result_dir', type=str, default=r"C:\Users\10592\Desktop\corpusPreprocess\result",
                        help='logging message of preprocessing saved to here')
    parser.add_argument('--n_threads', type=int, default=8, help='CPU cores that execute code')


class Hparams_generateQualify:
    parser = argparse.ArgumentParser()

    parser.add_argument('--corpus_db', type=str, default=r"/export/nisl/qx/jsCorpusProcessing/data/corpus/corpus-20210309-FX-SF_final_result.db",
                        help='path to the corpus database')

    parser.add_argument('--jshint_db', type=str, default=r"/export/nisl/qx/jsCorpusProcessing/data/corpus/jshint_filter.db",
                        help='insert jshint filtering results to here')

    parser.add_argument('--result_dir', type=str, default=r"/export/nisl/qx/PLDI2021/COMFORT/src/CorpusProcessing/generateQualify/data/log",
                        help='output results to here')

    parser.add_argument('--n_threads', type=int, default=8, help='CPU cores that execute code')


class Hparams_Generator:
    parser = argparse.ArgumentParser()

    # mode: 'finetune' or 'generate'(default)
    parser.add_argument('--mode', default='generate', type=str, help='Running mode, either "finetune" or "generate")')

    # finetuning phase
    parser.add_argument('--data_path', default='/root/data/top10000.txt', type=str,
                        help='Finetuning data path')
    parser.add_argument('--data_prefix', default='//JavascriptTop2000Functions\n', type=str,
                        help='Finetuning data prefix')
    parser.add_argument('--gpt2_model_dir', default='/root/src/generate_model/models', type=str,
                        help='Pretrained gpt2 model path')
    parser.add_argument('--gpt2_model_name', default='117M', type=str,
                        help='Pretrained gpt2 model name, only "117M" is available')
    parser.add_argument('--finetuned_model_dir', default='/root/src/generate_model/models', type=str,
                        help='Finetuned model path')
    parser.add_argument('--finetuned_model_name', default='finetuned_model', type=str,
                        help='Finetuned model name')
    parser.add_argument('--steps', default=1000, type=int, help='Number of steps to finetune')
    parser.add_argument('--multi_gpu', default=1, type=int, help='Whether to enable GPU, 1 means enable(default)')

    # generating phase
    # note: you have to make sure nsamples % batch_size == 0
    parser.add_argument('--nsamples', default=512, type=int,
                        help='Controls the number of testcases generated, nsamples*4≈numberof testcases')
    parser.add_argument('--batch_size', default=16, type=int,
                        help='Batch size for generation(increase for GPUs, 16 is recommended for RTX 2080)')

    parser.add_argument('--use_nisl_model', default=1, type=int,
                        help="Whether to use NISL trained generate model, 1 means enable(default)")

    parser.add_argument('--top_k', default=0, type=int, help='Sample only from top k tokens')
    parser.add_argument('--top_p', default=0.0, type=float, help='Sample from top p prob (overrides top_k if nonzero)')
    parser.add_argument('--temperature', default=0.7, type=float, help='Temperature of the generated texts')
    parser.add_argument('--generate_prefix', default="//JavascriptTop2000Functions\n", type=str,
                        help='Prefix used for generation, needs to be consist with data_prefix')
    parser.add_argument('--sample_dir', default='/root/data/generated_data/original_samples', type=str,
                        help='All generated functions by gpt2 are saved in here')
    parser.add_argument('--testcase_dir', default='/root/data/generated_data/complete_testcases', type=str,
                        help='All generated testcases are saved in here')


class Hparams_Mutation:
    parser = argparse.ArgumentParser()
    # data
    parser.add_argument('--input_path', default='/root/data/generated_data/complete_testcases', type=str,
                        help='Testcases needed to be mutated are saved in here')
    parser.add_argument('--save_path', default='/root/data/mutation_result', type=str,
                        help='All mutated testcases are saved in here')


class Hparams_Evaluate:
    parser = argparse.ArgumentParser()

    parser.add_argument('--testsuite', type=str, default=r"/root/data/mutation_result",
                        help='path to the fuzzing testsuite')

    parser.add_argument('--interesting_path', type=str, default=r"/root/data/interesting_testcases",
                        help='path to the fuzzing results that require manual analysis')

    parser.add_argument('--log_save_dir', type=str, default=r"/root/data/mutation_result/log",
                        help='path to the fuzzing record')

    parser.add_argument('--clear_classifier', default=False, type=bool, help='empty the classifier database')


class Hparams_Coverage:
    parser = argparse.ArgumentParser()

    parser.add_argument('--fuzzer', type=str, default="comfort",
                        help="which fuzzer to test, there are comfort, die, fuzzilli, montage, deepsmith, codealchemist")

    parser.add_argument('--coverage_files', type=str, default=r"",
                        help='path to the directory of files that need to calculate coverage')


class Hparams_Reduce:
    parser = argparse.ArgumentParser()

    parser.add_argument('--file_path', type=str, default=r"/root/data/testcases/testcase.js",
                        help='path to the origin file')

    parser.add_argument('--file_dir', type=str, default=r"/root/data/interesting_testcases",
                        help='path to the directory of files that need to be reduced')
