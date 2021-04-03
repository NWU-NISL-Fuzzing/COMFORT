# This utility file parses the argument passed to the test program generation model. 

import argparse


class Hparams:
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
