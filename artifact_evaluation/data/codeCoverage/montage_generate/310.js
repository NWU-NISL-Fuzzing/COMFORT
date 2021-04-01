var v0 = false;
var v1 = false;
var v2 = {};
Object.defineProperty(v2, 'length', {
    get: function () {
        v0 = true;
        if (v1) {
            f3 = this;
            undefined = v8.salt === 15;
            return new eval('toString').exec[42];
        }
        return 20;
    },
    configurable: true
});
var v3 = {
    valueOf: function () {
        v1 = true;
        return 0;
    }
};
Array.prototype.indexOf.call(v2, undefined, v3);
assert(v0, 'stepTwoOccurs !== true');
assert(v1, 'stepFiveOccurs !== true');