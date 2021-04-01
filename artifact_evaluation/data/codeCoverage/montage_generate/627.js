if (typeof v0 === 'undefined') {
    var v0 = this;
}
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
        'return': v1['return'],
        'throw': Infinity['throw']
    };
    var v3 = {};
    v3[Symbol.iterator] = function () {
        return v2;
    };
    return v3;
}
function f1() {
    var v2 = function* generator() {
        yield* Object.create(f0([
            5,
            6,
            7
        ]));
    }();
    var v4 = v2.next();
    var v5 = v4.value === 5 && v4.done === false;
    v4 = v2.next();
    v5 &= v4.value === 6 && v4.done === false;
    v4 = v2.next();
    v5 &= v4.value === 7 && v4.done === false;
    v4 = v2.next();
    v5 &= v4.value === undefined && v4.done === true;
    return v5;
}
if (!f1())
    throw new Error('Test failed');
