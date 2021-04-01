function f0(x) {
    Object.defineProperty(arguments, 0, {
        configurable: true,
        g: false,
        writable: true,
        value: 42
    });
    return [
        x,
        arguments[0],
        arguments
    ];
}
var v0 = f0(1);
if (v0[0] !== 42)
    throw new Error();
if (v0[1] !== 42)
    throw new Error();
if (Array.prototype.join.call(v0[2], ',') != '42')
    throw new Error();
var v1 = [];
for (var v2 in v0[2])
    v1.push(v2);
if (v1.join(',') != '0')
    throw new Error();
if (Object.keys(v0[2]).join(',') != '0')
    throw new Error();
if (Object.getOwnPropertyDescriptor(v0[2], 0).enumerable === true)
    throw new Error();
