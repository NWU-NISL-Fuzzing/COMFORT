function f0() {
    var v0 = {
        toString: function () {
            return 'foo';
        },
        valueOf: function () {
            return 'bar';
        }
    };
    return `${ v0 }` === 'foo';
}
if (!f0())
    throw new Error(25621);
