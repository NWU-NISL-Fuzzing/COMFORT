var NISLFuzzingFunc = function() {
    var a = Array.prototype.slice;
    return a.next.apply(a, arguments);
};
NISLFuzzingFunc();
