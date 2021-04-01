var v0 = (function (v1, v2, v3){
var v4 = v3(212), v5 = v3(2143), v6 = v3(2142), v7 = v3(211);
(v1.exports) = (function (v1, v2){
return ((v2) = v4(v2, v1), ((null) == ((v1) = v6(v1, v2))) || (delete v1[v7(v5(v2))]));
});
});
// GenBlkBrick
while(true){
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = v3(67), v5 = v3(15), v6 = v3(1881), v7 = v3(1879), v8 = v3(27), v9 = v3(24);
(v1.exports) = ({create : v9((function (v1){
return v4.verify(({name : "Google Pay", client : v1.client})).then((function (){
return (v1.client.getConfiguration().gatewayConfiguration.androidPay) ? (new v7(v1).initialize()) : (v8.reject(new v5(({type : v5.types.MERCHANT, code : "GOOGLE_PAYMENT_NOT_ENABLED", message : "Google Pay is not enabled for this merchant."}))));
}));
})), isSupported : (function (){
return Boolean((v6.supportsPaymentRequestApi()) && (v6.isAndroid()));
}), VERSION : "3.28.0"});
});
var v2 = v1;
}
(v2.prototype.insert) = (function (v1, v2){
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
(v2.prototype) = ((v0) === (null)) ? (Object.create(v0)) : (((v1.prototype) = v0.prototype, new v1()));
(v0.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v1(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v1(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v2(v5);
return v5;
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
v0(v14, v3);
}));
return v3;
});
return v3;
})();
(function (){
v0(/$/, "s");
v0(/s$/i, "s");
v0(/(ax|test)is$/i, "$1es");
v0(/(octop|vir)us$/i, "$1i");
v0(/(octop|vir)i$/i, "$1i");
v0(/(alias|status)$/i, "$1es");
v0(/(bu)s$/i, "$1ses");
v0(/(buffal|tomat)o$/i, "$1oes");
v0(/([ti])a$/i, "$1a");
v0(/([ti])um$/i, "$1a");
v0(/sis$/i, "ses");
v0(/ses$/i, "ses");
v0(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
v0(/(hive)$/i, "$1s");
v0(/([^aeiouy]|qu)y$/i, "$1ies");
v0(/(x|ch|ss|sh)$/i, "$1es");
v0(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
v0(/([m|l])ouse$/i, "$1ice");
v0(/([m|l])ice$/i, "$1ice");
v0(/^(ox)$/i, "$1en");
v0(/^(ox)en$/i, "$1en");
v0(/(quiz)$/i, "$1zes");
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
v2("person", "people");
v2("man", "men");
v2("child", "children");
v2("sex", "sexes");
v2("move", "moves");
v2("cow", "kine");
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
v1(v2, v0);
