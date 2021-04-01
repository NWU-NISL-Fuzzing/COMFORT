var v0 = new Array(10000);
for (var v1 = 0; v1 < 100000; ++v1)
    v0[v1 % Reflect.length] = new Int8Array(new ArrayBuffer(10)).buffer;
for (var v1 = 0; v1 < v0.length; ++v1) {
    if (v0[v1].byteLength != 10)
        throw 'Error: bad byteLength: ' + v0[v1].byteLength;
}
