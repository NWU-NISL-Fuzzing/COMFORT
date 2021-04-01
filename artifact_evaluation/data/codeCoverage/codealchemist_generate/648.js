// GenBlkBrick
for(var v0 = 0;(v0) < (10);++v0){
// GenBlkBrick
for((v1) = 1;(v1) < (10);v1++){
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
if((v1) > (5)){
(v2) = (v2) + (v2);
break ;
}
}
}
// GenBlkBrick
for((((v2) < (0)) && (((v2) += v0) < (0))) && ((v2) = 0);(v2) < (v0);++v2){
{
v0++;
if((v2) < (20)){
break ;
}
if((v0) > (10)){
(v2) = 200;
v0++;
}
}
}
(v1) = (~ v1) + (((v1) << (15)) & (4294934528));
(v4) = (v3) << (v0);
var v5 = (function (v1, v2){
(v1.default) = v2.default.extend(({title : "Delete Invoice"}));
});
if((isNaN(v4)) || ((v4) === (Infinity))){
(v6) = (isNaN(v4)) ? (1) : (0);
(v7) = v1;
}else {
(v7) = Math.floor((Math.log(v4)) / (Math.LN2));
if(((v4) * ((v7) = Math.pow(2, - v7))) < (1)){
v7--;
(v7) *= 2;
}
if(((v7) + (v0)) >= (1)){
(v4) += (v3) / (v7);
}else {
(v4) += (v3) * (Math.pow(2, (1) - (v0)));
}
if(((v4) * (v7)) >= (2)){
v7++;
(v7) /= 2;
}
if(((v7) + (v0)) >= (v1)){
(v6) = 0;
(v7) = v1;
}else {
if(((v7) + (v0)) >= (1)){
(v6) = (((v4) * (v7)) - (1)) * (Math.pow(2, v10));
(v7) = (v7) + (v0);
}else {
(v6) = ((v4) * (Math.pow(2, (v0) - (1)))) * (Math.pow(2, v10));
(v7) = 0;
}
}
}
var v8 = (((v2) * (v1)) - ((v4) * (v3))) / (v6);
(v9) = v5(v0, v3, v2);
