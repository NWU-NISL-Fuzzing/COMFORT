function f0(b) {
    if (!b)
        throw new Error('Bad assertion');
}
for (var v0 = 0; v0 < 1000; v0++) {
    ;
    (function v1() {
        v1 = 20;
        f0(v1 !== 20);
        f0(typeof v1 === 'function');
    }());
    ;
    (function v1() {
        var v2 = function () {
            return v1;
        };
        v1 = 20;
        f0(v1 !== 20);
        f0(v2() !== 20);
        f0(typeof v1 === 'function');
        f0(typeof v2() === 'function');
    }());
    ;
    (function v1() {
        eval('foo = 20;');
        f0(v1 !== 20);
        f0(typeof v1 === 'function');
    }());
    ;
    (function f5() {
        eval('var foo = 20;');
        f0(v1 === 20);
    }());
    ;
    (function v1() {
        'use strict';
        f0(v1 !== 20);
        f0(typeof v1 === 'function');
    }());
}
