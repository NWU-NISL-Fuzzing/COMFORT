# Automated Conformance Testing for JavaScript Engines via Deep Compiler Fuzzing: Artifact

This directory contains a pre-configured live server with a [Python Jupyter Notebook](#jupyter) and a [Docker Image](#docker) to support artifact for our paper (COMFORT) on PLDI 2021 paper on Javascript Conformance Testing. 

It contains reduced-size data sets for evaluating our GPT-2 based test program generator, test case mutation and reduction, and differential tester. The full dataset is quite large (>100 GB uncompressed), and we are working on finding a method for sharing it with the community. The idea is that this directory contains minimal working examples which can be evaluated in a reasonable amount of time. All of our code and data will be open-sourced upon publication and has been developed with extensibility as a primary goal.

# Overview of Results
As stated in Section 5 of the PLDI submission, we have started experimenting with and refining our tool since May 2019. At the time of our PLDI 2021 submission (21 Nov 2020), we have indentified 158 unique bugs, of which 129 have been verified, and 115 have been fixed by the developers. Furthermore, 21 of the COMFORT generated test cases were added into Test-262, the official Javascript conformance test suite.

A list of bugs discovered by COMFORT can be found at the [Bug List](./Bug-List.md) section. 



# Getting Start Guide <br id = "jupyter" >
For convenience, we have provided a pre-configured live server with a Python Jupyter Notebook to work through our techiques (Please see the ReadMe document on the AE submission website on how to access the Notebook). The notebook provides instructions on how to test our techniques on a small-scale dataset. 

Note that we do not log IP addresses or other accessing information, but if you have concerns on this, you could use a [Tor Browser](https://www.torproject.org/download/) to access our demo website. 

While it is possible to create your own copy of our Jupyter Notebook, we recommend to use the configured server as it is non-trivial to configure the Notebook locally within a docker container. 

# Step-by-Step Instructions <br id = "docker">

## ★ Main Results <span id = "bug-list">

The main results of the paper are a [list of bugs](./Bug-List.md) exposed by COMFORT-generated test cases. 

## ★ Docker Image
We prepare our artifact within a Docker image to run "out of the box". The Docker image can be downloaded from [here](https://drive.google.com/drive/folders/1JkS2S4GOCPdicQsbDeqlkzXO4tZ-2Iyg?usp=sharing). 
Our docker image was tested on a host machine running Ubuntu 18.04. 

After downloading the docker image, using the following commands to load the docker image (approximate 45 minutes on a laptop) on the host machine:
```
unzip 53.zip
cd 53
docker load -i 53.tar
```

## ★ Configure the GPU Running Environment (optional)
If you wish to use an NVIDIA GPU on the host machine (that runns Ubuntu 18.04) to execute the AE, please follow the instructions below to setup the GPU execution environment:

> - Copy [this bash script](../data/nvidia-container-runtime-script.sh) to the user directory with sudo permission. Then run the following command:
> 
>     ```bash nvidia-container-runtime-script.sh```
>      
>      Note that this step may break the existing docker environment.
>  
> - Next, test if the GPU running environment is successfully configured:
>  
>   ```docker run --help | grep -i gpus  ```
>   
>     You should be able to see the the GPU information if it is successfully configured.

Please note that the above steps for configuring the GPU environment were only tested on **a host machine running Ubuntu OS**. It may throw exceptions or errors when configuring in other Linux distributions. However, the following scripts should be able to run on multiple Linux distributions like Centos, Ubuntu, Detian, etc. If you have difficulties in setting up the GPU, you can opt to use the CPU for AE testing or use the pre-configured, live server given in the getting start guide to go thorugh the setps. 

## ★ Importing the Docker Image

> - **Using GPU:** Run the following command to import the docker container with GPU support:
> 
>     ```docker run -itd --name comfort --gpus all pldi2021:comfort /bin/bash  ```
>     
> - **Using CPU:** Using the following command to import the docker container using the CPU for testing:
>     
>     ```docker run -itd --name comfort pldi2021:comfort /bin/bash  ```
>     
**Known issue in Windows:** Note that if you get an eror message of ```Unable to find image 'pldi2021:comfort' locally``` (a known problem for loading the docker image in Windows), you can use the image ID (sha256:xxxxxxxx...xxx) given after running  ```docker load -i 53.tar``` to run the docker container. For example, ```docker run -itd --name comfort  sha256:73a15dc0bf7b29bc980845bf4514518176837bb964101b1f82a4fa98a956b1e9 /bin/bash  ``` (**Make sure you replace the sha256 checksum with the one shown on the host manchine**).
>
**[!IMPORTANT]**
> - **Setup environmental parameters:** After importing the docker container and getting into **bash** in the container, make sure you run the below command to setup the environmental variables, before using any of the AE scripts:
>
>     ```echo -e '[mysqld]\nskip-grant-tables' >> /etc/mysql/my.cnf && pip install sqlalchemy PyExecJS && source /root/.bash_profile``` 
>  
>  This script will also start the MYSQL database needed for program mutations. 

**Testing in Docker Desktop in Windows:** Note that if you use docker Desktop running in Windows, to get into bash, you need to first click into the CLI (command line interface) icon next to the running container - e.g., comfort in Docker Desktop; Next, run ```bash ``` under the CLI and then run ``` source /root/.bash_profile``` to setup the environmental parameters. You can then folow the AE instructions given below. 

## ★ Artifact Contents
The Docker image contains the following scripts for evaluation. 

 * [01_evaluate_generator.py](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/src/01_evaluate_generator.py): A demonstration of training a GPT-2 model to generate JS programs. 
 * [02_evaluate_mutator.py](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/src/02_evaluate_mutator.py): A demonstration of test program mutation. This demonstrates how we mutate the test JS programs generated by the previous demonstration.
 * [03_evaluate_harness.py](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/src/03_evaluate_harness.py): A demonstration of our differential testing approach. The results from the prior steps are used to perform differential testing on one JS testbed (engine).
 * [04_coverage_calculate.py](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/src/04_coverage_calculate.py): A demonstraction of the code coverage statistics, showing the quality of the test cases generated by different fuzzers.
 

## ★ Evaluation of Our JS Program Generator 

### ☆ Program generation using our pre-trained model <br id="pregenerator">
(*approximate runtime: 20 minutes for using a GPU, ~4 hours when using a CPU*)

We provide a pre-trained GPT-2 JS program generator used by our paper. Our pre-trained model is stored in ``` /root/src/generate_model/models/nisl_model```.
You can use the following command to generate about 512 test programs (defined by ```nsamples```) using this pre-trained model. 

* You can run the test on the CPU by using the following command (set ```--multi_gpu=1``` to run on the GPU)：

   ``` python /root/src/01_evaluate_generator.py --mode=generate --use_nisl_model=1 --multi_gpu=0 --nsamples=512 ```

All generated test cases are written to directory ```/root/data/generated_data/complete_testcases/```. 

This takes around 4 hours to generate 512 test programs using a laptop CPU. The  ```--nsamples``` parameter controls how many test programs to generate. **Note that the value of ```--nsamples``` should be a multiply of the default bach size of 16 (e.g., 16, 32, 64, etc.)**.

### ☆ Optional: Program generation using a locally trained model  <br id = "generation">
This option involves two steps: (1) first fine-tune a GPT-2 model locally and then (2) use the trained model for test program generation.

#### Step 1: Train the JS Program Generator <br id="generator">
(*approximate runtime: ~1 hour using a GPU， 5 hours using a CPU*)

* Evaluate GPT-2 program synthesizer by running the following command (set ```--multi_gpu=1``` for using a GPU for training):

    ``` python /root/src/01_evaluate_generator.py --mode=finetune  --multi_gpu=0 ```

The program uses a small JS corpus of 10,000 JS programs randomly selected from our entire training corpus to refine a scale-downed, pre-trained GPT-2 model (that was trained on natural language texts) on the JS corpus.

We have reduced the size of the corpus so that it takes around 5 hours to train on a multi-core CPU (~1 hour on a GPU). For our paper, we trained our model on more data (140,000 JS programs rather than 2,000) for longer (~150,000 iterations rather than 1,000). *As such, the quality of output of this model is lower, which is likely to produce shorter and fewer syntactically correct programs*. 

Training the model can be interrupted after the first training iteration. Once trained, the model does not need to be re-trained. *Note that it takes around 20 minutes to load the dataset and the model using a laptop CPU*. 


#### Step 2: Program generation
(*approximate runtime: 20 minutes for using a GPU, ~4 hours when using a CPU*)

**!Important:** To run this script, make sure you have trained a model using ```01_evaluate_generator.py``` dsescribed in the previous step.

* To use the [trained model](#generator) to generate the test programs, run the following command (set ```--multi_gpu=1``` for using a GPU for inference): 

    ``` python /root/src/01_evaluate_generator.py --mode=generate --use_nisl_model=0 --multi_gpu=0 --nsamples=512 ```

The  ```--nsamples``` parameter controls how many test programs to generate. **Note that the value of ```--nsamples``` should be a multiply of the default bach size of 16 (e.g., 16, 32, 64, etc.)**. 

*Note that it takes around 20 minutes to load the model using a laptop CPU*. 

### ☆ Evaluation of test program coverage 
(*approximate runtime: 20 minutes*)

* You can use the following command to compute the coverage repored by [Istanbul](https://istanbul.js.org/). This script runs on 1,000 randomly chosen test programs from our full test dataset. 

   ``` python /root/src/04_coverage_calculate.py --fuzzer=comfort --reporter_dir=/root/data/codeCoverage/coverageReporters ```

You can change the value of the parameter ```--fuzzer``` to be  `codealchemist, deepsmith, die, fuzzilli or montage`, to calculate the code coverage of other fuzzers.

* In our paper, we used a larger dataset of 10,000 test case to test each fuzzer. The full test case dataset is stored in  ``` /root/data/codeCoverage/totalFiles```. You can also evaluate on this full dataset using the following command for longer run (12+ hours):

   ``` python /root/src/04_coverage_calculate.py --coverage_files=/root/data/codeCoverage/totalFiles/comfort_generate --reporter_dir=/root/data/codeCoverage/coverageReporters ```

This data corresponds to Figure 8 in our paper. *Note that since the test programs are randonmly chosen and the test was performed on a smaller dataset (1000 instaed of 10,000),  the numbers may be  different from the ones reported in the paper*. 

## ★ Demonstration of Test Program Mutation
(*approximate runtime: 20 minutes*)

* Evaluate our ECMAScript-guided test data generator by running the following command:

   ```python /root/src/02_evaluate_mutator.py --input_path=/root/data/generated_data/complete_testcases --save_path=/root/data/mutation_result```

**Note that our tool can only mutate test programs with a JS API. If the test program does not contain a JS API, it will yield an eror meassge `This test case fails to be mutated as it does not contain any API.`** When all test cases have processed, you can see the number of test cases that were mutated successfully. Note that most of the test programs will not be mutated. 


## ★ Demonstration of Differential Testing
(*approximate runtime: 1 min per 120 test cases*)

**[!Important]**: This step must run after the program mutation step described in the previous section. 

* Evaluate our differential fuzzer on *ten* JS test beds by running the following command (In our paper, we tested 102 testbeds on a much larger datasets for 200 hours):

   ```python /root/src/03_evaluate_harness.py --testsuite=/root/data/mutation_result/ --clear_classifier=False```

Since we only test on <= 512 generated programs ([nsamples](#pregenerator) <= 512), it is likely that none of the test cases triggers a potential bug.

**Known Issue:** If you get a  *mysql connection exception* (e.g., pymysql.err.OperationError) error, make sure you have run the setup script as:

```echo -e '[mysqld]\nskip-grant-tables' >> /etc/mysql/my.cnf && pip install sqlalchemy PyExecJS && source /root/.bash_profile```
