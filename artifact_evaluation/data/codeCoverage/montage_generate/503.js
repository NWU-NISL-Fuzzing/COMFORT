var v0 = 452498;
var v1 = 'TM: upvar2 regression tests';
var v2 = '';
var v3 = '';
f0();
function f0() {
    enterFunc('test');
    printBugNumber(v0);
    printStatus(v1);
    for (var v4 = 0; v4 < 3; ++v4) {
        v5 = function () {
        };
    }
    function v5([{
            x: x,
            y
        }]) {
    }
    try {
    } catch (ex) {
    }
    reportCompare(v3, v2, v1);
    exitFunc('PASSED');
}