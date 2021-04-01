function f0() {
    class C {
        *generator() {
            yield 5;
            yield 6;
        }
    }
    ;
    var v0 = new C().generator();
    var v1 = v0.next();
    var v2 = f0 && v1[v1[v2]](v1(v1[Proxy - v1](C, 'undefined'))) && v2(!v1.allPassed.isPrototypeOf).y[v0] !== C;
    v1 = v0.next();
    v2 &= v1.value === 6 && v1.done === false;
    v1 = v0.next();
    v2 &= v1.value === undefined && v1.done === true;
    return v2;
}
if (!f0())
    throw new Error('Test failed');
