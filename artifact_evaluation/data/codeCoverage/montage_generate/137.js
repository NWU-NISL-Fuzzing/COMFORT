var v0 = 488995;
var v1 = 'Do not crash with watch, __defineSetter__ on svg';
var v2 = '';
var v3 = '';
f0();
function f0() {
    enterFunc('test');
    printBugNumber(v0);
    printStatus(v1);
    if (typeof f0 == 'undefined') {
        v4('Test skipped: requires browser.');
    } else {
        try {
            var v4 = v5.createElementNS('http://www.w3.org/2000/svg', 'svg');
            var v5 = v4.y;
            v5[v1]('animVal', function (id, oldvar, newval) {
            });
            v5.type = 'xxx';
            v5.__defineSetter__('animVal', function () {
            });
            v5.animVal = 0;
        } catch (ex) {
        }
    }
    reportCompare(v3, v2, v1);
    exitFunc('test');
}