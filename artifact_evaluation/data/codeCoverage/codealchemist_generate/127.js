// GenBlkBrick
for(var v0 = v1;(v0) <= (v2);v0++){
// GenBlkBrick
for(var v0 = 0;(v0) < (20);v0++){
if((v0) < (20)){
break ;
}
}
var v1 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Compute/locations/eastus/operations/705ba60a-a831-493d-a389-69a2e9c07296?api-version=2015-05-01-preview').reply(200, "{\r\n  \"operationId\": \"705ba60a-a831-493d-a389-69a2e9c07296\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2015-04-27T14:48:10.0435125+00:00\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '141', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-request-id' : '73a3ab38-a1be-43f4-8929-6eb4672ca2bf', server : 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '31963', 'x-ms-correlation-request-id' : '623cc8b7-3618-4648-bc2b-6ebd9993ac14', 'x-ms-routing-request-id' : 'EASTASIA:20150427T144947Z:623cc8b7-3618-4648-bc2b-6ebd9993ac14', date : 'Mon, 27 Apr 2015 14:49:46 GMT', connection : 'close'}));
return v2;
});
}
var v2 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v1, v0);
});
Object.defineProperty(Object.prototype, "constructor", ({get : v2, set : v1, configurable : true}));
var v3 = (function (v1, v2, v3){
"use strict";
var v4 = v3(67), v5 = v3(1860), v6 = v3(24);
(v1.exports) = ({create : v6((function (v1){
return v4.verify(({name : "Vault Manager", client : v1.client})).then((function (){
return new v5(v1);
}));
})), VERSION : "3.28.0"});
});
(v1.prototype) = Object.create(v2.prototype);
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
v2.meshes.push(v3(v14, v2));
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
(v3.prototype.bind) = (function (v1, v2, v3){
v1.call(this, v2, v3);
var v4 = [];
this.$selection.on(v4.join(' '), (function (v5){
v5.stopPropagation();
}));
});
// GenBlkBrick
for(var v4 = 6;(v4) < (10);v4++){
var v5 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v2, v4);
});
}
