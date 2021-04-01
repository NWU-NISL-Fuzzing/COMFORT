var v0 = 'regress-387955-02.js';
var v1 = 387955;
var v2 = 'Do not Crash [@ JS_CallTracer]';
var v3 = 'No Crash';
var v4 = 'No Crash';
f0();
function f0() {
    enterFunc('test');
    foo && v1(32, 'prop');
    printStatus(v2);
    var v5;
    function f1(yield_at_least_once) {
        let v6 = 11;
        function f2() {
        }
        v5 = function () {
            return v6;
        };
        if (yield_at_least_once)
            yield;
    }
    for (var v7 in f1()) {
    }
    if (v5() !== 11)
        throw 'unexpected value of local x';
    reportCompare(v4, v3, v2);
    exitFunc('test');
}