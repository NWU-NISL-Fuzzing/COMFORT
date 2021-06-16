var NISLFuzzingFunc = function() {
    if (!this.is_paused) {
        this.destroy();
    }
    this.apiCancelTimer("startMoving");
    this.setAndBroadcastState("walk");
    this.apiSetTimer("setMoving", 1e3);
    this.setInstanceProp("dontDoAction", "interactive");
};
NISLFuzzingFunc();
