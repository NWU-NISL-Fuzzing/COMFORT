// GenBlkBrick
while((v0) && ((v0) != (v1))){
var v0 = (function (v1){
(this.pos.y) = v1;
});
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("7d35aff4d4f5ee86fae1ed0b230d62e7.svg");
});
}
var v2 = (function (v1, v2, v3){
"use strict";
(function (v2){
var v4 = v3(180);
(v1.exports) = (function (v1){
return ((v1) = (v1) || (v2.navigator.userAgent), (! ! v4(v1)) && ((! ! (function (v1){
return /\bGSA\b/.test(v1);
})(v1)) || (/.+AppleWebKit(?!.*Safari)/.test(v1))));
});
}).call(this, v3(7));
});
(v2.FRAME) = "frame";
var v3 = (function (v1){
Math.round(v1);
});
var v4 = (function v4(v1){
if((! v1) || ((v3.call(v1)) !== ('[object Object]'))){
return false;
}
var v3 = v0.call(v1, 'constructor');
var v5 = ((v1.constructor) && (v1.constructor.prototype)) && (v0.call(v1.constructor.prototype, 'isPrototypeOf'));
if(((v1.constructor) && (! v3)) && (! v5)){
return false;
}
var v6;
for(v6 in v1){
}
return ((typeof v6) === ('undefined')) || (v0.call(v1, v6));
});
(v0.prototype.path) = (function v1(){
var v2, v3, v4, v5, v6, v7;
function v8(v6, v1){
if(v1(v1)){
for(((v4) = 0, (v5) = v1.length);(v4) < (v5);++v4){
v6.push(v1[v4]);
}
}else {
v6.push(v1);
}
}
if(! this.__current.path){
return null;
}
(v6) = [];
for(((v2) = 2, (v3) = this.__leavelist.length);(v2) < (v3);++v2){
(v7) = this.__leavelist[v2];
v8(v6, v7.path);
}
v8(v6, this.__current.path);
return v6;
});
Array.prototype.forEach.call(v3, v1);
if(v1.now){
(v4.now) = (function v2(){
return v4.clock.now;
});
}
