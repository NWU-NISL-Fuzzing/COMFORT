var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("fafd7bd5d04f28450c246f0ce71bfedc.svg");
});
// GenBlkBrick
for(var v1 = 0, v2 = 0, v3 = 0, v4 = 0, v5 = 0, v6 = (1) / (3), v7 = 0;(v7) < (v7);++v7){
{
if((v3) > (5)){
(v4) = (v4) + (v2);
break ;
}
}
}
if((v2) !== (0)){
(v3) /= v2;
(v6) /= v2;
(v4) /= v2;
}
if((isNaN(v4)) || ((v4) === (Infinity))){
(v8) = (isNaN(v4)) ? (1) : (0);
(v9) = v2;
}else {
(v9) = Math.floor((Math.log(v4)) / (Math.LN2));
if(((v4) * ((v7) = Math.pow(2, - v9))) < (1)){
v9--;
(v7) *= 2;
}
if(((v9) + (v1)) >= (1)){
(v4) += (v3) / (v7);
}else {
(v4) += (v3) * (Math.pow(2, (1) - (v1)));
}
if(((v4) * (v7)) >= (2)){
v9++;
(v7) /= 2;
}
if(((v9) + (v1)) >= (v2)){
(v8) = 0;
(v9) = v2;
}else {
if(((v9) + (v1)) >= (1)){
(v8) = (((v4) * (v7)) - (1)) * (Math.pow(2, v10));
(v9) = (v9) + (v1);
}else {
(v8) = ((v4) * (Math.pow(2, (v1) - (1)))) * (Math.pow(2, v10));
(v9) = 0;
}
}
}
var v10 = (function (v1, v2, v3){
var v4;
(v4) = [];
for(var v5 = 0;(v5) < (v3);v5++){
var v6 = v1.slice((v2) + ((v5) - (1)), (v2) + (v5));
v4.push(v6);
(v3) -= v0(v6);
}
return [];
});
(v11) = v0(v5, v7, v3);
for(var v12 = 0;(v12) <= (v1);(v11) += v3[v12++]){
;
}
{
(v13) = (v11) === (1);
}
