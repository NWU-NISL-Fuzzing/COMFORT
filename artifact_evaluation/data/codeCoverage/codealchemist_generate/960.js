var v0 = (function (){
if(this.printService){
this.printService.destroy();
(this.printService) = null;
}
this.forceRendering();
});
(v0.BindLightProperties) = (function (v1, v2, v3){
if((v1) instanceof (v4.PointLight)){
v1.transferToEffect(v2, ("vLightData") + (v3));
}else {
if((v1) instanceof (v4.DirectionalLight)){
v1.transferToEffect(v2, ("vLightData") + (v3));
}else {
if((v1) instanceof (v4.SpotLight)){
v1.transferToEffect(v2, ("vLightData") + (v3), ("vLightDirection") + (v3));
}else {
if((v1) instanceof (v4.HemisphericLight)){
v1.transferToEffect(v2, ("vLightData") + (v3), ("vLightGround") + (v3));
}
}
}
}
});
var v1 = (function (v1, v2, v3){
var v4 = v3(922), v5 = v3(4), v6 = v3(363)("metadata"), v7 = (v6.store) || ((v6.store) = new v3(919)()), v8 = (function (v1, v2, v3){
var v5 = v7.get(v1);
if(! v5){
if(! v3){
return;
}
v7.set(v1, (v5) = new v4());
}
var v6 = v5.get(v2);
if(! v6){
if(! v3){
return;
}
v5.set(v2, (v6) = new v4());
}
return v6;
});
(v1.exports) = ({store : v7, map : v8, has : (function (v1, v2, v3){
var v4 = v8(v2, v3, ! 1);
return ((void 0) !== (v4)) && (v4.has(v1));
}), get : (function (v1, v2, v3){
var v4 = v8(v2, v3, ! 1);
return ((void 0) === (v4)) ? (void 0) : (v4.get(v1));
}), set : (function (v1, v2, v3, v4){
v8(v3, v4, ! 0).set(v1, v2);
}), keys : (function (v1, v2){
var v3 = v8(v1, v2, ! 1), v4 = [];
return ((v3) && (v3.forEach((function (v1, v2){
v4.push(v2);
}))), v4);
}), key : (function (v1){
return (((void 0) === (v1)) || (("symbol") == (typeof v1))) ? (v1) : (String(v1));
}), exp : (function (v1){
v5(v5.S, "Reflect", v1);
})});
});
var v2 = (function (v1, v2, v3){
"use strict";
var v4 = v3(62), v5 = v3(148), v6 = v3(40);
(v1.exports) = (function (v1){
for(var v2 = v4(this), v3 = v6(v2.length), v7 = arguments.length, v9 = v5(((v7) > (1)) ? (arguments[1]) : (void 0), v3), v10 = ((v7) > (2)) ? (arguments[2]) : (void 0), v11 = ((void 0) === (v10)) ? (v3) : (v5(v10, v3));(v11) > (v9);){
(v2[v9++]) = v1;
}
return v2;
});
});
// GenBlkBrick
while(typeof 11){
var v3 = (function (v1, v2){
if(('string') === (typeof v1)){
return (v2) == (v1);
}else {
if((v1) && (('function') === (typeof v1.exec))){
return v1.exec(v2);
}else {
if(('boolean') === (typeof v1)){
return v1;
}else {
if(('function') === (typeof v1)){
return v1(v2);
}
}
}
}
return false;
});
{
(v3.now) = (function v1(){
return v3.clock.now;
});
}
}
// GenBlkBrick
for(var v4 = 1;(v4) <= (v1);v4++){
(v4) = (v4) * (v4);
// GenBlkBrick
while((v0) && (v1)){
// GenBlkBrick
for(var v5 = 0;(v5) < (12);v5++){
var v6 = (function (v1, v2, v3){
return ((((((("<div class='ui-header ui-bar-") + (v2)) + ("'>")) + ("<h1 class='ui-title'>")) + (v1)) + ("</h1>")) + (this.style_btn([]))) + ("</div>");
});
}
}
}
// GenBlkBrick
while((v0) != (null)){
var v7 = (function (v1, v2, v3){
'use strict';
(v2.exports) = (function (v4){
return ((v4) === (v4.window)) ? (v4) : (((v4.nodeType) === (9)) ? ((v4.defaultView) || (v4.parentWindow)) : (false));
});
});
}
// GenBlkBrick
for((v8) = 0;(v8) < (v5);v8++){
if((v5) < (0)){
(v5) += 1;
}
}
