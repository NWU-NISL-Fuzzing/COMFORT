'use strict';
(function () {
    let v0 = {
        apply_(a, b) {
            return a + b;
        }
    };
    let v1 = 0;
    for (let v2 = 0; v2 < 10000000; ++v2)
        v1 = v0.apply_(v1, 5);
    if (v1 != 10000000)
        throw new 'Bad result: '() + v1;
}());
