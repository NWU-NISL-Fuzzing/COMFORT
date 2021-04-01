var v0 = (function (v1){
(this.value) = v1;
(this.generation) = 2;
});
(v0.prototype._applyUserInteraction) = (function (){
if((this._userIsMoving()) && (! this._shouldAnimationStopForInteraction())){
(this._lastInteractionTime) = v1.Tools.Now;
}
});
var v1 = (function (v1){
this._setProperty('speak-punctuation', v1);
});
var v2 = (function (v1, v2){
var v3 = null;
var v4 = v2.querySelectorAll(v1);
for(var v5 = 0, v6 = v4.length;(v5) < (v6);v5++){
(v3) = v4[v5];
if(v3.parentNode){
v3.parentNode.removeChild(v3);
}
}
});
(v1.prototype.remove) = (function (v1){
if((v1) >= (this._root.size)){
return v2;
}
var v3 = v0(this._root, v1);
return this.removeNode(v3);
});
var v3 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/providers/Microsoft.Network/locations/westeurope/operations/ebee6e2c-dfa9-483f-b830-5a9ab3ad0bec?api-version=2017-10-01').reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '29', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-request-id' : '836e9ccc-3dcb-4663-adce-8cadb620a82d', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14994', 'x-ms-correlation-request-id' : 'ceb6b3a2-d1c6-4085-9a5b-483c3fb76ad6', 'x-ms-routing-request-id' : 'WESTEUROPE:20170728T121847Z:ceb6b3a2-d1c6-4085-9a5b-483c3fb76ad6', date : 'Fri, 28 Jul 2017 12:18:46 GMT', connection : 'close'}));
return v2;
});
// GenBlkBrick
for(var v0 in v2.prototype){
var v4 = (function (v1){
(this.data.damping) = v1;
});
var v5 = (function (v1){
var v2 = v1('http://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert7943/providers/Microsoft.Network/virtualNetworks/xplattestvnetStSp5747/subnets/xplattestsubnetStSp5693?api-version=2017-10-01').reply(200, "{\r\n  \"name\": \"xplattestsubnetStSp5693\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMConvert7943/providers/Microsoft.Network/virtualNetworks/xplattestvnetStSp5747/subnets/xplattestsubnetStSp5693\",\r\n  \"etag\": \"W/\\\"c5017004-fcb0-49f9-8e6a-9bed2a4b6c9e\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/24\"\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '399', 'content-type' : 'application/json; charset=utf-8', expires : '-1', etag : 'W/"c5017004-fcb0-49f9-8e6a-9bed2a4b6c9e"', 'x-ms-request-id' : '9209a7d0-7429-4ef3-9008-284a4fe4bd26', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14992', 'x-ms-correlation-request-id' : '2185f027-cabd-471a-b596-7c09b846b9b6', 'x-ms-routing-request-id' : 'WESTUS2:20170602T163020Z:2185f027-cabd-471a-b596-7c09b846b9b6', date : 'Fri, 02 Jun 2017 16:30:19 GMT', connection : 'close'}));
return v2;
});
}
var v6 = (function (){
function v6(){
}
(v6.ClearCache) = (function (){
(v1) = [];
});
(v6.Serialize) = (function (v2){
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
v3.meshes.push(v1(v14, v3));
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
(v6.SerializeMesh) = (function (v19, v20, v21){
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
v4(v14, v3);
}));
return v3;
});
return v6;
})();
