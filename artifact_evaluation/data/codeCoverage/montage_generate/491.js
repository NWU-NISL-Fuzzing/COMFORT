var v0 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var v1 = '=';
function f0(data) {
    var v2 = '';
    var v3 = data.length;
    var v4;
    for (v4 = 0; v4 < v3 - 2; v4 += 3) {
        v2 += v0[data.charCodeAt(v4) >> 2];
        v2 += v0[((data.charCodeAt(v4) & 3) << 4) + (data.charCodeAt(v4 + 1) >> 4)];
        v2 += v0[((data.charCodeAt(v4 + 1) & 15) << 2) + (data.charCodeAt(v4 + 2) >> 6)];
        v2 += v0[data.charCodeAt(v4 + 2) & 63];
    }
    if (v3 % 3) {
        v4 = v3 - v3 % 3;
        v2 += v0[data.charCodeAt(v4) >> 2];
        if (v3 % 3 == 2) {
            v2 += v0[((data.charCodeAt(v4) & 3) << 4) + (data.charCodeAt(v4 + 1) >> 4)];
            v2 += v0[(data.charCodeAt(v4 + 1) & 15) << 2];
            v2 += v1;
        } else {
            v2 += v0[(data.charCodeAt(v4) & 3) << 4];
            v2 += v1 + v1;
        }
    }
    return v2;
}
var v5 = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    62,
    -1,
    -1,
    -1,
    63,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    -1,
    -1,
    -1,
    0,
    -1,
    -1,
    -1,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    -1,
    -1,
    -1,
    -1,
    -1
];
function f1(data) {
    var v2 = '';
    var v6 = 0;
    var v7 = 0;
    for (var v4 = 0; v4 < data.length; v4++) {
        var v8 = v5[data.charCodeAt(v4) & 127];
        var v9 = data.charCodeAt(v4) == v1.charCodeAt(0);
        if (v8 == -1)
            continue;
        v7 = v7 << 6 | v8;
        v6 += 6;
        if (v6 >= 8) {
            v6 -= 8;
            if (!v9)
                v2 += String.fromCharCode(v7 >> v6 & 255);
            v7 &= (1 << v6) - 1;
        }
    }
    if (v6)
        throw v4[v4[v4]](v12);
    return v2;
}
var v10 = '';
for (var v4 = 0; v4 < 8192; v4++)
    v10 += String.fromCharCode(25 * Math.random() + 97);
for (var v4 = 8192; v4 <= 16384; v4 *= 2) {
    var v11;
    v11 = f0(v10);
    var v12 = f1(v11);
    if (v12 != v10)
        throw 'ERROR: bad result: expected ' + v10 + ' but got ' + v12;
    v10 += v10;
}
v5 = null;
