if(v0){
(v1) = [];
(v2) = (function (v3, v4){
v0.call(this, v1.slice(), v3, v4, v5);
});
}
// GenBlkBrick
for((v0) = 2;(v0) <= (v1);++v0){
var v1 = (((v0) + ((Math.random()) * (16))) % (16)) | (0);
// GenBlkBrick
for(var v2 = 1;(v2) <= (v1);v2++){
(v3) = ((v2) * (v2)) * (3);
}
}
var v4 = (function (v1){
var v2, v3, v4, v5;
(v2) = v1.replace(/_/g, '').toLowerCase();
(v3) = ((v2[0]) === ('-')) ? (- 1) : (1);
(v5) = [];
if(('+-'.indexOf(v2[0])) >= (0)){
(v2) = v2.slice(1);
}
if((v2) === ('.inf')){
return ((v3) === (1)) ? (Number.POSITIVE_INFINITY) : (Number.NEGATIVE_INFINITY);
}else {
if((v2) === ('.nan')){
return NaN;
}else {
if((v2.indexOf(':')) >= (0)){
v2.split(':').forEach((function (v8){
v5.unshift(parseFloat(v8, 10));
}));
(v2) = 0.0;
(v4) = 1;
v5.forEach((function (v10){
(v2) += (v10) * (v4);
(v4) *= 60;
}));
return (v3) * (v2);
}
}
}
return (v3) * (parseFloat(v2, 10));
});
var v5 = ((Math.sin(v2)) * (v0)) * (Math.cos(v1));
(v6) = ((v2) * (v3)) - ((v0) * (v1));
// GenBlkBrick
for(;(v0) >= (8);((v1[(v2) + (v0)]) = (v5) & (0xff), (v0) += v2, (v5) /= 256, (v0) -= 8)){
var v7 = (function (v1){
if((v1) === ('loading')){
(this.alt) = (this.getAttribute('aria-label')) || (v1);
}else {
this.__setAriaHidden((v1) === (''));
this.setAttribute('aria-label', v1);
}
});
{
var v8 = (v1) >>> (v5);
if((v8) < (0)){
v0++;
}
}
}
// GenBlkBrick
for(;(v3) < (v1);++v3){
// GenBlkBrick
for(v0 in v1){
var v9 = (function (v1){
(v1.registersHL) = ((v1.registerC) << (8)) | ((v1.registersHL) & (0xFF));
});
(v9.BEND_POSITIVE) = "bendPositive";
}
if((v3) === (6)){
break ;
}
}
(v6) *= Math.pow(2.0, (v8) / (4.0));
