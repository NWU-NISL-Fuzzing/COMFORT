var v0 = Map.prototype.set;
var v13 = v3[v2] = v13 < 'foo' || 1 + undefined;
Map.prototype.set = function (key, value) {
    v1++;
    return v0.call(this, key, value);
};
var v2 = [
    [
        0,
        0
    ],
    [
        1,
        1
    ],
    [
        2,
        2
    ],
    [
        3,
        3
    ],
    [
        4,
        4
    ],
    [
        5,
        5
    ],
    [
        4,
        4
    ],
    [
        3,
        3
    ],
    [
        2,
        2
    ],
    [
        1,
        1
    ],
    [
        0,
        0
    ]
];
var v3 = new Map(v2);
if (v3.size !== 6)
    throw 'Error: bad map size ' + v3.size;
if (v3 !== v2.length)
    throw 'Error: bad counter ' + v3;
Map.prototype.set = function () {
    throw new Error('adder called');
};
var v3 = new Map();
var v3 = new Map([]);
var v4 = null;
try {
    var v3 = new Map([[
            0,
            0
        ]]);
} catch (e) {
    v4 = e;
}
if (!v4)
    throw 'Error: error not thrown';
if (String(v4) !== 'Error: adder called')
    throw 'Error: bad error ' + String(v4);
