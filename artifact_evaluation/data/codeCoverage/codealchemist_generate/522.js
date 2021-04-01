var v0 = (function (v1, v2, v3, v4, v5){
return ((v4) * (((((((v2) = ((v2) / (v5)) - (1)) * (v2)) * (v2)) * (v2)) * (v2)) + (1))) + (v3);
});
(v0.DEFAULT_ACTIONS) = "defaultActions";
(v0.prototype._on_error) = (function (v1){
return (function (v2, v3, v4){
v5.log_ajax_error(v2, v3, v4);
if(v1){
v1(v2, v3, v4);
}
});
});
(v0.prototype._executeCurrent) = (function (v1){
if(this._nextActiveAction._condition){
var v2 = this._nextActiveAction._condition;
var v3 = this._actionManager.getScene().getRenderId();
if((v2._evaluationId) === (v3)){
if(! v2._currentResult){
return;
}
}else {
(v2._evaluationId) = v3;
if(! v2.isValid()){
(v2._currentResult) = false;
return;
}
(v2._currentResult) = true;
}
}
this.onBeforeExecuteObservable.notifyObservers(this);
this._nextActiveAction.execute(v1);
this.skipToNextActiveAction();
});
try{
}catch(v0){
}
(v0.prototype.isReady) = (function (v1, v2){
var v3 = [];
if(this._useFullFloat){
v3.push("#define FULLFLOAT");
}
if((this.useVarianceShadowMap) || (this.useBlurVarianceShadowMap)){
v3.push("#define VSM");
}
if(this.getLight().needCube()){
v3.push("#define CUBEMAP");
}
var v4 = [];
var v5 = v1.getMesh();
var v6 = v1.getMaterial();
if((v6) && (v6.needAlphaTesting())){
v3.push("#define ALPHATEST");
if(v5.isVerticesDataPresent(v7.VertexBuffer.UVKind)){
v4.push(v7.VertexBuffer.UVKind);
v3.push("#define UV1");
}
if(v5.isVerticesDataPresent(v7.VertexBuffer.UV2Kind)){
var v8 = v6.getAlphaTestTexture();
if((v8.coordinatesIndex) === (1)){
v4.push(v7.VertexBuffer.UV2Kind);
v3.push("#define UV2");
}
}
}
if((v5.useBones) && (v5.computeBonesUsingShaders)){
v4.push(v7.VertexBuffer.MatricesIndicesKind);
v4.push(v7.VertexBuffer.MatricesWeightsKind);
if((v5.numBoneInfluencers) > (4)){
v4.push(v7.VertexBuffer.MatricesIndicesExtraKind);
v4.push(v7.VertexBuffer.MatricesWeightsExtraKind);
}
v3.push(("#define NUM_BONE_INFLUENCERS ") + (v5.numBoneInfluencers));
v3.push(("#define BonesPerMesh ") + ((v5.skeleton.bones.length) + (1)));
}else {
v3.push("#define NUM_BONE_INFLUENCERS 0");
}
if(v2){
v3.push("#define INSTANCES");
v4.push("world0");
v4.push("world1");
v4.push("world2");
v4.push("world3");
}
var v9 = v3.join("\n");
if((this._cachedDefines) !== (v9)){
(this._cachedDefines) = v9;
(this._effect) = this._scene.getEngine().createEffect("shadowMap", v4, [], [], v9);
}
return this._effect.isReady();
});
// GenBlkBrick
for(var v1 = (v1) - (1);(v1) >= (0);v1--){
var v2 = (function (v1, v2){
(v1.exports) = (function (v1, v2){
return (function (v3){
return v1(v2(v3));
});
});
});
}
// GenBlkBrick
for(var v3 = 10;(v3) < (14);v3++){
if(v0){
(v3) |= 146;
}
var v4 = (function (v1, v2, v3){
var v4 = v3(702), v5 = v3(696), v6 = v3(695);
(v1.exports) = (function (v1){
return v4(v1, v6, v5);
});
});
}
