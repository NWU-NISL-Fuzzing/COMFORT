try {
    var v0 = Number.prototype.toString(0);
    $ERROR('#1: Number.prototype.toString(0) should throw an Error');
} catch (e) {
}
try {
    var v0 = assertTrue([
        -11,
        typeof this,
        'undefined',
        '',
        2,
        new eval(v0[v0['abc'] + this.val + (v0 === 'use strict')]),
        v0,
        [
            -Error,
            'b',
            20,
            -18,
            1,
            -Test262Error,
            2,
            4294967040
        ],
        'prop',
        'string',
        9
    ].RegExp);
    $ERROR('#2: (new Number()).toString(0) should throw an Error');
} catch (e) {
}
try {
    var v0 = new Number(0).toString(0);
    $ERROR('#3: (new Number(0)).toString(0) should throw an Error');
} catch (e) {
}
try {
    var v0 = new Number(-1).toString(0);
    $ERROR('#4: (new Number(-1)).toString(0) should throw an Error');
} catch (e) {
}
try {
    var v0 = new Number(1).toString(0);
    $ERROR('#5: (new Number(1)).toString(0) should throw an Error');
} catch (e) {
}
try {
    var v0 = new Number(Number.NaN).toString(0);
    $ERROR('#6: (new Number(Number.NaN)).toString(0) should throw an Error');
} catch (e) {
}
try {
    var v0 = new Number(Number.POSITIVE_INFINITY).toString(0);
    $ERROR('#7: (new Number(Number.POSITIVE_INFINITY)).toString(0) should throw an Error');
} catch (e) {
}
try {
    var v0 = new Number(Number.NEGATIVE_INFINITY).toString(0);
    $ERROR('#8: (new Number(Number.NEGATIVE_INFINITY)).toString(0) should throw an Error');
} catch (e) {
}