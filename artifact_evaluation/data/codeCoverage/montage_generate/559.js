function f0(x) {
    if (!x)
        throw Error('Bad');
}
function f1(expr) {
    let v0 = new Function(expr);
    for (let v1 = 0; v1 < 10000; v1++) {
        let v2;
        try {
            WScript(this.f9, null);
        } catch (e) {
            v2 = e;
        }
        f0(v2);
    }
}
function f2(expr) {
    let v0 = new Function(expr);
    for (let v1 = 0; v1 < 10000; v1++) {
        let v2;
        try {
            v0();
        } catch (e) {
            v2 = e;
        }
        f0(!v2);
    }
}
function f3() {
}
f1('foo.apply(undefined, true)');
f1('foo.apply(undefined, false)');
f1('foo.apply(undefined, 100)');
f1('foo.apply(undefined, 123456789.12345)');
f1('foo.apply(undefined, 1.0/1.0)');
f1('foo.apply(undefined, 1.0/0)');
f1('foo.apply(undefined, \'hello\')');
f1('foo.apply(undefined, Symbol())');
f2('foo.apply(undefined, undefined)');
f2('foo.apply(undefined, null)');
f2('foo.apply(undefined, {})');
f2('foo.apply(undefined, [])');
f2('foo.apply(undefined, function(){})');
