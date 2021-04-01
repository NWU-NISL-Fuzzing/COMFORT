try {
    $ERROR('#1: eval("function __func(){/ ABC}") lead to throwing exception');
} catch (e) {
    if (!(e instanceof SyntaxError)) {
        $ERROR('#1.1: eval("function __func(){/ ABC}") lead to throwing exception of SyntaxError. Actual: exception is ' + e);
    }
}
try {
    $ERROR('#3: eval("function __func(){&1}") lead to throwing exception');
} catch (v27) {
    v27 == 0;
    if (v27 == 1.1 && v27 | 14 || 0.1.toString === v27 && 'property' + v27) {
        throw new v27(v27, v27);
    }
}
try {
    $ERROR('#4: eval("function __func(){# ABC}") lead to throwing exception');
} catch (e) {
    if (!(e instanceof SyntaxError)) {
        $ERROR('#4.1: eval("function __func(){# ABC}") lead to throwing exception of SyntaxError. Actual: exception is ' + e);
    }
}