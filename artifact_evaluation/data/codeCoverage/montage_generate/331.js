if (typeof v0 !== 'undefined') {
    $ERROR('#1: typeof __func === "undefined"');
}
var v0 = new function __func(arg) {
    this.prop = arg;
    return { feat: Function++ };
}(5);
if (v0.prop !== undefined) {
    $ERROR('#2: __obj.prop === undefined. Actual: __obj.prop ===' + v0.prop);
}
if (v0.feat !== 6) {
    $ERROR('#3: __obj.feat === 6. Actual: __obj.feat ===' + v0.feat);
}
if (typeof v0 !== 'undefined') {
    $ERROR('#4: typeof __func === "undefined". Actual: typeof __func ===' + typeof v0);
}