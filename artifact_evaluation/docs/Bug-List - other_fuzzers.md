
## Bugs exposed by other fuzzers <br id="otherfuzzer">
JS engine bugs found by other fuzzers. This data corresponds to Figure 7 of the submitted paper. 

### CodeAlchemist-discovered Bugs

| No.  | JS Engines  | Build Version | Bug Report Link                                              | Contributor                                | State            | Remarks              |
| ---- | ----------- | ------------- | ------------------------------------------------------------ | ------------------------------------------ | ---------------- | -------------------- |
| 1    | Rhino       | 1.7.12        | [rhino_report1](https://github.com/mozilla/rhino/issues/725) | [Wen Yi](https://github.com/YiWen-y)       | Fixed            | Duplicated test case |
| 2    | Rhino       | 1.7.12        | [rhino_report2](https://github.com/mozilla/rhino/issues/665) | [Yang Tian](https://github.com/ty5491003)  | Fixed            | Duplicated test case |
| 3    | Rhino       | 1.7.12        | [rhino_report3](https://github.com/mozilla/rhino/issues/639) | [Wen Yi](https://github.com/YiWen-y)       | Fixed            | Duplicated test case |
| 4    | ChakraCore  | eaaf7ac       | [chakra_report1](https://github.com/microsoft/ChakraCore/issues/6342) | [Yuan Wang](https://github.com/YuanWangC)  | Verified         | Duplicated test case |
| 5    | Rhino       | 1.7.12        | [rhino_report4](https://github.com/mozilla/rhino/issues/765) | [Yuan Wang](https://github.com/YuanWangC)  | Verified         |                      |
| 6    | Rhino       | 1.7.12        | [rhino_report5](https://github.com/mozilla/rhino/issues/766) | [Yuan Wang](https://github.com/YuanWangC)  | Under discussion |                      |
| 7    | Rhino       | 1.7.12        | [rhino_report6](https://github.com/mozilla/rhino/issues/764) | [Yuan Wang](https://github.com/YuanWangC)  | Under discussion |                      |
| 8    | V8          | d891c59       | [v8_report1](https://bugs.chromium.org/p/v8/issues/detail?id=10908) | [Yuan Wang](https://github.com/YuanWangC)  | Fixed            |                      |
| 9    | jerryscript | bd1c4df       | [jerry_report1](https://github.com/jerryscript-project/jerryscript/issues/4192) | [Yuan Wang](https://github.com/YuanWangC)  | Fixed            |                      |
| 10   | Rhino       | 1.7.12        | [rhino_report7](https://github.com/mozilla/rhino/issues/762) | [Haobin Li](https://github.com/Haobin-Lee) | Under discussion |                      |
| 11   | Hermes      | b6530ae       | [hermes_report1](https://github.com/facebook/hermes/issues/349) | [Haobin Li](https://github.com/Haobin-Lee) | Fixed            |                      |

### Fuzzilli-discovered Bugs

| No.  | JS Engines     | Build Version      | Bug Report Link                                              | Contributor                                | State            | Remarks              |
| ---- | -------------- | ------------------ | ------------------------------------------------------------ | ------------------------------------------ | ---------------- | -------------------- |
| 1    | Rhino          | 1.7.12             | [rhino_report1](https://github.com/mozilla/rhino/issues/719) | [Haobin Li](https://github.com/Haobin-Lee) | Under discussion | Duplicated test case |
| 2    | JavaScriptCore | dbae081            | [JSC_report1](https://bugs.webkit.org/show_bug.cgi?id=212730) | [Xing Qu](https://github.com/QuXing9)      | Fixed            | Duplicated test case |
| 3    | Rhino          | 1.7.12             | [rhino_report2](https://github.com/mozilla/rhino/issues/688) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed            | Duplicated test case |
| 4    | JerryScript    | 7df87b7            | [jerry_report1](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/data/Bugs/local-bugs/jerryscript/No.86.png)            | [Houyou Yao](https://github.com/YaoHouyou) | Fixed            | Duplicated test case |
| 5    | ChakraCore     | eaaf7ac            | [chakra_report1](https://github.com/microsoft/ChakraCore/issues/6342) | [Yuan Wang](https://github.com/YuanWangC)  | Verified         | Duplicated test case |
| 6    | ChakraCore     | 5ed2985            | [chakra_report2](https://github.com/microsoft/ChakraCore/issues/6505) | [Yuan Wang](https://github.com/YuanWangC)  | Verified         |                      |
| 7    | JavaScriptCore | dbae081            | [JSC_report2](https://bugs.webkit.org/show_bug.cgi?id=217051) | [Yuan Wang](https://github.com/YuanWangC)  | Fixed            |                      |
| 8    | JavaScriptCore | dbae081            | [JSC_report3](https://bugs.webkit.org/show_bug.cgi?id=216816) | [Yuan Wang](https://github.com/YuanWangC)  | Verified         |                      |
| 9    | ChakraCore     | 5ed2985            | [chakra_report3](https://github.com/microsoft/ChakraCore/issues/6507) | [Yuan Wang](https://github.com/YuanWangC)  | Under discussion |                      |
| 10   | JavaScriptCore | dbae081            | [JSC_report4](https://bugs.webkit.org/show_bug.cgi?id=216817) | [Yuan Wang](https://github.com/YuanWangC)  | Fixed            |                      |
| 11   | Rhino          | 1.7.12             | [Rhino_report3](https://github.com/mozilla/rhino/issues/770) | [Yuan Wang](https://github.com/YuanWangC)  | Fixed            |                      |
| 12   | QuickJS        | quickjs-2020-04-12 | [qjs_report1](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/data/Bugs/local-bugs%20-%20other_fuzzers/Fuzzilli/No.12.png) | [Yuan Wang](https://github.com/YuanWangC)  | Under discussion | Previous version     |
| 13   | Rhino          | 1.7.12             | [rhino_report4](https://github.com/mozilla/rhino/issues/768) | [Haobin Li](https://github.com/Haobin-Lee) | Fixed            |                      |
| 14   | ChakraCore     | 5ed2985            | [chakra_report4](https://github.com/microsoft/ChakraCore/issues/6502) | [Haobin Li](https://github.com/Haobin-Lee) | Under discussion |                      |
| 15   | ChakraCore     | 5ed2985            | [chakra_report5](https://github.com/microsoft/ChakraCore/issues/6503) | [Haobin Li](https://github.com/Haobin-Lee) | Fixed            |                      |
| 16   | SpiderMonkey   | firefox-C69.0a1    | [spiderMonkey_report1](https://bugzilla.mozilla.org/show_bug.cgi?id=1666986) | [Haobin Li](https://github.com/Haobin-Lee) | Fixed            |                      |


### DIE-discovered Bugs

| No.  | JS Engines     | Build Version        | Bug Report Link                                              | COMFORT Team Member (Contributor)          | State            | Remarks              |
| ---- | -------------- | -------------------- | ------------------------------------------------------------ | ------------------------------------------ | ---------------- | -------------------- |
| 1    | JerryScript    | 7df87b7              | [jerry_report1](https://github.com/jerryscript-project/jerryscript/issues/3229) | [Houyou Yao](https://github.com/YaoHouyou) | Fixed            | Duplicated test case |
| 2    | Rhino          | 1.7.12               | [rhino_report1](https://github.com/mozilla/rhino/issues/687) | [Houyou Yao](https://github.com/YaoHouyou) | Under discussion | Duplicated test case |
| 3    | Rhino          | 1.7.12               | [rhino_report2](https://github.com/mozilla/rhino/issues/698) | [Yuan Wang](https://github.com/YuanWangC)  | Fixed            | Duplicated test case |
| 4    | Hermes         | b6530ae              | [hermes_report1](https://github.com/facebook/hermes/issues/277) | [Wen Yi](https://github.com/YiWen-y)       | Fixed            | Duplicated test case |
| 5    | ChakraCore     | v1.11.19             | [chakra_report1](https://github.com/microsoft/ChakraCore/issues/6505) | [Yuan Wang](https://github.com/YuanWangC)  | Verified         |                      |
| 6    | JavaScriptCore | dbae081              | [JSC_report1](https://bugs.webkit.org/show_bug.cgi?id=217051) | [Yuan Wang](https://github.com/YuanWangC)  | Verified         |                      |
| 7    | Rhino          | 1.7.12               | [rhino_report3](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/data/Bugs/local-bugs%20-%20other_fuzzers/DIE/Rhino/No.7.png) | [Wen Yi](https://github.com/YiWen-y)       | Fixed            | Previous version     |
| 8    | JerryScript    | 9ab4872              | [jerry_report2](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/data/Bugs/local-bugs%20-%20other_fuzzers/DIE/jerryscript/No.8.png) | [Wen Yi](https://github.com/YiWen-y)       | Fixed            | Previous version     |
| 9    | ChakraCore     | v1.11.22             | [chakra_report2](https://github.com/microsoft/ChakraCore/issues/6512) | [Haobin Li](https://github.com/Haobin-Lee) | Undetermined     |                      |
| 10   | Rhino          | 1.7.13               | [rhino_report4](https://github.com/mozilla/rhino/issues/773) | [Yuan Wang](https://github.com/YuanWangC)  | Under discussion     |                      |
| 11   | Graaljs        | graaljs-java8-20.1.0 | [graaljs_report1](https://github.com/graalvm/graaljs/issues/355) | [Wen Yi](https://github.com/YiWen-y)       | Fixed            |                      |
| 12   | Rhino          | 1.7.11               | [rhino_report5](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/data/Bugs/local-bugs%20-%20other_fuzzers/DIE/Rhino/No.12.png) | [Haobin Li](https://github.com/Haobin-Lee) | Fixed            | Previous version     |
| 13   | JavaScriptCore | d940b47              | [JSC_report2](https://bugs.webkit.org/show_bug.cgi?id=217308) | [Wen Yi](https://github.com/YiWen-y)       | Under discussion     |                      |
| 14   | ChakraCore     | v1.11.22             | [chakra_report3](https://github.com/microsoft/ChakraCore/issues/6515) | [Wen Yi](https://github.com/YiWen-y)       | Verified         |                      |
| 15   | JerryScript    | 9ab4872              | [jerry_report3](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/data/Bugs/local-bugs%20-%20other_fuzzers/DIE/jerryscript/No.15.png) | [Wen Yi](https://github.com/YiWen-y)       | Fixed            | Previous version     |
| 16   | Rhino          | 1.7.13               | [rhino_report6](https://github.com/mozilla/rhino/issues/782) | [Wen Yi](https://github.com/YiWen-y)       | Verified         |                      |
| 17   | v8             | e39c701              | [v8_report1](https://bugs.chromium.org/p/chromium/issues/detail?id=1135406) | [Wen Yi](https://github.com/YiWen-y)       | Verified         |                      |
| 18   | SpiderMonkey   | C69.0a1(debug)       | [spidermonkey_report1](https://bugzilla.mozilla.org/show_bug.cgi?id=1670158) | [Wen Yi](https://github.com/YiWen-y)       | Fixed            | Previous version     |
| 19   | Rhino          | 1.7.13               | [rhino_report7](https://github.com/mozilla/rhino/issues/777) | [Wen Yi](https://github.com/YiWen-y)       | Under discussion     |                      |
| 20   | Rhino          | 1.7.13               | [rhino_report8](https://github.com/mozilla/rhino/issues/778) | [Wen Yi](https://github.com/YiWen-y)       | Under discussion     |                      |
| 21   | ChakraCore     | v1.11.22             | [chakra_report4](https://github.com/microsoft/ChakraCore/issues/6516) | [Wen Yi](https://github.com/YiWen-y)       | Verified         |                      |
| 22   | Hermes         | 9caeabc              | [hermes_repot2](https://github.com/facebook/hermes/issues/387) | [Wen Yi](https://github.com/YiWen-y)       | Verified         |                      |
| 23   | QuickJS        | quickjs-2020-09-06   | [qjs_report1](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/data/Bugs/local-bugs%20-%20other_fuzzers/DIE/quickJS/No.23.png) | [Wen Yi](https://github.com/YiWen-y)       | Verified         | Previous version     |
| 24   | ChakraCore     | v1.11.22             | [chakra_report5](https://github.com/microsoft/ChakraCore/issues/6523) | [Wen Yi](https://github.com/YiWen-y)       | Verified         |                      |
| 25   | Rhino          | 1.7.13               | [rhino_report9](https://github.com/mozilla/rhino/issues/783) | [Wen Yi](https://github.com/YiWen-y)       | Under discussion     |                      |
| 26   | ChakraCore     | v1.11.22             | [chakra_report6](https://github.com/microsoft/ChakraCore/issues/6518) | [Haobin Li](https://github.com/Haobin-Lee) | Undetermined     |                      |
| 27   | ChakraCore     | v1.11.22             | [chakra_report7](https://github.com/microsoft/ChakraCore/issues/6519) | [Haobin Li](https://github.com/Haobin-Lee) | Verified         |                      |
| 28   | Rhino          | 1.7.13               | [rhino_report10](https://github.com/mozilla/rhino/issues/781) | [Haobin Li](https://github.com/Haobin-Lee) | Under discussion     |                      |
| 29   | ChakraCore     | v1.11.22             | [chakra_report8](https://github.com/microsoft/ChakraCore/issues/6520) | [Haobin Li](https://github.com/Haobin-Lee) | Undetermined     |                      |
| 30   | ChakraCore     | v1.11.19             | [chakra_report9](https://github.com/microsoft/ChakraCore/issues/6502) | [Haobin Li](https://github.com/Haobin-Lee) | Undetermined     |                      |

### Montage-discovered Bugs

| No.  | JS Engines  | Build Version      | Bug Report Link                                              | Contributor                                | State            | Remarks              |
| ---- | ----------- | ------------------ | ------------------------------------------------------------ | ------------------------------------------ | ---------------- | -------------------- |
| 1    | Rhino       | 1.7.12             | [rhino_report1](https://github.com/mozilla/rhino/issues/665) | [Yang Tian](https://github.com/ty5491003)  | Fixed            | Duplicated test case |
| 2    | Rhino       | 1.7.12             | [rhino_report2](https://github.com/mozilla/rhino/issues/719) | [Haobin Li](https://github.com/Haobin-Lee) | Under discussion | Duplicated test case |
| 3    | Hermes      | b6530ae            | [hermes_report1](https://github.com/facebook/hermes/issues/277) | [Wen Yi](https://github.com/YiWen-y)       | Fixed            | Duplicated test case |
| 4    | Rhino       | 1.7.12             | [rhino_report3](https://github.com/mozilla/rhino/issues/774) | [Yuan Wang](https://github.com/YuanWangC)  | Under discussion |                      |
| 5    | Rhino       | 1.7.13             | [rhino_report4](https://github.com/mozilla/rhino/issues/775) | [Xing Qu](https://github.com/QuXing9)      | Under discussion |                      |
| 6    | Rhino       | 1.7.13             | [rhino_report5](https://github.com/mozilla/rhino/issues/776) | [Yuan Wang](https://github.com/YuanWangC)  | Under discussion |                      |
| 7    | Hermes      | 9caeabc            | [hermes_report2](https://github.com/facebook/hermes/issues/377) | [Haobin Li](https://github.com/Haobin-Lee) | Fixed            |                      |
| 8    | ChakraCore  | 63c5099            | [chakra_report1](https://github.com/microsoft/ChakraCore/issues/6515) | [Wen Yi](https://github.com/YiWen-y)       | Under discussion |                      |
| 9    | Rhino       | 1.7.13             | [rhino_report6](https://github.com/mozilla/rhino/issues/782) | [Wen Yi](https://github.com/YiWen-y)       | Under discussion |                      |
| 10   | Hermes      | 9caeabc            | [hermes_report3](https://github.com/facebook/hermes/issues/378) | [Haobin Li](https://github.com/Haobin-Lee) | Fixed            |                      |
| 11   | ChakraCore  | 63c5099            | [chakra_report2](https://github.com/microsoft/ChakraCore/issues/6514) | [Xing Qu](https://github.com/QuXing9)      | Under discussion |                      |
| 12   | Hermes      | 9caeabc            | [hermes_report4](https://github.com/facebook/hermes/issues/389) | [Xing Qu](https://github.com/QuXing9)      | Verified         |                      |
| 13   | JerryScript | 7df87b7            | [jerry_report1](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/data/Bugs/local-bugs%20-%20other_fuzzers/Montage/No.13.png) | [Wen Yi](https://github.com/YiWen-y)       | Fixed            | Previous version     |
| 14   | QuickJS     | quickjs-2020-09-06 | [qjs_report1](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/data/Bugs/local-bugs%20-%20other_fuzzers/Montage/No.14.png) | [Xing Qu](https://github.com/QuXing9)      | Under discussion | Previous version     |
| 15   | Rhino       | 1.7.13             | [rhino_report7](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/data/Bugs/local-bugs%20-%20other_fuzzers/Montage/No.15.png) | [Haobin Li](https://github.com/Haobin-Lee) | Verified         | Previous version     |

### DeepSmith-discovered Bugs

| No.  | JS Engines  | Build Version      | Bug Report Link                                              | COMFORT Team Member (Contributor)          | State    | Remarks              |
| ---- | ----------- | ------------------ | ------------------------------------------------------------ | ------------------------------------------ | -------- | -------------------- |
| 1    | JerryScript | 996bf76            | [jerry_report1](https://github.com/jerryscript-project/jerryscript/issues/3473) | [Yuan Wang](https://github.com/YuanWangC)  | Fixed    | Duplicated test case |
| 2    | ChakraCore  | eaaf7ac            | [chakra_report1](https://github.com/microsoft/ChakraCore/issues/6383) | [Yuan Wang](https://github.com/YuanWangC)  | Verified | Duplicated test case |
| 3    | v8          | 0e44fef            | [v8_report1](https://bugs.chromium.org/p/v8/issues/detail?id=8088) | [Yuan Wang](https://github.com/YuanWangC)  | Fixed    | Duplicated test case |
| 4    | QuickJS     | quickjs-2020-01-05 | [qjs_report1](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/data/Bugs/local-bugs/quickJS/No.29.pdf)                  | [Yuan Wang](https://github.com/YuanWangC)  | Fixed    | Duplicated test case |
| 5    | JerryScript | 9ab4872            | [jerry_report2](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/data/Bugs/local-bugs%20-%20other_fuzzers/DeepSmith/jerryscript/No.5.png) | [Haobin Li](https://github.com/Haobin-Lee) | Fixed    | Previous version     |
| 6    | ChakraCore  | v1.11.22           | [chakra_report2](https://github.com/NWU-NISL-Fuzzing/COMFORT/blob/main/artifact_evaluation/data/Bugs/local-bugs%20-%20other_fuzzers/DeepSmith/ChakraCore/No.6.png) | [Haobin Li](https://github.com/Haobin-Lee) | Verified |                      |
