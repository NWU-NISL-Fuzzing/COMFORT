var v0 = (function (v1, v2, v3){
"use strict";
(function (v2){
var v4 = v3(413);
(v1.exports) = (function (v1, v3){
return ((v3) = ((void 0) !== (v3)) ? (v3) : (v2.statusbar.visible), (v4(v1)) && (v3));
});
}).call(this, v3(10));
});
var v1 = (function (v1){
v1.pointer.onContainerClick(({pageX : 100, pageY : 100}));
(v1.getSVG) = (function (){
return this.container.innerHTML;
});
});
(v2) = (function (){
v1();
v0();
});
var v3 = (function (){
this.woof.info('This is an info alert!');
});
function v4(v1, v2, v3){
var v4 = '';
var v5;
var v6 = true;
for(v5 in v1){
if(v1.hasOwnProperty(v5)){
if((v2.includeEmpty) || ((((v1[v5]) !== ('')) && ((v1[v5]) !== (null))) && ((v1[v5]) !== (undefined)))){
if(v6){
(v6) = false;
}else {
(v4) += ',\n';
}
(v4) += ((v3(v3)) + (v1(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
function v5(v1, v2, v3){
var v4 = ({'ss' : (v2) ? ('секунда_секунди_секунд') : ('секунду_секунди_секунд'), 'mm' : (v2) ? ('хвилина_хвилини_хвилин') : ('хвилину_хвилини_хвилин'), 'hh' : (v2) ? ('година_години_годин') : ('годину_години_годин'), 'dd' : 'день_дні_днів', 'MM' : 'місяць_місяці_місяців', 'yy' : 'рік_роки_років'});
if((v3) === ('m')){
return (v2) ? ('хвилина') : ('хвилину');
}else {
if((v3) === ('h')){
return (v2) ? ('година') : ('годину');
}else {
return ((v1) + (' ')) + (v4(v4[v3], + v1));
}
}
}
function v6(v1, v2, v3){
var v4 = '';
var v5;
for((v5) = 0;(v5) < (v1.length);v5++){
(v4) += v2(v3);
(v4) += v5(v1[v5], v8.delegate(v2, ({indent : v3})));
if((v5) < ((v1.length) - (1))){
(v4) += ',\n';
}
}
return v4;
}
// GenBlkBrick
for(var v0 in v4){
v4(/(bus)$/i, "$1");
Object.defineProperty(v4.prototype, "samples", ({get : (function (){
return this._renderTargetTexture.samples;
}), set : (function (v2){
(this._renderTargetTexture.samples) = v2;
}), enumerable : true, configurable : true}));
}
