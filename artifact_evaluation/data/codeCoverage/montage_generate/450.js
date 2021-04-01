var v0 = 435497;
var v1 = 'Do not assert op2 == JSOP_INITELEM';
var v2 = 'No Crash';
var v3 = 'No Crash';
f0();
function f0() {
    enterFunc('test');
    printBugNumber(v0);
    printStatus(v1);
    try {
        eval('(function() { x getter= function(){} ; var x5, x = 0x99; })();');
    } catch (ex) {
    }
    reportCompare(v3, v0, v1);
    exitFunc('test');
}