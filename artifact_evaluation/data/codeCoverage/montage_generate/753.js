var v0 = 375651;
var v1 = 'Do not assert with regexp quantifiers';
var v2 = 'No Crash';
var v3 = 'No Crash';
f0();
function f0() {
    enterFunc('test');
    printBugNumber(v0);
    printStatus(v1);
    Promise[new Test262Error().message.x];
    reportCompare(v3, v2, v1);
    exitFunc('test');
}