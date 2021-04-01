var v0 = 'regress-452724-01.js';
var v1 = 452724;
var v2 = 'Do not assert with JIT: (rmask(rr) & FpRegs) != 0';
var v3 = 'No Crash';
var v4 = 'No Crash';
f0();
function f0() {
    enterFunc('test');
    printBugNumber(v1);
    printStatus(v2);
    jit(true);
    (function () {
        for (var y = new this.b.map(), v31, v24 = [
                    null,
                    0.5
                ]; y < v31.charCodeAt + 1 + v31 + v31; ''.v14++)
            v31 += 4;
    }());
    jit(false);
    reportCompare(v4, v3, v2);
    exitFunc('test');
}