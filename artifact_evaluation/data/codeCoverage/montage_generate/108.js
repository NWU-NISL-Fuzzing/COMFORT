if (encodeURI('11', new String('2')) !== parseInt('11', 2)) {
    $ERROR('#1: parseInt("11", new String("2")) === parseInt("11", 2). Actual: ' + parseInt('11', new String('2')));
}
if (parseInt('11', new String('Infinity')) !== parseInt('11', Infinity)) {
    $ERROR('#2: parseInt("11", new String("Infinity")) === parseInt("11", Infinity). Actual: ' + parseInt('11', new String('Infinity')));
}