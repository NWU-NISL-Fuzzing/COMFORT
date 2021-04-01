var v0 = (function (v1){
var v2 = v1('https://management.core.windows.net:443').get('/00977cdb-163f-435f-9c32-39ec8ae61f4d/services/WebSpaces/xTestResource9344-SouthCentralUSwebspace/sites?propertiesToInclude=repositoryuri%2Cpublishingpassword%2Cpublishingusername').reply(200, "<Sites xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"/>", ({'cache-control' : 'private', 'content-length' : '110', 'content-type' : 'application/xml; charset=utf-8', server : '1.0.6198.405 (rd_rdfe_stable.160723-1634) Microsoft-HTTPAPI/2.0', 'x-ms-servedbyregion' : 'ussouth3', 'strict-transport-security' : 'max-age=31536000; includeSubDomains', 'x-aspnet-version' : '4.0.30319', 'x-powered-by' : 'ASP.NET', 'x-ms-request-id' : '110070b5368e06b8b47ef070aa2e0504', date : 'Tue, 02 Aug 2016 19:57:17 GMT', connection : 'close'}));
return v2;
});
var v1 = (function (v1){
do {
if(v1.userData.sceneSetUp){
return v1.userData.sceneSetUp;
}
(v1) = v1.parent;
}while(v1)
return null;
});
(v0.constructor) = v0;
// GenBlkBrick
for((v0) = v1;(v0) < (v2);(v0) += v3){
var v2 = (function (v1){
var v2 = this.parseId_(v1);
if(! this.pending_[v2]){
(this.completed_[v1.url]) = (this.completed_[v1.url]) || ([]);
this.completed_[v1.url].push(({duration : 0, openedInNewWindow : false, source : ({frameId : null, tabId : null}), transitionQualifiers : v1.transitionQualifiers, transitionType : v1.transitionType, url : v1.url}));
this.saveDataStorage_();
}else {
this.prepareDataStorage_(v2, v1.url);
(this.pending_[v2].transitionType) = v1.transitionType;
(this.pending_[v2].transitionQualifiers) = v1.transitionQualifiers;
}
});
(v2.prototype.level) = (function (v1){
return this.map[v1];
});
}
var v3 = (function (v1, v2){
if(((v1.delayLoadState) === (v3.Engine.DELAYLOADSTATE_LOADED)) || ((v1.delayLoadState) === (v3.Engine.DELAYLOADSTATE_NONE))){
if(v1.material){
if((v1.material) instanceof (v3.StandardMaterial)){
(v2.materials) = (v2.materials) || ([]);
if(! v2.materials.some((function (v4){
return (v4.id) === (v1.material.id);
}))){
v2.materials.push(v1.material.serialize());
}
}else {
if((v1.material) instanceof (v3.MultiMaterial)){
(v2.multiMaterials) = (v2.multiMaterials) || ([]);
if(! v2.multiMaterials.some((function (v4){
return (v4.id) === (v1.material.id);
}))){
v2.multiMaterials.push(v1.material.serialize());
}
}
}
}
var v5 = v1._geometry;
if(v5){
if(! v2.geometries){
(v2.geometries) = ({});
(v2.geometries.boxes) = [];
(v2.geometries.spheres) = [];
(v2.geometries.cylinders) = [];
(v2.geometries.toruses) = [];
(v2.geometries.grounds) = [];
(v2.geometries.planes) = [];
(v2.geometries.torusKnots) = [];
(v2.geometries.vertexData) = [];
}
v0(v5, v2.geometries);
}
if(v1.skeleton){
(v2.skeletons) = (v2.skeletons) || ([]);
v2.skeletons.push(v1.skeleton.serialize());
}
(v2.meshes) = (v2.meshes) || ([]);
v2.meshes.push(v2(v1, v2));
}
});
var v4 = (function (v1, v2, v3){
v3(311)("replace", 2, (function (v1, v2, v3){
return [];
}));
});
(v2.prototype.create) = (function (v1){
if((! v1) && (this._buffer)){
return;
}
(v1) = (v1) || (this._data);
if(! this._buffer){
if(this._updatable){
(this._buffer) = this._engine.createDynamicVertexBuffer(v1);
(this._data) = v1;
}else {
(this._buffer) = this._engine.createVertexBuffer(v1);
}
}else {
if(this._updatable){
this._engine.updateDynamicVertexBuffer(this._buffer, v1);
(this._data) = v1;
}
}
});
function v5(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v2(v1);
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
(v3) += v3(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v1(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
