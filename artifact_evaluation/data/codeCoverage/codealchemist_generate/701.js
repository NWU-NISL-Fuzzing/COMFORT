var v0 = (function (v1, v2, v3){
var v4 = v3(524), v5 = Math.pow, v7 = v5(2, - 52), v8 = v5(2, - 23), v9 = (v5(2, 127)) * ((2) - (v8)), v10 = v5(2, - 126);
(v1.exports) = (Math.fround) || ((function (v1){
var v2, v3, v5 = Math.abs(v1), v11 = v4(v1);
return ((v5) < (v10)) ? ((((v11) * (((((v5) / (v10)) / (v8)) + ((1) / (v7))) - ((1) / (v7)))) * (v10)) * (v8)) : (((((v3) = ((v2) = ((1) + ((v8) / (v7))) * (v5)) - ((v2) - (v5))) > (v9)) || ((v3) != (v3))) ? ((v11) * ((1) / (0))) : ((v11) * (v3)));
}));
});
// GenBlkBrick
while((v0) > (v1)){
var v1 = (function (v1){
var v2 = v1('https://management.azure.com:443').get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/providers/Microsoft.Compute/locations/southeastasia/publishers/MicrosoftSQLServer/artifacttypes/vmimage/offers/SQL2016-WS2016/skus/Enterprise/versions?api-version=2017-03-30').reply(200, "[\r\n  {\r\n    \"location\": \"southeastasia\",\r\n    \"name\": \"13.0.21640\",\r\n    \"id\": \"/Subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/Providers/Microsoft.Compute/Locations/southeastasia/Publishers/MicrosoftSQLServer/ArtifactTypes/VMImage/Offers/SQL2016-WS2016/Skus/Enterprise/Versions/13.0.21640\"\r\n  }\r\n]", ({'cache-control' : 'no-cache', pragma : 'no-cache', 'content-length' : '302', 'content-type' : 'application/json; charset=utf-8', expires : '-1', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-ms-served-by' : 'cba8a3bb-c820-4495-877e-baeb49ab5704_131330836479443416', 'x-ms-request-id' : 'd6d08b88-a258-40e4-a60c-e0cd62e0fcd2', server : 'Microsoft-HTTPAPI/2.0', 'x-ms-ratelimit-remaining-subscription-reads' : '14903', 'x-ms-correlation-request-id' : '6b916a8d-c0bc-42f9-aeca-c7011e835abf', 'x-ms-routing-request-id' : 'WESTUS:20170602T151907Z:6b916a8d-c0bc-42f9-aeca-c7011e835abf', date : 'Fri, 02 Jun 2017 15:19:07 GMT', connection : 'close'}));
return v2;
});
}
var v2 = (function (v1){
var v2 = v1.target;
if((! v2.status) || (((v2.status) >= (200)) && ((v2.status) < (300)))){
var v3;
try{
(v3) = JSON.parse(v2.responseText);
}catch(v5){
this.handleError_();
return;
}
this.handleLoad_(v3);
}else {
this.handleError_();
}
});
Object.defineProperty(v2.prototype, "transparentSortCompareFn", ({set : (function (v2){
if(v2){
(this._transparentSortCompareFn) = v2;
}else {
(this._transparentSortCompareFn) = v2.defaultTransparentSortCompare;
}
(this._renderTransparent) = this.renderTransparentSorted;
}), enumerable : true, configurable : true}));
var v3 = (function (v1){
"use strict";
var v2 = ({});
(v2.render) = (function (v3, v4){
var v5 = v4.getMode();
v3.write("<div");
v3.writeControlData(v4);
v3.addClass("sapMSplitContainer");
if(this.renderAttributes){
this.renderAttributes(v3, v4);
}
if(! v1.system.phone){
if(v1.orientation.portrait){
v3.addClass("sapMSplitContainerPortrait");
}
switch(v5){
}
}
v3.writeClasses();
v3.writeStyles();
var v6 = v4.getTooltip_AsString();
if(v6){
v3.writeAttributeEscaped("title", v6);
}
v3.write(">");
if(this.renderBeforeContent){
this.renderBeforeContent(v3, v4);
}
if(! v1.system.phone){
(v4._bMasterisOpen) = false;
if(((v1.orientation.landscape) && ((v5) !== ("HideMode"))) || ((v1.orientation.portrait) && ((v5) === ("StretchCompress")))){
v4._oMasterNav.addStyleClass("sapMSplitContainerMasterVisible");
(v4._bMasterisOpen) = true;
}else {
v4._oMasterNav.addStyleClass("sapMSplitContainerMasterHidden sapMSplitContainerNoTransition");
}
if(((v4.getMode()) === ("PopoverMode")) && (v1.orientation.portrait)){
v4._oDetailNav.addStyleClass("sapMSplitContainerDetail");
v3.renderControl(v4._oDetailNav);
if((v4._oPopOver.getContent().length) === (0)){
v4._oPopOver.addAggregation("content", v4._oMasterNav, true);
}
}else {
v4._oMasterNav.addStyleClass("sapMSplitContainerMaster");
v3.renderControl(v4._oMasterNav);
v4._oDetailNav.addStyleClass("sapMSplitContainerDetail");
v3.renderControl(v4._oDetailNav);
}
}else {
v4._oMasterNav.addStyleClass("sapMSplitContainerMobile");
v3.renderControl(v4._oMasterNav);
}
v3.write("</div>");
});
return v2;
});
// GenBlkBrick
for(var v0 in v1){
(v1.AddTagsTo) = (function (v1, v2){
if(! v2){
return;
}
if((typeof v2) !== ("string")){
return;
}
var v3 = v2.split(" ");
v3.forEach((function (v4, v5, v6){
v1._AddTagTo(v1, v4);
}));
});
}
(v3.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v0(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v0(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v1(v5);
return v5;
});
var v4 = (function (){
function v4(){
}
(v4.ClearCache) = (function (){
(v1) = [];
});
(v4.Serialize) = (function (v2){
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
v3(v11, v3.geometries);
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
(v4.SerializeMesh) = (function (v19, v20, v21){
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
v0(v14, v3);
}));
return v3;
});
return v4;
})();
