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
        var v4 = () => eval('(() => super())()');
        if (beforeSuper) {
            v4();
            v0(this.idValue, v1, 'Error: super() should create this and put value into idValue property');
        } else {
            v0(this.idValue, v1, 'Error: has to be TDZ error');
            v4();
        }
    }
};
var v5 = class v5 extends v2 {
    constructor() {
        var v4 = () => eval('(() => super())()');
        v4();
        return { value: 'constructor-value' };
    }
};
var v6 = class v6 extends v2 {
    constructor() {
        var v4 = () => eval('(() => super())()');
        v4();
        eval('this.id="new-value"');
    }
};
var v7 = class v7 extends v2 {
    constructor() {
        var v4 = () => eval('eval(\'(() => super())()\')');
        v4();
        eval('eval("this.id=\'new-value\'")');
    }
};
for (var v8 = 0; v8 < 1000; v8++) {
    new v3(true);
    var v9 = new v5();
    v0(v9.value, 'constructor-value', 'Error during set value in eval #1.0');
    v0(typeof v9.id, 'undefined', 'Error during set value in eval #1.1');
    var v10 = new v6();
    v0(v10.idValue, v1, 'Error during set value in eval #2.0');
    v0(v10.id, 'new-value', 'Error during set value in eval #2.1');
    var v11 = new v7();
    v0(v11.idValue, v1, 'Error during set value in eval #3.0');
    v0(v11.id, 'new-value', 'Error during set value in eval #3.0');
}
var v12 = function (Klass, value, index) {
    var v13;
    try {
        new Klass(value);
    } catch (v11) {
        v13 = v11;
        if (!(v11 instanceof ReferenceError))
            throw 'Exception thrown was not a reference error';
    }
    if (!v13)
        throw 'Exception not thrown for an unitialized this at iteration #' + index;
};
for (var v8 = 0; v8 < 1000; v8++) {
    v12(v3, false, v8);
}
class F extends v2 {
    constructor() {
        var v14 = () => {
            this.idValue = 'this-value';
        };
        var v15 = () => {
            return 'not-some-value';
        };
        v15();
        super();
        v18();
    }
}
let v16 = new F();
v0(v16.idValue, 'this-value', 'Error: not correct binding of this in constructor');
class G extends v2 {
    constructor() {
        var v17 = () => {
            return 'not-some-value';
        };
        var v18 = () => {
            super();
        };
        v17();
        v18();
    }
}
let v19 = new G();
v0(v19.idValue, v1, 'Error: not correct binding super&this in constructor');
class A_this_Prop extends v2 {
    getValue() {
        return this.idValue;
    }
}
class H extends A_this_Prop {
    constructor() {
        var v17 = () => {
            return 'not-some-value';
        };
        var v18 = () => {
            super();
        };
        var v20 = () => super.getValue();
        v17();
        v18();
        this.someValue = v20();
    }
}
let v21 = new H();
v0(v21.someValue, v1, 'Error: not correct binding superProperty&this in constructor');
class I extends v2 {
    constructor(beforeSuper) {
        if (beforeSuper) {
            eval('(() => super())()');
            v0(this.idValue, v1, 'Error: super() should create this and put value into idValue property');
        } else {
            this.idValue = 'testValue';
            eval('(() => super())()');
        }
    }
}
;
let v22 = new I(true);
v0(v22.idValue, v1, 'Error: not correct binding superProperty&this in constructor');
for (var v8 = 0; v8 < 1000; v8++) {
    v12(I, false, v8);
}
