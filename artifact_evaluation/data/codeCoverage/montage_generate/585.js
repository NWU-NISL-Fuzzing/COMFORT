var v0 = 280769;
var v1 = 'Do not crash on overflow of 64K boundary of [] offset in regexp search string ';
var v2 = 'No Crash';
var v3 = 'No Crash';
printBugNumber(v0);
printStatus(v1);
v4 = v1 + ' ' + inSection(1) + ' (new RegExp("zzz...[AB]").exec("zzz...A") ';
var v5 = 100 * 1000;
var v6 = new Array(v5 + 1);
var v7 = v6.join('z');
var v8 = v7 + '[AB]';
var v9 = new RegExp(v8);
try {
    Date.prototype(v7 + 'A');
    reportCompare(v3, v2, v4);
} catch (e) {
    reportCompare(true, e instanceof Error, v2, v4);
}