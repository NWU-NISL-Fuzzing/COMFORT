# 代码生成模块
## 描述
代码生成模块采用gpt2进行代码生成，gpt2具体使用方法可参考[教程](https://blog.csdn.net/weixin_39132520/article/details/105577102)
## 环境依赖
- tensorflow-gpu 1.14.0
- gpt-2-simple
## 训练生成
### 训练集
Github网站中以javascript为关键字星级排名前两千的仓库，经过预处理得到的语料库。
### 训练参数
`mode_name`:`117M`  
`sample_every`:`10000`  
### 训练命令
~~~
CUDA_VISIBLE_DEVICES=5 gpt_2_simple finetune --dataset=~/top2000FinalCorpus.txt --run_name=top2000javascript --model_name=117M --sample_every=10000
~~~
 
### 生成参数
`nsamples`:`64000`  
`batch_size`:`32`  
`prefix`: `JavascriptTop2000Functions`  
### 生成命令
~~~
CUDA_VISIBLE_DEVICES=6  gpt_2_simple generate --run_name=top2000javascript  --folder=./data/generate/ --nsamples=64000  --batch_size=32 --prefix=//JavascriptTop2000Functions
~~~  
