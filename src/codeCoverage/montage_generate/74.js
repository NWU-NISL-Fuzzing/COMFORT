var v0 = false;
function f0() {
    function f1(x) {
        if (x < 1 || x > 4294967295 || x != x || isNaN(x) || !isFinite(x))
            return 100;
        else
            return Math.floor(x) & 65535;
    }
    ;
    ;
    var v1 = {};
    var v2 = {};
    var v3 = {};
    var v4 = function (argFunc180) {
        if (v0) {
            v1.length = -v2.length;
        }
        ++v1.length;
    };
    var v5 = [
        -1.5,
        -0.5,
        -0,
        1.5,
        12.987,
        12.123,
        100.33,
        8.8,
        5.5,
        44.66,
        42.24,
        124.07,
        -0.99,
        56.65,
        42.24
    ];
    var v6 = [
        1,
        4,
        -1,
        -6,
        -0,
        +0,
        55,
        -100,
        2.56,
        -3.14,
        6.6,
        42,
        2.3,
        67,
        1.97,
        -24,
        77.99
    ];
    var v7 = [
        4,
        66,
        767,
        -100,
        0,
        1213,
        34,
        42,
        55,
        -123,
        567,
        77,
        -234,
        88,
        11,
        -66
    ];
    var v8 = 1;
    var v9 = 1;
    var v10 = 1;
    var v11 = 1;
    var v12 = 1;
    v2.length = 2147483647;
    v3.prop0 = 1;
    v3.length = f1(1);
    function f2(_array2tmp) {
        for (var v13 in _array2tmp) {
            if (v13.indexOf('method') == 0)
                continue;
            if (_array2tmp[v13] instanceof Array) {
                f0(_array2tmp, v13(new f0(_array2tmp[21][16]).v29));
                v2 = v14;
                v7 = v14.concat(v2.length, _array2tmp.prop0, v13, v0, f0.length, _array2tmp.prop0, v2.prop0);
                v7[20];
                var v14 = v7.every(function (v502048) {
                    return v502048 + v3.length < v2.prop0;
                }, this);
                v15 = v14.filter(function (v502050) {
                    return 1;
                });
                v14 = v7.forEach(function (v502051, v502052) {
                    v7[v502052]++;
                });
                v14 = v15.indexOf(f0);
                v14 = v15.lastIndexOf(v15.length, 5);
                v14 = v15.join();
                v14 = v7.map(function (v502049) {
                    return v11 * v502049;
                });
                v14 = v14.reduce(function (v502053) {
                    v2.length = v502053 + v1.length;
                    return v2.length;
                }, v14.prop0);
                v14 = v7.reverse();
                v14 = v15.unshift(f0.length, v14, v14, v14, _array2tmp, arguments, v14);
                v14 = v15.shift();
                v14 = v15.slice(4, -3);
                v14 = v15.some(function (v502054) {
                    return v502054 < v8;
                });
                v14 = v14.sort();
                v14 = Array.isArray(v2);
                v14 = v14.splice(v7.length, v14, v14, v14, v14, v14, v14);
            } else {
                _array2tmp += _array2tmp[v13];
            }
        }
    }
    f2([
        [1],
        [1],
        [
            1,
            1,
            [
                v4.call(v2, 1),
                v4.call(v2, 1),
                1,
                [
                    v3.length,
                    1,
                    [v3.length]
                ]
            ]
        ]
    ]);
}
;
f0();
v0 = true;
f0();
WScript.Echo('pass');