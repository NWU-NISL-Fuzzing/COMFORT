var v0 = (function (v1, v2, v3){
var v4 = v3(314);
(v1.exports) = (function (v1){
var v2 = this.__data__, v3 = v4(v2, v1);
return ((v3) < (0)) ? (void 0) : (v2[v3][1]);
});
});
// GenBlkBrick
for((v1) = 0;(v1) < (v1);v1++){
// GenBlkBrick
for((v2) = 2;(v2) <= (v1);v2++){
var v3 = ((v1) + (v2)) / (v2);
}
// GenBlkBrick
for(var v0 in Object){
if(((v3) >= (10)) && ((v3) <= (100))){
(v3) = ('0') + (v3);
}else {
if(((v3) >= (0)) & ((v3) <= (9))){
(v3) = ('00') + (v3);
}
}
(v3) += v4;
}
}
// GenBlkBrick
for((v5) = 0;(v5) < (100);v5++){
{
if((v3) === (6)){
break ;
}
(v5) += v3;
}
{
if((v5) > (5)){
(v3) = (v3) + (v2);
break ;
}
}
}
if((isNaN(v1)) || ((v1) === (Infinity))){
(v6) = (isNaN(v1)) ? (1) : (0);
(v7) = v3;
}else {
(v7) = Math.floor((Math.log(v1)) / (Math.LN2));
if(((v1) * ((v7) = Math.pow(2, - v7))) < (1)){
v7--;
(v7) *= 2;
}
if(((v7) + (v5)) >= (1)){
(v1) += (v4) / (v7);
}else {
(v1) += (v4) * (Math.pow(2, (1) - (v5)));
}
if(((v1) * (v7)) >= (2)){
v7++;
(v7) /= 2;
}
if(((v7) + (v5)) >= (v3)){
(v6) = 0;
(v7) = v3;
}else {
if(((v7) + (v5)) >= (1)){
(v6) = (((v1) * (v7)) - (1)) * (Math.pow(2, v10));
(v7) = (v7) + (v5);
}else {
(v6) = ((v1) * (Math.pow(2, (v5) - (1)))) * (Math.pow(2, v10));
(v7) = 0;
}
}
}
if((v7) === (v5)){
(v8) = 0;
(v9) = 0;
}else {
var v10 = (v5) - (v7);
(v9) = ((v4) <= (0.5)) ? ((v10) / ((v5) + (v7))) : ((v10) / (((2) - (v5)) - (v7)));
switch(v5){
}
(v8) /= 6;
}
var v11 = (function (v1, v2){
if((! v2) || ((v2.sc) == ('undefined'))){
return;
}
v1.scale(v2.sc, v2.sc);
return v1;
});
(v12) = v11(v7, v3, v8);
while((v0) < (v7)){
if((v2[v0]) != (0xffffffff)){
v0++;
continue ;
}
(v13) = (v0) - (v4);
(v5[(v2) + (v4)]) = v13;
v13++;
v0++;
while((v0) < (v7)){
if((v2[v0]) != (0xffffffff)){
(v5[(v2) + (v5)]) = v13;
(v2) += v12;
v0++;
(v13) = - 1;
break ;
}else {
v13++;
v0++;
}
}
}
