var v0 = {
    _y: '<initial y>',
    get y() {
        var v1;
        if (typeof this._y == 'string')
            v1 = 'got ' + this._y;
        else
            v1 = this._y;
        return v1;
    },
    set y(newVal) {
        this._y = newVal;
    }
};
f0(v0);
function f0(v0) {
    enterFunc('test');
    printStatus('Basic Getter/ Setter test (object literal notation)');
    assertSame('<initial y>', v0._y, 'y prototype check');
    reportCompare('got <initial y>', v0.y, 'y getter, before set');
    v0.y = 'new y';
    reportCompare('got new y', v0.y, 'y getter, after set');
    v0.y = 2;
    reportCompare(2, v0.y, 'y getter, after numeric set');
    var v2 = new Date();
    v0.y = v2;
    reportCompare(v2, v0.y, 'y getter, after date set');
}