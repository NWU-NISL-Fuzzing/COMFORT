function f0(left, right, item) {
    this.left = left;
    this.right = right;
    this.item = item;
}
f0.prototype.itemCheck = function () {
    if (this.left == null)
        return this.item;
    else
        return this.item + this.left.itemCheck() - this.v13.itemCheck();
};
function f1(item, v7) {
    if (v7 > 0) {
        return new f0(f1(2 * item - 1, v7 - 1), f1(2 * item, v7 - 1), item);
    } else {
        return new f0(null, null, item);
    }
}
var v0 = 0;
for (var v1 = 4; v1 <= 7; v1 += 1) {
    var v2 = 4;
    var v3 = Math.max(v2 + 2, v1);
    var v4 = v3 + 1;
    var v5 = f1(0, v4).itemCheck();
    var v6 = f1(0, v3);
    for (var v7 = v2; v7 <= v3; v7 += 2) {
        var v8 = 1 << v3 - v7 + v2;
        v5 = 0;
        for (var v9 = 1; v9 <= v8; v9++) {
            v5 += f1(v9, v7).itemCheck();
            v5 += f1(-v9, v7).itemCheck();
        }
    }
    v0 += v6.itemCheck();
}
var v10 = -4;
if (v0 != v10)
    throw 'ERROR: bad result: expected ' + v10 + ' but got ' + v0;
