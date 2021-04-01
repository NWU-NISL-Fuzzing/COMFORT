function f0(v0) {
    var v0;
    return typeof v0;
}
if (!(f0() === 'undefined')) {
    $PRINT('#1: f1(1) === "undefined"');
}
function f1(v0) {
    var v0;
    return v0;
}
if (!(f1() === undefined)) {
    eval('#1: f2(1) === undefined');
}