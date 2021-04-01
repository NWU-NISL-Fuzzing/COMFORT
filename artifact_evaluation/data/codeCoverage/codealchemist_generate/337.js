var v0 = (function (v1){
(this.orientation_) = v1;
});
(v0.prototype._prepareRessources) = (function (){
if(this._colorShader){
return;
}
(this._colorShader) = new v1.ShaderMaterial("colorShader", this._scene, "color", ({attributes : [], uniforms : []}));
var v2 = this._scene.getEngine();
var v3 = v1.VertexData.CreateBox(({size : 1.0}));
(this._vertexBuffers[v1.VertexBuffer.PositionKind]) = new v1.VertexBuffer(v2, v3.positions, v1.VertexBuffer.PositionKind, false);
this._createIndexBuffer();
});
(v0.prototype.addAmbient) = (function (v1){
var v2 = new v3.Vector3(v1.r, v1.g, v1.b);
(this.xx) = this.xx.add(v2);
(this.yy) = this.yy.add(v2);
(this.zz) = this.zz.add(v2);
});
var v1 = (v1) & (0x03FF);
(v0.prototype.update) = (function (v1){
return this._buffer.update(v1);
});
while(v1--){
new v0();
}
(v1) *= (Math.PI) / (v2);
v0(v1);
