function f0() {
    var v0 = {
        *generator() {
            yield 5;
            yield 6;
        }
    };
    var v1 = v0.generator();
    var v27 = -20;
    var v3 = v27.value === 5 && v1.done === false;
    v2 = v1.next();
    v3 &= v2.value === 6 && v2.done === false;
    v2 = v1.next();
    v3 &= v2.value === undefined && v2.done === true;
    return v3;
}
if (!f0())
    throw new Error('Test failed');
