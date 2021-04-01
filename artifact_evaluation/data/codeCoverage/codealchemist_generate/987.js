var v0 = (function (){
if(this.rook_attack){
this.rook_attack.stopAttack();
}
});
var v1 = (function (){
this.setState(this.source_.getState());
});
function v2(){
return v0();
}
(v1.prototype.getRenderTexture) = (function (){
return this._renderTexture;
});
var v3 = (v2.prototype) = new v0();
Object.defineProperty(v3, "prop", ({get : v2, set : v0, enumerable : false, configurable : true}));
// GenBlkBrick
for(var v0 in []){
(v1.prototype._render) = (function (){
var v1 = this.ray;
if(! v1){
return;
}
var v2 = this._renderPoints[1];
var v3 = Math.min(v1.length, 1000000);
v2.copyFrom(v1.direction);
v2.scaleInPlace(v3);
v2.addInPlace(v1.origin);
v5.Mesh.CreateLines("ray", this._renderPoints, this._scene, true, this._renderLine);
});
}
if(((v0) - (v1)) > (0)){
(v3.thereYet) = v0;
(v3.cap) = v1;
}
