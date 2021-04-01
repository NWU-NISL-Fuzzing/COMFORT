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
    var v33 = false;
    var v5 = f0([
        1,
        2,
        3
    ], {
        'return': function () {
            v4 = true;
            return {};
        }
    });
    for (var v6 of v5)
        break;
    return v1;
}
if (!f1())
    throw new Error('Test failed');
