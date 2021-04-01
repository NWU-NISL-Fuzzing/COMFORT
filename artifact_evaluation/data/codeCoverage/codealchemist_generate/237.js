var v0 = (function (v1){
var v2 = this[0];
return ((v2) != (null)) && (v2._private.classes.has(v1));
});
var v1 = (function (v1, v2, v3){
var v4 = this;
v4.beforeUpdate();
(v4.maxWidth) = v1;
(v4.maxHeight) = v2;
(v4.margins) = v3;
v4.beforeSetDimensions();
v4.setDimensions();
v4.afterSetDimensions();
v4.beforeBuildLabels();
v4.buildLabels();
v4.afterBuildLabels();
v4.beforeFit();
v4.fit();
v4.afterFit();
v4.afterUpdate();
return v4.minSize;
});
(v0.UTC) = v1.UTC;
Object.defineProperty(Object.prototype, "constructor", ({get : v0, set : v1, configurable : true}));
(v0.DEFAULT_INSTANCE) = undefined;
var v2 = (function (v1, v2, v3){
var v4 = v3(3);
v4(v4.S, "Number", ({isInteger : v3(525)}));
});
// GenBlkBrick
for(var v0 in v2){
(v2.prototype._get_model) = (function (){
return ({notebook : this.notebook_model, kernel : this.kernel_model});
});
}
(v2.prototype.setTransparencyShadow) = (function (v1){
(this._transparencyShadow) = v1;
});
