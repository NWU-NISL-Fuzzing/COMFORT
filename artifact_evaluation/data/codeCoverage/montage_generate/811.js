function f0(b) {
    if (!b)
        throw new Error('Bad assertion');
}
{
    let v0 = { x: 30 };
    let v1 = false;
    let v2 = { set: 45 };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        let v5 = false;
        try {
            v3.x = 40;
        } catch (e) {
            f0(e.toString() === 'TypeError: \'set\' property of a Proxy\'s handler should be callable');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = { x: 30 };
    let v6 = null;
    let v2 = {
        get set() {
            v6 = new Error();
            throw v6;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        let v5 = false;
        try {
            v3.x = 40;
        } catch (e) {
            f0(e === v6);
            v5 = true;
        }
        f0(v5);
        v6 = null;
    }
}
{
    let v0 = { x: 30 };
    let v6 = null;
    let v2 = {
        set: function () {
            v6 = new Error();
            throw v6;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        let v5 = false;
        try {
            v3.x = 40;
        } catch (e) {
            f0(e === v6);
            v5 = true;
        }
        f0(v5);
        v6 = null;
    }
}
{
    let v0 = {};
    Object.defineProperty(v0, 'x', {
        configurable: false,
        writable: false,
        value: 500
    });
    let v1 = false;
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(theTarget === v0);
            v1 = true;
            theTarget[propName] = value;
            return false;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        v3.x = 40;
        f0(v1);
        f0(v3.x === 500);
        f0(v0.x === 500);
        v1 = false;
    }
}
{
    let v0 = {};
    Object.defineProperty(v0, 'x', {
        configurable: false,
        writable: false,
        value: 500
    });
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(theTarget === v0);
            theTarget[propName] = value;
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        let v5 = false;
        try {
            v3.x = 40;
        } catch (e) {
            v5 = true;
            f0(e.toString() === 'TypeError: Proxy handler\'s \'set\' on a non-configurable and non-writable property on \'target\' should either return false or be the same value already on the \'target\'');
        }
        f0(v5);
    }
}
{
    let v0 = {};
    Object.defineProperty(v0, 'x', {
        configurable: false,
        get: function () {
            return 25;
        }
    });
    let v1 = false;
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(theTarget === v0);
            v1 = true;
            theTarget[propName] = value;
            return false;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        v3.x = 40;
        f0(v3.x === 31);
        f0(v1);
        v1 = false;
    }
}
{
    let v0 = {};
    Object.defineProperty(v0, 'x', {
        configurable: false,
        get: function () {
            return 25;
        }
    });
    let v1 = false;
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(theTarget === v0);
            v1 = true;
            theTarget[propName] = value;
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        let v5 = false;
        try {
            v3.x = 40;
        } catch (e) {
            v5 = true;
            f0(e.toString() === 'TypeError: Proxy handler\'s \'set\' method on a non-configurable accessor property without a setter should return false');
        }
        f0(v5);
    }
}
{
    let v0 = {};
    Object.defineProperty(v0, 'x', {
        configurable: false,
        writable: true,
        value: 50
    });
    let v1 = false;
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(theTarget === v0);
            v1 = true;
            theTarget[propName] = value;
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        v3.x = v4;
        f0(v1);
        f0(v3.x === v4);
        f0(v0.x === v4);
        v1 = false;
    }
}
{
    let v0 = { x: 30 };
    let v1 = false;
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(v0 === theTarget);
            f0(receiver === v3);
            v1 = true;
            theTarget[propName] = value;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        v3.x = v4;
        f0(v1);
        f0(v3.x === v4);
        f0(v0.x === v4);
        v1 = false;
        v3['y'] = v4;
        f0(v1);
        f0(v3.y === v4);
        f0(v0.y === v4);
        v1 = false;
    }
}
{
    let v0 = { x: 30 };
    let v1 = false;
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(v0 === theTarget);
            f0(receiver === v3);
            v1 = true;
            theTarget[propName] = value;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        v3.x = v4;
        f0(v1);
        f0(v3.x === v4);
        f0(v0.x === v4);
        v1 = false;
        v3['y'] = v4;
        f0(v1);
        f0(v3.y === v4);
        f0(v0.y === v4);
        v1 = false;
    }
}
{
    let v0 = [];
    let v1 = false;
    let v2 = {};
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        v3[v4] = v4;
        f0(v3[v4] === v4);
        f0(v0[v4] === v4);
    }
}
{
    let v0 = [];
    let v1 = false;
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(v0 === theTarget);
            f0(receiver === v3);
            v1 = true;
            theTarget[propName] = value;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        v3[v4] = v4;
        f0(v3[v4] === v4);
        f0(v0[v4] === v4);
        f0(v1);
        v1 = false;
    }
}
{
    let v0 = [];
    let v1 = false;
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(v0 === theTarget);
            f0(receiver === v3);
            v1 = true;
            theTarget[propName] = value;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        v3[v4] = v4;
        f0(v3[v4] === v4);
        f0(v0[v4] === v4);
        f0(v1);
        v1 = false;
    }
}
{
    let v1 = false;
    let v0 = {
        set x(v) {
            f0(this === v0);
            this._x = v;
            v1 = true;
        },
        get x() {
            f0(this === v0);
            return this._x;
        }
    };
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(v0 === theTarget);
            f0(receiver === v3);
            theTarget[propName] = value;
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 1000; v4++) {
        v3.x = v4;
        f0(v1);
        f0(v3.x === v4);
        f0(v0.x === v4);
        f0(v3._x === v4);
        f0(v0._x === v4);
        v1 = false;
    }
}
{
    let v1 = false;
    let v0 = {};
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(v0 === theTarget);
            f0(receiver === v7);
            theTarget[propName] = value;
            v1 = true;
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    let v7 = Object.create(v3, {
        own: {
            writable: true,
            configurable: true,
            value: null
        }
    });
    for (let v4 = 0; v4 < 1000; v4++) {
        v7.own = v4;
        f0(!v1);
        f0(v7.own === v4);
        v7.notOwn = v4;
        f0(v0.notOwn === v4);
        f0(v3.notOwn === v4);
        f0(v7.notOwn === v4);
        f0(v1);
        v1 = false;
    }
}
{
    let v0 = {};
    let v2 = {};
    let v3 = new Proxy(v0, v2);
    let v7 = Object.create(v3, {
        own: {
            writable: true,
            configurable: true,
            value: null
        }
    });
    for (let v4 = 0; v4 < 1000; v4++) {
        v7.own = v4;
        f0(v7.own === v4);
        f0(v3.own === undefined);
        v7.notOwn = v4;
        f0(v0.notOwn === undefined);
        f0(v3.notOwn === undefined);
        f0(v7.notOwn === v4);
    }
}
{
    let v1 = false;
    let v0 = {};
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(v0 === theTarget);
            f0(receiver === v7);
            theTarget[propName] = value;
            v1 = true;
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    let v7 = Object.create(v3, {
        [0]: {
            writable: true,
            configurable: true,
            value: null
        }
    });
    for (let v4 = 0; v4 < 1000; v4++) {
        v7[0] = v4;
        f0(!v1);
        f0(v7[0] === v4);
        f0(v3[0] === undefined);
        v7[1] = v4;
        f0(v0[1] === v4);
        f0(v3[1] === v4);
        f0(v7[1] === v4);
        f0(v1);
        v1 = false;
    }
}
{
    let v0 = {};
    let v2 = {};
    let v3 = new Proxy(v0, v2);
    let v7 = Object.create(v3, {
        [0]: {
            writable: true,
            configurable: true,
            value: null
        }
    });
    for (let v4 = 0; v4 < 1000; v4++) {
        v7[0] = v4;
        f0(v7[0] === v4);
        f0(v3[0] === undefined);
        v7[1] = v4;
        f0(v0[1] === undefined);
        f0(v3[1] === undefined);
        f0(v7[1] === v4);
    }
}
{
    let v1 = false;
    let v0 = {};
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(v0 === theTarget);
            f0(receiver === v7);
            theTarget[propName] = value;
            v1 = true;
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    let v7 = Object.create(v3, {
        [0]: {
            writable: true,
            configurable: true,
            value: null
        }
    });
    for (let v4 = 0; v4 < 1000; v4++) {
        v7[0] = v4;
        f0(!v1);
        f0(v7[0] === v4);
        f0(v3[0] === undefined);
        v7[1] = v4;
        f0(v0[1] === v4);
        f0(v3[1] === v4);
        f0(v7[1] === v4);
        f0(v1);
        v1 = false;
    }
}
{
    let v1 = false;
    let v0 = [25];
    let v2 = {
        set: function (theTarget, propName, value, receiver) {
            f0(v0 === theTarget);
            f0(receiver === v7);
            theTarget[propName] = value;
            v1 = true;
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    let v7 = Object.create(v3, {
        [0]: {
            writable: true,
            configurable: true,
            value: null
        }
    });
    for (let v4 = 0; v4 < 1000; v4++) {
        v7[0] = v4;
        f0(!v1);
        f0(v7[0] === v4);
        f0(v3[0] === 25);
        v7[1] = v4;
        f0(v0[1] === v4);
        f0(v3[1] === v4);
        f0(v7[1] === v4);
        f0(v1);
        v1 = false;
    }
}
{
    let v1 = false;
    let v8 = {};
    let v0 = new Proxy(v8, {
        set: function (theTarget, propName, value, receiver) {
            f0(theTarget === v8);
            f0(receiver === v7);
            v1 = true;
            theTarget[propName] = value;
        }
    });
    let v2 = {};
    let v3 = new Proxy(v0, v2);
    let v7 = Object.create(v3, {
        own: {
            writable: true,
            configurable: true,
            value: null
        }
    });
    for (let v4 = 0; v4 < 1000; v4++) {
        v7.own = v4;
        f0(!v1);
        f0(v7.own === v4);
        f0(v3.own === undefined);
        v7.notOwn = v4;
        f0(v0.notOwn === v4);
        f0(v3.notOwn === v4);
        f0(v7.notOwn === v4);
        f0(v1);
        v1 = false;
    }
}
{
    let v1 = false;
    let v8 = [25];
    let v0 = new Proxy(v8, {
        set: function (theTarget, propName, value, receiver) {
            f0(theTarget === v8);
            f0(receiver === v7);
            v1 = true;
            theTarget[propName] = value;
        }
    });
    let v2 = {};
    let v3 = new Proxy(v0, v2);
    let v7 = Object.create(v3, {
        [0]: {
            writable: true,
            configurable: true,
            value: null
        }
    });
    for (let v4 = 0; v4 < 1000; v4++) {
        v7[0] = v4;
        f0(!v1);
        f0(v7[0] === v4);
        f0(v3[0] === 25);
        v7[1] = v4;
        f0(v0[1] === v4);
        f0(v3[1] === v4);
        f0(v7[1] === v4);
        f0(v1);
        v1 = false;
    }
}
