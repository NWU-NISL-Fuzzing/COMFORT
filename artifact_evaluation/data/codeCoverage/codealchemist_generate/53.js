var v0 = (function (){
(this.transactionWrappers) = this.getTransactionWrappers();
if(! this.wrapperInitData){
(this.wrapperInitData) = [];
}else {
(this.wrapperInitData.length) = 0;
}
(this._isInTransaction) = false;
});
// GenBlkBrick
for(var v1 = 1;(v1) < ((v1) - (1));v1++){
var v2 = (function (){
this.clearShowTimer();
this.onCancelTrigger();
});
(v2.prototype.dispose) = (function (){
});
}
Array.prototype.reduce.call(v2, v0, v1);
var v3 = ((v1) / (v1)) << (0);
if(((v3) & (3)) == (0)){
(v3) >>= 2;
(v1) += 2;
}
(v0.prototype.render) = (function (v1, v2, v3, v4){
if(v1){
v1(this._opaqueSubMeshes, this._alphaTestSubMeshes, this._transparentSubMeshes, this._depthOnlySubMeshes);
return;
}
var v5 = this._scene.getEngine();
if((this._depthOnlySubMeshes.length) !== (0)){
v5.setAlphaTesting(true);
v5.setColorWrite(false);
this._renderAlphaTest(this._depthOnlySubMeshes);
v5.setAlphaTesting(false);
v5.setColorWrite(true);
}
if((this._opaqueSubMeshes.length) !== (0)){
this._renderOpaque(this._opaqueSubMeshes);
}
if((this._alphaTestSubMeshes.length) !== (0)){
v5.setAlphaTesting(true);
this._renderAlphaTest(this._alphaTestSubMeshes);
v5.setAlphaTesting(false);
}
var v6 = v5.getStencilBuffer();
v5.setStencilBuffer(false);
if(v2){
this._renderSprites();
}
if(v3){
this._renderParticles(v4);
}
if(this.onBeforeTransparentRendering){
this.onBeforeTransparentRendering();
}
if((this._transparentSubMeshes.length) !== (0)){
this._renderTransparent(this._transparentSubMeshes);
v5.setAlphaMode(v7.Engine.ALPHA_DISABLE);
}
v5.setStencilBuffer(false);
for(var v8 = 0;(v8) < (this._edgesRenderers.length);v8++){
this._edgesRenderers.data[v8].render();
}
v5.setStencilBuffer(v6);
});
var v4 = (function v4(v1){
if((! v1) || ((v2.call(v1)) !== ('[object Object]'))){
return false;
}
var v3 = v0.call(v1, 'constructor');
var v5 = ((v1.constructor) && (v1.constructor.prototype)) && (v0.call(v1.constructor.prototype, 'isPrototypeOf'));
if(((v1.constructor) && (! v3)) && (! v5)){
return false;
}
var v6;
for(v6 in v1){
}
return ((typeof v6) === ('undefined')) || (v0.call(v1, v6));
});
(v5) = v4(v2, v3, v1);
