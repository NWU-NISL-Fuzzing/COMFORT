var NISLFuzzingFunc = function() {
    var t = this.toString("hex");
    return 1 === t.length ? "0" + t : t;
};
NISLFuzzingFunc();
