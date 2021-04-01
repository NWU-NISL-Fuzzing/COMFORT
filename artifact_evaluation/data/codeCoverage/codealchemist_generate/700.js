var v0 = (function (){
var v1 = this._toRemove.length;
while(v1--){
this.removeBody(this._toRemove[v1]);
}
(this._toRemove.length) = 0;
});
(v0.prototype.roar) = (function (v1){
return ('RAWWW: ') + (v1);
});
// GenBlkBrick
for(var v0 in Array.prototype){
var v1 = (function (v1, v2, v3){
var v4 = v3(683), v5 = v3(436), v6 = v3(237);
(v1.exports) = (function (v1){
return v4(v1, v6, v5);
});
});
}
var v2 = (function (v1, v2, v3){
(v1.exports) = v3(1881)();
});
(v0.prototype.remove) = (function (v1){
if((v1) >= (this._root.size)){
return v2;
}
var v3 = v2(this._root, v1);
return this.removeNode(v3);
});
Object.defineProperty(v0.prototype, "onApply", ({set : (function (v2){
if(this._onApplyObserver){
this.onApplyObservable.remove(this._onApplyObserver);
}
(this._onApplyObserver) = this.onApplyObservable.add(v2);
}), enumerable : true, configurable : true}));
var v3 = (function (v1){
var v2 = Object.keys((v1.errors) || (({})));
var v4 = v2.length;
var v5 = [];
var v6;
for(var v7 = 0;(v7) < (v4);++v7){
(v6) = v2[v7];
if((v1) === (v1.errors[v6])){
continue ;
}
v5.push(((v6) + (': ')) + (v1.errors[v6].message));
}
return v5.join(', ');
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
v0(v5, v2.geometries);
}
if(v1.skeleton){
(v2.skeletons) = (v2.skeletons) || ([]);
v2.skeletons.push(v1.skeleton.serialize());
}
(v2.meshes) = (v2.meshes) || ([]);
v2.meshes.push(v3(v1, v2));
}
});
