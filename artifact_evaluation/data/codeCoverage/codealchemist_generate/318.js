var v0 = (function (v1, v2, v3){
var v4 = v3(29), v5 = v3(79), v6 = v3(17), v7 = v3(16), v8 = v3(158);
(v1.exports) = (function (v1, v2){
var v3 = (1) == (v1), v9 = (2) == (v1), v10 = (3) == (v1), v11 = (4) == (v1), v12 = (6) == (v1), v13 = ((5) == (v1)) || (v12), v14 = (v2) || (v8);
return (function (v2, v8, v15){
for(var v16, v17, v18 = v6(v2), v19 = v5(v18), v20 = v4(v8, v15, 3), v21 = v7(v19.length), v22 = 0, v23 = (v3) ? (v14(v2, v21)) : ((v9) ? (v14(v2, 0)) : (void 0));(v21) > (v22);v22++){
if(((v13) || ((v22) in (v19))) && (((v17) = v20((v16) = v19[v22], v22, v18), v1))){
if(v3){
(v23[v22]) = v17;
}else {
if(v17){
switch(v1){
}
}else {
if(v11){
return ! 1;
}
}
}
}
}
return (v12) ? (- 1) : (((v10) || (v11)) ? (v11) : (v23));
});
});
});
(v0.SLOT) = "slot";
(v0.TRANSFORM) = "transform";
(v0[3]) = 3;
var v1 = (function (){
if((this.getRoot()) != (null)){
return [];
}else {
return [];
}
});
var v2 = (function (v1){
var v2 = v1('https://xplattestadls1277.azuredatalakestore.net:443').put('/webhdfs/v1/%2F?aclspec=user%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3A-w-&op=MODIFYACLENTRIES&api-version=2016-11-01').reply(200, "", ({'cache-control' : 'no-cache, no-cache, no-store, max-age=0', pragma : 'no-cache', expires : '-1', 'x-ms-request-id' : '48d7dd9d-dbd8-4ae1-aa35-4788e245fe67', contentlength : '0', 'x-ms-webhdfs-version' : '16.12.19.00', status : '0x0', 'x-content-type-options' : 'nosniff', 'strict-transport-security' : 'max-age=15724800; includeSubDomains', date : 'Thu, 23 Mar 2017 20:56:40 GMT', connection : 'close', 'content-length' : '0'}));
return v2;
});
var v3 = (function (){
function v3(){
}
(v3.ClearCache) = (function (){
(v1) = [];
});
(v3.Serialize) = (function (v2){
var v3 = ({});
(v3.useDelayedTextureLoading) = v2.useDelayedTextureLoading;
(v3.autoClear) = v2.autoClear;
(v3.clearColor) = v2.clearColor.asArray();
(v3.ambientColor) = v2.ambientColor.asArray();
(v3.gravity) = v2.gravity.asArray();
(v3.collisionsEnabled) = v2.collisionsEnabled;
(v3.workerCollisions) = v2.workerCollisions;
if((v2.fogMode) && ((v2.fogMode) !== (0))){
(v3.fogMode) = v2.fogMode;
(v3.fogColor) = v2.fogColor.asArray();
(v3.fogStart) = v2.fogStart;
(v3.fogEnd) = v2.fogEnd;
(v3.fogDensity) = v2.fogDensity;
}
if(v2.isPhysicsEnabled()){
(v3.physicsEnabled) = true;
(v3.physicsGravity) = v2.getPhysicsEngine().gravity.asArray();
(v3.physicsEngine) = v2.getPhysicsEngine().getPhysicsPluginName();
}
if(v2.metadata){
(v3.metadata) = v2.metadata;
}
(v3.lights) = [];
var v4;
var v5;
for((v4) = 0;(v4) < (v2.lights.length);v4++){
(v5) = v2.lights[v4];
if(! v5.doNotSerialize){
v3.lights.push(v5.serialize());
}
}
(v3.cameras) = [];
for((v4) = 0;(v4) < (v2.cameras.length);v4++){
var v6 = v2.cameras[v4];
if(! v6.doNotSerialize){
v3.cameras.push(v6.serialize());
}
}
if(v2.activeCamera){
(v3.activeCameraID) = v2.activeCamera.id;
}
v7.Animation.AppendSerializedAnimations(v2, v3);
(v3.materials) = [];
(v3.multiMaterials) = [];
var v8;
for((v4) = 0;(v4) < (v2.materials.length);v4++){
(v8) = v2.materials[v4];
if(! v8.doNotSerialize){
v3.materials.push(v8.serialize());
}
}
(v3.multiMaterials) = [];
for((v4) = 0;(v4) < (v2.multiMaterials.length);v4++){
var v9 = v2.multiMaterials[v4];
v3.multiMaterials.push(v9.serialize());
}
(v3.skeletons) = [];
for((v4) = 0;(v4) < (v2.skeletons.length);v4++){
v3.skeletons.push(v2.skeletons[v4].serialize());
}
(v3.geometries) = ({});
(v3.geometries.boxes) = [];
(v3.geometries.spheres) = [];
(v3.geometries.cylinders) = [];
(v3.geometries.toruses) = [];
(v3.geometries.grounds) = [];
(v3.geometries.planes) = [];
(v3.geometries.torusKnots) = [];
(v3.geometries.vertexData) = [];
(v1) = [];
var v10 = v2.getGeometries();
for((v4) = 0;(v4) < (v10.length);v4++){
var v11 = v10[v4];
if(v11.isReady()){
v2(v11, v3.geometries);
}
}
(v3.meshes) = [];
for((v4) = 0;(v4) < (v2.meshes.length);v4++){
var v13 = v2.meshes[v4];
if((v13) instanceof (v7.Mesh)){
var v14 = v13;
if(! v14.doNotSerialize){
if(((v14.delayLoadState) === (v7.Engine.DELAYLOADSTATE_LOADED)) || ((v14.delayLoadState) === (v7.Engine.DELAYLOADSTATE_NONE))){
v3.meshes.push(v0(v14, v3));
}
}
}
}
(v3.particleSystems) = [];
for((v4) = 0;(v4) < (v2.particleSystems.length);v4++){
v3.particleSystems.push(v2.particleSystems[v4].serialize());
}
(v3.lensFlareSystems) = [];
for((v4) = 0;(v4) < (v2.lensFlareSystems.length);v4++){
v3.lensFlareSystems.push(v2.lensFlareSystems[v4].serialize());
}
(v3.shadowGenerators) = [];
for((v4) = 0;(v4) < (v2.lights.length);v4++){
(v5) = v2.lights[v4];
var v16 = v5.getShadowGenerator();
if((v16) && ((v16) instanceof (v7.ShadowGenerator))){
v3.shadowGenerators.push(v16.serialize());
}
}
if(v2.actionManager){
(v3.actions) = v2.actionManager.serialize("scene");
}
(v3.sounds) = [];
for((v4) = 0;(v4) < (v2.soundTracks.length);v4++){
var v17 = v2.soundTracks[v4];
for(var v18 = 0;(v18) < (v17.soundCollection.length);v18++){
v3.sounds.push(v17.soundCollection[v18].serialize());
}
}
return v3;
});
(v3.SerializeMesh) = (function (v19, v20, v21){
if((v20) === (void 0)){
(v20) = false;
}
if((v21) === (void 0)){
(v21) = false;
}
var v3 = ({});
(v19) = ((v19) instanceof (Array)) ? (v19) : ([]);
if((v20) || (v21)){
for(var v23 = 0;(v23) < (v19.length);++v23){
if(v21){
v19[v23].getDescendants().forEach((function (v24){
if(((v24) instanceof (v7.Mesh)) && ((v19.indexOf(v24)) < (0))){
v19.push(v24);
}
}));
}
if(((v20) && (v19[v23].parent)) && ((v19.indexOf(v19[v23].parent)) < (0))){
v19.push(v19[v23].parent);
}
}
}
v19.forEach((function (v14){
v1(v14, v3);
}));
return v3;
});
return v3;
})();
(v1.prototype.getRightJoystick) = (function (){
return this._rightjoystick;
});
