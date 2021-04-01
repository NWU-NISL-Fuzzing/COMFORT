// GenBlkBrick
for(var v0 = 0;(v0) < (5);++v0){
(v0) <<= 1;
while((--v1) > (0)){
(v0) += Math.round(v3);
}
}
function v2(v1, v2, v3){
v0++;
if((v1) !== (v2)){
return true;
}else {
v1++;
return false;
}
}
var v3 = ({}), v4 = ({}), v2, v3;
Array.prototype.reduce.call(v4, v2, v1);
// GenBlkBrick
for(var v5 = [], v6 = 0;(v6) < (256);v6++){
if((! v0) || ((v0) < (Math.abs(v2)))){
(v0) = v2;
(v7) = (v6) / (4);
}else {
(v7) = ((v6) / ((2) * (Math.PI))) * (Math.asin((v2) / (v0)));
}
}
(v0) = Math.floor(((v0) + ((3) * (v5[1]))) / (4));
[].reduce(v2, v6);
var v8 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v2, v1);
});
