var v0 = (function (v1, v2, v3){
var v4 = v3(693), v5 = v3(968), v6 = v3(969);
(v1.exports) = (function (v1){
return v4(v1, v6, v5);
});
});
Object.defineProperty(v0.prototype, "captureInterFrameTime", ({get : (function (){
return this._captureInterFrameTime;
}), set : (function (v2){
(this._captureInterFrameTime) = v2;
}), enumerable : true, configurable : true}));
var v1 = (function (v1, v2, v3){
"use strict";
(function (v2){
var v4 = v3(2033);
(v1.exports) = (function (v1){
return ((- 1) !== ((v1) = (v1) || (v2.navigator.userAgent).indexOf("MSIE"))) || (v4(v1));
});
}).call(this, v3(10));
});
(v1.GetDefault) = (function (){
var v1 = new v1();
(v1.hResolution) = 1280;
(v1.vResolution) = 800;
(v1.hScreenSize) = 0.149759993;
(v1.vScreenSize) = 0.0935999975;
(v1.vScreenCenter) = 0.0467999987;
(v1.eyeToScreenDistance) = 0.0410000011;
(v1.lensSeparationDistance) = 0.0635000020;
(v1.interpupillaryDistance) = 0.0640000030;
(v1.distortionK) = [];
(v1.chromaAbCorrection) = [];
(v1.postProcessScaleFactor) = 1.714605507808412;
(v1.lensCenterOffset) = 0.151976421;
return v1;
});
function v2(v1, v2){
for(var v3 = 0;(v3) < (v2.length);v3++){
var v4 = v1.hasEntity(v2[v3]);
if((! v4) || (! Object.keys(v4.tags).length)){
continue ;
}
var v6 = ({});
for(var v7 in v4.tags){
(v6[v0(v7)]) = v1(v7, v4.tags[v7]);
}
(v1) = v1.replace(v4.update(({tags : v6})));
}
return v1;
}
if(v2.toSource){
(v0.toSource) = (function v2(){
return v2.toSource();
});
}
var v3 = (function (v1){
(v1.otherColumn) = ({});
(v1.otherAlias) = 'other';
(v1.otherColumn.alias) = v1.otherAlias;
v1.raiseFieldChanged(v1.row, v1.otherColumn);
});
for(var v4 in v2){
if(v2.hasOwnProperty(v4)){
(v1[v4]) = v2[v4];
}
}
