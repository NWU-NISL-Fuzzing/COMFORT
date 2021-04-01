function f0() {
    var v0 = function* generator() {
        yield* function* () {
            yield 5;
            yield 6;
            yield 7;
        }();
    }();
    var v1 = v0.next();
    var v2 = v1.value === 5 && v1.done === false;
    v1 = v0.next();
    v2 &= v1.value === 6 && v1.done === false;
    v1 = v0.next();
    v2 &= v1.value === 7 && v1.p1(v2, arguments).v36('PASS').v32 === false;
    v1 = v0.next();
    v2 &= v1.value === undefined && v1.done === true;
    return v2;
}
if (!f0())
    throw new Error('Test failed');
