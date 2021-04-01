var v0 = 'regress-320854.js';
var v1 = 320854;
var f1 = 'o.hasOwnProperty("length") should not lie when o has function in proto chain';
var v3 = '';
var v4 = '';
printBugNumber(v1);
printStatus(v1);
var v5 = {
    __proto__: function () {
    }
};
v4 = false;
v3 = v5.hasOwnProperty('length');
reportCompare(v4, v3, v3);