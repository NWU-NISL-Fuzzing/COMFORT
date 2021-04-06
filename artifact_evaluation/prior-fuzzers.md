Here, we describe how to use other fuzzers to generate JS test cases for differential testing. Once the test cases are genearted and saved to a directory, you can then use the differential testing intructions described [here](./README.md#dftest) to perform differential testing using the generated test case. 

*Note that the following steps for running other fuzzers were only tested on a host machine running Ubuntu 18.04.*

## Setup
Please download and load the full docker image (80+GB uncompressed) from [here ](https://drive.google.com/drive/folders/1JkS2S4GOCPdicQsbDeqlkzXO4tZ-2Iyg?usp=sharing).
Following the instructions [here](./README.md#loaddi) to load the docker image. 


## Fuzzilli

### Setup
* Before running, you should setup the environment variable on *the host machine* using the following command:

```bash
    sudo sysctl -w 'kernel.core_pattern=|/bin/false'
```

### Generating test cases
* Using the following command running in our docker container to generate test cases:

```bash
    cd /root/software/fuzzers/fuzzilli
    swift run -c release -Xlinker='-lrt' FuzzilliCli --profile=jerryscript --storagePath=/root/software/fuzzers/fuzzilli/data /root/software/fuzzers/additional_engines/jerryscript/build/bin/jerry
```

Remember to pass in the  `storagePath` argument for each run.


## DeepSmith
### Training DeepSmith for JS Test Program Generation
* Switch to another conda environment by running the below commands in bash of our docker container. 

```bash
conda deactivate
conda activate pytorch
```

* Next, training the model using the following commands:

```bash
cd /root/software/fuzzers/DeepSmithNISL
python train.py --workspace=default --data_path=/root/data/top10000.txt --epoch=10  --save_every_epoch=10
```

The trained model is saved to `/root/software/fuzzers/DeepSmithNISL/workspace/default`

### Generating Test Cases

* Using the following commands to use the trained model to generate the JS test cases 

```python
cd /root/software/fuzzers/DeepSmithNISL
python gen.py --gen_model=workspace/default/model_10.ckpt --gen_file=gen_test.txt --gen_number=1024 --gen_batch_size```=32 
```

The ```--gen_number``` defines how many test programs to generate, which must be a multiply of the batch_size defined by ```--gen_batch_size```

The generated JS program are saved to `/root/software/fuzzers/DeepSmithNISL/workspace/default/gen_test.txt`.


## Montage

The following steps are executed in bash of our docker container. 


* Step 1, go to the root directory of Montage. In our docker container, this would be: 

   ```
   cd /root/software/fuzzers/montage/Montage/src/
   ```

* Step 2, use the following command running in our container to generate test cases. 

   ```
   python3 main.py --opt fuzz --config /root/software/fuzzers/montage/Montage/config.json
   ```

The generated JS test cases are stored in `/root/software/fuzzers/montage/Montage/mutationSeeds`.


## CodeAlchemist

### Test case generation
* Using the following to execute the generator in our docker container:

   ```
   screen -S fuzz
   bash /root/.bash_profile
   dotnet /root/software/fuzzers/CodeAlchemist/bin/Main.dll fuzz /root/software/fuzzers/CodeAlchemist/conf/Chakra.conf
   ```
 Press ```Ctrl+A+D``` to exit from the session.

   
* Running `modify.py` to convert the generated test cases: 

   ```
   screen -S motify
   bash /root/.bash_profile
   python /root/software/fuzzers/CodeAlchemist/motify.py /root/software/fuzzers/CodeAlchemist/data/generated_files/ 
   ```
   
Press ```Ctrl+A+D``` to exit from the session. 

The generated test cases are stored in `/root/software/fuzzers/CodeAlchemist/data/generated_files`

   

## DIE

### Setup 
* Run the following command to setup the host machine (tested on Ubuntu 18.04)

   `sudo bash -c "echo core >/proc/sys/kernel/core_pattern"`

Then, go into bash of the docker container to configure the server and the client, by following the instructions given below: 

### Configuring the server

#### Step 1 Connect to the redis server:

   ```
   /etc/init.d/ssh start
   tmux new-session -s ssh-tunneling
   ssh -L 9000:localhost:6379 serverName@serverIP
   ctrl+b+d to exit the session
   ```

#### Step 2 Preprocessing the corpus:

   ```
   cd /root/software/fuzzers/DIE
   rm -rf ./output-*
   export PATH=/usr/bin:$PATH
   ./fuzz/scripts/populate.sh ./engines/chakracore-1.11.24/out/Debug/bin/ch/ch ./DIE-corpus/ ch
   ```

### Step 3 Monitor the server status:

   ```
   tmux attach -t corpus
   ```
   
 Note that press ```ctrl+b+d``` to exit from the session. 

   

### Configure the DIE client

#### Step 1 Connect the server

   ~~~
   tmux new-session -s ssh-tunneling
   ssh -L 9000:localhost:6379 serverName@serverIP
   ~~~
   
 Press ``` ctrl+b+d``` to exit the session


#### Step 2 Start the fuzzing process to mutate the seed programs

   ```
   cd /root/software/fuzzers/DIE
   export PATH=/usr/bin:$PATH
   ./fuzz/scripts/run.sh ./engines/chakracore-1.11.24/out/Debug/ch ./DIE-corpus ch
   ```
 You can replace ```./engines/chakracore-1.11.24/out/Debug/ch``` with another JS engine. 

#### Step 3 Monitor the running:

   ```
   tmux attach -t fuzzer
   ```
Press ```ctrl+b+d``` to exit from the session

The generated test cases are stored in `/root/software/fuzzers/DIE/mutatedSeeds`.

