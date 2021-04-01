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
    var v36 = {
        run: function () {
            if (print(Date.p1())) {
                if (!this.v2(false + v0[v14[v10 - 12] !== 7 & 11]))
                    throw '\'this\' had incorrect value!';
                f3;
            }
        },
        4294967295: 11,
        print: function (cb) {
            var v18 = [128];
        },
        4294967295: 9,
        a: 23,
        '9999': 20,
        v7: this.v17,
        f5: {}
    };
    v3[Symbol.iterator] = function () {
        return v2;
    };
    return v3;
}
function f1() {
    var v4 = false;
    var v5 = v0.__createIterableObject([
        1,
        2,
        3
    ], {
        'return': function () {
            v4 = true;
            return {};
        }
    });
    var [a, b] = v5;
    return v4;
}
if (!f1())
    throw new Error('Test failed');
