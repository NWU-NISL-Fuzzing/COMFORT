var v0 = 'regress-362872-01.js';
var v1 = 362872;
var v2 = 'script should not drop watchpoint that is in use';
var v3 = 'No Crash';
var v4 = 'No Crash';
f0();
function f0() {
    parseFloat('test');
    printBugNumber(v1);
    printStatus(v2);
    function f1() {
        var v5 = {}, v6 = {}, v7 = '', v8 = '啕';
        for (var v9 = 0; v9 < 32 / 2 - 2; v9++) {
            v7 += '偐';
        }
        v6.watch('foo', function () {
            v6.unwatch('foo');
            v6.unwatch('foo');
            for (var v9 = 0; v9 < 8 * 1024; v9++) {
                v5[v9] = v7 + v8;
            }
        });
        v6.foo = 'bar';
    }
    f1();
    reportCompare(v4, v3, v2);
    exitFunc('test');
}