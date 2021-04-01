var v0 = (function (v1, v2, v3, v4, v5, v6){
(this.startListener) = (v1) || (null);
(this.endListener) = (v2) || (null);
(this.completeListener) = (v3) || (null);
(this.eventListener) = (v4) || (null);
(this.interruptListener) = (v5) || (null);
(this.disposeListener) = (v6) || (null);
(this.callback) = null;
(this.callbackTarget) = null;
(this.skeletonNode) = null;
});
var v1 = (function (v1, v2, v3){
(v0.call(v1, v3)) ? (v1[v3]) : ((v1[v3]) = []).push(v2);
});
Object.defineProperty(v1, "FILTER_POISSONSAMPLING", ({get : (function (){
return v1._FILTER_POISSONSAMPLING;
}), enumerable : true, configurable : true}));
// GenBlkBrick
for(var v0 in Object){
var v2 = (function (v1, v2, v3){
var v4 = v3(660), v5 = v3(385);
(v1.exports) = (function (v1){
return (((null) != (v1)) && (v5(v1.length))) && (! v4(v1));
});
});
var v3 = (function (v1){
var v2 = v3('fs');
var v4 = v3('./FeatureParser');
var v5 = new v4(v1);
(this.parse) = (function (v6, v7){
var v8 = v2.readFileSync(v6, 'utf8');
var v9 = v5.parse(v8);
return ((v7) && (v7(v9))) || (v9);
});
});
}
(v1.prototype) = ((v2) === (null)) ? (Object.create(v2)) : (((v3.prototype) = v2.prototype, new v3()));
function v4(v1, v2, v3, v4){
var v5 = (v1) + (' ');
if((v1) === (1)){
return (v5) + (v3(v1, v2, v3[0], v4));
}else {
if(v2){
return (v5) + ((v1(v1)) ? (v2(v3)[1]) : (v2(v3)[0]));
}else {
if(v4){
return (v5) + (v2(v3)[1]);
}else {
return (v5) + ((v1(v1)) ? (v2(v3)[1]) : (v2(v3)[2]));
}
}
}
}
// GenBlkBrick
for(var v0 in v0.prototype){
new v0();
}
// GenBlkBrick
for(var v0 in v1){
function v5(v1, v2, v3, v4, v5){
v1(v1, v2, (v3) || (0), (v4) || ((v1.length) - (1)), (v5) || (v0));
}
}
