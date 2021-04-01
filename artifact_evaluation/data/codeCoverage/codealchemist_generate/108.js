var v0 = (function (v1, v2){
if((v2) === (undefined)){
return "";
}
});
(v0.prototype.dispatch) = (function (v1){
var v2 = v1.getMaterial();
var v3 = v1.getMesh();
if(! v2){
return;
}
if(v2.needAlphaBlendingForMesh(v3)){
this._transparentSubMeshes.push(v1);
}else {
if(v2.needAlphaTesting()){
if(v2.needDepthPrePass){
this._depthOnlySubMeshes.push(v1);
}
this._alphaTestSubMeshes.push(v1);
}else {
if(v2.needDepthPrePass){
this._depthOnlySubMeshes.push(v1);
}
this._opaqueSubMeshes.push(v1);
}
}
if(v3._edgesRenderer){
this._edgesRenderers.push(v3._edgesRenderer);
}
});
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = [].forEach, v5 = v3(71)(0), v6 = v3(152)("forEach");
(v1.exports) = (v6) ? ((function (v1){
return v5(this, v1, arguments[1]);
})) : (v4);
});
(v1.SerializeMesh) = (function (v1, v2, v3){
if((v2) === (void 0)){
(v2) = false;
}
if((v3) === (void 0)){
(v3) = false;
}
var v4 = ({});
(v1) = ((v1) instanceof (Array)) ? (v1) : ([]);
if((v2) || (v3)){
for(var v6 = 0;(v6) < (v1.length);++v6){
if(v3){
v1[v6].getDescendants().forEach((function (v7){
if(((v7) instanceof (v8.Mesh)) && ((v1.indexOf(v7)) < (0))){
v1.push(v7);
}
}));
}
if(((v2) && (v1[v6].parent)) && ((v1.indexOf(v1[v6].parent)) < (0))){
v1.push(v1[v6].parent);
}
}
}
v1.forEach((function (v9){
v0(v9, v4);
}));
return v4;
});
(v0.prototype.incrementReferences) = (function (){
this._references++;
});
v1(v0);
var v2 = ('___cacheBust=') + (Date.now());
(v0.escapeString) = v1;
