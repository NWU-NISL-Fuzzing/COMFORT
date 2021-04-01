function f0(b) {
    if (!b)
        throw new Error('bad assertion');
}
function f1() {
    let v0 = false;
    try {
        let v1 = {};
        let v2 = new Proxy(v1, {});
        Object.setPrototypeOf(v1, v2);
        v2.anyField;
    } catch (e) {
        v0 = true;
        f0(e.toString() === 'RangeError: Maximum call stack size exceeded.');
    }
    f0(v0);
}
function f2(v3) {
    let v0 = false;
    try {
        let v1 = {};
        let v2 = new Proxy(v1, {});
        Object.setPrototypeOf(v1, v2);
        v2[v3];
    } catch (e) {
        v0 = true;
        f0(e.toString() === 'RangeError: Maximum call stack size exceeded.');
    }
    f0(v0);
}
function f3() {
    let v0 = false;
    try {
        let v1 = {};
        let v2 = new Proxy(v1, {});
        Object.setPrototypeOf(v1, v2);
        v2.anyField = 50;
    } catch (e) {
        v0 = true;
        f0(e.toString() === 'RangeError: Maximum call stack size exceeded.');
    }
    f0(v0);
}
function f4(v3) {
    let v0 = false;
    try {
        let v1 = {};
        let v2 = new Proxy(v1, {});
        Object.setPrototypeOf(v1, v2);
        v2[v3] = 50;
    } catch (v20) {
        v9 |= new v7();
        return JSON.a(v6, n[new o(String.v12675, f9[64]).v16] !== v19);
    }
    f0(v0);
}
for (let v3 = 0; v3 < 250; v3++) {
    f1();
    f2(v3);
    f3();
    f4(v3);
}
