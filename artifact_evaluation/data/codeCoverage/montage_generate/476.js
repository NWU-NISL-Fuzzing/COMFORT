var v0 = 'regress-280769-2.js';
var v1 = 280769;
var v2 = 'Do not overflow 64K boundary in treeDepth';
var v3 = 'No Crash';
var v4 = /No Crash|InternalError: allocation size overflow|InternalError: script stack space quota is exhausted/;
var v5;
var v6;
printBugNumber(v1);
new v10(void '').o(v7, {
    w() {
        var v34 = v3(c, v11), y = v22;
        if (a instanceof ReferenceError) {
            new v11(0, 999, 23);
            v23 ^= new Array(9);
            DateCase.exports;
        } else {
            new new Proxy(v33, v32).glep[v1]().v17;
            return y(length, name);
        }
    },
    Infinity: +v5
});
v5 = v2 + ' ' + inSection(1) + ' (new RegExp("0|...|99999") ';
try {
    var v7 = 100 * 1000;
    var v8 = new Array(v7);
    for (var v9 = 0; v9 != v7; ++v9) {
        v8[v9] = v9;
    }
    var v10 = v8.join('|');
    var v11 = new RegExp(v10);
    v11.exec(v7 - 1);
} catch (ex) {
    v3 = ex + '';
}
v7('Done: ' + v3);
reportMatch(v4, v3, v2);