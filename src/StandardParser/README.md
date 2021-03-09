# ES标准解析模块

## 描述

ES标准解析模块将对ES10标准的HTML文档进行解析，从中抽取出有效的语义信息，并保存在JSON文件中，便于对后续的测试过程中指导用例突变。



## 环境依赖

本模块使用JavaScript语言编写，运行环境为node v12.13.0，额外需要以下第三方库的支持：

- jsdom 16.4.0

- log4js 6.3.0



## 使用说明

1. 首先执行 `src/main/parsing.js` 文件，将自动对 `resources/ES10-standard.html` 文件进行解析，解析的结果将保存在 `resources/result.json` 中；
2. `src/main/main.js` 文件中提供了 `getValues` 方法，作为接口来供模糊测试模块调用。