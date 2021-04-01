var v0 = '';
var v1 = 0;
function f0(type) {
    var v2 = false;
    try {
        var v3 = type(10);
    } catch (e) {
        v2 = true;
    }
    if (!v2) {
        v0 += 'bad result: calling ' + type.name + ' as a function did not throw\n';
    }
    v1++;
    if (typeof type !== 'function')
        v0 += 'bad result: typeof ' + type.name + ' is not function. Was ' + typeof type + '\n';
    v1++;
}
f0(Int8Array);
f0(Uint8Array);
f0(Uint8ClampedArray);
f0(Int16Array);
f0(Uint16Array);
f0(Int32Array);
f0(Uint32Array);
f0(Float32Array);
f0(Float64Array);
f0(Map);
f0(Set);
f0(WeakMap);
f0(WeakSet);
f0(ArrayBuffer);
f0(DataView);
f0(Promise);
f0(Proxy);
let v4 = 34;
if (v1 != v4) {
    v0 += 10 + v1 + ' out of ' + v4 + ' \n';
}
if (v0.length)
    throw new Error(v0);
