# Automated Conformance Testing for JavaScript Engines via Deep Compiler Fuzzing: Artifact

This directory contains the supporting artifact for our paper on Automated Conformance Testing for JavaScript Compilers. 
It contains reduced-size data sets for evaluating
our testcase generator, testcase harness, and differential tester. The full
dataset is quite large (>200 GB uncompressed), and we are working on finding a
method for sharing it with the community. The idea is that this directory
contains minimal working examples which can be evaluated in a reasonable amount
of time. All of our code is open source and has been developed with
extensibility as a primary goal. Please see Section XX of this document for
more details.


## 1. Artifact Contents

 * .[XX](01_evaluate_generator.py): A demonstration of training a GPT-2 model to generate JS programs. 
 
 * .[XX](02_evaluate_harness.py): A demonstration of our automated conformance testing system. 
   The results from the prior demonstration are combined with our own data from the paper to perform differential testing.
   
 * .[XX](03_evaluate_comparison.py): A demonstration of the comparison results presented in our paper.



## Bug List 

A list of bug reports submitted by us, which were exposed by COMFORT. Where "Verified" in the "State" column means the bug is confirmed but has not been fixed by the vendor.

| No. | JS Engines | Build Version | Bug Report Link  | Contributor  | State    |
| --- | ---------- | --------------| -----------------| ------------ | -------- |
| 1 | V8 | 0e44fef | [v8_report1](https://bugs.chromium.org/p/v8/issues/detail?id=9460) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 2 | V8 | 0e44fef | [v8_report2](https://bugs.chromium.org/p/v8/issues/detail?id=8088) | [Yuan Wang](https://github.com/YuanWangC) | Fixed |
| 3 | V8 | e39c701 | [v8_report3](https://bugs.chromium.org/p/v8/issues/detail?id=10268) | [Yuan Wang](https://github.com/YuanWangC) | Fixed |
| 4 | V8 | e39c701 | [v8_report4](https://bugs.chromium.org/p/v8/issues/detail?id=10589) | [Xing Qu](https://github.com/QuXing9) | Verified |
| 5 | ChakraCore | v1.11.12 | [chakra_report1](https://github.com/microsoft/ChakraCore/issues/6278) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed | 
| 6 | ChakraCore | 8fcb0f1 | [chakra_report2](local-bugs/ChakraCore/No.86.png) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed | 
| 7 | ChakraCore | eaaf7ac | [chakra_report3](https://github.com/microsoft/ChakraCore/issues/6351) | [Yuan Wang](https://github.com/YuanWangC) | Fixed | 
| 8 | ChakraCore | eaaf7ac | [chakra_report4](https://github.com/microsoft/ChakraCore/issues/6383) |  [Yuan Wang](https://github.com/YuanWangC) | Verified | 
| 9 | ChakraCore | eaaf7ac | [chakra_report5](https://github.com/microsoft/ChakraCore/issues/6342) | [Yuan Wang](https://github.com/YuanWangC) | Verified | 
| 10 | ChakraCore | v1.11.8 | [chakra_report6](https://github.com/microsoft/ChakraCore/issues/6467) | [Yuan Wang](https://github.com/YuanWangC) | Fixed | 
| 11 | ChakraCore | v1.11.8 | [chakra_report7](https://github.com/microsoft/ChakraCore/issues/6477) | [Yuan Wang](https://github.com/YuanWangC) | Fixed | 
| 12 | JavaScriptCore | d940b47 | [JSC_report1](https://bugs.webkit.org/show_bug.cgi?id=201910) | [Yang Tian](https://github.com/ty5491003) | Fixed |
| 13 | JavaScriptCore | d940b47 | [JSC_report2](https://bugs.webkit.org/show_bug.cgi?id=200190) | [Yang Tian](https://github.com/ty5491003) | Fixed |
| 14 | JavaScriptCore | d940b47 | [JSC_report3](https://bugs.webkit.org/show_bug.cgi?id=199744) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 15 | JavaScriptCore | b96bf75 | [JSC_report4](https://bugs.webkit.org/show_bug.cgi?id=204971) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 16 | JavaScriptCore | d940b47 | [JSC_report5](https://bugs.webkit.org/show_bug.cgi?id=203456) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 17 | JavaScriptCore | d940b47 | [JSC_report6](https://bugs.webkit.org/show_bug.cgi?id=199663) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 18 | JavaScriptCore | b96bf75 | [JSC_report7](https://bugs.webkit.org/show_bug.cgi?id=205498) | [Yuan Wang](https://github.com/YuanWangC) | Under discussion	 |
| 19 | JavaScriptCore | d940b47 | [JSC_report8](https://github.com/NWU-NISL-Fuzzing/NWU-NISL-Fuzzer/blob/master/local-bugs/javascriptCore/No.73.png) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 20 | JavaScriptCore | 	b3fa4c5 | [JSC_report9](https://github.com/NWU-NISL-Fuzzing/NWU-NISL-Fuzzer/blob/master/local-bugs/javascriptCore/No.74.png) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 21 | JavaScriptCore | 	d940b47 | [JSC_report10](https://github.com/NWU-NISL-Fuzzing/NWU-NISL-Fuzzer/blob/master/local-bugs/javascriptCore/No.125.png) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 22 | JavaScriptCore | 	dbae081 | [JSC_report11](https://bugs.webkit.org/show_bug.cgi?id=212730) | [Xing Qu](https://github.com/QuXing9) | Fixed |
| 23 | JavaScriptCore | d940b47 | [JSC_report12](https://bugs.webkit.org/show_bug.cgi?id=213023) | [Yuan Wang](https://github.com/YuanWangC) | Fixed	 |
| 24 | SpiderMonkey | spidermonkey_v1.7.0(Older) | [spidermonkey_report1](https://github.com/NWU-NISL-Fuzzing/NWU-NISL-Fuzzer/blob/master/local-bugs/spiderMonkey/No.6.png) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed	 |
| 25 | SpiderMonkey | mozjs-52.9.1pre | [spidermonkey_report2](https://github.com/NWU-NISL-Fuzzing/NWU-NISL-Fuzzer/blob/master/local-bugs/spiderMonkey/No.82.png) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed	 |
| 26 | SpiderMonkey | mozjs-38.3.0 | [spidermonkey_report3](https://github.com/NWU-NISL-Fuzzing/NWU-NISL-Fuzzer/blob/master/local-bugs/spiderMonkey/No.84.png) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed	 |
| 27 | Rhino | 1.7.12 | [rhino_report1](https://github.com/mozilla/rhino/issues/664) | [Yang Tian](https://github.com/ty5491003) | Fixed | 
| 28 | Rhino | 1.7.12 | [rhino_report2](https://github.com/mozilla/rhino/issues/665) | [Yang Tian](https://github.com/ty5491003) | Fixed | 
| 29 | Rhino | 1.7.12 | [rhino_report3](https://github.com/mozilla/rhino/issues/670) | [Yang Tian](https://github.com/ty5491003) | Fixed | 
| 30 | Rhino | 1.7.11 | [rhino_report4](https://github.com/mozilla/rhino/issues/570) | [Houyou Yao](https://github.com/YaoHouyou) | Rejected by developers | 
| 31 | Rhino | 1.7.11 | [rhino_report5](https://github.com/mozilla/rhino/issues/587) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed | 
| 32 | Rhino | 1.7.11  | [rhino_report6](https://github.com/mozilla/rhino/issues/574) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 33 | Rhino | 1.7.11  | [rhino_report7](https://github.com/mozilla/rhino/issues/612) | [Houyou Yao](https://github.com/YaoHouyou) | Under discussion |
| 34 | Rhino | 1.7.11  | [rhino_report8](https://github.com/mozilla/rhino/issues/576) | [Houyou Yao](https://github.com/YaoHouyou) | Rejected by developers  |
| 35 | Rhino | 1.7.11  | [rhino_report9](https://github.com/mozilla/rhino/issues/575) | [Houyou Yao](https://github.com/YaoHouyou) | Under discussion |
|36 | Rhino | 1.7.11  | [rhino_report10](https://github.com/mozilla/rhino/issues/580) | [Houyou Yao](https://github.com/YaoHouyou) | Under discussion |
| 37 | Rhino | 1.7.11  | [rhino_report11](https://github.com/mozilla/rhino/issues/571) | [Houyou Yao](https://github.com/YaoHouyou) | Under discussion |
| 38 |Rhino | 1.7.12  | [rhino_report12](https://github.com/mozilla/rhino/issues/667) | [Houyou Yao](https://github.com/YaoHouyou) | Under discussion |
| 39 | Rhino | 1.7.11  | [rhino_report13](local-bugs/Rhino/No.68.png) | [Xing Qu](https://github.com/QuXing9) | Fixed  |
| 40 | Rhino | 1.7.11  | [rhino_report14](local-bugs/Rhino/No.69.png) | [Xing Qu](https://github.com/QuXing9) | Fixed  |
| 41 | Rhino | 1.7.12 | [rhino_report15](https://github.com/mozilla/rhino/issues/673) | [Yang Tian](https://github.com/ty5491003) | Fixed |
| 42 | Rhino | 1.7.12 | [rhino_report16](https://github.com/mozilla/rhino/issues/659) | [Wen Yi](https://github.com/YiWen-y) | Fixed |
| 43 | Rhino | 1.7.12 | [rhino_report17](https://github.com/mozilla/rhino/issues/648) | [Wen Yi](https://github.com/YiWen-y) | Fixed |
| 44 | Rhino | 1.7.12 | [rhino_report18](https://github.com/mozilla/rhino/issues/651) | [Wen Yi](https://github.com/YiWen-y) | Fixed |
| 45 | Rhino | 1.7.12 | [rhino_report19](https://github.com/mozilla/rhino/issues/639) | [Wen Yi](https://github.com/YiWen-y) | Fixed |
| 46 | Rhino | 1.7.12 | [rhino_report20](https://github.com/mozilla/rhino/issues/656) | [Wen Yi](https://github.com/YiWen-y) | Fixed |
| 47 | Rhino | 1.7.12 | [rhino_report21](https://github.com/mozilla/rhino/issues/684) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 48 | Rhino | 1.7.12 | [rhino_report22](https://github.com/mozilla/rhino/issues/686) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 49 | Rhino | 1.7.12 | [rhino_report23](https://github.com/mozilla/rhino/issues/687) | [Houyou Yao](https://github.com/YaoHouyou) | Under discussion |
| 50 | Rhino | 1.7.12 | [rhino_report24](https://github.com/mozilla/rhino/issues/688) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 51 | Rhino | 1.7.12 | [rhino_report25](https://github.com/mozilla/rhino/issues/691) | [Wen Yi](https://github.com/YiWen-y) | Under discussion |
| 52 | Rhino | 1.7.12 | [rhino_report26](https://github.com/mozilla/rhino/issues/692) | [Wen Yi](https://github.com/YiWen-y) | Fixed |
| 53 | Rhino | 1.7.12 | [rhino_report27](https://github.com/mozilla/rhino/issues/697) | [Xing Qu](https://github.com/QuXing9) & [Houyou Yao](https://github.com/YaoHouyou) | Under discussion |
| 54 | Rhino | 1.7.12 | [rhino_report28](https://github.com/mozilla/rhino/issues/699) | [Yuan Wang](https://github.com/YuanWangC) | Under discussion |
| 55 | Rhino | 1.7.12 | [rhino_report29](https://github.com/mozilla/rhino/issues/698) | [Yuan Wang](https://github.com/YuanWangC) | Fixed |
| 56 | Rhino | 1.7.12 | [rhino_report30](https://github.com/mozilla/rhino/issues/708) | [Yuan Wang](https://github.com/YuanWangC) | Fixed |
| 57 | Rhino | 1.7.12 | [rhino_report31](https://github.com/mozilla/rhino/issues/719) | [Haobin Li](1355878370@qq.com) | Under discussion |
| 58 | Rhino | 1.7.12 | [rhino_report32](https://github.com/mozilla/rhino/issues/726) | [Wen Yi](https://github.com/YiWen-y)  |  Fixed |
| 59 | Rhino | 1.7.12 | [rhino_report33](https://github.com/mozilla/rhino/issues/725) | [Wen Yi](https://github.com/YiWen-y)  |  Verified |
| 60 | Rhino | 1.7.12 | [rhino_report34](https://github.com/mozilla/rhino/issues/746) | [Wen Yi](https://github.com/YiWen-y) | Fixed |
| 61 | Rhino | 1.7.12 | [rhino_report35](https://github.com/mozilla/rhino/issues/750) | [Haobin Li](1355878370@qq.com) | Fixed |
| 62 | Rhino | 1.7.11 | [rhino_report36](https://github.com/mozilla/rhino/issues/582) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 63 | Rhino | 1.7.11 | [rhino_report37](https://github.com/mozilla/rhino/issues/581) | [Implementist](https://github.com/Implementist) | Fixed |
| 64 | Rhino | 1.7.10 | [rhino_report38](https://github.com/mozilla/rhino/issues/563) | [yeguixin](https://github.com/yeguixin) | Fixed |
| 65 | Rhino | 1.7.10 | [rhino_report39](https://github.com/mozilla/rhino/issues/566) | [Implementist](https://github.com/Implementist) | Fixed |
| 66 | Rhino | 1.7.11 | [rhino_report40](https://github.com/mozilla/rhino/issues/569) | [yeguixin](https://github.com/yeguixin) | Under discussion |
| 67 | Rhino | 1.7.11 | [rhino_report41](https://github.com/mozilla/rhino/issues/573) | [Implementist](https://github.com/Implementist) | Verified |
| 68 | Rhino | 1.7.11 | [rhino_report42](https://github.com/mozilla/rhino/issues/564) | [yeguixin](https://github.com/yeguixin) | Verified |
| 69 | Rhino | 1.7.11 | [rhino_report43](https://github.com/mozilla/rhino/issues/577) | [Houyou Yao](https://github.com/YaoHouyou) | Rejected by developers |
| 70 | Rhino | 1.7.11 | [rhino_report44](https://github.com/mozilla/rhino/issues/568) | [yeguixin](https://github.com/yeguixin) | Under discussion |
| 71 | Nashorn | 12.0.1  | [nashorn_report1](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8228702) | [Houyou Yao](https://github.com/YaoHouyou) | Verified & Fixed |
| 72 | Nashorn | 12.0.1  | [nashorn_report2](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8228703) | [Houyou Yao](https://github.com/YaoHouyou) | Verified & Fixed |
| 73 | Nashorn | 12.0.1  | [nashorn_report3](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8227682) | [Houyou Yao](https://github.com/YaoHouyou) | Verified |
| 74 | Nashorn | 13.0.1  | [nashorn_report4](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8240298) | [Houyou Yao](https://github.com/YaoHouyou) | Verified |
| 75 | Nashorn | 13.0.1  | [nashorn_report5](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8240299) | [Wen Yi](https://github.com/YiWen-y) | Verified |
| 76 | Nashorn | 12.0.1 | [nashorn_report6](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8227681) | [Houyou Yao](https://github.com/YaoHouyou) | Verified |
| 77 | Nashorn | 12.0.1 | [nashorn_report7](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8227428) | [Houyou Yao](https://github.com/YaoHouyou) | Verified |
| 78 | Nashorn | 13.0.1 | [nashorn_report8](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=8235328) | [Yuan Wang](https://github.com/YuanWangC) | Verified |
| 79 | Nashorn | 13.0.1 | [nashorn_report9](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8242340) | [Houyou Yao](https://github.com/YaoHouyou) | Verified |
| 80 | Nashorn | 12.0.1 | [nashorn_report10](local-bugs/nashorn/No.122.png) | [Houyou Yao](https://github.com/YaoHouyou) | Under discussion |
| 81 | Nashorn | 12.0.1 | [nashorn_report11](local-bugs/nashorn/report11.png) | [Yuan Wang](https://github.com/YuanWangC) | Under discussion |
| 82 | Nashorn | 12.0.1 | [nashorn_report12](local-bugs/nashorn/report12.png) | [Yuan Wang](https://github.com/YuanWangC) | Under discussion |
| 83 | Nashorn | 12.0.1 | [nashorn_report13](local-bugs/nashorn/report13.png) | [Yuan Wang](https://github.com/YuanWangC) | Under discussion |
| 84 | Nashorn | 12.0.1 | [nashorn_report14](local-bugs/nashorn/report14.png) | [Yuan Wang](https://github.com/YuanWangC) | Under discussion |
| 85 | Nashorn | 12.0.1 | [nashorn_report15](local-bugs/nashorn/report15.png) | [Wen Yi](https://github.com/YiWen-y) | Verified |
| 86 | Nashorn | 12.0.1 | [nashorn_report16](local-bugs/nashorn/report16.png) | [Wen Yi](https://github.com/YiWen-y) | Under discussion |
| 87 | Nashorn | 12.0.1 | [nashorn_report17](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8226554) | [Houyou Yao](https://github.com/YaoHouyou) | Verified |
| 88 | Nashorn | 12.0.1 | [nashorn_report18](https://bugs.java.com/bugdatabase/view_bug.do?bug_id=JDK-8226652) | [Houyou Yao](https://github.com/YaoHouyou) | Verified |
| 89 | Hermes | 3ed8340 | [hermes_report1](https://github.com/facebook/hermes/issues/188) | [Implementist](https://github.com/Implementist) |  Fixed |
| 90 | Hermes | 3826084 | [hermes_report2](https://github.com/facebook/hermes/issues/143) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 91 | Hermes | 3826084 | [hermes_report3](https://github.com/facebook/hermes/issues/134) | [Houyou Yao](https://github.com/YaoHouyou) | Verified |
| 92 | Hermes | 3ed8340 | [hermes_report4](https://github.com/facebook/hermes/issues/102) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 93 | Hermes | 3ed8340 | [hermes_report5](https://github.com/facebook/hermes/issues/120) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 94 | Hermes | 3ed8340 | [hermes_report6](https://github.com/facebook/hermes/issues/107) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 95 | Hermes | 3826084 | [hermes_report7](https://github.com/facebook/hermes/issues/153) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 96 | Hermes | 3ed8340 | [hermes_report8](local-bugs/hermes/No.80.png) | [Yuan Wang](https://github.com/YuanWangC) | Fixed |
| 97 | Hermes | 3ed8340 | [hermes_report9](local-bugs/hermes/No.81.png) | [Yuan Wang](https://github.com/YuanWangC) | Fixed |
| 98 | Hermes | 044cf4b | [hermes_report10](https://github.com/facebook/hermes/issues/165) | [Wen Yi](https://github.com/YiWen-y) | Verified |
| 99 | Hermes | 3826084 | [hermes_report11](https://github.com/facebook/hermes/issues/159) | [Wen Yi](https://github.com/YiWen-y) | Fixed |
| 100 | Hermes | b6530ae | [hermes_report12](https://github.com/facebook/hermes/issues/252) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed |
| 101 | Hermes | 3826084 | [hermes_report13](https://github.com/facebook/hermes/issues/154) | [Yuan Wang](https://github.com/YuanWangC) | Fixed |
| 102 | Hermes | 3ed8340 | [hermes_report14](local-bugs/hermes/No.114.png) | [Yuan Wang](https://github.com/YuanWangC) | Fixed |
| 103 | Hermes | 3826084 | [hermes_report15](local-bugs/hermes/No.127.png) | [Yang Tian](https://github.com/ty5491003) | Fixed |
| 104 | Hermes | b6530ae | [hermes_report16](https://github.com/facebook/hermes/issues/277) |  [Wen Yi](https://github.com/YiWen-y) | Fixed |


A list of test cases that are submitted to Test262, which were generated by COMFORT.
| No. | Report Link | Contributor | Remarks|
|---- |-------------|-------------|--------|
| 1 | [V8_report1](https://github.com/tc39/test262/issues/2660) | [Houyou Yao](https://github.com/YaoHouyou)| |
| 2 | [chakra_report3](https://github.com/tc39/test262/issues/2661) | [Yuan Wang](https://github.com/YuanWangC) |
