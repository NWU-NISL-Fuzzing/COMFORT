var NISLFuzzingFunc = function() {
    if (this.isDisposed) throw new Error("Disposed torrent group failed to complete operation.");
    this.disposable.removeAllListeners();
};
NISLFuzzingFunc();
