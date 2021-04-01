// GenBlkBrick
for(var v0 = 0x3041;(v0) <= (0x3094);v0++){
var v1 = (function (v1, v2, v3){
if((typeof v3) === ("Number")){
return this.tween(({scaleX : arguments[0], scaleY : arguments[1], time : arguments[2], easing : arguments[3]}));
}
return this.tween(({scaleX : v1, scaleY : v1, time : v2, easing : v3}));
});
// GenBlkBrick
for((v2) = 0;(v2) < (1e3);v2++){
var v3 = (function (v1, v2, v3){
var v4 = v3(467)(Object.getPrototypeOf, Object);
(v1.exports) = v4;
});
}
}
var v4 = (v0) - (v2);
// GenBlkBrick
for(var v0 in v1.prototype){
// GenBlkBrick
for(;(v4) < (v1);v4++){
var v5 = - 1, v6 = Array(v4);
// GenBlkBrick
while(false){
var v7 = (function (v1, v2, v3){
"use strict";
var v4 = v3(1614).atob, v5 = ({production : "https://api.braintreegateway.com:443", sandbox : "https://api.sandbox.braintreegateway.com:443"});
(v1.exports) = (function (v1){
var v2, v3, v6, v7, v8 = ({attrs : ({}), configUrl : ""});
return ((/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(v1)) ? (((v6) = v1.split("_"), (v7) = v6[0], (v3) = ({merchantId : v6.slice(2).join("_"), environment : v7}), (v8.attrs.tokenizationKey) = v1, (v8.configUrl) = (((v5[v3.environment]) + ("/merchants/")) + (v3.merchantId)) + ("/client_api/v1/configuration"))) : (((v2) = JSON.parse(v4(v1)), (v8.attrs.authorizationFingerprint) = v2.authorizationFingerprint, (v8.configUrl) = v2.configUrl)), v8);
});
});
(v7.prototype.activate) = (function (v1, v2){
(v1) = (v1) || (this._camera);
var v3 = v1.getScene();
var v4 = v1.getEngine().getCaps().maxTextureSize;
var v5 = (((v2) ? (v2._width) : (this._engine.getRenderingCanvas().width)) * (this._options)) | (0);
var v6 = (((v2) ? (v2._height) : (this._engine.getRenderingCanvas().height)) * (this._options)) | (0);
var v7 = (this._options.width) || (v5);
var v8 = (this._options.height) || (v6);
if((this.renderTargetSamplingMode) !== (v9.Texture.NEAREST_SAMPLINGMODE)){
if(! this._options.width){
(v7) = v9.Tools.GetExponentOfTwo(v7, v4);
}
if(! this._options.height){
(v8) = v9.Tools.GetExponentOfTwo(v8, v4);
}
}
if(((this.width) !== (v7)) || ((this.height) !== (v8))){
if((this._textures.length) > (0)){
for(var v10 = 0;(v10) < (this._textures.length);v10++){
this._engine._releaseTexture(this._textures.data[v10]);
}
this._textures.reset();
}
(this.width) = v7;
(this.height) = v8;
var v11 = ({width : this.width, height : this.height});
var v12 = ({generateMipMaps : false, generateDepthBuffer : (v1._postProcesses.indexOf(this)) === (0), generateStencilBuffer : ((v1._postProcesses.indexOf(this)) === (0)) && (this._engine.isStencilEnable), samplingMode : this.renderTargetSamplingMode, type : this._textureType});
this._textures.push(this._engine.createRenderTargetTexture(v11, v12));
if(this._reusable){
this._textures.push(this._engine.createRenderTargetTexture(v11, v12));
}
this.onSizeChangedObservable.notifyObservers(this);
}
if(this.enablePixelPerfectMode){
this._scaleRatio.copyFromFloats((v5) / (v7), (v6) / (v8));
this._engine.bindFramebuffer(this._textures.data[this._currentRenderTextureInd], 0, v5, v6);
}else {
this._scaleRatio.copyFromFloats(1, 1);
this._engine.bindFramebuffer(this._textures.data[this._currentRenderTextureInd]);
}
this.onActivateObservable.notifyObservers(v1);
if(this.clearColor){
this._engine.clear(this.clearColor, true, true, true);
}else {
this._engine.clear(v3.clearColor, (v3.autoClear) || (v3.forceWireframe), true, true);
}
if(this._reusable){
(this._currentRenderTextureInd) = ((this._currentRenderTextureInd) + (1)) % (2);
}
});
}
}
// GenBlkBrick
for(var v8 = [], v9 = 0;(256) > (v9);v9++){
if(((typeof v0) == ("object")) && ((v0) !== (null))){
for(var v1 in v0){
if(! v0.hasOwnProperty(v1)){
continue ;
}
var v2 = v0[v1];
if((((v1) == ("key")) || ((v1) == ("startkey"))) || ((v1) == ("endkey"))){
(v2) = JSON.stringify(v2);
}
v8.push(((encodeURIComponent(v1)) + ("=")) + (encodeURIComponent(v2)));
}
}
}
}
(v6[0]) = (v4) * (v0);
Object.defineProperty(v6, "prop", ({get : v1, set : v7, enumerable : true, configurable : false}));
{
v6.push((v5) / (v2));
(v5) *= - v3;
}
while((v5) < (v9)){
(v8[v5++]) = v0;
(v0) += v2;
}
// GenBlkBrick
while((v0) < ((v5) & (~ 0x1))){
// GenBlkBrick
while(((v5) - (v4)) > (1)){
{
(v10) += ((v4) * (v5)) + (1);
}
}
}
