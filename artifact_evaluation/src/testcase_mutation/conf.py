import argparse


class Hparams:
    parser = argparse.ArgumentParser()
    # data
    parser.add_argument('--input_path', default='/root/data/test.js', type=str)
    parser.add_argument('--save_path', default='/root/data/mutation_result', type=str)
