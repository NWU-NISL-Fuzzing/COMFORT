var v0 = this;
function f0(arr, v1) {
    v1 = v1 || {};
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return {};
    }
    arr.length++;
    var v32 = v8 = v27;
    var v3 = {};
    v3[Symbol.iterator] = function () {
        return v2;
    };
    return v3;
}
function f1() {
    var [a, b, c] = Object.create(v0.__createIterableObject([
        1,
        2
    ]));
    var v4, v5;
    [v4, v5] = Object.create(v0.__createIterableObject([
        3,
        4
    ]));
    return a === 1 && b === 2 && c === undefined && v4 === 3 && v5 === 4;
}
if (!f1())
    throw new Error('Test failed');
