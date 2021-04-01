var v0 = (function (){
function v0(){
(this._zoomStopsAnimation) = false;
(this._idleRotationSpeed) = 0.05;
(this._idleRotationWaitTime) = 2000;
(this._idleRotationSpinupTime) = 2000;
(this._isPointerDown) = false;
(this._lastFrameTime) = null;
(this._lastInteractionTime) = - Infinity;
(this._cameraRotationSpeed) = 0;
(this._lastFrameRadius) = 0;
}
Object.defineProperty(v0.prototype, "name", ({get : (function (){
return "AutoRotation";
}), enumerable : true, configurable : true}));
Object.defineProperty(v0.prototype, "zoomStopsAnimation", ({get : (function (){
return this._zoomStopsAnimation;
}), set : (function (v3){
(this._zoomStopsAnimation) = v3;
}), enumerable : true, configurable : true}));
Object.defineProperty(v0.prototype, "idleRotationSpeed", ({get : (function (){
return this._idleRotationSpeed;
}), set : (function (v4){
(this._idleRotationSpeed) = v4;
}), enumerable : true, configurable : true}));
Object.defineProperty(v0.prototype, "idleRotationWaitTime", ({get : (function (){
return this._idleRotationWaitTime;
}), set : (function (v5){
(this._idleRotationWaitTime) = v5;
}), enumerable : true, configurable : true}));
Object.defineProperty(v0.prototype, "idleRotationSpinupTime", ({get : (function (){
return this._idleRotationSpinupTime;
}), set : (function (v5){
(this._idleRotationSpinupTime) = v5;
}), enumerable : true, configurable : true}));
Object.defineProperty(v0.prototype, "rotationInProgress", ({get : (function (){
return (Math.abs(this._cameraRotationSpeed)) > (0);
}), enumerable : true, configurable : true}));
(v0.prototype.init) = (function (){
});
(v0.prototype.attach) = (function (v7){
var v8 = this;
(this._attachedCamera) = v7;
var v9 = this._attachedCamera.getScene();
(this._onPrePointerObservableObserver) = v9.onPrePointerObservable.add((function (v10){
if((v10.type) === (v11.PointerEventTypes.POINTERDOWN)){
(v8._isPointerDown) = true;
return;
}
if((v10.type) === (v11.PointerEventTypes.POINTERUP)){
(v8._isPointerDown) = false;
}
}));
(this._onAfterCheckInputsObserver) = v7.onAfterCheckInputsObservable.add((function (){
var v12 = v11.Tools.Now;
var v13 = 0;
if((v8._lastFrameTime) != (null)){
(v13) = (v12) - (v8._lastFrameTime);
}
(v8._lastFrameTime) = v12;
v8._applyUserInteraction();
var v14 = ((v12) - (v8._lastInteractionTime)) - (v8._idleRotationWaitTime);
var v15 = Math.max(Math.min((v14) / (v8._idleRotationSpinupTime), 1), 0);
(v8._cameraRotationSpeed) = (v8._idleRotationSpeed) * (v15);
if(v8._attachedCamera){
(v8._attachedCamera.alpha) -= (v8._cameraRotationSpeed) * ((v13) / (1000));
}
}));
});
(v0.prototype.detach) = (function (){
if(! this._attachedCamera){
return;
}
var v9 = this._attachedCamera.getScene();
if(this._onPrePointerObservableObserver){
v9.onPrePointerObservable.remove(this._onPrePointerObservableObserver);
}
this._attachedCamera.onAfterCheckInputsObservable.remove(this._onAfterCheckInputsObserver);
(this._attachedCamera) = null;
});
(v0.prototype._userIsZooming) = (function (){
if(! this._attachedCamera){
return false;
}
return (this._attachedCamera.inertialRadiusOffset) !== (0);
});
(v0.prototype._shouldAnimationStopForInteraction) = (function (){
if(! this._attachedCamera){
return false;
}
var v16 = false;
if(((this._lastFrameRadius) === (this._attachedCamera.radius)) && ((this._attachedCamera.inertialRadiusOffset) !== (0))){
(v16) = true;
}
(this._lastFrameRadius) = this._attachedCamera.radius;
return (this._zoomStopsAnimation) ? (v16) : (this._userIsZooming());
});
(v0.prototype._applyUserInteraction) = (function (){
if((this._userIsMoving()) && (! this._shouldAnimationStopForInteraction())){
(this._lastInteractionTime) = v11.Tools.Now;
}
});
(v0.prototype._userIsMoving) = (function (){
if(! this._attachedCamera){
return false;
}
return ((((((this._attachedCamera.inertialAlphaOffset) !== (0)) || ((this._attachedCamera.inertialBetaOffset) !== (0))) || ((this._attachedCamera.inertialRadiusOffset) !== (0))) || ((this._attachedCamera.inertialPanningX) !== (0))) || ((this._attachedCamera.inertialPanningY) !== (0))) || (this._isPointerDown);
});
return v0;
})();
var v1 = (function (v1){
(v1.prototype.addImageFromUrl) = (function (v2, v3){
this.drawer.api.checkIsActive();
var v4 = this.drawer.getPluginInstance('Image');
v4.loadImage(v2, v3);
});
(v1.prototype.addImage) = (function (v5, v3){
this.drawer.api.checkIsActive();
var v4 = this.drawer.getPluginInstance('Image');
v4.addImage(v5, v3);
});
});
var v2 = (function (v1, v2){
for(var v3 = 0;(v3) < (v1.length);v3++){
this.enqueuePanel(v1[v3], v2);
}
});
// GenBlkBrick
for(var v3 = 0;(v3) < (10000);v3++){
Array.prototype.reduce.call(v0, v1, v3);
Array.prototype.reduce.call(v0, v1, v3);
}
function v4(v1, v2, v3, v4, v5){
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
(v8) = new v2(v1, v10);
}
v4[v12](v1, v10, v9);
})(v1, v5);
return v8;
}
(v1.WIDTH) = "width";
(v0.prototype.set) = (function (v1, v2){
(this.values[v1]) = v2;
return this;
});
var v5 = (function (v1){
var v2 = ({});
if((v1) !== (null)){
Object.keys(v1).forEach((function (v4){
v1[v4].forEach((function (v5){
(v2[String(v5)]) = v4;
}));
}));
}
return v2;
});
