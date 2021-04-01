var NISLFuzzingFunc = function() {
    var b = this, a, d;
    if (b.dock === "right" || b.dock === "left") {
        a = b.dockLeft;
        b.dock = "right";
    } else {
        a = b.dockRight;
        b.dock = "left";
    }
    return a;
};
NISLFuzzingFunc();
