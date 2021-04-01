// GenBlkBrick
for(var v0 = 0;NaN;){
if((v0) < (20)){
break ;
}
}
var v1 = ((v1) | (0)) < ((v0) | (0));
// GenBlkBrick
for(var v2 = 1;(v2) <= (20);v2++){
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
var v5 = ((- v2) + (Math.sqrt(v3))) / ((2) * (v4));
}
var v6 = (function (v1, v2){
if(((((v2) === (0)) && ((v1.charCodeAt(0)) === (0x2F))) && ((v1.length) > (2))) && ((v1.charCodeAt((v1.length) - (1))) === (0x2F))){
(v1) = (v1) + ('*');
}
return v1;
});
v6(/(alias|status)$/i, "$1");
(v2) |= ((v2) >> (8)) & (16777215);
if((v4) > (v2)){
(v4) = (v1) ? (0) : (v2);
}
if((v3) > (v5)){
(v3) = (v1) ? (0) : (v5);
}
