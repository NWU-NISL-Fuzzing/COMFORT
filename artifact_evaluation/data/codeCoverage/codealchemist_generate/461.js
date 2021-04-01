// GenBlkBrick
for((v0) = 0;(v0) < (65536);v0++){
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
// GenBlkBrick
for(var v3 = 0;(v3) < (v1);++v3){
var v4 = (function (){
if((! this.allowSleep) || (! this.sleeping)){
return;
}
(this.sleeping) = false;
(this.sleepTime) = 0;
var v1, v2, v3;
(v1) = this.contactLink.length;
while(v1--){
(v3) = this.contactLink[v1];
(v3.body.sleepTime) = 0;
(v3.body.sleeping) = false;
}
(v1) = this.jointLink.length;
while(v1--){
(v2) = this.jointLink[v1];
(v2.body.sleepTime) = 0;
(v2.body.sleeping) = false;
}
(v1) = this.shapes.length;
while(v1--){
this.shapes[v1].updateProxy();
}
});
// GenBlkBrick
for(v0 in []){
var v5 = (function (v1, v2, v3){
"use strict";
var v4 = v3(133), v5 = v3(680), v6 = v3(213), v7 = v3(307);
(v1.exports) = (function (v1){
v4(v4.S, v1, ({from : (function (v1){
var v2, v3, v4, v8, v9 = arguments[1];
return (v5(this), ((v2) = (void 0) !== (v9)) && (v5(v9)), ((void 0) == (v1)) ? (new this()) : (((v3) = [], (v2) ? (((v4) = 0, (v8) = v6(v9, arguments[2], 2), v7(v1, ! 1, (function (v1){
v3.push(v8(v1, v4++));
})))) : (v7(v1, ! 1, v3.push, v3)), new this(v3))));
})}));
});
});
}
}
}
(v6) = (v0) ? (v5(v1, v0)) : (('') + (Math.round(v1))).split('.');
Object.defineProperty(v6, "prop", ({get : v4, set : v5, enumerable : true, configurable : false}));
(v2) -= (v1) * (Math.floor((v3) / (v0)));
// GenBlkBrick
for(;(v0) >= (8);((v1[(v2) + (v0)]) = (v3) & (0xff), (v0) += v2, (v3) /= 256, (v0) -= 8)){
{
var v7 = 0;
for(var v8 = 0;((v8) + (v0)) < (v3);v8++){
if((v4[(v8) + (v0)].area) > (v4[v8].area)){
var v5 = v4[(v8) + (v0)];
(v4[(v8) + (v0)]) = v4[v8];
(v4[v8]) = v5;
v7++;
}
}
if((v0) == (1)){
if((v7) == (0)){
break ;
}
}else {
(v0) = Math.floor(((v0) * (10)) / (13));
}
}
(v0) = (v0) >>> (1);
}
for(var v9 = 0;(v9) < (v1);v9++){
v6.push(v3.at(((v9) * (2)) + (v7)));
}
// GenBlkBrick
for(;(v2) > (0);((v1[(v2) + (v8)]) = (v9) & (0xff), (v8) += v7, (v9) /= 256, (v2) -= 8)){
var v10 = ((v7) * (v9)) - ((v8) * (v2));
}
var v11 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v4, v0);
});
