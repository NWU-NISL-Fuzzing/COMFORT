var v0 = (function (v1, v2, v3){
(this.material.uniforms["tDiffuse"].value) = v3.texture;
if(this.renderToScreen){
v1.setRenderTarget(null);
this.fsQuad.render(v1);
}else {
v1.setRenderTarget(v2);
if(this.clear){
v1.clear();
}
this.fsQuad.render(v1);
}
});
// GenBlkBrick
for(var v1 = 0;(v1) > (- 1);--v1){
var v2 = (((v1) % (2)) === (0)) ? (((Math.PI) / (2.0)) + ((v1) / (2.0))) : ((Math.PI) / (2.0));
{
(v2) += 4;
}
}
(v0.prototype.clear) = (function (){
(this.objects) = [];
});
(v0.prototype.render) = (function (){
var v1 = (this.alphaTest) ? (this._alphaTestEffect) : (this._effect);
if(((! v1.isReady()) || (! this.texture)) || (! this.texture.isReady())){
return;
}
var v2 = this._scene.getEngine();
this.onBeforeRenderObservable.notifyObservers(this);
v2.enableEffect(v1);
v2.setState(false);
v1.setTexture("textureSampler", this.texture);
v1.setMatrix("textureMatrix", this.texture.getTextureMatrix());
v1.setFloat4("color", this.color.r, this.color.g, this.color.b, this.color.a);
v1.setVector2("offset", this.offset);
v1.setVector2("scale", this.scale);
v2.bindBuffers(this._vertexBuffers, this._indexBuffer, v1);
if(! this.alphaTest){
v2.setAlphaMode(this.alphaBlendingMode);
v2.draw(true, 0, 6);
v2.setAlphaMode(v3.Engine.ALPHA_DISABLE);
}else {
v2.draw(true, 0, 6);
}
this.onAfterRenderObservable.notifyObservers(this);
});
while(v1--){
new v0();
}
v0(v2);
// GenBlkBrick
for((v3) = 0;(v3) < (v1);++v3){
(v3) = (v3) * (v3);
}
(v4) = v0(v2, v3, v1);
