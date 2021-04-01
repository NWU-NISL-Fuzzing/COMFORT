var v0 = (function (){
return this.maxResolution_;
});
var v1 = (function (v1, v2, v3){
var v4 = v3(298);
(v1.exports) = (function (v1){
var v2 = this.__data__, v3 = v4(v2, v1);
return ((v3) < (0)) ? (void 0) : (v2[v3][1]);
});
});
(v1.prototype._incRefCount) = (function (){
if((this._refCount) === (0)){
this._scene.customRenderTargets.push(this._renderTexture);
}
return ++this._refCount;
});
var v2 = (function (v1, v2, v3){
'use strict';
var v4 = v1('./DOMProperty');
var v5 = v1('./EventPluginHub');
var v6 = v1('./ReactComponentEnvironment');
var v7 = v1('./ReactClass');
var v8 = v1('./ReactEmptyComponent');
var v9 = v1('./ReactBrowserEventEmitter');
var v10 = v1('./ReactNativeComponent');
var v11 = v1('./ReactPerf');
var v12 = v1('./ReactRootIndex');
var v13 = v1('./ReactUpdates');
var v14 = ({Component : v6.injection, Class : v7.injection, DOMProperty : v4.injection, EmptyComponent : v8.injection, EventPluginHub : v5.injection, EventEmitter : v9.injection, NativeComponent : v10.injection, Perf : v11.injection, RootIndex : v12.injection, Updates : v13.injection});
(v2.exports) = v14;
});
var v3 = (function (v1, v2, v3){
var v4 = v3(35);
(v1.exports) = (Array.isArray) || ((function (v1){
return ("Array") == (v4(v1));
}));
});
var v4 = (function v4(v1, v2){
if((v2) === ('__proto__')){
if(! v1.call(v1, v2)){
return void 0;
}else {
if(v0){
return v0(v1, v2).value;
}
}
}
return v1[v2];
});
// GenBlkBrick
while((v0) && ((v0) != (v1))){
(v1.SerializeMesh) = (function (v1, v2, v3){
if((v2) === (void 0)){
(v2) = false;
}
if((v3) === (void 0)){
(v3) = false;
}
var v4 = ({});
(v1) = ((v1) instanceof (Array)) ? (v1) : ([]);
if((v2) || (v3)){
for(var v6 = 0;(v6) < (v1.length);++v6){
if(v3){
v1[v6].getDescendants().forEach((function (v7){
if(((v7) instanceof (v8.Mesh)) && ((v1.indexOf(v7)) < (0))){
v1.push(v7);
}
}));
}
if(((v2) && (v1[v6].parent)) && ((v1.indexOf(v1[v6].parent)) < (0))){
v1.push(v1[v6].parent);
}
}
}
v1.forEach((function (v9){
v3(v9, v4);
}));
return v4;
});
// GenBlkBrick
for((v5) = 0;(v5) < (v1);v5++){
--v5;
}
}
Array.prototype.reduce.call(v1, v0, v5);
