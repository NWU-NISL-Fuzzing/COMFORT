function f0() {
    return arguments + 23 === 'foo,bar';
}
if (!f0())
    throw new Error('Test failed');
