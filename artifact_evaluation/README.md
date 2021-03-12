# Automated Conformance Testing for JavaScript Engines via Deep Compiler Fuzzing: Artifact

This directory contains the supporting artifact for our paper (COMFORT) on PLDI 2021 paper on Javascript Conformance Testing. It contains reduced-size data sets for evaluating our GPT-2 based test program generator, test case mutation and reduction, and differential tester. The full dataset is quite large (>100 GB uncompressed), and we are working on finding a method for sharing it with the community. The idea is that this directory contains minimal working examples which can be evaluated in a reasonable amount of time. All of our code and data will be open-sourced upon publication and has been developed with extensibility as a primary goal.

# Overview of Results
As stated in Section 5 of the PLDI submission, we have started experimenting with and refining our tool since May 2019. At the time of our PLDI 2021 submission (21 Nov 2020), we have indentified 158 unique bugs, of which 129 have been verified, and 115 have been fixed by the developers. Furthermore, 21 of the COMFORT generated test cases were added into Test-262, the official Javascript conformance test suite.

A list of bugs discovered by COMFORT can be found at the [Bug List](#bug-list) section. We also list the COMFORT-generated test cases that were accepted by the [Test-262 test suite](https://github.com/tc39/test262) in the [Test-262 accepted test case section](#test-262). In addition, we also list the [newly discovered bugs](#newly-discovered) found by COMFORT after the PLDI submission.

# Getting Start Guide
For convenience, we have provided a pre-configured live server with a Python Jupyter Notebook to work through our techiques (Please see the ReadMe document on the AE submission website on how to access the Notebook). The notebook provides instructions on how to configure and test our techniques on a small-scale dataset. 

Note that we do not log IP addresses or other accessing information, but if you have concerns on this, you could use a [Tor Browser](https://www.torproject.org/download/) to access our demo website. 

## Main Results - Bug List <span id = "bug-list">

Here we provide a list of bugs exposed by COMFORT-generated test cases. 

If a bug is marked as "Verified", it means the bug has been confirmed but not yet fixed by the vendor. Some of our submitted bugs have been previously discovered by other users and are marked as "Not first discovered". A small number of bug reports (9) were rejected by the vendor as the feature was either not well defined in ECMA-262 or not supported by the testing compiler. There are also bug reports waiting to be confirmed by the vendor (marked as "Under discussion"). 

Futhermore, some COMPORT-generated test cases have exposed addtional bugs after our PLDI submission during our continous testing process. These newly exposed bugs are listed at [here](#newly-discovered).

*This section corresponds to Tables 2 and 7 of the submitted paper*

| No.  | JS Engines     | Build Version           | Bug Report Link                                              | COMFORT Team Member (Contributor)                            | State                  | Remarks                                                      |
| ---- | -------------- | ----------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------------------- | ------------------------------------------------------------ |
| 1    | V8             | 0e44fef                 | [v8_report1](https://bugs.chromium.org/p/v8/issues/detail?id=9460) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | **List 1** in the manuscript                                 |
| 2    | V8             | 0e44fef                 | [v8_report2](https://bugs.chromium.org/p/v8/issues/detail?id=8088) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 3    | V8             | e39c701                 | [v8_report3](https://bugs.chromium.org/p/v8/issues/detail?id=10268) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 4    | ChakraCore     | v1.11.12                | [chakra_report1](https://github.com/microsoft/ChakraCore/issues/6278) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 5    | ChakraCore     | 8fcb0f1                 | [chakra_report2](local-bugs/ChakraCore/No.5.png)            | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | Not first discovered                                         |
| 6    | ChakraCore     | eaaf7ac                 | [chakra_report3](https://github.com/microsoft/ChakraCore/issues/6351) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  | **List 7** in the manuscript                                 |
| 7    | ChakraCore     | v1.11.8                 | [chakra_report6](https://github.com/microsoft/ChakraCore/issues/6467) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 8    | ChakraCore     | v1.11.8                 | [chakra_report7](https://github.com/microsoft/ChakraCore/issues/6477) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 9    | JavaScriptCore | d940b47                 | [JSC_report1](https://bugs.webkit.org/show_bug.cgi?id=201910) | [Yang Tian](https://github.com/ty5491003)                    | Fixed                  |                                                              |
| 10   | JavaScriptCore | d940b47                 | [JSC_report2](https://bugs.webkit.org/show_bug.cgi?id=200190) | [Yang Tian](https://github.com/ty5491003)                    | Fixed                  |                                                              |
| 11   | JavaScriptCore | d940b47                 | [JSC_report3](https://bugs.webkit.org/show_bug.cgi?id=199744) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 12   | JavaScriptCore | b96bf75                 | [JSC_report4](https://bugs.webkit.org/show_bug.cgi?id=204971) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 13   | JavaScriptCore | d940b47                 | [JSC_report5](https://bugs.webkit.org/show_bug.cgi?id=203456) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 14   | JavaScriptCore | d940b47                 | [JSC_report6](https://bugs.webkit.org/show_bug.cgi?id=199663) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 15   | JavaScriptCore | d940b47                 | [JSC_report8](https://github.com/NWU-NISL-Fuzzing/NWU-NISL-Fuzzer/blob/master/local-bugs/javascriptCore/No.15.png) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | Not first discovered                                         |
| 16   | JavaScriptCore | b3fa4c5                 | [JSC_report9](https://github.com/NWU-NISL-Fuzzing/NWU-NISL-Fuzzer/blob/master/local-bugs/javascriptCore/No.16.png) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | Not first discovered                                         |
| 17   | JavaScriptCore | d940b47                 | [JSC_report10](https://github.com/NWU-NISL-Fuzzing/NWU-NISL-Fuzzer/blob/master/local-bugs/javascriptCore/No.17.png) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | Not first discovered                                         |
| 18   | JavaScriptCore | dbae081                 | [JSC_report11](https://bugs.webkit.org/show_bug.cgi?id=212730) | [Xing Qu](https://github.com/QuXing9)                        | Fixed                  | **List 5** in the manuscript                                 |
| 19   | JavaScriptCore | d940b47                 | [JSC_report12](https://bugs.webkit.org/show_bug.cgi?id=213023) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 20   | SpiderMonkey   | v1.7.0                  | [spidermonkey_report1](https://github.com/NWU-NISL-Fuzzing/NWU-NISL-Fuzzer/blob/master/local-bugs/spiderMonkey/No.20.png) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | Not first discovered                                         |
| 21   | SpiderMonkey   | mozjs-52.9.1pre         | [spidermonkey_report2](https://github.com/NWU-NISL-Fuzzing/NWU-NISL-Fuzzer/blob/master/local-bugs/spiderMonkey/No.21.png) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | **List 3** in the manuscript <br> Not first discovered       |
| 22   | SpiderMonkey   | mozjs-38.3.0            | [spidermonkey_report3](https://github.com/NWU-NISL-Fuzzing/NWU-NISL-Fuzzer/blob/master/local-bugs/spiderMonkey/No.22.png) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | Not first discovered                                         |
| 23   | Rhino          | 1.7.12                  | [rhino_report1](https://github.com/mozilla/rhino/issues/664) | [Yang Tian](https://github.com/ty5491003)                    | Fixed                  |                                                              |
| 24   | Rhino          | 1.7.12                  | [rhino_report2](https://github.com/mozilla/rhino/issues/665) | [Yang Tian](https://github.com/ty5491003)                    | Fixed                  |                                                              |
| 25   | Rhino          | 1.7.12                  | [rhino_report3](https://github.com/mozilla/rhino/issues/670) | [Yang Tian](https://github.com/ty5491003)                    | Fixed                  |                                                              |
| 26   | Rhino          | 1.7.11                  | [rhino_report5](https://github.com/mozilla/rhino/issues/587) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | **List 4** in the manuscript                                 |
| 27   | Rhino          | 1.7.11                  | [rhino_report6](https://github.com/mozilla/rhino/issues/574) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 28   | Rhino          | 1.7.11                  | [rhino_report13](local-bugs/Rhino/No.28.png)                 | [Xing Qu](https://github.com/QuXing9)                        | Fixed                  | Not first discovered                                         |
| 29   | Rhino          | 1.7.11                  | [rhino_report14](local-bugs/Rhino/No.29.png)                 | [Xing Qu](https://github.com/QuXing9)                        | Fixed                  | Not first discovered                                         |
| 30   | Rhino          | 1.7.12                  | [rhino_report15](https://github.com/mozilla/rhino/issues/673) | [Yang Tian](https://github.com/ty5491003)                    | Fixed                  |                                                              |
| 31   | Rhino          | 1.7.12                  | [rhino_report16](https://github.com/mozilla/rhino/issues/659) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 32   | Rhino          | 1.7.12                  | [rhino_report17](https://github.com/mozilla/rhino/issues/648) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 33   | Rhino          | 1.7.12                  | [rhino_report18](https://github.com/mozilla/rhino/issues/651) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 34   | Rhino          | 1.7.12                  | [rhino_report19](https://github.com/mozilla/rhino/issues/639) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 35   | Rhino          | 1.7.12                  | [rhino_report20](https://github.com/mozilla/rhino/issues/656) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 36   | Rhino          | 1.7.12                  | [rhino_report21](https://github.com/mozilla/rhino/issues/684) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 37   | Rhino          | 1.7.12                  | [rhino_report22](https://github.com/mozilla/rhino/issues/686) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 38   | Rhino          | 1.7.12                  | [rhino_report24](https://github.com/mozilla/rhino/issues/688) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 39   | Rhino          | 1.7.12                  | [rhino_report26](https://github.com/mozilla/rhino/issues/692) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 40   | Rhino          | 1.7.12                  | [rhino_report29](https://github.com/mozilla/rhino/issues/698) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 41   | Rhino          | 1.7.12                  | [rhino_report30](https://github.com/mozilla/rhino/issues/708) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 42   | Rhino          | 1.7.12                  | [rhino_report32](https://github.com/mozilla/rhino/issues/726) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 43   | Rhino          | 1.7.12                  | [rhino_report33](https://github.com/mozilla/rhino/issues/725) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 44   | Rhino          | 1.7.12                  | [rhino_report34](https://github.com/mozilla/rhino/issues/746) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |    Fix [String.prototype.includes](https://github.com/mozilla/rhino/pull/747) at the same time                                                          |
| 45   | Rhino          | 1.7.12                  | [rhino_report35](https://github.com/mozilla/rhino/issues/750) | [Haobin Li](1355878370@qq.com)                               | Fixed                  |                                                              |
| 46   | Rhino          | 1.7.11                  | [rhino_report36](https://github.com/mozilla/rhino/issues/582) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | [Not first discovered](https://github.com/mozilla/rhino/issues/415) |
| 47   | Rhino          | 1.7.11                  | [rhino_report37](https://github.com/mozilla/rhino/issues/581) | [Implementist](https://github.com/Implementist)              | Fixed                  |                                                              |
| 48   | Rhino          | 1.7.10                  | [rhino_report38](https://github.com/mozilla/rhino/issues/563) | [yeguixin](https://github.com/yeguixin)                      | Fixed                  |                                                              |
| 49   | Rhino          | 1.7.10                  | [rhino_report39](https://github.com/mozilla/rhino/issues/566) | [Implementist](https://github.com/Implementist)              | Fixed                  |                                                              |
| 50   | Rhino          | 1.7.11                  | [rhino_report41](https://github.com/mozilla/rhino/issues/573) | [Implementist](https://github.com/Implementist)              | Fixed                  |                                                              |
| 51   | Rhino          | 1.7.11                  | [rhino_report42](https://github.com/mozilla/rhino/issues/564) | [yeguixin](https://github.com/yeguixin)                      | Fixed                  |                                                              |
| 52   | Nashorn        | 12.0.1                  | [nashorn_report1](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8228702) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 53   | Nashorn        | 12.0.1                  | [nashorn_report2](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8228703) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 54   | Hermes         | 3ed8340                 | [hermes_report1](https://github.com/facebook/hermes/issues/188) | [Implementist](https://github.com/Implementist)              | Fixed                  |                                                              |
| 55   | Hermes         | 3826084                 | [hermes_report2](https://github.com/facebook/hermes/issues/143) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 56   | Hermes         | 3826084                 | [hermes_report3](https://github.com/facebook/hermes/issues/134) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | **List 2** in the manuscript                                 |
| 57   | Hermes         | 3ed8340                 | [hermes_report4](https://github.com/facebook/hermes/issues/102) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 58   | Hermes         | 3ed8340                 | [hermes_report5](https://github.com/facebook/hermes/issues/120) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 59   | Hermes         | 3ed8340                 | [hermes_report6](https://github.com/facebook/hermes/issues/107) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 60   | Hermes         | 3826084                 | [hermes_report7](https://github.com/facebook/hermes/issues/153) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 61   | Hermes         | 3ed8340                 | [hermes_report8](local-bugs/hermes/No.61.png)                | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  | Not first discovered                                         |
| 62   | Hermes         | 3ed8340                 | [hermes_report9](local-bugs/hermes/No.62.png)                | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  | Not first discovered                                         |
| 63   | Hermes         | 3826084                 | [hermes_report11](https://github.com/facebook/hermes/issues/159) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 64   | Hermes         | b6530ae                 | [hermes_report12](https://github.com/facebook/hermes/issues/252) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 65   | Hermes         | 3826084                 | [hermes_report13](https://github.com/facebook/hermes/issues/154) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 66   | Hermes         | 3ed8340                 | [hermes_report14](local-bugs/hermes/No.66.png)              | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  | Not first discovered                                         |
| 67   | Hermes         | 3826084                 | [hermes_report15](local-bugs/hermes/No.67.png)              | [Yang Tian](https://github.com/ty5491003)                    | Fixed                  | Not first discovered                                         |
| 68   | Hermes         | b6530ae                 | [hermes_report16](https://github.com/facebook/hermes/issues/277) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 69   | JerryScript    | b6fc4e1                 | [jerry_report1](https://github.com/jerryscript-project/jerryscript/issues/3001) | [Yang Tian](https://github.com/ty5491003)                    | Fixed                  |                                                              |
| 70   | JerryScript    | 84a56ef                 | [jerry_report2](https://github.com/jerryscript-project/jerryscript/issues/3216) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 71   | JerryScript    | 40f7b1c                 | [jerry_report3](https://github.com/pando-project/jerryscript/issues/2817) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 72   | JerryScript    | 9ab4872                 | [jerry_report5](https://github.com/jerryscript-project/jerryscript/issues/3173) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 73   | JerryScript    | 7df87b7                 | [jerry_report6](https://github.com/jerryscript-project/jerryscript/issues/3229) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 74   | JerryScript    | b6fc4e1                 | [jerry_report7](https://github.com/jerryscript-project/jerryscript/issues/2937) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 75   | JerryScript    | 996bf76                 | [jerry_report8](https://github.com/jerryscript-project/jerryscript/issues/3650) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 76   | JerryScript    | 996bf76                 | [jerry_report9](https://github.com/jerryscript-project/jerryscript/issues/3661) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 77   | JerryScript    | 996bf76                 | [jerry_report10](https://github.com/jerryscript-project/jerryscript/issues/3393) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 78   | JerryScript    | 7df87b7                 | [jerry_report11](https://github.com/jerryscript-project/jerryscript/issues/3325) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 79   | JerryScript    | 996bf76                 | [jerry_report12](https://github.com/jerryscript-project/jerryscript/issues/3381) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 80   | JerryScript    | 996bf76                 | [jerry_report13](https://github.com/jerryscript-project/jerryscript/issues/3467) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 81   | JerryScript    | 996bf76                 | [jerry_report14](https://github.com/jerryscript-project/jerryscript/issues/3463) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 82   | JerryScript    | 996bf76                 | [jerry_report15](https://github.com/jerryscript-project/jerryscript/issues/3473) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 83   | JerryScript    | 996bf76                 | [jerry_report16](https://github.com/jerryscript-project/jerryscript/issues/3380) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 84   | JerryScript    | 996bf76                 | [jerry_report17](https://github.com/jerryscript-project/jerryscript/issues/3646) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 85   | JerryScript    | 996bf76                 | [jerry_report18](https://github.com/jerryscript-project/jerryscript/issues/3669) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 86   | JerryScript    | 7df87b7                 | [jerry_report20](local-bugs/jerryscript/No.86.png)          | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | Not first discovered                                         |
| 87   | JerryScript    | 9ab4872                 | [jerry_report21](https://github.com/jerryscript-project/jerryscript/issues/3844) | [Xing Qu](https://github.com/QuXing9)                        | Fixed                  |                                                              |
| 88   | JerryScript    | 9ab4872                 | [jerry_report22](https://github.com/jerryscript-project/jerryscript/issues/3878) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 89   | JerryScript    | 996bf76                 | [jerry_report23](https://github.com/jerryscript-project/jerryscript/issues/3903) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 90   | JerryScript    | 996bf76                 | [jerry_report24](https://github.com/jerryscript-project/jerryscript/issues/3903) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 91   | JerryScript    | 996bf76                 | [jerry_report25](https://github.com/jerryscript-project/jerryscript/issues/3914) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  | **List 8** in the manuscript                                 |
| 92   | JerryScript    | bd1c4df                 | [jerry_report26](https://github.com/jerryscript-project/jerryscript/issues/3927) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 93   | JerryScript    | bd1c4df                 | [jerry_report27](https://github.com/jerryscript-project/jerryscript/issues/3926) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 94   | JerryScript    | b6fc4e1                 | [jerry_report28](https://github.com/jerryscript-project/jerryscript/issues/2914) | [Implementist](https://github.com/Implementist)              | Fixed                  |                                                              |
| 95   | JerryScript    | b6fc4e1                 | [jerry_report29](https://github.com/jerryscript-project/jerryscript/issues/2949) | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 96   | JerryScript    | 351acdf                 | [jerry_report30](https://github.com/jerryscript-project/jerryscript/issues/2906) | [yeguixin](https://github.com/yeguixin)                      | Fixed                  |                                                              |
| 97   | JerryScript    | e944cda                 | [jerry_report31](https://github.com/pando-project/jerryscript/issues/2891) | [yeguixin](https://github.com/yeguixin)                      | Fixed                  |                                                              |
| 98   | JerryScript    | 9ab4872                 | [jerry_report32](local-bugs/jerryscript/No.98.png)           | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | Not first discovered                                         |
| 99   | JerryScript    | 351acdf                 | [jerry_report33](https://github.com/jerryscript-project/jerryscript/issues/2914) | [Implementist](https://github.com/Implementist)              | Fixed                  |                                      |
| 100  | QuickJS        | quickjs-2019-09-18      | [qjs_report1](local-bugs/quickJS/No.22.pdf)                  | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  | **List 6** in the manuscript                                 |
| 101  | QuickJS        | quickjs-2019-09-01      | [qjs_report2](local-bugs/quickJS/No.23.pdf)                  | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 102  | QuickJS        | quickjs-2019-09-01      | [qjs_report3](local-bugs/quickJS/No.24.pdf)                  | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 103  | QuickJS        | quickjs-2019-09-01      | [qjs_report4](local-bugs/quickJS/No.25.pdf)                  | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 104  | QuickJS        | quickjs-2019-09-01      | [qjs_report5](local-bugs/quickJS/No.26.pdf)                  | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 105  | QuickJS        | quickjs-2019-10-27      | [qjs_report6](local-bugs/quickJS/No.27.pdf)                  | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 106  | QuickJS        | quickjs-2019-10-27      | [qjs_report7](local-bugs/quickJS/No.28.pdf)                  | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 107  | QuickJS        | quickjs-2020-01-05      | [qjs_report8](local-bugs/quickJS/No.29.pdf)                  | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 108  | QuickJS        | quickjs-2020-04-12      | [qjs_report9](local-bugs/quickJS/No.30.pdf)                  | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 109  | QuickJS        | quickjs-2019-10-27      | [qjs_report10](local-bugs/quickJS/No.112.pdf)                | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 110  | QuickJS        | quickjs-2020-01-05      | [qjs_report11](local-bugs/quickJS/No.113.pdf)                | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 111  | QuickJS        | quickjs-2019-07-09      | [qjs_report12](local-bugs/quickJS/No.111.png)                  | [Xing Qu](https://github.com/QuXing9)                        | Fixed                  | **List 9** in the manuscript <br> Not first discovered       |
| 112  | QuickJS        | quickjs-2019-07-09      | [qjs_report15](local-bugs/quickJS/No.112.png)                 | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  | Not first discovered                                         |
| 113  | QuickJS        | quickjs-2019-07-09      | [qjs_report16](local-bugs/quickJS/No.91.pdf)                 | [Houyou Yao](https://github.com/YaoHouyou)                   | Fixed                  |                                                              |
| 114  | Graaljs        | graalvm-ce-java8-20.1.0 | [graaljs_report1](https://github.com/graalvm/graaljs/issues/300) | [Wen Yi](https://github.com/YiWen-y)                         | Fixed                  |                                                              |
| 115  | Graaljs        | graalvm-ce-java8-20.1.0 | [graaljs_report2](https://github.com/graalvm/graaljs/issues/299) | [Yuan Wang](https://github.com/YuanWangC)                    | Fixed                  |                                                              |
| 116  | V8             | e39c701                 | [v8_report4](https://bugs.chromium.org/p/v8/issues/detail?id=10589) | [Xing Qu](https://github.com/QuXing9)                        | Verified               |                                                              |
| 117  | ChakraCore     | eaaf7ac                 | [chakra_report4](https://github.com/microsoft/ChakraCore/issues/6383) | [Yuan Wang](https://github.com/YuanWangC)                    | Verified               |                                                              |
| 118  | ChakraCore     | eaaf7ac                 | [chakra_report5](https://github.com/microsoft/ChakraCore/issues/6342) | [Yuan Wang](https://github.com/YuanWangC)                    | Verified               |                                                              |
| 119  | Nashorn        | 12.0.1                  | [nashorn_report3](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8227682) | [Houyou Yao](https://github.com/YaoHouyou)                   | Verified               |                                                              |
| 120  | Nashorn        | 13.0.1                  | [nashorn_report4](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8240298) | [Houyou Yao](https://github.com/YaoHouyou)                   | Verified               |                                                              |
| 121  | Nashorn        | 13.0.1                  | [nashorn_report5](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8240299) | [Wen Yi](https://github.com/YiWen-y)                         | Verified               |                                                              |
| 122  | Nashorn        | 12.0.1                  | [nashorn_report6](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8227681) | [Houyou Yao](https://github.com/YaoHouyou)                   | Verified               |                                                              |
| 123  | Nashorn        | 12.0.1                  | [nashorn_report7](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8227428) | [Houyou Yao](https://github.com/YaoHouyou)                   | Verified               |                                                              |
| 124  | Nashorn        | 13.0.1                  | [nashorn_report8](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=8235328) | [Yuan Wang](https://github.com/YuanWangC)                    | Verified               |                                                              |
| 125  | Nashorn        | 13.0.1                  | [nashorn_report9](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8242340) | [Houyou Yao](https://github.com/YaoHouyou)                   | Verified               |                                                              |
| 126  | Nashorn        | 12.0.1                  | [nashorn_report15](local-bugs/nashorn/No.126.png)          | [Wen Yi](https://github.com/YiWen-y)                         | Verified               | Not first discovered                                         |
| 127  | Nashorn        | 12.0.1                  | [nashorn_report17](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8226554) | [Houyou Yao](https://github.com/YaoHouyou)                   | Verified               |                                                              |
| 128  | Nashorn        | 12.0.1                  | [nashorn_report18](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8226652) | [Houyou Yao](https://github.com/YaoHouyou)                   | Verified               |                                                              |
| 129  | Hermes         | 044cf4b                 | [hermes_report10](https://github.com/facebook/hermes/issues/165) | [Wen Yi](https://github.com/YiWen-y)                         | Verified               |                                                              |
| 130  | JavaScriptCore | b96bf75                 | [JSC_report7](https://bugs.webkit.org/show_bug.cgi?id=205498) | [Yuan Wang](https://github.com/YuanWangC)                    | Under discussion       |                                                              |
| 131  | Rhino          | 1.7.11                  | [rhino_report7](https://github.com/mozilla/rhino/issues/612) | [Houyou Yao](https://github.com/YaoHouyou)                   | Under discussion       |                                                              |
| 132  | Rhino          | 1.7.11                  | [rhino_report9](https://github.com/mozilla/rhino/issues/575) | [Houyou Yao](https://github.com/YaoHouyou)                   | Under discussion       |                                                              |
| 133  | Rhino          | 1.7.11                  | [rhino_report10](https://github.com/mozilla/rhino/issues/580) | [Houyou Yao](https://github.com/YaoHouyou)                   | Under discussion       |                                                              |
| 134  | Rhino          | 1.7.11                  | [rhino_report11](https://github.com/mozilla/rhino/issues/571) | [Houyou Yao](https://github.com/YaoHouyou)                   | Under discussion       |                                                              |
| 135  | Rhino          | 1.7.12                  | [rhino_report12](https://github.com/mozilla/rhino/issues/667) | [Houyou Yao](https://github.com/YaoHouyou)                   | Under discussion       |                                                              |
| 49   | Rhino          | 1.7.12                  | [rhino_report23](https://github.com/mozilla/rhino/issues/687) | [Houyou Yao](https://github.com/YaoHouyou)                   | Under discussion       |                                                              |
| 137  | Rhino          | 1.7.12                  | [rhino_report25](https://github.com/mozilla/rhino/issues/691) | [Wen Yi](https://github.com/YiWen-y)                         | Under discussion       |                                                              |
| 138  | Rhino          | 1.7.12                  | [rhino_report27](https://github.com/mozilla/rhino/issues/697) | [Xing Qu](https://github.com/QuXing9) & [Houyou Yao](https://github.com/YaoHouyou) | Under discussion       |                                                              |
| 139  | Rhino          | 1.7.12                  | [rhino_report28](https://github.com/mozilla/rhino/issues/699) | [Yuan Wang](https://github.com/YuanWangC)                    | Under discussion       |                                                              |
| 140  | Rhino          | 1.7.12                  | [rhino_report31](https://github.com/mozilla/rhino/issues/719) | [Haobin Li](1355878370@qq.com)                               | Under discussion       |                                                              |
| 141  | Rhino          | 1.7.11                  | [rhino_report40](https://github.com/mozilla/rhino/issues/569) | [yeguixin](https://github.com/yeguixin)                      | Under discussion       |                                                              |
| 142  | Rhino          | 1.7.11                  | [rhino_report44](https://github.com/mozilla/rhino/issues/568) | [yeguixin](https://github.com/yeguixin)                      | Under discussion       |                                                              |
| 143  | Nashorn        | 12.0.1                  | [nashorn_report10](local-bugs/nashorn/No.143.png)            | [Houyou Yao](https://github.com/YaoHouyou)                   | Under discussion       | Not first discovered                                         |
| 144  | Nashorn        | 12.0.1                  | [nashorn_report11](local-bugs/nashorn/No.144.png)          | [Yuan Wang](https://github.com/YuanWangC)                    | Under discussion       | Not first discovered                                         |
| 145  | Nashorn        | 12.0.1                  | [nashorn_report12](local-bugs/nashorn/No.145.png)          | [Yuan Wang](https://github.com/YuanWangC)                    | Under discussion       | Not first discovered                                         |
| 146  | Nashorn        | 12.0.1                  | [nashorn_report13](local-bugs/nashorn/No.146.png)          | [Yuan Wang](https://github.com/YuanWangC)                    | Under discussion       | Not first discovered                                         |
| 147  | Nashorn        | 12.0.1                  | [nashorn_report14](local-bugs/nashorn/No.147.png)          | [Yuan Wang](https://github.com/YuanWangC)                    | Under discussion       | Not first discovered                                         |
| 148  | Nashorn        | 12.0.1                  | [nashorn_report16](local-bugs/nashorn/No.148.png)          | [Wen Yi](https://github.com/YiWen-y)                         | Under discussion       | Not first discovered                                         |
| 149  | QuickJS        | quickjs-2019-09-18      | [qjs_report14](local-bugs/quickJS/No.89.pdf)                 | [Houyou Yao](https://github.com/YaoHouyou)                   | Under discussion       |                                                              |
| 150  | Rhino          | 1.7.11                  | [rhino_report4](https://github.com/mozilla/rhino/issues/570) | [Houyou Yao](https://github.com/YaoHouyou)                   | Rejected by developers |                                                              |
| 151  | Rhino          | 1.7.11                  | [rhino_report8](https://github.com/mozilla/rhino/issues/576) | [Houyou Yao](https://github.com/YaoHouyou)                   | Rejected by developers |                                                              |
| 152  | Rhino          | 1.7.11                  | [rhino_report43](https://github.com/mozilla/rhino/issues/577) | [Houyou Yao](https://github.com/YaoHouyou)                   | Rejected by developers |                                                              |
| 153  | JerryScript    | 40f7b1c                 | [jerry_report4](https://github.com/jerryscript-project/jerryscript/issues/2905) | [Houyou Yao](https://github.com/YaoHouyou)                   | Rejected by developers |                                                              |
| 154  | JerryScript    | 996bf76                 | [jerry_report19](https://github.com/jerryscript-project/jerryscript/issues/3277) | [Yuan Wang](https://github.com/YuanWangC)                    | Rejected by developers |                                                              |
| 155  | JerryScript    | 9ab4872                 | [jerry_report34](https://github.com/jerryscript-project/jerryscript/issues/3664) | [Wen Yi](https://github.com/YiWen-y)                         | Rejected by developers |                                                              |
| 156  | JerryScript    | bd1c4df                 | [jerry_report35](https://github.com/jerryscript-project/jerryscript/issues/3763) | [NWU-NISL](https://github.com/NWU-NISL)                      | Rejected by developers |                                                              |
| 157  | QuickJS        | quickjs-2019-10-27      | [qjs_report13](local-bugs/quickJS/No.88.pdf)                 | [Houyou Yao](https://github.com/YaoHouyou)                   | Rejected by developers |                                                              |
| 158  | QuickJS        | quickjs-2019-09-18      | [qjs_report17](local-bugs/quickJS/No.92.pdf)                 | [Houyou Yao](https://github.com/YaoHouyou)                   | Rejected by developers |                                                              |

### New COMPORT-exposed bugs after PLDI submission <span id = "newly-discovered">

| No. | JS Engines | Build Version | Bug Report Link  | Contributor  | State    | Remarks |
| --- | ---------- | --------------| -----------------| ------------ | -------- |-------- |
|  1   |ChakraCore|  v1.11.12/24   | [chakra_report2](https://github.com/chakra-core/ChakraCore/issues/6550) | [Yang Tian](https://github.com/ty5491003)  | Fixed |Not first discovered|
|  2   |ChakraCore| V1.11.24 | [chakra_report4](https://github.com/chakra-core/ChakraCore/issues/6567) |   [Wen Yi](https://github.com/YiWen-y)   |  Fixed ||
| 3 |ChakraCore| V1.11.24 | [chakra_report7](https://github.com/chakra-core/ChakraCore/issues/6582) | [Wen Yi](https://github.com/YiWen-y) | Fixed ||
| 4   | JavaScriptCore | d940b47       | [JSC_report2](https://bugs.webkit.org/show_bug.cgi?id=220506) | [Wen Yi](https://github.com/YiWen-y)            | Fixed                  |Not first discovered|
| 5   | JavaScriptCore | d940b47       | [JSC_report4](https://bugs.webkit.org/show_bug.cgi?id=220507) | [Wen Yi](https://github.com/YiWen-y)            | Fixed                  |Not first discovered|
| 6 |JavaScriptCore| d940b47 | [JSC_report5](https://bugs.webkit.org/show_bug.cgi?id=220842) | [Wen Yi](https://github.com/YiWen-y) | Verified |Not first discovered|
| 7 |JavaScriptCore| d940b47 | [JSC_report6](https://bugs.webkit.org/show_bug.cgi?id=221177) | [Wen Yi](https://github.com/YiWen-y) | Verified ||
| 8 |JavaScriptCore| d940b47 | [JSC_report7](https://bugs.webkit.org/show_bug.cgi?id=221176) | [Jinqiu Wang](https://github.com/qiudaoyuyesok) | Verified |Not first discovered|
| 9 |ChakraCore| v1.11.12 | [chakra_report1](https://github.com/chakra-core/ChakraCore/issues/6546) | [Yang Tian](https://github.com/ty5491003) | Verified |Not first discovered|
| 10 |ChakraCore| V1.11.24 | [chakra_report3](https://github.com/chakra-core/ChakraCore/issues/6553) | [Yang Tian](https://github.com/ty5491003) | Verified |Not first discovered|
| 11 |ChakraCore| V1.11.24 | [chakra_report5](https://github.com/chakra-core/ChakraCore/issues/6569) | [Wen Yi](https://github.com/YiWen-y) | Verified |Not first discovered|
| 12 |ChakraCore| V1.11.24 | [chakra_report6](https://github.com/microsoft/ChakraCore/issues/6503) | [Yang Tian](https://github.com/ty5491003) | Verified |Not first discovered|
| 13 |ChakraCore| V1.11.24 | [chakra_report9](https://github.com/chakra-core/ChakraCore/issues/6590) | [Wen Yi](https://github.com/YiWen-y) | Verified ||
| 14 |JavaScriptCore| d940b47 | [JSC_report1](https://bugs.webkit.org/show_bug.cgi?id=220142) | [Yang Tian](https://github.com/ty5491003) | Verified |Not first discovered|
| 15 |V8| d891c59 | [v8_report1](https://bugs.chromium.org/p/v8/issues/detail?id=11294) | [Wen Yi](https://github.com/YiWen-y) | Under discussion ||
| 16 |V8| e39c701 | [v8_report2](https://bugs.chromium.org/p/v8/issues/detail?id=11359) | [Wen Yi](https://github.com/YiWen-y) | Under discussion ||
| 17 |JavaScriptCore| d940b47 | [JSC_report3](https://bugs.webkit.org/show_bug.cgi?id=220574) | [Wen Yi](https://github.com/YiWen-y) | Under discussion ||
| 18 |ChakraCore| V1.11.24 | [chakra_report8](https://github.com/chakra-core/ChakraCore/issues/6589) | [Wen Yi](https://github.com/YiWen-y) | Rejected by developers ||


### TEST-262 accepted test cases <span id = "test-262">
A list of COMFORT-generated test cases that are accepted by the [Test262 conformance test suite](https://github.com/tc39/test262).  Note that some of the Test-262 submissions
were made by the relevant JS vendor after we reported a COMFORT-found bug. 

| No. | Bug Report | Test-262 Submission |COMFORT Team Member (Contributor) | Remarks |
|---- |-----------------|------------------|----------------------------------|---------|
| 1 | [V8_report1](https://bugs.chromium.org/p/v8/issues/detail?id=9460) | [issue_2660](https://github.com/tc39/test262/issues/2660) | [Houyou Yao](https://github.com/YaoHouyou)| |
| 2 | [chakra_report3](https://github.com/microsoft/ChakraCore/issues/6351) | [issue_2661](https://github.com/tc39/test262/issues/2661) | [Yuan Wang](https://github.com/YuanWangC) | |
| 3 | [JSC_report1](https://bugs.webkit.org/show_bug.cgi?id=201910) | [issue_2359](https://github.com/tc39/test262/issues/2359)| [Yang Tian](https://github.com/ty5491003) | Test case was created by COMFORT and submitted to Test-262 by the JSC developers|
| 4 | [JSC_report3](https://bugs.webkit.org/show_bug.cgi?id=199744) |[issue_2237](https://github.com/tc39/test262/issues/2237) | [Houyou Yao](https://github.com/YaoHouyou) | Test case was created by COMFORT and submitted to Test-262 by the JSC developers|
| 5 | [JSC_report11](https://bugs.webkit.org/show_bug.cgi?id=212730) |[issue_2651](https://github.com/tc39/test262/pull/2651) | [Xing Qu](https://github.com/QuXing9) | Test case was created by COMFORT and sumitted to TEST-262 by the developers |
| 6 | [rhino_report1](https://github.com/mozilla/rhino/issues/664) |[issue_2622](https://github.com/tc39/test262/issues/2622) | [Yang Tian](https://github.com/ty5491003)| |
| 7 | [rhino_report7](https://github.com/mozilla/rhino/issues/612) | [issue_2773](https://github.com/tc39/test262/issues/2773)| [Houyou Yao](https://github.com/YaoHouyou) | |
| 8 | [rhino_report12](https://github.com/mozilla/rhino/issues/667) |[issue_2788](https://github.com/tc39/test262/issues/2788) | [Houyou Yao](https://github.com/YaoHouyou) | |
| 9 | [rhino_report32](https://github.com/mozilla/rhino/issues/726) | [issue_2797](https://github.com/tc39/test262/issues/2797)| [Wen Yi](https://github.com/YiWen-y) | |
| 10 | [nashorn_report4](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8240298) |[issue_2803](https://github.com/tc39/test262/issues/2803) | [Houyou Yao](https://github.com/YaoHouyou)| |
| 11 | [hermes_report4](https://github.com/facebook/hermes/issues/102) |[issue_2623](https://github.com/tc39/test262/issues/2623) | [Houyou Yao](https://github.com/YaoHouyou)| |
| 12 | [hermes_report5](https://github.com/facebook/hermes/issues/120) |[issue_2688](https://github.com/tc39/test262/issues/2688) | [Houyou Yao](https://github.com/YaoHouyou) | |
| 13 | [hermes_report12](https://github.com/facebook/hermes/issues/252) | [issue_2789](https://github.com/tc39/test262/issues/2789)| [Houyou Yao](https://github.com/YaoHouyou) | |
| 14 | [hermes_report16](https://github.com/facebook/hermes/issues/277) | [issue_2813](https://github.com/tc39/test262/issues/2813)| [Wen Yi](https://github.com/YiWen-y) | |
| 15 | [jerry_report5](https://github.com/jerryscript-project/jerryscript/issues/3173) |[issue_2765](https://github.com/tc39/test262/issues/2765) | [Houyou Yao](https://github.com/YaoHouyou) | |
| 16 | [jerry_report16](https://github.com/jerryscript-project/jerryscript/issues/3380) |[issue_2804](https://github.com/tc39/test262/issues/2804) | [Yuan Wang](https://github.com/YuanWangC) | |
| 17 | [jerry_report25](https://github.com/jerryscript-project/jerryscript/issues/3914) |[issue_2813](https://github.com/tc39/test262/issues/2813) | [Yuan Wang](https://github.com/YuanWangC) |  |
| 18 | [qjs_report3](local-bugs/quickJS/No.24.pdf) | [issue_2636](https://github.com/tc39/test262/issues/2636)| [Houyou Yao](https://github.com/YaoHouyou) | |
| 19 | [qjs_report4](local-bugs/quickJS/No.25.pdf) | [issue_2814](https://github.com/tc39/test262/issues/2814)| [Houyou Yao](https://github.com/YaoHouyou) | |
| 20 | [qjs_report5](local-bugs/quickJS/No.26.pdf) |[issue_2763](https://github.com/tc39/test262/issues/2763) | [Houyou Yao](https://github.com/YaoHouyou) | |
| 21 | [qjs_report7](local-bugs/quickJS/No.28.pdf) |[issue_2687](https://github.com/tc39/test262/issues/2687) | [Wen Yi](https://github.com/YiWen-y)  | |



# Step-by-Step Instructions

## Docker Image
We prepare our artifact within a Docker image to run "out of the box". The Docker image can be downloaded from [here](https://drive.google.com/drive/folders/1JkS2S4GOCPdicQsbDeqlkzXO4tZ-2Iyg?usp=sharing). 

## Artifact Contents
The Docker image contains the following scripts for evaluation. 

 * .[01_evaluate_generator.py](01_evaluate_generator.py): A demonstration of training a GPT-2 model to generate JS programs. 
 * .[02_evaluate_mutator.py](02_evaluate_mutator.py): A demonstration of test program mutation. This demonstrate how we mutate the test JS programs generated by the previous demonstration.
 * .[03_evaluate_harness.py](03_evaluate_harness.py): A demonstration of our differential testing approach. The results from the prior steps are combined with the test cases generated by our full-scale evluation used in the paper to perform differential testing.

## Setup
After importing the docker image, run ``` . ~/.bashrc``` to setup the environmental variables.

## Train the JS program generator <br id="generator">
(*approximate runtime: 4 hours*)

Evaluate GPT-2 program synthesizer by running the following command:

``` python /root/src/01_evaluata_generator.py --mode=finetune ```

The program uses a small JS corpus of 2000 JS programs randomly selected from our entire training corpus to refine a scale-downed, pre-trained GPT-2 model (that was trained on natural language texts) on the JS corpus. It then uses the trained model to generate ~2000 new JS test cases (where each test case contains one JS API). 

We have reduced the size of the corpus so that it takes around 3 hours to train on a multi-core CPU (~1 hour on a GPU). For our paper, we trained our model on more data (140,000 JS programs rather tan 2,000) for longer (100 epochs rather than 5). *As such, the quality of output of this model is lower, which is likely to produce shorter and fewer syntactically correct programs*. 

Training the model can be interrupted and resumed at any time. Once trained, the model does not need to be re-trained. 


### Evaluation of Our JS Program Generator 

#### Program generation using the trained model
To use the [trained model](#generator) to generate the test programs, run the following command (set ```--multi_gpu=0``` for using the CPU for inference): 

``` python /root/src/01_evaluate_generator.py --mode=generate --use_nisl_model=0 --multi_gpu=1 --nsamples=512 ```

The  ```--nsamples``` parameter controls how many test programs to generate. 

#### Program generation using our pre-trained model
We also provided the full-trained GPT-2 JS program generator used by our paper. Our pre-trained model is stored in ``` /root/src/generate_model/models/nisl_model```.
 You can use the following command to generate about 512 test programs (defined by nsamples) where each test program contains around 4 JS APIs (which lead to ~4 * 512 = 2,000 test cases). 

You can run the test on the GPU by using the following command (set ```--multi_gpu=0``` to run on the CPU)：

``` python /root/src/01_evaluate_generator.py --mode=generate --use_nisl_model=1 --multi_gpu=1 --nsamples=512 ```

All generated test cases are written to directory ```/root/data/generated_data/complete_samples/```. 

#### Evaluation of the code coverage 
You can use the following command to compute the percentage of the generated test programs passed [JSHint](https://jshint.com/) (a static JS syntax chcker), and the coverage repored by [Istanbul](https://istanbul.js.org/). 

``` python /root/src/05_coverage_calculate.py --coverage_files=/root/data/mutation_result/ ```

This data corresponds to Figure 8. Note that since the test programs are randonmly chosen, the numbers may be slightly different from the ones reported in the paper. 

## Demonstration of test program mutation
(*approximate runtime: 5 minutes*)
Evaluate our ECMAScript-guided test data generator by running the following command:

```python /root/src/02_evaluate_mutator.py --input_path=./data/test.js --save_path=./data/mutation_result ```

## Demonstration of Differential testing
(*approximate runtime: 10 minutes*)
Evaluate our differential fuzzer on a JS test bed by running the following command:

```python /root/src/03_evaluate_harness.py --testsuite=/root/data/mutation_result/ --clear_classifier=False```
