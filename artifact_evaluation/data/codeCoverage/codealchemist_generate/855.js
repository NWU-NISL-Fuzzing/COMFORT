var v0 = (function (v1, v2){
var v3;
if((v2) === (2)){
(v3) = Math.floor((v1.length) / (2));
return ((v1.length) % (2)) ? (v1[v3]) : (((v1[(v3) - (1)]) + (v1[v3])) / (2));
}else {
if((v1.length) % (2)){
(v3) = (((v1.length) * (v2)) + (v2)) / (4);
return ((v3) % (1)) ? (((v1[Math.floor(v3)]) + (v1[(Math.floor(v3)) - (1)])) / (2)) : (v1[(v3) - (1)]);
}else {
(v3) = (((v1.length) * (v2)) + (2)) / (4);
return ((v3) % (1)) ? (((v1[Math.floor(v3)]) + (v1[(Math.floor(v3)) - (1)])) / (2)) : (v1[(v3) - (1)]);
}
}
});
var v1 = (function (){
(this.regEA) = this.abMem[this.regPC++];
(this.regRC) = (this.regY) - (this.abMem[this.regEA]);
(this.regRN) = (this.regRZ) = this.regRC;
(this.regRC) ^= 0x0100;
});
function v2(v1, v2, v3, v4, v5){
v0(v1, v2, (v3) || (0), (v4) || ((v1.length) - (1)), (v5) || (v1));
}
(v1.prototype.intersects) = (function (v1, v2){
if((! this.boundingSphere.centerWorld) || (! v1.boundingSphere.centerWorld)){
return false;
}
if(! v3.BoundingSphere.Intersects(this.boundingSphere, v1.boundingSphere)){
return false;
}
if(! v3.BoundingBox.Intersects(this.boundingBox, v1.boundingBox)){
return false;
}
if(! v2){
return true;
}
var v4 = this.boundingBox;
var v5 = v1.boundingBox;
if(! v2(v4.directions[0], v4, v5)){
return false;
}
if(! v2(v4.directions[1], v4, v5)){
return false;
}
if(! v2(v4.directions[2], v4, v5)){
return false;
}
if(! v2(v5.directions[0], v4, v5)){
return false;
}
if(! v2(v5.directions[1], v4, v5)){
return false;
}
if(! v2(v5.directions[2], v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[0], v5.directions[0]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[0], v5.directions[1]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[0], v5.directions[2]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[1], v5.directions[0]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[1], v5.directions[1]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[1], v5.directions[2]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[2], v5.directions[0]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[2], v5.directions[1]), v4, v5)){
return false;
}
if(! v2(v3.Vector3.Cross(v4.directions[2], v5.directions[2]), v4, v5)){
return false;
}
return true;
});
var v3 = (function (v1, v2, v3){
"use strict";
var v4 = v3(5), v5 = v3(524), v6 = v3(264), v7 = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(v6);
v4((v4.P) + ((v4.F) * (v7)), "String", ({padEnd : (function (v1){
return v5(this, v1, ((arguments.length) > (1)) ? (arguments[1]) : (void 0), ! 1);
})}));
});
// GenBlkBrick
for(var v4 = 0;(v4) < (7);v4++){
if((v4) === (6)){
break ;
}
}
function v5(v1, v2, v3){
var v4 = '';
var v5;
var v6 = true;
for(v5 in v1){
if(v1.hasOwnProperty(v5)){
if((v2.includeEmpty) || ((((v1[v5]) !== ('')) && ((v1[v5]) !== (null))) && ((v1[v5]) !== (undefined)))){
if(v6){
(v6) = false;
}else {
(v4) += ',\n';
}
(v4) += ((v3(v3)) + (v0(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
(v2.prototype.intersects) = (function (v1, v2){
if((! this.boundingSphere.centerWorld) || (! v1.boundingSphere.centerWorld)){
return false;
}
if(! v3.BoundingSphere.Intersects(this.boundingSphere, v1.boundingSphere)){
return false;
}
if(! v3.BoundingBox.Intersects(this.boundingBox, v1.boundingBox)){
return false;
}
if(! v2){
return true;
}
var v4 = this.boundingBox;
var v5 = v1.boundingBox;
if(! v5(v4.directions[0], v4, v5)){
return false;
}
if(! v5(v4.directions[1], v4, v5)){
return false;
}
if(! v5(v4.directions[2], v4, v5)){
return false;
}
if(! v5(v5.directions[0], v4, v5)){
return false;
}
if(! v5(v5.directions[1], v4, v5)){
return false;
}
if(! v5(v5.directions[2], v4, v5)){
return false;
}
if(! v5(v3.Vector3.Cross(v4.directions[0], v5.directions[0]), v4, v5)){
return false;
}
if(! v5(v3.Vector3.Cross(v4.directions[0], v5.directions[1]), v4, v5)){
return false;
}
if(! v5(v3.Vector3.Cross(v4.directions[0], v5.directions[2]), v4, v5)){
return false;
}
if(! v5(v3.Vector3.Cross(v4.directions[1], v5.directions[0]), v4, v5)){
return false;
}
if(! v5(v3.Vector3.Cross(v4.directions[1], v5.directions[1]), v4, v5)){
return false;
}
if(! v5(v3.Vector3.Cross(v4.directions[1], v5.directions[2]), v4, v5)){
return false;
}
if(! v5(v3.Vector3.Cross(v4.directions[2], v5.directions[0]), v4, v5)){
return false;
}
if(! v5(v3.Vector3.Cross(v4.directions[2], v5.directions[1]), v4, v5)){
return false;
}
if(! v5(v3.Vector3.Cross(v4.directions[2], v5.directions[2]), v4, v5)){
return false;
}
return true;
});
