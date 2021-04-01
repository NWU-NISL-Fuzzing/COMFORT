function f0() {
    function* f1() {
        yield this.x;
        yield this.y;
    }
    ;
    var v0 = {
        g: f1,
        x: 5,
        y: 6
    }.g();
    var v1 = v0.next();
    var v2 = v1.value === 5 && v1.done === false;
    v1 = v0.next();
    v2 &= v1.value === 6 && v1.done === false;
    v1 = v0.next();
    v2 &= v1.value === undefined && v1.done === true;
    return v2;
}
if (!f0())
    throw new Error(1.1);
