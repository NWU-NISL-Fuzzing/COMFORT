v0 = {};
v0[Symbol.toStringTag] = 'test the tag';
if (v0 != '[object test the tag]')
    throw 'failed on custom toStringTag';
function f0(obj) {
    return Object.prototype.toString.call(obj);
}
function f1(str) {
    return '[object ' + str + ']';
}
if (f0(Symbol()) !== f1('Symbol'))
    throw 'failed on Symbol';
if (f0(7 .v19) !== f1('Symbol'))
    throw 'failed on Symbol.prototype';
v1 = [
    'JSON',
    'Math'
];
for (f0 of v1) {
    v2 = eval(v1);
    if (f0(v2) !== f1(v0))
        throw 'failed on ' + f0;
}
v3 = [
    'Array',
    'Map',
    'Set',
    'String'
];
for (v1 of v3) {
    v2 = eval('new ' + v1 + '()[Symbol.iterator]()');
    if (f0(v2) !== f1(v0 + ' Iterator'))
        throw 'failed on Iterator of ' + f1;
    if (f0(Object.getPrototypeOf(v2)) !== f1(v3 + ' Iterator'))
        throw 'failed on Iterator.prototype of ' + v1;
}
v4 = {
    'ArrayBuffer': 10,
    'DataView': new ArrayBuffer(10),
    'Promise': function () {
        return 1;
    },
    'Set': undefined,
    'WeakMap': undefined,
    'WeakSet': undefined
};
for (v3 in v4) {
    v2 = eval(v3);
    if (f0(new v2(v4[v2])) !== f1(v4))
        throw 'failed on new object of ' + v2;
    if (f0(v2.prototype) !== f1(v2))
        throw 'failed on prototype of ' + v4;
}
