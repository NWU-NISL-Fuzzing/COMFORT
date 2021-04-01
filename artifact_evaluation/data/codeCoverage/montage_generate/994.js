function f0() {
    var v0, v1 = [
            'anchor',
            'fontcolor',
            'fontsize',
            'link'
        ];
    for (v0 = 0; v0 < v1.length; v0++) {
        if (''[v1[v0]]('"') !== ''[v1[v0]]('&' + '1')) {
            return false;
        }
    }
    return true;
}
if (!f0())
    throw new Error('Test failed');
