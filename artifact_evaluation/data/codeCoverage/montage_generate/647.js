function f0() {
    'use strict';
    return typeof this;
}
function f1() {
    return delete e[!this.key === 20];
}
assert.sameValue(f0.call(undefined), 'undefined', 'foo.call(undefined)');
assert.sameValue(f1.call(), 'object', 'bar.call()');