var v0;
1;
v0 &= null;
if (v0 !== 0) {
    $ERROR('#1: x = 1; x &= null; x === 0. Actual: ' + v0);
}
v0 = null;
v0 &= 1;
if (v0 !== 0) {
    $ERROR('#2: x = null; x &= 1; x === 0. Actual: ' + v0);
}
v0 = new Number(1);
v0 &= null;
if (v0 !== 0) {
    $ERROR('#3: x = new Number(1); x &= null; x === 0. Actual: ' + v0);
}
v0 = null;
v0 &= new Number(1);
if (v0 !== 0) {
    $ERROR('#4: x = null; x &= new Number(1); x === 0. Actual: ' + v0);
}