var v0 = (function (){
return this.uriLengthLimit_;
});
var v1 = (function (v1, v2, v3){
(function (v4){
'use strict';
var v5 = ({});
if((v4.env.NODE_ENV) !== ('production')){
(v5) = ({prop : 'prop', context : 'context', childContext : 'child context'});
}
(v1.exports) = v5;
}).call(v2, v3(4));
});
function v2(v1, v2, v3, v4){
if((v3) < (v4)){
var v5 = v1(v3, v4);
var v7 = (v3) - (1);
v0(v1, v5, v4);
var v9 = v1[v4];
for(var v10 = v3;(v10) < (v4);v10++){
if((v2(v1[v10], v9)) <= (0)){
(v7) += 1;
v0(v1, v7, v10);
}
}
v0(v1, (v7) + (1), v10);
var v11 = (v7) + (1);
v2(v1, v2, v3, (v11) - (1));
v2(v1, v2, (v11) + (1), v4);
}
}
(v0.prototype.emptyPasses) = (function (){
(this._renderPasses) = ({});
this._linkParameters();
});
(v3) = 6.28;
// GenBlkBrick
while(v0){
var v4 = (function (v1){
var v2 = null;
var v3 = null;
var v4 = 0;
if((this.slen) == (v1)){
this.showString(this.vwr.showTimeout(null));
return;
}
for(var v5 = v1;(v5) < (this.slen);v5++){
switch(this.getToken(v5).tok){
}
}
if(! this.chk){
this.vwr.setTimeout(v2, v4, v3);
}
});
}
if(((v5) = (v1) >>> (16)) != (0)){
(v1) = v5;
(v3) += 16;
}
(v4.prototype.attach) = (function (v1){
var v2 = this;
(this._attachedCamera) = v1;
var v3 = this._attachedCamera.getScene();
(this._onPrePointerObservableObserver) = v3.onPrePointerObservable.add((function (v4){
if((v4.type) === (v5.PointerEventTypes.POINTERDOWN)){
(v2._isPointerDown) = true;
return;
}
if((v4.type) === (v5.PointerEventTypes.POINTERUP)){
(v2._isPointerDown) = false;
}
}));
(this._onAfterCheckInputsObserver) = v1.onAfterCheckInputsObservable.add((function (){
var v6 = v5.Tools.Now;
var v7 = 0;
if((v2._lastFrameTime) != (null)){
(v7) = (v6) - (v2._lastFrameTime);
}
(v2._lastFrameTime) = v6;
v2._applyUserInteraction();
var v8 = ((v6) - (v2._lastInteractionTime)) - (v2._idleRotationWaitTime);
var v9 = Math.max(Math.min((v8) / (v2._idleRotationSpinupTime), 1), 0);
(v2._cameraRotationSpeed) = (v2._idleRotationSpeed) * (v9);
if(v2._attachedCamera){
(v2._attachedCamera.alpha) -= (v2._cameraRotationSpeed) * ((v7) / (1000));
}
}));
});
