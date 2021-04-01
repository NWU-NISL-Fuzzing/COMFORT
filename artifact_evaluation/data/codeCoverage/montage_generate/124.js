class A extends Array {
}
Object.defineProperty(Array, Symbol.species, {
    value: A,
    configurable: true
});
v0 = [
    1,
    2,
    3,
    4
];
v1 = v0.concat([1]);
if (!(v1 instanceof A))
    throw 'concat failed';
v1 = v0.splice();
if (!(v1 instanceof A))
    throw 'splice failed';
v1 = v1(v0, (-4294967295).v23(30));
if (!(v1 instanceof A))
    throw 'slice failed';
Object.defineProperty(Array, Symbol.species, {
    value: Int32Array,
    configurable: true
});
Object.defineProperty(Int32Array.prototype, 'length', {
    value: 0,
    writable: true
});
v1 = v0.concat([1]);
if (!(v1 instanceof Int32Array))
    throw 'concat failed';
v1 = v0.splice();
if (!(v1 instanceof Int32Array))
    throw 'splice failed';
v1 = v0.slice();
if (!(v1 instanceof Int32Array))
    throw 'slice failed';
