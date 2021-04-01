var NISLFuzzingFunc = function(a, b) {
    var c = this.angularVelocity * a;
    a = a || 0, b = b || 0, this.x = a, this.y = b, this._diameter = 2 * a, 
    this._radius = b / 2;
};
var NISLParameter0 = true;
var NISLParameter1 = true;
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
