var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("8c24e60ab57e69fde61f65e763f12ef1.svg");
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
(v0.prototype.eval) = (function (){
return this;
});
var v1 = (function (v1, v2, v3){
var v4 = v3(5207), v5 = v3(5202);
(v1.exports) = (function (v1, v2){
var v3 = v5(v1, v2);
return (v4(v3)) ? (v3) : (void 0);
});
});
for(var v0 in v1){
v1[v0].setColliderFilter(v2);
}
(v0.prototype.visitCall) = (function (v1){
return v1.update(this.visit(v1.obj), this.visitMany(v1.args));
});
(v0.prototype) = v1.prototype;
(v1.toString) = (function v1(){
return v0.toString();
});
