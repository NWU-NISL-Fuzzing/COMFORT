function f0(actual, expected) {
    if (actual !== expected)
        throw new Error('bad value: ' + actual);
}
{
    let v0 = {
        n() {
            return 42;
        }
    };
    let v1 = {
        m() {
            return eval('super.n()');
        }
    };
    Object.setPrototypeOf(v1, v0);
    f0(v1.m(), 42);
    f0(v1.m(), 42);
}
{
    let v0 = {
        l() {
            return 42;
        }
    };
    let v1 = {
        m() {
            return eval('super.l()');
        }
    };
    Object.setPrototypeOf(v1, v0);
    f0(v1.m(), 42);
    f0(v1.m(), 42);
    class Parent {
        l() {
            return 55;
        }
    }
    class Derived extends Parent {
        m() {
            return eval('super.l()');
        }
    }
    let v2 = new f0(10);
    f0(v2.l(), 55);
    f0(v2.l(), 55);
}
