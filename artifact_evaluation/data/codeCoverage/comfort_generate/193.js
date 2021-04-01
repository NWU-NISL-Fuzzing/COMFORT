var NISLFuzzingFunc = function() {
    return this._onUpdateCallback ? this._onUpdateCallback.call(this._onUpdateCallbackContext, this.game, this.config.audio) : void 0;
};
NISLFuzzingFunc();
