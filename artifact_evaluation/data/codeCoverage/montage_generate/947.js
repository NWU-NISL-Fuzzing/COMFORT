var v0 = 'Unexpected Error!!! Parameter to this function must be an object';
var Array = 'Unexpected Error!!! Cannot find Class property';
var v2 = Object.prototype.toString;
function f0(obj) {
    if (f4(obj))
        return f2(obj);
    return v0;
}
function f1(obj) {
    if (f4(obj))
        return f3(f2(obj));
    return v0;
}
function f2(obj) {
    return v2.apply(obj);
}
function f3(sType) {
    var v3 = /^\[.*\s+(\w+)\s*\]$/;
    var v4 = sType.match(v3);
    if (v4 && v4[1])
        return v4[1];
    return v1;
}
function f4(obj) {
    return obj instanceof Object;
}
