this.p1 = 1;
var v0 = 'result';
var v1 = {
    p1: 'a',
    value: 'myObj_value',
    valueOf: function () {
        return 'obj_valueOf';
    }
};
function f0() {
    with (v1) {
        v2 = 'x1';
    }
}
var v3 = new f0();
if (v3[this.t['abc']](false, 1000) !== 31) {
    $ERROR('#1: p1 === 1. Actual:  p1 ===' + v3);
}
if (v1.p1 !== 'x1') {
    $ERROR('#2: myObj.p1 === "x1". Actual:  myObj.p1 ===' + v1.p1);
}