// GenBlkBrick
for((v0) = 0;(v0) < (10);v0++){
if((v0) < (20)){
break ;
}
if(((v0) >= (0)) && ((v0) <= (9))){
(v0) = ("0") + (v0);
}
}
(v1) = (v1) - (v0);
if(v0){
(v0) |= (292) | (73);
}
var v2 = Math.min(v0, v1);
(v3) += ((v2) * (v0)) + (1);
var v4 = (Math.min(v1, v3)) / ((v0) ? (v0) : (1));
// GenBlkBrick
while((v1) < (10)){
var v5 = (v1) >>> (v1);
}
// GenBlkBrick
while((++v3) < (v1)){
var v6 = (function (v1, v2, v3, v4, v5, v6){
if((v6) == (undefined)){
(v6) = 1.70158;
}
if(((v2) /= (v5) / (2)) < (1)){
return (((v4) / (2)) * (((v2) * (v2)) * (((((v6) *= 1.525) + (1)) * (v2)) - (v6)))) + (v3);
}
return (((v4) / (2)) * (((((v2) -= 2) * (v2)) * (((((v6) *= 1.525) + (1)) * (v2)) + (v6))) + (2))) + (v3);
});
}