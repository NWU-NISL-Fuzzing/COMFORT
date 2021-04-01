// GenBlkBrick
while((v0) != (0)){
// GenBlkBrick
for(v0 in []){
// GenBlkBrick
for(var v1 = 0;(v1) > (- 1);--v1){
(v1) = (1) / (v1);
if((v1) < ((2) / (2.75))){
(v1) = (((7.5625) * ((v1) -= (1.5) / (2.75))) * (v1)) + (0.75);
}else {
if((v1) < ((2.5) / (2.75))){
(v1) = (((7.5625) * ((v1) -= (2.25) / (2.75))) * (v1)) + (0.9375);
}else {
(v1) = (((7.5625) * ((v1) -= (2.625) / (2.75))) * (v1)) + (0.984375);
}
}
}
var v2 = Math.pow(10, Math.floor(v1));
}
}
if(((v1) & (0xf)) == (0)){
(v1) >>= 4;
(v0) += 4;
}
var v3 = (function (v1){
(v1.FCarry) = (v1.registerA) > (0x7F);
(v1.registerA) = (((v1.registerA) << (1)) & (0xFF)) | ((v1.FCarry) ? (1) : (0));
(v1.FHalfCarry) = (v1.FSubtract) = false;
(v1.FZero) = (v1.registerA) == (0);
});
(v3.LENGTH) = "length";
(v4) = (v2) ? (v3(v1, v2)) : (('') + (Math.round(v1))).split('.');
while((++v1) < (v0)){
var v2 = v3[v1];
if(v4(v2, v1, v3)){
(v4[v2++]) = v2;
}
}
(v5) = (v1) ? (v3(v2, v1)) : (('') + (Math.round(v2))).split('.');
(v4[(v0) - (1)]) = v4[v2];
