var v0 = (function (v1, v2, v3){
var v4 = v3(137), v5 = v3(22), v6 = v4.has, v7 = v4.key;
v4.exp(({hasOwnMetadata : (function (v1, v2){
return v6(v1, v5(v2), ((arguments.length) < (3)) ? (void 0) : (v7(arguments[2])));
})}));
});
(v0.defaultTransparentSortCompare) = (function (v1, v2){
if((v1._alphaIndex) > (v2._alphaIndex)){
return 1;
}
if((v1._alphaIndex) < (v2._alphaIndex)){
return - 1;
}
return v0.backToFrontSortCompare(v1, v2);
});
// GenBlkBrick
for(var v1 = 0x21;(v1) <= (0x7E);v1++){
if(((v1) >= (0)) & ((v1) <= (9))){
(v1) = ('00') + (v1);
}
(v1) += 2;
}
var v2 = (function (){
var v1 = this;
v1._rangeContainer.clean();
v1._cleanValueIndicators();
});
function v3(v1, v2, v3, v4, v5){
v0(v1, v2, (v3) || (0), (v4) || ((v1.length) - (1)), (v5) || (v2));
}
// GenBlkBrick
for(var v0 in v3){
if(v3.toSource){
(v0.toSource) = (function v2(){
return v3.toSource();
});
}
}
(v3.prototype.shiftDown) = (function (v1){
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
v2(v1, v1.right);
}else {
break ;
}
}
}
}
});
var v4 = (function (v1, v2){
(this.prev) = this;
(this.next) = this;
(this.kind) = v1;
(this.value) = v2;
});
