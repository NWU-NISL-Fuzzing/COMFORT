var v0 = (function (v1, v2, v3){
v3(109)("Float64", 8, (function (v1){
return (function (v2, v3, v4){
return v1(this, v2, v3, v4);
});
}));
});
v0(/(shoe)s$/i, "$1");
(v0._UV6Kind) = "uv6";
(v0.prototype.dispose) = (function (){
this.scene.onAfterRenderObservable.remove(this._onAfterRenderObserver);
(this._onAfterRenderObserver) = null;
this.scene.onBeforeActiveMeshesEvaluationObservable.remove(this._onBeforeActiveMeshesEvaluationObserver);
(this._onBeforeActiveMeshesEvaluationObserver) = null;
this.scene.onAfterActiveMeshesEvaluationObservable.remove(this._onAfterActiveMeshesEvaluationObserver);
(this._onAfterActiveMeshesEvaluationObserver) = null;
this.scene.OnBeforeRenderTargetsRenderObservable.remove(this._onBeforeRenderTargetsRenderObserver);
(this._onBeforeRenderTargetsRenderObserver) = null;
this.scene.OnAfterRenderTargetsRenderObservable.remove(this._onAfterRenderTargetsRenderObserver);
(this._onAfterRenderTargetsRenderObserver) = null;
this.scene.onBeforeAnimationsObservable.remove(this._onBeforeAnimationsObserver);
(this._onBeforeAnimationsObserver) = null;
this.scene.onBeforeParticlesRenderingObservable.remove(this._onBeforeParticlesRenderingObserver);
(this._onBeforeParticlesRenderingObserver) = null;
this.scene.onAfterParticlesRenderingObservable.remove(this._onAfterParticlesRenderingObserver);
(this._onAfterParticlesRenderingObserver) = null;
this.scene.onBeforeSpritesRenderingObservable.remove(this._onBeforeSpritesRenderingObserver);
(this._onBeforeSpritesRenderingObserver) = null;
this.scene.onAfterSpritesRenderingObservable.remove(this._onAfterSpritesRenderingObserver);
(this._onAfterSpritesRenderingObserver) = null;
this.scene.onBeforeDrawPhaseObservable.remove(this._onBeforeDrawPhaseObserver);
(this._onBeforeDrawPhaseObserver) = null;
this.scene.onAfterDrawPhaseObservable.remove(this._onAfterDrawPhaseObserver);
(this._onAfterDrawPhaseObserver) = null;
this.scene.onBeforePhysicsObservable.remove(this._onBeforePhysicsObserver);
(this._onBeforePhysicsObserver) = null;
this.scene.onAfterPhysicsObservable.remove(this._onAfterPhysicsObserver);
(this._onAfterPhysicsObserver) = null;
this.scene.onAfterAnimationsObservable.remove(this._onAfterAnimationsObserver);
(this._onAfterAnimationsObserver) = null;
(this.scene) = null;
});
var v1 = (function (){
var v1 = [];
if(this.model.get('title')){
v1.push(this._generateTitle(({title : this.model.get('title')})));
}
if(this.model.get('preHTMLSnippet')){
v1.push(this._sanitize(this.model.get('preHTMLSnippet')));
}
v1.push(this._sanitize(this._getCompiledTemplate()));
if(this.model.get('postHTMLSnippet')){
v1.push(this._sanitize(this.model.get('postHTMLSnippet')));
}
return v1.join('\n');
});
var v2 = (function (v1){
return v1.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
});
var v3 = (function (v1){
'use strict';
(v1.shake) = (function (v2, v3){
var v4 = [];
return v1._animate(v2, v4, v3);
});
});
(v3.Serialize) = (function (v1){
var v2 = ({});
(v2.useDelayedTextureLoading) = v1.useDelayedTextureLoading;
(v2.autoClear) = v1.autoClear;
(v2.clearColor) = v1.clearColor.asArray();
(v2.ambientColor) = v1.ambientColor.asArray();
(v2.gravity) = v1.gravity.asArray();
(v2.collisionsEnabled) = v1.collisionsEnabled;
(v2.workerCollisions) = v1.workerCollisions;
if((v1.fogMode) && ((v1.fogMode) !== (0))){
(v2.fogMode) = v1.fogMode;
(v2.fogColor) = v1.fogColor.asArray();
(v2.fogStart) = v1.fogStart;
(v2.fogEnd) = v1.fogEnd;
(v2.fogDensity) = v1.fogDensity;
}
if(v1.isPhysicsEnabled()){
(v2.physicsEnabled) = true;
(v2.physicsGravity) = v1.getPhysicsEngine().gravity.asArray();
(v2.physicsEngine) = v1.getPhysicsEngine().getPhysicsPluginName();
}
if(v1.metadata){
(v2.metadata) = v1.metadata;
}
(v2.lights) = [];
var v3;
var v4;
for((v3) = 0;(v3) < (v1.lights.length);v3++){
(v4) = v1.lights[v3];
if(! v4.doNotSerialize){
v2.lights.push(v4.serialize());
}
}
(v2.cameras) = [];
for((v3) = 0;(v3) < (v1.cameras.length);v3++){
var v5 = v1.cameras[v3];
if(! v5.doNotSerialize){
v2.cameras.push(v5.serialize());
}
}
if(v1.activeCamera){
(v2.activeCameraID) = v1.activeCamera.id;
}
v6.Animation.AppendSerializedAnimations(v1, v2);
(v2.materials) = [];
(v2.multiMaterials) = [];
var v7;
for((v3) = 0;(v3) < (v1.materials.length);v3++){
(v7) = v1.materials[v3];
if(! v7.doNotSerialize){
v2.materials.push(v7.serialize());
}
}
(v2.multiMaterials) = [];
for((v3) = 0;(v3) < (v1.multiMaterials.length);v3++){
var v8 = v1.multiMaterials[v3];
v2.multiMaterials.push(v8.serialize());
}
(v2.skeletons) = [];
for((v3) = 0;(v3) < (v1.skeletons.length);v3++){
v2.skeletons.push(v1.skeletons[v3].serialize());
}
(v2.geometries) = ({});
(v2.geometries.boxes) = [];
(v2.geometries.spheres) = [];
(v2.geometries.cylinders) = [];
(v2.geometries.toruses) = [];
(v2.geometries.grounds) = [];
(v2.geometries.planes) = [];
(v2.geometries.torusKnots) = [];
(v2.geometries.vertexData) = [];
(v9) = [];
var v10 = v1.getGeometries();
for((v3) = 0;(v3) < (v10.length);v3++){
var v11 = v10[v3];
if(v11.isReady()){
v1(v11, v2.geometries);
}
}
(v2.meshes) = [];
for((v3) = 0;(v3) < (v1.meshes.length);v3++){
var v13 = v1.meshes[v3];
if((v13) instanceof (v6.Mesh)){
var v14 = v13;
if(! v14.doNotSerialize){
if(((v14.delayLoadState) === (v6.Engine.DELAYLOADSTATE_LOADED)) || ((v14.delayLoadState) === (v6.Engine.DELAYLOADSTATE_NONE))){
v2.meshes.push(v2(v14, v2));
}
}
}
}
(v2.particleSystems) = [];
for((v3) = 0;(v3) < (v1.particleSystems.length);v3++){
v2.particleSystems.push(v1.particleSystems[v3].serialize());
}
(v2.lensFlareSystems) = [];
for((v3) = 0;(v3) < (v1.lensFlareSystems.length);v3++){
v2.lensFlareSystems.push(v1.lensFlareSystems[v3].serialize());
}
(v2.shadowGenerators) = [];
for((v3) = 0;(v3) < (v1.lights.length);v3++){
(v4) = v1.lights[v3];
var v16 = v4.getShadowGenerator();
if((v16) && ((v16) instanceof (v6.ShadowGenerator))){
v2.shadowGenerators.push(v16.serialize());
}
}
if(v1.actionManager){
(v2.actions) = v1.actionManager.serialize("scene");
}
(v2.sounds) = [];
for((v3) = 0;(v3) < (v1.soundTracks.length);v3++){
var v17 = v1.soundTracks[v3];
for(var v18 = 0;(v18) < (v17.soundCollection.length);v18++){
v2.sounds.push(v17.soundCollection[v18].serialize());
}
}
return v2;
});
