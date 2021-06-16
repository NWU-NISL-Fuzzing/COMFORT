var v0 = (function (v1){
if((this.x) > (v1.x)){
(this.x) = v1.x;
}
if((this.y) > (v1.y)){
(this.y) = v1.y;
}
if((this.z) > (v1.z)){
(this.z) = v1.z;
}
if((this.w) > (v1.w)){
(this.w) = v1.w;
}
return this;
});
(v0.prototype.isInFrustum) = (function (v1){
if(! this.boundingSphere.isInFrustum(v1)){
return false;
}
return this.boundingBox.isInFrustum(v1);
});
(v0.INHERIT_TRANSLATION) = "inheritTranslation";
(v0.prototype.visitConditional) = (function (v1){
return v1.update(this.visit(v1.test), this.visit(v1.ifTrue), this.visit(v1.ifFalse));
});
Object.defineProperty(v0, "FILTER_VARIANCESHADOWMAP", ({get : (function (){
return v0._FILTER_VARIANCESHADOWMAP;
}), enumerable : true, configurable : true}));
// GenBlkBrick
for(var v1 = 1;(v1) < ((v1) - (1));v1++){
(v1) *= (Math.PI) / (v2);
}
// GenBlkBrick
for(var v2 = 0;(v2) < (9);v2++){
var v3 = (function (v1, v2, v3){
var v4 = v3(5099);
(v1.exports) = (function (v1, v2){
return (! ((null) == (v1)) || (! v1.length)) && ((v4(v1, v2, 0)) > (- 1));
});
});
var v4 = (function (){
return (this.__groups.length) === (0);
});
}
for(var v5 = 0;(v5) <= (v1);v5++){
v3(v5);
}
