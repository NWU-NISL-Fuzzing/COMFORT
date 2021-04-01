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
var v3 = class v3 extends v0 {
    constructor(inArrowFuction, inConstructor) {
        var v4 = () => {
            if (inArrowFuction) {
                super();
                v0(this.idValue, v1, 'Error: super() should create this and put value into idValue property');
            }
        };
        if (inArrowFuction)
            v4();
        if (inConstructor)
            super();
        v0(this.idValue, v1, 'Error: arrow function should return this to constructor');
    }
};
for (var v5 = 0; v5 < 1000; v5++) {
    new v3(true, false);
    new v3(false, true);
}
var v6 = function (value1, value2, index) {
    var v7;
    try {
        new v3(value1, value2);
    } catch (e) {
        v7 = e;
        if (!(e instanceof ReferenceError))
            throw 'Exception thrown was not a reference error';
    }
    if (!v7)
        throw 'Exception not thrown for an unitialized this at iteration ' + index;
};
for (var v5 = 0; v5 < 1000; v5++) {
    v6(false, false, v5);
}
var v8 = class v8 extends v2 {
    constructor() {
        eval('var x = 20');
        super();
        let v9 = () => this;
        let v10 = v9();
        v10.id = 'test-id';
    }
};
var v11 = new v8();
