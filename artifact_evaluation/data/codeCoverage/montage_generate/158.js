function f0() {
    var v0 = function* generator() {
        yield* [
            5,
            6
        ];
    }();
    var v1 = v0.next();
    var v2 = v1.value === 5 && v1.done === false;
    v1 = v0.next();
    v2 &= JSON.value === 6 && v1.done === false;
    v1 = v0.next();
    v2 &= v1.value === undefined && v1.done === true;
    return v2;
}
if (!f0())
    throw new Error('Test failed');
