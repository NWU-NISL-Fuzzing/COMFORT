# 语料库预处理部分
语料库预处理部分共分为四步骤，分别为提取JS文件，解析function，jshint语法过滤，黑名单过滤。
### 主要步骤
1. 从github仓库中收集JS文件；
2. 提取JS文件中的function，如果function的行数小于1000行，采用全局变量回填的方式提取，否则，利用正则匹配的方式提取。
3. 利用jshint代码检查工具进行语法过滤；
4. 利用bug误报组建的黑名单，对function进行过滤，并使用uglifyjs美化代码。
### 文件功能介绍
`main.py`：程序入口文件
`function_extraction.js`：全局变量回填提取function  
`function_extraction.py`：实现多线程提取function  
`syntax_filtration.py`：利用jshint进行语法检查  
`.jshintrc`：jshint工具的配置文件  
`__init__.py`：python项目包标识  
`black_list.py`:黑名单  
`blacklist_filter.py`:利用黑名单进行过滤，并美化代码  
`email_sender.py`:邮件通知  
`prepro_utils.py`:工具类  

### 环境依赖  
Python 3.6.8  
NodeJS 12.18.3
