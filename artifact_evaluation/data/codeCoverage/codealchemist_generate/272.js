var v0 = (function (v1){
var v2 = this.maps[this.api];
var v3 = v1.proprietary_polyline;
this.layers.polylines.removeFeatures([]);
});
(v0.prototype._init) = (function (){
(this.enabled) = (this.drawer.options.enableImageCrop) && (v1.ImageCropPlugin);
if(this.enabled){
var v2 = this._setupCropOptions();
this._removeElements();
this._createElements();
(this.cropper) = new v1.ImageCropPlugin(this.drawer, this.$cropperContainer, v2);
}
});
var v1 = (function (v1){
var v2 = "";
for(var v3 = 0;(v3) < (v1);v3++){
(v2) += v0();
}
return v2;
});
(v1.prototype.activate) = (function (v1, v2){
(v1) = (v1) || (this._camera);
var v3 = v1.getScene();
var v4 = v1.getEngine().getCaps().maxTextureSize;
var v5 = (((v2) ? (v2._width) : (this._engine.getRenderingCanvas().width)) * (this._options)) | (0);
var v6 = (((v2) ? (v2._height) : (this._engine.getRenderingCanvas().height)) * (this._options)) | (0);
var v7 = (this._options.width) || (v5);
var v8 = (this._options.height) || (v6);
if((this.renderTargetSamplingMode) !== (v9.Texture.NEAREST_SAMPLINGMODE)){
if(! this._options.width){
(v7) = v9.Tools.GetExponentOfTwo(v7, v4);
}
if(! this._options.height){
(v8) = v9.Tools.GetExponentOfTwo(v8, v4);
}
}
if(((this.width) !== (v7)) || ((this.height) !== (v8))){
if((this._textures.length) > (0)){
for(var v10 = 0;(v10) < (this._textures.length);v10++){
this._engine._releaseTexture(this._textures.data[v10]);
}
this._textures.reset();
}
(this.width) = v7;
(this.height) = v8;
var v11 = ({width : this.width, height : this.height});
var v12 = ({generateMipMaps : false, generateDepthBuffer : (v1._postProcesses.indexOf(this)) === (0), generateStencilBuffer : ((v1._postProcesses.indexOf(this)) === (0)) && (this._engine.isStencilEnable), samplingMode : this.renderTargetSamplingMode, type : this._textureType});
this._textures.push(this._engine.createRenderTargetTexture(v11, v12));
if(this._reusable){
this._textures.push(this._engine.createRenderTargetTexture(v11, v12));
}
this.onSizeChangedObservable.notifyObservers(this);
}
if(this.enablePixelPerfectMode){
this._scaleRatio.copyFromFloats((v5) / (v7), (v6) / (v8));
this._engine.bindFramebuffer(this._textures.data[this._currentRenderTextureInd], 0, v5, v6);
}else {
this._scaleRatio.copyFromFloats(1, 1);
this._engine.bindFramebuffer(this._textures.data[this._currentRenderTextureInd]);
}
this.onActivateObservable.notifyObservers(v1);
if(this.clearColor){
this._engine.clear(this.clearColor, true, true, true);
}else {
this._engine.clear(v3.clearColor, (v3.autoClear) || (v3.forceWireframe), true, true);
}
if(this._reusable){
(this._currentRenderTextureInd) = ((this._currentRenderTextureInd) + (1)) % (2);
}
});
// GenBlkBrick
for(var v0 in v1.prototype){
(v1.prototype) = ({applyBehavior : (function (v1){
var v2 = this.attractor.sub(v1);
var v3 = v2.magSquared();
if((v3) < (this.radiusSquared)){
var v4 = v2.normalizeTo((1.0) - ((v3) / (this.radiusSquared))).jitter(this.jitter).scaleSelf(this.attrStrength);
v1.addForce(v4);
}
}), configure : (function (v5){
(this.timeStep) = v5;
this.setStrength(this.strength);
}), getAttractor : (function (){
return this.attractor;
}), getJitter : (function (){
return this.jitter;
}), getRadius : (function (){
return this.radius;
}), getStrength : (function (){
return this.strength;
}), setAttractor : (function (v6){
(this.attractor) = v6;
}), setJitter : (function (v7){
(this.jitter) = v7;
}), setRadius : (function (v8){
(this.radius) = v8;
(this.radiusSquared) = (v8) * (v8);
}), setStrength : (function (v9){
(this.strength) = v9;
(this.attrStrength) = (v9) * (this.timeStep);
})});
// GenBlkBrick
for(var v2 = 0;- 0;){
if((v2) === (6)){
break ;
}
var v3 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/CIStressbasic3bdc7093990d4f4daa9d9d09ef25649f-SouthCentralUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : 'ecfc505c8d420a028bc6ba79a640b1b8', date : 'Tue, 02 Aug 2016 19:52:38 GMT', connection : 'close'}));
return v2;
});
}
}
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
Array.prototype.reduce.call(v1, v3, v2);
// GenBlkBrick
for(var v0 in v3.prototype){
v3(/(octop|vir)us$/i, "$1i");
(v3.prototype.path) = (function v1(){
var v2, v3, v4, v5, v6, v7;
function v8(v6, v1){
if(v1(v1)){
for(((v4) = 0, (v5) = v1.length);(v4) < (v5);++v4){
v6.push(v1[v4]);
}
}else {
v6.push(v1);
}
}
if(! this.__current.path){
return null;
}
(v6) = [];
for(((v2) = 2, (v3) = this.__leavelist.length);(v2) < (v3);++v2){
(v7) = this.__leavelist[v2];
v8(v6, v7.path);
}
v8(v6, this.__current.path);
return v6;
});
}
