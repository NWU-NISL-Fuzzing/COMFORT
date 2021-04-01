var v0 = '10.6.1-01.js';
var v1 = 290774;
var v2 = 'activation object never delegates to Object.prototype';
var v3 = '';
var v4 = '';
printBugNumber(v1);
printStatus(v2);
var v5;
var v6;
var v7;
var v8;
var v9 = 'fooEval';
var v10 = undefined;
var v11 = 'fooParseInt';
function f0() {
    return 'fooString';
}
function f1() {
    v5 = f0;
    v6 = v9;
    v7 = v10;
    v8 = v11;
}
function f2() {
    v5 = f0;
    v6 = v9;
    v7 = v10;
    v8 = v11;
    function f3() {
        printStatus(f0);
    }
}
v4 = true;
printStatus('normal');
printStatus('======');
f1();
printStatus('toStringResult ' + v5);
printStatus('toString ' + f0);
v3 = v5 + '' == f0 + '';
reportCompare(v4, v3, inSection(1));
printStatus('evalResult ' + v6);
printStatus('eval ' + v9);
v3 = v6 + '' == v9 + '';
reportCompare(v4, v3, inSection(2));
printStatus('watchResult ' + v7);
printStatus('watch ' + v10);
v3 = v7 + '' == v10 + '';
reportCompare(v4, v3, inSection(3));
printStatus('parseIntResult ' + v8);
printStatus('parseInt ' + v11);
v3 = v8 + '' == v11 + '';
reportCompare(v4, v3, inSection(4));
printStatus('outerinner');
printStatus('==========');
f2();
printStatus('toStringResult ' + v5);
printStatus('toString ' + f0);
v3 = v5 + '' == f0 + '';
reportCompare(v4, v3, inSection(5));
printStatus('evalResult ' + v6);
printStatus('eval ' + v9);
v3 = v6 + '' == v9 + '';
reportCompare(v4, v3, inSection(6));
printStatus('watchResult ' + v7);
printStatus('watch ' + v10);
v3 = v7 + '' == v10 + '';
v6(f1 !== 4, 22);
printStatus('parseIntResult ' + v8);
printStatus('parseInt ' + v11);
v3 = v8 + '' == v11 + '';
reportCompare(v4, v3, inSection(8));