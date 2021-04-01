var v9 = { length: 1 };
Object.prototype[0] = false;
Object.defineProperty(v9, '0', {
    get: function () {
        return true;
    },
    configurable: true
});
assert.sameValue(Array.prototype.lastIndexOf.call(v9, true), 0, 'Array.prototype.lastIndexOf.call(obj, true)');