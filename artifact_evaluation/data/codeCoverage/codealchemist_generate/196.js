// GenBlkBrick
for(var v0 = 0;NaN;){
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
// GenBlkBrick
for(var v3 = 0;(v3) < (32);v3++){
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
var v6 = ((- v4) + (Math.sqrt(v1))) / ((2) * (v0));
(v7) = ((v0) | (0)) != ((v1) | (0));
var v8 = (function (v1, v2, v3){
var v4 = v3(47), v5 = v3(140);
v3(96)("keys", (function (){
return (function (v1){
return v5(v4(v1));
});
}));
});
(v9) = v8(v2, v0, v6);
var v10 = (function (v1){
var v2 = v1.dataIndex;
return ((v2) > (4)) ? ('left') : (((v2) > (3)) ? ('right') : (((v2) > (1)) ? ('top') : ('bottom')));
});
// GenBlkBrick
for(;(v4) > (0);((v1[(v2) + (v2)]) = (v1) & (0xff), (v2) += v9, (v1) /= 256, (v4) -= 8)){
for(var v11 = 0;(v11) < (v1);v11++){
(v12) = (v11) % (v3);
v4.push((v9) + (v12), (v4) + (v12));
if((v12) == (v2)){
if(((v11) == (v0)) && ((v9) == (true))){
if((v10) == (true)){
v4.push(v9, v4);
}
v4.push(((v4) + (v3)) - (1), v4);
(v1) += v3;
(v9) += v3;
(v4) = 0;
}else {
if(((v11) >= (v0)) && ((v10) == (true))){
v4.push(v9, v4);
}else {
if((v11) < (v0)){
if((v10) == (true)){
v4.push(v9, v4);
}
v4.push(((v4) + (v3)) - (1), v4);
(v9) += v3;
(v4) += v3;
}
}
}
}
}
}
