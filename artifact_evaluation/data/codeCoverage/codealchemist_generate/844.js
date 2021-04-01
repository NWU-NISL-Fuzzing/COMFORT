var v0 = (function (v1){
return (((v1) === (0)) || ((v1) === (1))) ? (v1) : (((- 1) * (Math.cos(((v1) * (Math.PI)) / (2)))) + (1));
});
(v0.prototype._onAdd) = (function (v1){
this._onAssetAdd.call(this._scope, this.propertyName, this.parent, v1);
});
// GenBlkBrick
for((v1) = 0;(v1) < (v1);(v1) += 1){
(v1) >>= 8;
}
(v0.renderSorted) = (function (v1, v2, v3, v4){
var v5 = 0;
var v6;
var v7 = (v3) ? (v3.globalPosition) : (v8.Vector3.Zero());
for(;(v5) < (v1.length);v5++){
(v6) = v1.data[v5];
(v6._alphaIndex) = v6.getMesh().alphaIndex;
(v6._distanceToCamera) = v6.getBoundingInfo().boundingSphere.centerWorld.subtract(v7).length();
}
var v9 = v1.data.slice(0, v1.length);
if(v2){
v9.sort(v2);
}
for((v5) = 0;(v5) < (v9.length);v5++){
(v6) = v9[v5];
if(v4){
var v10 = v6.getMaterial();
if((v10) && (v10.needDepthPrePass)){
var v11 = v10.getScene().getEngine();
v11.setColorWrite(false);
v11.setAlphaTesting(true);
v11.setAlphaMode(v8.Engine.ALPHA_DISABLE);
v6.render(false);
v11.setAlphaTesting(false);
v11.setColorWrite(true);
}
}
v6.render(v4);
}
});
{
if((v1) & (1)){
(v1) = (3988292384) ^ ((v1) >>> (1));
}else {
(v1) = (v1) >>> (1);
}
}
(v0.COLOR) = "color";
var v2 = (function (v1, v2, v3){
Array.prototype.reduce.call(arguments, v0, v1);
});
while((v1--) > (0)){
v2();
}
