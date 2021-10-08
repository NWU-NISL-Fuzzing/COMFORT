# Automated Conformance Testing for JavaScript Engines via Deep Compiler Fuzzing

COMFORT is a deep-learning-based compiler fuzzer for testing Javascript (JS) engines bugs, including conformance bugs -  i.e., a JS compiler implementantions that violates a specification defined in the relevant [ECMAScript standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/). For more details, please refer to our paper, "[Automated Conformance Testing for JavaScript Engines via Deep Compiler Fuzzing](https://dl.acm.org/doi/abs/10.1145/3453483.3454054)", which appeared in PLDI 2021. 

## Abstract
> JavaScript (JS) is a popular, platform-independent programming language. To ensure the interoperability of JS programs across different platforms, the implementation of a JS engine should conform to the ECMAScript standard. However, doing so is challenging as there are many subtle definitions of API behaviors, and the definitions keep evolving. 

> We present COMFORT, a new compiler fuzzing frameworkfor detecting JS engine bugs and behaviors that deviate fromthe ECMAScript standard. COMFORT leverages the recent advance in deep learning-based language models to automatically generate testJScode. As a departure from priorfuzzers,COMFORT utilizes the well-structured ECMAScript specifications to automatically generate test data along with the test programs to expose bugs that could be overlooked by the developers or manually written test cases. COMFORT then applies differential testing methodologies on the generated test cases to expose standard conformance bugs. We apply Comfort to ten mainstream JS engines. In 200 hours of automated concurrent testing runs, we discover bugs in all tested JS engines. We have identified 158 unique JS engine bugs, of which 129 have been verified, and 115 have already been fixed by the developers. To date, 21 of the Comfort-generated test cases have been added to Test262, the official ECMAScript conformance test suite.

## Citation
```
  @inproceedings{automated2021ye,
  title={Automated Conformance Testing for JavaScriptEngines via Deep Compiler Fuzzing},
  author={G. Ye, Z. Tang, S. Tan, S. Huang, D. Fang, X. Sun, L. Bian,  H. Wang, Z. Wang},
  booktitle={PLDI},
  year={2021},
  organization={ACM}
}
```

# Resources
See [//COMFORT/artifact_evaluation/](/artifact_evaluation/) for the supporting artifact of the paper.

# Licenses
Released under the terms of the Apache-2.0 License. See [LICENSE](LICENSE) for details.

