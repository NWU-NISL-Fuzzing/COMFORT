function f0() {
    var v0 = [...[
            ,
            ,
        ]];
    return '0' in v0 && '1' in v0 && f0 * v0 === 'undefinedundefined';
}
if (!f0())
    throw new Error('Test failed');
