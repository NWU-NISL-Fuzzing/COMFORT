var NISLFuzzingFunc = function(event) {
    var instance = this;
    var crop = instance._crop;
    if (crop && crop.width) {
        crop.setWidth(event.cropWidth);
    }
};
var NISLParameter0 = undefined;
NISLFuzzingFunc(NISLParameter0);
