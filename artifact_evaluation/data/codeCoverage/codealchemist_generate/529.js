var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v1(26), v5 = v1(43);
(v2.exports) = (function (v1){
var v2 = Object(v5(v1));
return ((v2) !== (v1)) ? (v2) : (v4(({}), v1));
});
});
var v1 = (function (){
this.addType('uuid', (function (v1){
if((v1) === (null)){
return null;
}
if((v1) === (undefined)){
return null;
}
return v1.toString();
}), ({migration : [], operators : ({defaults : []})}));
});
var v2 = (function (v1){
if(this._componentContainer){
return this._componentContainer.remove(v1);
}
return false;
});
function v3(v1, v2, v3, v4, v5){
(v3) = v1(v3);
if(! v4){
(v4) = v7.base;
}
var v8;
(function v9(v1, v10, v11){
if((v1.start) > (v2)){
return;
}
var v12 = (v11) || (v1.type);
if((((v1.end) <= (v2)) && ((! v8) || ((v8.node.end) < (v1.end)))) && (v3(v12, v1))){
(v8) = new v0(v1, v10);
}
v4[v12](v1, v10, v9);
})(v1, v5);
return v8;
}
var v4 = (function (v1, v2, v3){
var v4 = v3(253), v5 = v3(104)("iterator"), v6 = Array.prototype;
(v1.exports) = (function (v1){
return ((void 0) !== (v1)) && (((v4.Array) === (v1)) || ((v6[v5]) === (v1)));
});
});
// GenBlkBrick
for(((v5) = 0, (v1) = v2);(v5) < (v1);++v5){
// GenBlkBrick
while(true){
var v6 = (function (v1, v2, v3){
"use strict";
var v4 = v3(0), v5 = v3(46)(1);
v4((v4.P) + ((v4.F) * (! v3(36)([].map, ! 0))), "Array", ({map : (function (v1){
return v5(this, v1, arguments[1]);
})}));
});
(v6.prototype._resizeCropWrapper) = (function (){
var v1 = this.drawer.toolbars.cropImageToolbar, v2 = ((v1) && (v1.$toolbar)) && (v1.$toolbar.height()), v3 = (this.cropper) && (this.cropper.$element);
if(v3){
v3.css('top', (v2) || (0));
}
if((v2) && ((v2) > (0))){
(this.cropContainerSizesUpdated) = true;
}
});
}
Object.defineProperty(v6.prototype, "blurBoxOffset", ({get : (function (){
return this._blurBoxOffset;
}), set : (function (v2){
var v3 = this;
if((this._blurBoxOffset) === (v2)){
return;
}
(this._blurBoxOffset) = v2;
if(this._boxBlurPostprocess){
this._boxBlurPostprocess.dispose();
}
(this._boxBlurPostprocess) = new v4.PostProcess("DepthBoxBlur", "depthBoxBlur", [], [], (1.0) / (this.blurScale), null, v4.Texture.BILINEAR_SAMPLINGMODE, this._scene.getEngine(), false, ("#define OFFSET ") + (v2));
this._boxBlurPostprocess.onApplyObservable.add((function (v5){
v5.setFloat2("screenSize", (v3._mapSize) / (v3.blurScale), (v3._mapSize) / (v3.blurScale));
}));
}), enumerable : true, configurable : true}));
}
(v0.ROTATE_OFFSET) = "rotateOffset";
++v5;
