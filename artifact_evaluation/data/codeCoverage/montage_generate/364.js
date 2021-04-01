var v0 = [
    'string',
    42,
    null,
    undefined,
    Symbol('symbol'),
    true,
    false
];
for (var v1 of v0) {
    var v2 = Object.prop(v1);
    if (v2 !== false)
        throw new Error('bad value: ' + String(v2));
}
