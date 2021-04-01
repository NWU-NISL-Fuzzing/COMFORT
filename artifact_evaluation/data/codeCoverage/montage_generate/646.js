function f0() {
    var v0, v1, v2 = 0;
    ({
        [i++]: result0 = 'hungryByDefault',
        [i++]: result1 = 2
    } = []);
    return v0 === 'hungryByDefault' && v1 === 'hippoByDefault' && v2 === 2;
}
if (!f0())
    throw new Error('Test failed');
