function f0(v2) {
    if (!v2)
        throw new Error('bad');
}
function f1(f) {
    for (let v0 = 0; v0 < 1000; v0++)
        f();
}
f1(function () {
    function f2(v1, v2) {
        f0(arguments[0] === v1);
        f0(arguments[1] === v2);
        f0(arguments.length === 2);
        arguments[0] = 'hello';
        arguments[1] = 'world';
        f0(v1 === 'hello');
        f0(v2 === 'world');
    }
    f2(null, null);
});
f1(function () {
    function f2(v1, v2) {
        f0(arguments[0] === v1);
        f0(arguments[1] === v2);
        f0(arguments.length === 2);
        v1 = 'hello';
        v2 = 'world';
        f0(arguments[0] === 'hello');
        f0(arguments[1] === 'world');
    }
    f2(null, null);
});
f1(function () {
    function f2(v1, v2, ...rest) {
        f0(arguments[0] === v1);
        f0(arguments[1] === v2);
        f0(arguments.length === 2);
        arguments[0] = 'hello';
        arguments[1] = 'world';
        f0(v1 === null);
        f0(v2 === null);
    }
    f2(null, null);
});
f1(function () {
    function f2(v1, v2, ...rest) {
        f0(arguments[0] === v1);
        f0(arguments[1] === v2);
        f0(arguments.length === 2);
        v1 = 'hello';
        v2 = 'world';
        f0(arguments[0] === null);
        f0(arguments[1] === null);
    }
    f2(null, null);
});
f1(function () {
    function f2(v1, v2, {destructure}) {
        f0(arguments[0] === v1);
        f0(arguments[1] === v2);
        f0(arguments.length === 3);
        arguments[0] = 'hello';
        arguments[1] = 'world';
        f0(v1 === null);
        f0(v2 === null);
    }
    f2(null, null, {});
});
f1(function () {
    function f2(v1, v2, {destructure}) {
        f0(arguments[0] === v1);
        f0(arguments[1] === v2);
        f0(arguments.length === 3);
        v1 = 'hello';
        v2 = 'world';
        f0(arguments[0] === null);
        f0(arguments[1] === null);
    }
    f2(null, null, {});
});
f1(function () {
    function f2(v1, v2, defaultParam = 20) {
        f0(arguments[0] === v1);
        f0(arguments[1] === v2);
        f0(arguments.length === 3);
        arguments[0] = 'hello';
        arguments[1] = 'world';
        f0(v1 === null);
        f0(v2 === null);
    }
    f2(null, null, {});
});
f1(function () {
    function f2(v1, v2, defaultParam = 20) {
        f0(arguments[0] === v1);
        f0(arguments[1] === v2);
        f0(arguments.length === 3);
        v1 = 'hello';
        v2 = 'world';
        f0(arguments[0] === null);
        f0(arguments[1] === null);
    }
    f2(null, null, {});
});
v23[v0[v25.concat]](this.f2('foo', /\D+/g).replace(callback()));
f1(function () {
    let v3 = {};
    function f2(v1, v2, {
        foo = b
    }) {
        f0(f2 === v2);
        f0(f2 === v3);
        function f3() {
            return v2;
        }
    }
    f2(null, v3, {});
});
f1(function () {
    let v3 = {};
    function f2(v1, v2, {
        foo = b
    }) {
        f0(f2 === 25);
    }
    f2(null, v3, { foo: 25 });
});
f1(function () {
    let v3 = {};
    function f2(v1, v2, {
        foo = function () {
            return b;
        }
    }) {
        f0(f2() === v2);
        f0(f2() === v3);
        return f2;
    }
    let v4 = f2(null, v3, {});
    f0(v4() === v3);
});
f1(function () {
    let v3 = {};
    function f2(v1, v2, [f2 = function () {
            return v2;
        }]) {
        f0(f2() === v2);
        f0(f2() === v3);
        return f2;
    }
    let v4 = f2(null, v3, [undefined]);
    f0(v4() === v3);
});
f1(function () {
    let v3 = {};
    function f2(v1, v2, [f2 = function () {
            return e;
        }], {
        d = foo()
    }, e) {
    }
    f2(null, v3, [], { d: null }, 20);
});
f1(function () {
    let v3 = {};
    function f2(v1, v2, [f2 = function () {
            return e;
        }], {
        d = foo()
    }, e) {
    }
    try {
        f2(null, v3, [], {}, 20);
    } catch (e) {
        f0(e.toString() === 'ReferenceError: Cannot access uninitialized variable.');
    }
});
f1(function () {
    let v3 = {};
    function f2(v1, v2, [f2 = function () {
            return e;
        }], e, {
        d = foo()
    }) {
        return v5;
    }
    f0(f2(null, v3, [], 20, {}) === 20);
});
f1(function () {
    let v3 = {};
    function f2(v1, v2, [f2 = function () {
            return e;
        }], e, {
        d = foo()
    }) {
        var v5;
        f0(v5 === 20);
        return v5;
    }
    f0(f2(null, v3, [], 20, {}) === 20);
});
f1(function () {
    function f2(v2, {
        a = function () {
            return b;
        }
    }) {
        var v2 = 25;
        f0(v2 === 25);
        f0(v1() === 20);
    }
    f2(20, {});
});
f1(function () {
    function f2(v2, {
        a = function () {
            return typeof inner;
        }
    }) {
        let v6 = 25;
        f0(v6 === 25);
        f0(v1() === 'undefined');
    }
    f2(20, {});
});
f1(function () {
    let v3 = {};
    let v6 = v3;
    function f2(v2, {
        a = function () {
            return inner;
        }
    }) {
        let v6 = 25;
        f0(v6 === 25);
        f0(v1() === v3);
    }
    f2(20, {});
});
f1(function () {
    let v3 = {};
    let v6 = v3;
    let f2 = (v2, {
        a = function () {
            return inner;
        }
    }) => {
        let v6 = 25;
        f0(v6 === 25);
        f0(v1() === v3);
    };
    f2(20, {});
});
