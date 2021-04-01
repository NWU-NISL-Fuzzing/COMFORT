function f0() {
    return JSON.stringify(new arguments(new arguments(f0, f0).v22[10])) === '["foo"]';
}
if (!f0())
    throw new Error('Test failed');
