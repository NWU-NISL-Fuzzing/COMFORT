var v0 = (function (v1){
return (((v1) && (v1.isSparseMatrix)) && ((v1.constructor.prototype.isMatrix) === (true))) || (false);
});
var v1 = (function (v1, v2, v3){
"use strict";
(v1.exports) = v3(1469);
});
(v0.prototype.isUpdatable) = (function (){
return this._updatable;
});
function v2(v1, v2, v3, v4){
if((v3) < (v4)){
var v5 = v1(v3, v4);
var v7 = (v3) - (1);
v0(v1, v5, v4);
var v9 = v1[v4];
for(var v10 = v3;(v10) < (v4);v10++){
if((v2(v1[v10], v9)) <= (0)){
(v7) += 1;
v0(v1, v7, v10);
}
}
v0(v1, (v7) + (1), v10);
var v11 = (v7) + (1);
v2(v1, v2, v3, (v11) - (1));
v2(v1, v2, (v11) + (1), v4);
}
}
(v2.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v1(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v1(this._root, v1);
if((v3.left) !== (v4)){
this.shiftDown(v3);
}
(v3.left) = v5;
}
(v5.parent) = v3;
this.insertLeafNode(v5);
(this._root) = v0(v5);
return v5;
});
var v3 = (function (v1, v2, v3){
var v4 = this.getSuite().getTestClasses();
for(var v5 = 0;(v5) < (v4.length);v5++){
if((v2) == (v4[v5].getName())){
var v6 = v4[v5].getTestMethods();
for(var v7 = 0;(v7) < (v6.length);v7++){
if((v3) && ((v6[v7].getName()) != (v3))){
continue ;
}
v6[v7].run(v1);
}
return;
}
}
});
var v4 = (function (v1, v2){
if(((v1.delayLoadState) === (v3.Engine.DELAYLOADSTATE_LOADED)) || ((v1.delayLoadState) === (v3.Engine.DELAYLOADSTATE_NONE))){
if(v1.material){
if((v1.material) instanceof (v3.StandardMaterial)){
(v2.materials) = (v2.materials) || ([]);
if(! v2.materials.some((function (v4){
return (v4.id) === (v1.material.id);
}))){
v2.materials.push(v1.material.serialize());
}
}else {
if((v1.material) instanceof (v3.MultiMaterial)){
(v2.multiMaterials) = (v2.multiMaterials) || ([]);
if(! v2.multiMaterials.some((function (v4){
return (v4.id) === (v1.material.id);
}))){
v2.multiMaterials.push(v1.material.serialize());
}
}
}
}
var v5 = v1._geometry;
if(v5){
if(! v2.geometries){
(v2.geometries) = ({});
(v2.geometries.boxes) = [];
(v2.geometries.spheres) = [];
(v2.geometries.cylinders) = [];
(v2.geometries.toruses) = [];
(v2.geometries.grounds) = [];
(v2.geometries.planes) = [];
(v2.geometries.torusKnots) = [];
(v2.geometries.vertexData) = [];
}
v1(v5, v2.geometries);
}
if(v1.skeleton){
(v2.skeletons) = (v2.skeletons) || ([]);
v2.skeletons.push(v1.skeleton.serialize());
}
(v2.meshes) = (v2.meshes) || ([]);
v2.meshes.push(v3(v1, v2));
}
});
(v2.prototype._prepareRessources) = (function (){
if(this._colorShader){
return;
}
(this._colorShader) = new v1.ShaderMaterial("colorShader", this._scene, "color", ({attributes : [], uniforms : []}));
var v2 = this._scene.getEngine();
var v3 = v1.VertexData.CreateBox(1.0);
(this._vertexBuffers[v1.VertexBuffer.PositionKind]) = new v1.VertexBuffer(v2, v3.positions, v1.VertexBuffer.PositionKind, false);
(this._indexBuffer) = v2.createIndexBuffer([]);
});
