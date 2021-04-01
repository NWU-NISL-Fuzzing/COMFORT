function f0() {
    function f1(proto) {
        class C {
        }
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(C, proto);
        } else {
            C.__proto__ = proto;
        }
        var v0 = Function.prototype.bind.call(C, null);
        return;
    }
    return f1(Function.prototype) && f1({}) && f1(null);
}
if (!f0())
    throw new Error('Test failed');
