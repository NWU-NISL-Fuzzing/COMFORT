// GenBlkBrick
for(var v0 = 0;(v0) < (3);++v0){
var v1 = (function (){
var v1 = ({});
Object.defineProperty(v1, - Infinity, ({}));
return v1.hasOwnProperty("-Infinity");
});
}
Object.defineProperty(v1.prototype, "transparentSortCompareFn", ({set : (function (v2){
if(v2){
(this._transparentSortCompareFn) = v2;
}else {
(this._transparentSortCompareFn) = v1.defaultTransparentSortCompare;
}
(this._renderTransparent) = this.renderTransparentSorted;
}), enumerable : true, configurable : true}));
var v2 = (function (v1, v2){
"use asm";
var v3 = (v2.foo) | (0);
});
var v3 = ({source : [], formatDropdownItem : v2, formatResult : v1});
(v1.prototype.type) = null;
Array.prototype.reduce.call(v3, v2, v0);
var v4 = (function (v1, v2, v3){
var v4 = v3(685), v5 = v3(2206), v6 = v3(471);
(v1.exports) = (function (v1){
return (v6(v1)) ? (v4(v1, ! 0)) : (v5(v1));
});
});
function v5(v1, v2){
if((v1) === (v3)){
return v1;
}
var v4 = v1;
if(v2){
if((v1.left.left.size) > (v1.right.size)){
(v1) = v4(v1, v1.left);
}else {
if((v1.left.right.size) > (v1.right.size)){
v1(v1.left, v1.left.right);
(v1) = v4(v1, v1.left);
}
}
}else {
if((v1.right.right.size) > (v1.left.size)){
(v1) = v1(v1, v1.right);
}else {
if((v1.right.left.size) > (v1.left.size)){
v4(v1.right, v1.right.left);
(v1) = v1(v1, v1.right);
}
}
}
if((v1) === (v4)){
return v1;
}
v5(v1.left, false);
v5(v1.right, true);
(v1) = v5(v1, true);
(v1) = v5(v1, false);
return v1;
}
