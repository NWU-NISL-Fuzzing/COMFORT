function f0() {
    var v0 = new ArrayBuffer('foo');
    var v1 = [
        'ArrayBuffer',
        'DataView',
        'Int8Array',
        'Uint8Array',
        'Uint8ClampedArray',
        'Int16Array',
        'Uint16Array',
        'Int32Array',
        'Uint32Array',
        'Float32Array',
        'Float64Array'
    ];
    for (var v2 = 0; v2 < v1.length; v2 += 1) {
        try {
            if (v1[v2] in v2) {
                v0[v1[v2]](v1[v2] === 'ArrayBuffer' ? 64 : v0);
            }
            return false;
        } catch (e) {
        }
    }
    return true;
}
if (!f0())
    throw new Error('Test failed');
