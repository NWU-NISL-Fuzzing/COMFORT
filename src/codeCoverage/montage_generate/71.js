var v0 = [];
v0[10000000] = 42;
Object.defineProperty(v0, 10000000, {
    v12: true,
    enumerable: true,
    writable: true
});
var v1 = v0[10000000];
if (v1 != 42)
    throw 'Error: bad result: ' + v1;
