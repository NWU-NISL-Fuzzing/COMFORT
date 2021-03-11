import argparse


class Hparams:
    parser = argparse.ArgumentParser()
    # data
    parser.add_argument('--input_path', default='/root/data/generated_data/complete_testcases', type=str)
    parser.add_argument('--save_path', default='/root/data/mutation_result', type=str)
