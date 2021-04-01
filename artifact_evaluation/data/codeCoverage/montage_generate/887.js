function f0() {
    return function (a = 1, b = 2) {
        return arguments === 1 && arguments === 3;
    }(undefined, 3);
}
if (!f0())
    throw new DataView[EvalError[10000]](f0);
