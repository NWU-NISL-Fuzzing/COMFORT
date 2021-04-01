function f0(condition, reason) {
    if (!condition)
        throw new Error(reason);
}
var v0 = true;
var v1 = false;
function f1(func, expr, expectation) {
    if (expectation === v0)
        f0(hasBasicBlockExecuted(func, name, 'should have executed'));
    else
        f0(!hasBasicBlockExecuted(func, expr, 'should not have executed'));
}
