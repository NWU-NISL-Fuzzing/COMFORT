var v0 = (function (v1, v2, v3){
"use strict";
var v4 = v3(357)(! 0);
(v1.exports) = (function (v1, v2, v3){
return (v2) + ((v3) ? (v4(v1, v2).length) : (1));
});
});
(v0.superclass) = v1;
(v0.prototype._executeCurrent) = (function (v1){
if(this._nextActiveAction._condition){
var v2 = this._nextActiveAction._condition;
var v3 = this._actionManager.getScene().getRenderId();
if((v2._evaluationId) === (v3)){
if(! v2._currentResult){
return;
}
}else {
(v2._evaluationId) = v3;
if(! v2.isValid()){
(v2._currentResult) = false;
return;
}
(v2._currentResult) = true;
}
}
this.onBeforeExecuteObservable.notifyObservers(this);
this._nextActiveAction.execute(v1);
this.skipToNextActiveAction();
});
(v0.prototype.update) = (function (v1){
this.create(v1);
});
var v1 = (function (v1){
if(v1){
return "yes";
}else {
return "no";
}
});
var v2 = (function (v1){
this._setProperty('-webkit-flex-direction', v1);
});
function v3(v1, v2, v3, v4, v5){
v1(v1, v2, (v3) || (0), (v4) || ((v1.length) - (1)), (v5) || (v2));
}
(v1.prototype.bind) = (function (v1, v2, v3){
var v4 = this;
v1.call(this, v2, v3);
v2.on('close', (function (v5){
v4._handleSelectOnClose(v5);
}));
});
