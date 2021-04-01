var v0 = (function (v1, v2, v3){
v3(111)("Float64", 8, (function (v1){
return (function (v2, v3, v4){
return v1(this, v2, v3, v4);
});
}));
});
var v1 = (function (){
for(var v1 = [], v2 = 0;(v2) < (this._sections.length);v2++){
for(var v3 = 0;(v3) < (this._sections[v2].consumer.sources.length);v3++){
v1.push(this._sections[v2].consumer.sources[v3]);
}
}
return v1;
});
(v0.prototype.incrementReferences) = (function (){
this._references++;
});
(v1.prototype.ensureAborted) = (function (){
if(this.timer){
this.clear(this.timer);
(this.timer) = null;
}
});
(v1.CURVE) = "curve";
// GenBlkBrick
for(var v0 in v0.prototype){
var v2 = (function (v1, v2, v3){
"use strict";
var v4 = v3(883), v5 = v3(216);
(v1.exports) = v3(346)("Map", (function (v1){
return (function (){
return v1(this, ((arguments.length) > (0)) ? (arguments[0]) : (void 0));
});
}), ({get : (function (v1){
var v2 = v4.getEntry(v5(this, "Map"), v1);
return (v2) && (v2.v);
}), set : (function (v1, v2){
return v4.def(v5(this, "Map"), ((0) === (v1)) ? (0) : (v1), v2);
})}), v4, ! 0);
});
(v2.prototype.removeNode) = (function (v1){
this.shiftDown(v1);
var v2 = v1.parent;
if((v2.left) === (v1)){
(v2.left) = v3;
}else {
if((v2.right) === (v1)){
(v2.right) = v3;
}
}
this.removeLeafNode(v1);
(this._root) = v0(v2);
return v1;
});
}
// GenBlkBrick
for((v3) = 0;(v3) < (v1);(v3) = (v3) + (1)){
(v3) = (((7.5625) * ((v3) -= (2.625) / (2.75))) * (v3)) + (0.984375);
var v4 = (function (v1){
var v2 = v1.length;
if((v2) === (0)){
return NaN;
}
var v4 = 0, v5 = - 1;
while((++v5) < (v2)){
(v4) += ((v1[v5]) - (v4)) / ((v5) + (1));
}
return v4;
});
}
(v1.prototype.isInFrustum) = (function (v1){
for(var v2 = 0;(v2) < (6);v2++){
if((v1[v2].dotCoordinate(this.centerWorld)) <= (- this.radiusWorld)){
return false;
}
}
return true;
});
