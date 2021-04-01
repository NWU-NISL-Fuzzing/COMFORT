var v0 = (function (){
return this._sn_info.length;
});
(v0.Transform) = (function (v1, v2){
var v3 = new v0(new v4.Vector3(0, 0, 0), new v4.Vector3(0, 0, 0));
v0.TransformToRef(v1, v2, v3);
return v3;
});
v0(/([^aeiouy]|qu)ies$/i, "$1y");
var v1 = (function (){
(this.instanceProps) = ({});
(this.instanceProps.trigger_event) = "";
(this.instanceProps.target_distance) = "-170";
(this.instanceProps.homestreet_style) = "meadow";
});
Array.prototype.forEach.call(v0, v1);
(v1._GlobalId) = 0;
Object.defineProperty(v1.prototype, "particlesRenderTimeCounter", ({get : (function (){
return this._particlesRenderTime;
}), enumerable : true, configurable : true}));
// GenBlkBrick
for(var v0 in Array.prototype){
(v1.prototype.isCompletelyInFrustum) = (function (v1){
return this.boundingBox.isCompletelyInFrustum(v1);
});
var v2 = (function (){
"use strict";
var v1 = this.view.w, v2 = this.view.h;
var v3 = this.view.buffer;
var v4 = this.view.defaultColor;
var v5 = this.view.defaultBackground;
for(var v6 = 0;(v6) < (v2);++v6){
for(var v7 = 0;(v7) < (v1);++v7){
var v8 = v3[v6][v7];
var v9 = this.spans[v6][v7];
var v10 = ((v8.r) === (undefined)) ? (v4) : (v8.getColorRGB());
var v12 = ((v8.br) === (undefined)) ? (v5) : (v8.getBackgroundRGB());
var v13 = (v10) + (v12);
if((v13) !== (this.colors[v6][v7])){
(this.colors[v6][v7]) = v13;
(v9.style.color) = v10;
(v9.style.backgroundColor) = v12;
}
var v14 = v8.getChar();
if((v14) !== (v9.innerHTML)){
(v9.innerHTML) = v14;
}
}
}
});
}
