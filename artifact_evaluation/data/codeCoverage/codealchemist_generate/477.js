var v0 = (function (v1){
return v1._createRenderCmd();
});
// GenBlkBrick
for(var v1 = 0;(v1) < (12);v1++){
// GenBlkBrick
for(var v2 = 0;(v2) < (100);++v2){
// GenBlkBrick
for(var v3 = - 5;(v3) < (v1);v3++){
var v4 = (function (v1, v2){
return (((v2) >>> (0)) > (4294967172)) & (1);
});
if((v3) === (2)){
(v5) = false;
}
}
}
}
// GenBlkBrick
for((v6) = 1;(v6) < (10);v6++){
// GenBlkBrick
for(var v0 in []){
function v7(){
}
}
var v8 = (function (v1, v2, v3){
var v4 = "references ";
if((typeof v1) == ('string')){
return (((v4) + ('"')) + (v1)) + ('"');
}
(v4) += (('"') + (v1.table)) + ('"');
if(v1.column){
(v4) += (('("') + (v1.column)) + ('")');
}
if(v1.onDelete){
(v4) += (' on delete ') + (v1.onDelete);
}
if(v1.onUpdate){
(v4) += (' on update ') + (v1.onUpdate);
}
if(v1.match){
(v4) += (' match ') + (v1.match);
}
return v4;
});
}
// GenBlkBrick
while((++v2) < (v1)){
{
(v2) >>= 8;
(v1) += 8;
}
{
var v9 = 0;
for(var v10 = 0;((v10) + (v2)) < (v3);v10++){
if((v4[(v10) + (v2)].area) > (v4[v10].area)){
var v5 = v4[(v10) + (v2)];
(v4[(v10) + (v2)]) = v4[v10];
(v4[v10]) = v5;
v9++;
}
}
if((v2) == (1)){
if((v9) == (0)){
break ;
}
}else {
(v2) = Math.floor(((v2) * (10)) / (13));
}
}
}
(v7.prototype._swapAndDie) = (function (v1){
(v1._webGLTexture) = this._webGLTexture;
if(this._framebuffer){
(v1._framebuffer) = this._framebuffer;
}
if(this._depthStencilBuffer){
(v1._depthStencilBuffer) = this._depthStencilBuffer;
}
if(this._lodTextureHigh){
if(v1._lodTextureHigh){
v1._lodTextureHigh.dispose();
}
(v1._lodTextureHigh) = this._lodTextureHigh;
}
if(this._lodTextureMid){
if(v1._lodTextureMid){
v1._lodTextureMid.dispose();
}
(v1._lodTextureMid) = this._lodTextureMid;
}
if(this._lodTextureLow){
if(v1._lodTextureLow){
v1._lodTextureLow.dispose();
}
(v1._lodTextureLow) = this._lodTextureLow;
}
var v2 = this._engine.getLoadedTexturesCache();
var v3 = v2.indexOf(this);
if((v3) !== (- 1)){
v2.splice(v3, 1);
}
});
var v11 = (function (v1, v2, v3){
var v4 = v3(773), v5 = v3(483), v6 = "[object AsyncFunction]", v7 = "[object Function]", v8 = "[object GeneratorFunction]", v9 = "[object Proxy]";
(v1.exports) = (function (v1){
if(! v5(v1)){
return ! 1;
}
var v2 = v4(v1);
return ((((v2) == (v7)) || ((v2) == (v8))) || ((v2) == (v6))) || ((v2) == (v9));
});
});
(v12) = ((v2) * (v9)) - ((v3) * (v10));
v4(v2);
