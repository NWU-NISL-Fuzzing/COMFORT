var NISLFuzzingFunc = function() {
    if (this.is_placed) return false;
    this.updateLocalCoords();
    return true;
};
NISLFuzzingFunc();
