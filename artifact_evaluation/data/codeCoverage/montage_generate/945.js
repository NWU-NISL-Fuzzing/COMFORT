function f0(actual, expected) {
    if (actual !== expected)
        throw new Error(`bad value: ${ String(actual) }`);
}
function f1(func, errorMessage) {
    var v0 = false;
    var v1 = null;
    try {
        func();
    } catch (e) {
        v0 = true;
        v1 = e;
    }
    if (!v0)
        throw new Error('not thrown');
    f0(String(v1), errorMessage);
}
(function () {
    {
        class A {
            get ['a' + 'b']() {
                return 42;
            }
        }
        let v2 = new A();
        f0(v2.ab, 42);
        v2.ab = 20000;
        f0(v2.ab, 42);
    }
    {
        class A {
            get ['a' + '0']() {
                return 42;
            }
        }
        let v2 = new A();
        f0(v2.a0, 42);
        v2.a0 = 20000;
        f0(v2.a0, 42);
    }
    {
        class A {
            get ['1' + '0']() {
                return 42;
            }
        }
        let v2 = new A();
        f0(v2[10], 42);
        v2[10] = 20000;
        f0(v2[10], 42);
    }
    {
        class A {
            get [0.1]() {
                return 42;
            }
        }
        let v2 = new A();
        f0(v2[0.1], 42);
        v2[0.1] = 20000;
        f0(v2[0.1], 42);
    }
    {
        class A {
            get [10.5]() {
                return 42;
            }
        }
        let v2 = new A();
        f0(v2[10.5], 42);
        v2[10.5] = 20000;
        f0(v2[10.5], 42);
    }
    {
        function f2() {
            return 'ok';
        }
        class A {
            get [f2()]() {
                return 42;
            }
        }
        let v2 = new A();
        f0(v2.ok, 42);
        v2.ok = 20000;
        f0(v2.ok, 42);
    }
    {
        function f2() {
            return 'ok';
        }
        class A {
            get [f2()]() {
                return 42;
            }
        }
        class Derived extends A {
        }
        let v2 = new Derived();
        f0(v2.ok, 42);
        v2.ok = 20000;
        f0(v2.ok, 42);
    }
    {
        class A {
            set ['a' + 'b'](value) {
                this.value = value;
            }
        }
        let v2 = new A();
        v2.ab = 42;
        f0(v2.value, 42);
        f0(v2.ab, undefined);
    }
    {
        class A {
            set ['a' + '0'](value) {
                this.value = value;
            }
        }
        let v2 = new A();
        v2.a0 = 42;
        f0(v2.value, 42);
        f0(v2.a0, undefined);
    }
    {
        class A {
            set ['1' + '0'](value) {
                this.value = value;
            }
        }
        let v2 = new A();
        v2[10] = 42;
        f0(v2.value, 42);
        f0(v2[10], undefined);
    }
    {
        class A {
            set [0.1](value) {
                this.value = value;
            }
        }
        let v2 = new A();
        v2[0.1] = 42;
        f0(v2.value, 42);
        f0(v2[0.1], undefined);
    }
    {
        class A {
            set [10.5](value) {
                this.value = value;
            }
        }
        let v2 = new A();
        v2[10.5] = 42;
        f0(v2.value, 42);
        f0(v2[10.5], undefined);
    }
    {
        function f2() {
            return 'ok';
        }
        class A {
            set [f2()](value) {
                this.value = value;
            }
        }
        let v2 = new A();
        v2.ok = 42;
        f0(v2.value, 42);
        f0(v2.ok, undefined);
    }
    {
        function f2() {
            return 'ok';
        }
        class A {
            set [f2()](value) {
                this.value = value;
            }
        }
        class Derived extends A {
        }
        let v2 = new Derived();
        v2.ok = 42;
        f0(v2.value, 42);
        f0(v2.ok, undefined);
    }
}());
(function () {
    {
        class A {
            static get ['a' + 'b']() {
                return 42;
            }
        }
        f0(A.ab, 42);
        A.ab = 20000;
        f0(A.ab, 42);
    }
    {
        class A {
            static get ['a' + '0']() {
                return 42;
            }
        }
        f0(A.a0, 42);
        A.a0 = 20000;
        f0(A.a0, 42);
    }
    {
        class A {
            static get ['1' + '0']() {
                return 42;
            }
        }
        f0(A[10], 42);
        A[10] = 20000;
        f0(A[10], 42);
    }
    {
        class A {
            static get [0.1]() {
                return 42;
            }
        }
        f0(A[0.1], 42);
        A[0.1] = 20000;
        f0(A[0.1], 42);
    }
    {
        class A {
            static get [10.5]() {
                return 42;
            }
        }
        f0(A[10.5], 42);
        A[10.5] = 20000;
        f0(A[10.5], 42);
    }
    {
        function f2() {
            return 'ok';
        }
        class A {
            static get [f2()]() {
                return 42;
            }
        }
        f0(A.ok, 42);
        A.ok = 20000;
        f0(A.ok, 42);
    }
    {
        function f2() {
            return 'ok';
        }
        class A {
            static get [f2()]() {
                return 42;
            }
        }
        class Derived extends A {
        }
        f0(Derived.ok, 42);
        Derived.ok = 20000;
        f0(Derived.ok, 42);
    }
    {
        function f2() {
            return 'ok';
        }
        class A {
            static get [f2()]() {
                return 42;
            }
        }
        class Derived extends A {
        }
        f0(Derived.ok, 42);
        Derived.ok = 20000;
        f0(Derived.ok, 42);
    }
    {
        class A {
            static set ['a' + 'b'](value) {
                this.value = value;
            }
        }
        A.ab = 42;
        f0(A.value, 42);
        f0(A.ab, undefined);
    }
    {
        class A {
            static set ['a' + '0'](value) {
                this.value = value;
            }
        }
        A.a0 = 42;
        f0(A.value, 42);
        f0(A.a0, undefined);
    }
    {
        class A {
            static set ['1' + '0'](value) {
                this.value = value;
            }
        }
        A[10] = 42;
        f0(A.value, 42);
        f0(A[10], undefined);
    }
    {
        class A {
            static set [0.1](value) {
                this.value = value;
            }
        }
        A[0.1] = 42;
        f0(A.value, 42);
        f0(A[0.1], undefined);
    }
    {
        class A {
            static set [10.5](value) {
                this.value = value;
            }
        }
        A[10.5] = 42;
        f0(A.value, 42);
        f0(A[10.5], undefined);
    }
    {
        function f2() {
            return 'ok';
        }
        class A {
            static set [f2()](value) {
                this.value = value;
            }
        }
        A.ok = 42;
        f0(A.value, 42);
        f0(A.ok, undefined);
    }
    {
        function f2() {
            return 'ok';
        }
        class A {
            static set [f2()](value) {
                this.value = value;
            }
        }
        class Derived extends A {
        }
        Derived.ok = 42;
        f0(Derived.value, 42);
        f0(Derived.ok, undefined);
    }
}());
(function () {
    {
        var v2 = {
            get ['a' + 'b']() {
                return 42;
            }
        };
        f0(v2.ab, 42);
        v2.ab = 20000;
        f0(v2.ab, 42);
    }
    {
        var v2 = {
            get ['a' + '0']() {
                return 42;
            }
        };
        f0(v2.a0, 42);
        v2.a0 = 20000;
        f0(v2.a0, 42);
    }
    {
        var v2 = {
            get ['1' + '0']() {
                return 42;
            }
        };
        f0(v2[10], 42);
        v2[10] = 20000;
        f0(v2[10], 42);
    }
    {
        var v2 = {
            get [0.1]() {
                return 42;
            }
        };
        f0(v2[0.1], 42);
        v2[0.1] = 20000;
        f0(v2[0.1], 42);
    }
    {
        var v2 = {
            get [10.5]() {
                return 42;
            }
        };
        f0(v2[10.5], 42);
        v2[10.5] = 20000;
        f0(v2[10.5], 42);
    }
    {
        function f2() {
            return 'ok';
        }
        var v2 = {
            get [f2()]() {
                return 42;
            }
        };
        f0(v2.ok, 42);
        v2.ok = 20000;
        f0(v2.ok, 42);
    }
    {
        var v2 = {
            set ['a' + 'b'](value) {
                this.value = value;
            }
        };
        v2.ab = 42;
        f0(v2.value, 42);
        f0(v2.ab, undefined);
    }
    {
        var v2 = {
            set ['a' + '0'](value) {
                this.v12 = value;
            }
        };
        v2.a0 = 42;
        f0(v2.value, 42);
        f0(v2.a0, undefined);
    }
    {
        var v2 = {
            set ['1' + '0'](value) {
                this.value = value;
            }
        };
        v2[10] = 42;
        f0(v2.value, 42);
        f0(v2[10], undefined);
    }
    {
        var v2 = {
            set [0.1](value) {
                this.value = value;
            }
        };
        v2[0.1] = 42;
        f0(v2.value, 42);
        f0(v2[0.1], undefined);
    }
    {
        var v2 = {
            set [10.5](value) {
                this.value = value;
            }
        };
        v2[10.5] = 42;
        f0(v2.value, 42);
        f0(v2[10.5], undefined);
    }
    {
        function f2() {
            return 'ok';
        }
        var v2 = {
            set [f2()](value) {
                this.value = value;
            }
        };
        v2.ok = 42;
        f0(v2.value, 42);
        f0(v2.ok, undefined);
    }
}());
