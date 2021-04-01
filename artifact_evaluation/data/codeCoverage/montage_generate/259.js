var v20 = [
    'string',
    42,
    null,
    undefined,
    Symbol('symbol'),
    true,
    false
];
for (var v1 of v2) {
    var v2 = Object.preventExtensions(v1);
    if (v2 !== v1)
        throw new Error('bad value: ' + String(v2));
}
