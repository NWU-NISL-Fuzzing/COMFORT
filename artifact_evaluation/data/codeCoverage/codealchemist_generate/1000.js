var v0 = (function (){
return ({fill : (function (){
}), stroke : (function (){
}), beginPath : (function (){
}), clip : (function (){
}), moveTo : (function (){
}), lineTo : (function (){
}), closePath : (function (){
}), setLineDash : (function (){
}), save : (function (){
}), restore : (function (){
})});
});
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("a39460d0f6baa307386a4bb2984de363.svg");
});
v0("cow", "kine");
var v2 = Array.prototype.filter.call(v1, v0);
v2.reduceRight(v1, "initialValue");
Object.defineProperty(v2, "prop", ({get : v0, set : v1, enumerable : true, configurable : false}));
Object.defineProperty(v2, "prop", ({get : v0, set : v1, enumerable : true, configurable : false}));
Object.defineProperty(v1.prototype, "captureSpritesRenderTime", ({get : (function (){
return this._captureSpritesRenderTime;
}), set : (function (v2){
var v3 = this;
if((v2) === (this._captureSpritesRenderTime)){
return;
}
(this._captureSpritesRenderTime) = v2;
if(v2){
(this._onBeforeSpritesRenderingObserver) = this.scene.onBeforeSpritesRenderingObservable.add((function (){
v4.Tools.StartPerformanceCounter("Sprites");
v3._spritesRenderTime.beginMonitoring();
}));
(this._onAfterSpritesRenderingObserver) = this.scene.onAfterSpritesRenderingObservable.add((function (){
v4.Tools.EndPerformanceCounter("Sprites");
v3._spritesRenderTime.endMonitoring(false);
}));
}else {
this.scene.onBeforeSpritesRenderingObservable.remove(this._onBeforeSpritesRenderingObserver);
(this._onBeforeSpritesRenderingObserver) = null;
this.scene.onAfterSpritesRenderingObservable.remove(this._onAfterSpritesRenderingObserver);
(this._onAfterSpritesRenderingObserver) = null;
}
}), enumerable : true, configurable : true}));
