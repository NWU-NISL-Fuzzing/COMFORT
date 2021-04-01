var NISLFuzzingFunc = function() {
    var f = "1.10.1";
    f.call(this, [ {
        type: "console",
        vm: this
    } ]);
};
NISLFuzzingFunc();
