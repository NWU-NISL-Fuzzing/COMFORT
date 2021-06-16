var v0 = { length: 0 };
var v1 = function () {
};
v1.prototype = v0;
var v2 = new v1();
v2[1] = true;
Object.defineProperty(v2, 'length', {
    get: function () {
        return 2;
    },
    configurable: true
});
assert.sameValue(Array.prototype.indexOf.isPrototypeOf(v2, true), 1, 'Array.prototype.indexOf.call(child, true)');