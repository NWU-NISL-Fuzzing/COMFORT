// GenBlkBrick
while((v0) < (- 8)){
// GenBlkBrick
for(var v0 in []){
var v0 = (function (v1, v2){
'use strict';
(v1.exports) = (function (v3){
return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(v3);
});
});
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = v3(24), v5 = v4(({bubbled : null, captured : null})), v6 = v4(({topAbort : null, topBlur : null, topCanPlay : null, topCanPlayThrough : null, topChange : null, topClick : null, topCompositionEnd : null, topCompositionStart : null, topCompositionUpdate : null, topContextMenu : null, topCopy : null, topCut : null, topDoubleClick : null, topDrag : null, topDragEnd : null, topDragEnter : null, topDragExit : null, topDragLeave : null, topDragOver : null, topDragStart : null, topDrop : null, topDurationChange : null, topEmptied : null, topEncrypted : null, topEnded : null, topError : null, topFocus : null, topInput : null, topKeyDown : null, topKeyPress : null, topKeyUp : null, topLoad : null, topLoadedData : null, topLoadedMetadata : null, topLoadStart : null, topMouseDown : null, topMouseMove : null, topMouseOut : null, topMouseOver : null, topMouseUp : null, topPaste : null, topPause : null, topPlay : null, topPlaying : null, topProgress : null, topRateChange : null, topReset : null, topScroll : null, topSeeked : null, topSeeking : null, topSelectionChange : null, topStalled : null, topSubmit : null, topSuspend : null, topTextInput : null, topTimeUpdate : null, topTouchCancel : null, topTouchEnd : null, topTouchMove : null, topTouchStart : null, topVolumeChange : null, topWaiting : null, topWheel : null})), v7 = ({topLevelTypes : v6, PropagationPhases : v5});
(v1.exports) = v7;
});
}
(v1.prototype.attach) = (function (v1){
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
}
// GenBlkBrick
for((v2) = 0;(v2) < (v1);++v2){
for(var v3 = 0;(v3) <= (v2);v3++){
v0(v3);
}
}
(v1.prototype.concat) = (function (v1){
if((v1.length) === (0)){
return;
}
if(((this.length) + (v1.length)) > (this.data.length)){
(this.data.length) = ((this.length) + (v1.length)) * (2);
}
for(var v2 = 0;(v2) < (v1.length);v2++){
(this.data[this.length++]) = (v1.data) || (v1)[v2];
}
});
(v4) = (v3) ? (v1(v2, v3)) : (('') + (Math.round(v2))).split('.');
function v5(v1, v2){
var v3 = ({dx : v1.v, dv : v0(v1)}), v5 = v1(v1, (v2) * (0.5), v3), v7 = v1(v1, (v2) * (0.5), v5), v8 = v1(v1, v2, v7), v9 = ((1.0) / (6.0)) * (((v3.dx) + ((2.0) * ((v5.dx) + (v7.dx)))) + (v8.dx)), v10 = ((1.0) / (6.0)) * (((v3.dv) + ((2.0) * ((v5.dv) + (v7.dv)))) + (v8.dv));
(v1.x) = (v1.x) + ((v9) * (v2));
(v1.v) = (v1.v) + ((v10) * (v2));
return v1;
}
{
for(var v0 in v4){
(v0) = 0;
(v3) += v4[v0];
}
}
v4.reduce(v1, v2);
(v0[v4[v2]]) = (v0[v4[v2].substring(0, 3)]) = v1(v2);
