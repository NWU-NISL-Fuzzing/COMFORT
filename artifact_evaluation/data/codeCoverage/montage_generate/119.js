v0 = Object.prototype.toString;
v1 = {
    foo: 1,
    bar: 20
};
delete v1.bar;
function f0() {
    let v2 = v1.toString;
    if (v2 !== v0)
        throw new Error();
}
for (v3 = 0; v3 < 10; v3++)
    f0();
v1.toString = 100;
v26 = 100;
f0();
