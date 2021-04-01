function v0(v1, v2, v3){
if((v3) === (void 0)){
(v3) = Number.MAX_VALUE;
}
(this.origin) = v1;
(this.direction) = v2;
(this.length) = v3;
}
var v1 = (function (v1, v2, v3){
var v4 = v3(125), v5 = v3(126);
(v1.exports) = (function (v1){
return (function (v2, v3){
var v6, v7, v8 = String(v5(v2)), v10 = v4(v3), v11 = v8.length;
return (((v10) < (0)) || ((v10) >= (v11))) ? ((v1) ? ("") : (void 0)) : ((((((((v6) = v8.charCodeAt(v10)) < (55296)) || ((v6) > (56319))) || (((v10) + (1)) === (v11))) || (((v7) = v8.charCodeAt((v10) + (1))) < (56320))) || ((v7) > (57343))) ? ((v1) ? (v8.charAt(v10)) : (v6)) : ((v1) ? (v8.slice(v10, (v10) + (2))) : ((((v7) - (56320)) + (((v6) - (55296)) << (10))) + (65536))));
});
});
});
var v2 = (function (v1){
v1.use("~baseDependency~@1.0.0");
v1.use("~weakDependency~@=1.0.0", ({weak : true}));
});
var v3 = (function (v1){
(this.confidence) = 0;
(this._ref_raster) = v1;
});
function v4(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v3(v1);
}
if((typeof v1) !== ('object')){
return v1;
}
if(! v2.inline){
if((v1) instanceof (Array)){
(v3) = '[';
}else {
(v3) = '{';
}
(v3) += '\n';
}
v4++;
if((v1) instanceof (Array)){
(v3) += v1(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v2(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v0(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
(v1.prototype.render) = (function (){
if((this.renderList.length) === (0)){
return;
}
this._prepareRessources();
if(! this._colorShader.isReady()){
return;
}
var v1 = this._scene.getEngine();
v1.setDepthWrite(false);
this._colorShader._preBind();
for(var v2 = 0;(v2) < (this.renderList.length);v2++){
var v3 = this.renderList.data[v2];
var v4 = v3.minimum;
var v5 = v3.maximum;
var v6 = v5.subtract(v4);
var v7 = v4.add(v6.scale(0.5));
var v8 = v9.Matrix.Scaling(v6.x, v6.y, v6.z).multiply(v9.Matrix.Translation(v7.x, v7.y, v7.z)).multiply(v3.getWorldMatrix());
v1.bindBuffers(this._vertexBuffers, this._indexBuffer, this._colorShader.getEffect());
if(this.showBackLines){
v1.setDepthFunctionToGreaterOrEqual();
this._scene.resetCachedMaterial();
this._colorShader.setColor4("color", this.backColor.toColor4());
this._colorShader.bind(v8);
v1.draw(false, 0, 24);
}
v1.setDepthFunctionToLess();
this._scene.resetCachedMaterial();
this._colorShader.setColor4("color", this.frontColor.toColor4());
this._colorShader.bind(v8);
v1.draw(false, 0, 24);
}
this._colorShader.unbind();
v1.setDepthFunctionToLessOrEqual();
v1.setDepthWrite(true);
});
// GenBlkBrick
for(var v5 = 10;(v5) < (14);v5++){
if((v5) === (6)){
break ;
}
}
// GenBlkBrick
for(var v0 in v3.prototype){
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
v2(v14, v3);
}));
return v3;
});
return v6;
})();
// GenBlkBrick
for(var v0 in v6.prototype){
function v7(v1, v2){
if(! v2){
(v2) = v3.base;
}
var v4 = v6(v2);
for(var v6 in v1){
(v4[v6]) = v1[v6];
}
return v4;
}
}
}
