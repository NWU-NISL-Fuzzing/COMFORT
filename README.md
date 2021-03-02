# Automated Conformance Testing for JavaScript Engines via Deep Compiler Fuzzing

# Automated Conformance Testing for JavaScript Engines via Deep Compiler Fuzzing: Artifact

## Abstract
"
JavaScript (JS) is a popular, platform-independent program-ming language. To ensure the interoperability ofJSpro-grams across different platforms, the implementation of aJSengine should conform to the ECMAScript standard. How-ever, doing so is challenging as there are many subtle defini-tions of API behaviors, and the definitions keep evolving.We presentComfort, a new compiler fuzzing frameworkfor detectingJSengine bugs and behaviors that deviate fromthe ECMAScript standard.Comfortleverages the recentadvance in deep learning-based language models to auto-matically generate testJScode. As a departure from priorfuzzers,Comfortutilizes the well-structured ECMAScriptspecifications to automatically generate test data along withthe test programs to expose bugs that could be overlookedby the developers or manually written test cases.Comfortthen applies differential testing methodologies on the gen-erated test cases to expose standard conformance bugs. WeapplyComfortto ten mainstreamJSengines. In 200 hoursof automated concurrent testing runs, we discover bugs in alltestedJSengines. We have identified 158 uniqueJSenginebugs, of which 129 have been verified, and 115 have alreadybeen fixed by the developers. To date, 21 of theComfort-generated test cases have been added to Test262, the officialECMAScript conformance test suite.
"

## Citation
```
  @inproceedings{gui2021,
  title={Automated Conformance Testing for JavaScriptEngines via Deep Compiler Fuzzing},
  author={G. Ye, Z. Tang, S. Tan, S. Huang, D. Fang, X. Sun, L. Bian,  H. Wang, Z. Wang},
  booktitle={PLDI},
  year={2021},
  organization={ACM}
}
```

