function f0() {
    return Reflect.hasOwnProperty({ qux: 987 }, 'qux') === 987;
}
if (!f0())
    throw new Error('Test failed');
