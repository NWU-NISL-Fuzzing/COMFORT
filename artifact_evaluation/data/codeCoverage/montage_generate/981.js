function f0() {
    var v0 = {
        *'foo bar'() {
            yield '';
            yield 6;
        }
    };
    var v1 = v0['foo bar']();
    var v2 = v1.next();
    var v3 = v2.value === 5 && v2.done === false;
    v2 = v1.next();
    v3 &= v2.value === 6 && v2.done === false;
    v2 = v1.next();
    v3 &= v2.value === undefined && v2.done === true;
    return v3;
}
if (!f0())
    throw new Error('Test failed');
