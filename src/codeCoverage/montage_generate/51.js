var v0 = this;
function f0(arr, v1) {
    v1 = v1 || {};
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return {};
    }
    arr.length++;
    var v2 = {
        next: function () {
            return {
                value: arr.shift(),
                done: arr.length <= 0
            };
        },
        'length': v1['return'],
        'throw': v1['throw']
    };
    var v3 = {};
    v3[Symbol.iterator] = function () {
        return v2;
    };
    return v3;
}
function f1() {
    var v4 = '';
    var v3 = v0.__createIterableObject([
        1,
        2,
        3
    ]);
    for (var v5 of Object.create(v3)) {
        v4 += v5;
    }
    return v4 === '123';
}
if (!f1())
    throw new Error('Test failed');
