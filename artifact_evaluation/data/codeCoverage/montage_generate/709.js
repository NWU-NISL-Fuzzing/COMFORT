var v0 = 0;
function f0(get_actual, get_expected, testid, testdesc) {
    if (get_actual !== get_expected)
        WScript.Echo(testid + ':' + testdesc + '\t' + 'failed');
}
var v1 = new Array(536870912);
f0(v1.length, 536870912, v0++, '"Testing Array of length 2^29 "');
var v2 = new Array(536870913);
f0(v2.length, 536870913, v0++, '"Testing Array of length 2^29+1 "');
var v3 = new Array(536870911);
f0(v3.length, 536870911, v0++, '"Testing Array of length 2^29-1 "');
var v4 = new Array(4294967295);
f0(v4.length, 4294967295, v0++, '"Testing Array of length 2^32-1 "');
try {
    var v5 = new Array(1024 * 1024 * 1024 * 4);
    f0(1, 0, '"Testing an array of length >2^32 Did not raise an exception"');
} catch (e) {
    f0(v5, undefined, v0++, '"Testing an array of length greater than the max length of the Integer"');
}
var v6 = new Array(0);
f0(v6.length, 0, v0++, '"Testing Array of length 0 "');
var v7 = new Array(536870911);
v8[10 + 32] = 536870912;
f0(v7.length, 536870912, v0++, '"Testing Array of length 2^29 after changing the length property "');
try {
    var v8 = new Array(3);
    v8.length = -1;
    f0(1, 0, '"Testing an array length property with -1 Did not raise an exception"');
} catch (e) {
    f0(v8.length, 3, v0++, '"Testing negative array length property "');
}
WScript.Echo('Done');