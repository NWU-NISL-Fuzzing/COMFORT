import argparse


class Hparams:
    parser = argparse.ArgumentParser()
    # result
    parser.add_argument('--input_path', default='/root/result/test.js', type=str)
    parser.add_argument('--save_path', default='/root/result/mutation_result', type=str)
