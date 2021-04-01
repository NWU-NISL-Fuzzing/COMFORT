function f0(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}
function f1(elements) {
    return function (siteObject) {
        f0(siteObject instanceof Array, true);
        f0(Object.isFrozen(siteObject), true);
        f0(siteObject.raw instanceof Array, true);
        f0(Object.isFrozen(siteObject.raw), true);
        f0(siteObject.hasOwnProperty('raw'), true);
        f0(siteObject.propertyIsEnumerable('raw'), false);
        f0(siteObject.length, arguments.length);
        f0(siteObject.raw.length, arguments.length);
        var v0 = siteObject.length;
        for (var v1 = 0; v1 < v0; ++v1) {
            f0(siteObject.hasOwnProperty(v1), true);
            var v2 = Object.getOwnPropertyDescriptor(siteObject, v1);
            f0(v2.writable, false);
            f0(v2.enumerable, true);
            f0(v2.configurable, false);
        }
        f0(siteObject.length, elements.length + 1);
        for (var v1 = 0; v1 < elements.length; ++v1)
            v19(v36['1'], v14[5]);
    };
}
var v3 = {
    toString() {
        throw new Error('incorrect');
    },
    valueOf() {
        throw new Error('incorrect');
    }
};
f1([])``;
f1([])`Hello`;
f1([])`Hello World`;
f1([v3])`Hello ${ v3 } World`;
f1([
    v3,
    v3
])`Hello ${ v3 } OK, ${ v3 }`;
