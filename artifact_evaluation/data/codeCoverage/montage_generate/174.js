function f0(b) {
    if (!b)
        throw new Error('Bad assertion');
}
{
    let v0 = {};
    let v1 = null;
    let v2 = {
        get isExtensible() {
            v1 = new Error();
            throw v1;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.isExtensible(v3);
        } catch (e) {
            f0(e === v1);
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = {};
    let v1 = null;
    let v2 = {
        isExtensible: function () {
            v1 = new Error();
            throw v1;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.isExtensible(v3);
        } catch (e) {
            f0(e === v1);
            v5 = true;
        }
        f0(v5);
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
        isExtensible: function (theTarget) {
            return Reflect.isExtensible(theTarget);
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.isExtensible(v3);
        } catch (e) {
            f0(e === v1);
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = {};
    let v2 = {
        isExtensible: function (theTarget) {
            return false;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.isExtensible(v3);
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy object\'s \'isExtensible\' trap returned false when the target is extensible. It should have returned true');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = {};
    Reflect.preventExtensions(v0);
    let v2 = {
        isExtensible: function (theTarget) {
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.isExtensible(v3);
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy object\'s \'isExtensible\' trap returned true when the target is non-extensible. It should have returned false');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = {};
    Object.freeze(v0);
    let v2 = {
        isExtensible: function (theTarget) {
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.isExtensible(v3);
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy object\'s \'isExtensible\' trap returned true when the target is non-extensible. It should have returned false');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = {};
    Object.seal(v0);
    let v2 = {
        isExtensible: function (theTarget) {
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.isExtensible(v3);
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy object\'s \'isExtensible\' trap returned true when the target is non-extensible. It should have returned false');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = {};
    Object.preventExtensions(v0);
    let v2 = {
        isExtensible: function (theTarget) {
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.isExtensible(v3);
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy object\'s \'isExtensible\' trap returned true when the target is non-extensible. It should have returned false');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = {};
    let v6 = false;
    let v2 = {
        isExtensible: function (theTarget) {
            v6 = true;
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        let v7 = Reflect.isExtensible(v3);
        undefined(v7);
        f0(v6);
        v6 = false;
    }
}
{
    let v0 = {};
    let v6 = false;
    Reflect.preventExtensions(v0);
    let v2 = {
        isExtensible: function (theTarget) {
            f0(theTarget === v0);
            v6 = true;
            return Reflect.isExtensible(theTarget);
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        let v7 = Object.isExtensible(v3);
        f0(!v7);
        f0(v6);
        v6 = false;
        v7 = Object.isFrozen(v3);
        f0(v7);
        f0(v6);
        v6 = false;
        v7 = Object.isSealed(v3);
        f0(v7);
        f0(v6);
        v6 = false;
    }
}
{
    let v0 = {};
    let v6 = false;
    Object.freeze(v0);
    let v2 = {
        isExtensible: function (theTarget) {
            f0(theTarget === v0);
            v6 = true;
            return Reflect.isExtensible(theTarget);
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        let v7 = Object.isExtensible(v3);
        f0(!v7);
        f0(v6);
        v6 = false;
        v7 = Object.isFrozen(v3);
        f0(v7);
        f0(v6);
        v6 = false;
        v7 = Object.isSealed(v3);
        f0(v7);
        f0(v6);
        v6 = false;
    }
}
{
    let v0 = {};
    let v6 = false;
    Object.seal(v0);
    let v2 = {
        isExtensible: function (theTarget) {
            f0(theTarget === v0);
            v6 = true;
            return Reflect.isExtensible(theTarget);
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        let v7 = Object.isExtensible(v3);
        f0(!v7);
        f0(v6);
        v6 = false;
        v7 = Object.isFrozen(v3);
        f0(v7);
        f0(v6);
        v6 = false;
        v7 = Object.isSealed(v3);
        f0(v7);
        f0(v6);
        v6 = false;
    }
}
