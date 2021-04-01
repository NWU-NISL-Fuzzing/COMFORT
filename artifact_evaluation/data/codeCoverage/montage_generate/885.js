function f0(testedValue, msg) {
    if (!testedValue)
        throw 128;
}
(function () {
    let v0 = [];
    let v1 = Object.getOwnPropertyDescriptor(RegExp.prototype, 'exec');
    let v2 = v1.value;
    let v3 = /it/;
    Object.defineProperty(RegExp.prototype, 'exec', {
        value: function (str) {
            v0.push('exec');
            return v2.call(this, str);
        }
    });
    String.prototype.substr = function (start, length) {
        throw Error('Should not call overridden substr');
    };
    String.prototype.includes = function (pattern) {
        throw Error('Should not call overridden includes');
    };
    f0(v0 == '', 'unexpected call to overridden props');
    let v4 = 'splitme'.split(v3);
    f0(v0 == 'exec,exec,exec,exec,exec,exec', 'Property accesses do not match expectation');
    f0(v4 == 'spl,me', 'Unexpected result');
}());
