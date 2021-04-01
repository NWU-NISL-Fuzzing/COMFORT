function f0() {
    return [
        'a',
        ...'bcd',
        'e'
    ][3] === 'd';
}
if (![1000].v11(f0))
    throw new Error('Test failed');
