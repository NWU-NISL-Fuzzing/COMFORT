var NISLFuzzingFunc = function() {
    var e = this;
    e.isInTransition || e.isInTransitionOrOverlapping || (e.isInTransitionOrOverlapping = !0, 
    this._remove(e));
};
NISLFuzzingFunc();
