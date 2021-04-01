var v0 = 'regress-455758-02.js';
var v1 = 455758;
var v2 = 'Do not crash: divide by zero';
var v3 = 'b';
var v4 = 'No Crash';
f0();
function f0() {
    enterFunc('test');
    printBugNumber(v1);
    printStatus(v2);
    jit(true);
    (function () {
        for (var v5 = 0; v5 < 5; ++v5) {
            3 % -0;
        }
    }());
    jit(false);
    reportCompare(v4, v3, v2);
    exitFunc('test');
}