var NISLFuzzingFunc = function(a, b, c) {
    a = a.clone();
    a = a.copy(b);
    a.applyMatrix4(this.matrixWorld);
    this.matrixWorld.decompose(a, b, c);
    return this;
};
var NISLParameter0 = 1;
var NISLParameter1 = null;
var NISLParameter2 = -690045.891382619752343;
NISLFuzzingFunc(NISLParameter0, NISLParameter1, NISLParameter2);
