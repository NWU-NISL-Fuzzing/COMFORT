var v0 = (function (v1, v2, v3){
(v1.exports) = v3(421).PassThrough;
});
var v1 = (function (v1){
if((typeof v1) === ('string')){
return (v1.length) === (0);
}
return (v1.byteLength) === (0);
});
(v0.prototype.clear) = (function (){
for(var v1 = 0, v2 = this._animatebles;(v1) < (v2.length);v1++){
var v3 = v2[v1];
if((v3) !== (null)){
(v3.clock) = null;
}
}
});
(v0.COMPATIBLE_VERSION) = "compatibleVersion";
var v2 = (function (){
var v1 = this._modelViewMatrixStack.getArray();
if(! this._cameraIndexStack.getLength()){
return v1[0];
}
return v1[this._cameraModelViewIndexStack.back()];
});
(v2.prototype) = v0.prototype;
(v2.prototype) = v1.prototype;
var v3 = (function (){
return this.getPropertyValue('-webkit-transition-duration');
});
