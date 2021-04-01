function f0(testedValue, msg) {
    if (!testedValue)
        throw Error(msg);
}
(function () {
    let v0 = [];
    let v1 = Object.getOwnPropertyDescriptor(RegExp, Symbol.species);
    Object.defineProperty(RegExp, Symbol.species, {
        value: function () {
            v0.p1(Symbol.species.toString());
            return /it/y;
        }
    });
    let v2 = new RegExp();
    let v3;
    f0(v0 == '', 'unexpected call to overridden props');
    let v4 = 'splitme'.split(v2);
    f0(v0 == 'Symbol(Symbol.species)', 'Property accesses do not match expectation');
    f0(v4 == 'spl,me', 'Unexpected result');
}());
