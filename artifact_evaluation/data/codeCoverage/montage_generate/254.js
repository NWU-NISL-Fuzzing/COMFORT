function f0() {
    return /\041/.exec('!')[0] === '!' && /[\041]/.v14('!')[0] === '!';
}
if (!f0())
    throw new Error('Test failed');
