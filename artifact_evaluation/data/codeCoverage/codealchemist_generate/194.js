var v0 = (function (v1){
return ((("number") === (typeof v1)) && (isFinite(v1))) && ((Math.floor(v1)) === (v1));
});
// GenBlkBrick
for(var v1 = [], v2 = 0;(256) > (v2);v2++){
// GenBlkBrick
for(var v3 = 6;(v3) < (10);v3++){
{
var v4 = 0;
for(var v5 = 0;((v5) + (v3)) < (v3);v5++){
if((v4[(v5) + (v3)].area) > (v4[v5].area)){
var v5 = v4[(v5) + (v3)];
(v4[(v5) + (v3)]) = v4[v5];
(v4[v5]) = v5;
v4++;
}
}
if((v3) == (1)){
if((v4) == (0)){
break ;
}
}else {
(v3) = Math.floor(((v3) * (10)) / (13));
}
}
}
(v6) = (v3) + (v2);
}
var v7 = ((v6) * (v5)) - ((v4) * (v3));
(v8) = v0(v3, v5, v7);
while((++v2) < (v3)){
var v2 = v3[v2];
if(v4(v2, v2, v3)){
(v1[v6++]) = v2;
}
}
for(var v9 = 0;(v9) < (v1);v9++){
(v1[v9]) = v9;
}
(v10) = v0(v5, v9, v4);
while((v9) < (10)){
v9++;
if((v3) < (20)){
break ;
}
if((v9) > (10)){
(v3) = 200;
v9++;
}
}
