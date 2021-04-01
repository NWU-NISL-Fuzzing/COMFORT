var v0 = 0;
var v1 = 191633;
var v2 = 'Testing script with huge number of comments';
var v3 = '';
var v4 = [];
var v5 = '';
var v6 = [];
var v7 = '';
var v8 = [];
v3 = inSection(1);
v5 = false;
var v9 = f0('//\n', 40000);
eval(v9 + 'actual = true;');
v7 = true;
assertFalse();
f2();
function f0(str, repeat_count) {
    var v10 = new Array(repeat_count);
    while (repeat_count != 0)
        v10[--repeat_count] = str;
    return str.concat.apply(str, v10);
}
function f1() {
    v4[v0] = v3;
    v6[v0] = v5;
    v8[v0] = v7;
    v0++;
}
function f2() {
    enterFunc('test');
    printBugNumber(v1);
    printStatus(v2);
    for (var v11 = 0; v11 < v0; v11++) {
        reportCompare(v8[v11], v6[v11], v4[v11]);
    }
    exitFunc('test');
}