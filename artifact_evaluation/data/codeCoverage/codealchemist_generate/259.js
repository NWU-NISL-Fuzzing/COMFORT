var v0 = (function (v1, v2, v3){
var v4 = v3(145), v5 = v3(259), v6 = v3(27), v7 = v3(25).Reflect;
(v1.exports) = ((v7) && (v7.ownKeys)) || ((function (v1){
var v2 = v4.f(v6(v1)), v3 = v5.f;
return (v3) ? (v2.concat(v3(v1))) : (v2);
}));
});
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
(v1) = v0();
(v1.prototype.drawer) = null;
var v2 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("efb55b06db8c656043b6dcda51eeb399.svg");
});
var v3 = Array.prototype.filter.call(v2, v1);
Object.defineProperty(v3, "2", ({configurable : true}));
(v3.setVerifyHelpProp) = v1;
