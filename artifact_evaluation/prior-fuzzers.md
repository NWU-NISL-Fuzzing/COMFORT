## Fuzzilli

* Before running, you should setup the environment variable on the host machine using the following command:

```bash
    sudo sysctl -w 'kernel.core_pattern=|/bin/false'
```

* Using the following command to execution:

```bash
    cd /root/software/fuzzers/fuzzilli
    swift run -c release -Xlinker='-lrt' FuzzilliCli --profile=jerryscript --storagePath=/root/software/fuzzers/fuzzilli/data /root/software/fuzzers/additional_engines/jerryscript/build/bin/jerry
```

Please note that you should set the new `storagePath` for each running to avoid throwing exception.


## DeepSmith

**首先需要切换到另一个conda环境：**
* First, it should switch another conda environment using the below commands:

```bash
conda deactivate
conda activate pytorch
```


* Next, training the model using the following commands:

```bash
cd /root/software/fuzzers/DeepSmithNISL
python train.py --workspace=default --data_path=/root/data/top10000.txt --epoch=10  --save_every_epoch=10
```

The default save path of the trained model is stored to `/root/software/fuzzers/DeepSmithNISL/workspace/default`


* Finally, using the following commands to generate the JS test cases:

```python
cd /root/software/fuzzers/DeepSmithNISL
python gen.py --gen_model=workspace/default/model_10.ckpt --gen_file=gen_test.txt --gen_number=32 --gen_batch_size=32 
```

The generated JS program will be stored to `/root/software/fuzzers/DeepSmithNISL/workspace/default/gen_test.txt`.
