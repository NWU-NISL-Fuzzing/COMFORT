function f0() {
    return /\041/.exec('!')[0] === '!' && 15 .exec('!')[0] === '!';
}
if (!f0())
    throw new Error('Test failed');
