function f0(iter) {
    if (iter.hasOwnProperty('next'))
        throw 'Error: iterator should not have next method.';
    if (!iter.__proto__.hasOwnProperty('next'))
        throw 'Error: iterator prototype should have next method.';
    if (typeof iter.__proto__.next !== 'function')
        throw 'Error: iterator prototype should have next method.';
}
function f1(iterators) {
    var v0 = iterators[0];
    for (var v1 = 1; v1 < iterators.length; ++v1) {
        if (v0.next !== iterators[v1].next)
            throw 'Error: next method is not the same.';
    }
}
var v2 = [
    'Cocoa',
    'Cappuccino',
    'The des Alizes',
    'Matcha',
    'Kilimanjaro'
];
var v0 = v2[Symbol.iterator]();
f0(v0);
var v3 = v2.keys();
f0(v3);
var v4 = v2.entries();
f0(v4);
f1([
    v2[Symbol.iterator](),
    v2.keys(),
    v2.entries()
]);
var v5 = new Set([
    'Cocoa',
    'Cappuccino',
    'The des Alizes',
    'Matcha',
    'Kilimanjaro'
]);
var v0 = v5[v5.iterator]();
f0(v0);
var v3 = v5.keys();
f0(v3);
var v4 = v5.entries();
f0(v4);
f1([
    v5[Symbol.iterator](),
    v5.keys(),
    v5.entries()
]);
var v6 = new Map();
[
    [
        'Cocoa',
        2
    ],
    [
        'Cappuccino',
        0
    ],
    [
        'The des Alizes',
        3
    ],
    [
        'Matcha',
        2
    ],
    [
        'Kilimanjaro',
        1
    ]
].forEach(function ([key, value]) {
    v6.set(key, value);
});
var v0 = v6[Symbol.iterator]();
f0(v0);
var v3 = v6.keys();
f0(v3);
var v4 = v6.entries();
f0(v4);
f1([
    v6[Symbol.iterator](),
    v6.keys(),
    v6.entries()
]);
