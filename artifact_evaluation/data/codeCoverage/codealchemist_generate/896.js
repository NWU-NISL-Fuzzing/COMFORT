var v0 = (function (v1, v2, v3){
"use strict";
v3.r(v2);
(v2["default"]) = "a-default2";
});
var v1 = (function (v1, v2, v3){
var v4 = v3(428), v5 = v3(2129), v6 = v3(2128), v7 = v3(2127), v8 = v3(2126), v9 = "[object Boolean]", v10 = "[object Date]", v11 = "[object Map]", v12 = "[object Number]", v13 = "[object RegExp]", v14 = "[object Set]", v15 = "[object String]", v16 = "[object Symbol]", v17 = "[object ArrayBuffer]", v18 = "[object DataView]", v19 = "[object Float32Array]", v20 = "[object Float64Array]", v21 = "[object Int8Array]", v22 = "[object Int16Array]", v23 = "[object Int32Array]", v24 = "[object Uint8Array]", v25 = "[object Uint8ClampedArray]", v26 = "[object Uint16Array]", v27 = "[object Uint32Array]";
(v1.exports) = (function (v1, v2, v3){
var v28 = v1.constructor;
switch(v2){
}
});
});
(v1.prototype.render) = (function (v1, v2, v3){
var v4 = this;
if((v3) === (void 0)){
(v3) = false;
}
var v5 = this._scene;
var v6 = this._scene.getEngine();
var v7 = ((v6.getCaps().instancedArrays) && ((v2.visibleInstances[v1._id]) !== (null))) && ((v2.visibleInstances[v1._id]) !== (undefined));
if(! this.isReady(v1, v7)){
return;
}
var v9 = v1.getRenderingMesh();
var v10 = v1.getMaterial();
if((! v10) || (! v5.activeCamera)){
return;
}
v6.enableEffect(this._effect);
if(v10.useLogarithmicDepth){
this._effect.setFloat("logarithmicDepthConstant", (2.0) / ((Math.log((v5.activeCamera.maxZ) + (1.0))) / (Math.LN2)));
}
this._effect.setFloat("offset", (v3) ? (0) : (v9.outlineWidth));
this._effect.setColor4("color", (v3) ? (v9.overlayColor) : (v9.outlineColor), (v3) ? (v9.overlayAlpha) : (v10.alpha));
this._effect.setMatrix("viewProjection", v5.getTransformMatrix());
if(((v9.useBones) && (v9.computeBonesUsingShaders)) && (v9.skeleton)){
this._effect.setMatrices("mBones", v9.skeleton.getTransformMatrices(v9));
}
v9._bind(v1, this._effect, v12.Material.TriangleFillMode);
if((v10) && (v10.needAlphaTesting())){
var v13 = v10.getAlphaTestTexture();
if(v13){
this._effect.setTexture("diffuseSampler", v13);
this._effect.setMatrix("diffuseMatrix", v13.getTextureMatrix());
}
}
v6.setZOffset(- this.zOffset);
v9._processRendering(v1, this._effect, v12.Material.TriangleFillMode, v2, v7, (function (v14, v15){
v4._effect.setMatrix("world", v15);
}));
v6.setZOffset(0);
});
var v2 = (function (v1, v2){
return v1.replace(/\$\{([\w.]+)}/g, (function (v3, v4){
return v2.get(v4);
}));
});
(v2.prototype._triggerPopupShow) = (function (){
this.drawerInstance.trigger(this.drawerInstance.EVENT_OVERCANVAS_POPUP_SHOW);
});
(v2.prototype.remove) = (function (v1){
var v2 = this._animatebles.indexOf(v1);
if((v2) >= (0)){
(this._animatebles[v2]) = null;
(v1.clock) = null;
}
});
var v3 = (function (v1, undefined){
(v1.effects.effect.slide) = (function (v3, v4){
var v5 = v1(this), v6 = [], v7 = v1.effects.setMode(v5, (v3.mode) || ("show")), v8 = (v7) === ("show"), v9 = (v3.direction) || ("left"), v10 = (((v9) === ("up")) || ((v9) === ("down"))) ? ("top") : ("left"), v11 = ((v9) === ("up")) || ((v9) === ("left")), v12, v13 = ({});
v1.effects.save(v5, v6);
v5.show();
(v12) = (v3.distance) || (v5[((v10) === ("top")) ? ("outerHeight") : ("outerWidth")](true));
v1.effects.createWrapper(v5).css(({overflow : "hidden"}));
if(v8){
v5.css(v10, (v11) ? ((isNaN(v12)) ? (("-") + (v12)) : (- v12)) : (v12));
}
(v13[v10]) = ((v8) ? ((v11) ? ("+=") : ("-=")) : ((v11) ? ("-=") : ("+="))) + (v12);
v5.animate(v13, ({queue : false, duration : v3.duration, easing : v3.easing, complete : (function (){
if((v7) === ("hide")){
v5.hide();
}
v1.effects.restore(v5, v6);
v1.effects.removeWrapper(v5);
v4();
})}));
});
});
var v4 = (function (v1, v2, v3){
var v4 = v1('cordova/modulemapper');
v4.defaults('cordova/plugin/battery', 'navigator.battery');
});
