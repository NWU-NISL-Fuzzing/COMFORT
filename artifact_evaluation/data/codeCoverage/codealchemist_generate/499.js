var v0 = (function (){
var v1 = ({});
var v2 = (function (){
return 1001;
});
var v3 = "data";
var v4 = (function (v5){
(v3) = v5;
});
Object.defineProperty(v1, "prop", ({get : undefined, set : v4, enumerable : false, configurable : true}));
var v8 = (typeof v1.prop) === ("undefined");
var v9 = Object.getOwnPropertyDescriptor(v1, "prop");
Object.defineProperty(v1, "prop", ({get : v2}));
var v10 = (v1.prop) === (1001);
var v11 = Object.getOwnPropertyDescriptor(v1, "prop");
return (((v8) && (v10)) && ((typeof v9.get) === ("undefined"))) && ((v11.get) === (v2));
});
var v1 = (function (v1){
this._setProperty('pause-before', v1);
});
// GenBlkBrick
for(var v2 = 0;(v2) < (3);v2++){
var v3 = (function (v1, v2, v3){
var v4 = v3(95), v5 = v3(45);
(v1.exports) = (function (v1){
return v4(v5(v1));
});
});
}
// GenBlkBrick
for(var v4 = 0;(v4) < (300);v4++){
// GenBlkBrick
while((--v5) >= (0)){
// GenBlkBrick
for(var v0 in undefined){
var v6 = (function (v1, v2, v3){
var v4 = v3(678), v5 = v3(1893), v6 = v3(206);
(v1.exports) = (function (v1){
return (v6(v1)) ? (v4(v1, ! 0)) : (v5(v1));
});
});
}
if(v0){
(v5) = v0(v5);
}
}
var v7 = (function (v1, v2, v3){
var v4 = v3(467), v5 = v3(5115), v6 = v3(5114), v7 = "[object Null]", v8 = "[object Undefined]", v9 = (v4) ? (v4.toStringTag) : (void 0);
(v1.exports) = (function (v1){
return ((null) == (v1)) ? (((void 0) === (v1)) ? (v8) : (v7)) : (((v9) && ((v9) in (Object(v1)))) ? (v5(v1)) : (v6(v1)));
});
});
}
(v1.prototype.shiftDown) = (function (v1){
var v2 = 0;
while(true){
if(((v1.left) !== (v3)) && ((v1.right) !== (v3))){
switch(v2){
}
(v2) = (1) - (v2);
}else {
if((v1.left) !== (v3)){
v7(v1, v1.left);
}else {
if((v1.right) !== (v3)){
v3(v1, v1.right);
}else {
break ;
}
}
}
}
});
(v7.prototype.dispose) = (function (v1){
(v1) = (v1) || (this._camera);
if((this._textures.length) > (0)){
for(var v2 = 0;(v2) < (this._textures.length);v2++){
this._engine._releaseTexture(this._textures.data[v2]);
}
this._textures.reset();
}
if(! v1){
return;
}
v1.detachPostProcess(this);
var v3 = v1._postProcesses.indexOf(this);
if(((v3) === (0)) && ((v1._postProcesses.length) > (0))){
this._camera._postProcesses[0].markTextureDirty();
}
this.onActivateObservable.clear();
this.onAfterRenderObservable.clear();
this.onApplyObservable.clear();
this.onBeforeRenderObservable.clear();
this.onSizeChangedObservable.clear();
});
// GenBlkBrick
for((v8) = (v8) - (1);(v5) <= (v8);){
if((v8) === (6)){
break ;
}
if((v5) === (6)){
break ;
}
}
function v9(v1, v2, v3, v4, v5){
return v6(v7(v1, v2, v3, v4), v5);
}
