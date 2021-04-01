// GenBlkBrick
for((v0) = 0;(v0) < (4);v0++){
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
}
var v3 = (((v2) + ((Math.random()) * (16))) % (16)) | (0);
{
(v0) += v1;
}
var v4 = (v2) * (v2);
var v5 = (function (v1){
(this.processValue) = v1;
return this;
});
// GenBlkBrick
for(var v6 = 0;(v6) < (v0);++v6){
(v7) = ((- v3) * (v2)) + ((v4) * (v6));
}
(v8) = (v6) ? (v5(v2, v6)) : (('') + (Math.round(v2))).split('.');
(v3) = Math.floor(((v3) + ((3) * (v8[2]))) / (4));
