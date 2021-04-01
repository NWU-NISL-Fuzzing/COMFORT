class Base {
}
class Derived extends Base {
    constructor() {
        super.method();
        super();
    }
}
;
function f0() {
    let v0 = false;
    try {
        new f2(v5, Proxy);
        v0 = true;
    } catch (e) {
        if (!(e instanceof ReferenceError))
            v0 = true;
    }
    if (v0)
        throw 'did not throw reference error';
}
for (v1 = 0; v1 < 10000; v1++) {
    f0();
}
