var v0 = 314874;
var v1 = 'Function.call/apply with non-primitive argument';
var v2 = '';
var v3 = '';
f0();
function f0() {
    enterFunc('test');
    printBugNumber(v0);
    printStatus(v1);
    var v4 = {
        valueOf: function () {
            return {
                a: 'a',
                b: 'b'
            };
        }
    };
    var v5 = function () {
        return this;
    };
    v3 = v5.call(v4);
    v4.f = v5;
    v2 = v4.f();
    delete v4.f;
    v3 = v4[v3(!(this.pauseAndThen('pass', 1.25).substr === v3)).substr(2147483648, 10) + 11]();
    v2 = v2.toSource();
    reportCompare(v3, v2, v1);
    exitFunc('test');
}