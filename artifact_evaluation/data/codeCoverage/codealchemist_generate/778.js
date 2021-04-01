var v0 = (function (v1){
(v1) = (v1) | (0);
(v1) = ((v1) & (2147483647)) | (0);
return (((v1) | (0)) / (1)) | (0);
});
// GenBlkBrick
for(v0 in []){
// GenBlkBrick
for(var v1 = 3;(v1) >= (0);v1--){
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
if((v1) > (5)){
(v3) = (v3) + (v2);
break ;
}
}
(v4) = v0(v2, v3, v1);
{
(v5) = (isNaN(v1)) ? (1) : (0);
(v6) = v2;
}
while((v3--) > (0)){
v0();
}
(v7) = (v5) ? (v0(v3, v5)) : (('') + (Math.round(v3))).split('.');
// GenBlkBrick
for(var v8 = 1;(v8) <= (20);v8++){
var v9 = ((- v2) + (Math.sqrt(v1))) / ((2) * (v8));
// GenBlkBrick
while((v2) <= (v1)){
{
if((v4) > (5)){
(v5) = (v5) + (v2);
break ;
}
}
// GenBlkBrick
for(;(~ ~ v4) != (4);(v4) = ((v4) + (1)) | (0)){
if((v4) < (20)){
break ;
}
}
}
}
(v10) = (v1) ? (v0(v5, v1)) : (('') + (Math.round(v5))).split('.');
