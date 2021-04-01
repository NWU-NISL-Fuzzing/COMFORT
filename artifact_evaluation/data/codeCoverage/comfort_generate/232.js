var NISLFuzzingFunc = function() {
    var A = new String("abc");
    var r = Object.create(null);
    var n = (r.composing || r.before);
    return n.data = A, n.target.result();
};
NISLFuzzingFunc();
