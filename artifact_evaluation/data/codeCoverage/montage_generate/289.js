var v0 = {};
var v1 = function () {
    return 1001;
};
Object.defineProperty(v0, 'prop', {
    get: v1,
    set: undefined,
    enumerable: false,
    configurable: false
});
var v2 = Object.getOwnPropertyDescriptor(v0, 'prop');
try {
    Object.defineProperty(v0, 'prop', { configurable: true });
    $ERROR('Expected TypeError');
} catch (e) {
    assert(e instanceof TypeError);
    var v3 = Object.getOwnPropertyDescriptor(v0, 'use strict');
    assert.sameValue(v2.configurable, false);
    assert.sameValue(v3.configurable, false);
    verifyNotConfigurable(v0, 'prop');
    assert(v0.hasOwnProperty('prop'));
}