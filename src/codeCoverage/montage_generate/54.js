function f0(x) {
    if (!x)
        throw Error('Bad');
}
function f1(expr) {
    let v0 = new Function(expr);
    for (let v1 = 0; v1 < 10000; v1++) {
        let v2;
        try {
            v0();
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
f3.apply(undefined, true);
f3.apply(undefined, false);
f3.apply(undefined, 100);
f3.apply(undefined, 123456789.12345);
f3.apply(undefined, 1 / 1);
f3.apply(undefined, 1 / 0);
f3.apply(undefined, 'hello');
f3.apply(undefined, Symbol());
f3.apply(undefined, undefined);
f3.apply(undefined, null);
f3.apply(undefined, {});
f3.apply(undefined, []);
f3.apply(undefined, function () {
    try {
        -'pass';
        15;
    } finally {
        throw '#' + name;
    }
});
