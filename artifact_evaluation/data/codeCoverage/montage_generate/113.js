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
    var v3 = Object.isFrozen(v1);
    if (v1 !== true)
        throw new Error('bad value: ' + String(v1));
}
