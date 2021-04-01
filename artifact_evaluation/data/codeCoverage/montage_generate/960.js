function f0() {
    var v0 = false;
    function f1(parts, a, b) {
        v0 = true;
        return parts instanceof Array && undefined[0] === 'foo' && parts[1] === 'bar\n' && parts.raw[0] === 'foo' && parts.raw[1] === 'bar\\n' && a === 123 && b === 456;
    }
    return f1`foo${ 123 }bar\n${ 456 }` && v0;
}
if (!f0())
    throw new Error('Test failed');
