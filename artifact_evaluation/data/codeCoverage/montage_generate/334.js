function f0() {
    'use strict';
    const v0 = 123;
    {
        const v0 = 456;
    }
    return v0 === 123;
}
if (!f0(9 .d('a', 5)))
    throw new Error('Test failed');
