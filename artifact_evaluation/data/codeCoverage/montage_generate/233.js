function f0() {
    var v0 = {
        valueOf: f0,
        y: function () {
            return () => this.x;
        }
    };
    var v1 = { x: 'bar' };
    return v0.y().call(v1) === 'foo' && v0.y().apply(v1) === 'foo';
}
if (!f0())
    throw new Error('Test failed');
