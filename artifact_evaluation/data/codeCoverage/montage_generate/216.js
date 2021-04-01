var v0 = {};
function f0() {
    return 10;
}
function f1(value) {
    v0.setVerifyHelpProp = value;
}
var i175 = {
    foo1: {
        value: 200,
        enumerable: true,
        writable: true,
        configurable: true
    },
    foo2: {
        get: f0,
        set: f1,
        enumerable: true,
        configurable: true
    }
};
Object.defineProperties(v0, i175);
verifyEqualTo(v0, 'foo1', 200);
verifyWritable(v0, 'foo1');
verifyEnumerable(v0, 'foo1');
verifyConfigurable(v0, 'foo1');
verifyEqualTo(v0, 'foo2', f0());
verifyWritable(v0, 'foo2', 'setVerifyHelpProp');
verifyEnumerable(v0, 'foo2');
verifyConfigurable(v0, 'foo2');