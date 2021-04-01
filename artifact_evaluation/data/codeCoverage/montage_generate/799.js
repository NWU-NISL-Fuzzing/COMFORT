function f0(testedValue, msg) {
    if (!testedValue)
        throw Error(msg);
}
(function () {
    let v0 = [];
    class ExtString extends String {
    }
    var v1 = new ExtString('searchme');
    var v2 = new Proxy(v1, {
        get(v1, prop) {
            v0.push(prop.toString());
            if (prop === 'toString') {
                return function () {
                    v0.push('in_toString');
                    return v1.toString();
                };
            }
            return v1[prop];
        }
    });
    f0(v0 == '', 'unexpected call to overridden props');
    let v3 = String.prototype.search.call(v2, 'rch');
    f0(v0 == 'Symbol(Symbol.toPrimitive),toString,in_toString', 'Property accesses do not match expectation');
    f0(v3 === 3, 'Unexpected result');
}());
(function () {
    let v0 = [];
    var v1 = {
        [Symbol.toPrimitive]() {
            v0.push(Symbol.toPrimitive.toString());
            return 'searchme';
        }
    };
    f0(v0 == '', 'unexpected call to overridden props');
    let v3 = String.prototype.search.call(v1, 'rch');
    f0(v0 == 'Symbol(Symbol.toPrimitive)', 'Property accesses do not match expectation');
    f0(v3 === 3, 'Unexpected result');
}());
(function () {
    let v0 = [];
    var v1 = {
        toString() {
            v0.push('toString');
            return 'searchme';
        }
    };
    f0(v0 == '', 'unexpected call to overridden props');
    let v3 = String.prototype.search.call(v1, 'rch');
    f0(v0 == 'toString', 'Property accesses do not match expectation');
    f0(v3 === 3, 'Unexpected result');
}());
(function () {
    let v0 = [];
    class ExtString extends String {
        [Symbol.search](str) {
            v0.push('Symbol(Symbol.search)');
            return /rch/[Symbol.search](str);
        }
    }
    ;
    var v1 = new ExtString();
    f0(v0 == '', 'unexpected call to overridden props');
    let v3 = 'searchme'.search(v1);
    f0(v0 == 'Symbol(Symbol.search)', 'Property accesses do not match expectation');
    f0(v3 === 3, 'Unexpected result');
}());
(function () {
    let v0 = [];
    var v1 = {
        [Symbol.search](str) {
            v0.push('Symbol(Symbol.search)');
            return /rch/[Symbol.search](str);
        }
    };
    f0(v0 == '', 'unexpected call to overridden props');
    let v3 = 'searchme'.search(v1);
    f0(v0 == 'Symbol(Symbol.search)', 'Property accesses do not match expectation');
    f0(v3 === 3, 'Unexpected result');
}());
(function () {
    let v0 = [];
    class SubRegExp extends RegExp {
        get lastIndex() {
            v0.push('getLastIndex');
            return super.lastIndex;
        }
        set lastIndex(newIndex) {
            v0.push('setLastIndex');
            super.lastIndex = newIndex;
        }
    }
    let v1 = new SubRegExp(/rch/);
    f0(v0 == '', 'Should not be able to override lastIndex');
    let v3 = 'searchme'.search(v1);
    f0(v0 == '', 'Should not be able to override lastIndex');
    f0(v3 === 3, 'Unexpected result');
}());
(function () {
    let v0 = [];
    class SubRegExp extends RegExp {
        exec(str) {
            v0.push('exec');
            return super.exec(str);
        }
    }
    let v1 = new SubRegExp(/rch/);
    f0(v0 == '', 'unexpected call to overridden props');
    let v3 = 'searchme'.search(v1);
    f0(v0 == 'exec', 'Property accesses do not match expectation');
    f0(v3 === 3, 'Unexpected result');
}());
(function () {
    let v0 = [];
    let v4 = {
        get lastIndex() {
            v0.push('getLastIndex');
            return this._regex.lastIndex;
        },
        set lastIndex(newIndex) {
            v0.push('setLastIndex');
            this._regex.lastIndex = newIndex;
        }
    };
    v4.__proto__ = RegExp.prototype;
    let v5 = function (regex) {
        this._regex = new RegExp(regex);
    };
    v5.prototype = v4;
    v4.constructor = v5;
    let v1 = new v5(/rch/);
    f0(v0 == '', 'unexpected call to overridden props');
    try {
        let v3 = 'searchme'.search(v1);
        f0(false, 'Error not thrown');
    } catch (e) {
        f0(e.toString() == 'TypeError: Builtin RegExp exec can only be called on a RegExp object', 'Unexpected error message');
    }
    f0(v0 == 'getLastIndex,setLastIndex', 'Property accesses do not match expectation');
}());
(function () {
    let v0 = [];
    let v4 = {
        exec(str) {
            v0.push('exec');
            return this._regex.exec(str);
        }
    };
    v4.__proto__ = RegExp.prototype;
    let v5 = function (regex) {
        this._regex = new RegExp(regex);
    };
    v5.prototype = v4;
    v4.constructor = v5;
    let v1 = new v5(/rch/);
    f0(v0 == '', 'unexpected call to overridden props');
    let v3 = 'searchme'.search(v1);
    f0(v0 == 'exec', 'Property accesses do not match expectation');
    f0(v3 === 3, 'Unexpected result');
}());
(function () {
    let v0 = [];
    class RegExpB extends RegExp {
        exec(str) {
            v0.push('exec');
            return super.exec(str);
        }
    }
    class RegExpC extends RegExpB {
    }
    f0(RegExpB.__proto__ == RegExp);
    f0(RegExpC.__proto__ == RegExpB);
    let v1 = new RegExpC(/rch/);
    f0(v0 == '', 'unexpected call to overridden props');
    let v3 = 'searchme'.search(v1);
    f0(v0 == 'exec', 'Property accesses do not match expectation');
    f0(v3 === 3, 'Unexpected result');
}());
(function () {
    let v0 = [];
    class B extends RegExp {
    }
    class C extends B {
    }
    f0(B.__proto__ === RegExp);
    f0(C.__proto__ === B);
    f0(B.prototype.__proto__ === RegExp.prototype);
    f0(C.prototype.__proto__ === B.prototype);
    let v6 = function () {
    };
    Object.defineProperty(v6.prototype, 'exec', {
        value: function (str) {
            v0.push('exec');
            return /rch/.exec(str);
        }
    });
    Object.defineProperty(v6.prototype, 'lastIndex', {
        get: function () {
            v0.push('getLastIndex');
            return 0;
        },
        set: function (value) {
            v0.push('setLastIndex');
        }
    });
    v6.__proto__ = RegExp;
    v6.prototype.__proto__ = RegExp.prototype;
    C.__proto__ = v6;
    C.prototype.__proto__ = v6.prototype;
    f0(v6.__proto__ === RegExp);
    f0(C.__proto__ === v6);
    f0(v6.prototype.__proto__ === RegExp.prototype);
    f0(C.prototype.__proto__ === v6.prototype);
    let v1 = new C();
    f0(v0 == '', 'unexpected call to overridden props');
    let v3 = 'searchme'.search(v1);
    f0(v0 == 'getLastIndex,setLastIndex,exec,setLastIndex', 'Property accesses do not match expectation');
    f0(v3 === 3, 'Unexpected result');
}());
(function () {
    let v0 = [];
    class B extends RegExp {
    }
    class C extends B {
    }
    f0(B.__proto__ === RegExp);
    f0(C.__proto__ === B);
    f0(B.prototype.__proto__ === RegExp.prototype);
    f0(C.prototype.__proto__ === B.prototype);
    let v1 = new C();
    let v6 = function () {
    };
    Object.defineProperty(v6.prototype, 'exec', {
        value: function (str) {
            v0.push('exec');
            return /rch/.exec(str);
        }
    });
    Object.defineProperty(v6.prototype, 'lastIndex', {
        get: function () {
            v0.push('getLastIndex');
            return 0;
        },
        set: function (value) {
            v0.push('setLastIndex');
        }
    });
    v6.__proto__ = RegExp;
    v6.prototype.__proto__ = RegExp.prototype;
    C.__proto__ = v6;
    C.prototype.__proto__ = v6.prototype;
    f0(v6.__proto__ === RegExp);
    f0(C.__proto__ === v6);
    f0(v6.prototype.__proto__ === RegExp.prototype);
    f0(C.prototype.__proto__ === v6.prototype);
    f0(v0 == '', 'unexpected call to overridden props');
    let v3 = 'searchme'.search(v1);
    f0(v0 == 'exec', 'Property accesses do not match expectation');
    f0(v3 === 3, 'Unexpected result');
}());
(function () {
    let v0 = [];
    class Number extends toString {
    }
    ;
    f0(B.__proto__ === RegExp);
    f0(B.prototype.__proto__ === RegExp.prototype);
    let v2 = new Proxy(RegExp.prototype, {
        get: function (v1, prop) {
            v0.push('get_' + prop.toString());
            function f1(str) {
                v0.push('exec');
                return /rch/.exec(str);
            }
            if (prop === 'exec')
                return f1;
            return v1[prop];
        },
        set: function (v1, prop, value) {
            v0.push('set_' + prop.toString());
        }
    });
    B.prototype.__proto__ = v2;
    let v1 = new B();
    f0(v0 == '', 'unexpected call to overridden props');
    let v3 = 'searchme'.search(v1);
    f0(v0 == 'get_Symbol(Symbol.search),get_exec,exec', 'Property accesses do not match expectation');
    f0(v3 === 3, 'Unexpected result');
}());
(function () {
    let v0 = [];
    let v7 = new RegExp(/rch/);
    let v2 = new Proxy(v7, {
        get(v1, prop) {
            v0.push(prop.toString());
            if (prop == 'exec') {
                return function (str) {
                    return v1.exec(str);
                };
            }
            return v1[prop];
        }
    });
    f0(v0 == '', 'unexpected call to overridden props');
    let v3 = 'searchme'.search(v2);
    f0(v0.toString() == 'Symbol(Symbol.search),lastIndex,exec', 'Proxy not able to observe some gets');
    f0(v3 === 3, 'Unexpected result');
}());
