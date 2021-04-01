var v0 = (function (v1, v2, v3, v4, v5){
var v6, v7, v8, v9, v10, v11, v12, v13, v14, v15, v16, v17, v18;
if((typeof v5) === ('undefined')){
(v5) = 1;
}
if((typeof v3) === ('undefined')){
(v3) = 0x000000;
}
v1.lineStyle(v5, v3, 1);
if((typeof v4) === ("number")){
v1.beginFill(v4);
}
(v8) = null;
(v9) = null;
(v7) = 0;
while((v7) < (v2.length)){
(v16) = v2[v7];
(v17) = v16[0];
(v18) = v16[1];
if(((v17) !== (v8)) || ((v18) !== (v9))){
if((v7) === (0)){
v1.moveTo(v17, v18);
}else {
(v10) = v8;
(v11) = v9;
(v12) = v17;
(v13) = v18;
(v14) = v2[((v7) + (1)) % (v2.length)][0];
(v15) = v2[((v7) + (1)) % (v2.length)][1];
(v6) = (((v12) - (v10)) * ((v15) - (v11))) - (((v14) - (v10)) * ((v13) - (v11)));
if((v6) !== (0)){
v1.lineTo(v17, v18);
}
}
(v8) = v17;
(v9) = v18;
}
v7++;
}
if((typeof v4) === ("number")){
v1.endFill();
}
if(((v2.length) > (2)) && ((typeof v4) === ("number"))){
v1.moveTo(v2[(v2.length) - (1)][0], v2[(v2.length) - (1)][1]);
v1.lineTo(v2[0][0], v2[0][1]);
}
});
(v0._getRotateMode) = (function (v1){
switch(v1.toLocaleLowerCase()){
}
});
(v0.prototype.eval) = (function (){
return this;
});
// GenBlkBrick
for((v1) = 2;(v1) <= (v1);v1++){
(v1) <<= 1;
}
// GenBlkBrick
for(var v2 = 0;(v2) < (41);v2++){
// GenBlkBrick
for(var v3 = 0;(v3) < (18);++v3){
var v4 = (function (v1){
var v2 = v1.indexOf(':');
return ({from : v1.slice(0, v2), to : v1.slice((v2) + (1))});
});
}
// GenBlkBrick
for(;(v3) < ((v1) - (1));(v3) += 1){
{
var v5 = 0;
for(var v6 = 0;((v6) + (v3)) < (v3);v6++){
if((v4[(v6) + (v3)].area) > (v4[v6].area)){
var v5 = v4[(v6) + (v3)];
(v4[(v6) + (v3)]) = v4[v6];
(v4[v6]) = v5;
v5++;
}
}
if((v3) == (1)){
if((v5) == (0)){
break ;
}
}else {
(v3) = Math.floor(((v3) * (10)) / (13));
}
}
}
}
(v7) = v4(v1, v6, v5);
for(var v8 = 0;(v8) < (v1);v8++){
(v9) = (v8) % (v3);
v4.push((v5) + (v9), (v7) + (v9));
if((v9) == (v6)){
if(((v8) == (v3)) && ((v9) == (true))){
if((v10) == (true)){
v4.push(v5, v7);
}
v4.push(((v7) + (v3)) - (1), v7);
(v1) += v3;
(v5) += v3;
(v7) = 0;
}else {
if(((v8) >= (v3)) && ((v10) == (true))){
v4.push(v5, v7);
}else {
if((v8) < (v3)){
if((v10) == (true)){
v4.push(v5, v7);
}
v4.push(((v7) + (v3)) - (1), v7);
(v5) += v3;
(v7) += v3;
}
}
}
}
}
var v10 = Array(v3);
