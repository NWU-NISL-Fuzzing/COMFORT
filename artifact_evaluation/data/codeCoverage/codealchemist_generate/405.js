var v0 = (function (v1, v2, v3){
var v4 = v3(727), v5 = v3(725);
(v1.exports) = (function (v1){
return (((null) != (v1)) && (v5(v1.length))) && (! v4(v1));
});
});
(v0.prototype._init) = (function (){
(this.enabled) = (this.drawer.options.enableImageCrop) && (v1.ImageCropPlugin);
if(this.enabled){
var v2 = this._setupCropOptions();
this._removeElements();
this._createElements();
(this.cropper) = new v1.ImageCropPlugin(this.drawer, this.$cropperContainer, v2);
}
});
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("5988fb83bc918e0c67298ddae5649b17.svg");
});
if((v2) === (undefined)){
(v2) = [];
}else {
(v2[0]) = (v2[1]) = v2;
}
// GenBlkBrick
for(var v0 in v0.prototype){
Object.defineProperty(v0.prototype, "captureAnimationsTime", ({get : (function (){
return this._captureAnimationsTime;
}), set : (function (v2){
var v3 = this;
if((v2) === (this._captureAnimationsTime)){
return;
}
(this._captureAnimationsTime) = v2;
if(v2){
(this._onAfterAnimationsObserver) = this.scene.onAfterAnimationsObservable.add((function (){
v3._animationsTime.endMonitoring();
}));
}else {
this.scene.onAfterAnimationsObservable.remove(this._onAfterAnimationsObserver);
(this._onAfterAnimationsObserver) = null;
}
}), enumerable : true, configurable : true}));
}
var v3 = (function (){
var v1 = 0;
v2.from.getOuterEdges().forEach((function (v3){
if((v3.label) === (v4.label)){
++v1;
}
}));
if((v1) > (1)){
v2.push(v2.from);
}
(v2) = v2.next;
});
var v4 = (function (v1, v2, v3){
var v4 = v3(5), v5 = v3(493);
v4((v4.S) + ((v4.F) * ((Number.parseInt) != (v5))), "Number", ({parseInt : v5}));
});
var v5 = v2.filter(v3);
