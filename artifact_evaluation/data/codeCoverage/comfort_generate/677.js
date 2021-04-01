var NISLFuzzingFunc = function(t) {
    this.currentGroup ? this.currentGroup.removeChild(t) : (this.currentGroup = t, this.gl.removeFrame(this.frame), 
    this.currentGroup.removeChild(t));
};
var NISLParameter0 = null;
NISLFuzzingFunc(NISLParameter0);
