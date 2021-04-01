var v0 = (function (){
var v1, v2 = arguments, v4, v5 = this.listeners, v6;
for((v4) = 0;(v4) < (v5.length);v4++){
(v6) = v5[v4];
(v1) = v6.cb.apply(v6.scope, v2);
if((v1) === (false)){
break ;
}
}
return v1;
});
(v0[2]) = 2;
// GenBlkBrick
for(var v0 in null){
var v1 = (function (v1, v2, v3){
v1.setFromMatrixColumn(this, 0);
v2.setFromMatrixColumn(this, 1);
v3.setFromMatrixColumn(this, 2);
return this;
});
}
var v2 = (function (v1){
var v2 = v1('http://management.azure.com:443').filteringRequestBody((function (v3){
return '*';
})).put('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName?api-version=2017-10-01', '*').reply(200, "{\r\n  \"name\": \"loadBalancerName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName\",\r\n  \"etag\": \"W/\\\"53dd7480-51f3-41a4-ab68-6c5332f2a874\\\"\",\r\n  \"type\": \"Microsoft.Network/loadBalancers\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"be4c6e64-9c83-4400-aaac-33393597fbc2\",\r\n    \"frontendIPConfigurations\": [\r\n      {\r\n        \"name\": \"frontendIPConfigurationName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/frontendIPConfigurations/frontendIPConfigurationName\",\r\n        \"etag\": \"W/\\\"53dd7480-51f3-41a4-ab68-6c5332f2a874\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"backendAddressPools\": [\r\n      {\r\n        \"name\": \"backendAddressPoolName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/backendAddressPools/backendAddressPoolName\",\r\n        \"etag\": \"W/\\\"53dd7480-51f3-41a4-ab68-6c5332f2a874\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\"\r\n        }\r\n      }\r\n    ],\r\n    \"loadBalancingRules\": [],\r\n    \"probes\": [\r\n      {\r\n        \"name\": \"probeName\",\r\n        \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-rule/providers/Microsoft.Network/loadBalancers/loadBalancerName/probes/probeName\",\r\n        \"etag\": \"W/\\\"53dd7480-51f3-41a4-ab68-6c5332f2a874\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"protocol\": \"Tcp\",\r\n          \"port\": 80,\r\n          \"intervalInSeconds\": 15,\r\n          \"numberOfProbes\": 2\r\n        }\r\n      }\r\n    ],\r\n    \"inboundNatRules\": [],\r\n    \"outboundNatRules\": [],\r\n    \"inboundNatPools\": []\r\n  },\r\n  \"sku\": {\r\n    \"name\": \"Basic\"\r\n  }\r\n}", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '2286', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'x-ms-request-id' : 'eb4fca50-a333-42d8-afb2-5d8987f3f453', 'azure-asyncoperation' : 'https://management.azure.com/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/providers/Microsoft.Network/locations/westus/operations/eb4fca50-a333-42d8-afb2-5d8987f3f453?api-version=2017-10-01', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-writes' : '1195', 'x-ms-correlation-request-id' : 'abf6f52e-a880-4f7b-a3ea-29da357a1605', 'x-ms-routing-request-id' : 'WESTEUROPE:20170927T111339Z:abf6f52e-a880-4f7b-a3ea-29da357a1605', date : 'Wed, 27 Sep 2017 11:13:38 GMT', connection : 'close'}));
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
v0(v11, v3.geometries);
}
}
(v3.meshes) = [];
for((v4) = 0;(v4) < (v2.meshes.length);v4++){
var v13 = v2.meshes[v4];
if((v13) instanceof (v7.Mesh)){
var v14 = v13;
if(! v14.doNotSerialize){
if(((v14.delayLoadState) === (v7.Engine.DELAYLOADSTATE_LOADED)) || ((v14.delayLoadState) === (v7.Engine.DELAYLOADSTATE_NONE))){
v3.meshes.push(v2(v14, v3));
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
v1(v2, v3);
(v2.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v1(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v0(v1, v1.right);
}else {
break ;
}
}
}
}
});
(function (){
v2(/$/, "s");
v2(/s$/i, "s");
v2(/(ax|test)is$/i, "$1es");
v2(/(octop|vir)us$/i, "$1i");
v2(/(octop|vir)i$/i, "$1i");
v2(/(alias|status)$/i, "$1es");
v2(/(bu)s$/i, "$1ses");
v2(/(buffal|tomat)o$/i, "$1oes");
v2(/([ti])a$/i, "$1a");
v2(/([ti])um$/i, "$1a");
v2(/sis$/i, "ses");
v2(/ses$/i, "ses");
v2(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v2(/(hive)$/i, "$1s");
v2(/([^aeiouy]|qu)y$/i, "$1ies");
v2(/(x|ch|ss|sh)$/i, "$1es");
v2(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v2(/([m|l])ouse$/i, "$1ice");
v2(/([m|l])ice$/i, "$1ice");
v2(/^(ox)$/i, "$1en");
v2(/^(ox)en$/i, "$1en");
v2(/(quiz)$/i, "$1zes");
v1(/s$/i, "");
v1(/ss$/i, "ss");
v1(/(n)ews$/i, "$1ews");
v1(/([ti])um$/i, "$1um");
v1(/([ti])a$/i, "$1um");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v1(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v1(/(^analy)ses$/i, "$1sis");
v1(/(^analy)sis$/i, "$1sis");
v1(/([^f])ves$/i, "$1fe");
v1(/(hive)s$/i, "$1");
v1(/(tive)s$/i, "$1");
v1(/([lr])ves$/i, "$1f");
v1(/([^aeiouy]|qu)ies$/i, "$1y");
v1(/(s)eries$/i, "$1eries");
v1(/(m)ovies$/i, "$1ovie");
v1(/(x|ch|ss|sh)es$/i, "$1");
v1(/([m|l])ice$/i, "$1ouse");
v1(/([m|l])ouse$/i, "$1ouse");
v1(/(bus)es$/i, "$1");
v1(/(bus)$/i, "$1");
v1(/(o)es$/i, "$1");
v1(/(shoe)s$/i, "$1");
v1(/(cris|ax|test)es$/i, "$1is");
v1(/(cris|ax|test)is$/i, "$1is");
v1(/(octop|vir)i$/i, "$1us");
v1(/(octop|vir)us$/i, "$1us");
v1(/(alias|status)es$/i, "$1");
v1(/(alias|status)$/i, "$1");
v1(/^(ox)en/i, "$1");
v1(/(vert|ind)ices$/i, "$1ex");
v1(/(matr)ices$/i, "$1ix");
v1(/(quiz)zes$/i, "$1");
v1(/(database)s$/i, "$1");
v0("person", "people");
v0("man", "men");
v0("child", "children");
v0("sex", "sexes");
v0("move", "moves");
v0("cow", "kine");
v3("equipment");
v3("information");
v3("rice");
v3("money");
v3("species");
v3("series");
v3("fish");
v3("sheep");
v3("jeans");
})();
