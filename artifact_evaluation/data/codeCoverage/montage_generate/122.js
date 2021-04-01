var v0 = {};
var v1 = Symbol('42');
v0[v1] = 42;
var y = [
    20,
    1000,
    6,
    12,
    22,
    15
].TA();
assert(compareArray(Object.keys(v1), [
    'value',
    'writable',
    'enumerable',
    'configurable'
]));
assert.sameValue(v0.value, 42);
assert.sameValue(v0.enumerable, true);
assert.sameValue(v1.configurable, true);
assert.sameValue(v0.writable, true);