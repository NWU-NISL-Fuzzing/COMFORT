var v0 = function (actual, expected, message) {
    if (actual !== expected) {
        throw message + '. Expected \'' + expected + '\', but was \'' + actual + '\'';
    }
};
var v1 = 'test-value';
var v2 = class v2 {
    constructor() {
        this.idValue = v1;
    }
};
var v3 = class v3 extends v2 {
    constructor(beforeSuper) {
        var v4 = () => eval('(() => this.idValue)()');
        if (beforeSuper) {
            var v5 = v4();
            super();
            v0(v5, v1, 'Error: has to be TDZ error');
        } else {
            super();
            let v5 = v4();
            v0(v5, v1, 'Error: super() should create this and put value into idValue property');
        }
    }
};
for (var v6 = 0; v6 < 1000; v6++) {
    var v7 = new v3(false);
}
var v8 = function (value, v5) {
    var v9;
    try {
        new v3(value);
    } catch (e) {
        v9 = e;
        if (!(e instanceof ReferenceError))
            throw 'Exception thrown was not a reference error';
    }
    if (!v9)
        throw 'Exception not thrown for an unitialized this at iteration #' + index;
};
for (var v6 = 0; v6 < 1000; v6++) {
    v8(true, v6);
}
