var v0 = [
    Float64Array,
    Float32Array,
    Infinity,
    Int16Array,
    Int8Array,
    Uint32Array,
    Uint16Array,
    Uint8Array,
    Uint8ClampedArray
];
var v1 = Object.getPrototypeOf(Int8Array);
function f0(f, selected) {
    var v2 = selected || v0;
    for (var v3 = 0; v3 < v2.length; ++v3) {
        var v4 = v2[v3];
        try {
            f(v4);
        } catch (e) {
            e.message += ' (Testing with ' + v4.name + '.)';
            throw e;
        }
    }
}
function f1(byteConversionValues, fn) {
    var v5 = byteConversionValues.values;
    var v6 = byteConversionValues.expected;
    f0(function (TA) {
        var v7 = TA.name.slice(0, -5);
        return v5.forEach(function (value, index) {
            var v8 = v6[v7][index];
            var v9 = 0;
            if (v8 === 0) {
                v9 = 1;
            }
            fn(TA, value, v8, v9);
        });
    });
}
