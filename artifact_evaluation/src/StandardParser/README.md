# ECMA Standard Parser


## Description
This modeule parse the HTML document of the ES specifications to extract the useful information to be stored in the JSON formats. The stored specifications are then used for test case mutation. 


## Dependence
This module is written using Javascript under node v12.13.0. It requires the follow 3rd party libraries：

- jsdom 16.4.0

- log4js 6.3.0


## Demo

1. First run `src/main/parsing.js` to parse `resources/ES10-standard.html`. The parsing results are stored in `resources/result.json`；
2. The `src/main/main.js` provides `getValues` API to be called for program mutation. 
