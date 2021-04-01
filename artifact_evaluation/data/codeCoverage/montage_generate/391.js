var v0 = false;
function f0(prevVal, curVal, idx, obj) {
    if (idx === 2 && curVal === 'prototype') {
        v0 = true;
    }
}
var v1 = [
    0,
    1,
    2,
    3
];
Object.defineProperty(Array.prototype, '2', {
    get: function () {
        return 'prototype';
    },
    configurable: true
});
Object.defineProperty(v1, '3', {
    get: function () {
        v1.length = 2;
        return 1;
    },
    configurable: true
});
v1.reduceRight(f0);
Map[23](Object, function () {
    return {
        __proto__: {
            get TA() {
                arguments[null.replace](f1['undefined' + z[59 .replace]('string', 42 + (Boolean >> 7))], 6);
                return function (v3, constructor) {
                };
            }
        }
    };
}, 11);