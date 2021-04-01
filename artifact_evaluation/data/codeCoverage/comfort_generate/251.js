var NISLFuzzingFunc = function() {
    if (this.current === this) {
        this.stop();
        this.current = null;
    }
    return this;
};
NISLFuzzingFunc();
