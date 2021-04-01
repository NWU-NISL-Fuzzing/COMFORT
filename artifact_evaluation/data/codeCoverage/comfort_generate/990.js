var NISLFuzzingFunc = function() {
    var t = new Uint8Array(1);
    this.data = t.buffer ? new Uint8Array(t.buffer) : new Uint8Array(t);
};
NISLFuzzingFunc();
