var v0 = (function (){
return this.push('-trim +repage', 1);
});
(v0.ALPHA_MULTIPLIER) = "aM";
(v0.STAGE) = "stage";
(v0._getRotateMode) = (function (v1){
switch(v1.toLocaleLowerCase()){
}
});
(v0.prototype.getTransformMatrix) = (function (){
var v1 = this._scene;
if(((this._currentRenderID) === (v1.getRenderId())) && ((this._currentFaceIndexCache) === (this._currentFaceIndex))){
return this._transformMatrix;
}
(this._currentRenderID) = v1.getRenderId();
(this._currentFaceIndexCache) = this._currentFaceIndex;
var v2 = this._light.position;
v3.Vector3.NormalizeToRef(this._light.getShadowDirection(this._currentFaceIndex), this._lightDirection);
if((Math.abs(v3.Vector3.Dot(this._lightDirection, v3.Vector3.Up()))) === (1.0)){
(this._lightDirection.z) = 0.0000000000001;
}
if(this._light.computeTransformedPosition()){
(v2) = this._light.transformedPosition;
}
if(((((this._light.needRefreshPerFrame()) || (! this._cachedPosition)) || (! this._cachedDirection)) || (! v2.equals(this._cachedPosition))) || (! this._lightDirection.equals(this._cachedDirection))){
(this._cachedPosition) = v2.clone();
(this._cachedDirection) = this._lightDirection.clone();
v3.Matrix.LookAtLHToRef(v2, v2.add(this._lightDirection), v3.Vector3.Up(), this._viewMatrix);
this._light.setShadowProjectionMatrix(this._projectionMatrix, this._viewMatrix, this.getShadowMap().renderList);
this._viewMatrix.multiplyToRef(this._projectionMatrix, this._transformMatrix);
}
return this._transformMatrix;
});
(v0.SUB_TEXTURE) = "SubTexture";
var v1 = (function (v1, v2, v3){
(v1.exports) = (v3.p) + ("ff63c8cfce7f17a8f00324ab0f891acb.svg");
});
function v2(v1, v2, v3){
var v4 = '';
var v5;
var v6 = true;
for(v5 in v1){
if(v1.hasOwnProperty(v5)){
if((v2.includeEmpty) || ((((v1[v5]) !== ('')) && ((v1[v5]) !== (null))) && ((v1[v5]) !== (undefined)))){
if(v6){
(v6) = false;
}else {
(v4) += ',\n';
}
(v4) += ((v0(v3)) + (v1(v5))) + (': ');
switch(typeof v1[v5]){
}
}
}
}
return v4;
}
