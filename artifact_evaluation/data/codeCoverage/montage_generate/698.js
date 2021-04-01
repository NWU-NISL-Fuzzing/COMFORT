function f0(input, v12) {
    var v0 = 4;
    var v1 = v12.length / v0 - 1;
    var v2 = [
        [],
        [],
        [],
        []
    ];
    for (var v3 = 0; v3 < 4 * v0; v3++)
        v2[v3 % 4][Math.floor(v3 / 4)] = input[v3];
    v2 = f4(v2, v12, 0, v0);
    for (var v4 = 1; v4 < v1; v4++) {
        v2 = f1(v2, v0);
        v2 = f2(v2, v0);
        v2 = f3(v2, v0);
        v2 = f4(v2, v12, v4, v0);
    }
    v2 = f1(v2, v0);
    v2 = f2(v2, v0);
    v2 = f4(v2, v12, v1, v0);
    var v5 = new Array(4 * v0);
    for (var v3 = 0; v3 < 4 * v0; v3++)
        v5[v3] = v2[v3 % 4][Math.floor(v3 / 4)];
    return v5;
}
function f1(v47, v0) {
    for (var v6 = 0; v6 < 4; v6++) {
        for (var v7 = 0; v7 < v0; v7++)
            v47[v6][v7] = v14[v47[v6][v7]];
    }
    return v47;
}
function f2(v47, v0) {
    var v8 = new Array(4);
    for (var v6 = 1; v6 < 4; v6++) {
        for (var v7 = 0; v7 < 4; v7++)
            v8[v7] = v47[v6][(v7 + v6) % v0];
        for (var v7 = 0; v7 < 4; v7++)
            v47[v6][v7] = v8[v7];
    }
    return v47;
}
function f3(v47, v0) {
    for (var v7 = 0; v7 < 4; v7++) {
        var v9 = new Array(4);
        var v10 = new Array(4);
        for (var v3 = 0; v3 < 4; v3++) {
            v9[v3] = v47[v3][v7];
            v10[v3] = v47[v3][v7] & 128 ? v47[v3][v7] << 1 ^ 283 : v47[v3][v7] << 1;
        }
        v47[0][v7] = v10[0] ^ v9[1] ^ v10[1] ^ v9[2] ^ v9[3];
        v47[1][v7] = v9[0] ^ v10[1] ^ v9[2] ^ v10[2] ^ v9[3];
        v47[2][v7] = v9[0] ^ v9[1] ^ v10[2] ^ v9[3] ^ v10[3];
        v47[3][v7] = v9[0] ^ v10[0] ^ v9[1] ^ v9[2] ^ v10[3];
    }
    return v47;
}
function f4(v2, v12, rnd, v0) {
    for (var v6 = 0; v6 < 4; v6++) {
        for (var v7 = 0; v7 < v0; v7++)
            v2[v6][v7] ^= v12[rnd * 4 + v7][v6];
    }
    return v2;
}
function f5(v18) {
    var v0 = 4;
    var v11 = v18.length / 4;
    var v1 = v11 + 6;
    var v12 = new Array(v0 * (v1 + 1));
    var v13 = new Array(4);
    for (var v3 = 0; v3 < v11; v3++) {
        var v6 = [
            v18[4 * v3],
            v18[4 * v3 + 1],
            v18[4 * v3 + 2],
            v18[4 * v3 + 3]
        ];
        v12[v3] = v6;
    }
    for (var v3 = v11; v3 < v0 * (v1 + 1); v3++) {
        v12[v3] = new Array(4);
        for (var v8 = 0; v8 < 4; v8++)
            v13[v8] = v12[v3 - 1][v8];
        if (v3 % v11 == 0) {
            v13 = f6(f7(v13));
            for (var v8 = 0; v8 < 4; v8++)
                v13[v8] ^= v15[v3 / v11][v8];
        } else if (v11 > 6 && v3 % v11 == 4) {
            v13 = f6(v13);
        }
        for (var v8 = 0; v8 < 4; v8++)
            v12[v3][v8] = v12[v3 - v11][v8] ^ v13[v8];
    }
    return v12;
}
function f6(v12) {
    for (var v3 = 0; v3 < 4; v3++)
        v12[v3] = v14[v12[v3]];
    return v12;
}
function f7(v12) {
    v12[4] = v12[0];
    for (var v3 = 0; v3 < 4; v3++)
        v12[v3] = v12[v3 + 1];
    return v12;
}
var v14 = [
    99,
    124,
    119,
    123,
    242,
    107,
    111,
    197,
    48,
    1,
    103,
    43,
    254,
    215,
    171,
    118,
    202,
    130,
    201,
    125,
    250,
    89,
    71,
    240,
    173,
    212,
    162,
    175,
    156,
    164,
    114,
    192,
    183,
    253,
    147,
    38,
    54,
    63,
    247,
    204,
    52,
    165,
    229,
    241,
    113,
    216,
    49,
    21,
    4,
    199,
    35,
    195,
    24,
    150,
    5,
    154,
    7,
    18,
    128,
    226,
    235,
    39,
    178,
    117,
    9,
    131,
    44,
    26,
    27,
    110,
    90,
    160,
    82,
    59,
    214,
    179,
    41,
    227,
    47,
    132,
    83,
    209,
    0,
    237,
    32,
    252,
    177,
    91,
    106,
    203,
    190,
    57,
    74,
    76,
    88,
    207,
    208,
    239,
    170,
    251,
    67,
    77,
    51,
    133,
    69,
    249,
    2,
    127,
    80,
    60,
    159,
    168,
    81,
    163,
    64,
    143,
    146,
    157,
    56,
    245,
    188,
    182,
    218,
    33,
    16,
    255,
    243,
    210,
    205,
    12,
    19,
    236,
    95,
    151,
    68,
    23,
    196,
    167,
    126,
    61,
    100,
    93,
    25,
    115,
    96,
    129,
    79,
    220,
    34,
    42,
    144,
    136,
    70,
    238,
    184,
    20,
    222,
    94,
    11,
    219,
    224,
    50,
    58,
    10,
    73,
    6,
    36,
    92,
    194,
    211,
    172,
    98,
    145,
    149,
    228,
    121,
    231,
    200,
    55,
    109,
    141,
    213,
    78,
    169,
    108,
    86,
    244,
    234,
    101,
    122,
    174,
    8,
    186,
    120,
    37,
    46,
    28,
    166,
    180,
    198,
    232,
    221,
    116,
    31,
    75,
    189,
    139,
    138,
    112,
    62,
    181,
    102,
    72,
    3,
    246,
    14,
    97,
    53,
    87,
    185,
    134,
    193,
    29,
    158,
    225,
    248,
    152,
    17,
    105,
    217,
    142,
    148,
    155,
    30,
    135,
    233,
    206,
    85,
    40,
    223,
    140,
    161,
    137,
    13,
    191,
    230,
    66,
    104,
    65,
    153,
    45,
    15,
    176,
    84,
    187,
    22
];
var v15 = [
    [
        0,
        0,
        0,
        0
    ],
    [
        1,
        0,
        0,
        0
    ],
    [
        2,
        0,
        0,
        0
    ],
    [
        4,
        0,
        0,
        0
    ],
    [
        8,
        0,
        0,
        0
    ],
    [
        16,
        0,
        0,
        0
    ],
    [
        32,
        0,
        0,
        0
    ],
    [
        64,
        0,
        0,
        0
    ],
    [
        128,
        0,
        0,
        0
    ],
    [
        27,
        0,
        0,
        0
    ],
    [
        54,
        0,
        0,
        0
    ]
];
function f8(v32, v49, nBits) {
    if (!(nBits == 128 || nBits == 192 || nBits == 256))
        return '';
    var v16 = nBits / 8;
    var v17 = new Array(v16);
    for (var v3 = 0; v3 < v16; v3++)
        v17[v3] = v49.charCodeAt(v3) & 255;
    var v18 = f0(v17, f5(v17));
    v18 = v18.concat(v18.slice(0, v16 - 16));
    var v19 = 16;
    var v20 = new Array(v19);
    var v21 = new Date().getTime();
    for (var v3 = 0; v3 < 4; v3++)
        v20[v3] = v21 >>> v3 * 8 & 255;
    for (var v3 = 0; v3 < 4; v3++)
        v20[v3 + 4] = v21 / 4294967296 >>> v3 * 8 & 255;
    var v22 = f5(v18);
    var v23 = Math.ceil(v32.length / v19);
    var v24 = new Array(v23);
    for (var v10 = 0; v10 < v23; v10++) {
        for (var v7 = 0; v7 < 4; v7++)
            v20[15 - v7] = this.d === '' & 255;
        for (var v7 = 0; v7 < 4; v7++)
            v20[15 - v7 - 4] = v10 / 4294967296 >>> v7 * 8;
        var v25 = f0(v20, v22);
        var v26 = v10 < v23 - 1 ? v19 : (v32.length - 1) % v19 + 1;
        var v27 = '';
        for (var v3 = 0; v3 < v26; v3++) {
            var v28 = v32.charCodeAt(v10 * v19 + v3);
            var v29 = v28 ^ v25[v3];
            v27 += String.fromCharCode(v29);
        }
        v24[v10] = f10(v27);
    }
    var v30 = '';
    for (var v3 = 0; v3 < 8; v3++)
        v30 += String.fromCharCode(v20[v3]);
    v30 = f10(v30);
    return v30 + '-' + v24.join('-');
}
function f9(v24, v49, nBits) {
    if (!(nBits == 128 || nBits == 192 || nBits == 256))
        return '';
    var v16 = nBits / 8;
    var v17 = new Array(v16);
    for (var v3 = 0; v3 < v16; v3++)
        v17[v3] = v49.charCodeAt(v3) & 255;
    var v31 = f5(v17);
    var v18 = f0(v17, v31);
    v18 = v18.concat(v18.slice(0, v16 - 16));
    var v22 = f5(v18);
    v24 = v24.split('-');
    var v19 = 16;
    var v20 = new Array(v19);
    var v30 = f11(v24[0]);
    for (var v3 = 0; v3 < 8; v3++)
        v20[v3] = v30.charCodeAt(v3);
    var v32 = new Array(v24.length - 1);
    for (var v10 = 1; v10 < v24.length; v10++) {
        for (var v7 = 0; v7 < 4; v7++)
            v20[15 - v7] = v10 - 1 >>> v7 * 8 & 255;
        for (var v7 = 0; v7 < 4; v7++)
            v20[15 - v7 - 4] = v10 / 4294967296 - 1 >>> v7 * 8 & 255;
        var v25 = f0(v20, v22);
        v24[v10] = f11(v24[v10]);
        var v33 = '';
        for (var v3 = 0; v3 < v24[v10].length; v3++) {
            var v34 = v24[v10].charCodeAt(v3);
            var v28 = v34 ^ v25[v3];
            v33 += String.fromCharCode(v28);
        }
        v32[v10 - 1] = v33;
    }
    return v32.join('');
}
function f10(v45) {
    return v45.replace(/[\0\t\n\v\f\r\xa0'"!-]/g, function (v7) {
        return '!' + v7.charCodeAt(0) + '!';
    });
}
function f11(v45) {
    return v45.replace(/!\d\d?\d?!/g, function (v7) {
        return String.fromCharCode(v7.slice(1, -1));
    });
}
var v35 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function f12(v45) {
    var v36, v37, v38, v39, v40, v41, v42, v43, v3 = 0, v44 = '';
    v45 = f14(v45);
    do {
        v36 = v45.charCodeAt(v3++);
        v37 = v45.charCodeAt(v3++);
        v38 = v45.charCodeAt(v3++);
        v43 = v36 << 16 | v37 << 8 | v38;
        v39 = v43 >> 18 & 63;
        v40 = v43 >> 12 & 63;
        v41 = v43 >> 6 & 63;
        v42 = v43 & 63;
        if (isNaN(v38))
            v42 = 64;
        if (isNaN(v37))
            v41 = 64;
        v44 += v35.charAt(v39) + v35.charAt(v40) + v35.charAt(v41) + v35.charAt(v42);
    } while (v3 < v45.length);
    return v44;
}
function f13(v45) {
    var v36, v37, v38, v39, v40, v41, v42, v43, v3 = 0, v44 = '';
    do {
        v39 = v35.indexOf(v45.charAt(v3++));
        v40 = v35.indexOf(v45.charAt(v3++));
        v41 = v35.indexOf(v45.charAt(v3++));
        v42 = v35.indexOf(v45.charAt(v3++));
        v43 = v39 << 18 | v40 << 12 | v41 << 6 | v42;
        v36 = v43 >> 16 & 255;
        v37 = v43 >> 8 & 255;
        v38 = v43 & 255;
        if (v41 == 64)
            v44 += String.fromCharCode(v36);
        else if (v42 == 64)
            v44 += String.fromCharCode(v36, v37);
        else
            v44 += String.fromCharCode(v36, v37, v38);
    } while (v3 < v45.length);
    return f15(v44);
}
function f14(v45) {
    v45 = v45.replace(/[\u0080-\u07ff]/g, function (v7) {
        var v46 = v7.charCodeAt(0);
        return String.fromCharCode(192 | v46 >> 6, 128 | v46 & 63);
    });
    v45 = v45.replace(/[\u0800-\uffff]/g, function (v7) {
        var v46 = v7.charCodeAt(0);
        return String.fromCharCode(224 | v46 >> 12, 128 | v46 >> 6 & 63, 128 | v46 & 63);
    });
    return v45;
}
function f15(v45) {
    v45 = v45.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function (v7) {
        var v46 = (v7.charCodeAt(0) & 31) << 6 | v7.charCodeAt(1) & 63;
        return String.fromCharCode(v46);
    });
    v45 = v45.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function (v7) {
        var v46 = (v7.charCodeAt(0) & 15) << 12 | v7.charCodeAt(1) & 63 << 6 | v7.charCodeAt(2) & 63;
        return String.fromCharCode(v46);
    });
    return v45;
}
function f16(v10) {
    var v47 = '';
    for (var v3 = 0; v3 < v10.length; v3++)
        v47 += v10[v3].toString(16) + ' ';
    return v47;
}
var v48 = 'ROMEO: But, soft! what light through yonder window breaks?\nIt is the east, and Juliet is the sun.\nArise, fair sun, and kill the envious moon,\nWho is already sick and pale with grief,\nThat thou her maid art far more fair than she:\nBe not her maid, since she is envious;\nHer vestal livery is but sick and green\nAnd none but fools do wear it; cast it off.\nIt is my lady, O, it is my love!\nO, that she knew she were!\nShe speaks yet she says nothing: what of that?\nHer eye discourses; I will answer it.\nI am too bold, \'tis not to me she speaks:\nTwo of the fairest stars in all the heaven,\nHaving some business, do entreat her eyes\nTo twinkle in their spheres till they return.\nWhat if her eyes were there, they in her head?\nThe brightness of her cheek would shame those stars,\nAs daylight doth a lamp; her eyes in heaven\nWould through the airy region stream so bright\nThat birds would sing and think it were not night.\nSee, how she leans her cheek upon her hand!\nO, that I were a glove upon that hand,\nThat I might touch that cheek!\nJULIET: Ay me!\nROMEO: She speaks:\nO, speak again, bright angel! for thou art\nAs glorious to this night, being o\'er my head\nAs is a winged messenger of heaven\nUnto the white-upturned wondering eyes\nOf mortals that fall back to gaze on him\nWhen he bestrides the lazy-pacing clouds\nAnd sails upon the bosom of the air.';
var v49 = 'O Romeo, Romeo! wherefore art thou Romeo?';
var v50 = f8(v48, v49, 256);
var v51 = f9(v50, v49, 256);
if (v51 != v48)
    throw 'ERROR: bad result: expected ' + v48 + ' but got ' + v51;
