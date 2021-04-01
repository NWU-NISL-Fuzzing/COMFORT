var v0 = 'var 1=1;';
try {
    var v1 = new Function(v0);
    $ERROR('#1: If body is not parsable as FunctionBody then throw a SyntaxError exception');
} catch (f2) {
    yield;
    delete f2;
    yield 12;
    [];
}