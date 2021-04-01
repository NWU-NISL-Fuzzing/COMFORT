var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(5);
var v5 = v3(75);
var v6 = ({focusDOMComponent : (function (){
v5(v4.getNodeFromInstance(this));
})});
(v1.exports) = v6;
});
var v1 = (function (v1){
var v2 = Array.prototype.slice.call(arguments, 1), v5, v6, v7, v8;
for(((v5) = 0, (v6) = v2.length);(v5) < (v6);(v5) += 1){
(v7) = v2[v5];
if(! v7){
continue ;
}
for(v8 in v7){
if(v7.hasOwnProperty(v8)){
(v1[v8]) = v7[v8];
}
}
}
return v1;
});
var v2 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("081f87b00b3d9688498756240f8962aa.svg");
});
(v2.prototype.shiftDown) = (function (v1){
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
v1(v1, v1.right);
}else {
break ;
}
}
}
}
});
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
var v4 = ({get name(){
return 'BASE_SYNC_PROVIDER';
}, get title(){
return 'Sync provider';
}, get isOAuthSupported(){
return false;
}, load : v3, save : v3, init : v1, shutdown : v1, getAuthUrl : v3, revokeToken : v3});
function v5(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v1(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v2(v1)) ? (v3(v3)[1]) : (v3(v3)[0]));
}else {
if(v4){
return (v5) + (v3(v3)[1]);
}else {
return (v5) + ((v2(v1)) ? (v3(v3)[1]) : (v3(v3)[2]));
}
}
}
}
for(v6 in v1){
if(v1.hasOwnProperty(v6)){
(v7) = v1[v6];
if((false) === (v0(v7, v4))){
(v4[v6]) = v7;
}
}
}
