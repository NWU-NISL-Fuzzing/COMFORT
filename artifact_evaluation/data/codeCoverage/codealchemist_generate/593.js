// GenBlkBrick
for((v0) = 0;(v0) < (16);(v0) = (v0) + (1)){
{
var v1 = 0;
for(var v2 = 0;((v2) + (v0)) < (v3);v2++){
if((v4[(v2) + (v0)].area) > (v4[v2].area)){
var v5 = v4[(v2) + (v0)];
(v4[(v2) + (v0)]) = v4[v2];
(v4[v2]) = v5;
v1++;
}
}
if((v0) == (1)){
if((v1) == (0)){
break ;
}
}else {
(v0) = Math.floor(((v0) * (10)) / (13));
}
}
{
for(var v3 = 0;(v3) < (v1);v3++){
(v2[v1][v3]) ^= v4[((v5) * (4)) + (v3)][v1];
}
}
}
(v4) = ((- v3) * (v0)) + ((v1) * (v2));
(v0) += ((v2) * (v4)) + (1);
{
(v3) /= v0;
(v1) /= v0;
(v2) /= v0;
}
if((v1) == (2)){
(v5) = "";
}
var v6 = (function (v1, v2){
(v1) = this.getUtoTmapping(v1);
return this.getPoint(v1, v2);
});
while(v1--){
new v6();
}
function v7(v1, v2, v3){
(v1) += 1;
return (v1) > (10);
}
