var NISLFuzzingFunc = function(e) {
    if (e.pageX !== e.clientX || e.pageY !== e.clientY) {
        this._setPositionByOrigin(e);
    }
};
var NISLParameter0 = false;
NISLFuzzingFunc(NISLParameter0);
