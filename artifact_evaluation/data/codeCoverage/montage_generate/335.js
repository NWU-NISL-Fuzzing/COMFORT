function f0() {
    return { undefined: 30 }.y() === 2;
}
if (!f0())
    throw new Error('Test failed');
