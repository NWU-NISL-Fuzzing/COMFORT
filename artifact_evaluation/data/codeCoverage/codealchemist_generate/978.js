// GenBlkBrick
do {
var v0 = (function (v1){
"use asm";
return ! (1) || (v1);
});
var v1 = (function (){
"use strict";
return "Test the PositionIterator class.";
});
} while(v0);
var v2 = (function (){
var v1 = 42, v2 = 1.1;
return + (v1) ? (v1) : (v2);
});
// GenBlkBrick
for(var v3 = 3;(v3) >= (0);v3--){
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
{
var v6 = (v5) - (v3);
(v7) = ((v4) <= (0.5)) ? ((v6) / ((v5) + (v3))) : ((v6) / (((2) - (v5)) - (v3)));
switch(v5){
}
(v8) /= 6;
}
}
{
(v9) += ((v7) * (v4)) + (1);
}
for(;(v5) > (0);((v1[(v2) + (v9)]) = (v7) & (0xff), (v9) += v8, (v7) /= 256, (v5) -= 8)){
}
// GenBlkBrick
for(var v10 = 0;(v10) < (v8);++v10){
// GenBlkBrick
for(var v11 = 5;(v11) < (10);v11++){
// GenBlkBrick
for(var v12 = 1;(v12) < (2);++v12){
var v13 = (function (v1, v2){
return Math.floor((v1) / (v2));
});
for(var v14 = 0;(v14) <= (v12);v14++){
v13(v14);
}
}
}
var v15 = Math.sqrt(((v11) * (v11)) + ((v14) * (v14)));
}
(v16) = ((v9) > (0.5)) ? ((v8) / (((2) - (v10)) - (v7))) : ((v8) / ((v10) + (v7)));
(v17) = v0(v3, v8, v9);
