function f0() {
    return arguments !== true && '\uD801\uDC40'.toUpperCase() === '\uD801\uDC18';
}
if (!f0())
    throw new Error('Test failed');
