var v0 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("dfc29b9acfcee8e172a892340d9a351b.svg");
});
(v0.prototype.visitIndex) = (function (v1){
return v1.update(this.visit(v1.obj), this.visitMany(v1.args));
});
var v1 = (function (v1, v2, v3){
"use strict";
var v4 = v3(72), v5 = v3(1916), v6 = v3(25);
(v1.exports) = ({create : v6((function (v1){
return v4.verify(({name : "Vault Manager", client : v1.client})).then((function (){
return new v5(v1);
}));
})), VERSION : "3.28.0"});
});
(v1.prototype._executeCurrent) = (function (v1){
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
Object.defineProperty(v1.prototype, "captureParticlesRenderTime", ({get : (function (){
return this._captureParticlesRenderTime;
}), set : (function (v2){
var v3 = this;
if((v2) === (this._captureParticlesRenderTime)){
return;
}
(this._captureParticlesRenderTime) = v2;
if(v2){
(this._onBeforeParticlesRenderingObserver) = this.scene.onBeforeParticlesRenderingObservable.add((function (){
v4.Tools.StartPerformanceCounter("Particles");
v3._particlesRenderTime.beginMonitoring();
}));
(this._onAfterParticlesRenderingObserver) = this.scene.onAfterParticlesRenderingObservable.add((function (){
v4.Tools.EndPerformanceCounter("Particles");
v3._particlesRenderTime.endMonitoring(false);
}));
}else {
this.scene.onBeforeParticlesRenderingObservable.remove(this._onBeforeParticlesRenderingObserver);
(this._onBeforeParticlesRenderingObserver) = null;
this.scene.onAfterParticlesRenderingObservable.remove(this._onAfterParticlesRenderingObserver);
(this._onAfterParticlesRenderingObserver) = null;
}
}), enumerable : true, configurable : true}));
// GenBlkBrick
for(var v2 = 3;(v2) >= (0);v2--){
function v3(v1, v2, v3, v4){
v2++;
return (v1) + (v2);
}
// GenBlkBrick
for(var v4 = 10;(v4) > (5);v4--){
var v5 = (function (){
var v1 = this.readByte();
(v1) += (this.readByte()) << (8);
var v2 = this.readByte(), v3 = this.readByte();
(v1) += ((v2) & (127)) << (16);
var v4 = (((v3) & (127)) << (1)) | (((v2) & (128)) >>> (7)), v5 = ((v3) & (128)) ? (- 1) : (1);
if((v4) === (255)){
return ((v1) !== (0)) ? (NaN) : ((v5) * (Infinity));
}
if((v4) > (0)){
return ((v5) * ((1) + ((v1) * (this.TWO_POW_MINUS23)))) * (Math.pow(2, (v4) - (127)));
}
if((v1) !== (0)){
return ((v5) * (v1)) * (this.TWO_POW_MINUS126);
}
return (v5) * (0);
});
}
}
(v5.prototype.addPendingItem) = (function (){
});
(v6) = (v4) ? (v5(v2, v4)) : (('') + (Math.round(v2))).split('.');
