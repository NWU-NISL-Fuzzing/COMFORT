var v0 = function (actual, expected, message) {
    if (actual !== expected) {
        throw message + '. Expected \'' + expected + '\', but was \'' + actual + '\'';
    }
};
var v1 = 'test-value';
var v2 = class v2 {
    constructor() {
        this.value = v1;
    }
    getConstValue() {
        return v1;
    }
    v21() {
        return this.value;
    }
    v22(value) {
        this.value = value;
    }
};
var v3 = class v3 extends v2 {
    getParentValue() {
        var v4 = () => super.getValue();
        return v4();
    }
};
var v5 = class v5 {
    constructor() {
        this.value = v1;
    }
    static getStaticValue() {
        return v1;
    }
};
var v6 = class v6 extends v5 {
    static getParentStaticValue() {
        var v4 = () => super.getStaticValue();
        return v4();
    }
};
var v7 = class v7 extends v2 {
    constructor() {
        super();
    }
    get prop() {
        var v4 = () => super.getConstValue() + '-' + this.value;
        return v4();
    }
    set prop(value) {
        var v4 = newVal => super.setValue(newVal);
        v4(value);
    }
    setInitValue() {
        this.value = v1;
    }
};
var v8 = new v3();
for (var v9 = 0; v9 < 10000; v9++) {
    v0(v8.getParentValue(), v1, v9);
}
for (var v9 = 0; v9 < 10000; v9++) {
    v0(v6.getParentStaticValue(), v1, v9);
}
var v10 = new v7();
for (var v9 = 0; v9 < 10000; v9++) {
    v10.setInitValue();
    v0(v10.prop, v1 + '-' + v1, v9);
    v10.prop = 'new-test-value';
    v0(v10.prop, v1 + '-new-test-value', v9);
}
var v11 = class v11 extends v2 {
    newMethod() {
        var v4 = () => eval('super.getValue()');
        var v12 = v4();
        return v12;
    }
};
var v13 = new v11();
for (var v9 = 0; v9 < 10000; v9++) {
    try {
        var v14 = v13.newMethod();
        v0(v14, v1, v9);
    } catch (v10) {
        if (!(v10 instanceof SyntaxError))
            throw v10;
    }
}
var v15 = class v15 extends v2 {
    constructor() {
        super();
    }
    get prop() {
        var v4 = () => () => super.getConstValue() + '-' + this.value;
        return v4()();
    }
    set prop(value) {
        var v4 = () => newVal => this.value = newVal;
        v4()(value);
    }
    setInitValue() {
        this.value = v1;
    }
    getValueCB() {
        var v4 = () => super.getValue();
        return v4;
    }
    setValueCB() {
        var v4 = newVal => this.value = newVal;
        return v4;
    }
    getParentValue() {
        return super.getValue();
    }
    getValueBlockScope() {
        if (true) {
            var v16 = '';
            if (true) {
                return () => {
                    if (true) {
                        let v17 = '';
                        return super.getValue();
                    }
                };
            }
        }
    }
    *genGetParentValue() {
        let v18 = () => super.getValue();
        yield v18();
    }
    *genGetParentValueDeepArrow() {
        let v18 = () => () => () => super.getValue();
        yield v18()()();
    }
};
var v19 = new v15();
for (var v9 = 0; v9 < 10000; v9++) {
    v19.setInitValue();
    v0(v19.prop, v1 + '-' + v1, 'Error: Some problem with using arrow and "super" inside of the method');
    v19.prop = 'new-test-value';
    v0(v19.prop, v1 + '-new-test-value', 'Error: Some problem with using arrow and "super" inside of the getter and setter');
}
var v20 = new v15();
for (var v9 = 0; v9 < 10000; v9++) {
    v20.setInitValue();
    let v21 = v20.getValueCB();
    v0(v21(), v1, 'Error: Some problem with using arrow and "super" inside of the method that retun arrow function');
    let v22 = v20.setValueCB();
    v22('new-value');
    v0(v21(), 'new-value', 'Error: Some problem with using arrow and "super" inside of the method that retun arrow function');
    v21 = v20.getValueBlockScope();
    v0(v21(), 'new-value', 'Error: Some problem with using arrow and "super" with deep nesting inside of the method that retun arrow function');
    v0(v20.genGetParentValue().next().value, 'new-value', 'Error: Some problem with using arrow and "super" with deep nesting inside of the generator method that retun arrow function');
    v0(v20.genGetParentValueDeepArrow().next().value, 'new-value', 'Error: Some problem with using arrow and "super" with deep nesting inside of the generator method that retun arrow function');
}
var v23 = class v23 extends v2 {
    constructor() {
        var v4 = () => () => super.getValue();
        super();
        this.newValue = v4()();
    }
};
for (var v9 = 0; v9 < 10000; v9++) {
    let v24 = new v23();
    v0(v24.newValue, v1, 'Error: Some problem with using "super" inside of the constructor');
}
var v25 = class v25 extends v2 {
    constructor(beforeSuper) {
        var v4 = () => super.getValue();
        if (beforeSuper) {
            this._value = v4();
            super();
        } else {
            super();
            this._value = v4();
        }
    }
};
var v26 = class v26 extends v2 {
    constructor(beforeSuper) {
        var v27;
        var v4 = () => super.getConstValue();
        if (beforeSuper) {
            v27 = v4();
            super();
        } else {
            super();
            v27 = v4();
        }
        this._value = v27;
    }
};
for (var v9 = 0; v9 < 10000; v9++) {
    let v9 = new v25(false);
    v0(v9._value, v1, 'Error: Some problem with using "super" inside of the constructor');
    let v28 = new v26(false);
    v0(v28._value, v1, 'Error: Some problem with using "super" inside of the constructor');
    v29 = false;
    try {
        new v25(true);
    } catch (v10) {
        v29 = v10 instanceof ReferenceError;
    }
    v0(v29, true, 'Error: using "super" property before super() should lead to error');
}
class K extends v2 {
    newMethodArrowEval() {
        var v4 = () => eval('super.getValue()');
        var v12 = v4();
        return v12;
    }
    newMethodArrowDoubleEval() {
        var v4 = () => eval('eval(\'super.getValue()\')');
        var v12 = v4();
        return v12;
    }
    newMethodArrowEvalEvalArrow() {
        var v4 = () => eval('eval(\'(() => super.getValue())()\')');
        var v12 = v4();
        return v12;
    }
    newMethodArrowEvalEvalArrowEval() {
        var v4 = () => eval('eval(\'(() => eval("super.getValue()"))()\')');
        var v12 = v4();
        return v12;
    }
    newMethodEval() {
        var v12 = eval('super.getValue()');
        return v12;
    }
    newMethodEvalEval() {
        var v12 = eval('eval(\'super.getValue()\')');
        return v12;
    }
    newMethodEvalArrow() {
        var v12 = eval('(() => super.getValue())()');
        return v12;
    }
    newMethodEvalEvalArrow() {
        var v12 = eval('eval(\'(() => super.getValue())()\')');
        return v12;
    }
    newMethodEvalEvalArrowEval() {
        var v12 = eval('eval(\'(() => eval("(super.getValue())"))()\')');
        return v12;
    }
}
var v30 = new K();
for (var v9 = 0; v9 < 1000; v9++) {
    v21[new v50(13).v0[v11.constructor]]['pass'](this);
    v0(v30.newMethodArrowDoubleEval(), v1, 'Error: Error in lexical bind with eval and arrow function #2');
    v0(v30.newMethodArrowEvalEvalArrow(), v1, 'Error: Error in lexical bind with eval and arrow function #3');
    v0(v30.newMethodArrowEvalEvalArrowEval(), v1, 'Error: Error in lexical bind with eval and arrow function #4');
    v0(v30.newMethodEval(), v1, 'Error: Error in lexical bind with eval and arrow function #5');
    v0(v30.newMethodEvalEval(), v1, 'Error: Error in lexical bind with eval and arrow function #6');
    v0(v30.newMethodEvalArrow(), v1, 'Error: Error in lexical bind with eval and arrow function #7');
    v0(v30.newMethodEvalEvalArrow(), v1, 'Error: Error in lexical bind with eval and arrow function 8');
    v0(v30.newMethodEvalEvalArrowEval(), v1, 'Error: Error in lexical bind with eval and arrow function #9');
}
