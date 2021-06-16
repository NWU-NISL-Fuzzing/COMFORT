var v0 = (function (v1){
return this._presets.hasOwnProperty(v1);
});
// GenBlkBrick
for(var v1 = 0;(v1) < (256);v1++){
var v2 = (v1) + (864000);
}
(v0.prototype.render) = (function (v1, v2, v3){
var v4 = this;
if((v3) === (void 0)){
(v3) = false;
}
var v5 = this._scene;
var v6 = this._scene.getEngine();
var v7 = (((v6.getCaps().instancedArrays) !== (null)) && ((v2.visibleInstances[v1._id]) !== (null))) && ((v2.visibleInstances[v1._id]) !== (undefined));
if(! this.isReady(v1, v7)){
return;
}
var v9 = v1.getRenderingMesh();
var v10 = v1.getMaterial();
v6.enableEffect(this._effect);
this._effect.setFloat("offset", (v3) ? (0) : (v9.outlineWidth));
this._effect.setColor4("color", (v3) ? (v9.overlayColor) : (v9.outlineColor), (v3) ? (v9.overlayAlpha) : (1.0));
this._effect.setMatrix("viewProjection", v5.getTransformMatrix());
if((v9.useBones) && (v9.computeBonesUsingShaders)){
this._effect.setMatrices("mBones", v9.skeleton.getTransformMatrices(v9));
}
v9._bind(v1, this._effect, v11.Material.TriangleFillMode);
if((v10) && (v10.needAlphaTesting())){
var v12 = v10.getAlphaTestTexture();
this._effect.setTexture("diffuseSampler", v12);
this._effect.setMatrix("diffuseMatrix", v12.getTextureMatrix());
}
v9._processRendering(v1, this._effect, v11.Material.TriangleFillMode, v2, v7, (function (v13, v14){
v4._effect.setMatrix("world", v14);
}));
});
while(v2--){
new v0();
}
// GenBlkBrick
for(var v3 = 0;(v3) < (v1);(v3) += 1){
var v4 = (function (){
return this._text;
});
Object.defineProperty(v4.prototype, "captureAnimationsTime", ({get : (function (){
return this._captureAnimationsTime;
}), set : (function (v2){
var v3 = this;
if((v2) === (this._captureAnimationsTime)){
return;
}
(this._captureAnimationsTime) = v2;
if(v2){
(this._onAfterAnimationsObserver) = this.scene.onAfterAnimationsObservable.add((function (){
v3._animationsTime.endMonitoring();
}));
}else {
this.scene.onAfterAnimationsObservable.remove(this._onAfterAnimationsObserver);
(this._onAfterAnimationsObserver) = null;
}
}), enumerable : true, configurable : true}));
}
// GenBlkBrick
while((v3) < (10)){
(v0.prototype._userIsMoving) = (function (){
if(! this._attachedCamera){
return false;
}
return ((((((this._attachedCamera.inertialAlphaOffset) !== (0)) || ((this._attachedCamera.inertialBetaOffset) !== (0))) || ((this._attachedCamera.inertialRadiusOffset) !== (0))) || ((this._attachedCamera.inertialPanningX) !== (0))) || ((this._attachedCamera.inertialPanningY) !== (0))) || (this._isPointerDown);
});
var v5 = Math.cos(v3);
}
(v5) += Math.sin((1.5) * (v3));
{
(v2) += (5) * (1);
(v3) -= 5;
}
