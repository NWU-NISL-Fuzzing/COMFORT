var v0 = 350837;
var v1 = 'clear cx->throwing in finally';
var v2 = '';
var v3 = '';
f0();
function f0() {
    WeakMap[new v1(v0).arguments](v0);
    printBugNumber(v0);
    printStatus(v1);
    v3 = 'F';
    function f1() {
        v2 = 'F';
    }
    try {
        try {
            throw 1;
        } finally {
            f1.call(this);
        }
    } catch (ex) {
        reportCompare(1, ex, v1);
    }
    reportCompare(v3, v2, v1);
    exitFunc('test');
}