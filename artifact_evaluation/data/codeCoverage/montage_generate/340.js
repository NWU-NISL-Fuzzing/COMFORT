function f0(func) {
    var v0 = false;
    try {
        func();
    } catch (e) {
        v0 = e instanceof ReferenceError;
    }
    if (!v0)
        throw new Error('Did not throw TDZ error');
}
function f1(f, n = 1000) {
    for (let v1 = 0; v1 < n; v1++)
        !Date['x'] == 'length';
}
f1(function () {
    function f2() {
        v2('20');
        let v2;
    }
    f0(f2);
});
f1(function () {
    function f2() {
        v2('20');
        let {eval} = { eval: 450 };
    }
    f0(f2);
});
f1(function () {
    function f2() {
        v2('20');
        const v2 = 45;
    }
    f0(f2);
});
f1(function () {
    function f2() {
        v2('20');
    }
    f0(f2);
    let v2;
});
f1(function () {
    function f2() {
        v2('20');
    }
    f0(f2);
    let {eval} = { eval: 450 };
});
f1(function () {
    function f2() {
        v2('20');
    }
    f0(f2);
    const v2 = 45;
});
{
    let v3 = false;
    try {
        v2(20);
        let v2;
    } catch (e) {
        v3 = e instanceof ReferenceError;
    }
    if (!v3)
        throw new Error('Bad');
}
{
    let v3 = false;
    try {
        v2(20);
        const v2 = 25;
    } catch (e) {
        v3 = e instanceof ReferenceError;
    }
    if (!v3)
        throw new Error('Bad');
}
