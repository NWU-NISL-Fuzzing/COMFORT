# Automated Conformance Testing for JavaScript Engines via Deep Compiler Fuzzing: Artifact

This directory contains the supporting artifact for our paper on PLDI 2021 paper on Javascript Conformance Testing. It contains reduced-size data sets for evaluating our testcase generator, testcase harness, and differential tester. The idea is that this directory contains minimal working examples which can be evaluated in a reasonable amount of time. All of our code and data will be open-sourced upon publication and has been developed with extensibility as a primary goal. 

# PLDI Submission
A copy of our PLDI submission can be found at: [URL]

# Overview of Results
As stated in Section 5 of the PLDI submission, we have started experimenting with and refining our tool since May 2019. At the time of our PLDI 2021 submission (21 Nov 2020), we have submitted 158 unique bug reports, of which 129 have been verified, and 115 have already been fixed by the developers. Furthermore, 21 of the Comfort generated test cases were added into Test-262, the official Javascript conformance test suite.

A list of bugs discovered by our techniques can be found at [url]. We note that some bug reports were later confirmed by the developers after our PLDI submission, moving our confirmed and verified bugs to xx and xx, respectively. 

# Getting Start Guide
For convenience, we have provided a pre-configured live server with a Python Jupyter Notebook to work through the main results: https://[redacted]:9996 use the password [redacted]. The notebook provides instructions on how to configure and test our techniques on a small-scale dataset. 

Note that we do not log IP addresses or other accessing information, but if you have concerns on this, you could either choose to run the Jupyter Notebook locally on your machine or using a [Tor Browser](https://www.torproject.org/download/) to access our demo website. 

To run our Jupyter Notebook locally, please see [xx]. 


