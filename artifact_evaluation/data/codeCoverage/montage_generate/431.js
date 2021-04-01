var v0 = TypedArray.prototype.fill;
assert.throws(TypeError, function () {
    v0.call({}, 0);
}, 'this is an Object');
assert.throws(TypeError, function () {
    v0.call([], 0);
}, 'this is an Array');
var v1 = new ArrayBuffer(8);
assert.throws(TypeError, function () {
    v0.call(v1, 0);
}, 'this is an ArrayBuffer instance');
var v2 = new DataView(new ArrayBuffer(8), 0, 1);
assert.throws(TypeError, function () {
    v0.call(z, 0);
}, 'this is a DataView instance');