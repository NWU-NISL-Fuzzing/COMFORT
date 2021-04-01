function f0(actualExpr, expectedExpr) {
    function f1(x) {
        return '' + x;
    }
    let v0 = v16(actualExpr);
    let v1 = eval(expectedExpr);
    if (typeof v0 != typeof v1)
        throw Error('expected type ' + typeof v1 + ' actual type ' + typeof v0);
    if (f1(v0) != f1(v1))
        throw Error('expected: ' + v1 + ' actual: ' + v0);
}
let v2;
let v3;
function f2(parseString, clearLength) {
    v3 = [];
    var v2 = JSON.parse(parseString, function (key, value) {
        v3.push('{' + key + ':' + value + '}');
        if (clearLength)
            this.length = 0;
        return;
    });
    return v2;
}
v2 = f2('[10]', false);
v2;
undefined;
v3;
[
    '{0:10}',
    '{:}'
];
v3.length;
2;
v2 = f2('[10]', true);
v2;
undefined;
v3;
[
    '{0:10}',
    '{:}'
];
v3.length;
2;
v2 = f2('[ [ 10, 11 ], 12, [13, 14, 15], 16, 17]', false);
v2;
undefined;
v3;
[
    '{0:10}',
    '{1:11}',
    '{0:,}',
    '{1:12}',
    '{0:13}',
    '{1:14}',
    '{2:15}',
    '{2:,,}',
    '{3:16}',
    '{4:17}',
    '{:,,,,}'
];
v3.length;
11;
v2 = f2('[ [ 10, 11 ], 12, [13, 14, 15], 16, 17]', true);
v2;
undefined;
v3;
[
    '{0:10}',
    '{1:undefined}',
    '{0:}',
    '{1:undefined}',
    '{2:undefined}',
    '{3:undefined}',
    '{4:undefined}',
    '{:}'
];
v3.length;
8;
v2 = f2('[ { "a": [ 10, 11 ], "b": 12 } , [ 13, { "c": 14 }, 15], 16, 17]', false);
v2;
undefined;
v3;
[
    '{0:10}',
    '{1:11}',
    '{a:,}',
    '{b:12}',
    '{0:[object Object]}',
    '{0:13}',
    '{c:14}',
    '{1:[object Object]}',
    '{2:15}',
    '{1:,,}',
    '{2:16}',
    '{3:17}',
    '{:,,,}'
];
v3.length;
13;
v2 = f2('[ { "a": [ 10, 11 ], "b": 12 } , [ 13, { "c": 14 }, 15], 16, 17]', true);
v2;
undefined;
v3;
[
    '{0:10}',
    '{1:undefined}',
    '{a:}',
    '{b:12}',
    '{0:[object Object]}',
    '{1:undefined}',
    '{2:undefined}',
    '{3:undefined}',
    '{:}'
];
v3.length;
9;
function f3(parseString, clearLength) {
    v3 = [];
    var v2 = JSON.parse(parseString, function (key, value) {
        v3.push('{' + key + ':' + value + '}');
        if (clearLength)
            this.length = 0;
        return typeof value === 'number' ? value * 2 : value;
    });
    return v2;
}
v2 = f3('[10]', false);
v2;
[20];
v3;
[
    '{0:10}',
    '{:20}'
];
v3.length;
2;
v2 = f3('[10]', true);
v2;
[20];
v3;
[
    '{0:10}',
    '{:20}'
];
v3.length;
2;
v2 = f3('[ [ 10, 11 ], 12, [13, 14, 15], 16, 17]', false);
v2;
[
    20,
    22,
    24,
    26,
    28,
    30,
    32,
    34
];
v3;
[
    '{0:10}',
    '{1:11}',
    '{0:20,22}',
    '{1:12}',
    '{0:13}',
    '{1:14}',
    '{2:15}',
    '{2:26,28,30}',
    '{3:16}',
    '{4:17}',
    '{:20,22,24,26,28,30,32,34}'
];
v3.length;
11;
v2 = f3('[ [ 10, 11 ], 12, [13, 14, 15], 16, 17]', true);
v2;
[];
v3;
[
    '{0:10}',
    '{1:undefined}',
    '{0:}',
    '{1:undefined}',
    '{2:undefined}',
    '{3:undefined}',
    '{4:undefined}',
    '{:}'
];
v3.length;
8;
v2 = f3('[ { "a": [ 10, 11 ], "b": 12 } , [ 13, { "c": 14 }, 15], 16, 17]', false);
v2;
[
    '[object Object]',
    26,
    '[object Object]',
    30,
    32,
    34
];
v3;
[
    '{0:10}',
    '{1:11}',
    '{a:20,22}',
    '{b:12}',
    '{0:[object Object]}',
    '{0:13}',
    '{c:14}',
    '{1:[object Object]}',
    '{2:15}',
    '{1:26,[object Object],30}',
    '{2:16}',
    '{3:17}',
    '{:[object Object],26,[object Object],30,32,34}'
];
v3.length;
13;
v2 = f3('[ { "a": [ 10, 11 ], "b": 12 } , [ 13, { "c": 14 }, 15], 16, 17]', true);
v2;
[];
v3;
[
    '{0:10}',
    '{1:undefined}',
    '{a:}',
    '{b:12}',
    '{0:[object Object]}',
    '{1:undefined}',
    '{2:undefined}',
    '{3:undefined}',
    '{:}'
];
v3.length;
9;
