The following steps for running other fuzzers were tested on a host machine running Ubuntu 18.04. 

## Fuzzilli

* Before running, you should setup the environment variable on *the host machine* using the following command:

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


## Montage

* Step 1, go to the root directory of Montage, e.g.,：

   ```
   cd /root/software/fuzzers/montage/Montage/src/
   ```

* Step 2, preprocessing and configuration using the following command:

   ```
   python3 main.py --opt preprocess --config /root/software/fuzzers/montage/Montage/config.json
   ```

* Step 3, training the model using the following commnd:

   ```
   python3 main.py --opt train  --config /root/software/fuzzers/montage/Montage/config.json
   ```

* Step 4, building the mapping table using the following commnd:

   ```
   python3 main.py --opt build_map --config /root/software/fuzzers/montage/Montage/config.json
   ```

* Step 5, modifying the fuzz funtion of the `fuzz.py` in `/root/software/fuzzers/montage/Montage/src/fuzz/` as follows:

  ```
       mutation_save_dir = "root/software/fuzzers/montage/Montage/mutationSeeds"
       if os.path.exists(mutation_save_dir):
         shutil.rmtree(mutation_save_dir)
         os.mkdir(mutation_save_dir)
       file_name = "samples_" + ''.join(random.sample(string.ascii_letters + string.digits, 16)) + ".js"
       file_path = os.path.join(mutation_save_dir, file_name)
       model = load_model(self._model_path)
   
       printer = CodePrinter(self._bug_dir)
   
       while True:
         js_path = self.gen_code(printer, model)
         if js_path == None: continue
         js_path = os.path.abspath(js_path)
         with open(js_path, "r", encoding="utf-8") as f:
           content = f.read()
         with open(file_path, "w", encoding="utf-8") as w:
           w.write(content)
         self.exec_eng(js_path)
   ```

Step 6, execution:

   ```
   python3 main.py --opt fuzz --config /root/software/fuzzers/montage/Montage/config.json
   ```

The generated JS test cases are stored in `/root/software/fuzzers/montage/Montage/mutationSeeds`.


## CodeAlchemist

* Using the following to execute the generator:

   ```
   screen -S fuzz
   bash /root/.bash_profile
   dotnet /root/software/fuzzers/CodeAlchemist/bin/Main.dll fuzz /root/software/fuzzers/CodeAlchemist/conf/Chakra.conf
   Ctrl+A+D to exit
   ```

   
* Running `modify.py` to transfer the generated test cases: 

   ```
   screen -S motify
   bash /root/.bash_profile
   python /root/software/fuzzers/CodeAlchemist/motify.py /root/software/fuzzers/CodeAlchemist/data/generated_files/ 
   Ctrl+A+D to exit
   ```

The generated test cases are stored in `/root/software/fuzzers/CodeAlchemist/data/generated_files`

   

## DIE (Unfinshed)

* First, it should run the following command on the host machine: 

   `sudo bash -c "echo core >/proc/sys/kernel/core_pattern"`

**Configuring the server side**

Step 1 Connect the redis server:

   ```
   /etc/init.d/ssh start
   tmux new-session -s ssh-tunneling
   ssh -L 9000:localhost:6379 serverName@serverIP
   ctrl+b+d to exit the session
   ```

Step 2 Preprocessing the corpus:

   ```
   cd /root/software/fuzzers/DIE
   rm -rf ./output-*
   export PATH=/usr/bin:$PATH
   ./fuzz/scripts/populate.sh ./engines/chakracore-1.11.24/out/Debug/bin/ch/ch ./DIE-corpus/ ch
   ```

3. 查看执行情况
Step 3 Monitor the running: 

   ```
   tmux attach -t corpus
   ctrl+b+d 退出会话
   ```

   

**Configuring the client side：**

Step 1 Connect the server

   ~~~
   tmux new-session -s ssh-tunneling
   ssh -L 9000:localhost:6379 serverName@serverIP
   ctrl+b+d exit the session
   ~~~


Step 2 Fuzzing:

   ```
   cd /root/software/fuzzers/DIE
   export PATH=/usr/bin:$PATH
   ./fuzz/scripts/run.sh ./engines/chakracore-1.11.24/out/Debug/ch ./DIE-corpus ch
   ```

Step 3 Monitor the running:

   ```
   tmux attach -t fuzzer
   ctrl+b+d exit the session
   ```

Finally, the generated test cases are stored in `/root/software/fuzzers/DIE/mutatedSeeds`.

