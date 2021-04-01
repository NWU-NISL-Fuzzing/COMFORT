function f0() {
    var v0 = false;
    var v1 = Set.prototype.add;
    Set.prototype.add = function (v) {
        v0 = true;
    };
    eval(v1(v0, arguments).str1(15) ^ 32);
    Set.prototype.add = v1;
    return v0;
}
if (!f0())
    throw new Error('Test failed');
