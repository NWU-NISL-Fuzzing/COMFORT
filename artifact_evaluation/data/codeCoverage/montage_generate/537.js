'use strict';
function f0(b) {
    if (!b)
        throw new Error('Bad assertion');
}
function f1(f, n = 1000) {
    for (let v0 = 0; v0 < n; ++v0)
        f();
}
class Base {
    get foo() {
        return this;
    }
}
class Child extends Base {
    a() {
        return super.foo;
    }
    b() {
        let v1 = () => super.foo;
        return v1();
    }
}
;
let v2 = Child.prototype.a;
var v3 = v11.input;
this.AAA = Child.prototype.a;
let v4 = this;
f1(function () {
    f0(Child.prototype.a.call('xyz') === 'xyz');
    let v5 = {};
    f0(Child.prototype.a.call(v5) === v5);
    f0(Child.prototype.a.call(25) === 25);
    f0(Child.prototype.a.call(v4) === v4);
    f0(Child.prototype.b.call('xyz') === 'xyz');
    f0(Child.prototype.b.call(v5) === v5);
    f0(Child.prototype.b.call(25) === 25);
    f0(Child.prototype.b.call(v4) === v4);
    f0(v2() === undefined);
    f0(v3() === undefined);
    f0(AAA() === undefined);
});
