// GenBlkBrick
while((v0) != (0)){
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
var v3 = (function (v1){
return ((v1) == (null)) ? ("") : ((v1.charAt(0).toUpperCase()) + (v1.slice(1)));
});
(v4) = (v2) ? (v3(v0, v2)) : (('') + (Math.round(v0))).split('.');
var v5 = (function (){
return this.flatCoordinates.slice((this.flatCoordinates.length) - (this.stride));
});
for(var v6 = 0;(v6) < (v4.length);v6++){
(v2[v2]) += v4[v6][v2];
}
(v3[v4[v0]]) = (v3[v4[v0].substring(0, 3)]) = v5(v0);
var v7 = parseInt(v0, 10);
// GenBlkBrick
while((v7) < ((v0) & (~ 0x1))){
(v8) = ((- v1) * (v2)) + ((v0) * (v7));
(v2.p) &= 1;
}
