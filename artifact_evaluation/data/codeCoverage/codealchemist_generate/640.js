var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(633), v5 = v3(69), v6 = v3(25);
(v1.exports) = ({create : v6((function (v1){
return v5.verify(({name : "Payment Request", client : v1.client})).then((function (){
return new v4(v1).initialize();
}));
})), VERSION : "3.28.0"});
});
function v1(v1, v2, v3, v4, v5){
while((v4) > (v3)){
if(((v4) - (v3)) > (600)){
var v6 = ((v4) - (v3)) + (1);
var v7 = ((v2) - (v3)) + (1);
var v8 = Math.log(v6);
var v10 = (0.5) * (Math.exp(((2) * (v8)) / (3)));
var v11 = ((0.5) * (Math.sqrt((((v8) * (v10)) * ((v6) - (v10))) / (v6)))) * ((((v7) - ((v6) / (2))) < (0)) ? (- 1) : (1));
var v12 = Math.max(v3, Math.floor(((v2) - (((v7) * (v10)) / (v6))) + (v11)));
var v13 = Math.min(v4, Math.floor(((v2) + ((((v6) - (v7)) * (v10)) / (v6))) + (v11)));
v1(v1, v2, v12, v13, v5);
}
var v14 = v1[v2];
var v15 = v3;
var v16 = v4;
v0(v1, v3, v2);
if((v5(v1[v4], v14)) > (0)){
v0(v1, v3, v4);
}
while((v15) < (v16)){
v0(v1, v15, v16);
v15++;
v16--;
while((v5(v1[v15], v14)) < (0)){
v15++;
}
while((v5(v1[v16], v14)) > (0)){
v16--;
}
}
if((v5(v1[v3], v14)) === (0)){
v0(v1, v3, v16);
}else {
v16++;
v0(v1, v16, v4);
}
if((v16) <= (v2)){
(v3) = (v16) + (1);
}
if((v2) <= (v16)){
(v4) = (v16) - (1);
}
}
}
var v2 = (function (v1, v2){
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
v2.meshes.push(v1(v1, v2));
}
});
var v3 = (function (){
return this.m_target;
});
function v4(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v1(v1);
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
(v3) += ('\n') + (v2(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
// GenBlkBrick
for(var v5 = 10;(v5) < (14);v5++){
var v6 = (function (v1, v2, v3){
arguments[4][14][0].apply(v3, arguments);
});
}
function v7(v1, v2){
(v2) = (v2) || (({}));
var v3 = '';
var v4 = (v2.indent) || (0);
if((typeof v1) === ('string')){
return v1(v1);
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
(v3) += v0(v1, v8.delegate(v2, ({inline : false})), v4);
}else {
(v3) += v4(v1, v8.delegate(v2, ({inline : false})), v4);
}
v4--;
if(! v2.inline){
(v3) += ('\n') + (v3(v4));
if((v1) instanceof (Array)){
(v3) += ']';
}else {
(v3) += '}';
}
}
return v3;
}
Array.prototype.reduce.call(v7, v3, v5);
