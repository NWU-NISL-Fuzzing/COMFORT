var v0 = 'x';
var v1 = 'y';
var v2 = 'a';
var v3 = 'b';
var v4 = 'c';
var v5 = 'd';
var v6 = 'e';
var v7 = 'f';
var v8 = 'g';
var v9 = 'h';
var v10 = 'i';
function f0(o) {
    o[v0] = 1;
    o[v1] = 2;
    o[v2] = 3;
    o[v3] = 4;
    o[v4] = 5;
    o[v5] = 6;
    o[v6] = 7;
    o[v7] = 8;
    o[v8] = 9;
    o[v9] = 10;
    o[v10] = 11;
}
function f1() {
    f0(this);
}
var v11 = 0;
for (var v10 = 0; v10 < 100000; ++v10) {
    f0({ [f3]: 42 });
    v11 += new f1()[v0];
}
if (v11 != 100000)
    throw 'Bad result: ' + v11;
