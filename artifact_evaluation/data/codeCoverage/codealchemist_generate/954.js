// GenBlkBrick
for(;(v0) > (0);(v0) = (v0) - (1)){
(v0) = ((v0) & (0x01)) << (v1);
}
for((v1) = (v0) - (1);(v1) >= (0);--v1){
(v2[v1]) = 0;
}
// GenBlkBrick
for(var v2 = 0;(v2) < (100);++v2){
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
(v5) = (function (){
(v1) = (v1) + (1);
return v1;
});
if((v3) !== (0)){
(v4) /= v3;
(v1) /= v3;
(v2) /= v3;
}
// GenBlkBrick
for(var v6 = 0;(v6) < (10);++v6){
{
(v7) += ((v6) * (v3)) + (1);
}
if(v6){
while(((v6) & (1)) == (0)){
(v6) >>= 1;
v2++;
}
}
}
if((v3) == (2)){
(v6) += v2[v3];
(v6) += v2[v4];
(v6) += v2[v0];
(v6) += v2[v7];
}
(v8) = ((v4) * (v3)) - ((v1) * (v2));
