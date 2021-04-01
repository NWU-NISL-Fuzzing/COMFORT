// GenBlkBrick
for(((v0) = v1, (v2) = v3);(v0) < (v2);(v0) += v4){
var v0 = (function (v1){
if(v1){
if(v1.primitiveType){
return v1.getStringValue();
}else {
var v2 = /(?:\(['|"]?)(.*?)(?:['|"]?\))/;
var v3 = v2.exec(v1);
if(v3){
return v3[1];
}
}
}
return null;
});
}
var v1 = (function (v1, v2, v3){
"use strict";
Object.defineProperty(v2, "__esModule", ({value : true}));
var v5 = (Object.assign) || ((function (v6){
for(var v7 = 1;(v7) < (arguments.length);v7++){
var v9 = arguments[v7];
for(var v10 in v9){
if(Object.prototype.hasOwnProperty.call(v9, v10)){
(v6[v10]) = v9[v10];
}
}
}
return v6;
}));
(v2.default) = (function (v11, v12){
return v5(({}), v11, v12);
});
});
// GenBlkBrick
for(var v0 in v0){
v0(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
var v2 = (function (){
return this._offPosition;
});
}
// GenBlkBrick
for((v3) = (v4) = 0;((0) <= (v2)) ? ((v4) < (v2)) : ((v4) > (v2));(v3) = ((0) <= (v2)) ? (++v4) : (--v4)){
var v5 = Math.sqrt(v3);
var v6 = Math.acos(Math.max(- 1, Math.min(1, (v5) / (v3))));
}
// GenBlkBrick
for(var v0 in v1.prototype){
var v7 = (function (v1){
return ((v1.type) === ('BinaryExpression')) && ((v1.operator) === ('+'));
});
(v1.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v2(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v2(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v7(v5);
return v5;
});
}
function v8(v1, v2, v3){
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
(v4) += ((v7(v3)) + (v2(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
(v9) = (v5) + (v4);
var v10 = ((- v6) - (Math.sqrt(v4))) / ((2) * (v3));
