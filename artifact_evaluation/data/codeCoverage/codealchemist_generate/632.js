// GenBlkBrick
for(v0 in v1){
function v0(v1){
return 1;
}
var v1 = (function (){
if((null) !== (this.validatedPassword)){
return ! this.validatedPassword.passed;
}
return true;
});
}
(v0.prototype._swapAndDie) = (function (v1){
(v1._webGLTexture) = this._webGLTexture;
if(this._framebuffer){
(v1._framebuffer) = this._framebuffer;
}
if(this._depthStencilBuffer){
(v1._depthStencilBuffer) = this._depthStencilBuffer;
}
if(this._lodTextureHigh){
if(v1._lodTextureHigh){
v1._lodTextureHigh.dispose();
}
(v1._lodTextureHigh) = this._lodTextureHigh;
}
if(this._lodTextureMid){
if(v1._lodTextureMid){
v1._lodTextureMid.dispose();
}
(v1._lodTextureMid) = this._lodTextureMid;
}
if(this._lodTextureLow){
if(v1._lodTextureLow){
v1._lodTextureLow.dispose();
}
(v1._lodTextureLow) = this._lodTextureLow;
}
var v2 = this._engine.getLoadedTexturesCache();
var v3 = v2.indexOf(this);
if((v3) !== (- 1)){
v2.splice(v3, 1);
}
});
(v0.EnableFor) = (function (v1){
(v1._tags) = (v1._tags) || (({}));
(v1.hasTags) = (function (){
return v0.HasTags(v1);
});
(v1.addTags) = (function (v2){
return v0.AddTagsTo(v1, v2);
});
(v1.removeTags) = (function (v2){
return v0.RemoveTagsFrom(v1, v2);
});
(v1.matchesTagsQuery) = (function (v3){
return v0.MatchesQuery(v1, v3);
});
});
// GenBlkBrick
while((v0) == (2046)){
var v2 = (function (){
return this.attempt_;
});
}
var v3 = (function (v1, v2){
v1.forEach((function (v3){
this.removeObject(v3, v2);
}), this);
return this;
});
(function (){
v3(/$/, "s");
v3(/s$/i, "s");
v3(/(ax|test)is$/i, "$1es");
v3(/(octop|vir)us$/i, "$1i");
v3(/(octop|vir)i$/i, "$1i");
v3(/(alias|status)$/i, "$1es");
v3(/(bu)s$/i, "$1ses");
v3(/(buffal|tomat)o$/i, "$1oes");
v3(/([ti])a$/i, "$1a");
v3(/([ti])um$/i, "$1a");
v3(/sis$/i, "ses");
v3(/ses$/i, "ses");
v3(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v3(/(hive)$/i, "$1s");
v3(/([^aeiouy]|qu)y$/i, "$1ies");
v3(/(x|ch|ss|sh)$/i, "$1es");
v3(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v3(/([m|l])ouse$/i, "$1ice");
v3(/([m|l])ice$/i, "$1ice");
v3(/^(ox)$/i, "$1en");
v3(/^(ox)en$/i, "$1en");
v3(/(quiz)$/i, "$1zes");
v2(/s$/i, "");
v2(/ss$/i, "ss");
v2(/(n)ews$/i, "$1ews");
v2(/([ti])um$/i, "$1um");
v2(/([ti])a$/i, "$1um");
v2(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i, "$1$2sis");
v2(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)sis$/i, "$1$2sis");
v2(/(^analy)ses$/i, "$1sis");
v2(/(^analy)sis$/i, "$1sis");
v2(/([^f])ves$/i, "$1fe");
v2(/(hive)s$/i, "$1");
v2(/(tive)s$/i, "$1");
v2(/([lr])ves$/i, "$1f");
v2(/([^aeiouy]|qu)ies$/i, "$1y");
v2(/(s)eries$/i, "$1eries");
v2(/(m)ovies$/i, "$1ovie");
v2(/(x|ch|ss|sh)es$/i, "$1");
v2(/([m|l])ice$/i, "$1ouse");
v2(/([m|l])ouse$/i, "$1ouse");
v2(/(bus)es$/i, "$1");
v2(/(bus)$/i, "$1");
v2(/(o)es$/i, "$1");
v2(/(shoe)s$/i, "$1");
v2(/(cris|ax|test)es$/i, "$1is");
v2(/(cris|ax|test)is$/i, "$1is");
v2(/(octop|vir)i$/i, "$1us");
v2(/(octop|vir)us$/i, "$1us");
v2(/(alias|status)es$/i, "$1");
v2(/(alias|status)$/i, "$1");
v2(/^(ox)en/i, "$1");
v2(/(vert|ind)ices$/i, "$1ex");
v2(/(matr)ices$/i, "$1ix");
v2(/(quiz)zes$/i, "$1");
v2(/(database)s$/i, "$1");
v0("person", "people");
v0("man", "men");
v0("child", "children");
v0("sex", "sexes");
v0("move", "moves");
v0("cow", "kine");
v1("equipment");
v1("information");
v1("rice");
v1("money");
v1("species");
v1("series");
v1("fish");
v1("sheep");
v1("jeans");
})();
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
// GenBlkBrick
for(var v4, v5 = [], v6 = 0;(v6) < (256);v6++){
var v7 = (function (){
Object.defineProperty(this, "parent", ({configurable : true, value : this._computeParent()}));
return this.parent;
});
Object.defineProperty(v5, "prop", ({get : v3, set : v7, enumerable : true, configurable : false}));
}
