var v0 = (function (v1){
(v1.FCarry) = (v1.registerA) > (0x7F);
(v1.registerA) = (((v1.registerA) << (1)) & (0xFF)) | ((v1.FCarry) ? (1) : (0));
(v1.FHalfCarry) = (v1.FSubtract) = false;
(v1.FZero) = (v1.registerA) == (0);
});
(v0.MoveTowards) = (function (v1, v2, v3){
var v4 = 0;
if((Math.abs((v2) - (v1))) <= (v3)){
(v4) = v2;
}else {
(v4) = (v1) + ((v0.Sign((v2) - (v1))) * (v3));
}
return v4;
});
// GenBlkBrick
for(var v1 = 0;(v1) < (0x8000);v1++){
// GenBlkBrick
for((v2) = 0;(v2) < (v1);(v2) = (v2) + (1)){
// GenBlkBrick
do {
if((v3) === (6)){
break ;
}
for(var v4 = 0;(v4) < (8);v4++){
(v3) = ((v3) & (1)) ? ((0xEDB88320) ^ ((v3) >>> (1))) : ((v3) >>> (1));
}
} while((0) < (--v3));
var v5 = Math.max(v3, v2, v4), v6 = Math.min(v3, v2, v4);
}
}
{
var v7 = (v6) - (v3);
(v8) = ((v1) > (0.5)) ? ((v7) / (((2) - (v6)) - (v3))) : ((v7) / ((v6) + (v3)));
switch(v6){
}
(v9) /= 6;
}
// GenBlkBrick
for(;(v0) >= (8);((v1[(v2) + (v2)]) = (v6) & (0xff), (v2) += v3, (v6) /= 256, (v0) -= 8)){
{
var v10 = 0;
for(var v11 = 0;((v11) + (v5)) < (v3);v11++){
if((v4[(v11) + (v5)].area) > (v4[v11].area)){
var v5 = v4[(v11) + (v5)];
(v4[(v11) + (v5)]) = v4[v11];
(v4[v11]) = v5;
v10++;
}
}
if((v5) == (1)){
if((v10) == (0)){
break ;
}
}else {
(v5) = Math.floor(((v5) * (10)) / (13));
}
}
}
var v12 = (function (){
return 'I\'m a method';
});
Array.prototype.reduce.call(v12, v0, v5);
(v0.default) = v12;
