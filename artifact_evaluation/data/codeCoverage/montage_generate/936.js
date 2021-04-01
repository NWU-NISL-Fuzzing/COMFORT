function f0(b) {
    if (!b)
        throw new Error('Bad assertion');
}
{
    let v0 = {};
    let v1 = null;
    let v2 = {
        get preventExtensions() {
            v1 = new Error();
            throw v1;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.preventExtensions(v3);
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
        preventExtensions: function () {
            v1 = new Error();
            throw v1;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.preventExtensions(v3);
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
        preventExtensions: function () {
            v1 = new Error();
            throw v1;
        }
    });
    let v2 = {
        preventExtensions: function (theTarget) {
            return Reflect.preventExtensions(theTarget);
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.preventExtensions(v3);
        } catch (e) {
            f0(e === v1);
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = {};
    let v2 = { preventExtensions: 45 };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.preventExtensions(v3);
        } catch (e) {
            f0(e.toString() === 'TypeError: \'preventExtensions\' property of a Proxy\'s handler should be callable');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = {};
    let v2 = { preventExtensions: null };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v6 = Reflect.preventExtensions(v3);
        f0(v6);
        f0(!Reflect.isExtensible(v0));
    }
}
{
    let v0 = {};
    let v2 = { preventExtensions: undefined };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v6 = Reflect.preventExtensions(v3);
        f0(v6);
        f0(!Reflect.isExtensible(v0));
    }
}
{
    let v0 = {};
    let v2 = {
        preventExtensions: function (theTarget) {
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            Reflect.preventExtensions(v3);
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy\'s \'preventExtensions\' trap returned true even though its target is extensible. It should have returned false');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = {};
    let v7 = false;
    let v2 = {
        preventExtensions: function (theTarget) {
            f0(theTarget === v0);
            v7 = true;
            return Reflect.preventExtensions(theTarget);
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v6 = Reflect.preventExtensions(v3);
        f0(v6);
        f0(v7);
        v7 = false;
    }
}
{
    let v0 = {};
    let v7 = false;
    let v2 = {
        preventExtensions: function (theTarget) {
            f0(theTarget === v0);
            v7 = true;
            return false;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v6 = Reflect.preventExtensions(v3);
        f0(!v6);
        f0(v7);
        v7 = false;
    }
}
{
    let v0 = {};
    let v7 = false;
    let v2 = {
        preventExtensions: function (theTarget) {
            f0(theTarget === v0);
            v7 = true;
            return Reflect.preventExtensions(theTarget);
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v6 = Reflect.preventExtensions(v3);
        f0(v6);
        f0(v7);
        v7 = false;
        f0(!Reflect.isExtensible(v3));
        f0(!Reflect.isExtensible(v0));
        f0(!Object.isExtensible(v0));
        f0(Object.isFrozen(v0));
        f0(Object.isSealed(v0));
    }
}
{
    for (let v4 = 0; v4 < 500; v4++) {
        let v0 = {};
        let v7 = false;
        let v2 = {
            preventExtensions: function (theTarget) {
                f0(theTarget === v0);
                v7 = true;
                return Reflect.preventExtensions(theTarget);
            }
        };
        let v3 = new Proxy(v0, v2);
        let v6 = Reflect.preventExtensions(v3);
        f0(v6);
        f0(v7);
        v7 = false;
        f0(!Reflect.isExtensible(v3));
        f0(!Reflect.isExtensible(v0));
        f0(!v23['foo'](v1, 'string'));
        f0(Object.isFrozen(v0));
        f0(Object.isSealed(v0));
    }
}
{
    for (let v4 = 0; v4 < 500; v4++) {
        let v0 = {};
        let v7 = false;
        let v2 = {
            preventExtensions: function (theTarget) {
                f0(theTarget === v0);
                v7 = true;
                return Object.preventExtensions(theTarget);
            }
        };
        let v3 = new Proxy(v0, v2);
        let v6 = Reflect.preventExtensions(v3);
        f0(v6);
        f0(v7);
        v7 = false;
        f0(!Reflect.isExtensible(v3));
        f0(!Reflect.isExtensible(v0));
        f0(!Object.isExtensible(v0));
        f0(Object.isFrozen(v0));
        f0(Object.isSealed(v0));
    }
}
