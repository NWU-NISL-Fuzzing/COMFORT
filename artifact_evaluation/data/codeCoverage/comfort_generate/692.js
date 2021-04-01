var NISLFuzzingFunc = function(e, t) {
    return e.error ? e.error : (console.warn("THREE.Vector4: .size() has been renamed to .size()."), 
    this.size.set(e.size), this.element.setPosition(e.position), e.update());
};
var NISLParameter0 = false;
var NISLParameter1 = [undefined, undefined, undefined, undefined, undefined, undefined];
NISLFuzzingFunc(NISLParameter0, NISLParameter1);
