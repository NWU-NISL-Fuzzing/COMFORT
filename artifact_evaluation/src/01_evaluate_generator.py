import gpt_2_simple as gpt2
import time
import shutil
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'  # Mask prompts for TensorFlow

from uuid import uuid4

from generate_model.callable_processor import CallableProcessor
from generate_model.conf import Hparams


def transform(value):
    return value == 1


def info_print(str):
    print(f"\033[1;34;48m{str}\033[0m")


def gpt2_finetune(hparams):
    info_print("Model finetuning, please wait. (Press Ctrl+C to exit early)")
    sess = gpt2.start_tf_sess()

    # input check
    if not os.path.exists(os.path.join(hparams.gpt2_model_dir, hparams.gpt2_model_name)):
        raise FileNotFoundError("The specified gpt2 pretrained model doesn't exist, please restore the default params.")

    # clear checkpoint dir
    model_path = os.path.join(hparams.finetuned_model_dir, hparams.finetuned_model_name)
    if os.path.exists(model_path):
        shutil.rmtree(model_path)

    gpt2.finetune(sess=sess,
                  dataset=hparams.data_path,
                  model_dir=hparams.gpt2_model_dir,
                  model_name=hparams.gpt2_model_name,
                  checkpoint_dir=hparams.finetuned_model_dir,
                  run_name=hparams.finetuned_model_name,
                  multi_gpu=transform(hparams.multi_gpu),
                  steps=hparams.steps)


def function_generate(hparams, saved_file_path):
    sess = gpt2.start_tf_sess()
    sess = gpt2.reset_session(sess)

    # determine the generate model to use
    if hparams.use_nisl_model == 1:
        info_print('The NISL model is selected.')
        generate_model_dir = '/root/src/generate_model/models'
        generate_model_name = 'nisl_model'
    else:
        # model check
        info_print('The new model is selected.')
        generate_model_dir = hparams.finetuned_model_dir
        generate_model_name = hparams.finetuned_model_name
        if not os.path.exists(os.path.join(generate_model_dir, generate_model_name)):
            raise FileNotFoundError("The specified model doesn't exist, please finetune first or set 'use_nisl_model=1'")
    time.sleep(2)

    info_print("Generating JS test program (approx 15 minutes with gpus- including model load time)...\n")

    gpt2.load_gpt2(sess,
                   model_dir=generate_model_dir,
                   model_name=generate_model_name,
                   multi_gpu=transform(hparams.multi_gpu))

    if hparams.nsamples % hparams.batch_size != 0:
        raise ValueError('you have to make sure nsamples % batch_size == 0, please enter again!')
    all_functions = []
    batches = int(hparams.nsamples / hparams.batch_size)

    for i in range(batches):
        texts = gpt2.generate(sess,
                             model_dir=generate_model_dir,
                             model_name=generate_model_name,
                             nsamples=hparams.batch_size,
                             batch_size=hparams.batch_size,
                             prefix=hparams.generate_prefix,
                             top_p=hparams.top_p,
                             top_k=hparams.top_k,
                             temperature=hparams.temperature,
                             include_prefix=True,
                             return_as_list=True)

        for text in texts:
            functions = text.split(hparams.generate_prefix)[1:]

            # get rid of the last one to prevent syntax errors
            if len(functions) >= 2:
                functions = functions[:-1]

            all_functions += functions

            # print
            for function in functions:
                print(function)
                print('=' * 50)

        info_print(f'Generating {i+1}/{batches}.')

    # save all generated functions by gpt2 to a new file
    all_functions = [i.strip() + '\n' for i in all_functions]
    with open(saved_file_path, 'w', encoding='utf-8') as f:
        f.write(('='*50 + '\n').join(all_functions))

    return all_functions


def testcase_assemble(functions, testcases_saved_path):
    info_print(f"Assembly test program (approx 30 seconds)...\n")
    time.sleep(2)
    callable_processor = CallableProcessor()
    testcases = []
    for function in functions:
        testcases.append(callable_processor.get_self_calling(function))

    # print info
    info_print(f"Test program after creating the calling routine：\n")
    for testcase in testcases:
        print(testcase)
        print('=' * 50)

    # save all testcase to a new file
    testcases = [i.strip() + '\n' for i in testcases]
    with open(testcases_saved_path, 'w', encoding='utf-8') as f:
        f.write(('='*50 + '\n').join(testcases))

    return testcases


if __name__ == '__main__':
    hparams = Hparams().parser.parse_args()

    if transform(hparams.multi_gpu):
        info_print('GPU enabled.')
    else:
        info_print('GPU disabled.')
    time.sleep(3)

    if hparams.mode == 'finetune':
        gpt2_finetune(hparams)
    elif hparams.mode == 'generate':

        # generate JS function by gpt2
        start_time = time.time()
        samples_saved_path = os.path.join(hparams.sample_dir, f'{uuid4()}.txt')
        generated_functions = function_generate(hparams, samples_saved_path)

        # assemble JS testcase
        testcases_saved_path = os.path.join(hparams.testcase_dir, f'{uuid4()}.txt')
        testcase_assemble(generated_functions, testcases_saved_path)
        end_time = time.time()
        info_print(f"A total of {len(generated_functions)} testcases were generated, taking {int(end_time-start_time)} seconds.")
        info_print(f"All generated functions by gpt2 are saved in: {samples_saved_path}")
        info_print(f"All generated testcases are saved in: {testcases_saved_path}")

    else:
        raise ValueError('The "mode" parameter is invalid. Please enter it again!')
