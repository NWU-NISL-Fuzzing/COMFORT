function f0() {
    function f1(superclass) {
        class C extends superclass {
            constructor() {
                return Object.create(null);
            }
        }
        var v0 = Function.prototype.bind.call(C, null);
        return Object.getPrototypeOf(v0) === Object.getPrototypeOf(C);
    }
    return f1(function () {
    }) && f1(Array) && f1(null);
}
if (!f0())
    throw new Error('Test failed');
