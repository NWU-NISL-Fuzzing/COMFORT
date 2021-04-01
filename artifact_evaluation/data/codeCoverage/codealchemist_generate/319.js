var v0 = (function (v1){
var v2 = this;
var v3 = v2.options.offset;
var v4 = Math.max((v2._ticks.length) - ((v3) ? (0) : (1)), 1);
var v6 = v2.isHorizontal();
var v7 = ((v6) ? (v2.width) : (v2.height)) / (v4);
var v8;
(v1) -= (v6) ? (v2.left) : (v2.top);
if(v3){
(v1) -= (v7) / (2);
}
if((v1) <= (0)){
(v8) = 0;
}else {
(v8) = Math.round((v1) / (v7));
}
return (v8) + (v2.minIndex);
});
var v1 = (function (){
return this.getProxy().create(this);
});
function v2(v1, v2, v3, v4, v5){
if(! v5){
(v5) = v1(null);
}
(v5.minX) = Infinity;
(v5.minY) = Infinity;
(v5.maxX) = - Infinity;
(v5.maxY) = - Infinity;
for(var v8 = v2, v9;(v8) < (v3);v8++){
(v9) = v1.children[v8];
v0(v5, (v1.leaf) ? (v4(v9)) : (v9));
}
return v5;
}
(v2.prototype.isSupported) = (function (){
var v1 = (this.test()) ? (this.trueBranch) : (this.falseBranch);
return v1.isSupported();
});
function v3(v1, v2){
if(! v2){
(v2) = v3.base;
}
var v4 = v2(v2);
for(var v6 in v1){
(v4[v6]) = v1[v6];
}
return v4;
}
function v4(){
var v1 = v2('#textInput'), v3 = v2('#results');
var v4, v5 = '';
var v6 = (function (){
var v7 = v2(this).val();
if((v4) && ((v4.state()) === ('pending'))){
v4.reject(({statusText : 'abort'}));
}
if((v7) !== (v5)){
(v5) = v7;
v3.empty();
(v4) = v3(v5, 3);
v4.then((function (v9){
var v10 = v9[1];
v2.each(v10, (function (v11, v12){
v2((('<li>') + (v12)) + ('</li>')).appendTo(v3);
}));
}), (function (v13){
if((v13.statusText) !== ('abort')){
v2((('<li>') + (v13.statusText)) + ('</li>')).appendTo(v3);
}
}));
}
});
v1.keyup(v2(v6, 500));
}
(v3.parse) = v2.parse;
var v5 = (function (v1, v2){
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
v3(v5, v2.geometries);
}
if(v1.skeleton){
(v2.skeletons) = (v2.skeletons) || ([]);
v2.skeletons.push(v1.skeleton.serialize());
}
(v2.meshes) = (v2.meshes) || ([]);
v2.meshes.push(v4(v1, v2));
}
});
