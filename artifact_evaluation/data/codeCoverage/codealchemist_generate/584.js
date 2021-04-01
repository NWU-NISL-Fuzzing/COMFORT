var v0 = (function (){
function v0(v1, v2){
var v3 = this;
if((v2) === (void 0)){
(v2) = v4.Engine.TEXTURETYPE_FLOAT;
}
(this._viewMatrix) = v4.Matrix.Zero();
(this._projectionMatrix) = v4.Matrix.Zero();
(this._transformMatrix) = v4.Matrix.Zero();
(this._worldViewProjection) = v4.Matrix.Zero();
(this._scene) = v1;
var v5 = v1.getEngine();
(this._depthMap) = new v4.RenderTargetTexture("depthMap", ({width : v5.getRenderWidth(), height : v5.getRenderHeight()}), this._scene, false, true, v2);
(this._depthMap.wrapU) = v4.Texture.CLAMP_ADDRESSMODE;
(this._depthMap.wrapV) = v4.Texture.CLAMP_ADDRESSMODE;
(this._depthMap.refreshRate) = 1;
(this._depthMap.renderParticles) = false;
(this._depthMap.renderList) = null;
this._depthMap.onClearObservable.add((function (v5){
v5.clear(new v4.Color4(1.0, 1.0, 1.0, 1.0), true, true, true);
}));
var v6 = (function (v7){
var v8 = v7.getRenderingMesh();
var v1 = v3._scene;
var v5 = v1.getEngine();
v5.setState(v7.getMaterial().backFaceCulling);
var v9 = v8._getInstancesRenderList(v7._id);
if(v9.mustReturn){
return;
}
var v10 = ((v5.getCaps().instancedArrays) !== (null)) && ((v9.visibleInstances[v7._id]) !== (null));
if(v3.isReady(v7, v10)){
v5.enableEffect(v3._effect);
v8._bind(v7, v3._effect, v4.Material.TriangleFillMode);
var v11 = v7.getMaterial();
v3._effect.setMatrix("viewProjection", v1.getTransformMatrix());
v3._effect.setFloat("far", v1.activeCamera.maxZ);
if((v11) && (v11.needAlphaTesting())){
var v12 = v11.getAlphaTestTexture();
v3._effect.setTexture("diffuseSampler", v12);
v3._effect.setMatrix("diffuseMatrix", v12.getTextureMatrix());
}
if((v8.useBones) && (v8.computeBonesUsingShaders)){
v3._effect.setMatrices("mBones", v8.skeleton.getTransformMatrices(v8));
}
v8._processRendering(v7, v3._effect, v4.Material.TriangleFillMode, v9, v10, (function (v13, v14){
return v3._effect.setMatrix("world", v14);
}));
}
});
(this._depthMap.customRenderFunction) = (function (v15, v16){
var v17;
for((v17) = 0;(v17) < (v15.length);v17++){
v6(v15.data[v17]);
}
for((v17) = 0;(v17) < (v16.length);v17++){
v6(v16.data[v17]);
}
});
}
(v0.prototype.isReady) = (function (v7, v18){
var v11 = v7.getMaterial();
if(v11.disableDepthWrite){
return false;
}
var v19 = [];
var v20 = [];
var v8 = v7.getMesh();
var v1 = v8.getScene();
if((v11) && (v11.needAlphaTesting())){
v19.push("#define ALPHATEST");
if(v8.isVerticesDataPresent(v4.VertexBuffer.UVKind)){
v20.push(v4.VertexBuffer.UVKind);
v19.push("#define UV1");
}
if(v8.isVerticesDataPresent(v4.VertexBuffer.UV2Kind)){
v20.push(v4.VertexBuffer.UV2Kind);
v19.push("#define UV2");
}
}
if((v8.useBones) && (v8.computeBonesUsingShaders)){
v20.push(v4.VertexBuffer.MatricesIndicesKind);
v20.push(v4.VertexBuffer.MatricesWeightsKind);
if((v8.numBoneInfluencers) > (4)){
v20.push(v4.VertexBuffer.MatricesIndicesExtraKind);
v20.push(v4.VertexBuffer.MatricesWeightsExtraKind);
}
v19.push(("#define NUM_BONE_INFLUENCERS ") + (v8.numBoneInfluencers));
v19.push(("#define BonesPerMesh ") + ((v8.skeleton.bones.length) + (1)));
}else {
v19.push("#define NUM_BONE_INFLUENCERS 0");
}
if(v18){
v19.push("#define INSTANCES");
v20.push("world0");
v20.push("world1");
v20.push("world2");
v20.push("world3");
}
var v21 = v19.join("\n");
if((this._cachedDefines) !== (v21)){
(this._cachedDefines) = v21;
(this._effect) = this._scene.getEngine().createEffect("depth", v20, [], [], v21);
}
return this._effect.isReady();
});
(v0.prototype.getDepthMap) = (function (){
return this._depthMap;
});
(v0.prototype.dispose) = (function (){
this._depthMap.dispose();
});
return v0;
})();
var v1 = (function (){
return Math.atan2(this.shape.velocity.y, this.shape.velocity.x);
});
(v0.SEGMENT_Y) = "segmentY";
var v2 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("84952cb992ed567d514ec6c4c056c1d9.svg");
});
var v3 = Array.prototype.map.call(v2, v1);
Object.defineProperty(v3, "prop", ({get : v2, set : v0, enumerable : true, configurable : false}));
// GenBlkBrick
for(var v0 in []){
(v2.prototype._onToolbarDestroyed) = (function (v1, v2){
if((this.toolbar) == (v2)){
this.removeTool();
}
});
// GenBlkBrick
for((v4) = 0;(v4) < (65536);v4++){
// GenBlkBrick
while(v0){
var v5 = (function (v1, v2, v3){
var v4 = v3(1237);
(v1.exports) = (function (v1, v2){
return new v4(v1)(v2);
});
});
}
if((v4) < (20)){
break ;
}
}
}
(v1[v3[v4]]) = (v1[v3[v4].substring(0, 3)]) = v5(v4);
