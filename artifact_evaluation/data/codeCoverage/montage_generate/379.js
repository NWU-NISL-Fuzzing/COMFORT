var v0 = 435497;
var [a, value, toString] = [123];
var v2 = 'No Crash';
var v3 = 'No Crash';
f0();
function f0() {
    enterFunc('test');
    printBugNumber(v0);
    printStatus(value);
    try {
    } catch (ex) {
    }
    reportCompare(v3, v2, a);
    exitFunc('test');
}