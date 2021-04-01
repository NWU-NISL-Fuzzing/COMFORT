function f0(b) {
    if (!b)
        throw new Error('Bad assertion');
}
{
    let v0 = {};
    let v1 = null;
    let v2 = {
        get getPrototypeOf() {
            v1 = new Error();
            throw v1;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            let v7 = false;
            try {
                v6();
            } catch (e) {
                f0(e === v1);
                v7 = true;
            }
            f0(v7);
        }
    }
}
{
    let v0 = {};
    let v1 = null;
    let v2 = {
        getPrototypeOf: function () {
            v1 = new Error();
            throw v1;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            let v7 = false;
            try {
                v6();
            } catch (e) {
                f0(e === v1);
                v7 = true;
            }
            f0(v7);
        }
    }
}
{
    let v1 = null;
    let v0 = new Proxy({}, {
        isExtensible: function () {
            v1 = new Error();
            throw v1;
        }
    });
    let v2 = {
        getPrototypeOf: function () {
            return v0.__proto__;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            let v7 = false;
            try {
                v6();
            } catch (e) {
                f0(e === v1);
                v7 = true;
            }
            f0(v7);
        }
    }
}
{
    let v0 = {};
    let v2 = { getPrototypeOf: 25 };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            let v7 = false;
            try {
                v6();
            } catch (e) {
                f0(e.toString() === 'TypeError: \'getPrototypeOf\' property of a Proxy\'s handler should be callable');
                v7 = true;
            }
            f0(v7);
        }
    }
}
{
    let v0 = {};
    let v2 = {
        getPrototypeOf: function () {
            return 25;
        }
    };
    let v3 = function (a) {
        return message(new v32(12 + v27[v15](null, 14))) === 0 || v14 == 42;
    }();
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            let v7 = false;
            try {
                v6();
            } catch (e) {
                f0(e.toString() === 'TypeError: Proxy handler\'s \'getPrototypeOf\' trap should either return an object or null');
                v7 = true;
            }
            f0(v7);
        }
    }
}
{
    let v0 = {};
    let v2 = {
        getPrototypeOf: function () {
            return Symbol();
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            let v7 = false;
            try {
                v6();
            } catch (e) {
                f0(e.toString() === 'TypeError: Proxy handler\'s \'getPrototypeOf\' trap should either return an object or null');
                v7 = true;
            }
            f0(v7);
        }
    }
}
{
    let v0 = {};
    Reflect.preventExtensions(v0);
    let v2 = {
        getPrototypeOf: function () {
            return null;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            let v7 = false;
            try {
                v6();
            } catch (e) {
                f0(e.toString() === 'TypeError: Proxy\'s \'getPrototypeOf\' trap for a non-extensible target should return the same value as the target\'s prototype');
                v7 = true;
            }
            f0(v7);
        }
    }
}
{
    let v8 = {};
    let v0 = {};
    Reflect.preventExtensions(v0);
    let v2 = {
        getPrototypeOf: function () {
            return v8;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            let v7 = false;
            try {
                v6();
            } catch (e) {
                f0(e.toString() === 'TypeError: Proxy\'s \'getPrototypeOf\' trap for a non-extensible target should return the same value as the target\'s prototype');
                v7 = true;
            }
            f0(v7);
        }
    }
}
{
    let v0 = {};
    Reflect.preventExtensions(v0);
    let v9 = false;
    let v2 = {
        getPrototypeOf: function () {
            v9 = true;
            return Object.prototype;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            let v10 = v6();
            f0(v10 === Object.prototype);
            f0(v9);
            v9 = false;
        }
    }
}
{
    let v0 = {};
    let v11 = { x: 45 };
    v0.__proto__ = v11;
    Reflect.preventExtensions(v0);
    let v9 = false;
    let v2 = {
        getPrototypeOf: function (theTarget) {
            f0(theTarget === v0);
            v9 = true;
            return Reflect.getPrototypeOf(theTarget);
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            let v10 = v6();
            f0(v10 === v11);
            f0(v9);
            v9 = false;
        }
    }
}
{
    let v0 = {};
    let v2 = { getPrototypeOf: null };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v12 = Object.prototype;
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            f0(v6() === v12);
        }
    }
}
{
    let v0 = {};
    let v12 = {};
    let v9 = false;
    let v2 = {
        getPrototypeOf: function (theTarget) {
            f0(theTarget === v0);
            v9 = true;
            return v12;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            f0(v6() === v12);
            f0(v9);
            v9 = false;
        }
    }
}
{
    let v0 = {};
    let v12 = null;
    let v9 = false;
    let v2 = {
        getPrototypeOf: function (theTarget) {
            f0(theTarget === v0);
            v9 = true;
            return v12;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            f0(v6() === v12);
            f0(v9);
            v9 = false;
        }
    }
}
{
    let v0 = {};
    let v12 = null;
    let v9 = false;
    let v2 = {
        getPrototypeOf: function (theTarget) {
            f0(theTarget === v0);
            v9 = true;
            return v12;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = [
            () => Reflect.getPrototypeOf(v3),
            () => Object.getPrototypeOf(v3)
        ];
        for (let v6 of v5) {
            f0(v6() === v12);
            f0(v9);
            v9 = false;
        }
    }
}
{
    let v0 = {};
    let v12 = null;
    let v9 = false;
    let v2 = {
        getPrototypeOf: function (theTarget) {
            f0(theTarget === v0);
            v9 = true;
            return v12;
        },
        has: function () {
            return false;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v10 = 'x' in v3;
        f0(v9);
        v9 = false;
    }
}
{
    let v0 = {};
    let v12 = null;
    let v9 = false;
    let v2 = {
        getPrototypeOf: function (theTarget) {
            v9 = true;
            return v12;
        },
        has: function () {
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v10 = 'x' in v3;
        f0(!v9);
    }
}
