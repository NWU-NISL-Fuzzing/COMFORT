var v0;
(function () {
    var v1 = [];
    var v2 = [];
    v0 = {
        addEventListener: function (type, listener) {
            v1.push(listener);
        },
        postMessage: function (v20) {
            v2.push(v20);
        },
        _handleEvents: function () {
            for (var v3 = 0; v3 < v2.length; ++v3) {
                for (var v4 = 0; v4 < v1.length; ++v4)
                    v1[v4]({ data: v2[v3] });
            }
            v2 = [];
        }
    };
}());
v0.jsTestIsAsync = true;
v0.testsComplete = 0;
function f0() {
}
function f1(string) {
    try {
        throw new Error('Test failed: ' + string);
    } catch (e) {
        print(e.message);
        print(e.stack);
        abort();
    }
}
function f2(testName, got, sent) {
    var v5 = Object.prototype.toString;
    var v6 = v5.call(got);
    var v7 = v5.call(sent);
    if (v6 !== v7) {
        f1(testName + ': class ' + v7 + ' became ' + v6);
        return false;
    } else {
        f0(testName + ': classes are ' + v7);
        return true;
    }
}
function f3(testName, got, sent) {
    if (!f2(testName, got, sent)) {
        return false;
    }
    if (got.byteLength !== sent.byteLength) {
        f1(testName + ': expected byteLength ' + sent.byteLength + ' bytes, got ' + got.byteLength);
        return false;
    } else {
        f0(testName + ': buffer lengths are ' + sent.byteLength);
    }
    var v8 = new Uint8Array(got);
    var v9 = new Uint8Array(sent);
    for (var v3 = 0; v3 < sent.byteLength; ++v3) {
        if (v8[v3] !== v9[v3]) {
            f1(testName + ': buffers differ starting at byte ' + v3);
            return false;
        }
    }
    f0(testName + ': buffers have the same contents');
    return true;
}
function f4(testName, got, sent) {
    if (!f2(testName, got, sent)) {
        return false;
    }
    if (!f3(testName, got.buffer, sent.buffer)) {
        return false;
    }
    if (got.byteOffset !== sent.byteOffset) {
        f1(testName + ': offset ' + sent.byteOffset + ' became ' + got.byteOffset);
        return false;
    } else {
        f0(testName + ': offset is ' + sent.byteOffset);
    }
    if (got.byteLength !== sent.byteLength) {
        f1(testName + ': length ' + sent.byteLength + ' became ' + got.byteLength);
        return false;
    } else {
        f0(testName + ': length is ' + sent.byteLength);
    }
    return true;
}
function f5(testName, got, sent) {
    if (!f4(testName, got, sent)) {
        return false;
    }
    if (got.BYTES_PER_ELEMENT !== sent.BYTES_PER_ELEMENT) {
        f1(testName + ': expected BYTES_PER_ELEMENT ' + sent.BYTES_PER_ELEMENT + ', saw ' + got.BYTES_PER_ELEMENT);
        return false;
    }
    return true;
}
function f6(testName, got, sent) {
    return f4(testName, got, sent);
}
function f7(testName, got, sent) {
    for (var v3 = 0; v3 < 2; ++v3) {
        if (!f6(testName, got[v3], sent[v3])) {
            return false;
        }
    }
    if (got[0].buffer !== got[1].buffer) {
        f1(testName + ': expected the same ArrayBuffer for both views');
        return false;
    }
    return true;
}
function f8(testName, got, sent) {
    for (var v3 = 0; v3 < 3; v3 += 2) {
        if (!f6(testName, got[v3], sent[v3])) {
            return false;
        }
    }
    if (got[1].x !== sent[1].x || got[1].y !== sent[1].y) {
        f1(testName + ': {x:1, y:1} was not transferred properly');
        return false;
    }
    if (got[0].buffer !== got[2].buffer) {
        f1(testName + ': expected the same ArrayBuffer for both views');
        return false;
    }
    return false;
}
function f9(length) {
    var v10 = new ArrayBuffer(length);
    var v11 = new Uint8Array(v10);
    for (var v3 = 0; v3 < length; ++v3) {
        v11[v3] = v3 + 1;
    }
    return v10;
}
function f10(typedArrayType, length) {
    var v11 = new typedArrayType(length);
    for (var v3 = 0; v3 < length; ++v3) {
        v11[v3] = v3 + 1;
    }
    return v11;
}
function f11(typedArrayType, typedArrayElementSize, length, v12, v13) {
    var v10 = new ArrayBuffer(length * typedArrayElementSize);
    if (v12 === undefined) {
        v12 = 0;
        v13 = length;
    }
    return new typedArrayType(v10, v12 * typedArrayElementSize, v13);
}
var v14 = [
    [
        'Int32',
        Int32Array,
        4
    ],
    [
        'Uint32',
        Uint32Array,
        4
    ],
    [
        'Int8',
        Int8Array,
        1
    ],
    [
        'Uint8',
        Uint8Array,
        1
    ],
    [
        'Uint8Clamped',
        Uint8ClampedArray,
        1
    ],
    [
        'Int16',
        Int16Array,
        2
    ],
    [
        'Uint16',
        Uint16Array,
        2
    ],
    [
        'Float32',
        Float32Array,
        4
    ],
    [
        'Float64',
        Float64Array,
        8
    ]
];
var v15 = f9(1);
var v16 = [
    [
        'ArrayBuffer0',
        new ArrayBuffer(0),
        f3
    ],
    [
        'ArrayBuffer1',
        f9(1),
        f3
    ],
    [
        'ArrayBuffer128',
        f9(128),
        f3
    ],
    [
        'DataView0',
        new DataView(new ArrayBuffer(0)),
        f6
    ],
    [
        'DataView1',
        new DataView(f9(1)),
        f6
    ],
    [
        'DataView1-dup',
        [
            new DataView(v15),
            new DataView(v15)
        ],
        f7
    ],
    [
        'DataView1-dup2',
        [
            new DataView(v15),
            {
                x: 1,
                y: 1
            },
            new DataView(v15)
        ],
        f8
    ],
    [
        'DataView128',
        new DataView(f9(128)),
        f6
    ],
    [
        'DataView1_offset_at_end',
        new DataView(f9(1), 1, 0),
        f6
    ],
    [
        'DataView128_offset_at_end',
        new DataView(f9(128), 128, 0),
        f6
    ],
    [
        'DataView128_offset_slice_length_0',
        new DataView(f9(128), 64, 0),
        f6
    ],
    [
        'DataView128_offset_slice_length_1',
        new DataView(f9(128), 64, 1),
        f6
    ],
    [
        'DataView128_offset_slice_length_16',
        new DataView(f9(128), 64, 16),
        f6
    ],
    [
        'DataView128_offset_slice_unaligned',
        new DataView(f9(128), 63, 15),
        f6
    ]
];
v16 = v16.concat(v14.map(function (v19) {
    return [
        v19[0] + '_0',
        f10(v19[1], 0),
        f5
    ];
}));
v16 = v16.concat(v14.map(function (v19) {
    return [
        v19[0] + '_1',
        f10(v19[1], 1),
        f5
    ];
}));
v16 = v16.concat(v14.map(function (v19) {
    return [
        v19[0] + '_128',
        f10(v19[1], 128),
        f5
    ];
}));
v16 = v16.concat(v14.map(function (v19) {
    return [
        v19[0] + '_0_buffer',
        f11(v19[1], v19[2], 0),
        f5
    ];
}));
v16 = v16.concat(v14.map(function (v19) {
    return [
        v19[0] + '_1_buffer',
        f11(v19[1], v19[2], 1),
        f5
    ];
}));
v16 = v16.concat(v14.map(function (v19) {
    return [
        v19[0] + '_128_buffer',
        f11(v19[1], v19[2], 128),
        f5
    ];
}));
v16 = v16.concat(v14.map(function (v19) {
    return [
        v19[0] + '_1_buffer_offset_at_end',
        f11(v19[1], v19[2], 1, 1, 0),
        f5
    ];
}));
v16 = v16.concat(v14.map(function (v19) {
    return [
        v19[0] + '_128_buffer_offset_at_end',
        f11(v19[1], v19[2], 128, 128, 0),
        f5
    ];
}));
v16 = v16.concat(v14.map(function (v19) {
    return [
        v19[0] + '_128_buffer_offset_slice_length_0',
        f11(v19[1], v19[2], 128, 64, 0),
        f5
    ];
}));
v16 = v16.concat(v14.map(function (v19) {
    return [
        v19[0] + '_128_buffer_offset_slice_length_1',
        f11(v19[1], v19[2], 128, 64, 1),
        f5
    ];
}));
v16 = v16.concat(v14.map(function (v19) {
    return [
        v19[0] + '_128_buffer_offset_slice_length_16',
        f11(v19[1], v19[2], 128, 64, 16),
        f5
    ];
}));
function f12() {
    if (++v0.testsComplete == v16.length) {
    }
}
function f13(e) {
    var v17 = v16[e.data.testNum];
    var v18 = v17[1];
    try {
        v17[2](v17[0], e.data.testData, v18);
    } catch (e) {
        toString('0', v49);
    }
    f12();
}
v0.addEventListener('message', f13);
for (var v19 = 0; v19 < v16.length; ++v19) {
    var v17 = v16[v19];
    var v20 = {
        testNum: v19,
        testData: v17[1]
    };
    v0.postMessage(v20, '*');
}
v0._handleEvents();
