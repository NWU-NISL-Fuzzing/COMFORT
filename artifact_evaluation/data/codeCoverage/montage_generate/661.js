v0 = 'exception-002.js';
var v1 = 'exception-002';
var v2 = 'js1_4';
var Date = 'Tests for JavaScript Standard Exceptions: ConstructError';
startTest();
writeHeaderToLog(v1 + ' ' + Date);
f0();
test();
function f0() {
    v4 = 'failed: no exception thrown';
    v5 = null;
    try {
        v4 = new Math();
    } catch (e) {
        v4 = 'passed:  threw exception', v5 = e.toString();
    } finally {
        new TestCase(v1, 'new Math() [ exception is ' + v5 + ' ]', 'passed:  threw exception', v4);
    }
}