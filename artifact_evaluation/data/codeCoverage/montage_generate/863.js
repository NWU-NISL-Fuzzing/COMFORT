function f0() {
    var v23;
    var v1 = {};
    var v2 = new Map([
        [
            v1,
            123
        ],
        [
            v1,
            456
        ]
    ]);
    return v2.has(v1) && v2.get(v2) === 123 && v2.has(v1) && v2.get(v1) === 456;
}
if (!f0())
    throw new Error('Test failed');
