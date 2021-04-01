var v0 = (function (){
(v1.prototype) = new Array(1, 2, 3);
function v1(){
}
var v3 = new v1();
(v3.length) = '0';
function v4(){
}
var v5 = v3.every(v4);
if((v5) === (true)){
return true;
}
});
// GenBlkBrick
for(var v1 = 0;(v1) < (1000);v1++){
if((v1) === (2)){
(v2) = false;
}
var v3 = (function (v1){
if(v2){
return;
}
(v2) = true;
var v3 = v1.length;
var v4;
while(v3--){
(v4) = v1[v3];
if(this.remoteBlacklists.hasOwnProperty(v4)){
this.purgeCompiledFilterList(v4);
continue ;
}
if((v4) === (this.pslPath)){
this.assets.purge('cache://compiled-publicsuffixlist');
continue ;
}
}
this.destroySelfie();
(v2) = false;
});
}
var v4 = (function (v1, v2, v3){
"use strict";
(function (v2){
var v4 = v3(2073);
(v1.exports) = (function (v1){
return ((- 1) !== ((v1) = (v1) || (v2.navigator.userAgent).indexOf("MSIE"))) || (v4(v1));
});
}).call(this, v3(10));
});
while((v1--) > (0)){
v0();
}
(v5) = (function (){
v4();
v0();
});
Array.prototype.reduce.call(v4, v3, v1);
// GenBlkBrick
for(var v6 = 0;(v6) < (1000);v6++){
(v6) = ((v6) & (2147483647)) | (0);
if((v6) === (6)){
break ;
}
}
// GenBlkBrick
for(var v0 in v3.prototype){
var v7 = (function v7(v1, v2){
if((v2) === ('__proto__')){
if(! v0.call(v1, v2)){
return void 0;
}else {
if(v5){
return v5(v1, v2).value;
}
}
}
return v1[v2];
});
}
