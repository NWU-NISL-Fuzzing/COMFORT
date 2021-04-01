var v0 = (function (){
return this.getPropertyValue('-webkit-mask-size');
});
var v1 = (function (v1, v2, v3){
var v4 = v3(5014);
(v1.exports) = (function (v1){
return ((null) == (v1)) ? ("") : (v4(v1));
});
});
// GenBlkBrick
for(var v2 = 0, v3 = 0, v4 = 0, v5 = 0, v6 = 0, v7 = (1) / (3), v8 = 0;(v8) < (v7);++v8){
// GenBlkBrick
for(;(v8) > (0);((v1[(v2) + (v5)]) = (v7) & (0xff), (v5) += v3, (v7) /= 256, (v8) -= 8)){
// GenBlkBrick
for(var v0 in v1){
if((v3) !== (0)){
(v2) /= v3;
(v5) /= v3;
(v4) /= v3;
}
if((v2) !== (0)){
(v5) /= v2;
(v3) /= v2;
(v8) /= v2;
}
}
var v9 = (function (){
return this.dataStore.queryRecord('user', ({id : 'me'}));
});
}
(v10) = v9(v3, v4, v2);
}
v1(v9, v0);
Array.prototype.reduce.call(v9, v0, v2);
var v11 = (function (v1, v2){
this.messenger_.send('setRGB', ({'color' : v1}), v2);
});
while((v8--) > (0)){
v0();
}
(v12) = (v8) ? (v11(v4, v8)) : (('') + (Math.round(v4))).split('.');
