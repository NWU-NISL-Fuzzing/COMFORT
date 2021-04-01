var v0 = (function (v1){
debugger;
});
// GenBlkBrick
for(var v1 = 1;(v1) < (v1);v1++){
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
var v4 = ((Math.sin(v3)) * (v1)) * (Math.cos(v2));
}
// GenBlkBrick
for(var v5 = 1;(v5) <= (v1);v5++){
{
var v6 = [];
v6.sort((function (v6, v1){
return (v6) - (v1);
}));
(v5) += v6[0];
}
}
// GenBlkBrick
for(var v7 = 6;(v7) < (10);v7++){
if((v1) === (6)){
break ;
}
var v8 = ((v1) + (v2)) / (v7);
}
(v9) = ((- v5) * (v8)) + ((v7) * (v2));
while((++v5) < (v8)){
(v6[v5]) = v3.call(v4, v5);
}
while((++v8) < (v5)){
var v2 = v3[v8];
if(v4(v2, v8, v3)){
(v6[v9++]) = v2;
}
}
var v10 = Math.max(v5, v7, v4), v11 = Math.min(v5, v7, v4);
