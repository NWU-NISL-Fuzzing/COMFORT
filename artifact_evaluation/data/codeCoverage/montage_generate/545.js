var v0 = 'monster';
var v1 = 'predator';
var v2 = function () {
    var [,] = [NaN];
};
try {
    v2.type = v0;
} catch (e) {
    $ERROR('#0: __PROTO.type=__MONSTER does not lead to throwing exception');
}
var v3 = function () {
};
v3.prototype = v2;
var v4 = new v3();
if (!v2.isPrototypeOf(v4)) {
    $ERROR('#1: __PROTO.isPrototypeOf(__monster) must be true');
}
if (v4.type !== v0) {
    $ERROR('#2: __monster.type ===__MONSTER. Actual: __monster.type ===' + v4.type);
}