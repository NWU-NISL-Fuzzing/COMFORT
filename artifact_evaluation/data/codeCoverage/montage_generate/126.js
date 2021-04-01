function f0(b) {
    if (!b)
        throw new Error('Bad assertion');
}
{
    let v0 = null;
    let v1 = { x: 40 };
    let v2 = {
        get has() {
            v0 = new Error();
            throw v0;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            'x' in v3;
        } catch (e) {
            v5 = true;
            f0(e === v0);
        }
        f0(v5);
    }
}
{
    let v0 = null;
    let v1 = { x: 40 };
    let v2 = {
        has: function () {
            v0 = new Error();
            throw v0;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            'x' in v3;
        } catch (e) {
            v5 = true;
            f0(e === v0);
        }
        f0(v5);
    }
}
{
    let v1 = { x: 40 };
    let v6 = false;
    let v2 = {
        has: function (theTarget, propName) {
            v6 = true;
            return propName in theTarget;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v7 = 'x' in v3;
        f0(v7);
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        enumerable: true,
        configurable: true,
        value: 45
    });
    let v6 = false;
    let v2 = {
        has: function (theTarget, propName) {
            v6 = true;
            return propName in theTarget;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v7 = 'x' in v3;
        f0(v7);
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        enumerable: true,
        configurable: true,
        value: 45
    });
    let v2 = {};
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        if (v4 % 2)
            v2.has = null;
        else
            v2.has = undefined;
        let v7 = 'x' in v3;
        f0(v7);
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        enumerable: true,
        configurable: true,
        value: 45
    });
    let v2 = {
        has: function () {
            return false;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v7 = 'x' in v3;
        f0(!v7);
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        enumerable: true,
        configurable: false,
        value: 45
    });
    let v2 = {
        has: function () {
            return false;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            'x' in v3;
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy \'has\' must return \'true\' for non-configurable properties');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        enumerable: true,
        configurable: false,
        value: 45
    });
    let v2 = {
        has: function () {
            return false;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            'x' in v3;
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy \'has\' must return \'true\' for non-configurable properties');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        enumerable: true,
        configurable: false,
        value: 45
    });
    let v2 = {
        has: function () {
            return null;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            'x' in v3;
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy \'has\' must return \'true\' for non-configurable properties');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        enumerable: true,
        configurable: false,
        v11: {
            v8: 4,
            pauseAndThen: this.f7,
            p53: 'fail'
        }
    });
    let v2 = {
        has: function () {
            return undefined;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            'x' in v3;
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy \'has\' must return \'true\' for non-configurable properties');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        enumerable: true,
        configurable: false,
        value: 45
    });
    let v2 = {
        has: function () {
            return 0;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            'x' in v3;
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy \'has\' must return \'true\' for non-configurable properties');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        enumerable: true,
        configurable: false,
        value: 45
    });
    let v6 = false;
    let v2 = {
        has: function () {
            v6 = true;
            return 1;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v7 = 'x' in v3;
        f0(v7);
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = {};
    Object.defineProperty(v1, 'x', {
        enumerable: true,
        configurable: false,
        value: 45
    });
    let v6 = false;
    let v2 = {
        has: function () {
            v6 = true;
            return 'hello';
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v7 = 'x' in v3;
        f0(v7);
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = {};
    let v6 = false;
    let v2 = {
        has: function () {
            v6 = true;
            return true;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v7 = 'x' in v3;
        f0(v7);
        f0(v6);
        v6 = false;
    }
}
{
    let v8 = { x: 20 };
    let v1 = Object.create(v8);
    f0(v1.__proto__ === v8);
    let v6 = false;
    let v2 = {
        has: function (v1, propName) {
            v6 = true;
            return propName in v1;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v7 = 'x' in v3;
        f0(v7);
        f0(v6);
        v6 = false;
    }
}
{
    let v1 = { x: 20 };
    let v2 = {
        has: function (theTarget, propName) {
            f0(theTarget === v1);
            v6 = true;
            return propName in theTarget;
        }
    };
    let v3 = new Proxy(v1, v2);
    let v9 = Object.create(v3);
    f0(Reflect.getPrototypeOf(v9) === v3);
    let v6 = false;
    for (let v4 = 0; v4 < 500; v4++) {
        let v7 = 'x' in v9;
        f0(v7);
        f0(v6);
        v6 = false;
    }
}
{
    let v0 = null;
    let v1 = new Proxy({}, {
        getOwnPropertyDescriptor: function () {
            v0 = new Error();
            throw v0;
        }
    });
    let v2 = {
        has: function (theTarget, propName) {
            return false;
        }
    };
    let v3 = new Proxy(v1, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            'foo' in v3;
        } catch (e) {
            f0(e === v0);
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v10 = null;
    let v11 = null;
    let v12 = {};
    let v13 = false;
    let v14 = {
        has: function (theTarget, propName) {
            v13 = true;
            v10 = new Error();
            throw v10;
            return false;
        }
    };
    let v15 = new Proxy(v12, v14);
    let v16 = {};
    v16.__proto__ = v15;
    let v17 = {
        has: function (theTarget, propName) {
            v11 = new Error();
            throw v11;
            return false;
        }
    };
    let v18 = new Proxy(v16, v17);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            10 in v18;
        } catch (e) {
            f0(e === v11);
            v5 = true;
        }
        f0(v5);
        f0(!v13);
    }
}
{
    let v10 = null;
    let v11 = null;
    let v12 = {};
    let v13 = false;
    let v14 = {
        has: function (theTarget, propName) {
            v13 = true;
            v10 = new Error();
            throw v10;
            return false;
        }
    };
    let v15 = new Proxy(v12, v14);
    let v16 = {};
    v16.__proto__ = v15;
    let v17 = {
        has: function (theTarget, propName) {
            v11 = new Error();
            throw v11;
            return false;
        }
    };
    let v18 = new Proxy(v16, v17);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            'foo' in v18;
        } catch (e) {
            f0(e === v11);
            v5 = true;
        }
        f0(v5);
        f0(!v13);
    }
}
{
    let v6 = false;
    let v2 = {
        has: function (...args) {
            v6 = true;
            return Reflect.has(...args);
        }
    };
    let v3 = new Proxy({}, v2);
    let v19 = function () {
        f0(!Reflect.has(v3, 'x'));
        f0(v6);
        v6 = false;
    };
    noInline(v19);
    for (let v4 = 0; v4 < 10000; v4++) {
        v19();
    }
}
