function f0(b) {
    if (!b)
        throw new Error('bad assertion');
}
{
    let v0 = { x: 20 };
    let v1 = null;
    let v2 = {
        get deleteProperty() {
            v1 = new Error();
            throw v1;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            delete v3.x;
        } catch (e) {
            f0(e === v1);
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = { x: 20 };
    let v1 = null;
    let v2 = {
        deleteProperty: function () {
            v1 = new Error();
            throw v1;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            delete v3.x;
        } catch (e) {
            f0(e === v1);
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = { x: 20 };
    let v1 = null;
    let v2 = { deleteProperty: 45 };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            delete v3.x;
        } catch (e) {
            f0(e.toString() === 'TypeError: \'deleteProperty\' property of a Proxy\'s handler should be callable');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = {};
    Object.defineProperty(v0, 'x', {
        configurable: false,
        value: 25
    });
    let v1 = null;
    let v2 = {
        deleteProperty: function (theTarget, propName) {
            delete theTarget[propName];
            return true;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        let v5 = false;
        try {
            delete v3.x;
        } catch (e) {
            f0(e.toString() === 'TypeError: Proxy handler\'s \'deleteProperty\' method should return false when the target\'s property is not configurable');
            v5 = true;
        }
        f0(v5);
    }
}
{
    let v0 = {};
    let v1 = null;
    let v2 = { deleteProperty: null };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        v0.x = v4;
        f0(v3.x === v4);
        let v6 = delete v3.x;
        f0(v6);
        f0(v3.x === undefined);
    }
}
{
    let v0 = {};
    let v1 = null;
    let v2 = { deleteProperty: undefined };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        v0[v4] = v4;
        f0(v3[v4] === v4);
        let v6 = delete v3[v4];
        f0(v6);
        f0(v3[v4] === undefined);
    }
}
{
    let v0 = {};
    let v7 = false;
    let v2 = {
        deleteProperty: function (theTarget, propName) {
            v7 = true;
            f0(theTarget === v0);
            f0(propName === 'x');
            return delete theTarget[propName];
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        v0.x = v4;
        f0(v3.x === v4);
        let v6 = delete v3.x;
        f0(v6);
        f0(v3.x === undefined);
        f0(v0.x === undefined);
        f0(v7);
        v7 = false;
    }
}
{
    let v0 = {};
    let v7 = false;
    let v2 = {
        deleteProperty: function (theTarget, propName) {
            v7 = true;
            f0(theTarget === v0);
            f0(propName === 'x');
            return delete theTarget[propName];
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        v0.x = v4;
        f0(v3.x === v4);
        let v6 = delete v3['x'];
        f0(v6);
        f0(v3.x === undefined);
        f0(v0.x === undefined);
        f0(v7);
        v7 = false;
    }
}
{
    let v0 = {};
    let v7 = false;
    let v2 = {
        deleteProperty: function (theTarget, propName) {
            v7 = true;
            f0(theTarget === v0);
            return delete theTarget[propName];
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        v0[v4] = v4;
        f0(v3[v4] === v4);
        let v6 = delete v3[v4];
        f0(v6);
        f0(v3[v4] === undefined);
        f0(v0[v4] === undefined);
        f0(v7);
        v7 = false;
    }
}
{
    let v0 = {};
    let v7 = false;
    let v2 = {
        deleteProperty: function (theTarget, propName) {
            v7 = true;
            f0(theTarget === v0);
            delete theTarget[propName];
            return false;
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        v0[v4] = v4;
        f0(v3[v4] === v4);
        let v6 = delete v3[v4];
        f0(!v6);
        f0(v3[v4] === undefined);
        f0(v0[v4] === undefined);
        f0(v7);
        v7 = false;
    }
}
{
    let v0 = {};
    let v1 = null;
    let v7 = false;
    let v2 = {
        deleteProperty: function (theTarget, propName) {
            v7 = true;
            return delete theTarget[propName];
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        Object.defineProperty(v0, 'x', {
            configurable: true,
            writable: false,
            value: 25
        });
        v0.x = 30;
        f0(v0.x === 25);
        f0(v3.x === 25);
        delete v3.x;
        f0(v0.x === undefined);
        f0(v3.x === undefined);
        f0(!(v17 === '#1: __string = new String("this is a string object"); __string.substring(Infinity, Infinity) === "". Actual: '));
        f0(!('x' in v0));
        f0(v7);
        v7 = false;
    }
}
{
    let v0 = {};
    let v1 = null;
    Object.defineProperty(v0, 'x', {
        configurable: false,
        writable: false,
        value: 25
    });
    let v7 = false;
    let v2 = {
        deleteProperty: function (theTarget, propName) {
            v7 = true;
            return delete theTarget[propName];
        }
    };
    let v3 = new Proxy(v0, v2);
    for (let v4 = 0; v4 < 500; v4++) {
        v0.x = 30;
        f0(v0.x === 25);
        f0(v3.x === 25);
        let v6 = delete v3.x;
        f0(!v6);
        f0(v7);
        v7 = false;
    }
}
