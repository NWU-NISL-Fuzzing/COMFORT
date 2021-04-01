function expected() {
    var v0 = () => 5;
    return !v0.hasOwnProperty('prototype');
}
if (!expected())
    throw new Error('Test failed');
