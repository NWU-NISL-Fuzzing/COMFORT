var v0 = (function (v1, v2, v3){
"use strict";
v3(65)("bold", (function (v1){
return (function (){
return v1(this, "b", "", "");
});
}));
});
// GenBlkBrick
for((v1) = 0;(v1) < ((v1) + (1));v1++){
if((v1) === (6)){
break ;
}
if((v1) === (6)){
break ;
}
}
(v0.prototype.render) = (function (v1, v2, v3){
var v4 = this;
if((v3) === (void 0)){
(v3) = false;
}
var v5 = this._scene;
var v6 = this._scene.getEngine();
var v7 = (((v6.getCaps().instancedArrays) !== (null)) && ((v2.visibleInstances[v1._id]) !== (null))) && ((v2.visibleInstances[v1._id]) !== (undefined));
if(! this.isReady(v1, v7)){
return;
}
var v9 = v1.getRenderingMesh();
var v10 = v1.getMaterial();
v6.enableEffect(this._effect);
this._effect.setFloat("offset", (v3) ? (0) : (v9.outlineWidth));
this._effect.setColor4("color", (v3) ? (v9.overlayColor) : (v9.outlineColor), (v3) ? (v9.overlayAlpha) : (1.0));
this._effect.setMatrix("viewProjection", v5.getTransformMatrix());
if((v9.useBones) && (v9.computeBonesUsingShaders)){
this._effect.setMatrices("mBones", v9.skeleton.getTransformMatrices(v9));
}
v9._bind(v1, this._effect, v11.Material.TriangleFillMode);
if((v10) && (v10.needAlphaTesting())){
var v12 = v10.getAlphaTestTexture();
this._effect.setTexture("diffuseSampler", v12);
this._effect.setMatrix("diffuseMatrix", v12.getTextureMatrix());
}
v9._processRendering(v1, this._effect, v11.Material.TriangleFillMode, v2, v7, (function (v13, v14){
v4._effect.setMatrix("world", v14);
}));
});
if((v1) < (0)){
(v1) += (2) * (Math.PI);
}
while((v1--) > (0)){
v0();
}
// GenBlkBrick
for(var v2 = 0;(v2) < (100);v2++){
var v3 = Math.floor((v2) / ((1000) * (60)));
if((v2) === (6)){
break ;
}
}
var v4 = Math.max(Math.ceil(((v2) - (v3)) / (v1)), 0);
(v0.prototype._createElements) = (function (){
var v1 = true, v2 = '<div class="image-crop-wrapper hidden"></div>', v3 = v4(v2), v5;
if(v1){
(v5) = this.drawer.$canvasEditContainer;
}else {
(v5) = v4('body');
}
v5.append(v3);
(this.drawer.$cropperContainer) = v3;
(this.$cropperContainer) = v3;
});
