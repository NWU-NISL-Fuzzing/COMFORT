var v0 = (function (v1, v2){
return (function (){
return [];
});
});
// GenBlkBrick
for(var v1 = 5;(v1) < (10);v1++){
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
v0(v2);
if((! v0) || ((v0) < (Math.abs(v2)))){
(v0) = v2;
(v4) = (v1) / (4);
}else {
(v4) = ((v1) / ((2) * (Math.PI))) * (Math.asin((v2) / (v0)));
}
var v5 = (v4) + (v1);
(v6) = v0(v5, v4, v2);
(v7) = (v3) ? (v0(v1, v3)) : (('') + (Math.round(v1))).split('.');
(v7[v4]) = v2;
