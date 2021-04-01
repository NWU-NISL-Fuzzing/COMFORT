var v0 = (function (v1, v2){
(this.car) = v1;
(this.cdr) = v2;
});
// GenBlkBrick
for((v1) = 0;(v1) < (1e6);v1++){
var v2 = (function (v1){
(v1.FCarry) = ((v1.registerE) & (0x01)) == (0x01);
(v1.registerE) = ((v1.FCarry) ? (0x80) : (0)) | ((v1.registerE) >> (1));
(v1.FHalfCarry) = (v1.FSubtract) = false;
(v1.FZero) = (v1.registerE) == (0);
});
}
function v3(v1, v2, v3){
var v4 = '';
var v5;
for((v5) = 0;(v5) < (v1.length);v5++){
(v4) += v0(v3);
(v4) += v2(v1[v5], v8.delegate(v2, ({indent : v3})));
if((v5) < ((v1.length) - (1))){
(v4) += ',\n';
}
}
return v4;
}
for(var v4 = 0;(v4) <= (v1);v4++){
v3(v4);
}
// GenBlkBrick
for(var v5 = 1;(v5) <= (v1);v5++){
// GenBlkBrick
for(var v6 = 0;(v6) < (10000);v6++){
(v6) += (10) * (0.5);
}
}
if((isNaN(v6)) || ((v6) === (Infinity))){
(v7) = (isNaN(v6)) ? (1) : (0);
(v8) = v5;
}else {
(v8) = Math.floor((Math.log(v6)) / (Math.LN2));
if(((v6) * ((v7) = Math.pow(2, - v8))) < (1)){
v8--;
(v7) *= 2;
}
if(((v8) + (v1)) >= (1)){
(v6) += (v4) / (v7);
}else {
(v6) += (v4) * (Math.pow(2, (1) - (v1)));
}
if(((v6) * (v7)) >= (2)){
v8++;
(v7) /= 2;
}
if(((v8) + (v1)) >= (v5)){
(v7) = 0;
(v8) = v5;
}else {
if(((v8) + (v1)) >= (1)){
(v7) = (((v6) * (v7)) - (1)) * (Math.pow(2, v10));
(v8) = (v8) + (v1);
}else {
(v7) = ((v6) * (Math.pow(2, (v1) - (1)))) * (Math.pow(2, v10));
(v8) = 0;
}
}
}
(v7) = ((v4) | (0)) / ((v7) | (0));
(v9) = (v7) ? (v3(v1, v7)) : (('') + (Math.round(v1))).split('.');
