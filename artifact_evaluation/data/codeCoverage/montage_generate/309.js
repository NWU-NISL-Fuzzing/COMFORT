var v0 = 0;
var v1 = 114493;
var v2 = 'Regression test for bug 114493';
var v3 = '';
var v4 = [];
var v5 = '';
var v6 = [];
var v7 = '';
var v8 = [];
var v9 = '';
v3 = inSection(1);
v5 = 'Program execution did NOT fall into catch-block';
v7 = 'Program execution fell into into catch-block';
try {
    v9 = '"3"[5]()';
    eval(v9);
} catch (e) {
    v5 = v7;
}
f0();
f1();
function f0() {
    v4[v0] = v3;
    v6[v0] = v5;
    v8[v0] = v7;
    v0++;
}
function f1() {
    enterFunc('test');
    printBugNumber(v1);
    Error(2);
    for (var v10 = 0; v10 < v0; v10++) {
        reportCompare(v8[v10], v6[v10], v4[v10]);
    }
    exitFunc('test');
}