var v0 = (v1) * (3);
var v1 = (function (){
this.toJSON(({}), (function (v1){
this.download(v1, "text/plain", "amCharts.json");
}));
});
// GenBlkBrick
for((v2) = (v3) = 0;((0) <= (v2)) ? ((v3) < (v2)) : ((v3) > (v2));(v2) = ((0) <= (v2)) ? (++v3) : (--v3)){
{
if((v3) === (6)){
break ;
}
(v2) += v3;
}
(v4) = (v2) === (0);
}
while(v0--){
new v1();
}
(v5) = (v0) ? (v1(v3, v0)) : (('') + (Math.round(v3))).split('.');
while(v2--){
new v1();
}
while((++v0) < (v3)){
(v5[v0]) = v3.call(v4, v0);
}
// GenBlkBrick
for((v6) = (v2) - (1);(v6) >= (0);v6--){
(v6) = ((v6) | ((v6) << (8))) & (16711935);
while((++v3) < (v1)){
(v2[v3]) = v6;
(v4[v3]) = (Math.sin(v6)) + ((((2) * (Math.random())) - (1)) * (v6));
(v6) += (v2) * ((1) + ((((2) * (Math.random())) - (1)) * (v8)));
}
}
