var NISLFuzzingFunc = function() {
    var self = this;
    self.emit("statusError", new Error("network-manager"));
};
NISLFuzzingFunc();
