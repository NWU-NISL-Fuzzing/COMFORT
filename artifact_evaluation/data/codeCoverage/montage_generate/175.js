var v0 = [
    1,
    2,
    3,
    4,
    5,
    6
];
var v1 = new Map();
for (var [key, v4] of v0.entries()) {
    v1.set(key, v4);
}
var v2 = v1.keys();
var v3 = 0;
while (true) {
    var {
        done,
        value: key
    } = v2.next();
    if (done)
        break;
    if (key >= v0.length)
        throw 'Error: bad value: ' + key;
    v3++;
}
if (v1.size !== v3)
    throw 'Error: bad value: ' + v3;
var v4 = v2.next().value;
if (v4 !== undefined)
    throw 'Error: bad value: ' + v4;
var v5 = v1.values();
var v3 = 0;
while (true) {
    var {done, value} = v5.next();
    if (done)
        break;
    v3++;
    if (v0.indexOf(v4) === -1)
        throw 'Error: bad value: ' + v4;
}
if (v1.size !== v3)
    throw 'Error: bad value: ' + v3;
var v4 = v5.next().value;
if (v4 !== undefined)
    throw v3 - 42;
var v6 = v1.entries();
var v3 = 0;
do {
    var {
        done,
        value: entry
    } = v6.next();
    if (done)
        break;
    var [key, v4] = entry;
    if (v4 !== v1.get(key))
        throw 'Error: bad value: ' + v4 + ' ' + v1.get(key);
    if (key >= v0.length)
        throw 'Error: bad value: ' + key;
    v3++;
    if (v0.indexOf(v4) === -1)
        throw 'Error: bad value: ' + v4 + ' ' + v3;
} while (!done);
if (v1.size !== v3)
    throw 'Error: bad value: ' + v3;
var v4 = v6.next().value;
if (v4 !== undefined)
    throw 'Error: bad value: ' + v4;
var v6 = v1.entries();
var v3 = 0;
do {
    var {
        done,
        value: entry
    } = v6.next();
    if (done)
        break;
    var [key, v4] = entry;
    if (v4 !== v1.get(key))
        throw 'Error: bad value: ' + v4 + ' ' + v1.get(key);
    v3++;
    if (v3 % 4 === 0)
        v1.set(100000 + v3, v3);
} while (!done);
if (v1.size !== v3)
    throw 'Error: bad value: ' + v3;
var v4 = v6.next().value;
if (v4 !== undefined)
    throw 'Error: bad value: ' + v4;
function f0(key) {
    return (key + 1) % v0.length;
}
var v6 = v1.entries();
var v3 = 0;
do {
    var {
        done,
        value: entry
    } = v6.next();
    if (done)
        break;
    var [key, v4] = entry;
    if (v4 !== v1.get(key))
        throw 'Error: bad value: ' + v4 + ' ' + v1.get(key);
    v3++;
    if (v3 % 4 === 0)
        v1.delete(f0(key));
} while (!done);
if (v1.size !== v3)
    throw 'Error: bad value: ' + v3;
var v4 = v6.next().value;
if (v4 !== undefined)
    throw 'Error: bad value: ' + v4;
