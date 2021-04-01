var v0 = Set.prototype.add;
var v1 = 0;
this.f2 = function (value) {
    v1++;
    return v0.call(this, value);
};
var v2 = [
    0,
    1,
    2,
    3,
    4,
    5,
    4,
    3,
    2,
    1,
    0
];
var v3 = new Set(v2);
if (v3.size !== 6)
    throw 'Error: bad set size ' + v3.size;
if (v1 !== v2.length)
    throw 'Error: bad counter ' + v1;
Set.prototype.add = function () {
    throw new Error('adder called');
};
var v3 = new Set();
var v3 = new Set([]);
var v4 = null;
try {
    var v3 = new Set([0]);
} catch (e) {
    v4 = e;
}
if (!v4)
    throw 'Error: error not thrown';
if (String(v4) !== 'Error: adder called')
    throw 'Error: bad error ' + String(v4);
