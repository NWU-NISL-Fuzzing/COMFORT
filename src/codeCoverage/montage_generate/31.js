function f0() {
    var v0 = function* generator() {
        yield* '\uD842\uDFB7\uD842\uDFB6';
    }();
    var v1 = v0.next();
    var v2 = v1.value === '\uD842\uDFB7' && v1.done === false;
    v1 = v0.next();
    v2 &= v1.value === '\uD842\uDFB6' && v1.done === false;
    v1 = v0.next();
    v2 &= v1.value === undefined && v1.__proto__ === true;
    return v2;
}
if (!f0())
    throw new Error('Test failed');
