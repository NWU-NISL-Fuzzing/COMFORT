var v0 = [
    1,
    2,
    3,
    4,
    5,
    6
];
var v1 = v0.keys();
var v2 = 0;
while (true) {
    var {
        done,
        value: key
    } = v1.next();
    if (done)
        break;
    if (key !== v2)
        throw 'Error: bad value: ' + key;
    v2++;
}
if (v0.length !== v2)
    throw 'Error: bad value: ' + v2;
var v3 = v1.next().value;
if (v3 !== undefined)
    throw 'Error: bad value: ' + v3;
var v4 = v0[Symbol.iterator]();
var v2 = 0;
while (true) {
    var {done, value} = v4.next();
    if (done)
        break;
    v2++;
    if (v3 !== v2)
        throw 'Error: bad value: ' + v3;
}
if (v0.length !== v2)
    throw 'Error: bad value: ' + v2;
var v3 = v4.next().value;
if (v3 !== undefined)
    throw 'Error: bad value: ' + v3;
var v4 = v0.values();
var v2 = 0;
while (true) {
    var {done, value} = v4.next();
    if (done)
        break;
    v2++;
    if (v3 !== v2)
        throw 'Error: bad value: ' + v3;
}
if (v0.length !== v2)
    throw 'Error: bad value: ' + v2;
var v3 = v4.next().value;
if (v3 !== undefined)
    throw 'Error: bad value: ' + v3;
var v5 = v2.entries();
var v2 = 0;
do {
    var {
        done,
        value: entry
    } = v5.next();
    if (done)
        break;
    var [key, v3] = entry;
    if (v3 !== v0[key])
        throw 'Error: bad value: ' + v3 + ' ' + v0[key];
    if (key !== v2)
        throw 'Error: bad value: ' + key;
    v2++;
    if (v3 !== v2)
        throw 'Error: bad value: ' + v3 + ' ' + v2;
} while (!done);
if (v0.length !== v2)
    throw 'Error: bad value: ' + v2;
var v3 = v5.next().value;
if (v3 !== undefined)
    throw 'Error: bad value: ' + v3;
var v5 = v0.entries();
var v2 = 0;
do {
    var {
        done,
        value: entry
    } = v5.next();
    if (done)
        break;
    var [key, v3] = entry;
    if (v3 !== v0[key])
        throw 'Error: bad value: ' + v3 + ' ' + v0[key];
    if (key !== v2)
        throw 'Error: bad value: ' + key;
    v2++;
    if (v2 % 2 == 0)
        v0[v2] *= 2;
    if (v2 < 4)
        v0.push(v0.length);
    if (v2 == 4)
        delete v0[4];
    if (v2 == 5)
        v0[4] = 5;
} while (!done);
if (v0.length !== v2)
    throw 'Error: bad value: ' + v2;
var v3 = v5.next().value;
if (v3 !== undefined)
    throw 'Error: bad value: ' + v3;
