# Notes for Reusing our AE

## Training the program generator on your own corpus

You can train the GPT-2 model on your own training corpus. To do so, providing a text file that contains a just of JS functions in the following format: 

```txt
//JavascriptTop2000Functions\n
function1(...){
 ...
}
//JavascriptTop2000Functions\n
function2(...){
 ...
}
```
Here, we place `//JavascriptTop2000Functions` at the beginning of each function to split the training samples. An example of the training corpus can be found at ```/root/data/top10000.txt```. Once you have prepared the training corpus, stored it as ```/root/data/top10000.txt```, then follow [AE instructions](./README.md#generator) to train your own test program generator. 

After training your own program synthesizer, you can then follow the AE instructions to launch differential tests. 

## Add a new JS testbed for differential testing
To add a new JS Engine (testbed) for differential testing, you can edit the configuration file at ```/root/data/config.json```, and put the command for launching the JS engine in the ``engines`` list. For example, the following configuration defines 10 JS testbeds used in our AE demo. 

>  "engines": [
>  
>    "/root/.jsvu/engines/v8-0e44fef/x64/d8",
>     
>    "/root/.jsvu/engines/spiderMonkey-52.9.1pre1/bin/js",
>    
>    "/root/.jsvu/chakra-1.11.8",
>    
>    "/root/.jsvu/engines/WebKit-b3fa4c5/WebKit/WebKitBuild/Debug/bin/jsc",
>    
>    "/root/.jsvu/hermes-0.1.0 -w",
>    
>    "/root/.jsvu/quickjs-2019-09-01",
>    
>    "/root/.jsvu/graaljs-20.1.0",
>    
>    "/root/.jsvu/jerryscript-7df87b7",
>    
>    "java -jar  /root/.jsvu/rhino-1.7.11.jar -debug -version 200",
>    
>    "/root/.jsvu/engines/jdk-12.0.1/bin/jjs --no-syntax-extensions=true --no-deprecation-warning=true"
>    
>  ],

## Database

The deviated behaviours found during differential testing are stored in a MYSQL database. The database is used to filter out idential bug behavior seen in previous runs. 

To check the schema and content of the database, using the following bash command to login into the database provided by our AE docker image. 

>```mysql -uroot -p123456 ```

Then, run the following commands at the Mysql console: 

>```use classify;```
>
> ```select * from exist_errortype;```

Schema of table *exists_errortype* is:

> - `id` ：Categorize ID denoting which type the testing result belongs to;
> - `error_type` ：The type of the error that the testing result belongs to;
> - `engine` : The JS engine that triggers the potential bug;
> - `error_info`：The (error) messages produced by the JS engine;
> - `error_api`：API calls that trigger the `error_info`;
> - `count` ：The number of test results that belong to the `error_type`, which accumulates the number of testing results that belong to the same error type seen to date.
