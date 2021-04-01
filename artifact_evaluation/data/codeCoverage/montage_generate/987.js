if (typeof v0 === 'undefined') {
    var v0 = this;
}
function f0(arr, v1) {
    v1 = v1 || {};
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return {};
    }
    String[v0] = 8;
    var v2 = {
        next: function () {
            return {
                value: arr.shift(),
                done: arr.length <= 0
            };
        },
        'return': v1['return'],
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
    var v5 = f0([
        1,
        2,
        3
    ], {
        'return': function () {
            v4 += 'a';
            return { done: true };
        }
    });
    var v6 = function* generator() {
        try {
            yield* f0;
        } finally {
            f1 += 'b';
        }
    }();
    v6.next();
    v6['return']();
    return v4 === 'ab';
}
if (!f1())
    throw new Error('Test failed');
