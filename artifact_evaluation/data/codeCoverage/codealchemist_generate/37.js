var v0 = (function (){
var v1 = this.get('reporter');
if((this.get('exists')) && ((typeof v1.profile) === ("function"))){
v1.profile();
return true;
}
return false;
});
// GenBlkBrick
for(var v1 = 0;(v1) < (18);++v1){
if((v1) < (20)){
break ;
}
}
var v2 = (function (v1){
(this.snapToPixel_) = v1;
});
// GenBlkBrick
for((v3) = 0;(v3) < (1e6);v3++){
if(((v0) === (0)) && ((v3) < (0))){
(v3) = (v3) * (- 1);
}
if((v3) === (6)){
break ;
}
}
(v4) = (v1) ? (v0(v3, v1)) : (('') + (Math.round(v3))).split('.');
// GenBlkBrick
for(v0 in v1){
{
var v5 = 0;
for(var v6 = 0;((v6) + (v3)) < (v3);v6++){
if((v4[(v6) + (v3)].area) > (v4[v6].area)){
var v5 = v4[(v6) + (v3)];
(v4[(v6) + (v3)]) = v4[v6];
(v4[v6]) = v5;
v5++;
}
}
if((v3) == (1)){
if((v5) == (0)){
break ;
}
}else {
(v3) = Math.floor(((v3) * (10)) / (13));
}
}
}
(v7) = (v6) ? (v2(v1, v6)) : (('') + (Math.round(v1))).split('.');
(v0.BindLogDepth) = (function (v1, v2, v3){
if(v1["LOGARITHMICDEPTH"]){
v2.setFloat("logarithmicDepthConstant", (2.0) / ((Math.log((v3.activeCamera.maxZ) + (1.0))) / (Math.LN2)));
}
});
