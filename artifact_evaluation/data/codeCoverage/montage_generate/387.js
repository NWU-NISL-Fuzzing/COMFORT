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
    var v3 = f0(f1, undefined);
    return [
        'a',
        ...v3,
        'e'
    ][3] === 'd';
}
if (!f1())
    throw new Error('Test failed');
