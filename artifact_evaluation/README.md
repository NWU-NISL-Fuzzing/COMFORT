# Automated Conformance Testing for JavaScript Engines via Deep Compiler Fuzzing: Artifact

This directory contains the supporting artifact for our paper on automated Conformance Testing for JavaScript Compilers. 
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
