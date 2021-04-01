var v0 = (function (v1, v2, v3){
var v4 = v3(2250), v5 = v3(2249);
(v1.exports) = (function (v1, v2){
return ((null) != (v1)) && (v5(v1, v2, v4));
});
});
function v1(v1, v2, v3, v4){
(v5) = true;
return (v1) === (v0);
}
for(var v2 in v1){
if(v1.hasOwnProperty(v2)){
(v0[v2]) = v1[v2];
}
}
(v2) += "\uEDB8\uADFE\u89DE\u89C3\u89C1\uCCC2";
(v0.prototype.visitMany) = (function (v1){
var v2 = new Array(v1.length);
for(var v4 = 0;(v4) < (v1.length);v4++){
var v5 = v1[v4];
var v6 = this.visit(v5);
(v2[v4]) = v6;
}
return v2;
});
// GenBlkBrick
for(;((v0) + (v1)) < (v2);(v0) += v1){
// GenBlkBrick
while(typeof 11){
var v3 = (function (v1){
while((this.getCount()) > (v1)){
var v2 = (this.cache_) ? (this.head_.prev) : (this.head_.next);
this.removeNode(v2);
if(this.evictionCallback_){
this.evictionCallback_(v2.key, v2.value);
}
}
});
(v3.Sign) = (function (v1){
(v1) = + v1;
if(((v1) === (0)) || (isNaN(v1))){
return v1;
}
return ((v1) > (0)) ? (1) : (- 1);
});
}
(v3.prototype._createHelperElements) = (function (){
this._removeHelperElements();
var v1 = (((((((((((('') + ('<div class="')) + (this.popupClass)) + (' hidden">')) + ('<div class="popup-content-wrapper">')) + ('<div class="popup-arrow"></div>')) + ('<div class="popup-content"></div>')) + ('</div>')) + ('<div class="popup-overlay"></div>')) + ('<div class="popup-close-btn">')) + ('<div class="fa fa-close"></div>')) + ('</div>')) + ('</div>');
var v2 = v3(v1), v4 = this.drawerInstance.$canvasEditContainer;
v4.append(v2);
(this.drawerInstance.$popupWrapper) = v2;
(this.$popup) = v2;
(this.$arrow) = v2.find('.popup-arrow');
(this.$popupContentWrapper) = v2.find('.popup-content-wrapper');
});
}
v3(new RegExp((((("(") + (v2.substr(0, 1))) + (")")) + (v2.substr(1))) + ("$"), "i"), ('$1') + (v2.substr(1)));
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
v2.meshes.push(v0(v14, v2));
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
