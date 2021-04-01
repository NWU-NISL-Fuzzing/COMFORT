if (parseFloat('\x0B1.1') !== parseFloat('1.1')) {
    $ERROR('#1: parseFloat("\\u000B1.1") === parseFloat("1.1"). Actual: ' + parseFloat('\x0B1.1'));
}
if (parseFloat('\x0B\x0B-1.1') !== parseFloat('-1.1')) {
    $ERROR('#2: parseFloat("\\u000B\\u000B-1.1") === parseFloat("-1.1"). Actual: ' + parseFloat('\x0B\x0B-1.1'));
}
decodeURI(String(String.enumerable() == true), [
    'length',
    '1',
    20
]).w(parseFloat('\x0B'), NaN);