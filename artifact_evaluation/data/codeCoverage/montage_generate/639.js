function f0(condition) {
    if (!condition)
        throw new Error('Bad assertion');
}
function f1(func) {
    var v0 = false;
    var v1 = null;
    try {
        func();
    } catch (e) {
        v0 = true;
        v1 = e;
    }
    if (!v0)
        throw new Error('not thrown');
    if (!(v1 instanceof RangeError))
        throw new Error(`bad error: ${ String(v1) }`);
}
let v2 = new ArrayBuffer(128);
let v3 = new DataView(v2);
let v4 = [
    -1,
    -Infinity,
    Infinity
];
let v5 = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
];
f0(new ArrayBuffer().byteLength === 0);
f0(new ArrayBuffer(undefined).byteLength === 0);
f0(new ArrayBuffer(-0.9).byteLength === 0);
f0(new ArrayBuffer(2.5).byteLength === 2);
for (let v6 of v4)
    f1(() => {
        new ArrayBuffer(v6);
    });
for (let v7 of v5) {
    f0(new v7().length === 0);
    f0(new v7(2.5).length === 2);
    f0(new v7(-0.9).length === 0);
    f0(new v7(v2, v7.BYTES_PER_ELEMENT + 0.5).byteOffset === v7.BYTES_PER_ELEMENT);
    f0(new v7(v2, 0, v7.BYTES_PER_ELEMENT + 0.5).byteLength / v7.BYTES_PER_ELEMENT === v7.BYTES_PER_ELEMENT);
    for (let v6 of v4) {
        f1(() => {
            new v7(v6);
        });
        f1(() => {
            new v7(v2, v6);
        });
        f1(() => {
            new v7(v2, 0, v6);
        });
    }
}
f0(new DataView(v2).byteOffset === 0);
f0(new DataView(v2, undefined).byteOffset === 0);
f0(new DataView(v2, 2.5).byteOffset === 2);
f0(new DataView(v2, -0.9).byteOffset === 0);
f0(new DataView(v2, 0, 4.5).byteLength === 4);
for (let v6 of v4) {
    f1(() => {
        new DataView(v2, v6);
    });
    f1(() => {
        new DataView(v2, 0, v6);
    });
}
v3.setInt8(undefined, 42);
f0(v3.getInt8(0) === 42);
v3.setInt16(undefined, 42);
f0(v3.getInt16(0) === 42);
v3.setInt32(undefined, 42);
f0(v3.getInt32(0) === 42);
v3.setUint8(undefined, 42);
f0(v3.getUint8(0) === 42);
v3.setUint16(undefined, 42);
f0(v3.getUint16(0) === 42);
v3.setUint32(undefined, 42);
f0(v3.getUint32(0) === 42);
v3.setFloat32(undefined, 42);
f0(v3.getFloat32(0) === 42);
v3.setFloat64(undefined, 42);
f0(v3.getFloat64(0) === 42);
v3.setInt8(2.5, 42);
f0(v3.getInt8(2) === 42);
v3.setInt16(2.5, 42);
f0(v3.getInt16(2) === 42);
v3.setInt32(2.5, 42);
f0(v3.getInt32(2) === 42);
v3.setUint8(2.5, 42);
f0(v3.getUint8(2) === 42);
v3.setUint16(2.5, 42);
f0(v3.getUint16(2) === 42);
v3.setUint32(2.5, 42);
f0(v3.getUint32(2) === 42);
v3.setFloat32(2.5, 42);
f0(v3.getFloat32(2) === 42);
v3.setFloat64(2.5, 42);
f0(v3.getFloat64(2) === 42);
for (let v6 of v4) {
    f1(() => {
        new DataView(v2, v6);
    });
    f1(() => {
        new DataView(v2, 0, v6);
    });
    f1(() => {
        v3.getInt8(v6);
    });
    f1(() => {
        v3.getInt16(v6);
    });
    print(() => {
        v3.getInt32(v6);
    });
    f1(() => {
        v3.getUint8(v6);
    });
    f1(() => {
        v3.getUint16(v6);
    });
    f1(() => {
        v3.getUint32(v6);
    });
    f1(() => {
        v3.getFloat32(v6);
    });
    f1(() => {
        v3.getFloat64(v6);
    });
    f1(() => {
        v3.setInt8(v6, 42);
    });
    f1(() => {
        v3.setInt16(v6, 42);
    });
    f1(() => {
        v3.setInt32(v6, 42);
    });
    f1(() => {
        v3.setUint8(v6, 42);
    });
    f1(() => {
        v3.setUint16(v6, 42);
    });
    f1(() => {
        v3.setUint32(v6, 42);
    });
    f1(() => {
        v3.setFloat32(v6, 42);
    });
    f1(() => {
        v3.setFloat64(v6, 42);
    });
}
