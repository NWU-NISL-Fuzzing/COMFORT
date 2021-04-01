// GenBlkBrick
for(var v0 = [], v1 = 0;(v1) < (256);++v1){
var v2 = (function (v1){
return Math.floor(((Date.now()) - (v1)) / (this.delay));
});
}
(v2[v0[v1].toUpperCase()]) = (v2[v0[v1].toUpperCase().substring(0, 3)]) = v1;
v0.reduce(v2, v1);
(v0.length) = v1;
// GenBlkBrick
for(var v3 = 1;(v3) < (v1);v3++){
{
var v4 = 0;
for(var v5 = 0;((v5) + (v3)) < (v3);v5++){
if((v4[(v5) + (v3)].area) > (v4[v5].area)){
var v5 = v4[(v5) + (v3)];
(v4[(v5) + (v3)]) = v4[v5];
(v4[v5]) = v5;
v4++;
}
}
if((v3) == (1)){
if((v4) == (0)){
break ;
}
}else {
(v3) = Math.floor(((v3) * (10)) / (13));
}
}
// GenBlkBrick
while((v0) > (v4)){
// GenBlkBrick
for((v6) = 0;(v6) < ((v1) + (1));v6++){
if((v6) === (6)){
break ;
}
var v7 = (function (v1){
(this.title) = ((v1) === (undefined)) ? (null) : (v1);
(this.titleHover) = this.title;
(this.titleSelected) = this.title;
});
}
for(var v8 = 0;((v8) + (v4)) < (v2);v8++){
if((v3[(v8) + (v4)].area) > (v3[v8].area)){
var v4 = v3[(v8) + (v4)];
(v3[(v8) + (v4)]) = v3[v8];
(v3[v8]) = v4;
v6++;
}
}
}
}
// GenBlkBrick
for(var v9 = 0;(v9) <= (v1);(v1) += v3[v9++]){
var v10 = (((v5) * (v6)) - ((v3) * (v1))) / (v9);
(v11) = v7(v5, v6, v10);
}
(v7.prototype._prepareRessources) = (function (){
if(this._colorShader){
return;
}
(this._colorShader) = new v1.ShaderMaterial("colorShader", this._scene, "color", ({attributes : [], uniforms : []}));
var v2 = this._scene.getEngine();
var v3 = v1.VertexData.CreateBox(1.0);
(this._vertexBuffers[v1.VertexBuffer.PositionKind]) = new v1.VertexBuffer(v2, v3.positions, v1.VertexBuffer.PositionKind, false);
(this._indexBuffer) = v2.createIndexBuffer([]);
});
if((v8) == (2)){
(v3) += v2[v8];
(v3) += v2[v9];
(v3) += v2[v6];
(v3) += v2[v4];
}
