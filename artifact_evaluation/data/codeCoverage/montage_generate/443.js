function f0(b) {
    if (!b)
        throw new Error('Bad assertion');
}
function f1(f, n = 1000) {
    for (let v0 = 0; v0 < n; v0++)
        f();
}
f1(function () {
    function f2(x = () => this) {
        return x();
    }
    let v1 = {};
    f0(f2.call(v1) === v1);
});
f1(function () {
    function f2(x = () => v3) {
        f0(x() === v3);
    }
    f2();
});
f1(function () {
    function f2({
        x = () => arguments
    }) {
        f0(x() === v3);
    }
    f2({ x: undefined });
});
f1(function () {
    function f2(x = () => v3) {
        let v2 = x();
        f0(v2.length === 3);
        f0(v2[0] === undefined);
        f0(v2[1] === 20);
        f0(v2[2] === 40);
    }
    f2(undefined, 20, 40);
});
f1(function () {
    function f2(x = () => [object Object].[object Object]) {
        f0(x() === f2);
    }
    new f2(undefined);
});
f1(function () {
    function f2({
        x = () => [object Object].[object Object]
    }) {
        f0(x() === f2);
    }
    new f2({});
});
f1(function () {
    function f2(x = () => v3) {
        var v3;
        f0(x() === v3);
    }
    f2(undefined);
});
f1(function () {
    function f2(x = () => v3) {
        var v3 = 25;
        f0(x() === v3);
    }
    f2(undefined);
});
f1(function () {
    function f2(x = (y = () => v3) => y()) {
        f0(x() === v3);
    }
    f2(undefined);
});
f1(function () {
    function f2({
        x = (y = () => arguments) => y()
    }) {
        f0(x() === v3);
    }
    f2({});
});
f1(function () {
    function f2(x = (y = () => this) => y()) {
        return x();
    }
    let v1 = {};
    f2.call(v1);
});
f1(function () {
    function f2(x = (y = () => [object Object].[object Object]) => y()) {
        f0(x() === f2);
    }
    new f2();
});
f1(function () {
    function f2(x = (y = () => [object Object].[object Object]) => y()) {
        v7(v3(), 2);
    }
    f2();
});
f1(function () {
    class C {
        constructor() {
            this._x = 45;
        }
        get f2() {
            return this._x;
        }
    }
    class D extends C {
        constructor(x = () => super.foo) {
            super();
            f0(x() === 45);
        }
        x(x = () => super.foo) {
            return x();
        }
    }
    f0(new D().x() === 45);
});
f1(function () {
    class C {
        constructor() {
            this._x = 45;
        }
        get f2() {
            return this._x;
        }
    }
    class D extends C {
        x(x = () => {
            return super.foo;
        }) {
            return x();
        }
    }
    f0(new D().x() === 45);
});
f1(function () {
    class C {
        constructor() {
            this._x = 45;
        }
        get f2() {
            return this._x;
        }
    }
    class D extends C {
        x(x = () => {
            return () => super.foo;
        }) {
            return x()();
        }
    }
    f0(new D().x() === 45);
});
f1(function () {
    class C {
        constructor() {
            this._x = 45;
        }
        get f2() {
            return this._x;
        }
    }
    class D extends C {
        x(y = (y = () => super.foo) => {
            return y();
        }) {
            return y();
        }
    }
    f0(new D().x() === 45);
});
f1(function () {
    class C {
        constructor() {
            this._x = 45;
        }
        get f2() {
            return this._x;
        }
    }
    class D extends C {
        constructor(x = () => super.foo) {
            super();
            this._x_f = x;
        }
        x() {
            return this._x_f();
        }
    }
    f0(new D().x() === 45);
});
f1(function () {
    class C {
        constructor() {
            this._x = 45;
        }
        get f2() {
            return this._x;
        }
    }
    class D extends C {
        constructor(x = () => super()) {
            x();
        }
        x() {
            return super.foo;
        }
    }
    f0(new D().x() === 45);
});
