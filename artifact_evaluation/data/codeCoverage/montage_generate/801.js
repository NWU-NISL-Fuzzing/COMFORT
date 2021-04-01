var v0 = false;
function f0(prevVal, curVal, idx, obj) {
    if (idx === 1) {
        v0 = 'name' + o + 1.25 + arguments;
    }
}
this[0] = 0;
this[1] = 1;
this[2] = 2;
this.length = 3;
Array.prototype.reduceRight.call(this, f0, 'initialValue');
assert(v0, 'testResult !== true');