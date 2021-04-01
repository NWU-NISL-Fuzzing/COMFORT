// GenBlkBrick
for(v0 in []){
var v0 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191?api-version=2015-12-01').reply(200, "{\"name\":\"armclibatch4191\",\"location\":\"westus\",\"properties\":{\"accountEndpoint\":\"armclibatch4191.westus.batch.azure.com\",\"provisioningState\":\"Succeeded\",\"coreQuota\":20,\"poolQuota\":20,\"activeJobAndJobScheduleQuota\":20,\"autoStorage\":{\"storageAccountId\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Storage/storageAccounts/armclibatch2714\",\"lastKeySync\":\"2016-10-04T21:47:06.4871674Z\"}},\"id\":\"/subscriptions/46241355-bb95-46a9-ba6c-42b554d71925/resourceGroups/armclibatchgroup7729/providers/Microsoft.Batch/batchAccounts/armclibatch4191\",\"type\":\"Microsoft.Batch/batchAccounts\"}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '636', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'last-modified' : 'Tue, 04 Oct 2016 21:47:07 GMT', etag : '0x8D3EC9FFCC62EF3', 'request-id' : 'e7c50175-b9c0-4c06-b76f-9d9ccda2b2ed', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14994', 'x-ms-request-id' : '66582697-dcec-4e07-93d8-b8e2f48c88c9', 'x-ms-correlation-request-id' : '66582697-dcec-4e07-93d8-b8e2f48c88c9', 'x-ms-routing-request-id' : 'CENTRALUS:20161004T214705Z:66582697-dcec-4e07-93d8-b8e2f48c88c9', date : 'Tue, 04 Oct 2016 21:47:05 GMT', connection : 'close'}));
return v2;
});
}
var v1 = (function (v1, v2){
var v3 = [];
for(var v4 = 2;(v4) < (arguments.length);v4++){
v3.push(arguments[v4]);
}
for((v4) = 0;(v4) < (this.list.length);v4++){
(v3[0]) = this.list[v4];
v1.apply(v2, v3);
}
});
(v1.match.Match) = v1.Util.extend(Object, ({constructor : (function (v2){
v1.Util.assign(this, v2);
}), getType : v1.Util.abstractMethod, getMatchedText : (function (){
return this.matchedText;
}), getAnchorHref : v1.Util.abstractMethod, getAnchorText : v1.Util.abstractMethod}));
// GenBlkBrick
for(var v0 in v1.prototype){
var v2 = (function (v1, v2, v3){
var v4 = v3(32), v5 = v3(24).document, v6 = (v4(v5)) && (v4(v5.createElement));
(v1.exports) = (function (v1){
return (v6) ? (v5.createElement(v1)) : (({}));
});
});
}
(v1.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v0(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v2(v1, v1.right);
}else {
break ;
}
}
}
}
});
var v3 = (function (v1, v2, v3){
(v1.exports) = (! v3(50)) && (! v3(31)((function (){
return (7) != (Object.defineProperty(v3(532)("div"), "a", ({get : (function (){
return 7;
})})).a);
})));
});
(v0.Serialize) = (function (v1){
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
// GenBlkBrick
for(var v4 = 0;(v4) < (20);v4++){
var v5 = (function (v1, v2, v3){
var v4 = v3(94), v5 = v3(5), v6 = v3(29);
v5(v5.S, "Reflect", ({getOwnPropertyDescriptor : (function (v1, v2){
return v4.f(v6(v1), v2);
})}));
});
}
