var v0 = (function (v1, v2){
return (((v1) + ('[')) + (v2)) + (']');
});
(v0.DATASOURCE_RAW3D) = 10;
var v1 = (function (v1, v2, v3){
var v4 = v3(29), v5 = v3(1), v6 = v4.key, v7 = v4.map, v8 = v4.store;
v4.exp(({deleteMetadata : (function (v1, v2){
var v3 = ((arguments.length) < (3)) ? (void 0) : (v6(arguments[2])), v4 = v7(v5(v2), v3, ! 1);
if(((void 0) === (v4)) || (! v4.delete(v1))){
return ! 1;
}
if(v4.size){
return ! 0;
}
var v10 = v8.get(v2);
return (v10.delete(v3), (! ! v10.size) || (v8.delete(v2)));
})}));
});
var v2 = (function (v1, v2){
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
v0(v5, v2.geometries);
}
if(v1.skeleton){
(v2.skeletons) = (v2.skeletons) || ([]);
v2.skeletons.push(v1.skeleton.serialize());
}
(v2.meshes) = (v2.meshes) || ([]);
v2.meshes.push(v1(v1, v2));
}
});
var v3 = (function (v1, v2, v3){
(v3.exports.addEditorMenuOptions) = (function (v4){
var v5 = v1('../modelist');
var v6 = v1('../themelist');
(v4.menuOptions) = ({"setNewLineMode" : [], "setTheme" : [], "setMode" : [], "setKeyboardHandler" : []});
(v4.menuOptions.setTheme) = v6.themes.map((function (v7){
return ({'textContent' : v7.caption, 'value' : v7.theme});
}));
(v4.menuOptions.setMode) = v5.modes.map((function (v8){
return ({'textContent' : v8.name, 'value' : v8.mode});
}));
});
});
(v1.prototype.insert) = (function (v1, v2){
var v3 = v4;
var v5 = new v6(v2, v4, v4, v4, 1);
if((v1) === (this.size)){
if((v1) > (0)){
(v3) = v3(this._root, (v1) - (1));
(v3.right) = v5;
}
}else {
(v3) = v3(this._root, v1);
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
// GenBlkBrick
for(var v0 in v0){
(v0.UTC) = v2.UTC;
}
var v4 = (function (){
var v1 = this._modelViewMatrixStack.getArray();
if(! this._cameraIndexStack.getLength()){
return v1[0];
}
return v1[this._cameraModelViewIndexStack.back()];
});
