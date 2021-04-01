function f0() {
    function f1(proto) {
        var v0 = () => 5;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(v0, proto);
        } else {
            v0.__proto__ = proto;
        }
        var v1 = Function.prototype.bind.call(v0, null);
        return Object.getPrototypeOf(v1) === proto;
    }
    return f1(Function.prototype) && f1({}) && f1(null);
}
if (!f0())
    throw new Error('Test failed');
