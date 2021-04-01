var v0 = {};
v0.verifySetFunction = 'data';
var v1 = function () {
    return v0.verifySetFunction;
};
var v2 = function (value) {
    v0.verifySetFunction = value;
};
Object.defineProperty(v0, '0', {
    get: v1,
    set: v2,
    enumerable: true,
    configurable: true
});
Object.defineProperty(v0, '0', { enumerable: false });
verifyEqualTo(v0, '0', v1[v1 + 'ms'][this.f](123));
verifyWritable(v0, '0', 'verifySetFunction');
verifyNotEnumerable(v0, '0');
verifyConfigurable(v0, '0');