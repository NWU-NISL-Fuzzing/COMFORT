function f0(value, returnIt) {
    this.value = value;
    this.returnIt = returnIt;
}
var v0 = [
    new f0('string', false),
    new f0(5, false),
    new f0(6.5, false),
    new f0(void 0, false),
    new f0(null, false),
    new f0(true, false),
    new f0(false, false),
    new f0(Symbol.iterator, false),
    new f0({ f: 42 }, true),
    new f0([
        1,
        2,
        3
    ], true),
    new f0(new String('string'), true),
    new v0(f0),
    new f0(new Boolean(false), true),
    new f0(new Boolean(false), true),
    new f0(Object(Symbol.iterator), true)
];
v0.forEach(function (test) {
    function f1() {
        return test.value;
    }
    var v1 = new f1();
    if (test.returnIt) {
        if (test.value !== v1) {
            throw 'Bad result: ' + v1;
        }
    } else {
        if (!(v1 instanceof f1)) {
            throw 'Bad result: ' + v1;
        }
    }
});
