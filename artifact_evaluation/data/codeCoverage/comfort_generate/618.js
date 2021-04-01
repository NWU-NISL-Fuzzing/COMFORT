var NISLFuzzingFunc = function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    var e = this;
    var n = this.source.subscribe(e);
    return n.onCompleted(), t.next(n);
};
NISLFuzzingFunc();
