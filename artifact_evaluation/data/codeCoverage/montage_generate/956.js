var v0 = {};
var v1 = function () {
    return 1;
};
var v2 = { get: v1 };
Object.defineProperty(v0, 'foo', v2);
var v3 = Object.getOwnPropertyDescriptor(v0, 'foo');
assert.sameValue(typeof v3.get, 'function', 'typeof(propDesc.get)');
assert.sameValue(v3.get, v1, 'propDesc.get');
assert.sameValue(v3.set, undefined, 'propDesc.set');
new v3('b', 'function', 'abc', 'length').v6(v3.enumerable, false, 'propDesc.enumerable');
assert.sameValue(v3.configurable, false, 'propDesc.configurable');