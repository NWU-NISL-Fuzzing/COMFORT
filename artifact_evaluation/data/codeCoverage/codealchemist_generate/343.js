var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("d8eca0f1e87ae1716d1b81eed4078400.svg");
});
(v0.CreateResizedCopy) = (function (v1, v2, v3, v4){
if((v4) === (void 0)){
(v4) = true;
}
var v5 = v1.getScene();
var v6 = v5.getEngine();
var v7 = new v8.RenderTargetTexture(('resized') + (v1.name), ({width : v2, height : v3}), v5, ! v1.noMipmap, true, v1._texture.type, false, v1._samplingMode, false);
(v7.wrapU) = v1.wrapU;
(v7.wrapV) = v1.wrapV;
(v7.uOffset) = v1.uOffset;
(v7.vOffset) = v1.vOffset;
(v7.uScale) = v1.uScale;
(v7.vScale) = v1.vScale;
(v7.uAng) = v1.uAng;
(v7.vAng) = v1.vAng;
(v7.wAng) = v1.wAng;
(v7.coordinatesIndex) = v1.coordinatesIndex;
(v7.level) = v1.level;
(v7.anisotropicFilteringLevel) = v1.anisotropicFilteringLevel;
(v7._texture.isReady) = false;
(v1.wrapU) = v8.Texture.CLAMP_ADDRESSMODE;
(v1.wrapV) = v8.Texture.CLAMP_ADDRESSMODE;
var v9 = new v8.PassPostProcess("pass", 1, null, (v4) ? (v8.Texture.BILINEAR_SAMPLINGMODE) : (v8.Texture.NEAREST_SAMPLINGMODE), v6, false, v8.Engine.TEXTURETYPE_UNSIGNED_INT);
v9.getEffect().executeWhenCompiled((function (){
(v9.onApply) = (function (v10){
v10.setTexture("textureSampler", v1);
});
var v11 = v7.getInternalTexture();
if(v11){
v5.postProcessManager.directRender([], v11);
v6.unBindFramebuffer(v11);
v7.disposeFramebufferObjects();
v9.dispose();
(v11.isReady) = true;
}
}));
return v7;
});
v0(/([m|l])ouse$/i, "$1ice");
(v0.prototype.updateCellIndexWithSpeedCalculated) = (function (v1){
var v2 = (((this.lifeTime) - (this.age)) / (v1)) / (((this.particleSystem.endSpriteCellID) + (1)) - (this.cellIndex));
(this._currentFrameCounter) += v1;
if((this._currentFrameCounter) >= ((v2) * (v1))){
(this._currentFrameCounter) = 0;
this.cellIndex++;
if((this.cellIndex) > (this.particleSystem.endSpriteCellID)){
(this.cellIndex) = this.particleSystem.endSpriteCellID;
}
}
});
var v1 = (function (v1){
var v2 = Array.prototype.slice.call(v1, 0);
v2.reverse();
return v2;
});
(v1.prototype.configure) = (function (){
});
var v2 = (function (v1, v2, v3){
for(var v4 in v1){
if(v1.call(v1, v4)){
v2.call(v3, v1[v4], v4, v1);
}
}
});
var v3 = (function (v1, v2, v3){
(v1.exports) = v3(1998)();
});
