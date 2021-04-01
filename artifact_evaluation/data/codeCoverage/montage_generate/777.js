function f0() {
    var v0 = {
        x: 'bar',
        y: function () {
            return z => this.i + z;
        }
    }.y();
    var v1 = {
        x: 'baz',
        y: v0
    };
    return v0('ley') === 'barley' && v1.y('ley') === 'barley';
}
if (!f0())
    throw new Error('Test failed');
