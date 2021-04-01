var v0 = (function (v1, v2, v3){
var v4 = v3(393);
(v1.exports) = (function (v1, v2){
for(var v3 = v1.length;v3--;){
if(v4(v1[v3][0], v2)){
return v3;
}
}
return - 1;
});
});
Object.defineProperty(v0.prototype, "captureRenderTargetsRenderTime", ({get : (function (){
return this._captureRenderTargetsRenderTime;
}), set : (function (v2){
var v3 = this;
if((v2) === (this._captureRenderTargetsRenderTime)){
return;
}
(this._captureRenderTargetsRenderTime) = v2;
if(v2){
(this._onBeforeRenderTargetsRenderObserver) = this.scene.OnBeforeRenderTargetsRenderObservable.add((function (){
v4.Tools.StartPerformanceCounter("Render targets rendering");
v3._renderTargetsRenderTime.beginMonitoring();
}));
(this._onAfterRenderTargetsRenderObserver) = this.scene.OnAfterRenderTargetsRenderObservable.add((function (){
v4.Tools.EndPerformanceCounter("Render targets rendering");
v3._renderTargetsRenderTime.endMonitoring(false);
}));
}else {
this.scene.OnBeforeRenderTargetsRenderObservable.remove(this._onBeforeRenderTargetsRenderObserver);
(this._onBeforeRenderTargetsRenderObserver) = null;
this.scene.OnAfterRenderTargetsRenderObservable.remove(this._onAfterRenderTargetsRenderObserver);
(this._onAfterRenderTargetsRenderObserver) = null;
}
}), enumerable : true, configurable : true}));
var v1 = "(?:x(?:-[a-z0-9]{1,8})+)";
v0(new RegExp((((("(") + (v1.substr(0, 1))) + (")")) + (v1.substr(1))) + ("$"), "i"), ('$1') + (v1.substr(1)));
v0(new RegExp((((("(") + (v1.substr(0, 1))) + (")")) + (v1.substr(1))) + ("$"), "i"), ('$1') + (v1.substr(1)));
v0(new RegExp((((("(") + (v1.substr(0, 1))) + (")")) + (v1.substr(1))) + ("$"), "i"), ('$1') + (v1.substr(1)));
v0(new RegExp(((v1.substr(0, 1).toLowerCase()) + (v1.substr(1))) + ("$")), (v1.substr(0, 1).toLowerCase()) + (v1.substr(1)));
(v0.getSphericalPolynomialFromHarmonics) = (function (v1){
var v2 = new v0();
(v2.x) = v1.L11.scale(1.02333);
(v2.y) = v1.L1_1.scale(1.02333);
(v2.z) = v1.L10.scale(1.02333);
(v2.xx) = v1.L00.scale(0.886277).subtract(v1.L20.scale(0.247708)).add(v1.L22.scale(0.429043));
(v2.yy) = v1.L00.scale(0.886277).subtract(v1.L20.scale(0.247708)).subtract(v1.L22.scale(0.429043));
(v2.zz) = v1.L00.scale(0.886277).add(v1.L20.scale(0.495417));
(v2.yz) = v1.L2_1.scale(0.858086);
(v2.zx) = v1.L21.scale(0.858086);
(v2.xy) = v1.L2_2.scale(0.858086);
v2.scale((1.0) / (Math.PI));
return v2;
});
