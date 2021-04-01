var v0 = (function (v1, v2, v3){
var v4 = v3(5196);
(v1.exports) = (function (v1, v2){
for(var v3 = v1.length;v3--;){
if(v4(v1[v3][0], v2)){
return v3;
}
}
return - 1;
});
});
v0(/(hive)$/i, "$1s");
(v0._GetTargetProperty) = (function (v1){
return ({name : "target", targetType : ((v1) instanceof (v2.Mesh)) ? ("MeshProperties") : (((v1) instanceof (v2.Light)) ? ("LightProperties") : (((v1) instanceof (v2.Camera)) ? ("CameraProperties") : ("SceneProperties"))), value : ((v1) instanceof (v2.Scene)) ? ("Scene") : (v1.name)});
});
(v0.SHARE) = "share";
var v1 = (function (){
var v1 = [], v2, v3;
for(v3 in this._grid){
if(this._grid.hasOwnProperty(v3)){
(v2) = this._grid[v3];
v1.push(({name : v3, count : v2.count(), linked : ((v2.isLinked) !== (undefined)) ? (v2.isLinked()) : (false)}));
}
}
return v1;
});
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
(v0.SerializeMesh) = (function (v1, v2, v3){
if((v2) === (void 0)){
(v2) = false;
}
if((v3) === (void 0)){
(v3) = false;
}
var v4 = ({});
(v1) = ((v1) instanceof (Array)) ? (v1) : ([]);
if((v2) || (v3)){
for(var v6 = 0;(v6) < (v1.length);++v6){
if(v3){
v1[v6].getDescendants().forEach((function (v7){
if(((v7) instanceof (v8.Mesh)) && ((v1.indexOf(v7)) < (0))){
v1.push(v7);
}
}));
}
if(((v2) && (v1[v6].parent)) && ((v1.indexOf(v1[v6].parent)) < (0))){
v1.push(v1[v6].parent);
}
}
}
v1.forEach((function (v9){
v1(v9, v4);
}));
return v4;
});
(v0.renderSorted) = (function (v1, v2, v3, v4){
var v5 = 0;
var v6;
for(;(v5) < (v1.length);v5++){
(v6) = v1.data[v5];
(v6._alphaIndex) = v6.getMesh().alphaIndex;
(v6._distanceToCamera) = v6.getBoundingInfo().boundingSphere.centerWorld.subtract(v3).length();
}
var v7 = v1.data.slice(0, v1.length);
v7.sort(v2);
for((v5) = 0;(v5) < (v7.length);v5++){
(v6) = v7[v5];
v6.render(v4);
}
});
