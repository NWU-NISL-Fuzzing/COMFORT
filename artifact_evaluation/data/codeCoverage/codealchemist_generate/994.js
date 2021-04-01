var v0 = (function (){
return this.__gravatar;
});
(v0.getSphericalPolynomialFromHarmonics) = (function (v1){
var v2 = new v0();
(v2.x) = v1.L11.scale(1.02333);
(v2.y) = v1.L1_1.scale(1.02333);
(v2.z) = v1.L10.scale(1.02333);
(v2.xx) = v1.L00.scale(0.886277).subtract(v1.L20.scale(0.247708)).add(v1.L22.scale(0.429043));
(v2.yy) = v1.L00.scale(0.886277).subtract(v1.L20.scale(0.247708)).subtract(v1.L22.scale(0.429043));
(v2.zz) = v1.L00.scale(0.886277).add(v1.L20.scale(0.495417));
(v2.yz) = v1.L2_1.scale(0.858086);
(v2.zx) = v1.L21.scale(0.858086);
(v2.xy) = v1.L2_2.scale(0.858086);
v2.scale((1.0) / (Math.PI));
return v2;
});
Object.defineProperty(v0.prototype, "aspectRatio", ({get : (function (){
return (this.hResolution) / ((2) * (this.vResolution));
}), enumerable : true, configurable : true}));
var v1 = (function (v1){
(this.pos.y) = v1;
});
// GenBlkBrick
for((v2) = 0;(v2) < (1e3);v2++){
{
var v3 = 0;
for(var v4 = 0;((v4) + (v2)) < (v3);v4++){
if((v4[(v4) + (v2)].area) > (v4[v4].area)){
var v5 = v4[(v4) + (v2)];
(v4[(v4) + (v2)]) = v4[v4];
(v4[v4]) = v5;
v3++;
}
}
if((v2) == (1)){
if((v3) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
}
(v5) = (v2) ? (v0(v3, v2)) : (('') + (Math.round(v3))).split('.');
v5.push(({group1 : v3, group2 : 1, id : (((v3) * (9)) + (v4)) + (7)}));
Object.defineProperty(v5, "prop", ({get : v1, set : v0, enumerable : true, configurable : false}));
