var v0 = (function (v1){
var v2 = v1('http://management.azure.com:443').filteringRequestBody((function (v3){
return '*';
})).put('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension5919/providers/Microsoft.Network/networkInterfaces/xplatnicExt2?api-version=2017-10-01', '*').reply(201, "{\r\n  \"name\": \"xplatnicExt2\",\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension5919/providers/Microsoft.Network/networkInterfaces/xplatnicExt2\",\r\n  \"etag\": \"W/\\\"bee9d46f-2b7d-41ad-93e1-1e4ab8859605\\\"\",\r\n  \"location\": \"southeastasia\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"8dcb2e41-f4dd-4caf-8539-2a72d5739460\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"ipconfig1496428386887\",\r\n        \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension5919/providers/Microsoft.Network/networkInterfaces/xplatnicExt2/ipConfigurations/ipconfig1496428386887\",\r\n        \"etag\": \"W/\\\"bee9d46f-2b7d-41ad-93e1-1e4ab8859605\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.4\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension5919/providers/Microsoft.Network/publicIPAddresses/xplatipExt2\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGExtension5919/providers/Microsoft.Network/virtualNetworks/xplatvnetExt2/subnets/xplatsubnetExt2\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDomainNameSuffix\": \"ex1atvkpsxuehj2lxv5daerynh.ix.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '1768', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-request-id' : 'dcf9e8b6-4396-4d89-98c2-ecdbdd17fa86', 'azure-asyncoperation' : 'https://management.azure.com/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Network/locations/southeastasia/operations/dcf9e8b6-4396-4d89-98c2-ecdbdd17fa86?api-version=2017-10-01', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1197', 'x-ms-correlation-request-id' : '6e8a1a3d-af3e-4391-a437-5b5db176fcea', 'x-ms-routing-request-id' : 'WESTUS2:20170602T183348Z:6e8a1a3d-af3e-4391-a437-5b5db176fcea', date : 'Fri, 02 Jun 2017 18:33:48 GMT', connection : 'close'}));
return v2;
});
Object.defineProperty(v0.prototype, "captureRenderTargetsRenderTime", ({get : (function (){
return this._captureRenderTargetsRenderTime;
}), set : (function (v2){
var v3 = this;
if((v2) === (this._captureRenderTargetsRenderTime)){
return;
}
(this._captureRenderTargetsRenderTime) = v2;
if(v2){
(this._onBeforeRenderTargetsRenderObserver) = this.scene.OnBeforeRenderTargetsRenderObservable.add((function (){
v4.Tools.StartPerformanceCounter("Render targets rendering");
v3._renderTargetsRenderTime.beginMonitoring();
}));
(this._onAfterRenderTargetsRenderObserver) = this.scene.OnAfterRenderTargetsRenderObservable.add((function (){
v4.Tools.EndPerformanceCounter("Render targets rendering");
v3._renderTargetsRenderTime.endMonitoring(false);
}));
}else {
this.scene.OnBeforeRenderTargetsRenderObservable.remove(this._onBeforeRenderTargetsRenderObserver);
(this._onBeforeRenderTargetsRenderObserver) = null;
this.scene.OnAfterRenderTargetsRenderObservable.remove(this._onAfterRenderTargetsRenderObserver);
(this._onAfterRenderTargetsRenderObserver) = null;
}
}), enumerable : true, configurable : true}));
(v0.TRANSFORM) = "transform";
(v0.CHAIN) = "chain";
var v1 = (function (v1){
var v2 = ({});
var v3 = this.getLocation().search.substring(1).split('&');
for(var v4 = 0;(v4) < (v3.length);v4++){
var v5 = v3[v4].split('=');
(v2[decodeURIComponent(v5[0])]) = decodeURIComponent(v5[1]);
}
if(! v2["spec"]){
return true;
}
return (v1.getFullName().indexOf(v2["spec"])) == (0);
});
var v2 = (function (v1, v2, v3){
return this.icon_ruminate(v1, v2, v3);
});
(v2.Serialize) = (function (v1){
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
v0(v11, v2.geometries);
}
}
(v2.meshes) = [];
for((v3) = 0;(v3) < (v1.meshes.length);v3++){
var v13 = v1.meshes[v3];
if((v13) instanceof (v6.Mesh)){
var v14 = v13;
if(! v14.doNotSerialize){
if(((v14.delayLoadState) === (v6.Engine.DELAYLOADSTATE_LOADED)) || ((v14.delayLoadState) === (v6.Engine.DELAYLOADSTATE_NONE))){
v2.meshes.push(v1(v14, v2));
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
for(var v3 = 0;(v3) < (500);v3++){
(v3) += 2047;
[].reduce(v2, v3);
}
