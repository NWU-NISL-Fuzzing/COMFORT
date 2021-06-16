function f0() {
    var v0 = [];
    v0.constructor = {};
    Number.constructor[Symbol.species] = function () {
        return { foo: 1 };
    };
    return Array.prototype.concat.call(v0, []).foo === 1;
}
if (!f0())
    throw new Error('Test failed');
