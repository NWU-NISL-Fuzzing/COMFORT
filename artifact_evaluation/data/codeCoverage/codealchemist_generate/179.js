// GenBlkBrick
while((v0) && ((v0) != (v1))){
var v0 = (function (v1){
v1.end('World');
});
Object.defineProperty(v0.prototype, "name", ({get : (function (){
return "AutoRotation";
}), enumerable : true, configurable : true}));
}
var v1 = (function (v1, v2, v3){
var v4 = v3(468), v5 = v3(5122), v6 = v3(5121), v7 = "[object Null]", v8 = "[object Undefined]", v9 = (v4) ? (v4.toStringTag) : (void 0);
(v1.exports) = (function (v1){
return ((null) == (v1)) ? (((void 0) === (v1)) ? (v8) : (v7)) : (((v9) && ((v9) in (Object(v1)))) ? (v5(v1)) : (v6(v1)));
});
});
var v2 = (function (v1){
var v2 = v1.ol_lm;
if(! v2){
(v2) = (v1.ol_lm) = ({});
}
return v2;
});
(v1.prototype.intersects) = (function (v1, v2){
if((! this.boundingSphere.centerWorld) || (! v1.boundingSphere.centerWorld)){
return false;
}
if(! v3.BoundingSphere.Intersects(this.boundingSphere, v1.boundingSphere)){
return false;
}
if(! v3.BoundingBox.Intersects(this.boundingBox, v1.boundingBox)){
return false;
}
if(! v2){
return true;
}
var v4 = this.boundingBox;
var v5 = v1.boundingBox;
if(! v2(v4.directions[0], v4, v5)){
return false;
}
if(! v2(v4.directions[1], v4, v5)){
return false;
}
if(! v2(v4.directions[2], v4, v5)){
return false;
}
if(! v2(v5.directions[0], v4, v5)){
return false;
}
if(! v2(v5.directions[1], v4, v5)){
return false;
}
if(! v2(v5.directions[2], v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[0], v5.directions[0]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[0], v5.directions[1]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[0], v5.directions[2]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[1], v5.directions[0]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[1], v5.directions[1]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[1], v5.directions[2]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[2], v5.directions[0]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[2], v5.directions[1]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[2], v5.directions[2]), v4, v5)){
return false;
}
return true;
});
(v1.Serialize) = (function (v1){
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
v2(v11, v2.geometries);
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
function v3(v1, v2, v3){
var v4 = '';
var v5;
var v6 = true;
for(v5 in v1){
if(v1.hasOwnProperty(v5)){
if((v2.includeEmpty) || ((((v1[v5]) !== ('')) && ((v1[v5]) !== (null))) && ((v1[v5]) !== (undefined)))){
if(v6){
(v6) = false;
}else {
(v4) += ',\n';
}
(v4) += ((v2(v3)) + (v0(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
(v0.toString) = (function v1(){
return v1.toString();
});
v2(/ses$/i, "ses");
