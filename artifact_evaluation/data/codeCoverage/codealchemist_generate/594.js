var v0 = (function (v1, v2, v3){
return (v1.validate(v2, v3)) === (true);
});
(v0.prototype.identity) = (function (){
(this.alphaMultiplier) = (this.redMultiplier) = (this.greenMultiplier) = (this.blueMultiplier) = 1.0;
(this.alphaOffset) = (this.redOffset) = (this.greenOffset) = (this.blueOffset) = 0;
});
(v0.BLUE_MULTIPLIER) = "bM";
// GenBlkBrick
for(var v1 = 0;(v1) < (3);v1++){
{
var v2 = 0;
for(var v3 = 0;((v3) + (v1)) < (v3);v3++){
if((v4[(v3) + (v1)].area) > (v4[v3].area)){
var v5 = v4[(v3) + (v1)];
(v4[(v3) + (v1)]) = v4[v3];
(v4[v3]) = v5;
v2++;
}
}
if((v1) == (1)){
if((v2) == (0)){
break ;
}
}else {
(v1) = Math.floor(((v1) * (10)) / (13));
}
}
}
if((v3) < (0)){
(v3) = (360) + (v3);
}
var v4 = ((- v1) + (Math.sqrt(v3))) / ((2) * (v2));
// GenBlkBrick
for(var v5 = [], v6 = 0;(v6) < (256);v6++){
for(var v7 = 0;(v7) < (v5.length);v7++){
(v6) += v5[v7];
}
Object.defineProperty(v5, "length", ({value : 1}));
}
while((v2--) > (0)){
v0();
}
