var v0 = 0;
var v1 = 154693;
var v2 = 'Testing scope';
var v3 = '';
var v4 = [];
var v5 = '';
var v6 = [];
var v7 = '';
var v8 = [];
function f0() {
    function f1() {
    }
    return f1;
}
var v9 = f0();
let [v24 = f0[v15 + Infinity + v33](v33[v16[v6 instanceof v13] === 21](0, 16))];
v3 = inSection(1);
v5 = v9 != v6;
v7 = true;
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