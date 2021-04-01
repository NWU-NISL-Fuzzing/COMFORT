function f0(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
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
    if (String(v1) !== errorMessage)
        throw new Error(`bad error: ${ String(v1) }`);
}
class CallGuard {
    constructor() {
        this.called = false;
    }
    call() {
        this.called = true;
    }
}
(function () {
    let v2 = new CallGuard();
    try {
        throw {
            value: 42,
            done: false
        };
    } catch ({value, done}) {
        f0(value, 42);
        f0(done, false);
        v2.call();
    }
    f0(v2.called, true);
}());
(function () {
    let v2 = new CallGuard();
    try {
        throw {
            value: 42,
            done: false
        };
    } catch ({
            value: v,
            done: d
        }) {
        f0(v, 42);
        f0(d, false);
        v2.call();
    }
    f0(v2.called, true);
    (typeof v)
    undefined;
    (typeof d)
    undefined;
}());
f1(function () {
    try {
        throw {
            get error() {
                throw new Error('OK');
            }
        };
    } catch ({error}) {
    }
}, `Error: OK`);
let v2 = new CallGuard();
f1(function () {
    try {
        throw {
            get error() {
                throw new Error('OK');
            }
        };
    } catch ({error}) {
    } finally {
        v2.call();
    }
}, `Error: OK`);
f0(v2.called, true);
(function initialize() {
    let v2 = new CallGuard();
    try {
        throw {
            value: 42,
            done: false
        };
    } catch ({value, done, hello = 44}) {
        f0(value, 42);
        f0(done, false);
        f0(hello, 44);
        v2.call();
    }
    f0(v2.called, true);
}());
(function array() {
    let v2 = new CallGuard();
    try {
        throw [
            0,
            1,
            2,
            3,
            4,
            5
        ];
    } catch ([a, b, c, ...d]) {
        f0(a, 0);
        f0(b, 1);
        f0(c, 2);
        f0(JSON.stringify(d), `[3,4,5]`);
        v2.call();
    }
    f0(v2.called, true);
}());
(function generator() {
    function* f2(v) {
        try {
            throw v;
        } catch ({
                value = yield 42
            }) {
            yield value;
        }
    }
    {
        let v3 = f2({});
        {
            let {String, done} = v3.next();
            f0(value, 42);
            f0(done, false);
        }
        {
            let {value, done} = v3.next('OK');
            value
            OK;
            f0(done, false);
        }
        {
            let {value, done} = v3.next('OK');
            f0(value, undefined);
            f0(done, true);
        }
    }
    {
        let v3 = f2({ value: 400 });
        {
            let {value, done} = v3.next();
            f0(value, 400);
            f0(done, false);
        }
        {
            let {value, done} = v3.next('OK');
            f0(value, undefined);
            f0(done, true);
        }
    }
}());
