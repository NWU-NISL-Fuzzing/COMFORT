var v0 = (function (){
this.emit('drain');
if(this._closeOnDrain){
this.close();
}
});
Object.defineProperty(v0, "MatricesWeightsKind", ({get : (function (){
return v0._MatricesWeightsKind;
}), enumerable : true, configurable : true}));
(v0.prototype.identity) = (function (){
(this.alphaMultiplier) = (this.redMultiplier) = (this.greenMultiplier) = (this.blueMultiplier) = 1.0;
(this.alphaOffset) = (this.redOffset) = (this.greenOffset) = (this.blueOffset) = 0;
});
(v0.prototype._createIndexBuffer) = (function (){
var v1 = this._scene.getEngine();
var v2 = [];
v2.push(0);
v2.push(1);
v2.push(2);
v2.push(0);
v2.push(2);
v2.push(3);
(this._indexBuffer) = v1.createIndexBuffer(v2);
});
// GenBlkBrick
for((v1) = 0;(v1) < (1e3);v1++){
var v2 = ((v1) + (v2)) / (v1);
var v3 = (function (){
return this._totalReceived;
});
}
var v4 = ((- v1) + (v1)) / (v2);
while((v2--) > (0)){
v3();
}
(v5) = (v4) ? (v0(v2, v4)) : (('') + (Math.round(v2))).split('.');
