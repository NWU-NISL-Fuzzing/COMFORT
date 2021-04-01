var v0 = (function (){
var v1 = this.spy();
var v2 = ({a : 12});
var v3 = ({data : "test"});
this.__m.on("get", "/", v1, v2);
this.__m.emit("get", "/", null, v3);
this.assertCalledOnce(v1);
this.assertCalledOn(v1, v2);
this.assertCalledWith(v1, ({customData : v3, params : ({}), path : "/"}));
});
(v0.RemoveTagsFrom) = (function (v1, v2){
if(! v0.HasTags(v1)){
return;
}
var v3 = v2.split(" ");
for(var v4 in v3){
v0._RemoveTagFrom(v1, v3[v4]);
}
});
(v0.prototype.toString) = (v0.prototype.toHTML) = (function (){
return ('') + (this.string);
});
// GenBlkBrick
for(++v1;--v1;(v1) = ((((v1) %= (0x7fffffff) + (1)) & (0x40000000)) === (0x40000000)) ? ((v1) * (2)) : (((((v1) - (0x40000000)) * (2)) + (0x7fffffff)) + (1))){
var v2 = (function (v1){
this.alignTime_(((this.count_) * (1000)) * (60), v1);
});
}
// GenBlkBrick
for(var v0 = v1;(v0) <= (v2);v0++){
var v3 = (function (v1, v2, v3){
(v1.exports) = ! v3(204)((function (){
return (7) != (Object.defineProperty(({}), "a", ({get : (function (){
return 7;
})})).a);
}));
});
var v4 = v3("hello world");
}
(v0.Parse) = (function (v1, v2){
var v3 = v2.getLightByID(v1.lightId);
var v4 = new v0(v1.mapSize, v3);
for(var v5 = 0;(v5) < (v1.renderList.length);v5++){
var v6 = v2.getMeshesByID(v1.renderList[v5]);
v6.forEach((function (v7){
v4.getShadowMap().renderList.push(v7);
}));
}
if(v1.usePoissonSampling){
(v4.usePoissonSampling) = true;
}else {
if(v1.useVarianceShadowMap){
(v4.useVarianceShadowMap) = true;
}else {
if(v1.useBlurVarianceShadowMap){
(v4.useBlurVarianceShadowMap) = true;
if(v1.blurScale){
(v4.blurScale) = v1.blurScale;
}
if(v1.blurBoxOffset){
(v4.blurBoxOffset) = v1.blurBoxOffset;
}
}
}
}
if((v1.bias) !== (undefined)){
(v4.bias) = v1.bias;
}
(v4.forceBackFacesOnly) = v1.forceBackFacesOnly;
return v4;
});
for(var v5 = 0;(v5) < (v1);v5++){
(v4) += v0();
}
(v2.formatPropertyName) = v3;
