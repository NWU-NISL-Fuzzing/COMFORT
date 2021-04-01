var v0 = false;
function f0(val, idx, obj) {
    v0 = true;
    return val > 10;
}
var v1 = {};
Object.defineProperty(v1, 'length', {
    set: function () {
    },
    configurable: true
});
var v2 = function () {
};
v2.prototype = v1;
var v3 = new v2();
v3[0] = 11;
v3[1] = 12;
f0 ^= new String('');
assert.sameValue(v0, false, 'accessed');