function f0() {
    var v0 = new Array();
    var v1 = 0;
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(1)', true, new Boolean(1).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(0)', false, new Boolean(0).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(-1)', true, new Boolean(-1).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(\'1\')', true, new Boolean('1').valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(\'0\')', true, new Boolean('0').valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(true)', true, new Boolean(true).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(false)', false, new Boolean(false).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(\'true\')', true, new Boolean('true').valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(\'false\')', true, new Boolean('false').valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(\'\')', false, new Boolean('').valueOf());
    v0[v1++] = new TestCase(null, 'new Boolean(null)', false, new Boolean(null).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(void(0))', false, new Boolean(void 0).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(-Infinity)', true, new Boolean(Number.NEGATIVE_INFINITY).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(NaN)', false, new Boolean(Number.NaN).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean()', false, new Boolean().valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(x=1)', true, new Boolean(v2 = 1).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(x=0)', false, new Boolean(v2 = 0).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(x=false)', false, new Boolean(v2 = false).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(x=true)', true, new Boolean(v2 = true).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(x=null)', false, new Boolean(v2 = null).valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(x=\'\')', false, new Boolean(v2 = '').valueOf());
    v0[v1++] = new TestCase('15.8.6.4', 'new Boolean(x=\' \')', true, new Boolean(v2 = ' ').valueOf());
    return v0;
}
function f1(v0) {
    var v3 = true;
    writeHeaderToLog('15.8.6.4.3 Properties of the Boolean Object:  valueOf');
    for (v4 = 0; v4 < v0.length; v4++) {
        v0[v4].passed = writeTestCaseResult(v0[v4].expect, v0[v4].actual, '( ' + v0[v4].description + ' ).valueOf() = ' + v0[v4].actual);
        v0[v4].reason += v0[v4].passed ? '' : 'wrong value ';
        v3 = v0[v4].passed ? v3 : false;
    }
    stopTest();
    return v0;
}
var v5 = f0();
f1(v5);