# 质量评估部分
该部分的代码实现对测试数据的质量评估，主要从以下几个方面进行评估：语法正确率，代码长度，属性和方法调用次数，API调用次数和种类。
## 文件介绍
`data文件夹`：javascript语言API总结及配置文件  
`javascriptAPI文件夹`：统计函数API调用次数和种类的具体实现  
`log文件夹`：日志存放地址  
`.jshintrc`：jshint工具的配置文件  
`logger.py`：日志打印实现  
`main.py`：程序入口文件  
`step1_syntaxcheck.py`：多线程实现利用jshint进行代码检查  
`step2_lengthandcallable.py`：统计代码长度，属性和方法的调用次数  
`step3_getAPIS.py`：统计函数中API的调用次数和种类  

## 环境依赖
- Nodejs 12.18.3
- Python 3.6.8
