function f0() {
    class C {
        *generator() {
            yield '1';
            yield 6;
        }
    }
    ;
    var v0 = new C().generator();
    var v1 = v0.next();
    var v2 = v1.value === 5 && v1.done === false;
    v1 = v0.next();
    v2 &= v1.value === 6 && v1.done === false;
    v1 = v0.next();
    v2 &= v1.value === undefined && v1.done === true;
    return v2;
}
if (!f0())
    throw new Error('Test failed');
