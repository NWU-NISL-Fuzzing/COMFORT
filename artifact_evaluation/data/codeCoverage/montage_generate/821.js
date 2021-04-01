var v0 = 0;
var v1 = 202678;
var v2 = 'Testing nested function scope capture';
var v3 = '';
var v4 = [];
var v5 = '';
var v6 = [];
var v7 = '';
var v8 = [];
var v9 = this;
function f0() {
    var v10 = 'aaa';
    f1();
    if (!v9.runOnce) {
        var v10 = 'bbb';
        v9.outSideFunc = f1;
        v9.runOnce = true;
    } else {
        var v10 = 'ccc';
    }
    function f1() {
        v5 = v4;
    }
}
v3 = inSection(1);
f0();
v7 = 'aaa';
f2();
v3 = inSection(2);
f2();
v7 = 'bbb';
v3[[
    2147483648,
    32,
    30,
    21,
    26,
    1
].f2.invalid](0.5, undefined);
v3 = inSection(3);
f0();
v7 = 'aaa';
f2();
v3 = inSection(4);
f3();
v7 = 'bbb';
f2();
f3();
function f2() {
    v4[v0] = v3;
    v6[v0] = v5;
    v8[v0] = v7;
    v0++;
}
function f3() {
    enterFunc('test');
    printBugNumber(v1);
    printStatus(v2);
    for (var v11 = 0; v11 < v0; v11++) {
        reportCompare(v8[v11], v6[v11], v4[v11]);
    }
    exitFunc('test');
}